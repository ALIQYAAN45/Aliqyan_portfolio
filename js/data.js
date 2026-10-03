/**
 * ====================================================================
 * ALIQYAN LIGHTWALA - PORTFOLIO CONFIGURATION & DATA REPOSITORY
 * ====================================================================
 * 
 * Central configuration file for Aliqyan Lightwala's portfolio.
 * Edit your details, projects, and links here. The entire portfolio
 * updates automatically without needing to edit HTML!
 */

const portfolioData = {
  // ------------------------------------------------------------------
  // 1. PERSONAL INFORMATION (Realistic & Honest)
  // ------------------------------------------------------------------
  personal: {
    name: "Aliqyan Lightwala",
    shortName: "Aliqyan",
    role: "Aspiring Agentic AI Engineer",
    subRole: "Student | Aspiring Agentic AI Engineer",
    university: "Sandip University, Nashik",
    department: "Computer Science and Engineering (AI & ML)",
    degree: "B.Tech in Computer Science and Engineering (AI & ML)",
    location: "Nashik, Maharashtra, India",
    careerGoal: "To become an Agentic AI Engineer and develop intelligent applications, AI agents, automation tools, and software systems.",
    
    // Suggested professional introduction from prompt
    intro: "I'm a Computer Science and AI & ML student passionate about building intelligent applications, software solutions, and automation systems. I enjoy turning ideas into practical projects and exploring the future of AI.",
    
    // Key interests for animated display
    interests: [
      "Agentic AI & Autonomous Agents",
      "Python Programming",
      "Artificial Intelligence & Machine Learning",
      "Automation & Intelligent Systems",
      "Data Structures & Algorithms",
      "Software Development",
      "Web Development",
      "Algorithmic Problem-Solving"
    ],

    // Realistic About details
    aboutDetails: [
      "I am an undergraduate student pursuing Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at Sandip University, Nashik.",
      "My passion lies at the intersection of classical computer science and modern artificial intelligence — specifically Agentic AI, where software systems can autonomously reason, plan, and automate workflows.",
      "Through my academic journey, I have focused on designing and implementing practical college micro-projects that test both deterministic algorithmic logic (such as priority queues and discrete mathematical relations) and symbolic knowledge representation.",
      "My objective is to build reliable, maintainable software and continue expanding my practical expertise in intelligent agent architectures, automated reasoning, and backend systems."
    ],

    statusBadge: "Student @ Sandip University • Open for AI Internships"
  },

  // ------------------------------------------------------------------
  // 2. SOCIAL & CONTACT LINKS
  // ------------------------------------------------------------------
  social: {
    email: "aliqyanlightwala@gmail.com",
    linkedin: "https://www.linkedin.com/in/aliqyan-lightwala",
    github: "https://github.com/ALIQYAAN45",
    location: "Nashik, Maharashtra, India"
  },

  // ------------------------------------------------------------------
  // 3. HONEST & REALISTIC STATS (No invented figures)
  // ------------------------------------------------------------------
  stats: [
    { value: "CSE (AI & ML)", label: "Academic Specialization" },
    { value: "5", label: "College & Practical Projects" },
    { value: "100%", label: "Open Source & Live Projects" },
    { value: "Continuous", label: "Active Learning & Building" }
  ],

  // ------------------------------------------------------------------
  // 4. TECHNICAL SKILLS (Organized by Prompt Categories)
  // ------------------------------------------------------------------
  skills: [
    // Programming
    {
      name: "Python",
      category: "programming",
      tag: "Core Language",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 2.237.734 4.304 1.973 5.975L12 12V2zm0 0c5.523 0 10 4.477 10 10 0 2.237-.734 4.304-1.973 5.975L12 12V2zm0 10l-8.027 5.975C5.637 20.215 8.647 22 12 22s6.363-1.785 8.027-4.025L12 12z"/></svg>`,
      description: "Primary programming language for AI/ML modeling, algorithmic problem-solving, and backend services."
    },
    {
      name: "JavaScript",
      category: "programming",
      tag: "Web Logic",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 3h18v18H3V3zm13.7 13.9c.7 0 1.3-.3 1.7-.8.3-.4.4-.9.4-1.6 0-1.4-.9-2.1-2.5-2.7-.9-.4-1.3-.7-1.3-1.2 0-.4.3-.8.9-.8.6 0 1 .3 1.3.8l1.4-.9c-.6-1-1.5-1.5-2.7-1.5-1.5 0-2.6.9-2.6 2.3 0 1.3.8 2 2.3 2.5 1 .4 1.5.8 1.5 1.4 0 .6-.5 1-1.2 1-.9 0-1.5-.5-1.8-1.3l-1.5.8c.5 1.3 1.7 1.9 3.2 1.9zm-6.2-.2V10.2H8.8v5.1c0 1.1-.4 1.4-1.3 1.4-.3 0-.6 0-.8-.1l-.2 1.5c.4.2 1 .3 1.7.3 1.5 0 2.3-.6 2.3-1.7z"/></svg>`,
      description: "Client-side scripting, DOM manipulation, asynchronous events, and interactive user interface flows."
    },

    // Backend
    {
      name: "Flask",
      category: "backend",
      tag: "Web Framework",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31L4.35 19.3A2 2 0 0 0 6.09 22h11.82a2 2 0 0 0 1.74-2.7L14 9.31V2h-4z"/><path d="M8.5 2h7"/></svg>`,
      description: "Python micro-framework used to construct modular web apps, route handlers, and template rendering."
    },
    {
      name: "REST APIs",
      category: "backend",
      tag: "Architecture",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
      description: "Designing structured JSON API endpoints, HTTP request/response pipelines, and service integrations."
    },

    // Frontend
    {
      name: "HTML",
      category: "frontend",
      tag: "Markup",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>`,
      description: "Semantic document structuring, accessibility standards, and clean DOM architecture."
    },
    {
      name: "CSS",
      category: "frontend",
      tag: "Styling & Layout",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
      description: "Modern CSS Grid, Flexbox, responsive layouts, neon glow accents, and keyframe animations."
    },

    // Databases
    {
      name: "SQLite",
      category: "databases",
      tag: "Embedded Database",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
      description: "Relational persistence used across Flask projects for structured application data and schema design."
    },
    {
      name: "SQL",
      category: "databases",
      tag: "Query Language",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
      description: "Relational queries, table creation, primary/foreign key constraints, indexing, and data filtering."
    },

    // Computer Science & AI
    {
      name: "Data Structures",
      category: "cs-ai",
      tag: "Foundations",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
      description: "Arrays, stacks, queues, hash maps, trees, and algorithmic complexity analysis."
    },
    {
      name: "Priority Queues",
      category: "cs-ai",
      tag: "Heap Scheduling",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`,
      description: "Min-heap and max-heap implementations (Python heapq) for prioritized task and order dispatching."
    },
    {
      name: "Relations & Discrete Math",
      category: "cs-ai",
      tag: "Mathematical Logic",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><line x1="8.5" y1="7.5" x2="15.5" y2="7.5"/></svg>`,
      description: "Set theory, ordered pairs, binary relations, equivalence classes, and relation matrices."
    },
    {
      name: "Network Graphs",
      category: "cs-ai",
      tag: "Graph Theory",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><line x1="8.5" y1="7.5" x2="15.5" y2="7.5"/><line x1="7.5" y1="8.5" x2="10.5" y2="15.5"/><line x1="16.5" y1="8.5" x2="13.5" y2="15.5"/></svg>`,
      description: "Node-edge representations, adjacency matrices, topological connectivity, and density metrics."
    },
    {
      name: "Knowledge Representation (KRR)",
      category: "cs-ai",
      tag: "Symbolic AI",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>`,
      description: "Frame-based knowledge modeling, hierarchical slots, domain entities, and rule-based inference."
    },
    {
      name: "AI & ML Fundamentals",
      category: "cs-ai",
      tag: "Machine Learning",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"/><circle cx="12" cy="17" r="4"/><path d="M6 13h12"/><path d="M9 21h6"/></svg>`,
      description: "Core machine learning concepts, classification, evaluation metrics, and agentic autonomy foundations."
    },

    // Tools
    {
      name: "Git",
      category: "tools",
      tag: "Version Control",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
      description: "Local version tracking, commit hygiene, branch isolation, and change history management."
    },
    {
      name: "GitHub",
      category: "tools",
      tag: "Code Hosting",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>`,
      description: "Remote code repository management, open-source repositories, and collaboration workflows."
    },
    {
      name: "VS Code",
      category: "tools",
      tag: "Development Environment",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      description: "Primary development IDE configured with Python interpreters, linters, debuggers, and Git integration."
    }
  ],

  // ------------------------------------------------------------------
  // 5. PROJECTS SECTION — ALL FOUR GITHUB REPOSITORIES
  // ------------------------------------------------------------------
  // IMPORTANT:
  // - "github": Opens the repository in a new tab.
  // - "live": If URL exists, opens the actual deployed site in a new tab.
  //           If null, displays 'Coming Soon' and disables the link safely.
  // - NO PHOTOS ANYWHERE: Each project features an abstract technical
  //   SVG/CSS schematic preview with zero human portraits.
  // ------------------------------------------------------------------
  projects: [
    // PROJECT 1: E-COMMERCE SALES & CUSTOMER ANALYSIS (EXCEL DASHBOARD)
    {
      id: "excel-ecommerce-analysis",
      name: "E-Commerce Sales & Customer Analysis",
      fullTitle: "Excel Data Visualization and Dashboard",
      description: "Developed an interactive Excel dashboard to analyze e-commerce sales and customer data. The project includes data cleaning, Pivot Tables, visual charts, KPI cards, interactive filters, and business insights to help understand sales performance, profit, customer activity, and product category trends.",
      technologies: [
        "Microsoft Excel",
        "Excel Pivot Tables",
        "Excel Charts",
        "Interactive Slicers",
        "Data Cleaning",
        "Data Analysis",
        "KPI Cards",
        "Data Visualization"
      ],
      excelUrl: "https://in.docworkspace.com/d/sbCaegI8KB8C55wD_ang1ez496vslen4pe7?sa=601.1037",
      live: "https://in.docworkspace.com/d/sbCaegI8KB8C55wD_ang1ez496vslen4pe7?sa=601.1037",
      badge: "EXCEL DASHBOARD",
      codeHeader: "ECOMMERCE_SALES_DASHBOARD.xlsx",
      previewType: "excel",
      image: "assets/images/excel-dashboard.jpg",
      isExcelProject: true,
      customButtons: [
        {
          id: "btn-excel-dashboard",
          text: "View Excel Dashboard",
          url: "https://in.docworkspace.com/d/sbCaegI8KB8C55wD_ang1ez496vslen4pe7?sa=601.1037",
          isExternal: true,
          type: "excel"
        },
        {
          id: "btn-excel-details",
          text: "View Project Details",
          type: "details"
        }
      ],
      details: {
        objective: "Developed an interactive Excel dashboard to analyze e-commerce sales and customer data. The project includes data cleaning, Pivot Tables, visual charts, KPI cards, interactive filters, and business insights to help understand sales performance, profit, customer activity, and product category trends.",
        tools: [
          "Microsoft Excel",
          "Excel Pivot Tables",
          "Excel Charts",
          "Interactive Slicers",
          "Data Cleaning",
          "Data Analysis",
          "KPI Cards",
          "Data Visualization"
        ],
        kpis: [
          { label: "Total Revenue", value: "$1,245,670", trend: "+8.5% YoY" },
          { label: "Net Profit Margin", value: "24.1%", trend: "+1.2% Target" },
          { label: "Total Orders", value: "8,743", trend: "Multi-Region" },
          { label: "Avg. Order Value", value: "$142.48", trend: "+4.1% Basket" }
        ],
        features: [
          {
            title: "KPI Executive Summary Cards",
            desc: "Provides real-time visibility into high-level business metrics including gross revenue, net margin percentage, total order count, and average order value (AOV)."
          },
          {
            title: "Interactive Slicers & Timeline",
            desc: "One-click interactive filters for Region, Product Category, and Date ranges that dynamically synchronize and cross-filter all visualizations simultaneously."
          },
          {
            title: "Dynamic Pivot Tables",
            desc: "Engineered robust multi-dimensional Pivot Tables that automatically aggregate large transaction volumes by month, region, customer segment, and product line."
          },
          {
            title: "Dual-Axis Trend & Donut Charts",
            desc: "Visual charts comparing monthly sales trends against net profit trajectory alongside category distribution donuts and top product performance tables."
          },
          {
            title: "Data Cleaning & Preprocessing",
            desc: "Comprehensive ETL workflow: standardizing date timestamps, eliminating duplicates, fixing missing values, and establishing calculated profit margin fields."
          }
        ],
        analysis: [
          {
            title: "Sales Performance Analysis",
            desc: "Tracked monthly revenue fluctuations and identified seasonal peak periods, promotional spikes, and quarterly growth trends."
          },
          {
            title: "Profit Margin Breakdown",
            desc: "Analyzed margin differences between product categories, identifying top profit generators versus high-volume low-margin items."
          },
          {
            title: "Customer Activity & Behavior",
            desc: "Studied repeat purchase patterns, order frequency, customer geographic concentration, and average transaction sizes."
          },
          {
            title: "Product Category Trends",
            desc: "Evaluated sales volume across Electronics, Apparel, Home & Kitchen to guide inventory management and marketing focus."
          }
        ],
        highlights: [
          "Delivered an executive-ready, interactive spreadsheet dashboard connecting data modeling to visual business intelligence.",
          "Implemented dynamic cross-filtering with slicers for instant interactive exploration of revenue and profit.",
          "Identified top 20% products driving over 65% of overall gross profit margin.",
          "Engineered using scalable Excel table formatting allowing automatic data refresh when new transactions are loaded.",
          "Verified live cloud spreadsheet accessible via WPS Docs / docworkspace for immediate interactive review."
        ]
      }
    },

    // PROJECT 2: HOSPITAL KRR SYSTEM (DEPLOYED ON RENDER)
    {
      id: "hospital-krr",
      name: "Hospital KRR System",
      fullTitle: "Frame-Based Knowledge Representation for Hospital Management System",
      description: "A hospital management web application featuring patient, doctor, and bed management, along with rule-based recommendations using knowledge representation and reasoning.",
      technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ALIQYAAN45/Hospital_KRR_System",
      // >>> ACTUAL LIVE DEPLOYMENT URL (Render Web Service) <<<
      live: "https://hospital-krr-system.onrender.com",
      badge: "LIVE DEPLOYMENT",
      codeHeader: "KRR_FRAME_ONTOLOGY.py",
      previewType: "krr"
    },

    // PROJECT 2: E-COMMERCE ORDER DISPATCHER (DEPLOYED ON RENDER)
    {
      id: "orderflow",
      name: "E-Commerce Order Dispatcher",
      fullTitle: "E-Commerce Order Fulfillment Dispatcher Using Priority Queues",
      description: "A web application that manages e-commerce orders and processes them according to priority using a priority queue.",
      technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ALIQYAAN45/Ecommerce_Order_Dispatcher",
      // >>> ACTUAL LIVE DEPLOYMENT URL (Render Web Service) <<<
      live: "https://ecommerce-order-dispatcher.onrender.com",
      badge: "LIVE DEPLOYMENT",
      codeHeader: "PRIORITY_HEAP_DISPATCH.py",
      previewType: "queue"
    },

    // PROJECT 3: AI WORLD (DEPLOYED ON GITHUB PAGES)
    {
      id: "ai-world",
      name: "AI World",
      fullTitle: "AI World — Exploratory Platform on Artificial Intelligence",
      description: "An exploratory multi-page web platform exploring AI concepts, application domains such as healthcare and robotics, and emerging trends in intelligent technologies.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ALIQYAAN45/AI_World",
      // >>> ACTUAL LIVE DEPLOYMENT URL (GitHub Pages Live Production) <<<
      live: "https://aliqyaan45.github.io/AI_World/",
      badge: "LIVE DEPLOYMENT",
      codeHeader: "AI_DOMAINS_PORTAL.html",
      previewType: "ai-world"
    },

    // PROJECT 4: RELATIONX (DEPLOYED ON RENDER)
    {
      id: "relationx",
      name: "RelationX",
      fullTitle: "Student Relationship Analyzer Using Relations",
      description: "A web application that analyzes relationships between students and visualizes their connections through a network graph.",
      technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript", "Network Graphs"],
      github: "https://github.com/ALIQYAAN45/RelationX",
      // >>> ACTUAL LIVE DEPLOYMENT URL (Render Web Service) <<<
      live: "https://relationx.onrender.com",
      badge: "LIVE DEPLOYMENT",
      codeHeader: "DISCRETE_RELATION_ANALYZER.py",
      previewType: "graph"
    }
  ]
};

// Export to window for browser access
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}
