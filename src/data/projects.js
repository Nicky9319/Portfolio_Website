// Project data for portfolio
// Internal metrics (complexity, impressiveness) are used for sorting/filtering
// but NOT displayed on the frontend

export const projects = [
  // Featured live-link demos
  {
    id: 'voice-calling',
    name: 'Voice Calling',
    tier: 1,
    complexity: 8,
    impressiveness: 9,
    description: 'Real-time voice agent demo with live conversational AI. Talk to an agent that listens, thinks, and responds in real time.',
    techStack: ['WebRTC', 'Python', 'FastAPI', 'React', 'Socket.IO', 'LLM'],
    category: 'live-demos',
    timeline: {
      date: '2026-08',
      previousGap: '3 months',
      skillJump: 'Real-time AI'
    },
    architecture: {
      type: 'flow',
      diagram: `
User Microphone
      ↓
WebRTC Audio Stream
      ↓
FastAPI Backend
      ↓
LLM + TTS Pipeline
      ↓
Real-time Response`
    },
    features: [
      'Live voice streaming via WebRTC',
      'Real-time transcription and LLM reasoning',
      'Text-to-speech response pipeline',
      'React frontend with connection status'
    ],
    challenges: [],
    demoVideo: null,
    liveUrl: 'https://realtime-voice-agent-demo-frontend.vercel.app/',
    githubUrl: 'https://github.com/Nicky9319/realtime-voice-agent-project',
    spotlight: true
  },
  {
    id: 'avatar',
    name: 'Avatar',
    tier: 1,
    complexity: 8,
    impressiveness: 9,
    description: 'Interactive AI avatar system that generates expressive, real-time character responses for conversational experiences.',
    techStack: ['Python', 'FastAPI', 'LLM', 'Three.js', 'React', 'Neon DB'],
    category: 'live-demos',
    timeline: {
      date: '2026-07',
      previousGap: '1 month',
      skillJump: 'Avatar AI'
    },
    architecture: {
      type: 'component',
      diagram: `
┌─────────────────────────────────────┐
│           React Frontend            │
│      Three.js Avatar Renderer       │
└─────────────┬───────────────────────┘
              │
┌─────────────▼───────────────────────┐
│        FastAPI Backend              │
│   LLM reasoning + response sync     │
└─────────────┬───────────────────────┘
              │
┌─────────────▼───────────────────────┐
│          Neon DB (SQL)              │
└─────────────────────────────────────┘`
    },
    features: [
      'Real-time 3D avatar rendering',
      'LLM-driven conversational responses',
      'SQL persistence with Neon DB',
      'Expressive animation pipeline'
    ],
    challenges: [],
    demoVideo: null,
    githubUrl: 'https://github.com/Nicky9319/Avatar_Project',
    spotlight: true
  },
  {
    id: 'natural-language-clustering',
    name: 'Natural Language Clustering',
    tier: 1,
    complexity: 7,
    impressiveness: 8,
    description: 'Turns unstructured text into meaningful groups using vector embeddings and clustering. Useful for feedback analysis, support tickets, and discovery.',
    techStack: ['Python', 'NLP', 'Vector Embeddings', 'Clustering', 'scikit-learn', 'OpenAI'],
    category: 'live-demos',
    timeline: {
      date: '2026-06',
      previousGap: '1 month',
      skillJump: 'NLP / Clustering'
    },
    architecture: {
      type: 'flow',
      diagram: `
Raw Text Input
      ↓
Embedding Model
      ↓
Dimensionality Reduction
      ↓
Clustering Algorithm
      ↓
Labeled Topic Groups`
    },
    features: [
      'Text embedding with modern language models',
      'Unsupervised clustering of similar statements',
      'Topic label generation',
      'Exportable cluster summaries'
    ],
    challenges: [],
    demoVideo: null,
    githubUrl: 'https://github.com/Nicky9319/natural_language_clustering',
    spotlight: true
  },

  // Tier 1 - Complex Systems
  {
    id: 'donna-agent',
    name: 'Donna_Agent',
    tier: 1,
    complexity: 8,
    impressiveness: 8,
    description: 'LangGraph-powered multi-agent system coordinating specialized AI agents (WhatsApp, Search, Discord) for complex task automation.',
    techStack: ['LangGraph', 'LangChain', 'Playwright', 'ChromaDB', 'PostgreSQL', 'Docker'],
    category: 'ai-automation',
    timeline: {
      date: '2025-07',
      previousGap: '1 month',
      skillJump: 'AI/LangGraph'
    },
    architecture: {
      type: 'component',
      diagram: `
┌─────────────────────────────────────────────────────────────┐
│                    SUPER AGENT (LangGraph)                   │
│              GPT-4o-mini + Agent Executor                   │
└─────────────────┬───────────────────────────────────────────┘
                  │
      ┌───────────┼────────────┐
      ▼           ▼            ▼
┌──────────┐ ┌──────────┐ ┌──────────┐
│ WhatsApp │ │ Search   │ │ Discord  │
│  Agent   │ │ Engine   │ │  Agent   │
│(Playwright)│ │(Google   │ │          │
│          │ │ Places)  │ │          │
└──────────┘ └──────────┘ └──────────┘
      │           │            │
      └───────────┴────────────┘
                  │
            ┌─────┴─────┐
            │  ChromaDB  │
            │ (context)  │
            └───────────┘`
    },
    features: [
      'Multi-agent orchestration with task decomposition',
      'WhatsApp browser automation via Playwright',
      'Google Places API integration via SearchEngine agent',
      'Discord bot integration with slash commands',
      'YouTube transcription capabilities'
    ],
    challenges: [],
    demoVideo: null,
    githubUrl: 'https://github.com/Nicky9319/Donna_Agent',
    spotlight: false // Not in top 3 spotlight
  },
  {
    id: 'ecoride-backend',
    name: 'Ecoride_Backend',
    tier: 1,
    complexity: 9,
    impressiveness: 8,
    description: 'Production-ready microservices backend for an eco-friendly ride-sharing platform with 5 async FastAPI services, strict MongoDB validation, and coordinated communication patterns.',
    techStack: ['FastAPI', 'MongoDB', 'Redis', 'RabbitMQ', 'WebSockets', 'PM2'],
    category: 'fullstack',
    timeline: {
      date: '2025-06',
      previousGap: '1 month',
      skillJump: 'Microservices'
    },
    architecture: {
      type: 'flow',
      diagram: `
┌──────┐     ┌──────┐     ┌──────┐     ┌──────┐
│Client│────▶│ nginx│────▶│Auth  │────▶│User  │
└──────┘     └──────┘     └──────┘     └──────┘
                             │           │
                             ▼           ▼
                       ┌─────────┐  ┌─────────┐
                       │ Rides   │  │ Rider   │
                       └─────────┘  └─────────┘
                             │           │
                             └──────┬────┘
                                    ▼
                              ┌─────────┐
                              │ MongoDB │
                              └─────────┘

Services: User (:6876) | Rider (:5937) | Rides (:8517) | Auth (:4664)`
    },
    features: [
      '5 async microservices with FastAPI',
      '20,000+ lines of service code',
      'Message queue-based inter-service communication (RabbitMQ)',
      'Real-time subscription management for cars/bikes/autos',
      'OTP-based phone authentication'
    ],
    challenges: [],
    demoVideo: null,
    githubUrl: 'https://github.com/Nicky9319/Ecoride_Backend',
    spotlight: true // One of the 3 spotlight projects
  },
  {
    id: 'renderperk-crm',
    name: 'Renderperk_CRM',
    tier: 1,
    complexity: 8,
    impressiveness: 8,
    description: 'Feature-rich desktop CRM with multi-window architecture, real-time Redux state synchronization, embedded AI overlay widget, and Docker/MQTT integration for comprehensive business operations.',
    techStack: ['Electron', 'React', 'Redux', 'Clerk', 'Firebase', 'Tailwind'],
    category: 'fullstack',
    timeline: {
      date: '2025-11',
      previousGap: '2 months',
      skillJump: 'Business Systems'
    },
    architecture: {
      type: 'component',
      diagram: `
┌─────────────────────────────────────────────────────────────┐
│                     MAIN PROCESS                            │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │   Tray      │  │  Auto-Updater │  │   IPC Handler    │  │
│  │   Manager   │  │              │  │   (Redux Broadcast)│ │
│  └─────────────┘  └──────────────┘  └──────────────────┘  │
└───────────────────────────┬────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│  Main Window  │   │ Overlay Widget │   │  Auth Window  │
│  (Dashboard)  │   │   (AI Chat)   │   │   (Clerk)     │
└───────────────┘   └───────────────┘   └───────────────┘`
    },
    features: [
      'Multi-window Electron app architecture',
      'Redux state broadcasting across windows',
      'Clerk authentication with React Router',
      'MQTT for real-time messaging',
      'Docker container management integration'
    ],
    challenges: [],
    demoVideo: null,
    githubUrl: 'https://github.com/Nicky9319/Renderperk_CRM',
    spotlight: false
  },
  {
    id: 'overlaylab-desktopapp',
    name: 'OverlayLab_DesktopApp',
    tier: 1,
    complexity: 8,
    impressiveness: 8,
    description: 'Enterprise-grade Electron desktop application with sophisticated multi-window management, differential auto-updates, system tray integration, and Redux state broadcasting for seamless cross-window experiences.',
    techStack: ['Electron', 'React', 'Tailwind', 'Redux', 'Recharts', 'Firebase'],
    category: 'mobile',
    timeline: {
      date: '2025-09',
      previousGap: '1 month',
      skillJump: 'Desktop Apps'
    },
    architecture: {
      type: 'component',
      diagram: `
┌─────────────────────────────────────────────────────────────┐
│                     MAIN PROCESS                            │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │   Tray      │  │  Auto-Updater │  │   IPC Handler    │  │
│  │   Manager   │  │ (differential)│  │   (broadcast)    │  │
│  └─────────────┘  └──────────────┘  └──────────────────┘  │
└───────────────────────────┬────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│  Main Window  │   │ Overlay Widget │   │  Auth Window  │
│  (Dashboard)  │   │   (ClipVault) │   │   (Clerk)     │
└───────────────┘   └───────────────┘   └───────────────┘

Windows: 3 | State Sync: Redux | Updates: Delta`
    },
    features: [
      'Multi-window system (main app, overlay widget, auth window)',
      'System tray with context menu and shortcuts',
      'Differential auto-updates (delta updates)',
      'Comprehensive session logging with electron-log',
      'WSL command execution capability'
    ],
    challenges: [],
    demoVideo: null,
    githubUrl: 'https://github.com/Nicky9319/OverlayLab_DesktopApp',
    spotlight: true // One of the 3 spotlight projects
  },

  // Tier 2 - Technical Depth
  {
    id: 'agentic-ai-tools',
    name: 'Agentic_AI_Tools',
    tier: 2,
    complexity: 7,
    impressiveness: 8,
    description: 'Enterprise-grade multi-model AI gateway with LiteLLM and a feature-planning agent that breaks down complex features into structured implementation blueprints.',
    techStack: ['LiteLLM', 'LangChain', 'LangGraph', 'PostgreSQL', 'Docker', 'Open WebUI'],
    category: 'ai-automation',
    timeline: {
      date: '2025-12',
      previousGap: '1 month',
      skillJump: 'AI Frameworks'
    },
    architecture: {
      type: 'component',
      diagram: `
┌─────────────────────────────────────────────────────────────┐
│                    LITE LL PROXY (:4000)                     │
│              Unified LLM Gateway (140+ models)              │
└─────────────────────────┬───────────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
    ┌──────────┐   ┌──────────┐   ┌──────────┐
    │  OpenAI  │   │Anthropic │   │  Local   │
    │  GPT-4   │   │  Claude  │   │  Models  │
    └──────────┘   └──────────┘   └──────────┘
                          │
┌─────────────────────────┴───────────────────────────────────┐
│                    OPEN WEBUI (:3000)                        │
│                  User-facing Chat UI                        │
└─────────────────────────────────────────────────────────────┘

SubAgents: Feature Planner → Checklist.md → SequenceDiagram.md`
    },
    features: [
      'Unified multi-model LLM gateway (140+ models)',
      'Feature planner agent with structured output',
      'Full Docker-based deployment with PostgreSQL',
      'Open WebUI integration for conversational AI',
      'MCP server configuration for extended capabilities'
    ],
    challenges: [],
    demoVideo: null,
    githubUrl: 'https://github.com/Nicky9319/Agentic_AI_Tools',
    spotlight: false
  },
  {
    id: 'service-monitoring',
    name: 'service-monitoring-prototype',
    tier: 2,
    complexity: 6,
    impressiveness: 7,
    description: 'Complete metrics and logging observability pipeline with FastAPI, Grafana Alloy, Prometheus, and Loki for real-time service monitoring.',
    techStack: ['FastAPI', 'Prometheus', 'Grafana', 'Loki', 'Fluent Bit', 'Docker'],
    category: 'devops',
    timeline: {
      date: '2026-01',
      previousGap: '1 month',
      skillJump: 'Observability'
    },
    architecture: {
      type: 'flow',
      diagram: `
FastAPI Service (/metrics endpoint)
        ↓ (Scrape every 15s)
    Alloy (Scraper)
        ↓ (Remote Write)
   Prometheus (TSDB)
        ↓ (Query/Visualize)
    Grafana Dashboard

Additional Logging Stack:
Fluent Bit → Loki → Grafana

Log Destinations: Loki | Azure | Fluentd | Nginx`
    },
    features: [
      'FastAPI service exposing Prometheus metrics',
      'Grafana Alloy for metric scraping and remote write',
      'Prometheus for time-series storage',
      'Loki for log aggregation with Fluent Bit',
      'Azure Log Push support for cloud integration'
    ],
    challenges: [],
    demoVideo: null,
    githubUrl: 'https://github.com/Nicky9319/service-monitoring-prototype',
    spotlight: false
  },
  {
    id: 'donnaai-backend',
    name: 'DonnaAI_Backend',
    tier: 2,
    complexity: 7,
    impressiveness: 8,
    description: 'Architected a real-time cross-device communication system using Socket.IO and MQTT that synchronizes AI assistant interactions between desktop and mobile apps.',
    techStack: ['FastAPI', 'Socket.IO', 'MQTT', 'Mosquitto', 'Docker', 'Redis'],
    category: 'ai-automation',
    timeline: {
      date: '2025-04',
      previousGap: '2 months',
      skillJump: 'Real-time Systems'
    },
    architecture: {
      type: 'flow',
      diagram: `
Desktop App ←→ WebSocket (:4500) ←→ Mobile App
                      ↓
               MQTT Broker (:1883)
                      ↓
              Desktop App (mqtt_client)

Client Tracking:
- desktop_app_sid
- mobile_app_sid

Protocols: Socket.IO + MQTT (dual-stack)`
    },
    features: [
      'Socket.IO async server for real-time desktop-mobile communication',
      'MQTT integration for publish/subscribe messaging',
      'Persona-based authentication (desktop_app vs mobile_app)',
      'Cross-device state synchronization',
      'Docker-based MQTT broker with WebSocket support'
    ],
    challenges: [],
    demoVideo: null,
    githubUrl: 'https://github.com/Nicky9319/DonnaAI_Backend',
    spotlight: false
  },
  {
    id: 'authentication-service',
    name: 'Authentication_Service',
    tier: 2,
    complexity: 6,
    impressiveness: 6,
    description: 'Built a microservice-based authentication system with MongoDB-backed session management and access/refresh token lifecycle handling.',
    techStack: ['FastAPI', 'MongoDB', 'Redis', 'Docker', 'JWT'],
    category: 'fullstack',
    timeline: {
      date: '2025-09',
      previousGap: '0 months',
      skillJump: 'Auth Systems'
    },
    architecture: {
      type: 'component',
      diagram: `
Auth Service (:10000)
       ↓ HTTP
MongoDB Service (:12000)
       ↓
  MongoDB Database
       ↓
  Redis (caching/sessions)

Tokens: Access + Refresh
Validation: Schema-based`
    },
    features: [
      'Access token and refresh token management',
      'MongoDB schema validation enforcement',
      'Async MongoDB operations with Motor driver',
      'Session assignment, update, and revocation endpoints',
      'Password hashing with salt (SHA-256)'
    ],
    challenges: [],
    demoVideo: null,
    githubUrl: 'https://github.com/Nicky9319/Authentication_Service',
    spotlight: false
  },

  // Tier 3 - Mobile & Desktop
  {
    id: 'donnaai-mobileapp',
    name: 'DonnaAI_MobileApp',
    tier: 3,
    complexity: 7,
    impressiveness: 8,
    description: 'A desktop AI agent orchestration platform featuring real-time WebSocket/MQTT communication, WSL container management, and cross-platform deployment via Electron.',
    techStack: ['Electron', 'React', 'Socket.IO', 'MQTT', 'Dockerode', 'WSL'],
    category: 'mobile',
    timeline: {
      date: '2025-08',
      previousGap: '1 month',
      skillJump: 'Cross-Platform'
    },
    architecture: {
      type: 'component',
      diagram: `
┌─────────────────────────────────────────────────────────────┐
│                     MAIN PROCESS                            │
│  WebSocketManager (singleton) │ MQTT Event System          │
│  Dockerode Integration        │ WSL Command Execution      │
└───────────────────────────────┬─────────────────────────────┘
                                │
                    ┌───────────┴───────────┐
                    ▼                       ▼
             ┌───────────┐           ┌───────────┐
             │   Main    │           │  Overlay  │
             │  Window   │           │  Widget   │
             └───────────┘           └───────────┘

Backend: http://57.159.24.214:4500`
    },
    features: [
      'Real-time WebSocket communication with auto-reconnection',
      'MQTT event system for desktop notifications',
      'WSL (Windows Subsystem for Linux) integration',
      'Docker container management via Dockerode',
      'Custom protocol handler (agentbed://)'
    ],
    challenges: [],
    demoVideo: null,
    githubUrl: 'https://github.com/Nicky9319/DonnaAI_MobileApp',
    spotlight: false
  },
  {
    id: 'donnaai-desktopapp',
    name: 'DonnaAI_DesktopApp',
    tier: 3,
    complexity: 4,
    impressiveness: 6,
    description: 'A cross-platform AI chat mobile application with real-time messaging, themed UI, and sophisticated Redux state management with custom logging middleware.',
    techStack: ['Expo', 'React Native', 'Redux Toolkit', 'Expo Router', 'Reanimated'],
    category: 'mobile',
    timeline: {
      date: '2025-05',
      previousGap: '1 month',
      skillJump: 'React Native'
    },
    architecture: {
      type: 'component',
      diagram: `
┌─────────────────────────────────────────────────────────────┐
│                    EXPO MANAGED WORKFLOW                     │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐   │
│  │   Tab   │    │  Agent  │    │ Profile │    │ Settings│   │
│  │ Navigator│    │ Screen  │    │ Screen  │    │  Screen │   │
│  └────┬────┘    └────┬────┘    └────┬────┘    └────┬────┘   │
│       └──────────────┴──────────────┴──────────────┘        │
│                         │                                   │
│                  ┌──────┴──────┐                           │
│                  │ Redux Store │                           │
│                  │  (slices)   │                           │
│                  └─────────────┘                           │
└─────────────────────────────────────────────────────────────┘`
    },
    features: [
      'File-based routing with Expo Router',
      'Light/dark theme support with automatic detection',
      'Smooth animations using react-native-reanimated',
      'Redux middleware for action logging',
      'Haptic feedback integration'
    ],
    challenges: [],
    demoVideo: null,
    githubUrl: 'https://github.com/Nicky9319/DonnaAI_DesktopApp',
    spotlight: false
  },
  {
    id: 'leadflow-mobileapp',
    name: 'LeadFlow_MobileApp',
    tier: 3,
    complexity: 5,
    impressiveness: 6,
    description: 'A mobile CRM application for lead tracking and bucket management with Redux state management and cross-platform deployment.',
    techStack: ['Expo', 'React Native', 'Redux Toolkit', 'Expo Router'],
    category: 'mobile',
    timeline: {
      date: '2025-09',
      previousGap: '0 months',
      skillJump: 'Mobile CRM'
    },
    architecture: {
      type: 'component',
      diagram: `
┌─────────────────────────────────────────────────────────────┐
│                    EXPO MANAGED WORKFLOW                     │
├─────────────────────────────────────────────────────────────┤
│  Screens: Leads | Buckets | Analytics | Settings            │
│                                                             │
│  Services: leadsService | bucketsService                    │
│                                                             │
│  State: { leads: [...], buckets: [...] }                    │
└─────────────────────────────────────────────────────────────┘`
    },
    features: [
      'Lead and bucket data management with full CRUD',
      'Redux slices pattern with proper action creators',
      'File-based routing with Expo Router',
      'Cross-platform mobile support (iOS/Android)',
      'Feature-based module structure'
    ],
    challenges: [],
    demoVideo: null,
    githubUrl: 'https://github.com/Nicky9319/LeadFlow_MobileApp',
    spotlight: false
  },
  {
    id: 'peeruse-desktopapp',
    name: 'PeerUse_DesktopApp',
    tier: 3,
    complexity: 8,
    impressiveness: 8,
    description: 'A containerized desktop application platform with Docker/WSL management, Firebase backend, real-time MQTT events, and enterprise features including auto-updates and secure local storage.',
    techStack: ['Electron', 'Firebase', 'MQTT', 'Dockerode', 'LowDB', 'Electron-store'],
    category: 'mobile',
    timeline: {
      date: '2025-11',
      previousGap: '2 months',
      skillJump: 'Enterprise Desktop'
    },
    architecture: {
      type: 'component',
      diagram: `
┌─────────────────────────────────────────────────────────────┐
│                     MAIN PROCESS                            │
│  Docker Integration │ Firebase │ MQTT │ Auto-Updater       │
│  Global Shortcuts    │ LowDB    │ Electron-store           │
└───────────────────────────────┬─────────────────────────────┘
                                │
                    ┌───────────┴───────────┐
                    ▼                       ▼
             ┌───────────┐           ┌───────────┐
             │   Main    │           │  Overlay  │
             │  Window   │           │  Widget   │
             └───────────┘           └───────────┘

Single Instance Lock | Deep Link: peeruse://`
    },
    features: [
      'Docker container management via Dockerode',
      'WSL distro installation and configuration automation',
      'Real-time MQTT messaging with desktop notifications',
      'Firebase integration for cloud services',
      'Single instance lock with deep link protocol'
    ],
    challenges: [],
    demoVideo: null,
    githubUrl: 'https://github.com/Nicky9319/PeerUse_DesktopApp',
    spotlight: false
  },

  // Tier 4 - Utilities
  {
    id: 'mcp-servers',
    name: 'Mcp_servers',
    tier: 4,
    complexity: 6,
    impressiveness: 7,
    description: 'Production-grade Model Context Protocol server implementation with reusable boilerplate for building tool-calling servers, featuring DuckDuckGo search integration.',
    techStack: ['Python', 'MCP', 'Starlette', 'Pydantic', 'Docker'],
    category: 'devops',
    timeline: {
      date: '2025-12',
      previousGap: '0 months',
      skillJump: 'MCP Protocol'
    },
    architecture: {
      type: 'component',
      diagram: `
┌─────────────────────────────────────────────────────────────┐
│                  MCP SERVER (BaseTool)                      │
├─────────────────────────────────────────────────────────────┤
│  Endpoints: / | /sse | /messages | /health                 │
│  Protocol: JSON-RPC 2.0 + SSE                              │
│  Transport: HTTP + Server-Sent Events                       │
└─────────────────────────────────────────────────────────────┘

Tools:
  └─ DuckDuckGo Search (with keepalive heartbeat)`
    },
    features: [
      'Reusable MCP server boilerplate with BaseTool inheritance',
      'DuckDuckGo search tool with full MCP protocol compliance',
      'HTTP/SSE dual-channel communication',
      'Pydantic input validation on tools',
      'LangChain integration example'
    ],
    challenges: [],
    demoVideo: null,
    githubUrl: 'https://github.com/Nicky9319/Mcp_servers',
    spotlight: false
  },
  {
    id: 'reddit-blogs-automation',
    name: 'reddit-blogs-n8n-automation',
    tier: 4,
    complexity: 5,
    impressiveness: 6,
    description: 'End-to-end Reddit content automation pipeline using n8n workflows that ingests threads via form, fetches raw JSON from Reddit API, and stores results in Airtable.',
    techStack: ['n8n', 'Python', 'Airtable', 'Reddit API', 'Docker'],
    category: 'ai-automation',
    timeline: {
      date: '2026-05',
      previousGap: '4 months',
      skillJump: 'Workflow Automation'
    },
    architecture: {
      type: 'flow',
      diagram: `
┌─────────────────────────────────────────────────────────────┐
│                    WORKFLOW 1: URL INTAKE                    │
│  Form Trigger → URL Validation → Reddit JSON → Airtable     │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                 WORKFLOW 2: JSON FETCHER                    │
│  Schedule → Airtable Queue → Reddit JSON → Base64 Upload   │
└─────────────────────────────────────────────────────────────┘

States: Pending Fetch → Ready for Processing`
    },
    features: [
      'Dual-workflow automation pipeline',
      'URL parsing supporting redd.it shortlinks',
      'Airtable as queue/state machine',
      'Raw JSON attachment storage in Airtable',
      'Comprehensive n8n workflow patterns'
    ],
    challenges: [],
    demoVideo: null,
    githubUrl: 'https://github.com/Nicky9319/reddit-blogs-n8n-automation',
    spotlight: false
  }
]

// Categories with display info
export const categories = [
  {
    id: 'live-demos',
    name: 'Live Demos',
    icon: 'sparkles',
    description: 'Shipped experiments you can try right now — voice, avatars, and NLP.'
  },
  {
    id: 'ai-automation',
    name: 'AI & Automation',
    icon: 'brain',
    description: 'Multi-agent systems, LangGraph orchestration, workflow automation'
  },
  {
    id: 'fullstack',
    name: 'Full-Stack Platforms',
    icon: 'layers',
    description: 'Microservices, CRM systems, authentication services'
  },
  {
    id: 'mobile',
    name: 'Mobile & Desktop',
    icon: 'smartphone',
    description: 'Electron apps, React Native, cross-platform solutions'
  },
  {
    id: 'devops',
    name: 'Infrastructure & DevOps',
    icon: 'server',
    description: 'Observability, containers, MCP servers, Linux setups'
  }
]

// Timeline data (chronological order for display)
export const timelineData = [
  { date: '2024-10', projects: ['amit_Stocks'], skillFocus: 'Stock trading - early exploration' },
  { date: '2025-02', projects: ['MicroserviceServer_Setup'], skillFocus: 'Backend infrastructure' },
  { date: '2025-03', projects: ['LinuxSetupFiles', 'Renderperk_MainServer'], skillFocus: 'DevOps, Linux, scripting' },
  { date: '2025-04', projects: ['ES_Backend', 'ES_Frontend', 'DonnaAI_Backend'], skillFocus: 'Full-stack development' },
  { date: '2025-05', projects: ['Container_GUI', 'DonnaAI_DesktopApp'], skillFocus: 'Containers, Desktop apps' },
  { date: '2025-06', projects: ['Ecoride_Backend', 'Ecoride_Frontend', 'Ecoride_Project'], skillFocus: 'Microservices at scale' },
  { date: '2025-07', projects: ['Donna_Agent'], skillFocus: 'AI/LangGraph' },
  { date: '2025-08', projects: ['DonnaAI_MobileApp', 'AI-ML-Notes'], skillFocus: 'Mobile, AI/ML' },
  { date: '2025-09', projects: ['Authentication_Service', 'LeadFlow_MobileApp', 'OverlayLab_DesktopApp'], skillFocus: 'Auth, Mobile, Desktop' },
  { date: '2025-11', projects: ['Renderperk_CRM', 'PeerUse_DesktopApp'], skillFocus: 'Business applications' },
  { date: '2025-12', projects: ['Agentic_AI_Tools', 'Mcp_servers'], skillFocus: 'AI frameworks, MCP' },
  { date: '2026-01', projects: ['service-monitoring-prototype'], skillFocus: 'Observability' },
  { date: '2026-05', projects: ['reddit-blogs-n8n-automation'], skillFocus: 'Workflow automation' }
]

// Skills grouped by domain (parsed from resume)
export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'C / C++', 'JavaScript (ES6+)', 'SQL', 'Bash']
  },
  {
    category: 'AI / Machine Learning',
    items: ['LLMs', 'LangChain', 'LangGraph', 'ChromaDB', 'Vector Embeddings', 'Clustering', 'Prompt Engineering']
  },
  {
    category: 'Technologies',
    items: ['FastAPI', 'Node.js', 'React', 'Redux', 'Electron', 'React Native', 'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ', 'Nginx']
  },
  {
    category: 'DevOps / Cloud',
    items: ['Docker', 'Linux', 'Git', 'GitHub Actions', 'Azure', 'DigitalOcean', 'Cloudflare', 'OpenTelemetry', 'Grafana', 'Fluentd']
  }
]

// Experience parsed from resume
export const experience = [
  {
    role: 'AI Engineer Intern',
    company: 'Times Internet',
    location: 'New Delhi, India',
    period: 'Jun 2026 – Present',
    highlights: [
      'Architected and deployed a Conversational AI Agent serving 360K+ users with 30,000 monthly active paying users',
      'Developed an LLM-as-evaluator pipeline capable of processing and analyzing 30M+ user conversations',
      'Transformed 40,000+ unstructured product feedback entries into actionable insights using clustering and vector embeddings'
    ]
  },
  {
    role: 'Founder & Lead Systems Architect',
    company: 'Renderperk',
    link: 'renderperk.studio',
    location: 'New Delhi, India',
    period: 'Oct 2025 – Jun 2026',
    highlights: [
      'Architected and scaled a distributed GPU render farm, reaching post-revenue in 4 months and cutting rendering costs by 75%',
      'Developed 290+ APIs and 20+ data flows running asynchronously across 11 microservices and 3 production VMs',
      'Orchestrated 20+ parallel GPU workloads, managing 30GB+ data distributed globally with sub-5 minute synchronization',
      'Deployed OpenTelemetry for distributed tracing and integrated Fluentd + Grafana for centralized logging and monitoring',
      'Built CI/CD pipelines for autonomous server deployments and cross-platform desktop application release builds'
    ]
  },
  {
    role: 'Software Developer Intern',
    company: 'Nathdwara Advisors LLP',
    link: 'neocfo.io',
    location: 'New Delhi, India',
    period: 'May 2025 – June 2025',
    highlights: [
      'Built and deployed an AI-powered LinkedIn agent using Python, Playwright and n8n, reducing lead generation effort by 80%',
      'Implemented a LangChain-powered AI agent for automated Excel parsing and financial forecasting analysis',
      'Developed interactive dashboards for metric analysis, optimized for sub-second load times through efficient caching strategies'
    ]
  }
]

export const lastUpdated = 'Sep 2026'