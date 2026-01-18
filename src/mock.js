// Mock data for Ajith Reddy's Portfolio

export const portfolioData = {
  personal: {
    name: "Ajith Reddy",
    title: "Software Engineer",
    subtitle: "Ruby on Rails & Workato Developer",
    tagline: "Building scalable web applications, REST APIs, and enterprise integrations",
    summary: "Software Engineer with 3.6+ years of experience specializing in Ruby on Rails and automation. Proven track record in developing scalable web applications, optimizing performance, and delivering enterprise integrations across Retail, Healthcare, HR, and Finance domains.",
    email: "ajithreddy478@gmail.com",
    phone: "+91 9632038829",
    linkedin: "https://www.linkedin.com/in/ajith-reddy-b75604185/",
    github: "https://github.com/ajithreddy478",
    resumeUrl: "https://drive.google.com/file/d/1tqgLcW3W9U2LaIIjsA4VWLnls2IWMFyF/view?usp=sharing",
    location: "India"
  },

  skills: {
    backend: [
      { name: "Ruby on Rails", level: 95 },
      { name: "Ruby", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Redis & Sidekiq", level: 80 }
    ],
    frontend: [
      { name: "JavaScript", level: 80 },
      { name: "HTML & CSS", level: 85 },
      { name: "KendoGrid UI", level: 75 },
      { name: "AJAX & jQuery", level: 80 },
      { name: "Tailwind CSS", level: 70 }
    ],
    automation: [
      { name: "Workato", level: 90 },
      { name: "Webhooks", level: 85 },
      { name: "API Integration", level: 90 },
      { name: "Custom Connectors", level: 85 }
    ],
    tools: [
      { name: "Git & GitLab", level: 85 },
      { name: "Jira & Confluence", level: 80 },
      { name: "Postman", level: 85 },
      { name: "RSpec & Cucumber", level: 80 },
      { name: "Linux & Shell", level: 75 }
    ]
  },

  experience: [
    {
      id: 1,
      company: "RetailRealm Pvt Ltd",
      role: "Ruby On Rails Developer",
      period: "December 2024 - Present",
      location: "Pune, India",
      description: "Engineered scalable Ruby on Rails applications following MVC architecture and DRY principles.",
      achievements: [
        "Built optimized PostgreSQL queries, views, and indexes, improving performance by 40%",
        "Developed secure REST APIs with JWT authentication, serializers, and Swagger documentation",
        "Built responsive, real-time UIs using HTML, JavaScript, Tailwind CSS, and KendoGrid",
        "Automated workflows and email notifications using background jobs and caching",
        "Developed automated test suites with RSpec, FactoryBot, and Cucumber following TDD/BDD"
      ],
      technologies: ["Ruby on Rails 7.2", "PostgreSQL", "REST APIs", "Webhooks", "JavaScript", "KendoGrid", "Sidekiq", "Redis", "RSpec", "Cucumber", "Tailwind CSS"]
    },
    {
      id: 2,
      company: "Ultimo Software Solutions",
      role: "Workato Developer",
      period: "November 2023 - November 2024",
      location: "Remote",
      description: "Developed scalable automation workflows and enterprise integrations using Workato platform.",
      achievements: [
        "Automated Workato recipes including triggers, actions, and custom connectors",
        "Reduced sync errors by 30% through optimized data synchronization workflows",
        "Integrated D365, Shopify, and Magento using APIs and Event Streams",
        "Improved performance by applying N+1 query optimization techniques",
        "Delivered solutions for global clients in Agile/Scrum environment"
      ],
      technologies: ["Workato", "Ruby on Rails", "REST APIs", "D365", "Shopify"]
    },
    {
      id: 3,
      company: "Srishti Software Applications Pvt Ltd",
      role: "Software Engineer - Trainee",
      period: "May 2022 - October 2023",
      location: "Bangalore, India",
      description: "Developed scalable Ruby on Rails applications with focus on data security and compliance.",
      achievements: [
        "Implemented MVC architecture for scalable application design",
        "Optimized PostgreSQL database performance with Active Record and indexing",
        "Integrated third-party APIs and services for enhanced functionality",
        "Ensured data security and compliance across healthcare and finance domains"
      ],
      technologies: ["Ruby on Rails", "PostgreSQL", "REST APIs", "Active Record"]
    }
  ],

  projects: [
    {
      id: 1,
      name: "XStreamPOS",
      tagline: "Enterprise POS & Retail Operations Management Platform",
      description:
        "A large-scale retail operations platform that integrates directly with POS machines to manage real-time transactions, store performance, operational workflows, and enterprise-wide retail processes.",
      problem:
        "Large retail environments required a unified system to process high-volume POS data, monitor store operations in real time, and securely manage operational workflows across multiple roles and locations.",
      solution:
        "Designed and implemented a high-performance POS-driven operations module using Ruby on Rails, featuring optimized PostgreSQL queries, transactional integrity, background processing, and rich data grids for operational visibility.",
      impact:
        "Improved operational reporting performance by 60%, reduced data processing latency by 40%, and enabled scalable handling of high-throughput POS transaction data.",
      technologies: [
        "Ruby on Rails 7.2",
        "PostgreSQL",
        "Redis",
        "Sidekiq",
        "REST APIs",
        "JavaScript",
        "AJAX",
        "Kendo Grid",
        "HTML5",
        "CSS3",
        "Background Jobs",
        "Scheduled Jobs (Cron/Whenever)",
        "RSpec",
        "Cucumber (BDD)"
      ],
      features: [
        "Real-time processing and aggregation of POS transaction data",
        "Operational dashboards with advanced filtering, search, and drill-down capabilities",
        "Role-based access control and scheduled operational reports",
        "Report caching and memorization for faster repeat access",
        "Secure multi-sheet Excel exports for operational and compliance use cases",
        "Scalable background processing for bulk data imports with progress tracking"
      ],
      period: "December 2024 - Present"
    },    
    {
      id: 2,
      name: "Brandbank",
      tagline: "Enterprise Data Synchronization Platform",
      description: "Created reusable Workato recipes for efficient data synchronization across Brandbank's platforms. Automated data processing with Event Streams, webhooks, and comprehensive error handling.",
      problem: "Manual data synchronization led to frequent errors and inefficiencies across multiple platforms.",
      solution: "Developed automated Workato workflows with secure data transfers via SFTP, FTP, HTTP, and Azure Data Lake.",
      impact: "Reduced sync errors by 30% and minimized manual data entry through automated processing",
      technologies: ["Workato", "Ruby on Rails", "PostgreSQL", "D365", "Shopify", "Azure"],
      features: [
        "Reusable recipes for data synchronization",
        "Event Streams and webhook integration",
        "Automated secure data transfers (SFTP/FTP/HTTP)",
        "Custom authorization token generation",
        "Integration with D365, Shopify, and third-party APIs"
      ],
      period: "November 2023 - November 2024",
      award: "Awarded for exceptional contribution to BrandBank Australia Project"
    },
    {
      id: 3,
      name: "ACCF - TATA Trusts",
      tagline: "HR & Billing Management System",
      description: "Developed and maintained comprehensive Billing & HR modules covering core HR and ERP functionalities for TATA Trusts. Implemented role-based access control and custom Rails engines.",
      problem: "Required secure, scalable HR and billing system with role-based access for large organization.",
      solution: "Built modular Rails application with custom engines, secure file handling, and dynamic data interactions.",
      impact: "Successfully delivered secure, maintainable system handling core HR and financial operations",
      technologies: ["Ruby on Rails", "PostgreSQL", "JavaScript", "Active Storage", "RSpec"],
      features: [
        "Role-based access control for secure user management",
        "Custom Rails engines and gems",
        "PDF/CSV uploads and downloads",
        "JSON imports and CSV/ZIP exports",
        "Dynamic UX using AJAX interactions"
      ],
      period: "September 2022 - October 2023"
    }
  ],

  certifications: [
    {
      id: 1,
      name: "Workato Automation Pro I",
      issuer: "Workato",
      date: "2023",
      category: "Automation"
    },
    {
      id: 2,
      name: "Workato Automation Pro II",
      issuer: "Workato",
      date: "2024",
      category: "Automation"
    },
    {
      id: 3,
      name: "Workato Automation Pro III",
      issuer: "Workato",
      date: "2024",
      category: "Automation"
    },
    {
      id: 4,
      name: "AWS Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "In Progress",
      category: "Cloud"
    },
    {
      id: 5,
      name: "Enterprise Application Development",
      issuer: "Jspiders",
      date: "October 2021",
      category: "Development"
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering",
      institution: "Kalpataru Institute of Technology",
      year: "2021",
      field: "Engineering"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Project Manager",
      role: "Ultimo Software Solutions",
      text: "Ajith's expertise in Workato automation significantly improved our data synchronization processes. His contributions to the BrandBank project were exceptional.",
      rating: 5
    },
    {
      id: 2,
      name: "Tech Lead",
      role: "RetailRealm Pvt Ltd",
      text: "Outstanding Ruby on Rails developer. His optimization work improved our system performance by 40%, and his code quality is consistently excellent.",
      rating: 5
    }
  ]
};

export default portfolioData;
