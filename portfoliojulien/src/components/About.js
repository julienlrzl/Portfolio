import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="main-content">
      <div id="about" className="container-fluid h-100 div-about">
        <div className="col-md-5 div-text-about">
          {" "}
          <span className="contact-pre-title">{t("aboutTitle0")}</span>
          <h1 className="contact-title space">{t("aboutTitle1")}</h1>
          <p>
            {t("aboutText0")}
            <br />
            <br />
            {t("aboutText1")}
            <br />
            <br />
            {t("aboutText2")}
            <br />
          </p>
          <div className="space-top about-buttons">
            <a
              href="https://tryhackme.com/p/julienlrzl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="contact-button">
                <span className="button_top">TryHackMe</span>
              </button>
            </a>
            <a
              href="https://www.root-me.org/julien_lrzl?lang=fr#dce7c2e7d4bad52dc829e500ce0aac5c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="contact-button">
                <span className="button_top">Root-me</span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-md-7 space-top">
          <div className="card terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot dot-red">
                  <svg className="dot-icon" viewBox="0 0 12 12"><path d="M3.5 3.5l5 5M8.5 3.5l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </span>
                <span className="terminal-dot dot-yellow">
                  <svg className="dot-icon" viewBox="0 0 12 12"><path d="M2.5 6h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </span>
                <span className="terminal-dot dot-green">
                  <svg className="dot-icon" viewBox="0 0 12 12"><path d="M3 9V3h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M9 3L3 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </span>
              </div>
              <span className="terminal-title">julien@kali — bash</span>
            </div>

            <div className="terminal-body">
<pre className="terminal-pre"><code><span className="t-prompt">julien@kali</span><span className="t-sep">:</span><span className="t-path">~</span><span className="t-dollar"> $ </span><span className="t-cmd">whoami</span>{"\n"}{"julien — cybersecurity student"}{"\n"}{"\n"}<span className="t-prompt">julien@kali</span><span className="t-sep">:</span><span className="t-path">~</span><span className="t-dollar"> $ </span><span className="t-cmd">./scan_skills.sh</span>{"\n"}<span className="t-output-header">{"[*] Scanning skills..."}</span>{"\n"}<span className="t-output-header">{"[+] Scan complete — 3 categories found"}</span>{"\n"}{"\n"}<span className="t-section">{"  CYBERSECURITY"}</span>{"\n"}<span className="t-bar">{"  ├── "}</span>{"OWASP ZAP"}{"\n"}<span className="t-bar">{"  ├── "}</span>{"Burp Suite"}{"\n"}<span className="t-bar">{"  ├── "}</span>{"Suricata "}<span className="t-dim">{"(IDS/IPS)"}</span>{"\n"}<span className="t-bar">{"  ├── "}</span>{"ELK Stack"}{"\n"}<span className="t-bar">{"  ├── "}</span>{"syslog-ng"}{"\n"}<span className="t-bar">{"  └── "}</span>{"Autopsy"}{"\n"}{"\n"}<span className="t-section">{"  TECHNOLOGIES"}</span>{"\n"}<span className="t-bar">{"  ├── "}</span>{"Python"}{"\n"}<span className="t-bar">{"  ├── "}</span>{"Java"}{"\n"}<span className="t-bar">{"  ├── "}</span>{"SQL"}{"\n"}<span className="t-bar">{"  ├── "}</span>{"AWS"}{"\n"}<span className="t-bar">{"  ├── "}</span>{"Git"}{"\n"}<span className="t-bar">{"  ├── "}</span>{"Docker"}{"\n"}<span className="t-bar">{"  ├── "}</span>{"YAML"}{"\n"}<span className="t-bar">{"  └── "}</span>{"ARM "}<span className="t-dim">{"(notions)"}</span>{"\n"}{"\n"}<span className="t-section">{"  NETWORKS & SYSTEMS"}</span>{"\n"}<span className="t-bar">{"  ├── "}</span>{"TCP/IP · Routage · DNS · HTTP"}{"\n"}<span className="t-bar">{"  └── "}</span>{"Linux · Windows · macOS"}{"\n"}{"\n"}<span className="t-hint">{"# a flag was lost somewhere it shouldn't be... try /404"}</span>{"\n"}{"\n"}<span className="t-prompt">julien@kali</span><span className="t-sep">:</span><span className="t-path">~</span><span className="t-dollar"> $ </span><span className="t-cursor"></span></code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
