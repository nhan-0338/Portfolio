/**
 * =========================================================================
 * PORTFOLIO CONFIGURATION DATA
 * Chỉnh sửa toàn bộ thông tin cá nhân, dự án, kỹ năng, kinh nghiệm tại đây.
 * Mọi thay đổi trong file này sẽ tự động cập nhật lên giao diện website.
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  // 1. THÔNG TIN CÁ NHÂN (PERSONAL INFO)
  personal: {
    fullName: "Nguyen Tan Thang",
    shortName: "Thang",
    title: "Software Engineer",
    tagline: "Software Engineering · HCMUS",
    headline: "Hi, I'm Nguyen Tan Thang.",
    description: "I build reliable backend systems and modern digital products, with a focus on scalable APIs, cloud technologies, and thoughtful full-stack experiences.",
    location: "Ho Chi Minh City, Vietnam",
    university: "HCMUS (VNU-HCM University of Science)",
    academicStatus: "Software Engineering student",
    graduationYear: "Expected 2027",
    focusAreas: ["Backend systems", "Cloud delivery", "Full-stack products"],
    availableForHire: true,
    avatarUrl: "assets/images/personal.jpg", // Thay bằng ảnh chân dung của bạn
    resumeUrl: "assets/NguyenTanThang_Resume.pdf", // Link hoặc đường dẫn file CV của bạn
    profileJson: {
      name: "Nguyen Tan Thang",
      role: "Software Engineer",
      focus: ["Backend", "Cloud"],
      available: true
    }
  },

  // 2. LIÊN HỆ & MẠNG XÃ HỘI (SOCIAL LINKS)
  socials: {
    github: "https://github.com/thangak18",
    linkedin: "https://www.linkedin.com/in/th%E1%BA%AFng-nguy%E1%BB%85n-598741283/",
    email: "thangak18@gmail.com",
    facebook: "https://www.facebook.com/nguyen.thang.739214/",
    instagram: "https://www.instagram.com/thang23.25/",
    leetcode: "https://leetcode.com/u/thangnguyen23/",
    gdg: "https://gdg.community.dev/"
  },

  // 3. ĐIỂM NHẤN TRỌNG TÂM (CORE FOCUS ITEMS)
  focusHighlights: [
    {
      icon: "server-cog",
      title: "Backend systems",
      description: "Reliable APIs, clear domain logic, and maintainable service architecture."
    },
    {
      icon: "cloud",
      title: "Cloud delivery",
      description: "Containerized applications and practical deployment workflows."
    },
    {
      icon: "layers-3",
      title: "Full-stack products",
      description: "Cohesive experiences from data model to responsive interface."
    }
  ],

  // 4. THANH THÔNG TIN NHANH (PROFILE STRIP STATS)
  quickStats: [
    {
      icon: "graduation-cap",
      label: "Current",
      value: "Software Engineering student"
    },
    {
      icon: "book-open",
      label: "University",
      value: "HCMUS"
    },
    {
      icon: "server-cog",
      label: "Focus",
      value: "Backend & cloud systems"
    },
    {
      icon: "briefcase",
      label: "Graduation",
      value: "Expected 2027"
    }
  ],

  // 5. LỘ TRÌNH HỌC TẬP & PHÁT TRIỂN (JOURNEY TIMELINE)
  journey: [
    {
      step: "01",
      badge: "Foundation",
      title: "Programming & data structures",
      description: "Core engineering thinking and problem solving fundamentals.",
      status: "completed", // "completed", "current", "upcoming"
      icon: "check"
    },
    {
      step: "02",
      badge: "Applied systems",
      title: "Backend & full-stack projects",
      description: "From database and API design to usable production experiences.",
      status: "completed",
      icon: "check"
    },
    {
      step: "03",
      badge: "Now",
      title: "Semester 7 of 12",
      description: "Deepening cloud infrastructure, deployment, and distributed system design.",
      status: "current",
      icon: "sparkles"
    },
    {
      step: "04",
      badge: "Next milestone",
      title: "Graduate in 2027",
      description: "Ready to deliver high impact on ambitious engineering teams.",
      status: "upcoming",
      icon: "graduation-cap"
    }
  ],

  // 6. KINH NGHIỆM LÀM VIỆC (WORK EXPERIENCE)
  experiences: [
    {
      id: "netcompany",
      company: "Netcompany",
      role: "IT Accelerator Intern",
      period: "Jul 2026 – Present",
      location: "Ho Chi Minh City (On-site)",
      logo: "assets/icons/netcompany.svg",
      summary: "Participating in enterprise software development and core operational solutions within an Agile delivery framework.",
      bullets: [
        "Participating in the development of the After Dark Management Application (ADMA), a back-office financial and operational hub for managing corporate social initiatives.",
        "Engaging in a full software development lifecycle within an Agile environment, taking part in architecture design, database modeling, and MVP implementation.",
        "Building scalable backend workflows for budget forecasting, event operations, expense tracking, and dynamic approval processes to streamline internal management."
      ],
      tags: ["Agile", "Architecture Design", "Database Modeling", "Backend Workflows", "MVP", "Java / Spring"]
    }
  ],

  // 7. KỸ NĂNG & CÔNG NGHỆ (CAPABILITIES & SKILLS)
  skillCategories: [
    {
      number: "01",
      title: "Languages",
      icon: "code-xml",
      skills: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
        { name: "HTML / CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "C / C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
        { name: "C# / .NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" }
      ]
    },
    {
      number: "02",
      title: "Frameworks",
      icon: "layers-3",
      skills: [
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
      ]
    },
    {
      number: "03",
      title: "Cloud & Infrastructure",
      icon: "cloud",
      skills: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
        { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
        { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
        { name: "CI / CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" }
      ]
    },
    {
      number: "04",
      title: "Data & Workflow",
      icon: "server-cog",
      skills: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "Git / GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
        { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" },
        { name: "AI Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg" }
      ]
    }
  ],

  // 8. DỰ ÁN NỔI BẬT (SELECTED PROJECTS)
  projects: [
    {
      id: "threatlens",
      featured: true,
      index: "01",
      title: "ThreatLens",
      categoryBadge: "Data",
      categorySub: "Security intelligence platform",
      categoryFilter: "security",
      description: "A threat intelligence and vulnerability management platform that turns security signals into clear, actionable risk insights.",
      image: "assets/images/threatlens.jpg",
      highlights: [
        "Real-time threat detection and automated telemetry parsing",
        "Vulnerability assessment, CVE mapping, and automated reporting",
        "Security risk analytics dashboard with interactive metrics"
      ],
      techStack: ["Python", "React", "Node.js", "MongoDB", "Docker"],
      githubUrl: "https://github.com/thtcsec/ThreatLens",
      liveUrl: null,
      isPrivate: false
    },
    {
      id: "eduvault",
      featured: true,
      index: "02",
      title: "EduVault",
      categoryBadge: "Software",
      categorySub: "Cloud learning platform",
      categoryFilter: "backend",
      description: "A scalable online learning platform connecting a Spring Boot API with a modern Next.js experience and a cloud-ready deployment workflow.",
      image: "assets/images/eduvault.jpg",
      highlights: [
        "Spring Boot and Next.js integration with secure JWT authentication",
        "Containerized multi-service development environment using Docker",
        "Fully deployed and autoscaled on AWS & Google Cloud Run"
      ],
      techStack: ["Spring Boot", "Next.js", "PostgreSQL", "Docker", "AWS", "Google Cloud"],
      githubUrl: null,
      liveUrl: "https://eduvault-frontend-159888619461.asia-southeast1.run.app/",
      isPrivate: true
    },
    {
      id: "online-auction",
      featured: true,
      index: "03",
      title: "Online Auction System",
      categoryBadge: "Software",
      categorySub: "Real-time commerce experience",
      categoryFilter: "fullstack",
      description: "A full-stack auction platform with real-time bidding, user and administrator workspaces, product management, and bidding history.",
      image: "assets/images/auction.jpg",
      highlights: [
        "Real-time bidding flow with WebSocket push notifications",
        "Dedicated user bidding dashboard and secure admin control center",
        "Payment-ready transactional architecture with relational data integrity"
      ],
      techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Socket.IO"],
      githubUrl: "https://github.com/hungtmh/online-auction-system",
      liveUrl: null,
      isPrivate: false
    }
  ],

  // 9. CHỨNG CHỈ (CREDENTIALS & CERTIFICATIONS)
  certifications: [
    {
      id: "c1",
      title: "The Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy",
      year: "2025",
      image: "assets/images/cert-webdev.jpg",
      credentialUrl: "https://www.udemy.com/certificate/UC-complete-web-dev/",
      skills: ["Full-Stack", "JavaScript", "Node.js", "React", "SQL"]
    },
    {
      id: "c2",
      title: "Agentic Coding: Full-Stack Java Apps with Cursor and Copilot",
      issuer: "Udemy",
      year: "2026",
      image: "assets/images/cert-java-ai.jpg",
      credentialUrl: "https://www.udemy.com/certificate/UC-agentic-java/",
      skills: ["Java", "Spring Boot", "Agentic Coding", "Copilot"]
    },
    {
      id: "c3",
      title: "Gemini Certified Student",
      issuer: "Google",
      year: "2026",
      image: "assets/images/cert-gemini.png",
      credentialUrl: "https://cloud.google.com/certification",
      skills: ["Gemini AI", "Prompt Engineering", "Cloud AI APIs"]
    }
  ],

  // 10. THÀNH TÍCH (ACHIEVEMENTS)
  achievements: [
    {
      id: "a1",
      number: "01",
      title: "Top 10 Datathon 2026",
      organization: "GenCore Team (Member)",
      year: "2026",
      description: "Built an end-to-end data intelligence and risk modeling solution, competing with 100+ university teams nationwide."
    },
    {
      id: "a2",
      number: "02",
      title: "LeetCode Milestone & Problem Solving",
      organization: "LeetCode Community",
      year: "2025 – 2026",
      description: "Consistent problem solving in Data Structures & Algorithms with Java & Python."
    }
  ],

  // 11. CỘNG ĐỒNG (COMMUNITY)
  community: {
    gdg: {
      name: "Google Developer Group - HCMC",
      role: "Active Member",
      description: "Active member focusing on Google technologies, collaborative learning, system architectures & modern developer practices.",
      url: "https://gdg.community.dev/"
    }
  }
};

// Expose globally for both browser scripts and module imports
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
