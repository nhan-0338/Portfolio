/**
 * Interactive Terminal Emulator Component - Ho Duc Nhan
 * Allows recruiters & visitors to explore the finance & operations portfolio via CLI commands.
 */

document.addEventListener("DOMContentLoaded", () => {
  const terminalModal = document.getElementById("terminal-modal");
  const terminalLauncherBtn = document.getElementById("terminal-launcher-btn");
  const terminalCloseBtn = document.getElementById("terminal-close-btn");
  const terminalInput = document.getElementById("terminal-cli-input");
  const terminalOutput = document.getElementById("terminal-cli-output");

  if (!terminalModal || !terminalLauncherBtn) return;

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

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey && e.key.toLowerCase() === "k") || (e.key === "`" && document.activeElement !== terminalInput && !document.activeElement.matches("input, textarea"))) {
      e.preventDefault();
      toggleTerminal();
    }
  });

  const commands = {
    help: () => `
<div style="color: var(--accent-cyan); font-weight: 600;">Available Commands:</div>
  <span style="color: #67e8f9;">bio</span> / <span style="color: #67e8f9;">about</span>     - Ho Duc Nhan introduction & background
  <span style="color: #67e8f9;">education</span>       - UEH degree, GPA 3.8/4.0, ACCA & IELTS
  <span style="color: #67e8f9;">exp</span>             - Work experience (Hesman Group, Vietcombank)
  <span style="color: #67e8f9;">skills</span>          - Financial analysis, internal audit, Power BI, Python
  <span style="color: #67e8f9;">projects</span>        - SRAA 2025 First Prize research & case studies
  <span style="color: #67e8f9;">awards</span>          - Scholarships & competition prizes
  <span style="color: #67e8f9;">cv</span> / <span style="color: #67e8f9;">resume</span>       - Open & download official PDF resume
  <span style="color: #67e8f9;">contact</span>         - Email & phone contact details
  <span style="color: #67e8f9;">theme &lt;dark|light&gt;</span> - Switch website theme
  <span style="color: #67e8f9;">matrix</span>          - Trigger green data stream animation
  <span style="color: #67e8f9;">clear</span>           - Clear terminal screen
  <span style="color: #f43f5e;">sudo hire-me</span>    - Direct candidate interview fast-track!
`,
    bio: () => `
<b>HO DUC NHAN</b> - Finance & Operations Planning Specialist
- University: <b>University of Economics Ho Chi Minh City (UEH)</b>
- Major: <b>Bachelor of International Finance</b> (GPA: <b>3.8 / 4.0</b>)
- English: <b>IELTS 7.5 Overall</b> | ACCA Candidate (F1-F3 Exempted, F7 Prep)
- Direction: Operations Planning, Corporate Financial Management, Internal Control & BI.
`,
    education: () => `
<b>University of Economics Ho Chi Minh City (UEH)</b>
- Degree: Bachelor of International Finance | Expected Graduation: March 2027
- Cumulative GPA: <b>3.8 / 4.0</b> (Top Academic Honor)
- English: <b>IELTS 7.5 Overall</b> (C1 Advanced)
- ACCA: Exemptions in F1, F2, F3 & preparing for F7 Financial Reporting
- External Courses: Financial Modeling, Financial Statement Analysis, Macro-market Analysis
`,
    exp: () => `
1. <b>Hesman Group Joint Stock Company</b> (Oct 2025 – Jun 2026)
   - Role: Internal Control Intern - Audit & Reconciliation (Southern branch)
   - Cross-checked 500+ daily transactions across ShopDunk, Samcenter, Xiaomi (25 stores).
   - Monthly tracking & remediation of 50+ control exceptions.
2. <b>Vietcombank - Do Thanh Transaction Office</b> (Sep 2024 – Dec 2024)
   - Role: Customer Relationship Intern - Credit Assessment Support
   - Analyzed borrower financial statements, evaluated debt capacity.
   - <b>Awarded Highest Honor: Best Intern in Q3/2024</b>.
`,
    skills: () => `
<b>[Financial Analysis & Accounting]</b>: Financial Statement Analysis, Budgeting & Forecasting, Financial Modeling, Variance Investigation
<b>[Internal Control & Audit]</b>: 500+ Daily Transaction Review, Multi-store Inventory Audit (25+ stores), Control Testing, Root-Cause Remediation
<b>[Tools & BI]</b>: Microsoft Power BI, Microsoft Excel (MOS Certified), Stata 17 Econometrics, Python, Google Workspace
<b>[Languages]</b>: English (IELTS 7.5 Overall), Vietnamese (Native)
`,
    projects: () => `
1. <b>SRAA 2025 First Prize Research (A Award)</b>:
   'Unmasking Earnings Management in the Digital Era: How Accounting Conservatism Shapes Corporate Behavior'
   Tools: Stata 17, Empirical Econometric Modeling, Large Financial Datasets.
2. <b>Hesman Group Retail Internal Control System</b>:
   Audit across 25 retail stores for ShopDunk, Samcenter, Xiaomi.
3. <b>Vietcombank Credit Risk Appraisal Model</b>:
   Financial statement review, credit scoring, borrower repayment analysis.
4. <b>Power BI Corporate Financial Dashboard</b>:
   Dynamic revenue, expense, and EBITDA variance modeling with Python & DAX.
`,
    awards: () => `
- <b>First Prize (A Award)</b> - 7th Scientific Research Award in Accounting & Auditing (SRAA 2025)
- <b>Selected UEH Student Representative</b> for European FIBAA Quality Accreditation Review 2026
- <b>Excellent Scholarships</b> for 3 consecutive years (2024, 2025, 2026) at UEH
- <b>Best Intern in Q3/2024</b> - Vietcombank Do Thanh
- <b>Second Prize</b> at 2025 Macroeconomics Challenge
- <b>Second Prize</b> at 2025 UEH Economics Student Debate Competition
- <b>Third Prize</b> at 5th E-Banker Banking Academic Competition
- <b>Third Prize</b> at 2024 Microeconomics Challenge
`,
    cv: () => {
      window.open('assets/HoDucNhan_CV.pdf', '_blank');
      return `Opening <b>[CV] [HO DUC NHAN].pdf</b> in new tab...`;
    },
    resume: () => {
      window.open('assets/HoDucNhan_CV.pdf', '_blank');
      return `Opening <b>[CV] [HO DUC NHAN].pdf</b> in new tab...`;
    },
    contact: () => `
- <b>Email</b>: <a href="mailto:hoducnhan240905@gmail.com" style="color: var(--accent-cyan);">hoducnhan240905@gmail.com</a>
- <b>Phone</b>: <a href="tel:0338114890" style="color: var(--accent-cyan);">0338 114 890</a>
- <b>Location</b>: Ho Chi Minh City, Vietnam
- <b>Resume PDF</b>: <a href="assets/HoDucNhan_CV.pdf" target="_blank" style="color: var(--accent-cyan);">Download HoDucNhan_CV.pdf</a>
`,
    matrix: () => {
      terminalOutput.innerHTML += `<div style="color: #22c55e;">[INITIALIZING FINANCIAL DATA MATRIX STREAM...]</div>`;
      let count = 0;
      const interval = setInterval(() => {
        const stream = Array(35).fill(0).map(() => (Math.random() > 0.5 ? (Math.random() * 1000).toFixed(2) : String.fromCharCode(33 + Math.floor(Math.random() * 80)))).join("  ");
        terminalOutput.innerHTML += `<div style="color: #22c55e; opacity: 0.8; font-size: 0.75rem;">${stream}</div>`;
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        count++;
        if (count > 12) {
          clearInterval(interval);
          terminalOutput.innerHTML += `<div style="color: var(--accent-cyan);">[FINANCIAL TELEMETRY COMPLETE]</div>`;
        }
      }, 100);
      return "";
    },
    sudo: (args) => {
      if (args.includes("hire-me")) {
        return `
<div style="color: #22c55e; font-weight: 700;">[RECRUITMENT FAST-TRACK GRANTED]</div>
<p>Thank you for considering <b>HO DUC NHAN</b> for your finance and operations team!</p>
<p>Direct Email: <a href="mailto:hoducnhan240905@gmail.com" style="color: var(--accent-cyan);">hoducnhan240905@gmail.com</a></p>
<p>Direct Phone: <a href="tel:0338114890" style="color: var(--accent-cyan);">0338 114 890</a></p>
<p>Download CV: <a href="assets/HoDucNhan_CV.pdf" target="_blank" style="color: var(--accent-cyan);">[CV] [HO DUC NHAN].pdf</a></p>
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

      terminalOutput.innerHTML += `<div class="cmd-line"><span style="color: var(--accent-cyan); font-weight: 700;">guest@nhan-portfolio:~$</span> ${fullInput}</div>`;

      if (lowerCmd === "clear") {
        terminalOutput.innerHTML = "";
      } else if (lowerCmd === "theme") {
        const targetTheme = args[0] ? args[0].toLowerCase() : (document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light");
        document.documentElement.setAttribute("data-theme", targetTheme);
        localStorage.setItem("portfolio_theme", targetTheme);
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
