/**
 * Interactive Terminal Emulator Component
 * Allows visitors / recruiters to explore the portfolio via CLI commands.
 */

document.addEventListener("DOMContentLoaded", () => {
  const terminalModal = document.getElementById("terminal-modal");
  const terminalLauncherBtn = document.getElementById("terminal-launcher-btn");
  const terminalCloseBtn = document.getElementById("terminal-close-btn");
  const terminalInput = document.getElementById("terminal-cli-input");
  const terminalOutput = document.getElementById("terminal-cli-output");

  if (!terminalModal || !terminalLauncherBtn) return;

  // Toggle terminal modal
  function toggleTerminal(force) {
    const isOpen = typeof force === "boolean" ? force : !terminalModal.classList.contains("is-open");
    if (isOpen) {
      terminalModal.classList.add("is-open");
      terminalInput.focus();
    } else {
      terminalModal.classList.remove("is-open");
    }
  }

  terminalLauncherBtn.addEventListener("click", () => toggleTerminal());
  if (terminalCloseBtn) {
    terminalCloseBtn.addEventListener("click", () => toggleTerminal(false));
  }

  // Keyboard shortcut Ctrl + K or Backquote `~` to toggle terminal
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey && e.key.toLowerCase() === "k") || (e.key === "`" && document.activeElement !== terminalInput && !document.activeElement.matches("input, textarea"))) {
      e.preventDefault();
      toggleTerminal();
    }
  });

  const commands = {
    help: () => `
<div style="color: var(--accent-cyan); font-weight: 600;">Available Commands:</div>
  <span style="color: #67e8f9;">bio</span> / <span style="color: #67e8f9;">about</span>     - About Nguyen Tan Thang & background
  <span style="color: #67e8f9;">skills</span>          - Technical skills & framework matrix
  <span style="color: #67e8f9;">projects</span>        - Featured engineering projects
  <span style="color: #67e8f9;">exp</span>             - Work experience & internships
  <span style="color: #67e8f9;">certs</span>           - Verified credentials & awards
  <span style="color: #67e8f9;">socials</span>         - Social channels & links
  <span style="color: #67e8f9;">contact</span>         - Email & contact details
  <span style="color: #67e8f9;">theme &lt;dark|light&gt;</span> - Switch website theme
  <span style="color: #67e8f9;">matrix</span>          - Trigger cyber matrix rain
  <span style="color: #67e8f9;">clear</span>           - Clear terminal window
  <span style="color: #f43f5e;">sudo hire-me</span>    - Direct recruitment fast-track!
`,
    bio: () => `
<b>Nguyen Tan Thang</b> - Software Engineer
Student at <b>HCMUS</b> (VNU-HCM University of Science) | Expected Graduation: 2027
Focus: Backend Architecture, Cloud Platforms, and Scalable APIs.
Location: Ho Chi Minh City, Vietnam.
`,
    skills: () => `
<b>[Languages]</b>: Java, Python, JavaScript, TypeScript, SQL, HTML/CSS, C/C++
<b>[Frameworks]</b>: Spring Boot, React, Next.js, FastAPI, Node.js, Tailwind CSS
<b>[Cloud & Infra]</b>: Docker, AWS, Google Cloud, Vercel, Nginx, CI/CD, Linux
<b>[Data & Workflow]</b>: PostgreSQL, MongoDB, MySQL, Git/GitHub, Postman, REST APIs
`,
    projects: () => `
1. <b>ThreatLens</b>: Threat intelligence & CVE management (Python, React, Node, MongoDB, Docker)
   GitHub: <a href="https://github.com/thtcsec/ThreatLens" target="_blank" style="color: var(--accent-cyan);">github.com/thtcsec/ThreatLens</a>
2. <b>EduVault</b>: Scalable online learning platform (Spring Boot, Next.js, PostgreSQL, Docker, AWS)
   Status: Live deployed on Cloud Run
3. <b>Online Auction System</b>: Real-time bidding & commerce (React, Node.js, PostgreSQL, Tailwind)
   GitHub: <a href="https://github.com/hungtmh/online-auction-system" target="_blank" style="color: var(--accent-cyan);">github.com/hungtmh/online-auction-system</a>
`,
    exp: () => `
<b>Netcompany</b> - IT Accelerator Intern (Jul 2026 – Present)
- Developing After Dark Management Application (ADMA) back-office solution.
- Agile lifecycle, architecture design, database modeling, MVP workflows.
`,
    certs: () => `
- <b>The Complete Full-Stack Web Development Bootcamp</b> (Udemy, 2025)
- <b>Agentic Coding: Full-Stack Java Apps with Cursor and Copilot</b> (Udemy, 2026)
- <b>Gemini Certified Student</b> (Google, 2026)
- <b>Top 10 Datathon 2026</b> (GenCore Team)
`,
    socials: () => `
- <b>GitHub</b>: <a href="https://github.com/thangak18" target="_blank" style="color: var(--accent-cyan);">github.com/thangak18</a>
- <b>LinkedIn</b>: <a href="https://www.linkedin.com/in/th%E1%BA%AFng-nguy%E1%BB%85n-598741283/" target="_blank" style="color: var(--accent-cyan);">linkedin.com/in/thang-nguyen</a>
- <b>LeetCode</b>: <a href="https://leetcode.com/u/thangnguyen23/" target="_blank" style="color: var(--accent-cyan);">leetcode.com/u/thangnguyen23</a>
- <b>Facebook</b>: <a href="https://www.facebook.com/nguyen.thang.739214/" target="_blank" style="color: var(--accent-cyan);">fb.com/nguyen.thang.739214</a>
`,
    contact: () => `
Email: <a href="mailto:thangak18@gmail.com" style="color: var(--accent-cyan);">thangak18@gmail.com</a>
Open for: Software Engineering Roles, Backend/Full-stack Internships & Collaborations.
`,
    matrix: () => {
      terminalOutput.innerHTML += `<div style="color: #22c55e;">[INITIALIZING CYBERSTREAM MATRIX...]</div>`;
      let count = 0;
      const interval = setInterval(() => {
        const stream = Array(40).fill(0).map(() => String.fromCharCode(33 + Math.floor(Math.random() * 90))).join(" ");
        terminalOutput.innerHTML += `<div style="color: #22c55e; opacity: 0.8; font-size: 0.75rem;">${stream}</div>`;
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        count++;
        if (count > 12) {
          clearInterval(interval);
          terminalOutput.innerHTML += `<div style="color: var(--accent-cyan);">[MATRIX STREAM COMPLETE]</div>`;
        }
      }, 100);
      return "";
    },
    sudo: (args) => {
      if (args.includes("hire-me")) {
        return `
<div style="color: #22c55e; font-weight: 700;">[ACCESS GRANTED: RECRUITMENT FAST-TRACK]</div>
<p>Thank you for your interest! Let's build extraordinary software together.</p>
<p>Direct contact: <a href="mailto:thangak18@gmail.com" style="color: var(--accent-cyan);">thangak18@gmail.com</a></p>
<p>Phone/Zalo: Available on resume.</p>
`;
      }
      return `<div style="color: #ef4444;">sudo: permission denied or unknown command</div>`;
    }
  };

  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const fullInput = terminalInput.value.trim();
      terminalInput.value = "";
      if (!fullInput) return;

      const [cmd, ...args] = fullInput.split(" ");
      const lowerCmd = cmd.toLowerCase();

      terminalOutput.innerHTML += `<div class="cmd-line"><span style="color: var(--accent-cyan); font-weight: 700;">guest@thang-portfolio:~$</span> ${fullInput}</div>`;

      if (lowerCmd === "clear") {
        terminalOutput.innerHTML = "";
      } else if (lowerCmd === "theme") {
        const targetTheme = args[0] ? args[0].toLowerCase() : (document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light");
        document.documentElement.setAttribute("data-theme", targetTheme);
        localStorage.setItem("theme", targetTheme);
        terminalOutput.innerHTML += `<div class="cmd-res">Switched theme to: <b>${targetTheme}</b></div>`;
      } else if (lowerCmd === "sudo") {
        const res = commands.sudo(args.join(" "));
        terminalOutput.innerHTML += `<div class="cmd-res">${res}</div>`;
      } else if (commands[lowerCmd]) {
        const res = commands[lowerCmd]();
        if (res) terminalOutput.innerHTML += `<div class="cmd-res">${res}</div>`;
      } else {
        terminalOutput.innerHTML += `<div class="cmd-res" style="color: #f87171;">Command not found: "${cmd}". Type <span style="color: var(--accent-cyan);">help</span> for available commands.</div>`;
      }

      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
  });
});
