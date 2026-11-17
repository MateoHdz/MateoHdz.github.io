export type Lang = "es" | "en";

export type Code = { kind: "private"; label: string } | { kind: "public"; label: string; href: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  client: string;
  role: string;
  summary: string;
  context: string;
  done: string[];
  stack: string[];
  flow?: { label: string; steps: string[] };
  status?: string;
  code: Code;
};

/** Bloque del plano. `dim` es la cifra medida que se acota sobre el bloque. */
export type PlanNode = { name: string; text: string; dim?: string };

export type Figure = {
  value: string;
  label: string;
  /** Versión de una línea de `label` para teléfonos. */
  short?: string;
  /** Barra a escala: `ratio` es la fracción del total que se dibuja en verde. */
  scale?: { ratio: number; caption: string };
};

export type Job = {
  /** Meses en formato AAAA-MM; `end` vacío significa que sigue hoy. */
  start: string;
  end: string;
  dates: string;
  role: string;
  company: string;
  place: string;
  line: string;
};

/** `event` es el nombre del clic en el contador de visitas (GoatCounter). */
export type ContactItem = { label: string; value: string; href: string; event: string };

export type Site = {
  lang: Lang;
  meta: { title: string; description: string; ogDescription: string };
  name: string;
  firstName: string;
  lastName: string;
  ui: {
    skip: string;
    home: string;
    mainNav: string;
    mobileNav: string;
    openMenu: string;
    closeMenu: string;
    contact: string;
    otherLang: { short: string; href: string; label: string };
    backToTop: string;
    showDetail: string;
    hideDetail: string;
    copyEmail: string;
    copied: string;
  };
  nav: { id: string; label: string }[];
  hero: {
    lead: string;
    leadStrong: string;
    work: string;
    cv: string;
    cvHref: string;
    email: string;
    portraitAlt: string;
    viewLabel: string;
    viewPhoto: string;
    viewAvatar: string;
    notesTitle: string;
    notes: { text: string; source: string; href: string }[];
    blockTitle: string;
    block: { label: string; value: string }[];
    revision: { label: string; value: string };
    cvLabel: string;
  };
  work: {
    title: string;
    measure: string;
    countLabel: string;
    flagship: {
      title: string;
      client: string;
      role: string;
      summary: string;
      flowLabel: string;
      flow: PlanNode[];
      contract: string;
      platformLabel: string;
      platform: PlanNode[];
      figuresLabel: string;
      figures: Figure[];
      source: string;
      stackLabel: string;
      stack: string[];
    };
    groups: { title: string; projects: Project[] }[];
    labels: { context: string; done: string; role: string; stack: string; code: string; status: string };
  };
  process: {
    title: string;
    measure: string;
    proofLabel: string;
    /** `proof` es un ejemplo verificable del paso, tomado de un proyecto. */
    steps: { title: string; text: string; proof: string }[];
    noteLabel: string;
    note: string;
  };
  experience: {
    title: string;
    measure: string;
    axisLabel: string;
    jobs: Job[];
    education: { dates: string; degree: string; school: string; label: string };
  };
  stack: { title: string; groups: StackGroup[] };
  contact: { title: string; text: string; whatsapp: string; items: ContactItem[] };
  footer: string;
};

/**
 * Fila del stack. Las filas de tecnologías solo llevan `items`. Las de método e IA llevan además una
 * frase (`lead`), muestran sus ítems como pasos en orden (`steps`) o como tareas (`tasks`) y cierran
 * con notas cortas (`notes`).
 */
export type StackGroup = {
  group: string;
  items: string[];
  lead?: string;
  layout?: "steps" | "tasks";
  notes?: { label: string; text: string }[];
};

export const EMAIL = "mateohernandez10012003@gmail.com";
const PHONE = "+57 321 527 2808";
export const WHATSAPP = "https://wa.me/573215272808";
export const GITHUB = "https://github.com/MateoHdz";
export const LINKEDIN = "https://www.linkedin.com/in/mateo-hernandez-209384280/";
export const CV_ES = "/cv/Mateo_Hernandez_Hoja_de_Vida_Desarrollador_Full_Stack.pdf";
export const CV_EN = "/cv/Mateo_Hernandez_Resume_Full_Stack_Developer.pdf";

/** Mes de la última revisión del contenido: cierra la barra del empleo actual. */
export const REVISION = "2026-11";
export const TIMELINE = { start: "2023-01", end: "2026-12", years: ["2023", "2024", "2025", "2026"] };

const contactItems = (l: { email: string; cvEs: string; cvEn: string }): ContactItem[] => [
  { label: l.email, value: EMAIL, href: `mailto:${EMAIL}`, event: "correo" },
  { label: "WhatsApp", value: PHONE, href: WHATSAPP, event: "whatsapp" },
  { label: "LinkedIn", value: "in/mateo-hernandez-209384280", href: LINKEDIN, event: "linkedin" },
  { label: "GitHub", value: "github.com/MateoHdz", href: GITHUB, event: "github" },
  { label: l.cvEs, value: "PDF · español", href: CV_ES, event: "hoja-de-vida-es" },
  { label: l.cvEn, value: "PDF · English", href: CV_EN, event: "hoja-de-vida-en" },
];

const STACK_QUANTUM = ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Firebase", "Firestore", "node:test"];

const es: Site = {
  lang: "es",
  meta: {
    title: "Mateo Hernández · Desarrollador Full Stack",
    description:
      "Desarrollador full stack en Cali, Colombia. Desarrollador principal de un SaaS para restaurantes: pedidos, cocina, caja e inventario conectados. React, Node.js, TypeScript y Firebase.",
    ogDescription:
      "Software de negocio del requerimiento a producción: SaaS para restaurantes, mini programas para Claro y un proyecto para la Procuraduría General de la Nación.",
  },
  name: "Mateo Hernández",
  firstName: "Mateo",
  lastName: "Hernández",
  ui: {
    skip: "Saltar al contenido",
    home: "Mateo Hernández, inicio",
    mainNav: "Navegación principal",
    mobileNav: "Navegación móvil",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    contact: "Contacto",
    otherLang: { short: "EN", href: "/en/", label: "Read this page in English" },
    backToTop: "Volver arriba",
    showDetail: "Ver detalle",
    hideDetail: "Cerrar detalle",
    copyEmail: "Copiar correo",
    copied: "Correo copiado",
  },
  nav: [
    { id: "proyectos", label: "Proyectos" },
    { id: "proceso", label: "Proceso" },
    { id: "experiencia", label: "Experiencia" },
    { id: "stack", label: "Stack" },
  ],
  hero: {
    leadStrong: "Desarrollador de software.",
    lead: "Transformo ideas y necesidades de negocio en soluciones digitales, conectando tecnología, innovación y desarrollo para crear productos que generan valor.",
    work: "Ver proyectos",
    cv: "Hoja de vida",
    cvHref: CV_ES,
    email: "Correo",
    portraitAlt: "Mateo Hernández, sonriente, con camisa negra",
    viewLabel: "Versión del retrato",
    viewPhoto: "Foto",
    viewAvatar: "Ilustración",
    notesTitle: "Notas",
    notes: [
      {
        text: "Líder de desarrollo · Ecosistema SaaS",
        source: "Quantum Infinity · 2026",
        href: "#proyecto-quantum",
      },
      {
        text: "Desarrollador Full Stack · CRM",
        source: "DaySecurity · Seguridad electrónica · 2026",
        href: "#proyecto-daysecurity",
      },
      {
        text: "Desarrollador · Mini programas",
        source: "Softgic · Cinemark, Tu Boleta y Templo de la Moda\u00a0·\u00a02025",
        href: "#proyecto-claro-mini",
      },
      {
        text: "Líder técnico · Proyecto Relatoría",
        source: "Lappiz · Procuraduría General de la Nación\u00a0·\u00a02023\u00a0–\u00a02024",
        href: "#proyecto-procuraduria",
      },
    ],
    blockTitle: "Datos",
    block: [
      { label: "Rol", value: "Desarrollador de Software" },
      { label: "Ubicación", value: "Cali, Colombia · UTC−5" },
      { label: "Modalidad", value: "Remoto o presencial en Cali" },
      { label: "Vinculación", value: "Contrato laboral o prestación de servicios" },
      { label: "Idiomas", value: "Español nativo · Inglés A2" },
    ],
    revision: { label: "Revisión", value: "Noviembre de 2026" },
    cvLabel: "Hoja de vida",
  },
  work: {
    title: "Proyectos",
    measure: "9 proyectos · 2023 – 2026",
    countLabel: "proyectos",
    flagship: {
      title: "Ecosistema SaaS para restaurantes",
      client: "Quantum Infinity Technologies · desde julio de 2026",
      role: "Desarrollador principal",
      summary:
        "Llegué a un punto de venta que ya usaban restaurantes con varias sedes. Lo amplié y construí a su alrededor lo que faltaba: que un pedido llegue del anuncio a la cocina y a la caja, y que un restaurante nuevo se dé de alta sin escribir código.",
      flowLabel: "Recorrido de un pedido",
      flow: [
        {
          name: "Menú y Focus",
          text: "El cliente pide desde la carta o desde el anuncio de un solo producto: a domicilio, para recoger o en la mesa.",
        },
        {
          name: "Gestión de pedidos",
          text: "Cada sede enciende su cocina, pantalla de cocina, despacho y domiciliarios. El cliente recibe un aviso por WhatsApp en cada estado.",
        },
        {
          name: "Punto de venta",
          text: "Caja y cuadre, compras con impuestos, inventario por ubicación, producción en planta y 30 reportes.",
        },
      ],
      contract: "Las tres hablan el mismo contrato de pedido, con transacciones e identificadores idempotentes: un pedido nunca se cobra dos veces.",
      platformLabel: "Herramientas internas",
      platform: [
        {
          name: "Controlador",
          text: "Consola para crear una empresa y encender sus apps sin tocar código. Una maqueta aprobada por fase.",
          dim: "4 fases en 2 días",
        },
        {
          name: "Importador de datos",
          text: "Trae a un restaurante desde su sistema anterior, con vista previa y reversa.",
          dim: "1.703 registros en 21 min",
        },
        {
          name: "Demo comercial",
          text: "Las cuatro apps de verdad con un restaurante ficticio, para vender sin tocar datos de clientes.",
          dim: "Lista en 3 días",
        },
      ],
      figuresLabel: "Resultados",
      figures: [
        {
          value: "4 meses",
          label: "Desde que llegué: amplié el punto de venta y los pedidos, llevé el menú y el Focus a multiempresa, y construí el Controlador y la demo comercial.",
          short: "Punto de venta ampliado, menú multiempresa, Controlador y demo.",
        },
        {
          value: "2 veces más rápido",
          label: "Cobrar una venta pasó de 1,4 s a 0,7 s. Cargué las recetas por niveles en vez de una por una, y comprobé que el inventario descuenta igual.",
          short: "Cobrar una venta: de 1,4 s a 0,7 s.",
          scale: { ratio: 700 / 1390, caption: "0,7 de 1,4 segundos" },
        },
        {
          value: "Más de 1.700 pruebas",
          label: "El punto de venta no tenía ninguna prueba automática cuando llegué. Todas las que tiene hoy las escribí yo.",
          short: "Escritas por mí; antes no había ninguna.",
        },
        {
          value: "Un solo código",
          label: "Antes, cada restaurante nuevo era una copia de la app. Convertí el menú, el Focus y la gestión de pedidos en una sola base para todas las empresas.",
          short: "Una base para todas las empresas, no una copia por restaurante.",
        },
      ],
      source: "Medido en el historial de git, las pruebas y los informes del proyecto. El código es privado y pertenece a la empresa, y no publico datos de sus clientes.",
      stackLabel: "Stack",
      stack: STACK_QUANTUM,
    },
    labels: { context: "Contexto", done: "Lo que hice", role: "Rol", stack: "Stack", code: "Código", status: "Estado" },
    groups: [
      {
        title: "Para clientes y empleadores",
        projects: [
          {
            id: "claro-mini",
            title: "Mini programas para la super app de Claro",
            year: "2025",
            client: "Softgic · Claro",
            role: "Desarrollador",
            summary: "Los usuarios de Claro compran en Templo de la Moda y usan sus beneficios de Cinemark sin instalar otra app.",
            context:
              "Los comercios aliados de Claro venden y dan beneficios a los usuarios dentro de la super app, sin que la gente instale otra aplicación.",
            done: [
              "Cinemark Preferencial: nuevos componentes, términos y condiciones, e incidencias corregidas hasta pasar QA.",
              "Templo de la Moda: carrito, resumen de pago y formulario de datos de envío.",
              "Vistas en AXML y estilos en ACSS según el diseño de Claro, con ramas por desarrollador y entregas en Azure DevOps.",
            ],
            stack: ["Mini Programs (AXML, ACSS)", "JavaScript", "Azure DevOps"],
            flow: { label: "Compra en Templo de la Moda", steps: ["Carrito", "Resumen de pago", "Datos de envío"] },
            code: { kind: "private", label: "Privado, del cliente" },
          },
          {
            id: "claro-ventas",
            title: "App de Ventas de Claro",
            year: "2026",
            client: "Softgic · Claro",
            role: "Desarrollador",
            summary: "Un flujo de venta de planes, servicios y productos, del catálogo al cierre, en Next.js 16 y React 19.",
            context: "Plataforma comercial para vender planes, servicios y productos con un flujo claro de principio a fin.",
            done: [
              "Vistas de planes, servicios, productos y tienda, con el flujo completo de venta.",
              "Catálogo con carga progresiva, tarjetas compactas y modales de planes.",
              "Vistas de administración de servicios.",
            ],
            stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
            code: { kind: "private", label: "Privado, del cliente" },
          },
          {
            id: "procuraduria",
            title: "Relatoría, Procuraduría General de la Nación",
            year: "2023 – 2024",
            client: "Lappiz · Sector público",
            role: "Liderazgo técnico y desarrollo",
            summary: "Coordiné al equipo y llevé los requerimientos de la entidad a un sistema sobre la plataforma Lappiz.",
            context:
              "Proyecto para una entidad del Estado, construido sobre la plataforma Lappiz con requerimientos levantados directamente con sus funcionarios.",
            done: [
              "Coordiné las actividades del equipo y la calidad de los entregables.",
              "Levanté requerimientos en sesiones con la entidad y diseñé las bases de datos.",
              "Desarrollé con JavaScript, React, Next.js y SQL Server, con Scrum y Azure DevOps.",
              "En Lappiz también construí tableros en Power BI y generación automática de documentos con jsPDF.",
            ],
            stack: ["JavaScript", "React", "Next.js", "SQL Server", "Power BI", "jsPDF", "Azure DevOps"],
            code: { kind: "private", label: "Privado, del cliente" },
          },
          {
            id: "vetpos",
            title: "VetPOS",
            year: "2026",
            client: "Mr. Max Vet · Clínica veterinaria",
            role: "Diseño y desarrollo completo",
            summary: "Ventas, inventario, mascotas y citas de una clínica veterinaria en un solo sistema, en lugar de procesos manuales.",
            context: "Una clínica veterinaria de Cali llevaba ventas, inventario y citas en procesos manuales.",
            done: [
              "12 módulos de backend: ventas, inventario con movimientos de stock, clientes, mascotas, citas, servicios, gastos y reportes en Excel.",
              "15 pantallas en React, incluido el punto de venta y un panel de superadministrador.",
              "Autenticación JWT con tres roles, cabeceras de seguridad y límite de peticiones.",
            ],
            stack: ["NestJS", "TypeORM", "MySQL", "React", "TypeScript", "Docker"],
            flow: { label: "Despliegue con Docker Compose", steps: ["React servido con Nginx", "API en NestJS", "MySQL"] },
            code: { kind: "public", label: "github.com/MateoHdz/TeoNova-Vet", href: "https://github.com/MateoHdz/TeoNova-Vet" },
          },
          {
            id: "daysecurity",
            title: "DaySecurity CRM",
            year: "2026",
            client: "DaySecurity · Seguridad electrónica",
            role: "Diseño y desarrollo",
            summary: "Que ninguna cotización se pierda: un CRM que une cliente, cotización, venta, instalación y comisión.",
            context: "La empresa manejaba cotizaciones, ventas y el material de sus técnicos en hojas sueltas.",
            done: [
              "Seguimiento de clientes y alertas de cotizaciones sin respuesta.",
              "Cotizaciones exportables a PDF y conversión a venta en un clic.",
              "Inventario con descuento automático, asignación y devolución de material por técnico.",
              "Comisiones por vendedor, gastos y reportes en Excel.",
            ],
            stack: ["NestJS", "TypeORM", "MySQL", "React", "TypeScript", "Docker"],
            flow: { label: "Lo que conecta el sistema", steps: ["Cliente", "Cotización", "Venta", "Instalación", "Comisión"] },
            status: "MVP en desarrollo",
            code: { kind: "private", label: "Privado" },
          },
        ],
      },
      {
        title: "Proyectos propios y herramientas",
        projects: [
          {
            id: "atlas",
            title: "Atlas Spaces",
            year: "2026",
            client: "Prueba técnica full stack",
            role: "Autor",
            summary: "Reservas de salas y oficinas sin choques de horario: dos personas nunca reservan el mismo espacio.",
            context: "Administrar sedes de coworking, salas y auditorios con reservas en tiempo real.",
            done: [
              "API en Express con autenticación (JWT, roles, límite de intentos, validación con Zod), espacios y reservas.",
              "Transacciones de MongoDB para que dos personas nunca reserven el mismo horario.",
              "Dashboard con indicadores y exportación a CSV en React.",
              "47 pruebas con Jest y entorno completo con Docker Compose.",
            ],
            stack: ["Express", "MongoDB", "React", "Vite", "Tailwind CSS", "Jest", "Docker"],
            code: { kind: "public", label: "github.com/MateoHdz/atlas-spaces", href: "https://github.com/MateoHdz/atlas-spaces" },
          },
          {
            id: "turnia",
            title: "Turnia",
            year: "2026",
            client: "Producto propio",
            role: "Investigación y diseño de producto",
            summary: "Muestra cuánto cuesta cada turno con la reforma laboral, antes de publicar el horario.",
            context:
              "La reforma laboral cambió el costo de cada hora (recargos nocturnos, dominicales y horas extra). Los negocios pequeños arman horarios sin saber cuánto les cuestan.",
            done: [
              "Convertí la norma vigente (Ley 2101 y Ley 2466) en reglas de cálculo parametrizables.",
              "Diseñé 13 pantallas del producto, desde el onboarding hasta la vista del empleado.",
              "Escribí el roadmap por fases con criterios de aceptación.",
            ],
            stack: ["Diseño de producto", "Investigación normativa", "Roadmap por fases"],
            flow: { label: "De la norma al horario", steps: ["Ley 2101 y Ley 2466", "Reglas de cálculo", "Costo por turno", "Horario publicado"] },
            status: "En diseño, fase 0 entregada",
            code: { kind: "public", label: "github.com/MateoHdz/Turnia", href: "https://github.com/MateoHdz/Turnia" },
          },
          {
            id: "predios",
            title: "Generador de carpetas de predios",
            year: "2026",
            client: "Herramienta interna · Catastro",
            role: "Autor",
            summary: "Arma con un clic los expedientes que antes se organizaban carpeta por carpeta, y avisa cuáles están incompletos.",
            context: "Organizar a mano cientos de carpetas de predios (fotos, PDF y códigos) tomaba horas y generaba errores.",
            done: [
              "Lee cada carpeta, valida la foto del lote y la renombra con el código del predio.",
              "Une los PDF de soporte en un solo documento y reporta predios procesados, vacíos o incompletos.",
              "Empaquetada como ejecutable de Windows con PyInstaller.",
            ],
            stack: ["Python", "Tkinter", "pypdf", "PyInstaller"],
            flow: { label: "Por cada predio", steps: ["Lee la carpeta", "Valida la foto", "Renombra con el código", "Une los PDF", "Reporta"] },
            code: { kind: "private", label: "Privado" },
          },
        ],
      },
    ],
  },
  process: {
    title: "Cómo trabajo",
    measure: "4 pasos, en este orden",
    proofLabel: "En la práctica",
    steps: [
      {
        title: "Entiendo el problema y el negocio",
        text: "Antes de proponer nada pregunto cómo gana dinero el negocio, quién va a usar el sistema y qué se pierde si falla. Lo que no sé, lo pregunto; no lo supongo.",
        proof: "Antes de cambiar el punto de venta de Quantum, lo audité y lo documenté módulo por módulo.",
      },
      {
        title: "Lo explico por escrito",
        text: "Paso lo que entendí a un documento en palabras simples: qué se va a hacer, con qué reglas y qué queda por fuera. Se corrige ahí, antes de escribir código.",
        proof: "Las reglas de compras, como «solo el efectivo sale de la caja», se acordaron con el negocio y quedaron escritas antes de programarlas.",
      },
      {
        title: "Maqueto antes de desarrollar",
        text: "Muestro cómo se va a ver y a usar con una maqueta navegable. Cambiar un dibujo cuesta menos que rehacer una pantalla, así que construyo cuando la maqueta está aprobada.",
        proof: "El Controlador tuvo una maqueta por fase, y cada fase se construyó después de aprobar la suya.",
      },
      {
        title: "Construyo por fases y entrego explicado",
        text: "Cada fase termina en algo que se puede usar y probar. Lo que toca dinero o inventario lleva pruebas automáticas, y al entregar explico qué cambió y cómo se usa.",
        proof: "Cada fase del módulo de producción del punto de venta cerró con un informe de lo que se hizo y cómo se comprobó.",
      },
    ],
    noteLabel: "Sobre la IA",
    note: "Integro agentes de IA (Claude Code) dentro de este mismo proceso: con ellos analizo código existente, planeo el roadmap, implemento cada fase y la pruebo. La IA acelera el trabajo, pero el criterio es mío: defino qué se construye, apruebo la maqueta y reviso cada cambio antes de integrarlo.",
  },
  experience: {
    title: "Experiencia",
    measure: "Desde 02/2023 · dibujada a escala",
    axisLabel: "Línea de tiempo",
    jobs: [
      {
        start: "2026-07",
        end: "",
        dates: "07/2026 – hoy",
        role: "Desarrollador Full Stack",
        company: "Quantum Infinity Technologies",
        place: "Colombia",
        line: "Desarrollador principal de un SaaS multiempresa para restaurantes: menú, Focus, gestión de pedidos, punto de venta y el Controlador que da de alta a cada empresa.",
      },
      {
        start: "2026-03",
        end: "2026-05",
        dates: "03/2026 – 05/2026",
        role: "Desarrollador Full Stack",
        company: "Mr. Max Vet",
        place: "Cali",
        line: "Diseñé y desarrollé VetPOS, el punto de venta y sistema de gestión de la clínica.",
      },
      {
        start: "2025-09",
        end: "2026-03",
        dates: "09/2025 – 03/2026",
        role: "Desarrollador de Software y Customer Success",
        company: "Softgic",
        place: "Medellín, remoto",
        line: "Mini programas para la super app de Claro y flujo de venta de la App de Ventas. Enlace entre el cliente y el equipo técnico.",
      },
      {
        start: "2023-08",
        end: "2025-07",
        dates: "08/2023 – 07/2025",
        role: "Desarrollador de Software y Customer Success",
        company: "Lappiz",
        place: "Medellín, remoto",
        line: "Lideré técnicamente el proyecto Relatoría para la Procuraduría General de la Nación. Requerimientos, bases de datos, Power BI y jsPDF.",
      },
      {
        start: "2023-02",
        end: "2023-08",
        dates: "02/2023 – 08/2023",
        role: "Practicante de Análisis y Desarrollo de Software",
        company: "Softgic",
        place: "Medellín, remoto",
        line: "Pruebas de concepto, bases de datos y tableros en Power BI.",
      },
    ],
    education: {
      label: "Formación",
      dates: "2021 – 2023",
      degree: "Tecnólogo en Análisis y Desarrollo de Software",
      school: "SENA, Guadalajara de Buga",
    },
  },
  stack: {
    title: "Stack",
    groups: [
      { group: "Programación", items: ["JavaScript", "TypeScript", "Python"] },
      { group: "Estructura y estilos", items: ["HTML5", "CSS3", "Tailwind CSS"] },
      { group: "Frontend", items: ["React", "Next.js", "Vite", "Angular", "Zustand", "Recharts"] },
      { group: "Backend y APIs", items: ["Node.js", "Express", "NestJS", "APIs REST", "JWT", "Zod"] },
      { group: "Bases de datos y cloud", items: ["MySQL", "SQL Server", "MongoDB", "Firebase", "Firestore", "TypeORM"] },
      { group: "Pruebas", items: ["Jest", "Node.js Test Runner", "Pruebas funcionales", "Emuladores de Firebase"] },
      { group: "Herramientas", items: ["Git", "GitHub", "Azure DevOps", "Docker", "Postman", "Power BI", "jsPDF"] },
      { group: "Arquitectura y patrones", items: ["MVC (Modelo-Vista-Controlador)", "Monolítica", "Modular", "Multitenant"] },
      {
        group: "Metodología de desarrollo",
        lead: "Empiezo con un análisis profundo del proyecto: necesidades, arquitectura y objetivos. Luego armo un roadmap y divido el trabajo en fases, cada una con objetivos y entregables definidos.",
        layout: "steps",
        items: [
          "Análisis y comprensión de requerimientos",
          "Planificación con roadmap",
          "Desarrollo por fases",
          "Objetivos y entregables por fase",
          "Validación y mejora continua",
        ],
        notes: [{ label: "Marco de trabajo", text: "Metodologías ágiles y Scrum" }],
      },
      {
        group: "Desarrollo asistido por IA",
        lead: "Ingeniería de software apoyada en agentes de IA, planificación estructurada y ejecución por fases.",
        layout: "tasks",
        items: [
          "Análisis de proyectos y código existente",
          "Planificación de roadmaps",
          "Diseño y revisión de arquitectura",
          "Desarrollo por fases",
          "Implementación y revisión de funcionalidades",
          "Pruebas y validación de entregables",
        ],
        notes: [
          { label: "Herramienta", text: "Claude Code" },
          { label: "Criterio", text: "La IA apoya el proceso; el criterio técnico, la supervisión y la validación de cada entrega son míos." },
        ],
      },
    ],
  },
  contact: {
    title: "¿Tienes una vacante o un proyecto?",
    text: "Busco un equipo donde construir producto de principio a fin, y también tomo proyectos por prestación de servicios.",
    whatsapp: "Escribir por WhatsApp",
    items: contactItems({ email: "Correo", cvEs: "Hoja de vida", cvEn: "Resume" }),
  },
  footer: "© 2026 Mateo Hernández · Cali, Colombia",
};

const en: Site = {
  lang: "en",
  meta: {
    title: "Mateo Hernández · Full Stack Developer",
    description:
      "Full stack developer in Cali, Colombia. Lead developer of a restaurant SaaS: orders, kitchen, cash register and inventory, connected. React, Node.js, TypeScript and Firebase.",
    ogDescription:
      "Business software from requirement to production: a restaurant SaaS, mini programs for Claro and a project for Colombia's Office of the Inspector General.",
  },
  name: "Mateo Hernández",
  firstName: "Mateo",
  lastName: "Hernández",
  ui: {
    skip: "Skip to content",
    home: "Mateo Hernández, home",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    contact: "Contact",
    otherLang: { short: "ES", href: "/", label: "Ver esta página en español" },
    backToTop: "Back to top",
    showDetail: "Show details",
    hideDetail: "Hide details",
    copyEmail: "Copy email",
    copied: "Email copied",
  },
  nav: [
    { id: "proyectos", label: "Projects" },
    { id: "proceso", label: "Process" },
    { id: "experiencia", label: "Experience" },
    { id: "stack", label: "Stack" },
  ],
  hero: {
    leadStrong: "Software developer.",
    lead: "I turn ideas and business needs into digital solutions, bringing together technology, innovation and development to build products that create value.",
    work: "See projects",
    cv: "Resume",
    cvHref: CV_EN,
    email: "Email",
    portraitAlt: "Mateo Hernández, smiling, wearing a black shirt",
    viewLabel: "Portrait version",
    viewPhoto: "Photo",
    viewAvatar: "Illustration",
    notesTitle: "Notes",
    notes: [
      {
        text: "Development lead · SaaS ecosystem",
        source: "Quantum Infinity · 2026",
        href: "#proyecto-quantum",
      },
      {
        text: "Full Stack Developer · CRM",
        source: "DaySecurity · Electronic security · 2026",
        href: "#proyecto-daysecurity",
      },
      {
        text: "Developer · Mini programs",
        source: "Softgic · Cinemark, Tu Boleta and Templo de la Moda\u00a0·\u00a02025",
        href: "#proyecto-claro-mini",
      },
      {
        text: "Technical lead · Relatoría project",
        source: "Lappiz · Colombia's Office of the Inspector General\u00a0·\u00a02023\u00a0–\u00a02024",
        href: "#proyecto-procuraduria",
      },
    ],
    blockTitle: "Details",
    block: [
      { label: "Role", value: "Software Developer" },
      { label: "Location", value: "Cali, Colombia · UTC−5" },
      { label: "Work mode", value: "Remote, or on-site in Cali" },
      { label: "Engagement", value: "Employee or contractor" },
      { label: "Languages", value: "Spanish, native · English, A2" },
    ],
    revision: { label: "Revision", value: "November 2026" },
    cvLabel: "Resume",
  },
  work: {
    title: "Projects",
    measure: "9 projects · 2023 – 2026",
    countLabel: "projects",
    flagship: {
      title: "SaaS ecosystem for restaurants",
      client: "Quantum Infinity Technologies · since July 2026",
      role: "Lead developer",
      summary:
        "I joined a point of sale already used by multi-location restaurants. I extended it and built what was missing around it: an order now travels from an ad to the kitchen and the cash register, and a new restaurant is set up without writing code.",
      flowLabel: "Path of an order",
      flow: [
        {
          name: "Menu and Focus",
          text: "The customer orders from the menu or from an ad for a single product: delivery, pickup or at the table.",
        },
        {
          name: "Order management",
          text: "Each location turns on its kitchen, kitchen display, dispatch and couriers. The customer gets a WhatsApp update at every stage.",
        },
        {
          name: "Point of sale",
          text: "Cash register and reconciliation, purchases with taxes, inventory by location, production and 30 reports.",
        },
      ],
      contract: "All three speak the same order contract, with transactions and idempotent IDs: an order is never charged twice.",
      platformLabel: "Internal tools",
      platform: [
        {
          name: "Controller",
          text: "Console to create a company and turn on its apps without touching code. One approved mockup per phase.",
          dim: "4 phases in 2 days",
        },
        {
          name: "Data importer",
          text: "Brings a restaurant over from its previous system, with preview and rollback.",
          dim: "1,703 records in 21 min",
        },
        {
          name: "Sales demo",
          text: "The four real apps with a fictional restaurant, to sell without touching customer data.",
          dim: "Ready in 3 days",
        },
      ],
      figuresLabel: "Results",
      figures: [
        {
          value: "4 months",
          label: "Since I joined: I extended the point of sale and order management, made the menu and Focus multi-tenant, and built the Controller and the sales demo.",
          short: "Extended POS, multi-tenant menu, Controller and demo.",
        },
        {
          value: "Twice as fast",
          label: "Checking out a sale went from 1.4 s to 0.7 s. I loaded recipes level by level instead of one by one, and checked that inventory is deducted the same way.",
          short: "Checking out a sale: from 1.4 s to 0.7 s.",
          scale: { ratio: 700 / 1390, caption: "0.7 of 1.4 seconds" },
        },
        {
          value: "Over 1,700 tests",
          label: "The point of sale had no automated tests when I joined. I wrote every one it has today.",
          short: "All written by me; there were none before.",
        },
        {
          value: "One codebase",
          label: "Each new restaurant used to be a copy of the app. I turned the menu, Focus and order management into a single base for every company.",
          short: "One base for every company, not a copy per restaurant.",
        },
      ],
      source: "Measured from git history, the tests and the project reports. The code is private and belongs to the company, and I don't publish its customers' data.",
      stackLabel: "Stack",
      stack: STACK_QUANTUM,
    },
    labels: { context: "Context", done: "What I did", role: "Role", stack: "Stack", code: "Code", status: "Status" },
    groups: [
      {
        title: "For clients and employers",
        projects: [
          {
            id: "claro-mini",
            title: "Mini programs for Claro's super app",
            year: "2025",
            client: "Softgic · Claro",
            role: "Developer",
            summary: "Claro users shop at Templo de la Moda and use their Cinemark benefits without installing another app.",
            context: "Claro's partner merchants sell and offer benefits inside the super app, without users installing another app.",
            done: [
              "Cinemark Preferencial: new components, terms and conditions, and bugs fixed until it passed QA.",
              "Templo de la Moda: cart, payment summary and shipping details form.",
              "AXML views and ACSS styles following Claro's design, with per-developer branches and deliveries in Azure DevOps.",
            ],
            stack: ["Mini Programs (AXML, ACSS)", "JavaScript", "Azure DevOps"],
            flow: { label: "Checkout in Templo de la Moda", steps: ["Cart", "Payment summary", "Shipping details"] },
            code: { kind: "private", label: "Private, owned by the client" },
          },
          {
            id: "claro-ventas",
            title: "Claro Sales App",
            year: "2026",
            client: "Softgic · Claro",
            role: "Developer",
            summary: "A sales flow for plans, services and products, from catalog to checkout, in Next.js 16 and React 19.",
            context: "A sales platform to sell plans, services and products with a clear end-to-end flow.",
            done: [
              "Plans, services, products and store views, with the complete sales flow.",
              "Catalog with progressive loading, compact cards and plan modals.",
              "Service administration views.",
            ],
            stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
            code: { kind: "private", label: "Private, owned by the client" },
          },
          {
            id: "procuraduria",
            title: "Relatoría, Office of the Inspector General",
            year: "2023 – 2024",
            client: "Lappiz · Public sector",
            role: "Technical leadership and development",
            summary: "I coordinated the team and turned the agency's requirements into a system on the Lappiz platform.",
            context:
              "Project for a Colombian government agency (Procuraduría General de la Nación), built on the Lappiz platform with requirements gathered directly with its staff.",
            done: [
              "Coordinated the team's activities and the quality of the deliverables.",
              "Gathered requirements in sessions with the agency and designed the databases.",
              "Built with JavaScript, React, Next.js and SQL Server, using Scrum and Azure DevOps.",
              "At Lappiz I also built Power BI dashboards and automated document generation with jsPDF.",
            ],
            stack: ["JavaScript", "React", "Next.js", "SQL Server", "Power BI", "jsPDF", "Azure DevOps"],
            code: { kind: "private", label: "Private, owned by the client" },
          },
          {
            id: "vetpos",
            title: "VetPOS",
            year: "2026",
            client: "Mr. Max Vet · Veterinary clinic",
            role: "Full design and development",
            summary: "Sales, inventory, pets and appointments for a veterinary clinic in one system, instead of manual processes.",
            context: "A veterinary clinic in Cali handled sales, inventory and appointments manually.",
            done: [
              "12 backend modules: sales, inventory with stock movements, customers, pets, appointments, services, expenses and Excel reports.",
              "15 React screens, including the point of sale and a super admin panel.",
              "JWT authentication with three roles, security headers and rate limiting.",
            ],
            stack: ["NestJS", "TypeORM", "MySQL", "React", "TypeScript", "Docker"],
            flow: { label: "Deployment with Docker Compose", steps: ["React served by Nginx", "NestJS API", "MySQL"] },
            code: { kind: "public", label: "github.com/MateoHdz/TeoNova-Vet", href: "https://github.com/MateoHdz/TeoNova-Vet" },
          },
          {
            id: "daysecurity",
            title: "DaySecurity CRM",
            year: "2026",
            client: "DaySecurity · Electronic security",
            role: "Design and development",
            summary: "So no quote gets lost: a CRM that links customer, quote, sale, installation and commission.",
            context: "The company handled quotes, sales and its technicians' materials on loose sheets.",
            done: [
              "Customer follow-up and alerts for unanswered quotes.",
              "Quotes exportable to PDF and one-click conversion to a sale.",
              "Inventory with automatic deductions, and material assignment and returns per technician.",
              "Sales commissions, expenses and Excel reports.",
            ],
            stack: ["NestJS", "TypeORM", "MySQL", "React", "TypeScript", "Docker"],
            flow: { label: "What the system connects", steps: ["Customer", "Quote", "Sale", "Installation", "Commission"] },
            status: "MVP in progress",
            code: { kind: "private", label: "Private" },
          },
        ],
      },
      {
        title: "Own projects and tools",
        projects: [
          {
            id: "atlas",
            title: "Atlas Spaces",
            year: "2026",
            client: "Full stack technical test",
            role: "Author",
            summary: "Room and office bookings with no clashes: two people never book the same space.",
            context: "Manage coworking locations, meeting rooms and auditoriums with real-time bookings.",
            done: [
              "Express API with authentication (JWT, roles, attempt limits, Zod validation), spaces and bookings.",
              "MongoDB transactions so two people can never book the same slot.",
              "React dashboard with metrics and CSV export.",
              "47 Jest tests and a complete Docker Compose environment.",
            ],
            stack: ["Express", "MongoDB", "React", "Vite", "Tailwind CSS", "Jest", "Docker"],
            code: { kind: "public", label: "github.com/MateoHdz/atlas-spaces", href: "https://github.com/MateoHdz/atlas-spaces" },
          },
          {
            id: "turnia",
            title: "Turnia",
            year: "2026",
            client: "Own product",
            role: "Research and product design",
            summary: "Shows what each shift costs under the labor reform, before the schedule is published.",
            context:
              "Colombia's labor reform changed the cost of every hour (night, Sunday and overtime surcharges). Small businesses build schedules without knowing what they cost.",
            done: [
              "Turned current law (Laws 2101 and 2466) into configurable calculation rules.",
              "Designed 13 product screens, from onboarding to the employee view.",
              "Wrote the phased roadmap with acceptance criteria.",
            ],
            stack: ["Product design", "Legal research", "Phased roadmap"],
            flow: { label: "From the law to the schedule", steps: ["Laws 2101 and 2466", "Calculation rules", "Cost per shift", "Published schedule"] },
            status: "In design, phase 0 delivered",
            code: { kind: "public", label: "github.com/MateoHdz/Turnia", href: "https://github.com/MateoHdz/Turnia" },
          },
          {
            id: "predios",
            title: "Land-parcel folder generator",
            year: "2026",
            client: "Internal tool · Cadastre",
            role: "Author",
            summary: "Builds in one click the parcel files that used to be organized folder by folder, and flags the incomplete ones.",
            context: "Organizing hundreds of parcel folders (photos, PDFs and codes) by hand took hours and caused errors.",
            done: [
              "Reads each folder, validates the lot photo and renames it with the parcel code.",
              "Merges the supporting PDFs into one document and reports processed, empty or incomplete parcels.",
              "Packaged as a Windows executable with PyInstaller.",
            ],
            stack: ["Python", "Tkinter", "pypdf", "PyInstaller"],
            flow: { label: "For each parcel", steps: ["Reads the folder", "Validates the photo", "Renames with the code", "Merges the PDFs", "Reports"] },
            code: { kind: "private", label: "Private" },
          },
        ],
      },
    ],
  },
  process: {
    title: "How I work",
    measure: "4 steps, in this order",
    proofLabel: "In practice",
    steps: [
      {
        title: "I understand the problem and the business",
        text: "Before proposing anything I ask how the business makes money, who will use the system and what is lost if it fails. What I don't know, I ask; I don't assume it.",
        proof: "Before changing Quantum's point of sale, I audited it and documented it module by module.",
      },
      {
        title: "I explain it in writing",
        text: "I put what I understood into a plain-language document: what will be built, under which rules and what is left out. It gets corrected there, before any code.",
        proof: "The purchasing rules, such as “only cash leaves the register”, were agreed with the business and written down before I coded them.",
      },
      {
        title: "I mock it up before building",
        text: "I show how it will look and work with a clickable mockup. Changing a drawing costs less than redoing a screen, so I build once the mockup is approved.",
        proof: "The Controller had one mockup per phase, and each phase was built after its mockup was approved.",
      },
      {
        title: "I build in phases and explain the delivery",
        text: "Each phase ends in something that can be used and tested. What touches money or inventory gets automated tests, and at delivery I explain what changed and how to use it.",
        proof: "Every phase of the point of sale's production module closed with a report of what was done and how it was verified.",
      },
    ],
    noteLabel: "About AI",
    note: "I bring AI agents (Claude Code) into this same process: with them I analyze existing code, plan the roadmap, build each phase and test it. AI speeds up the work, but the judgment is mine: I decide what gets built, approve the mockup and review every change before merging it.",
  },
  experience: {
    title: "Experience",
    measure: "Since 02/2023 · drawn to scale",
    axisLabel: "Timeline",
    jobs: [
      {
        start: "2026-07",
        end: "",
        dates: "07/2026 – now",
        role: "Full Stack Developer",
        company: "Quantum Infinity Technologies",
        place: "Colombia",
        line: "Lead developer of a multi-tenant SaaS for restaurants: menu, Focus, order management, point of sale and the Controller that sets up each company.",
      },
      {
        start: "2026-03",
        end: "2026-05",
        dates: "03/2026 – 05/2026",
        role: "Full Stack Developer",
        company: "Mr. Max Vet",
        place: "Cali",
        line: "Designed and built VetPOS, the clinic's point of sale and management system.",
      },
      {
        start: "2025-09",
        end: "2026-03",
        dates: "09/2025 – 03/2026",
        role: "Software Developer & Customer Success",
        company: "Softgic",
        place: "Medellín, remote",
        line: "Mini programs for Claro's super app and the sales flow of the Sales App. Link between the client and the technical team.",
      },
      {
        start: "2023-08",
        end: "2025-07",
        dates: "08/2023 – 07/2025",
        role: "Software Developer & Customer Success",
        company: "Lappiz",
        place: "Medellín, remote",
        line: "I led the Relatoría project technically for the Office of the Inspector General. Requirements, databases, Power BI and jsPDF.",
      },
      {
        start: "2023-02",
        end: "2023-08",
        dates: "02/2023 – 08/2023",
        role: "Software Analysis and Development Intern",
        company: "Softgic",
        place: "Medellín, remote",
        line: "Proofs of concept, databases and Power BI dashboards.",
      },
    ],
    education: {
      label: "Education",
      dates: "2021 – 2023",
      degree: "Software Analysis and Development Technologist",
      school: "SENA, Guadalajara de Buga, Colombia",
    },
  },
  stack: {
    title: "Stack",
    groups: [
      { group: "Programming", items: ["JavaScript", "TypeScript", "Python"] },
      { group: "Markup and styling", items: ["HTML5", "CSS3", "Tailwind CSS"] },
      { group: "Frontend", items: ["React", "Next.js", "Vite", "Angular", "Zustand", "Recharts"] },
      { group: "Backend and APIs", items: ["Node.js", "Express", "NestJS", "REST APIs", "JWT", "Zod"] },
      { group: "Databases and cloud", items: ["MySQL", "SQL Server", "MongoDB", "Firebase", "Firestore", "TypeORM"] },
      { group: "Testing", items: ["Jest", "Node.js Test Runner", "Functional testing", "Firebase emulators"] },
      { group: "Tools", items: ["Git", "GitHub", "Azure DevOps", "Docker", "Postman", "Power BI", "jsPDF"] },
      { group: "Architecture and patterns", items: ["MVC (Model-View-Controller)", "Monolithic", "Modular", "Multi-tenant"] },
      {
        group: "Development methodology",
        lead: "I start with an in-depth analysis of the project: its needs, architecture and goals. Then I build a roadmap and split the work into phases, each with defined goals and deliverables.",
        layout: "steps",
        items: [
          "Requirements analysis",
          "Roadmap planning",
          "Phased development",
          "Goals and deliverables per phase",
          "Validation and continuous improvement",
        ],
        notes: [{ label: "Framework", text: "Agile methodologies and Scrum" }],
      },
      {
        group: "AI-assisted development",
        lead: "Software engineering supported by AI agents, structured planning and phased execution.",
        layout: "tasks",
        items: [
          "Analysis of projects and existing code",
          "Roadmap planning",
          "Architecture design and review",
          "Phased development",
          "Feature implementation and review",
          "Testing and validation of deliverables",
        ],
        notes: [
          { label: "Tool", text: "Claude Code" },
          { label: "Judgment", text: "AI supports the process; the technical judgment, oversight and validation of every delivery are mine." },
        ],
      },
    ],
  },
  contact: {
    title: "Do you have an opening or a project?",
    text: "I'm looking for a team where I can build products end to end, and I also take projects as a contractor.",
    whatsapp: "Message on WhatsApp",
    items: contactItems({ email: "Email", cvEs: "Hoja de vida", cvEn: "Resume" }),
  },
  footer: "© 2026 Mateo Hernández · Cali, Colombia",
};

export const site: Record<Lang, Site> = { es, en };
