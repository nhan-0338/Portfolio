/**
 * =========================================================================
 * MAIN APPLICATION SCRIPT - HO DUC NHAN PORTFOLIO
 * Dynamic rendering, filterable case studies, modal viewers, mouse spotlight,
 * interactive CV opening, and contact links.
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderHeroAndMeta();
  renderQuickStrip();
  renderJourney();
  renderExperience();
  renderSkills();
  renderProjects();
  renderCredentials();
  renderCommunityAndAwards();
  initGlowSpotlight();
  initScrollEffects();
  initNavigation();
  initModals();
  initContact();
});

/* -------------------------------------------------------------------------
   1. Theme Management (Dark / Light)
   ------------------------------------------------------------------------- */
function initTheme() {
  const savedTheme = localStorage.getItem("portfolio_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (themeToggleBtn) {
    updateThemeIcon(savedTheme);
    themeToggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("portfolio_theme", nextTheme);
      updateThemeIcon(nextTheme);
      showToast(`Switched to ${nextTheme} theme`);
    });
  }
}

function updateThemeIcon(theme) {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (!themeToggleBtn) return;
  themeToggleBtn.innerHTML = theme === "dark" 
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
}

/* -------------------------------------------------------------------------
   2. Hero & Profile Details Rendering
   ------------------------------------------------------------------------- */
function renderHeroAndMeta() {
  const data = PORTFOLIO_DATA.personal;
  const socials = PORTFOLIO_DATA.socials;

  document.title = `${data.fullName} - ${data.title} | UEH Portfolio`;

  const overline = document.getElementById("hero-overline");
  if (overline) overline.textContent = data.tagline;

  const headline = document.getElementById("hero-headline");
  if (headline) headline.innerHTML = `Hi, I'm <span>${data.fullName}.</span>`;

  const roleText = document.getElementById("hero-role-text");
  if (roleText) roleText.textContent = data.title;

  const desc = document.getElementById("hero-desc");
  if (desc) desc.textContent = data.description;

  const locationText = document.getElementById("hero-location-text");
  if (locationText) locationText.textContent = data.location;

  // Social & CV links
  const emailLink = document.getElementById("social-email");
  if (emailLink) emailLink.href = `mailto:${socials.email}`;

  const phoneLink = document.getElementById("social-phone");
  if (phoneLink) phoneLink.href = `tel:${socials.phone.replace(/\s+/g, '')}`;

  const cvLinks = document.querySelectorAll(".cv-download-link");
  cvLinks.forEach(link => {
    link.href = data.resumeUrl;
    link.setAttribute("target", "_blank");
  });

  // Focus Cards List
  const focusContainer = document.getElementById("focus-list-container");
  if (focusContainer && PORTFOLIO_DATA.focusHighlights) {
    focusContainer.innerHTML = PORTFOLIO_DATA.focusHighlights.map(item => `
      <div class="focus-item">
        <div>
          ${getSvgIcon(item.icon)}
        </div>
        <span>
          <strong>${item.title}</strong>
          <small>${item.description}</small>
        </span>
      </div>
    `).join("");
  }
}

/* -------------------------------------------------------------------------
   3. Quick Strip Stats Rendering
   ------------------------------------------------------------------------- */
function renderQuickStrip() {
  const stripGrid = document.getElementById("quick-strip-grid");
  if (!stripGrid || !PORTFOLIO_DATA.quickStats) return;

  stripGrid.innerHTML = PORTFOLIO_DATA.quickStats.map(stat => `
    <div class="profile-strip-item">
      ${getSvgIcon(stat.icon)}
      <div>
        <span>${stat.label}</span>
        <strong>${stat.value}</strong>
      </div>
    </div>
  `).join("");
}

/* -------------------------------------------------------------------------
   4. Journey / Academic & Career Roadmap
   ------------------------------------------------------------------------- */
function renderJourney() {
  const journeyContainer = document.getElementById("journey-steps-container");
  if (!journeyContainer || !PORTFOLIO_DATA.journey) return;

  journeyContainer.innerHTML = PORTFOLIO_DATA.journey.map(step => {
    let stateClass = "";
    let badgeContent = step.step;

    if (step.status === "completed") {
      stateClass = "is-complete";
      badgeContent = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    } else if (step.status === "current") {
      stateClass = "is-current";
      badgeContent = step.step;
    } else {
      stateClass = "is-upcoming";
      badgeContent = getSvgIcon(step.icon || "graduation-cap");
    }

    return `
      <div class="journey-step ${stateClass}">
        <span class="journey-step-badge">${badgeContent}</span>
        <small>${step.badge}</small>
        <strong>${step.title}</strong>
        <p>${step.description}</p>
      </div>
    `;
  }).join("");
}

/* -------------------------------------------------------------------------
   5. Work Experience Rendering
   ------------------------------------------------------------------------- */
function renderExperience() {
  const tabsContainer = document.getElementById("experience-tabs-container");
  const cardContainer = document.getElementById("experience-card-container");
  if (!tabsContainer || !cardContainer || !PORTFOLIO_DATA.experiences) return;

  // Render tabs
  tabsContainer.innerHTML = PORTFOLIO_DATA.experiences.map((exp, idx) => `
    <button type="button" class="experience-tab ${idx === 0 ? 'is-active' : ''}" data-exp-id="${exp.id}">
      <div class="experience-logo">
        <img src="${exp.logo}" alt="${exp.company}" onerror="this.style.display='none'" />
      </div>
      <span>${exp.company.split(' ')[0]}</span>
    </button>
  `).join("");

  function displayExperienceCard(exp) {
    cardContainer.innerHTML = `
      <div class="experience-card" data-glow-card="true">
        <div class="experience-card-inner">
          <div class="experience-card-header">
            <h3>${exp.company}</h3>
            <span class="experience-date-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              ${exp.period}
            </span>
          </div>
          <div class="experience-location">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            ${exp.location}
          </div>
          <hr class="experience-divider" />
          <div class="experience-role-header">
            <h4>${exp.role}</h4>
          </div>
          <ul class="experience-bullets">
            ${exp.bullets.map(bullet => `<li>${bullet}</li>`).join("")}
          </ul>
          <div class="experience-tags">
            ${exp.tags.map(tag => `<span>${tag}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
    initGlowSpotlight();
  }

  displayExperienceCard(PORTFOLIO_DATA.experiences[0]);

  tabsContainer.querySelectorAll(".experience-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      tabsContainer.querySelectorAll(".experience-tab").forEach(t => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      const targetExp = PORTFOLIO_DATA.experiences.find(e => e.id === tab.getAttribute("data-exp-id"));
      if (targetExp) displayExperienceCard(targetExp);
    });
  });
}

/* -------------------------------------------------------------------------
   6. Skills Section
   ------------------------------------------------------------------------- */
function renderSkills() {
  const skillsGrid = document.getElementById("skills-grid-container");
  if (!skillsGrid || !PORTFOLIO_DATA.skillCategories) return;

  skillsGrid.innerHTML = PORTFOLIO_DATA.skillCategories.map(cat => `
    <article class="skill-panel" data-glow-card="true">
      <div class="skill-panel-head">
        <span>${cat.number}</span>
        ${getSvgIcon(cat.icon)}
      </div>
      <h3>${cat.title}</h3>
      <div class="skill-list">
        ${cat.skills.map(skill => `
          <span>
            ${skill.icon ? `<img src="${skill.icon}" alt="${skill.name}" class="skill-logo" loading="lazy" />` : ''}
            ${skill.name}
          </span>
        `).join("")}
      </div>
    </article>
  `).join("");
}

/* -------------------------------------------------------------------------
   7. Projects & Research Showcase
   ------------------------------------------------------------------------- */
function renderProjects(filter = "all") {
  const projectList = document.getElementById("projects-list-container");
  if (!projectList || !PORTFOLIO_DATA.projects) return;

  const filtered = filter === "all" 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.categoryFilter === filter);

  projectList.innerHTML = filtered.map(p => `
    <article class="project-feature" data-glow-card="true">
      <div class="project-media">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <div class="project-media-overlay"></div>
        <span class="project-index">${p.index}</span>
      </div>
      <div class="project-copy">
        <div class="project-category">
          <span>${p.categoryBadge}</span>
          <span>${p.categorySub}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <ul>
          ${p.highlights.map(h => `
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              ${h}
            </li>
          `).join("")}
        </ul>
        <div class="project-tech">
          ${p.techStack.map(t => `<span>${t}</span>`).join("")}
        </div>
        <div class="project-actions">
          ${p.liveUrl ? `
            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); display: inline-flex; align-items: center; gap: 8px;">
              ${p.liveText || "View Details"}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          ` : ''}
        </div>
      </div>
    </article>
  `).join("");

  const filterBtns = document.querySelectorAll(".project-filters .filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderProjects(btn.getAttribute("data-filter"));
    });
  });
}

/* -------------------------------------------------------------------------
   8. Credentials & Certifications
   ------------------------------------------------------------------------- */
function renderCredentials() {
  const certContainer = document.getElementById("certificates-list-container");
  const achContainer = document.getElementById("achievements-list-container");

  if (certContainer && PORTFOLIO_DATA.certifications) {
    certContainer.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
      <button class="certificate-card" type="button" data-cert-id="${cert.id}">
        <span class="certificate-image">
          <img src="${cert.image}" alt="${cert.title}" loading="lazy" />
        </span>
        <span class="certificate-copy">
          <small>${cert.issuer} · ${cert.year}</small>
          <strong>${cert.title}</strong>
          <em>View credential <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></em>
        </span>
      </button>
    `).join("");

    certContainer.querySelectorAll(".certificate-card").forEach(card => {
      card.addEventListener("click", () => {
        const cert = PORTFOLIO_DATA.certifications.find(c => c.id === card.getAttribute("data-cert-id"));
        if (cert) openCertModal(cert);
      });
    });
  }

  if (achContainer && PORTFOLIO_DATA.achievements) {
    achContainer.innerHTML = PORTFOLIO_DATA.achievements.map(ach => `
      <button class="achievement-card" type="button" data-ach-id="${ach.id}">
        <span class="achievement-number">${ach.number}</span>
        <span class="achievement-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
        </span>
        <span class="achievement-copy">
          <small>${ach.organization}</small>
          <strong>${ach.title}</strong>
          <em>${ach.year}</em>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </button>
    `).join("");

    achContainer.querySelectorAll(".achievement-card").forEach(card => {
      card.addEventListener("click", () => {
        const ach = PORTFOLIO_DATA.achievements.find(a => a.id === card.getAttribute("data-ach-id"));
        if (ach) openAchievementModal(ach);
      });
    });
  }
}

/* -------------------------------------------------------------------------
   9. Community & Academic Honors
   ------------------------------------------------------------------------- */
function renderCommunityAndAwards() {
  const container = document.getElementById("community-grid-container");
  if (!container) return;

  container.innerHTML = `
    <article class="community-card" data-glow-card="true">
      <div class="community-header">
        <div class="community-badge-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/></svg>
        </div>
        <div>
          <h3>European FIBAA Student Representative</h3>
          <p style="color: var(--accent-cyan); font-family: var(--font-mono); font-size: 0.85rem;">UEH International Finance Program</p>
        </div>
      </div>
      <p style="color: var(--text-secondary); line-height: 1.6;">
        Selected as the official student representative for the European FIBAA Quality Accreditation evaluation review, representing academic excellence, curriculum standards, and student governance.
      </p>
      <div>
        <a href="assets/HoDucNhan_CV.pdf" target="_blank" rel="noopener noreferrer" class="portfolio-button portfolio-button-secondary" style="font-size: 0.85rem; padding: 10px 18px;">
          View Academic Profile <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
        </a>
      </div>
    </article>

    <article class="community-card" data-glow-card="true">
      <div class="community-header">
        <div class="community-badge-icon" style="color: #f59e0b; background: rgba(245, 158, 11, 0.15); border-color: rgba(245, 158, 11, 0.3);">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
        </div>
        <div>
          <h3>Academic Competitions &amp; Scholarships</h3>
          <p style="color: #f59e0b; font-family: var(--font-mono); font-size: 0.85rem;">UEH &amp; National Honors</p>
        </div>
      </div>
      <p style="color: var(--text-secondary); line-height: 1.6;">
        Consistent achievement across 3 consecutive years of Merit Scholarships, 1st Prize SRAA 2025, Macroeconomics Challenge, Debate Competitions, and E-Banker.
      </p>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <a href="assets/HoDucNhan_CV.pdf" target="_blank" rel="noopener noreferrer" class="portfolio-button portfolio-button-secondary" style="font-size: 0.85rem; padding: 10px 18px;">
          Download Full CV PDF <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        </a>
      </div>
    </article>
  `;
}

/* -------------------------------------------------------------------------
   10. Mouse Spotlight Tracker Effect for [data-glow-card]
   ------------------------------------------------------------------------- */
function initGlowSpotlight() {
  const cards = document.querySelectorAll("[data-glow-card='true']");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

/* -------------------------------------------------------------------------
   11. Scroll Progress & ScrollSpy Navigation
   ------------------------------------------------------------------------- */
function initScrollEffects() {
  const progressBar = document.querySelector(".scroll-progress");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".desktop-nav a, .mobile-menu nav a");

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
    if (progressBar) {
      progressBar.style.transform = `scaleX(${progress})`;
    }

    let currentId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("is-active");
        } else if (link.getAttribute("href").startsWith("#")) {
          link.classList.remove("is-active");
        }
      });
    }
  });
}

/* -------------------------------------------------------------------------
   12. Mobile Menu & Navigation Interactions
   ------------------------------------------------------------------------- */
function initNavigation() {
  const menuBtn = document.querySelector(".menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu nav a");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("is-open");
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("is-open");
      });
    });
  }
}

/* -------------------------------------------------------------------------
   13. Modals Management
   ------------------------------------------------------------------------- */
function initModals() {
  const backdrop = document.getElementById("general-modal-backdrop");
  const closeBtn = document.getElementById("modal-close-btn");
  if (!backdrop) return;

  function closeModal() {
    backdrop.classList.remove("is-active");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function openCertModal(cert) {
  const backdrop = document.getElementById("general-modal-backdrop");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body-content");
  if (!backdrop || !modalTitle || !modalBody) return;

  modalTitle.textContent = cert.title;
  modalBody.innerHTML = `
    <div style="border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-color); background: #000;">
      <img src="${cert.image}" alt="${cert.title}" style="width: 100%; height: auto;" />
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
      <div>
        <p style="color: var(--text-muted); font-size: 0.85rem; font-family: var(--font-mono);">Issuer: <b>${cert.issuer}</b> · Year: <b>${cert.year}</b></p>
        <div style="display: flex; gap: 6px; margin-top: 6px; flex-wrap: wrap;">
          ${cert.skills.map(s => `<span style="font-family: var(--font-mono); font-size: 0.75rem; padding: 2px 8px; border-radius: var(--radius-sm); background: rgba(0, 229, 255, 0.1); color: var(--accent-cyan);">${s}</span>`).join("")}
        </div>
      </div>
      <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="portfolio-button portfolio-button-primary" style="font-size: 0.85rem; padding: 10px 18px;">
        Open Official Document <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
      </a>
    </div>
  `;
  backdrop.classList.add("is-active");
}

function openAchievementModal(ach) {
  const backdrop = document.getElementById("general-modal-backdrop");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body-content");
  if (!backdrop || !modalTitle || !modalBody) return;

  modalTitle.textContent = ach.title;
  modalBody.innerHTML = `
    <div style="padding: 20px; background: var(--bg-surface); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
      <p style="font-family: var(--font-mono); color: var(--accent-cyan); font-size: 0.85rem; margin-bottom: 8px;">${ach.organization} • ${ach.year}</p>
      <p style="color: var(--text-secondary); line-height: 1.6; font-size: 1rem;">${ach.description}</p>
      <div style="margin-top: 16px;">
        <a href="assets/HoDucNhan_CV.pdf" target="_blank" class="portfolio-button portfolio-button-secondary" style="font-size: 0.82rem; padding: 8px 16px;">
          View in Full CV PDF
        </a>
      </div>
    </div>
  `;
  backdrop.classList.add("is-active");
}

/* -------------------------------------------------------------------------
   14. Contact Form & Clipboard Toast
   ------------------------------------------------------------------------- */
function initContact() {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !message) {
        showToast("Please fill in all fields");
        return;
      }

      const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(`[Recruitment / Inquiry] Message from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoUrl;

      showToast("Email client opened! Thank you.");
      form.reset();
    });
  }

  const copyEmailBtn = document.getElementById("copy-email-btn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      showToast(`Copied ${PORTFOLIO_DATA.personal.email} to clipboard!`);
    });
  }

  const copyPhoneBtn = document.getElementById("copy-phone-btn");
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
      showToast(`Copied ${PORTFOLIO_DATA.personal.phone} to clipboard!`);
    });
  }
}

function showToast(message) {
  let toast = document.querySelector(".toast-msg");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-active");
  setTimeout(() => {
    toast.classList.remove("is-active");
  }, 3000);
}

function getSvgIcon(name) {
  const icons = {
    "server-cog": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"/><path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"/><path d="M6 6h.01"/><path d="M6 18h.01"/><path d="m15.7 13.4-.9-.3"/><path d="m9.2 10.9-.9-.3"/><path d="m10.6 15.7.3-.9"/><path d="m13.6 15.7-.4-1"/><path d="m10.8 9.3-.4-1"/><path d="m8.3 13.6 1-.4"/><path d="m14.7 10.8 1-.4"/><path d="m13.4 8.3-.3.9"/></svg>`,
    "cloud": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
    "layers-3": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/><path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/></svg>`,
    "graduation-cap": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`,
    "book-open": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>`,
    "briefcase": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>`,
    "code-xml": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
    "check": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    "sparkles": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>`
  };
  return icons[name] || icons["sparkles"];
}
