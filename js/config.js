/**
 * =========================================================================
 * PORTFOLIO CONFIGURATION DATA - HO DUC NHAN
 * Scanned & Tailored from Official Curriculum Vitae
 * University of Economics Ho Chi Minh City (UEH) - International Finance
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  // 1. THÔNG TIN CÁ NHÂN (PERSONAL INFO)
  personal: {
    fullName: "HO DUC NHAN",
    shortName: "Duc Nhan",
    title: "Finance & Operations Planning Specialist",
    tagline: "International Finance · UEH · GPA 3.8/4.0",
    headline: "Hi, I'm HO DUC NHAN.",
    description: "Seeking a finance-related position with a clear long-term direction toward operations planning and corporate financial management. I value financial accuracy, control, and reliable reporting as essential foundations for effective planning and analysis.",
    location: "Ho Chi Minh City, Vietnam",
    phone: "0338 114 890",
    email: "hoducnhan240905@gmail.com",
    university: "University of Economics Ho Chi Minh City (UEH)",
    major: "Bachelor of International Finance",
    gpa: "3.8 / 4.0",
    academicStatus: "Undergraduate Student · UEH International Finance",
    graduationYear: "Graduation in March 2027",
    focusAreas: ["Corporate Financial Management", "Operations Planning", "Internal Control & Audit", "Financial Analytics"],
    availableForHire: true,
    avatarUrl: "assets/images/personal.jpg",
    resumeUrl: "assets/HoDucNhan_CV.pdf", // Link mở trực tiếp file CV PDF
    profileJson: {
      name: "HO DUC NHAN",
      role: "Finance & Operations Planning",
      university: "UEH",
      gpa: "3.8 / 4.0",
      ielts: "7.5 Overall",
      acca: "F1-F3 Exempted, F7 Prep",
      focus: ["Corporate Finance", "Internal Control", "Financial Modeling"],
      available: true
    }
  },

  // 2. LIÊN HỆ & MẠNG XÃ HỘI (SOCIAL LINKS)
  socials: {
    email: "hoducnhan240905@gmail.com",
    phone: "0338 114 890",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    cvPdf: "assets/HoDucNhan_CV.pdf"
  },

  // 3. ĐIỂM NHẤN TRỌNG TÂM (CORE FOCUS HIGHLIGHTS)
  focusHighlights: [
    {
      icon: "server-cog",
      title: "Financial Analysis & Planning",
      description: "Financial statement analysis, budgeting, multi-scenario forecasting, and data-driven decision support."
    },
    {
      icon: "cloud",
      title: "Internal Control & Audit",
      description: "Transaction verification, inventory reconciliation across 25+ retail stores, and root-cause remediation."
    },
    {
      icon: "layers-3",
      title: "Business Intelligence & BI",
      description: "Automated Power BI reporting dashboards, Stata econometric research, and Python financial analysis."
    }
  ],

  // 4. THANH THÔNG TIN NHANH (PROFILE STRIP STATS)
  quickStats: [
    {
      icon: "graduation-cap",
      label: "Education",
      value: "Bachelor of International Finance · UEH"
    },
    {
      icon: "book-open",
      label: "Academic GPA",
      value: "3.8 / 4.0 (Top Academic Honor)"
    },
    {
      icon: "server-cog",
      label: "Qualifications",
      value: "IELTS 7.5 · ACCA Candidate (F1-F3, F7)"
    },
    {
      icon: "briefcase",
      label: "Graduation",
      value: "March 2027"
    }
  ],

  // 5. LỘ TRÌNH HỌC TẬP & SỰ NGHIỆP (JOURNEY TIMELINE)
  journey: [
    {
      step: "01",
      badge: "Foundation & Honors",
      title: "UEH International Finance",
      description: "Built strong quantitative foundations in finance, macroeconomic modeling, and accounting. Awarded Excellent Scholarships 3 consecutive years (2024-2026).",
      status: "completed",
      icon: "check"
    },
    {
      step: "02",
      badge: "Banking Experience",
      title: "Vietcombank · Credit Assessment",
      description: "Evaluated borrower repayment capacities, reviewed credit documentation, and earned 'Best Intern Honor' in Q3/2024.",
      status: "completed",
      icon: "check"
    },
    {
      step: "03",
      badge: "Corporate Audit & Control",
      title: "Hesman Group · Internal Control",
      description: "Reconciling 500+ daily transactions and auditing inventory across 25 southern retail stores (ShopDunk, Samcenter, Xiaomi).",
      status: "current",
      icon: "sparkles"
    },
    {
      step: "04",
      badge: "Next Milestone",
      title: "European FIBAA Review & Graduation 2027",
      description: "Selected as UEH Student Representative for European FIBAA Accreditation. Ready to contribute to corporate finance and operations planning.",
      status: "upcoming",
      icon: "graduation-cap"
    }
  ],

  // 6. KINH NGHIỆM LÀM VIỆC (WORK EXPERIENCE)
  experiences: [
    {
      id: "hesman",
      company: "Hesman Group Joint Stock Company",
      role: "Internal Control Intern - Audit and Reconciliation",
      period: "October 2025 – June 2026",
      location: "Southern branch (Ho Chi Minh City)",
      logo: "assets/icons/hesman-logo.svg",
      summary: "Responsible for transaction data auditing, multi-store inventory control, and operational exception remediation across nationwide retail chains.",
      bullets: [
        "Reviewed and validated 500+ transaction records per day by cross-checking system data against supporting documents, tracing unusual items and control exceptions to source records, and verifying data completeness and accuracy to strengthen the reliability of financial and operational information.",
        "Performed inventory audit and reconciliation across 3 major retail chains — ShopDunk (Apple Authorized Reseller), Samcenter (Samsung Experience Store), Xiaomi — and 25 southern stores, reconciling system-recorded balances with physical stock counts, investigating discrepancies, identifying root causes, and implementing corrective adjustments.",
        "Tracked, documented, and followed up on 50+ internal control exceptions per month, coordinating with store managers and finance departments to clarify findings, determine corrective actions, monitor remediation progress, and ensure resolution within reporting deadlines."
      ],
      tags: ["Internal Control", "Audit & Reconciliation", "ShopDunk / Samcenter / Xiaomi", "Inventory Auditing", "Variance Analysis", "Data Reliability"]
    },
    {
      id: "vietcombank",
      company: "Vietcombank (Joint Stock Commercial Bank for Foreign Trade of Vietnam)",
      role: "Customer Relationship Intern - Credit Assessment Support",
      period: "September 2024 – December 2024",
      location: "Do Thanh Transaction Office | Ho Chi Minh City",
      logo: "assets/icons/vietcombank-logo.svg",
      summary: "Supported credit appraisal, financial statement analysis, and customer file evaluation for individual and commercial borrowers.",
      bullets: [
        "Received practical experience in reviewing financial statements, analyzing cash flows, evaluating borrower repayment capacity, and understanding key credit scoring factors.",
        "Supported the review and completion of customer and credit documentation, verifying information completeness, legal validity, and following up on outstanding records prior to internal risk appraisal.",
        "Monitored the progress of assigned customer files, coordinated with Relationship Managers and risk officers, ensuring timely submission for loan approval.",
        "Awarded the Highest Honor of 'Best Intern in the Third Quarter of 2024' for outstanding diligence and accuracy."
      ],
      tags: ["Credit Assessment", "Financial Statement Analysis", "Debt Capacity Evaluation", "Risk Appraisal", "Banking Operations", "Best Intern Award"]
    }
  ],

  // 7. KỸ NĂNG & CÔNG CỤ (SKILLS & TOOLS MATRIX)
  skillCategories: [
    {
      number: "01",
      title: "Financial Analysis & Accounting",
      icon: "server-cog",
      skills: [
        { name: "Financial Statement Analysis", icon: null },
        { name: "Financial Reporting Fundamentals", icon: null },
        { name: "Budgeting & Forecasting", icon: null },
        { name: "Financial Modeling", icon: null },
        { name: "Variance Investigation", icon: null },
        { name: "Macro-market Analysis", icon: null }
      ]
    },
    {
      number: "02",
      title: "Internal Control & Audit",
      icon: "layers-3",
      skills: [
        { name: "Transaction Review (500+/day)", icon: null },
        { name: "Data Reconciliation", icon: null },
        { name: "Multi-store Inventory Audit", icon: null },
        { name: "Control Exception Tracking", icon: null },
        { name: "Root-Cause Analysis", icon: null },
        { name: "Audit Remediation Follow-up", icon: null }
      ]
    },
    {
      number: "03",
      title: "Tools, BI & Statistical Software",
      icon: "cloud",
      skills: [
        { name: "Microsoft Power BI", icon: null },
        { name: "Microsoft Excel (MOS Certified)", icon: null },
        { name: "Stata 17 Econometrics", icon: null },
        { name: "Python for Data Analysis", icon: null },
        { name: "Google Workspace", icon: null },
        { name: "AI Prompting (ChatGPT / Claude)", icon: null }
      ]
    },
    {
      number: "04",
      title: "Languages & Communication",
      icon: "code-xml",
      skills: [
        { name: "English (IELTS 7.5 Overall)", icon: null },
        { name: "Vietnamese (Native)", icon: null },
        { name: "Analytical & Report Writing", icon: null },
        { name: "Stakeholder Communication", icon: null },
        { name: "Cross-functional Coordination", icon: null },
        { name: "Executive Presentation", icon: null }
      ]
    }
  ],

  // 8. DỰ ÁN & NGHIÊN CỨU TIÊU BIỂU (PROJECTS & RESEARCH CASE STUDIES)
  projects: [
    {
      id: "sraa-research",
      featured: true,
      index: "01",
      title: "Unmasking Earnings Management in the Digital Era",
      categoryBadge: "Research Award",
      categorySub: "First Prize (A Award) · SRAA 2025",
      categoryFilter: "research",
      description: "Scientific research examining how Accounting Conservatism shapes corporate financial behavior and earnings management quality across enterprises in Ho Chi Minh City.",
      image: "assets/images/research-sraa.jpg",
      highlights: [
        "Won First Prize (A Award) at the 7th Scientific Research Award in Accounting & Auditing (SRAA 2025)",
        "Applied econometric models and regression analysis using Stata 17 to analyze large-scale corporate financial data",
        "Formulated empirical insights on earnings management constraints under digital transformation and corporate governance frameworks"
      ],
      techStack: ["Stata 17", "Econometric Modeling", "Financial Data", "Accounting Conservatism", "SRAA 2025 First Prize"],
      githubUrl: null,
      liveUrl: "assets/HoDucNhan_CV.pdf",
      liveText: "View Research Summary",
      isPrivate: false
    },
    {
      id: "hesman-audit-case",
      featured: true,
      index: "02",
      title: "Multi-Store Inventory Audit & Internal Control System",
      categoryBadge: "Operations",
      categorySub: "Retail Operations & Reconciliation",
      categoryFilter: "audit",
      description: "Comprehensive audit and internal control workflow deployed across 25 southern retail stores for ShopDunk, Samcenter, and Xiaomi chains under Hesman Group.",
      image: "assets/images/hesman-audit.jpg",
      highlights: [
        "Daily automated validation of 500+ transaction records against source bank slips and invoices",
        "Multi-retail inventory reconciliation: investigated variances between ERP balances and physical warehouse counts",
        "Streamlined monthly resolution of 50+ internal control exceptions with store managers and finance teams"
      ],
      techStack: ["Internal Control", "ERP Inventory Audit", "Transaction Reconciliation", "Variance Remediation", "Hesman Group"],
      githubUrl: null,
      liveUrl: "assets/HoDucNhan_CV.pdf",
      liveText: "View Case Experience",
      isPrivate: false
    },
    {
      id: "vietcombank-credit-case",
      featured: true,
      index: "03",
      title: "Credit Risk Appraisal & Borrower Evaluation Framework",
      categoryBadge: "Banking",
      categorySub: "Credit Analysis & Risk Assessment",
      categoryFilter: "finance",
      description: "Practical credit assessment methodology applied at Vietcombank Do Thanh to evaluate borrower repayment capacities, analyze financial statements, and structure loan documentation.",
      image: "assets/images/vietcombank-credit.jpg",
      highlights: [
        "Analyzed balance sheets, cash flow statements, and debt service coverage ratios (DSCR) for creditworthiness",
        "Conducted thorough compliance and legal checks on customer files prior to internal credit committee approvals",
        "Recognized as 'Best Intern in the Third Quarter of 2024' at Vietcombank Do Thanh"
      ],
      techStack: ["Credit Assessment", "Financial Statement Analysis", "Risk Scoring", "Vietcombank", "Best Intern Q3/2024"],
      githubUrl: null,
      liveUrl: "assets/HoDucNhan_CV.pdf",
      liveText: "View Credit Experience",
      isPrivate: false
    },
    {
      id: "powerbi-financial-dashboard",
      featured: true,
      index: "04",
      title: "Corporate Financial Performance & Budgeting Dashboard",
      categoryBadge: "Business Intelligence",
      categorySub: "Financial Modeling & BI",
      categoryFilter: "bi",
      description: "Interactive Power BI and Excel analytical dashboard designed for revenue forecasting, expense budgeting, variance tracking, and executive decision support.",
      image: "assets/images/powerbi-dashboard.jpg",
      highlights: [
        "Integrated dynamic DAX measures for real-time KPI tracking, gross margin analysis, and EBITDA variance breakdown",
        "Multi-scenario financial forecasting models comparing actual vs. budgeted operational costs",
        "Automated data extraction and cleansing pipelines leveraging Python and Power Query"
      ],
      techStack: ["Microsoft Power BI", "Financial Modeling", "Budgeting & Forecasting", "Python", "MOS Excel"],
      githubUrl: null,
      liveUrl: "assets/HoDucNhan_CV.pdf",
      liveText: "View BI Details",
      isPrivate: false
    }
  ],

  // 9. CHỨNG CHỈ & VĂN BẰNG (CREDENTIALS & CERTIFICATIONS)
  certifications: [
    {
      id: "c1",
      title: "IELTS Academic: 7.5 Overall Band Score",
      issuer: "IDP / British Council",
      year: "2024",
      image: "assets/images/cert-ielts.jpg",
      credentialUrl: "assets/HoDucNhan_CV.pdf",
      skills: ["English Proficiency (C1 Level)", "Academic Writing", "Professional Communication"]
    },
    {
      id: "c2",
      title: "ACCA Certificate: F1, F2, F3 Exemptions & F7 Prep",
      issuer: "ACCA Global",
      year: "2025",
      image: "assets/images/cert-acca.jpg",
      credentialUrl: "assets/HoDucNhan_CV.pdf",
      skills: ["Financial Reporting (F7)", "Management Accounting", "Business & Technology"]
    },
    {
      id: "c3",
      title: "First Prize (A Award) - 7th SRAA 2025",
      issuer: "UEH Scientific Research Award",
      year: "2025",
      image: "assets/images/cert-sraa.jpg",
      credentialUrl: "assets/HoDucNhan_CV.pdf",
      skills: ["Accounting & Auditing Research", "Econometrics (Stata 17)", "Scientific Methodology"]
    }
  ],

  // 10. THÀNH TÍCH & GIẢI THƯỞNG (HONORS & AWARDS)
  achievements: [
    {
      id: "a1",
      number: "01",
      title: "First Prize (A Award) - 7th Scientific Research Award in Accounting & Auditing (SRAA 2025)",
      organization: "UEH School of Accounting",
      year: "2025",
      description: "Author of research topic: 'Unmasking Earnings Management in the Digital Era: How Accounting Conservatism Shapes Corporate Behavior in Ho Chi Minh City'."
    },
    {
      id: "a2",
      number: "02",
      title: "Selected UEH Student Representative for European FIBAA Quality Accreditation Review 2026",
      organization: "FIBAA Accreditation Council & UEH",
      year: "2026",
      description: "Chosen as the official student representative for the Bachelor of International Finance program in the international European FIBAA accreditation evaluation."
    },
    {
      id: "a3",
      number: "03",
      title: "Excellent Scholarship for Outstanding Academic & Extracurricular Performance (3 Consecutive Years)",
      organization: "University of Economics Ho Chi Minh City (UEH)",
      year: "2024, 2025, 2026",
      description: "Awarded top merit scholarships for maintaining a 3.8/4.0 GPA and exceptional contributions to university academic competitions."
    },
    {
      id: "a4",
      number: "04",
      title: "Highest Honor: Best Intern in the Third Quarter of 2024",
      organization: "Vietcombank · Do Thanh Transaction Office",
      year: "2024",
      description: "Awarded Best Intern for outstanding performance and precision in credit assessment support and borrower file evaluations."
    },
    {
      id: "a5",
      number: "05",
      title: "Second Prize at the 2025 Macroeconomics Challenge",
      organization: "Academic Economics Association",
      year: "2025",
      description: "Demonstrated deep analytical capabilities in macroeconomic policy modeling and market indicators."
    },
    {
      id: "a6",
      number: "06",
      title: "Second Prize at the 2025 UEH Economics Student Debate Competition",
      organization: "UEH Student Union",
      year: "2025",
      description: "Debated financial regulations, fiscal policies, and corporate governance topics."
    },
    {
      id: "a7",
      number: "07",
      title: "Third Prize at the 5th E-Banker Banking Academic Competition",
      organization: "Banking University & Financial Institutions",
      year: "2024",
      description: "Solved comprehensive case studies in commercial banking operations, credit risk, and digital banking."
    },
    {
      id: "a8",
      number: "08",
      title: "Third Prize at the 2024 Microeconomics Challenge",
      organization: "UEH Economics Association",
      year: "2024",
      description: "Analyzed market mechanisms, cost structures, and corporate pricing behavior."
    },
    {
      id: "a9",
      number: "09",
      title: "Third Prize at the 'UEH Pride' Writing Contest",
      organization: "UEH Editorial Board",
      year: "2023",
      description: "Honored for excellence in analytical and expressive essay writing."
    }
  ],

  // 11. KHÓA HỌC NGOÀI & CHUYÊN MÔN (EXTERNAL COURSES)
  externalCourses: [
    "Financial Modeling & Business Valuation",
    "Financial Statement Analysis & Disclosures",
    "Macro-market Analysis & Monetary Policy",
    "Microsoft Office Specialist (MOS) Expert"
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
