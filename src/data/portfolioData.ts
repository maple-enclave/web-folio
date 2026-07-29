import {
  ExperienceItem,
  ProjectItem,
  Skill,
  Certification,
  Award,
  ServiceItem,
  RecruiterPerspective,
  Testimonial,
  BlogPost
} from '../types';

export const personalDetails = {
  name: 'Pratik Deshmukh',
  title: 'Senior Technical Lead & Data Migration Architect',
  subtitle: 'Insurance Domain Migration | Cloud Data Engineering | Agentic AI Automation',
  location: 'Pune, India (Open to Global Onsite & Remote)',
  email: 'prateekd.tech@gmail.com',
  phone: '+91-9130991559',
  linkedin: 'https://www.linkedin.com/in/depratik',
  github: 'https://github.com/maple-enclave',
  whatsapp: 'https://wa.me/919130991559',
  yearsExperience: 14,
  countriesWorked: 2, // India & Malaysia Onsite
  projectsDelivered: 10,
  clientsServed: 8,
  industries: ['Life Insurance', 'P&C Insurance', 'Oil & Gas', 'e-Governance'],
  headshotUrl: '/src/assets/images/user_headshot.png',
  heroTagline: 'Architecting zero-defect enterprise data migrations and engineering next-generation agentic AI workflows for global financial, insurance, and energy leaders.',
  aboutStory: {
    whoIAm: "I am a Senior Technical Lead and Data Migration Architect with over 14 years of hands-on expertise orchestrating high-stakes, multi-terabyte enterprise data transformations. My career is defined by taking mission-critical legacy policy administration systems—specifically legacy Insurance Domain platforms—and engineering pristine, high-availability cutovers into modern cloud and enterprise targets.",
    motivation: "I thrive at the intersection of deep legacy data legacy knowledge and modern data architecture. What drives me is de-risking complex technical transitions where a single missed business logic rule could cost millions. I treat data integrity as an absolute science—building automated SQL validation engines, MDM lineage models, and self-correcting pipeline checks that guarantee 100% accuracy.",
    leadershipStyle: "I lead cross-functional engineering pods (4 to 6 Senior Data Engineers) with an empathetic yet results-obsessed culture. I bridge the gap between technical teams, business analysts, solutions architects, and C-level executive stakeholders—translating complex business requirements (BRDs) into watertight Functional Specifications (FSDs) and on-schedule releases.",
    aiAndFuture: "As data architecture evolves, I am actively pioneering Agentic AI and LLM workflow automation. By integrating platforms like n8n, LangChain, OpenAI API, Gemini API, and Claude with enterprise SQL and ETL pipelines, I am building AI-assisted data quality checkers, automated source-to-target mapping generators, and prompt-optimized code review engines."
  }
};

export const rotatingTitles = [
  'Senior Technical Lead',
  'Insurance Domain Data Migration Lead',
  'Enterprise Data Architect',
  'Cloud Data Engineer',
  'Agentic AI Builder',
  'ETL & PL/SQL Specialist',
  'Prompt Engineer',
  'Zero-Defect Delivery Leader'
];

export const highlights = [
  {
    title: '14+ Years Enterprise Mastery',
    description: '14+ years spearheading large-volume ETL, EDW, and core system cutovers across global financial & oil giants.',
    icon: 'ShieldCheck',
    badge: 'Senior Leadership'
  },
  {
    title: 'Insurance Domain Core Migration Specialist',
    description: 'Deep domain mastery in legacy Insurance Domain core policy administration, policy lifecycle, claims, and new business.',
    icon: 'Database',
    badge: 'Domain Expert'
  },
  {
    title: 'Malaysia Onsite Cutover Lead',
    description: '5 consecutive successful large-scale onsite data migration go-lives for Etiqa Malaysia into Majesco CLS.',
    icon: 'Globe',
    badge: 'Onsite Leadership'
  },
  {
    title: '95% Data Anomaly Elimination',
    description: 'Engineered automated SQL quality gates and MDM logic that slashed post-migration anomalies by 95%.',
    icon: 'Zap',
    badge: 'Data Integrity'
  },
  {
    title: 'Agentic AI & LLM Automation',
    description: 'Integrating n8n, LangChain, OpenAI, and Gemini for AI-driven mapping, automated code review, and workflow agents.',
    icon: 'Cpu',
    badge: 'AI Innovator'
  },
  {
    title: 'Cloud & Modern Data Stack',
    description: 'Proficient across Snowflake, AWS (S3, Athena, EC2), GCP, and modern Python (Pandas/NumPy) data engineering.',
    icon: 'Cloud',
    badge: 'Cloud Native'
  }
];

export const skillsList: Skill[] = [
  // Data Engineering & ETL
  { name: 'Informatica PowerCenter', category: 'etl', proficiency: 96, experienceYears: 12, iconName: 'Workflow', description: 'Advanced mapping, session tuning, MDM integration, and enterprise cutover pipelines.' },
  { name: 'PL/SQL & Oracle', category: 'databases', proficiency: 95, experienceYears: 14, iconName: 'Database', description: 'Stored procedures, packages, triggers, nested tables, arrays, and query tuning.' },
  { name: 'SQL & Query Tuning', category: 'databases', proficiency: 98, experienceYears: 14, iconName: 'Code', description: 'Advanced indexing, execution plan optimization, complex CTEs, and automated validation.' },
  { name: 'SSIS (MSBI Suite)', category: 'etl', proficiency: 90, experienceYears: 10, iconName: 'Layers', description: 'Star/Snowflake schema populating, ODS pipelines, automated error handling.' },
  { name: 'Source-to-Target (STTM)', category: 'data-engineering', proficiency: 98, experienceYears: 14, iconName: 'FileSpreadsheet', description: 'Detailed data lineage specification, business rule translation, and field-level mapping.' },
  { name: 'Insurance Domain Core Platform', category: 'domain', proficiency: 95, experienceYears: 10, iconName: 'Briefcase', description: 'Deep extraction and transformation logic for legacy Insurance Domain policy administration systems.' },
  
  // Cloud & Analytics
  { name: 'Snowflake', category: 'cloud', proficiency: 85, experienceYears: 4, iconName: 'CloudSnow', description: 'Cloud data warehousing, virtual warehouses, zero-copy cloning, and SQL analytics.' },
  { name: 'AWS (S3, Athena, EC2)', category: 'cloud', proficiency: 82, experienceYears: 5, iconName: 'Cloud', description: 'S3 staging lakes, Athena query engines, and cloud compute setup.' },
  { name: 'GCP Data Stack', category: 'cloud', proficiency: 80, experienceYears: 4, iconName: 'Server', description: 'Google Cloud Platform data tools, BigQuery fundamentals, and cloud storage.' },
  { name: 'Python (Pandas, NumPy)', category: 'data-engineering', proficiency: 88, experienceYears: 6, iconName: 'Terminal', description: 'Data wrangling, automated ETL scripting, API integration, and anomaly detection.' },
  { name: 'Power BI & Tableau', category: 'data-engineering', proficiency: 85, experienceYears: 8, iconName: 'BarChart3', description: 'Reconciliation dashboards, data quality audit reports, and executive analytics.' },

  // AI & Agentic Automation
  { name: 'Prompt Engineering', category: 'ai', proficiency: 95, experienceYears: 3, iconName: 'Sparkles', isAiRelated: true, description: 'Few-shot prompting, systemic instruction design, structured JSON output generation.' },
  { name: 'Agentic AI & n8n', category: 'ai', proficiency: 90, experienceYears: 2, iconName: 'Bot', isAiRelated: true, description: 'Automated multi-agent workflows, webhook triggers, self-healing data checking.' },
  { name: 'OpenAI API & Gemini API', category: 'ai', proficiency: 92, experienceYears: 3, iconName: 'BrainCircuit', isAiRelated: true, description: 'Server-side LLM integration, function calling, semantic search, and document extraction.' },
  { name: 'Claude & Anthropic API', category: 'ai', proficiency: 90, experienceYears: 2, iconName: 'Cpu', isAiRelated: true, description: 'Complex reasoning prompts, code generation, and long-context data mapping.' },
  { name: 'LangChain & RAG', category: 'ai', proficiency: 85, experienceYears: 2, iconName: 'GitBranch', isAiRelated: true, description: 'Retrieval Augmented Generation, vector embeddings, document chunking, and memory.' },
  { name: 'Replit & Vibe Coding', category: 'ai', proficiency: 88, experienceYears: 2, iconName: 'Code2', isAiRelated: true, description: 'Rapid AI-assisted app prototyping, microservice generation, and API testing.' },

  // Leadership & Governance
  { name: 'Technical Leadership', category: 'leadership', proficiency: 95, experienceYears: 10, iconName: 'Users', description: 'Leading 4-6 engineer pods, code reviews, Agile sprints, and release governance.' },
  { name: 'SDLC & Cutover Governance', category: 'leadership', proficiency: 96, experienceYears: 14, iconName: 'ShieldAlert', description: 'Zero-defect go-live execution, rollback planning, UAT sign-offs, and stakeholder alignment.' }
];

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Technical Lead',
    company: 'ZiniosEdge Software Technologies',
    location: 'Bengaluru, India',
    client: 'Infosys – British Petroleum (BP)',
    domain: 'Oil & Gas Domain',
    duration: 'May 2025 – Present',
    period: 'May 2025 – Present',
    isCurrent: true,
    summary: 'Directing data architecture and technical migration engineering for British Petroleum under Infosys, establishing end-to-end data lineage, automated quality frameworks, and Master Data Management (MDM) pipelines.',
    highlights: [
      'Authored comprehensive data mapping documents and source-to-target specifications for a massive legacy system migration initiative.',
      'Led and mentored a cross-functional pod of 4 data engineers, translating complex BRDs into scalable, on-schedule cutover strategies.',
      'Engineered automated SQL quality validation scripts that eliminated post-migration data anomalies by 95%.',
      'Architected high-throughput Informatica PowerCenter pipelines integrating Master Data Management (MDM) rules for enterprise single-source-of-truth reporting.'
    ],
    technologies: ['Informatica PowerCenter', 'SQL', 'PL/SQL', 'Oracle', 'MDM', 'Python', 'Unix Shell', 'Data Lineage'],
    metrics: [
      { label: 'Post-Migration Anomaly Reduction', value: '95%' },
      { label: 'Engineering Pod Size', value: '4 Engineers' },
      { label: 'Data Quality Target', value: '100% Zero-Defect' }
    ]
  },
  {
    id: 'exp-2',
    role: 'Lead Data Engineer (Onsite Lead)',
    company: 'Majesco Sdn Bhd',
    location: 'Kuala Lumpur, Malaysia (Onsite)',
    client: 'Etiqa Insurance Malaysia',
    domain: 'Life Insurance Domain',
    duration: 'Mar 2017 – Jan 2025',
    period: 'Mar 2017 – Jan 2025',
    isOnsite: true,
    summary: 'Served as the primary Onsite Technical Lead in Malaysia, spearheading 5 consecutive large-scale core policy administration migrations from Etiqa legacy Life/Asia platforms into Majesco CLS.',
    highlights: [
      'Spearheaded technical execution and cutover delivery for 5 consecutive migration projects for major Malaysian insurance providers.',
      'Architected high-performance Informatica PowerCenter & PL/SQL transformation pipelines to migrate legacy Insurance Domain policy data into Majesco CLS with 100% business rule fidelity.',
      'Defined robust source-to-target mapping strategies (STTM) and automated reconciliation checks for seamless UAT sign-offs.',
      'Served as the primary escalation point during live production cutovers, delivering zero-defect go-live deployments.'
    ],
    technologies: ['Insurance Domain Core', 'Majesco CLS', 'Informatica PowerCenter', 'Oracle PL/SQL', 'Unix Scripting', 'SQL', 'Toad'],
    metrics: [
      { label: 'Consecutive Go-Lives Delivered', value: '5 Projects' },
      { label: 'Onsite Tenure', value: '7+ Years' },
      { label: 'Business Rule Accuracy', value: '100%' }
    ]
  },
  {
    id: 'exp-3',
    role: 'Senior Software Engineer',
    company: 'Majesco Ltd',
    location: 'Mumbai, India',
    client: 'US-Based P&C Insurance Leaders',
    domain: 'P&C Insurance Domain',
    duration: 'Dec 2015 – Feb 2017',
    period: 'Dec 2015 – Feb 2017',
    summary: 'Led the Claims module implementation and managed 6 software engineers to build an Enterprise Data Warehouse (EDW) and Operational Data Store (ODS) using SSIS and dimensional modeling.',
    highlights: [
      'Managed a team of 6 engineers to deliver an Enterprise Data Warehouse (EDW) and ODS across Policy Administration, Claims, and EDM.',
      'Engineered SSIS ETL workflows using Star and Snowflake dimensional modeling, optimizing data processing efficiency.',
      'Achieved a 30% reduction in nightly ETL processing time via advanced SSIS package tuning and error handling.',
      'Designed SSRS data quality checkpoints and executive reporting dashboards.'
    ],
    technologies: ['SSIS', 'SSRS', 'SSAS', 'SQL Server', 'Star/Snowflake Schema', 'EDW/ODS', 'T-SQL'],
    metrics: [
      { label: 'ETL Processing Speedup', value: '30%' },
      { label: 'Team Led', value: '6 Engineers' },
      { label: 'Data Integrity Rate', value: '100%' }
    ]
  },
  {
    id: 'exp-4',
    role: 'Senior Software Engineer',
    company: 'Mastek Ltd / Majesco Ltd',
    location: 'Mumbai, India',
    client: 'CLS Core Product Suite',
    domain: 'Life & P&C Insurance Domain',
    duration: 'Jun 2014 – Dec 2015',
    period: 'Jun 2014 – Dec 2015',
    summary: 'Architected Oracle PL/SQL core engines for New Business, Policy Administration (PAS), and Claims modules within the flagship CLS product suite.',
    highlights: [
      'Engineered complex Oracle PL/SQL stored procedures, packages, triggers, and nested tables.',
      'Improved core database query performance by 30% by refactoring context-switching PL/SQL code structures.',
      'Led the seamless integration of the Goods and Services Tax (GST) taxation engine into core insurance modules.',
      'Honored with the prestigious "Heart of Mastek Award" (2015) for exceptional performance and organizational contributions.'
    ],
    technologies: ['Oracle PL/SQL', 'Packages/Triggers', 'Collections/Nested Tables', 'SQL Developer', 'GST Integration'],
    metrics: [
      { label: 'Query Speed Improvement', value: '30%' },
      { label: 'Award Won', value: 'Heart of Mastek' }
    ]
  },
  {
    id: 'exp-5',
    role: 'Senior Developer',
    company: 'ABM Knowledgeware Ltd',
    location: 'Mumbai, India',
    client: 'Maharashtra State Government Municipal Corporations',
    domain: 'e-Governance Domain',
    duration: 'Aug 2012 – May 2014',
    period: 'Aug 2012 – May 2014',
    summary: 'Held full technical ownership of the mission-critical Property Tax Module supporting 50+ municipal corporations across Maharashtra within a large-scale e-Governance framework.',
    highlights: [
      'Engineered and maintained core tax calculation engines serving 50+ municipal corporations.',
      'Directed full defect lifecycle management, converting complex municipal tax BRDs into watertight Functional Specifications.',
      'Ensured 100% compliance with statutory state taxation laws and zero downtime during high-volume tax assessment periods.'
    ],
    technologies: ['PL/SQL', 'Oracle', 'SQL Server', 'FSD Authoring', 'e-Governance Tax Engine'],
    metrics: [
      { label: 'Municipal Bodies Supported', value: '50+ Municipalities' },
      { label: 'Tax Calculations Handled', value: 'Millions Annually' }
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Etiqa Legacy Life/Asia to Majesco CLS Core Data Cutover',
    category: 'data-migration',
    client: 'Etiqa Insurance (Malaysia)',
    domain: 'Life Insurance',
    duration: '2017 – 2025 (Onsite Malaysia)',
    overview: 'A flagship multi-year enterprise transformation extracting decades of core policy data, policyholder history, riders, claims, and accounting records from legacy Insurance Domain AS/400 systems into the modern Majesco CLS platform.',
    businessProblem: 'Etiqa operated on a legacy Insurance Domain mainframe environment with complex proprietary data structures, un-indexed policy tables, and custom business rules accumulated over decades. Transitioning to Majesco CLS required 100% financial and policy rule reconciliation with zero operational downtime during the weekend cutover window.',
    architectureDescription: 'Built an end-to-end staging architecture using Informatica PowerCenter and Oracle PL/SQL. Data was extracted from raw Insurance Domain files, transformed through staged business logic modules (Policy Admin, Billing, Claims, Reinsurance), validated against automated SQL quality gates, and loaded into Majesco CLS target schemas.',
    responsibilities: [
      'Onsite Lead Data Architect overseeing full SDLC migration delivery.',
      'Authoring Source-to-Target Mapping (STTM) specifications for millions of policies.',
      'Developing Informatica PowerCenter workflows and complex PL/SQL transformation packages.',
      'Executing live weekend cutover operations and post-go-live production stabilization.'
    ],
    toolsAndTech: ['Insurance Domain Platform', 'Majesco CLS', 'Informatica PowerCenter', 'Oracle PL/SQL', 'Unix Shell Scripting', 'Toad', 'SQL Validation Engines'],
    challengesAndSolutions: 'Challenge: Mismatched policy status codes and historical billing anomalies in legacy Insurance Domain. Solution: Engineered automated PL/SQL cleanup scripts and reconciliation rule packages that pre-sanitized 99.8% of legacy data before loading.',
    outcomeAndImpact: 'Successfully executed 5 consecutive zero-defect go-lives, enabling Etiqa to retire legacy mainframe systems, cut licensing overhead by millions, and modernize customer self-service operations.',
    featured: true,
    badge: 'Flagship Enterprise Cutover'
  },
  {
    id: 'proj-2',
    title: 'British Petroleum (BP) Enterprise Data Lineage & MDM Pipeline',
    category: 'edw',
    client: 'Infosys / British Petroleum (BP)',
    domain: 'Oil & Gas',
    duration: '2025 – Present',
    overview: 'High-volume data migration and data lineage mapping program consolidating enterprise asset, vendor, and operational datasets into a unified master data structure.',
    businessProblem: 'Disparate legacy data silos across global oil operations suffered from duplicate records, inconsistent attribute naming, and lack of verified data lineage for compliance reporting.',
    architectureDescription: 'Engineered high-performance Informatica PowerCenter pipelines enforcing Master Data Management (MDM) deduplication and automated lineage tracking.',
    responsibilities: [
      'Leading a 4-engineer data engineering pod.',
      'Designing source-to-target data flows and automated validation scripts.',
      'Building MDM deduplication pipelines and single-source-of-truth reporting views.'
    ],
    toolsAndTech: ['Informatica PowerCenter', 'SQL', 'Oracle', 'MDM Logic', 'Python', 'Unix Shell'],
    challengesAndSolutions: 'Challenge: High rate of data anomalies across cross-border relational schemas. Solution: Deployed automated SQL quality gates that caught 95% of data anomalies pre-ETL.',
    outcomeAndImpact: 'Established clear data lineage, reduced downstream report errors by 95%, and delivered a centralized MDM repository for global energy analytics.',
    featured: true,
    badge: 'Enterprise Energy Data'
  },
  {
    id: 'proj-3',
    title: 'US P&C Insurance Enterprise Data Warehouse (EDW) & ODS',
    category: 'edw',
    client: 'Majesco US Clients',
    domain: 'P&C Insurance',
    duration: '2015 – 2017',
    overview: 'Architected an Enterprise Data Warehouse and Operational Data Store for leading US Property & Casualty insurers to support real-time claims and policy analytics.',
    businessProblem: 'Legacy transactional systems (OLTP) were overwhelmed by heavy analytical queries, causing system lag during business peak hours.',
    architectureDescription: 'Built Star and Snowflake dimensional models fed by automated SSIS ETL workflows, transforming transactional data into optimized analytical marts.',
    responsibilities: [
      'Technical lead for a 6-engineer squad.',
      'Designing SSIS packages, dimensional tables, and fact tables.',
      'Tuning SSIS memory buffers and SQL execution plans.'
    ],
    toolsAndTech: ['SSIS', 'SSRS', 'SSAS', 'SQL Server', 'T-SQL', 'Dimensional Modeling'],
    challengesAndSolutions: 'Challenge: Long nightly ETL batch windows exceeding time limits. Solution: Refactored SSIS packages with parallel task execution and incremental staging, reducing processing runtime by 30%.',
    outcomeAndImpact: 'Cut nightly ETL batch runtime by 30%, ensured 100% data integrity, and delivered SSRS dashboards for C-suite decision-making.',
    featured: true,
    badge: 'EDW Performance Tuning'
  },
  {
    id: 'proj-4',
    title: 'Maharashtra Municipal Corporations e-Governance Property Tax Suite',
    category: 'egov',
    client: 'ABM Knowledgeware / State Government',
    domain: 'e-Governance',
    duration: '2012 – 2014',
    overview: 'Complete technical ownership of the Property Tax module supporting 50+ municipal corporations across Maharashtra.',
    businessProblem: 'Diverse municipal rules, varying tax rates, and massive transaction volumes required a robust, compliant tax calculation engine.',
    architectureDescription: 'Oracle PL/SQL core engine handling multi-tiered taxation logic, automated penalty computations, and citizen billing workflows.',
    responsibilities: [
      'Full technical module owner.',
      'Converting complex municipal tax BRDs into Functional Specifications.',
      'Deploying SQL patches and maintaining live system health.'
    ],
    toolsAndTech: ['Oracle PL/SQL', 'SQL Developer', 'Stored Procedures', 'Tax Assessment Algorithms'],
    challengesAndSolutions: 'Challenge: High peak billing loads causing database lockups. Solution: Optimized PL/SQL cursors and bulk processing collections.',
    outcomeAndImpact: 'Supported 50+ municipalities with zero billing downtime during annual tax assessment deadlines.',
    featured: false,
    badge: 'e-Governance Mission Critical'
  },
  {
    id: 'proj-5',
    title: 'AI-Powered Agentic Data Quality & Source-to-Target Generator',
    category: 'ai-automation',
    client: 'Internal R&D / Innovation',
    domain: 'AI & Data Engineering',
    duration: '2025 – 2026',
    overview: 'An AI agent workflow using n8n, LangChain, and OpenAI/Gemini APIs that automatically parses database DDLs, generates Source-to-Target Mapping (STTM) drafts, and constructs automated SQL validation rules.',
    businessProblem: 'Manual creation of STTM spreadsheets and SQL validation scripts consumes up to 30% of a data architect\'s time during initial migration discovery.',
    architectureDescription: 'Node-based n8n agent workflow connected to Gemini 2.5/OpenAI LLM APIs, vector schemas, and custom Python validators.',
    responsibilities: ['Architecting prompt chains, agentic nodes, and integration endpoints.'],
    toolsAndTech: ['n8n', 'OpenAI API', 'Gemini API', 'LangChain', 'Python', 'Prompt Engineering', 'Replit'],
    challengesAndSolutions: 'Challenge: Ensuring LLM responses conform strictly to enterprise data dictionary schemas. Solution: Implemented Pydantic JSON schema constraints and multi-shot prompt engineering.',
    outcomeAndImpact: 'Accelerates migration discovery phase by 60%, generating baseline STTM drafts and automated SQL validation scripts in minutes.',
    featured: true,
    badge: 'Agentic AI Innovation'
  }
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'Introduction to Responsible AI',
    issuer: 'Google',
    issueDate: 'March 2026',
    isAiRelated: true,
    badgeText: 'Google AI Certified'
  },
  {
    id: 'cert-2',
    title: 'Fundamentals of Prompt Engineering with Claude',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: 'March 2026',
    isAiRelated: true,
    badgeText: 'AWS AI Specialist'
  },
  {
    id: 'cert-3',
    title: 'Data Management in the AI Era: Complete Masterclass',
    issuer: 'Enterprise AI Academy',
    issueDate: 'March 2026',
    isAiRelated: true,
    badgeText: 'AI Data Architecture'
  },
  {
    id: 'cert-4',
    title: 'LangChain for LLM Application Development',
    issuer: 'DeepLearning.AI / Coursera',
    issueDate: 'March 2026',
    isAiRelated: true,
    badgeText: 'LLM Systems'
  },
  {
    id: 'cert-5',
    title: 'Vibe Coding 101 with Replit',
    issuer: 'DeepLearning.AI',
    issueDate: 'October 2025',
    isAiRelated: true,
    badgeText: 'Rapid AI Prototyping'
  },
  {
    id: 'cert-6',
    title: 'Introduction to ITIL® V4',
    issuer: 'Simplilearn',
    issueDate: 'June 2026',
    isAiRelated: false,
    badgeText: 'Service Governance'
  },
  {
    id: 'cert-7',
    title: 'Introduction to Prompt Engineering',
    issuer: 'Simplilearn',
    issueDate: 'October 2025',
    isAiRelated: true,
    badgeText: 'Prompt Engineering'
  },
  {
    id: 'cert-8',
    title: 'Learn MSBI, SSIS, SSRS & SSAS Step by Step',
    issuer: 'Udemy',
    issueDate: 'December 2022',
    isAiRelated: false,
    badgeText: 'BI Suite Master'
  },
  {
    id: 'cert-9',
    title: 'Introduction to Cloud Computing',
    issuer: 'Simplilearn',
    issueDate: 'December 2022',
    isAiRelated: false,
    badgeText: 'Cloud Fundamentals'
  }
];

export const awards: Award[] = [
  {
    id: 'award-1',
    title: 'Stellar Award',
    organization: 'Majesco Ltd',
    year: '2017',
    description: 'Awarded for outstanding technical delivery, flawless client satisfaction, and zero-defect execution on core data migration programs.',
    category: 'Client Delivery Excellence'
  },
  {
    id: 'award-2',
    title: 'Heart of Mastek Award',
    organization: 'Mastek Ltd',
    year: '2015',
    description: 'Recognized across the global organization for exceptional performance, team mentoring, and high-impact contributions to enterprise goals.',
    category: 'Organizational Leadership'
  },
  {
    id: 'award-3',
    title: '5x Onsite Zero-Defect Go-Live Recognition',
    organization: 'Etiqa Insurance / Majesco Malaysia',
    year: '2017 – 2024',
    description: 'Commended by client executive leadership for delivering 5 consecutive core Insurance Domain cutovers without business interruption or data loss.',
    category: 'Onsite Cutover Mastery'
  }
];

export const recruiterPerspectives: RecruiterPerspective[] = [
  {
    id: 'rec-1',
    targetRole: 'CTOs & Solution Architects',
    icon: 'Cpu',
    keyTakeaway: 'Risk Reduction & System Stability Specialist',
    proofPoints: [
      '14+ years managing zero-defect cutovers for legacy Insurance Domain core policy administration systems.',
      'Slashed post-migration anomalies by 95% using automated SQL gates and MDM frameworks.',
      'Deep fluency in bridging legacy SQL/PLSQL infrastructure with modern AWS, GCP, and Snowflake environments.'
    ],
    recommendedQuestion: 'Ask about my 5 consecutive onsite cutovers in Malaysia for Etiqa Insurance and how I de-risked legacy Insurance Domain data structures.'
  },
  {
    id: 'rec-2',
    targetRole: 'Engineering Directors & Delivery Managers',
    icon: 'Users',
    keyTakeaway: 'Hands-on Pod Leader with Onsite Stakeholder Mastery',
    proofPoints: [
      'Proven track record leading pods of 4-6 senior data engineers across full SDLC delivery.',
      '7+ years direct onsite client leadership experience in Kuala Lumpur, Malaysia.',
      'Expert at authoring watertight Source-to-Target Mappings (STTM) and translating BRDs into technical specifications.'
    ],
    recommendedQuestion: 'Ask how I manage cross-functional collaboration between BAs, QA, and executive stakeholders during critical weekend go-lives.'
  },
  {
    id: 'rec-3',
    targetRole: 'AI & Data Innovation Heads',
    icon: 'Sparkles',
    keyTakeaway: 'Pragmatic Agentic AI & LLM Workflow Pioneer',
    proofPoints: [
      'Certified in AWS Prompt Engineering, Google Responsible AI, and LangChain LLM application building.',
      'Building automated n8n & Python agent workflows for automated data mapping and anomaly resolution.',
      'Applying GenAI directly to enterprise data engineering to shorten migration discovery by 60%.'
    ],
    recommendedQuestion: 'Ask how I build AI-powered SQL quality audit workflows using Gemini and OpenAI APIs.'
  }
];

export const services: ServiceItem[] = [
  {
    id: 'serv-1',
    title: 'Enterprise Data Migration Architecture',
    icon: 'Database',
    description: 'End-to-end design and execution of high-risk core system data migrations, specializing in legacy Insurance Domain to modern platforms.',
    deliverables: [
      'Source-to-Target Mapping (STTM) specifications',
      'Automated SQL Quality Gate engines & pre-sanitizers',
      'Weekend cutover runbooks & rollback strategies',
      'Post-go-live data reconciliation & audit reports'
    ],
    targetAudience: 'Insurers, Financial Institutions & Global Enterprises'
  },
  {
    id: 'serv-2',
    title: 'Technical Leadership & Delivery Management',
    icon: 'Users',
    description: 'Directing cross-functional engineering pods, enforcing code review governance, and managing onsite client relationships.',
    deliverables: [
      'SDLC delivery management & sprint coordination',
      'Code review & performance tuning standards',
      'Engineering pod mentorship & technical training',
      'Onsite stakeholder escalation leadership'
    ],
    targetAudience: 'IT Consultancies, System Integrators & Tech Directors'
  },
  {
    id: 'serv-3',
    title: 'Agentic AI & Data Pipeline Automation',
    icon: 'Bot',
    description: 'Integrating LLMs, prompt engineering, and n8n agent workflows into enterprise ETL & data engineering pipelines.',
    deliverables: [
      'AI-powered data mapping draft generators',
      'Automated code review & SQL validation agents',
      'Server-side Gemini & OpenAI API integration',
      'Custom LLM workflow orchestration'
    ],
    targetAudience: 'AI Startups, Enterprise Data Teams & Innovation Labs'
  },
  {
    id: 'serv-4',
    title: 'ETL Optimization & Database Performance Tuning',
    icon: 'Zap',
    description: 'Refactoring lagging Informatica, SSIS, and PL/SQL codebases to cut processing batch runtimes and resource consumption.',
    deliverables: [
      'Database execution plan analysis & index optimization',
      'SSIS & Informatica session tuning',
      'Context-switch reduction in Oracle PL/SQL packages',
      '30%+ verified runtime speedup'
    ],
    targetAudience: 'Data Warehouse Operations & System Architects'
  }
];

export const languages = [
  { name: 'English', proficiency: 'Professional / Full Working Efficiency', flag: '🇬🇧' },
  { name: 'Hindi', proficiency: 'Native / Bilingual', flag: '🇮🇳' },
  { name: 'German', proficiency: 'Goethe-Zertifikat A1', flag: '🇩🇪' }
];

export const placeholderTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Senior Program Director',
    role: 'Global Transformation Leader',
    company: 'Etiqa / Majesco Malaysia',
    relationship: 'Managed Pratik directly on Etiqa Cutover',
    quote: 'Pratik is an absolute powerhouse when it comes to legacy Insurance Domain data migrations. His deep domain grasp, calm pressure under go-live deadlines, and zero-defect record made him our most trusted onsite technical lead in Malaysia.'
  },
  {
    id: 'test-2',
    author: 'Principal Data Architect',
    role: 'Enterprise Data Strategy Lead',
    company: 'Infosys / British Petroleum',
    relationship: 'Worked with Pratik on BP Oil & Gas Migration',
    quote: 'Pratik transformed our data quality posture at BP. His automated SQL validation gates cut data anomalies by 95%, establishing a rock-solid foundation for our enterprise analytics.'
  }
];

export const placeholderBlogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'De-risking Insurance Domain Mainframe Cutovers: A 14-Year Data Architect Playbook',
    excerpt: 'Key technical strategies for extracting, sanitizing, and validating decades of legacy insurance policy administration data into modern target platforms.',
    category: 'Data Migration',
    date: 'February 2026',
    readTime: '6 min read',
    isPlaceholder: true
  },
  {
    id: 'blog-2',
    title: 'Building Agentic AI Quality Checkers for Enterprise Data Pipelines',
    excerpt: 'How combining n8n, LangChain, and Gemini API turns tedious manual data mapping into an automated 5-minute discovery process.',
    category: 'AI Engineering',
    date: 'January 2026',
    readTime: '8 min read',
    isPlaceholder: true
  }
];
