import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/useTheme";
import Navigation from "../components/Navigation";

const terminalLines = [
  { cmd: "$ curl -I /this-page", delay: 0 },
  { cmd: "HTTP/1.1 404 Not Found", delay: 800, isOutput: true },
  { cmd: "$ sudo find / -name 'page' --recursive", delay: 1800 },
  { cmd: "find: Permission denied", delay: 2600, isOutput: true },
  { cmd: "$ nmap -sV target", delay: 3600 },
  { cmd: "0 open ports — nothing to see here.", delay: 4400, isOutput: true },
  { cmd: "$ echo $?", delay: 5400 },
  { cmd: "1 (exit: failure)", delay: 5900, isOutput: true },
];

const NotFound = () => {
  const { isDarkTheme } = useTheme();
  const { t } = useTranslation();
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return;
    const timer = setTimeout(
      () => setVisibleLines((v) => v + 1),
      terminalLines[visibleLines].delay -
        (visibleLines > 0 ? terminalLines[visibleLines - 1].delay : 0)
    );
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <div className={isDarkTheme ? "dark-mode" : ""}>
      <Navigation variant="project" />
      <div className="not-found">
        <div className="not-found-content">
          <h1 className="not-found-code">
            4<span className="Highlight">0</span>4
          </h1>
          <p className="not-found-message">{t("notFoundMessage")}</p>

          <div className="not-found-terminal">
            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <p
                key={i}
                className={
                  line.isOutput ? "terminal-output" : "terminal-cmd"
                }
              >
                {line.cmd}
              </p>
            ))}
            {visibleLines < terminalLines.length && (
              <span className="terminal-cursor">_</span>
            )}
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
