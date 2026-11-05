import cvEs from "../../content/cv/es.json";
import cvEn from "../../content/cv/en.json";

export type Lang = "es" | "en";

export type WorkItem = {
  id: string;
  title: string;
  org: string;
  period: string;
  domain: string;
  summary: string;
  context: string;
  did: string[];
  stack: string[];
  link?: { label: string; href: string };
  status?: string;
};

export type Site = {
  lang: Lang;
  meta: { title: string; description: string };
  name: string;
  role: string;
  intro: string;
  availability: string;
  nav: { work: string; process: string; experience: string; stack: string; contact: string };
  actions: { cv: string; cvHref: string; email: string; otherLang: string; otherLangHref: string; otherLangLabel: string };
  about: string[];
  workTitle: string;
  workHint: string;
  labels: { context: string; did: string; stack: string; open: string; close: string; privateNote: string };
  work: WorkItem[];
  processTitle: string;
  process: { title: string; text: string }[];
  ai: string;
  experienceTitle: string;
  experience: { role: string; company: string; dates: string; line: string }[];
  fullCv: string;
  stackTitle: string;
  stack: { group: string; items: string }[];
  languagesLine: string;
  contactTitle: string;
  contactText: string;
  contact: { email: string; phone: string; whatsapp: string; github: string; cvEs: string; cvEn: string };
  contactLabels: { email: string; whatsapp: string; github: string; cvEs: string; cvEn: string };
  footer: string;
};

const EMAIL = "mateohernandez10012003@gmail.com";
const PHONE = "+57 321 527 2808";
const WHATSAPP = "https://wa.me/573215272808";
const GITHUB = "https://github.com/MateoHdz";
const CV_ES = "/cv/Mateo_Hernandez_Hoja_de_Vida_Desarrollador_Full_Stack.pdf";
const CV_EN = "/cv/Mateo_Hernandez_Resume_Full_Stack_Developer.pdf";

type Cv = typeof cvEs;
const experienceFrom = (cv: Cv, lines: string[]) =>
  cv.experience.map((j, i) => ({
    role: j.role,
    company: j.company,
    dates: `${j.start} – ${j.end || cv.labels.present}`,
    line: lines[i] ?? "",
  }));

const es: Site = {
  lang: "es",
  meta: {
    title: "Mateo Hernández · Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack en Cali, Colombia. Software para restaurantes, la super app de Claro, la Procuraduría General de la Nación, veterinarias y pymes. React, Node.js, TypeScript y Firebase.",
  },
  name: "Mateo Hernández",
  role: "Desarrollador Full Stack",
  intro: "Construyo software completo para negocios: desde el primer requerimiento hasta producción.",
  availability: "Abierto a nuevas oportunidades · Cali, Colombia · remoto",
  nav: { work: "Trabajo", process: "Cómo trabajo", experience: "Experiencia", stack: "Stack", contact: "Contacto" },
  actions: {
    cv: "Descargar hoja de vida",
    cvHref: CV_ES,
    email: "Escríbeme",
    otherLang: "English",
    otherLangHref: "/en/",
    otherLangLabel: "Read this page in English",
  },
  about: [
    "Soy desarrollador full stack con más de 3 años construyendo software para empresas reales: restaurantes con varias sedes, la super app de Claro, un proyecto para la Procuraduría General de la Nación, clínicas veterinarias y una empresa de seguridad electrónica.",
    "Me gusta entender el problema completo antes de escribir código: me siento con quien usa el sistema, modelo los datos y las reglas, construyo con pruebas y dejo documentado lo que decidí, para que otros puedan mantenerlo.",
  ],
  workTitle: "Trabajo",
  workHint: "Abre cualquier proyecto para ver el contexto, lo que hice y con qué.",
  labels: {
    context: "Contexto",
    did: "Lo que hice",
    stack: "Stack",
    open: "Ver detalle",
    close: "Cerrar detalle",
    privateNote: "Código privado del cliente o la empresa.",
  },
  work: [
    {
      id: "quantum",
      title: "Ecosistema SaaS para restaurantes",
      org: "Quantum Infinity",
      period: "2026",
      domain: "Restaurantes · SaaS multiempresa",
      summary: "Punto de venta, gestión de pedidos, menú online y consola de administración en producción para 12 empresas y 18 sedes.",
      context:
        "Restaurantes con varias sedes necesitaban vender en caja, recibir pedidos en línea, despacharlos a domicilio y controlar inventario y recetas desde un solo sistema. Soy el desarrollador principal del producto.",
      did: [
        "Escribí el 96 % de los commits del ecosistema desde agosto de 2026 (408 de 424) en 12 repositorios.",
        "Amplié la API REST del POS hasta 316 endpoints (caja, compras con impuestos, inventario por ubicación, producción, reportes) con cerca de 1.600 casos de prueba.",
        "Diseñé un importador reutilizable con vista previa y reversa, y migré a un cliente desde VectorPOS: 1.703 registros en unos 21 minutos.",
        "Integré menú, gestión de pedidos y POS con un contrato de pedido versionado e identificadores idempotentes que evitan ventas duplicadas.",
        "Bajé el cierre de una venta de 1.390 ms a unos 700 ms cargando recetas por lotes, medido contra 2.470 órdenes.",
        "Construí en 9 días la consola interna para dar de alta empresas, con más de 170 pruebas, y reforcé la autenticación multiempresa.",
      ],
      stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Firebase", "Firestore", "node:test"],
      status: "Código privado de la empresa.",
    },
    {
      id: "claro-mini",
      title: "Mini Programas para la super app de Claro",
      org: "Softgic",
      period: "2025",
      domain: "Telecomunicaciones · Comercio",
      summary: "Cinemark Preferencial y el flujo de compra de Templo de la Moda, funcionando dentro de la app de Claro.",
      context:
        "Comercios aliados de Claro necesitaban vender y dar beneficios a los usuarios dentro de la super app, sin que la gente instalara otra aplicación.",
      did: [
        "Cinemark Preferencial: nuevos componentes, términos y condiciones y corrección de incidencias hasta QA. Fui el segundo mayor contribuidor del repositorio.",
        "Templo de la Moda: carrito, resumen de pago y formulario de datos de envío.",
        "Vistas en AXML y estilos en ACSS siguiendo el diseño de Claro, con ramas por desarrollador, QA y Azure DevOps.",
      ],
      stack: ["Mini Programs (AXML, ACSS)", "JavaScript", "Azure DevOps"],
      status: "Código privado del cliente.",
    },
    {
      id: "claro-ventas",
      title: "App de Ventas de Claro",
      org: "Softgic",
      period: "2026",
      domain: "Telecomunicaciones · Ventas",
      summary: "Flujo de venta de planes y servicios en Next.js 16 y React 19.",
      context: "Una plataforma comercial para vender planes, servicios y productos con un flujo claro de principio a fin.",
      did: [
        "Construí las vistas de planes, servicios, productos y tienda, con el flujo completo de venta.",
        "Mejoré el catálogo con carga progresiva, tarjetas compactas y modales de planes.",
        "Desarrollé las vistas de administración de servicios.",
      ],
      stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
      status: "Código privado del cliente.",
    },
    {
      id: "procuraduria",
      title: "Relatoría para la Procuraduría General de la Nación",
      org: "Lappiz",
      period: "2023 – 2024",
      domain: "Sector público",
      summary: "Líder técnico del proyecto: coordinación del equipo, requerimientos con la entidad y desarrollo.",
      context:
        "Proyecto para una entidad del Estado construido sobre la plataforma Lappiz, con requerimientos levantados directamente con sus funcionarios.",
      did: [
        "Lideré técnicamente el proyecto: coordiné las actividades del equipo y la calidad de los entregables.",
        "Levanté requerimientos en sesiones con la entidad y diseñé las bases de datos.",
        "Desarrollé con JavaScript, React, Next.js y SQL Server, trabajando con Scrum y Azure DevOps.",
        "En Lappiz también construí tableros en Power BI y generación automática de documentos con jsPDF para clientes corporativos.",
      ],
      stack: ["JavaScript", "React", "Next.js", "SQL Server", "Power BI", "jsPDF", "Azure DevOps"],
      status: "Código privado del cliente.",
    },
    {
      id: "vetpos",
      title: "VetPOS",
      org: "Mr. Max Vet",
      period: "2026",
      domain: "Salud animal · Pymes",
      summary: "Punto de venta y gestión para clínicas veterinarias, preparado para varias clínicas.",
      context:
        "Una clínica veterinaria de Cali llevaba ventas, inventario y citas en procesos manuales. Diseñé y construí el sistema completo.",
      did: [
        "12 módulos de backend: ventas, inventario con movimientos de stock, clientes, mascotas, citas, servicios, gastos y reportes en Excel.",
        "15 pantallas en React, incluido el punto de venta y un panel de superadministrador para varias clínicas.",
        "Autenticación JWT con tres roles, cabeceras de seguridad y límite de peticiones.",
        "Despliegue con Docker Compose: MySQL, API y frontend servido con Nginx.",
      ],
      stack: ["NestJS", "TypeORM", "MySQL", "React", "TypeScript", "Docker"],
      link: { label: "Ver código en GitHub", href: "https://github.com/MateoHdz/TeoNova-Vet" },
    },
    {
      id: "daysecurity",
      title: "DaySecurity CRM",
      org: "Proyecto para cliente",
      period: "2026",
      domain: "Seguridad electrónica · Ventas",
      summary: "CRM para una empresa que vende e instala cámaras, alarmas y paneles solares.",
      context:
        "La empresa manejaba cotizaciones, ventas y el material de sus técnicos en hojas sueltas. El sistema conecta todo el flujo: cliente, cotización, venta, instalación y comisión.",
      did: [
        "CRM con seguimiento de clientes y alertas de cotizaciones sin respuesta.",
        "Cotizaciones exportables a PDF y conversión a venta en un clic.",
        "Inventario con descuento automático y asignación y devolución de material por técnico.",
        "Comisiones por vendedor, gastos y reportes en Excel.",
      ],
      stack: ["NestJS", "TypeORM", "MySQL", "React", "TypeScript", "Docker"],
      status: "MVP en desarrollo · código privado.",
    },
    {
      id: "atlas",
      title: "Atlas Spaces",
      org: "Proyecto propio",
      period: "2026",
      domain: "Coworking · Reservas",
      summary: "Reservas de salas y oficinas que evita reservas superpuestas con transacciones atómicas.",
      context: "Prueba técnica full stack: administrar sedes de coworking, salas y auditorios con reservas en tiempo real.",
      did: [
        "API en Express con módulos de autenticación (JWT, roles, límite de intentos y validación con Zod), espacios y reservas.",
        "Transacciones de MongoDB para que dos personas nunca reserven el mismo horario.",
        "Dashboard con indicadores y exportación a CSV en React.",
        "47 pruebas con Jest y entorno completo con Docker Compose.",
      ],
      stack: ["Express", "MongoDB", "React", "Vite", "Tailwind CSS", "Jest", "Docker"],
      link: { label: "Ver código en GitHub", href: "https://github.com/MateoHdz/atlas-spaces" },
    },
    {
      id: "turnia",
      title: "Turnia",
      org: "Proyecto propio",
      period: "2026",
      domain: "Laboral · Producto",
      summary: "Planificador de turnos que muestra el costo de cada turno antes de publicar el horario.",
      context:
        "La reforma laboral cambió el costo de cada hora (recargos nocturnos, dominicales y horas extra). Los negocios pequeños arman horarios sin saber cuánto les cuestan.",
      did: [
        "Investigué la norma vigente (Ley 2101 y Ley 2466) y la convertí en reglas de cálculo parametrizables.",
        "Diseñé 13 pantallas del producto, desde el onboarding hasta la vista del empleado.",
        "Escribí el roadmap por fases con criterios de aceptación para construirlo con IA.",
      ],
      stack: ["Diseño de producto", "Investigación normativa", "Roadmap por fases"],
      status: "En diseño (Fase 0 entregada).",
      link: { label: "Ver en GitHub", href: "https://github.com/MateoHdz/Turnia" },
    },
    {
      id: "predios",
      title: "Generador de carpetas de predios",
      org: "Herramienta interna",
      period: "2026",
      domain: "Catastro · Automatización",
      summary: "Aplicación de escritorio que arma los expedientes prediales para una entrega catastral.",
      context: "Organizar a mano cientos de carpetas de predios (fotos, PDF y códigos) tomaba horas y generaba errores.",
      did: [
        "Lee cada carpeta, valida la foto del lote, la renombra con el código del predio y arma la estructura de entrega.",
        "Une los PDF de soporte en un solo documento y reporta predios procesados, vacíos o incompletos.",
        "Empaquetada como ejecutable de Windows con PyInstaller.",
      ],
      stack: ["Python", "Tkinter", "pypdf", "PyInstaller"],
      status: "Código privado.",
    },
  ],
  processTitle: "Cómo trabajo",
  process: [
    {
      title: "Entiendo el negocio",
      text: "Antes de escribir código me siento con quien va a usar el sistema y levanto los requerimientos, las reglas y los casos raros.",
    },
    {
      title: "Modelo los datos y las reglas",
      text: "Diseño la base de datos y escribo las reglas de negocio en un documento que el cliente puede leer y aprobar.",
    },
    {
      title: "Construyo por fases, con pruebas",
      text: "Entrego por fases con criterios de aceptación claros y pruebas automáticas en todo lo que toca dinero o inventario.",
    },
    {
      title: "Documento y acompaño",
      text: "Dejo las decisiones, los manuales y el roadmap por escrito, y acompaño la salida a producción y el soporte.",
    },
  ],
  ai: "Trabajo con IA (Claude Code) como un compañero más: le doy especificaciones, reglas de negocio y criterios de aceptación por fases, y reviso cada cambio antes de integrarlo.",
  experienceTitle: "Experiencia",
  experience: experienceFrom(cvEs, [
    "Desarrollador principal de un SaaS multiempresa para restaurantes.",
    "Sistema de punto de venta y gestión veterinaria.",
    "Mini Programas y App de Ventas para Claro.",
    "Líder técnico del proyecto para la Procuraduría.",
    "Pruebas de concepto, bases de datos y Power BI.",
  ]),
  fullCv: "Ver hoja de vida completa (PDF)",
  stackTitle: "Stack",
  stack: cvEs.skills,
  languagesLine: "Español nativo · Inglés A2, estudiándolo activamente.",
  contactTitle: "¿Hablamos?",
  contactText: "Estoy buscando un equipo donde pueda construir producto completo. Respondo rápido por correo o WhatsApp.",
  contact: { email: EMAIL, phone: PHONE, whatsapp: WHATSAPP, github: GITHUB, cvEs: CV_ES, cvEn: CV_EN },
  contactLabels: {
    email: "Correo",
    whatsapp: "WhatsApp",
    github: "GitHub",
    cvEs: "Hoja de vida en español (PDF)",
    cvEn: "Resume in English (PDF)",
  },
  footer: "Hecho con Next.js y Tailwind CSS. Actualizado en noviembre de 2026.",
};

const en: Site = {
  lang: "en",
  meta: {
    title: "Mateo Hernández · Full Stack Developer",
    description:
      "Full Stack Developer in Cali, Colombia. Software for restaurants, Claro's super app, Colombia's Office of the Inspector General, veterinary clinics and small businesses. React, Node.js, TypeScript and Firebase.",
  },
  name: "Mateo Hernández",
  role: "Full Stack Developer",
  intro: "I build complete software for businesses, from the first requirement to production.",
  availability: "Open to new opportunities · Cali, Colombia (UTC-5) · remote",
  nav: { work: "Work", process: "How I work", experience: "Experience", stack: "Stack", contact: "Contact" },
  actions: {
    cv: "Download resume",
    cvHref: CV_EN,
    email: "Email me",
    otherLang: "Español",
    otherLangHref: "/",
    otherLangLabel: "Ver esta página en español",
  },
  about: [
    "I'm a full stack developer with 3+ years building software for real businesses: multi-location restaurants, Claro's super app, a project for Colombia's Office of the Inspector General, veterinary clinics and an electronic security company.",
    "I like to understand the whole problem before writing code: I sit with the people who use the system, model the data and rules, build with tests and document my decisions so others can maintain it.",
  ],
  workTitle: "Work",
  workHint: "Open any project to see the context, what I did and the stack.",
  labels: {
    context: "Context",
    did: "What I did",
    stack: "Stack",
    open: "Show details",
    close: "Hide details",
    privateNote: "Private client or company code.",
  },
  work: [
    {
      id: "quantum",
      title: "Multi-tenant SaaS for restaurants",
      org: "Quantum Infinity",
      period: "2026",
      domain: "Restaurants · Multi-tenant SaaS",
      summary: "Point of sale, order management, online menu and admin console in production for 12 companies and 18 locations.",
      context:
        "Multi-location restaurants needed to sell at the counter, take online orders, dispatch deliveries and control inventory and recipes from one system. I'm the product's lead developer.",
      did: [
        "Authored 96% of the commits since August 2026 (408 of 424) across 12 repositories.",
        "Extended the POS REST API to 316 endpoints (cash register, purchases with taxes, inventory by location, production, reports) with about 1,600 test cases.",
        "Designed a reusable importer with preview and rollback, and migrated a client from VectorPOS: 1,703 records in about 21 minutes.",
        "Connected menu, order management and POS through a versioned order contract with idempotent IDs that prevent duplicate sales.",
        "Cut sale checkout from 1,390 ms to about 700 ms by batch-loading recipes, measured against 2,470 orders.",
        "Built the internal onboarding console in 9 days with 170+ tests, and hardened multi-tenant authentication.",
      ],
      stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Firebase", "Firestore", "node:test"],
      status: "Private company code.",
    },
    {
      id: "claro-mini",
      title: "Mini Programs for Claro's super app",
      org: "Softgic",
      period: "2025",
      domain: "Telecom · Commerce",
      summary: "Cinemark Preferencial and the Templo de la Moda checkout flow, running inside Claro's app.",
      context: "Claro's partner merchants needed to sell and offer benefits inside the super app, without users installing another app.",
      did: [
        "Cinemark Preferencial: new components, terms and conditions and bug fixing through QA. Second-largest contributor to the repository.",
        "Templo de la Moda: cart, payment summary and shipping details form.",
        "AXML views and ACSS styles following Claro's design, with per-developer branches, QA and Azure DevOps.",
      ],
      stack: ["Mini Programs (AXML, ACSS)", "JavaScript", "Azure DevOps"],
      status: "Private client code.",
    },
    {
      id: "claro-ventas",
      title: "Claro Sales App",
      org: "Softgic",
      period: "2026",
      domain: "Telecom · Sales",
      summary: "Plan and service sales flow in Next.js 16 and React 19.",
      context: "A sales platform to sell plans, services and products with a clear end-to-end flow.",
      did: [
        "Built the plans, services, products and store views with the complete sales flow.",
        "Improved the catalog with progressive loading, compact cards and plan modals.",
        "Built the service admin views.",
      ],
      stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
      status: "Private client code.",
    },
    {
      id: "procuraduria",
      title: "Relatoría for the Office of the Inspector General",
      org: "Lappiz",
      period: "2023 – 2024",
      domain: "Public sector",
      summary: "Technical lead of the project: team coordination, requirements with the agency and development.",
      context:
        "Project for a Colombian government agency (Procuraduría General de la Nación) built on the Lappiz platform, with requirements gathered directly with its staff.",
      did: [
        "Led the project technically: coordinated team activities and deliverable quality.",
        "Gathered requirements in sessions with the agency and designed the databases.",
        "Built with JavaScript, React, Next.js and SQL Server, working with Scrum and Azure DevOps.",
        "At Lappiz I also built Power BI dashboards and automated document generation with jsPDF for corporate clients.",
      ],
      stack: ["JavaScript", "React", "Next.js", "SQL Server", "Power BI", "jsPDF", "Azure DevOps"],
      status: "Private client code.",
    },
    {
      id: "vetpos",
      title: "VetPOS",
      org: "Mr. Max Vet",
      period: "2026",
      domain: "Veterinary · Small business",
      summary: "Point of sale and management for veterinary clinics, ready for multiple clinics.",
      context: "A veterinary clinic in Cali handled sales, inventory and appointments manually. I designed and built the whole system.",
      did: [
        "12 backend modules: sales, inventory with stock movements, customers, pets, appointments, services, expenses and Excel reports.",
        "15 React screens, including the point of sale and a super admin panel for multiple clinics.",
        "JWT authentication with three roles, security headers and rate limiting.",
        "Docker Compose deployment: MySQL, API and an Nginx-served frontend.",
      ],
      stack: ["NestJS", "TypeORM", "MySQL", "React", "TypeScript", "Docker"],
      link: { label: "View code on GitHub", href: "https://github.com/MateoHdz/TeoNova-Vet" },
    },
    {
      id: "daysecurity",
      title: "DaySecurity CRM",
      org: "Client project",
      period: "2026",
      domain: "Electronic security · Sales",
      summary: "CRM for a company that sells and installs cameras, alarms and solar panels.",
      context:
        "The company handled quotes, sales and its technicians' materials in loose spreadsheets. The system connects the whole flow: customer, quote, sale, installation and commission.",
      did: [
        "CRM with customer follow-up and alerts for unanswered quotes.",
        "Quotes exportable to PDF and one-click conversion to a sale.",
        "Inventory with automatic deductions and material assignment and returns per technician.",
        "Sales commissions, expenses and Excel reports.",
      ],
      stack: ["NestJS", "TypeORM", "MySQL", "React", "TypeScript", "Docker"],
      status: "MVP in progress · private code.",
    },
    {
      id: "atlas",
      title: "Atlas Spaces",
      org: "Personal project",
      period: "2026",
      domain: "Coworking · Bookings",
      summary: "Booking platform for rooms and offices that prevents overlapping reservations with atomic transactions.",
      context: "Full stack technical test: manage coworking locations, meeting rooms and auditoriums with real-time bookings.",
      did: [
        "Express API with auth (JWT, roles, rate limiting and Zod validation), spaces and bookings modules.",
        "MongoDB transactions so two people can never book the same slot.",
        "React dashboard with metrics and CSV export.",
        "47 Jest tests and a full Docker Compose environment.",
      ],
      stack: ["Express", "MongoDB", "React", "Vite", "Tailwind CSS", "Jest", "Docker"],
      link: { label: "View code on GitHub", href: "https://github.com/MateoHdz/atlas-spaces" },
    },
    {
      id: "turnia",
      title: "Turnia",
      org: "Personal project",
      period: "2026",
      domain: "Labor law · Product",
      summary: "Shift planner that shows the cost of every shift before the schedule is published.",
      context:
        "Colombia's labor reform changed the cost of every hour (night, Sunday and overtime surcharges). Small businesses build schedules without knowing what they cost.",
      did: [
        "Researched current law (Laws 2101 and 2466) and turned it into configurable calculation rules.",
        "Designed 13 product screens, from onboarding to the employee view.",
        "Wrote the phased roadmap with acceptance criteria to build it with AI.",
      ],
      stack: ["Product design", "Legal research", "Phased roadmap"],
      status: "In design (phase 0 delivered).",
      link: { label: "View on GitHub", href: "https://github.com/MateoHdz/Turnia" },
    },
    {
      id: "predios",
      title: "Land-parcel folder generator",
      org: "Internal tool",
      period: "2026",
      domain: "Cadastre · Automation",
      summary: "Desktop app that assembles land-parcel files for a cadastral delivery.",
      context: "Organizing hundreds of parcel folders (photos, PDFs and codes) by hand took hours and caused errors.",
      did: [
        "Reads each folder, validates the lot photo, renames it with the parcel code and builds the delivery structure.",
        "Merges the supporting PDFs into one document and reports processed, empty or incomplete parcels.",
        "Packaged as a Windows executable with PyInstaller.",
      ],
      stack: ["Python", "Tkinter", "pypdf", "PyInstaller"],
      status: "Private code.",
    },
  ],
  processTitle: "How I work",
  process: [
    { title: "I understand the business", text: "Before writing code I sit with the people who will use the system and gather the requirements, rules and edge cases." },
    { title: "I model the data and the rules", text: "I design the database and write the business rules in a document the client can read and approve." },
    { title: "I build in phases, with tests", text: "I deliver in phases with clear acceptance criteria and automated tests on everything that touches money or inventory." },
    { title: "I document and support", text: "I write down decisions, manuals and the roadmap, and I support the release and the follow-up." },
  ],
  ai: "I work with AI (Claude Code) as one more teammate: I give it specs, business rules and acceptance criteria phase by phase, and I review every change before merging it.",
  experienceTitle: "Experience",
  experience: experienceFrom(cvEn as Cv, [
    "Lead developer of a multi-tenant SaaS for restaurants.",
    "Point of sale and veterinary management system.",
    "Mini Programs and Sales App for Claro.",
    "Technical lead of the project for the Office of the Inspector General.",
    "Proofs of concept, databases and Power BI.",
  ]),
  fullCv: "View full resume (PDF)",
  stackTitle: "Stack",
  stack: cvEn.skills,
  languagesLine: "Spanish: native · English: A2, actively studying. Happy to interview in Spanish or in simple English.",
  contactTitle: "Let's talk",
  contactText: "I'm looking for a team where I can build complete products. I reply quickly by email or WhatsApp.",
  contact: { email: EMAIL, phone: PHONE, whatsapp: WHATSAPP, github: GITHUB, cvEs: CV_ES, cvEn: CV_EN },
  contactLabels: {
    email: "Email",
    whatsapp: "WhatsApp",
    github: "GitHub",
    cvEs: "Hoja de vida en español (PDF)",
    cvEn: "Resume in English (PDF)",
  },
  footer: "Built with Next.js and Tailwind CSS. Updated November 2026.",
};

export const site: Record<Lang, Site> = { es, en };
