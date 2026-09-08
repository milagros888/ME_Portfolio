/**
 * ==============================================================================
 * DATOS BILINGÜES DEL PORTFOLIO (ESPAÑOL & ENGLISH) - MILAGROS ESCARLON
 * ==============================================================================
 * Centralización de datos para soporte multi-idioma (i18n).
 * Para modificar o agregar información, solo edita los bloques 'es' o 'en'.
 */

const portfolioData = {

    // ==========================================================================
    // 🇪🇸 ESPAÑOL (DEFAULT)
    // ==========================================================================
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre Mí",
            skills: "Habilidades",
            projects: "Proyectos",
            education: "Educación",
            contact: "Contacto",
            cvBtn: "CV"
        },
        personal: {
            name: "Milagros Escarlon",
            initials: "ME",
            badge: "Disponible para nuevos desafíos IT",
            title: "Técnica en Informática | QA Analyst & Automation | Data Analyst | Fullstack Dev",
            roles: [
                "QA Analyst & Automation",
                "Data Analyst",
                "Fullstack Dev"
            ],
            location: "Lanús Oeste, Buenos Aires, Argentina",
            email: "milagrosescarln@yahoo.com.ar",
            phone: "+54 11 7828-6537",
            phoneAlt: "+54 11 6351-8530",
            whatsapp: "https://wa.me/5491178286537",
            linkedin: "https://www.linkedin.com/in/milagros-escarlon",
            github: "https://github.com/milagros888",
            cvPath: "assets/docs/CV - Milagros Escarlon - J2026.pdf",
            cvFilename: "CV - Milagros Escarlon.pdf",
            languages: "Español (Nativo) | Inglés (C1 Avanzado) | Portugués e Italiano (Básico)",
            bioSummary: "Técnica en Informática con formación práctica en testing de software, visualización y análisis de datos, soporte técnico y desarrollo web. Orientada a la resolución de problemas, el aprendizaje continuo y la entrega de soluciones de alto impacto.",
            ctaCv: "Descargar CV",
            ctaContact: "Contáctame",
            socialsLabel: "Conéctate conmigo:",
            badgeQA: "QA Automation",
            badgeQASub: "Cypress & Postman",
            badgeData: "Data Analytics",
            badgeDataSub: "Power BI & SQL",
            avatarHint: "Foto de Perfil",
            avatarImage: "assets/images/profile/profilepic1.jpeg"
        },
        about: {
            subtitle: "CONÓCEME MEJOR",
            title: "Sobre",
            titleAccent: "Mí",
            heading: "Pasión por la <span class=\"text-accent\">Calidad de Software</span>, los <span class=\"text-accent\">Datos</span> y la <span class=\"text-accent\">Tecnología</span>",
            paragraphs: [
                "Soy <strong>Técnica en Informática</strong> graduada con formación integral en control de calidad (QA Manual y Automatizado con Cypress), análisis y visualización de datos (Power BI, DAX, SQL, Python) y desarrollo web fullstack.",
                "Me especializo en diagnóstico técnico, diseño de casos de prueba exhaustivos, dashboards analíticos y desarrollo de interfaces modernas. Cuento con capacidad de aprendizaje autodidacta ágil y busco sumar valor a un equipo tecnológico aplicando metodologías ágiles (Scrum, Kanban)."
            ],
            highlights: [
                "Mentalidad analítica y orientada al detalle.",
                "Capacidad de trabajo colaborativo y comunicación efectiva.",
                "Bilingüe con nivel de inglés C1 Avanzado."
            ],
            ctaBtn: "Trabajemos Juntos",
            cards: [
                {
                    label: "Formación Base",
                    value: "Técnica en Informática",
                    desc: "E.E.S.T. N°8 Almafuerte (Graduada)",
                    icon: "fa-solid fa-graduation-cap"
                },
                {
                    label: "Idiomas",
                    value: "Español & Inglés C1",
                    desc: "Nativo / Avanzado (Italiano & Port. básico)",
                    icon: "fa-solid fa-language"
                },
                {
                    label: "Ubicación",
                    value: "Lanús Oeste",
                    desc: "Buenos Aires, Argentina (Disp. Remoto)",
                    icon: "fa-solid fa-location-dot"
                },
                {
                    label: "Contacto Directo",
                    value: "milagrosescarln@yahoo.com.ar",
                    desc: "Respuesta rápida y disponibilidad",
                    icon: "fa-solid fa-envelope-open-text"
                }
            ]
        },
        skillsSection: {
            subtitle: "STACK TÉCNICO & HERRAMIENTAS",
            title: "Habilidades &",
            titleAccent: "Competencias"
        },
        skills: [
            {
                category: "QA & Testing",
                subtitle: "Manual & Automation",
                iconClass: "fa-solid fa-vial-circle-check",
                badgeClass: "icon-qa",
                items: [
                    { name: "Cypress (JS)", icon: "fa-solid fa-robot" },
                    { name: "Postman", icon: "fa-solid fa-paper-plane" },
                    { name: "Jira", icon: "fa-brands fa-jira" },
                    { name: "Test Cases & Bug Reports", icon: "fa-solid fa-list-check" },
                    { name: "Trello", icon: "fa-brands fa-trello" },
                    { name: "Azure DevOps", icon: "fa-brands fa-microsoft" },
                    { name: "Git & GitHub", icon: "fa-brands fa-git-alt" }
                ]
            },
            {
                category: "Data Analysis",
                subtitle: "B.I. & Bases de Datos",
                iconClass: "fa-solid fa-chart-pie",
                badgeClass: "icon-data",
                items: [
                    { name: "Power BI (DAX)", icon: "fa-solid fa-chart-simple" },
                    { name: "MySQL", icon: "fa-solid fa-database" },
                    { name: "SQL Server", icon: "fa-solid fa-server" },
                    { name: "Python", icon: "fa-brands fa-python" },
                    { name: "Looker Studio", icon: "fa-solid fa-chart-column" },
                    { name: "Excel Avanzado", icon: "fa-solid fa-file-excel" }
                ]
            },
            {
                category: "Desarrollo Web",
                subtitle: "Frontend & Fullstack",
                iconClass: "fa-solid fa-code",
                badgeClass: "icon-dev",
                items: [
                    { name: "JavaScript (ES6+)", icon: "fa-brands fa-js" },
                    { name: "React.js", icon: "fa-brands fa-react" },
                    { name: "HTML5 Semántico", icon: "fa-brands fa-html5" },
                    { name: "CSS3 & Responsive", icon: "fa-brands fa-css3-alt" },
                    { name: "Node.js", icon: "fa-brands fa-node" },
                    { name: "MongoDB", icon: "fa-solid fa-leaf" }
                ]
            },
            {
                category: "Soporte & Métodos",
                subtitle: "Gestión y Operaciones",
                iconClass: "fa-solid fa-gears",
                badgeClass: "icon-methods",
                items: [
                    { name: "Scrum / Agile", icon: "fa-solid fa-users-gear" },
                    { name: "Kanban", icon: "fa-solid fa-table-columns" },
                    { name: "Soporte Técnico N1", icon: "fa-solid fa-headset" },
                    { name: "Diagnóstico Hardware & Redes", icon: "fa-solid fa-screwdriver-wrench" },
                    { name: "Inmersión en IA", icon: "fa-solid fa-brain" }
                ]
            }
        ],
        projectsSection: {
            subtitle: "TRABAJOS Y DESARROLLOS",
            title: "Proyectos",
            titleAccent: "Destacados",
            description: "Selección de aplicaciones fullstack MERN, plataformas web interactivas y suites de automatización de pruebas QA con Cypress."
        },
        projects: [
            {
                id: "proj-1",
                number: "01",
                type: "fullstack",
                category: "Fullstack MERN & React",
                title: "TicketApp — Venta de Entradas & Admin Hub",
                description: "Plataforma fullstack de venta de entradas y gestión de estadios para el Mundial 2026. Desarrollada en equipo (Mediapila) con React + Vite en el frontend, selección visual de butacas por sectores, checkout guiado y panel administrativo con métricas en tiempo real (Chart.js). Backend REST en Node.js/Express alojado en Render con base de datos MongoDB y despliegue en Vercel.",
                tags: ["React.js", "Node.js", "Express", "MongoDB", "Render", "Vercel", "Chart.js", "Fullstack"],
                image: "assets/images/proyectos/ticketapp.png",
                githubLink: "https://github.com/milagros888/Mediapila_TicketApp",
                liveLink: "https://mediapila-ticket-app.vercel.app/",
                codeText: "Código",
                liveText: "Demo en Vivo",
                viewRepoText: "Ver Repositorio",
                mockupTitle: "ticketapp / src/App.jsx",
                mockupContent: `
                    <div class="mockup-web-interface">
                        <div class="ui-sidebar"></div>
                        <div class="ui-content">
                            <div class="ui-card-sm"></div>
                            <div class="ui-card-lg"></div>
                        </div>
                    </div>
                `
            },
            {
                id: "proj-2",
                number: "02",
                type: "web",
                category: "Web App & Productividad",
                title: "Tu Espacio — App Web Anotador",
                description: "Aplicación web de notas y productividad con editor de texto enriquecido (Quill.js). Incorpora gestión de temas claro/oscuro, persistencia local de notas, selección dinámica de avatares, modo invitado y diseño modular optimizado con Bootstrap 5.",
                tags: ["JavaScript ES6+", "Bootstrap 5", "Quill.js", "LocalStorage", "Vercel", "UI/UX"],
                image: "assets/images/proyectos/tuespacio.png",
                githubLink: "https://github.com/milagros888/Mediapila_App.Web_Anotador",
                liveLink: "https://mediapila-app-web-anotador.vercel.app/",
                codeText: "Código",
                liveText: "Demo en Vivo",
                viewRepoText: "Ver Repositorio",
                mockupTitle: "tuespacio-app / editor.js",
                mockupContent: `
                    <div class="mockup-notes-visual">
                        <div class="notes-toolbar">
                            <span class="note-tool-pill">B</span>
                            <span class="note-tool-pill"><i>I</i></span>
                            <span class="note-tool-pill"><u>U</u></span>
                            <span class="note-theme-badge"><i class="fa-solid fa-moon"></i></span>
                        </div>
                        <div class="notes-body-preview">
                            <div class="note-item-preview">
                                <span class="note-title-line">📝 Mi lista de tareas & notas</span>
                                <span class="note-desc-line">Editor enriquecido Quill.js y persistencia...</span>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: "proj-3",
                number: "03",
                type: "qa",
                category: "QA Automation & E2E Testing",
                title: "Suite E2E Shady Meadows — QA Challenge",
                description: "Suite de pruebas automatizadas End-to-End con Cypress y JavaScript sobre el sistema de reservas Shady Meadows B&B (XAcademy). Diseñada bajo principios de Test Isolation, incluye validación de calendarios dinámicos, formularios de contacto, códigos de estado HTTP, matrices de casos de prueba y reporte de bugs en Trello.",
                tags: ["Cypress", "JavaScript", "E2E Testing", "Test Isolation", "Trello", "QA Automation"],
                image: "assets/images/proyectos/automation.jpg",
                githubLink: "https://github.com/milagros888/QA_XAcademy_Challenge",
                liveLink: "https://automationintesting.online/",
                codeText: "Código",
                liveText: "App Testeada",
                viewRepoText: "Ver Repositorio",
                mockupTitle: "cypress/e2e/booking_flow.cy.js",
                mockupContent: `
                    <code><span class="c-keyword">describe</span>(<span class="c-str">'Shady Meadows - Booking E2E'</span>, () => {</code>
                    <code>  <span class="c-keyword">it</span>(<span class="c-str">'should book room with dynamic dates'</span>, () => {</code>
                    <code>    cy.<span class="c-fn">visit</span>(<span class="c-str">'/automationintesting'</span>);</code>
                    <code>    cy.<span class="c-fn">get</span>(<span class="c-str">'.btn-book-room'</span>).<span class="c-fn">click</span>();</code>
                    <code>    cy.<span class="c-fn">contains</span>(<span class="c-str">'Booking confirmed'</span>).<span class="c-fn">should</span>(<span class="c-str">'be.visible'</span>);</code>
                    <code>  });</code>
                    <code>});</code>
                `
            },
            {
                id: "proj-4",
                number: "04",
                type: "ecommerce",
                category: "E-Commerce & Colaboración ITBA",
                title: "Hermanos Jota — Catálogo de Diseño",
                description: "Sitio web comercial y catálogo interactivo de mobiliario de autor desarrollado en equipo colaborativo (ITBA). Incluye maquetación responsive estructurada con Bootstrap 5, catálogo detallado de productos, formulario de contacto y despliegue continuo en Vercel.",
                tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Vercel", "Colaborativo"],
                image: "assets/images/proyectos/hermanosjota.png",
                githubLink: "https://github.com/valenap-utn/hermanos-jota-itba-2026",
                liveLink: "https://hermanos-jota-itba-web.vercel.app/",
                codeText: "Código",
                liveText: "Demo en Vivo",
                viewRepoText: "Ver Repositorio",
                mockupTitle: "hermanos-jota / catalogo.html",
                mockupContent: `
                    <div class="mockup-ecommerce-visual">
                        <div class="ecom-banner">
                            <span class="ecom-badge">Hermanos Jota</span>
                            <span class="ecom-hero-text">Redescubrir el arte de vivir</span>
                        </div>
                        <div class="ecom-cards">
                            <div class="ecom-card">
                                <div class="ecom-thumb"><i class="fa-solid fa-couch"></i></div>
                                <span class="ecom-label">Mobiliario</span>
                            </div>
                            <div class="ecom-card">
                                <div class="ecom-thumb"><i class="fa-solid fa-chair"></i></div>
                                <span class="ecom-label">Colección</span>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: "proj-5",
                number: "05",
                type: "qa",
                category: "QA Automation & Framework",
                title: "Cypress Testing Framework & Prácticas",
                description: "Repositorio modular de arquitectura y desarrollo de pruebas automatizadas con Cypress y JavaScript en XAcademy. Implementa Custom Commands reutilizables, pruebas basadas en datos (Data-Driven Testing con Fixtures), aserciones avanzadas y control de versiones con Git.",
                tags: ["Cypress", "JavaScript", "Custom Commands", "Fixtures", "Data-Driven", "QA Framework"],
                image: "assets/images/proyectos/automation.jpg",
                githubLink: "https://github.com/milagros888/QA_XAcademy_2026",
                liveLink: "https://github.com/milagros888/QA_XAcademy_2026#readme",
                codeText: "Código",
                liveText: "Documentación",
                viewRepoText: "Ver Repositorio",
                mockupTitle: "cypress/e2e/custom_commands.cy.js",
                mockupContent: `
                    <code><span class="c-keyword">describe</span>(<span class="c-str">'Data-Driven & Custom Commands'</span>, () => {</code>
                    <code>  <span class="c-keyword">it</span>(<span class="c-str">'should validate flow with fixtures'</span>, () => {</code>
                    <code>    cy.<span class="c-fn">fixture</span>(<span class="c-str">'userData'</span>).<span class="c-fn">then</span>((data) => {</code>
                    <code>      cy.<span class="c-fn">loginUser</span>(data.validUser);</code>
                    <code>      cy.<span class="c-fn">get</span>(<span class="c-str">'#dashboard'</span>).<span class="c-fn">should</span>(<span class="c-str">'exist'</span>);</code>
                    <code>    });</code>
                    <code>  });</code>
                    <code>});</code>
                `
            },
            {
                id: "proj-6",
                number: "06",
                type: "frontend",
                category: "Frontend & Responsive Web",
                title: "Pastelería Suspiro — Web Comercial",
                description: "Sitio web comercial y vidriera digital para pastelería artesanal creado en el marco del programa Mediapila. Cuenta con carrusel dinámico de productos destacados, diseño mobile-first con Bootstrap 5, tipografía personalizada y despliegue en Netlify.",
                tags: ["HTML5 Semántico", "CSS3", "JavaScript", "Bootstrap 5", "Netlify", "Responsive"],
                image: "assets/images/proyectos/suspiro.png",
                githubLink: "https://github.com/milagros888/Mediapila_Web.cliente",
                liveLink: "https://panaderia-suspiro.netlify.app/",
                codeText: "Código",
                liveText: "Ver Sitio",
                viewRepoText: "Ver Repositorio",
                mockupTitle: "panaderia-suspiro / index.html",
                mockupContent: `
                    <div class="mockup-bakery-visual">
                        <div class="bakery-header-bar">
                            <span class="bakery-brand"><i class="fa-solid fa-cake-candles"></i> Pastelería Suspiro</span>
                        </div>
                        <div class="bakery-carousel-preview">
                            <div class="cake-pill"><i class="fa-solid fa-cookie-bite"></i> Tortas Artesanales</div>
                            <div class="cake-pill"><i class="fa-solid fa-heart"></i> Especialidades</div>
                        </div>
                    </div>
                `
            }
        ],
        educationSection: {
            subtitle: "TRAYECTORIA Y CAPACITACIÓN",
            title: "Educación &",
            titleAccent: "Certificaciones"
        },
        education: [
            {
                title: "Técnica en Informática",
                institution: "E.E.S.T. N°8 “ALMAFUERTE”",
                date: "Marzo 2013 - Diciembre 2024",
                badge: "Graduada",
                featured: true,
                icon: "fa-solid fa-school",
                description: "Formación técnico-profesional integral en desarrollo de software, arquitectura de computadoras, redes, soporte técnico y bases de datos."
            },
            {
                title: "QA Manual",
                institution: "UTN y Fundación Empujar",
                date: "Agosto 2025 - Diciembre 2025",
                icon: "fa-solid fa-certificate",
                description: "Ciclo de vida del software (SDLC/STLC), diseño de matrices de prueba, metodologías ágiles, gestión de bugs en Jira y Trello."
            },
            {
                title: "Data Analyst",
                institution: "EducacionIT y Digitalers",
                date: "Mayo 2025 - Septiembre 2025",
                icon: "fa-solid fa-chart-pie",
                description: "Análisis exploratorio de datos, Power BI con DAX, Looker Studio, consultas relacionales en MySQL y SQL Server."
            },
            {
                title: "Automation con Cypress",
                institution: "XAcademy",
                date: "Julio, 2026",
                icon: "fa-solid fa-robot",
                description: "Automatización de pruebas funcionales y de regresión con JavaScript, aserciones y reportes automatizados."
            },
            {
                title: "Desarrollo Web",
                institution: "MPF Fundación Mediapila",
                date: "Julio, 2026",
                icon: "fa-solid fa-laptop-code",
                description: "Maquetación semántica, diseño adaptable multidispositivo (responsive) y buenas prácticas de desarrollo web."
            },
            {
                title: "Programación Python & Inmersión IA",
                institution: "Daxus Latam",
                date: "Febrero - Marzo 2026",
                icon: "fa-solid fa-microchip",
                description: "Fundamentos de Python, algoritmos e integración de herramientas prácticas de Inteligencia Artificial."
            }
        ],
        contact: {
            subtitle: "CONECTEMOS",
            title: "Ponte en",
            titleAccent: "Contacto",
            description: "¿Tienes una oportunidad laboral, proyecto o consulta? ¡Escríbeme y charlemos!",
            infoHeading: "Información de Contacto",
            infoSubheading: "Siempre dispuesta a conversar sobre proyectos de QA, Datos o Desarrollo.",
            emailLabel: "Email Principal",
            linkedinLabel: "LinkedIn",
            phoneLabel: "Teléfono / WhatsApp",
            locationLabel: "Ubicación",
            locationValue: "Lanús Oeste, Buenos Aires, Argentina",
            cvHeading: "Descargar Currículum Vitae",
            cvSub: "Formato PDF actualizado",
            cvBtn: "Descargar",
            formNameLabel: "Nombre y Apellido",
            formNamePlaceholder: "Tu nombre...",
            formEmailLabel: "Correo Electrónico",
            formEmailPlaceholder: "tu-correo@ejemplo.com",
            formSubjectLabel: "Asunto",
            formSubjectPlaceholder: "Propuesta laboral / Consulta...",
            formMessageLabel: "Mensaje",
            formMessagePlaceholder: "Cuéntame sobre la propuesta o proyecto...",
            formSubmitBtn: "Enviar Mensaje",
            formSuccessMsg: "¡Muchas gracias <strong>{name}</strong>! Abriendo tu gestor de correo para enviar el mensaje..."
        },
        footer: {
            copy: "Milagros Escarlon. Construido con arquitectura limpia (HTML5, CSS3, JS)."
        }
    },

    // ==========================================================================
    // 🇬🇧 ENGLISH (INTERNATIONAL)
    // ==========================================================================
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            education: "Education",
            contact: "Contact",
            cvBtn: "CV"
        },
        personal: {
            name: "Milagros Escarlon",
            initials: "ME",
            badge: "Available for new IT challenges",
            title: "Computer Systems Technician | QA Analyst & Automation | Data Analyst | Fullstack Dev",
            roles: [
                "QA Analyst & Automation",
                "Data Analyst",
                "Fullstack Dev"
            ],
            location: "Lanús Oeste, Buenos Aires, Argentina",
            email: "milagrosescarln@yahoo.com.ar",
            phone: "+54 11 7828-6537",
            phoneAlt: "+54 11 6351-8530",
            whatsapp: "https://wa.me/5491178286537",
            linkedin: "https://www.linkedin.com/in/milagros-escarlon",
            github: "https://github.com/milagros888",
            cvPath: "assets/docs/CV - Milagros Escarlon - J2026.pdf",
            cvFilename: "CV - Milagros Escarlon.pdf",
            languages: "Spanish (Native) | English (C1 Advanced) | Portuguese & Italian (Basic)",
            bioSummary: "Computer Systems Technician with practical experience in software testing, data analysis & visualization, IT support, and web development. Problem-solving oriented, self-taught learner committed to delivering high-impact technological solutions.",
            ctaCv: "Download CV",
            ctaContact: "Get in Touch",
            socialsLabel: "Connect with me:",
            badgeQA: "QA Automation",
            badgeQASub: "Cypress & Postman",
            badgeData: "Data Analytics",
            badgeDataSub: "Power BI & SQL",
            avatarHint: "Profile Picture",
            avatarImage: "assets/images/profile/profilepic1.jpeg"
        },
        about: {
            subtitle: "GET TO KNOW ME",
            title: "About",
            titleAccent: "Me",
            heading: "Passionate about <span class=\"text-accent\">Software Quality</span>, <span class=\"text-accent\">Data</span> and <span class=\"text-accent\">Technology</span>",
            paragraphs: [
                "I am a graduated <strong>Computer Systems Technician</strong> with comprehensive training in quality assurance (Manual & Automated QA with Cypress), data analytics & visualization (Power BI, DAX, SQL, Python), and fullstack web development.",
                "I specialize in technical diagnostics, designing detailed test suites, creating business intelligence dashboards, and building modern web interfaces. Quick self-learner eager to bring value to tech teams applying agile methodologies (Scrum, Kanban)."
            ],
            highlights: [
                "Analytical mindset with strong attention to detail.",
                "Proven teamwork and proactive communication skills.",
                "Bilingual with C1 Advanced English level."
            ],
            ctaBtn: "Let's Work Together",
            cards: [
                {
                    label: "Core Background",
                    value: "Computer Technician",
                    desc: "E.E.S.T. N°8 Almafuerte (Graduated)",
                    icon: "fa-solid fa-graduation-cap"
                },
                {
                    label: "Languages",
                    value: "Spanish & English C1",
                    desc: "Native / Advanced (Basic Italian & Port.)",
                    icon: "fa-solid fa-language"
                },
                {
                    label: "Location",
                    value: "Lanús Oeste",
                    desc: "Buenos Aires, Argentina (Remote ready)",
                    icon: "fa-solid fa-location-dot"
                },
                {
                    label: "Direct Contact",
                    value: "milagrosescarln@yahoo.com.ar",
                    desc: "Prompt response and availability",
                    icon: "fa-solid fa-envelope-open-text"
                }
            ]
        },
        skillsSection: {
            subtitle: "TECH STACK & TOOLS",
            title: "Skills &",
            titleAccent: "Abilities"
        },
        skills: [
            {
                category: "QA & Testing",
                subtitle: "Manual & Automation",
                iconClass: "fa-solid fa-vial-circle-check",
                badgeClass: "icon-qa",
                items: [
                    { name: "Cypress (JS)", icon: "fa-solid fa-robot" },
                    { name: "Postman", icon: "fa-solid fa-paper-plane" },
                    { name: "Jira", icon: "fa-brands fa-jira" },
                    { name: "Test Cases & Bug Reports", icon: "fa-solid fa-list-check" },
                    { name: "Trello", icon: "fa-brands fa-trello" },
                    { name: "Azure DevOps", icon: "fa-brands fa-microsoft" },
                    { name: "Git & GitHub", icon: "fa-brands fa-git-alt" }
                ]
            },
            {
                category: "Data Analysis",
                subtitle: "B.I. & Databases",
                iconClass: "fa-solid fa-chart-pie",
                badgeClass: "icon-data",
                items: [
                    { name: "Power BI (DAX)", icon: "fa-solid fa-chart-simple" },
                    { name: "MySQL", icon: "fa-solid fa-database" },
                    { name: "SQL Server", icon: "fa-solid fa-server" },
                    { name: "Python", icon: "fa-brands fa-python" },
                    { name: "Looker Studio", icon: "fa-solid fa-chart-column" },
                    { name: "Advanced Excel", icon: "fa-solid fa-file-excel" }
                ]
            },
            {
                category: "Web Development",
                subtitle: "Frontend & Fullstack",
                iconClass: "fa-solid fa-code",
                badgeClass: "icon-dev",
                items: [
                    { name: "JavaScript (ES6+)", icon: "fa-brands fa-js" },
                    { name: "React.js", icon: "fa-brands fa-react" },
                    { name: "Semantic HTML5", icon: "fa-brands fa-html5" },
                    { name: "CSS3 & Responsive", icon: "fa-brands fa-css3-alt" },
                    { name: "Node.js", icon: "fa-brands fa-node" },
                    { name: "MongoDB", icon: "fa-solid fa-leaf" }
                ]
            },
            {
                category: "Support & Methods",
                subtitle: "Management & Operations",
                iconClass: "fa-solid fa-gears",
                badgeClass: "icon-methods",
                items: [
                    { name: "Scrum / Agile", icon: "fa-solid fa-users-gear" },
                    { name: "Kanban", icon: "fa-solid fa-table-columns" },
                    { name: "L1 Technical Support", icon: "fa-solid fa-headset" },
                    { name: "Hardware & Network Troubleshooting", icon: "fa-solid fa-screwdriver-wrench" },
                    { name: "AI Immersion in Practice", icon: "fa-solid fa-brain" }
                ]
            }
        ],
        projectsSection: {
            subtitle: "RECENT WORK & DEVELOPMENTS",
            title: "Featured",
            titleAccent: "Projects",
            description: "Curated selection of fullstack MERN applications, interactive web platforms, and automated QA testing suites built with Cypress."
        },
        projects: [
            {
                id: "proj-1",
                number: "01",
                type: "fullstack",
                category: "Fullstack MERN & React",
                title: "TicketApp — Ticketing Platform & Admin Hub",
                description: "Fullstack ticketing and stadium management platform for World Cup 2026 matches. Features a reactive React + Vite frontend with interactive seat selection map, checkout stepper, and admin dashboard with real-time KPI analytics (Chart.js). Backend REST API in Node.js/Express hosted on Render, MongoDB database, and frontend deployed on Vercel.",
                tags: ["React.js", "Node.js", "Express", "MongoDB", "Render", "Vercel", "Chart.js", "Fullstack"],
                image: "assets/images/proyectos/ticketapp.png",
                githubLink: "https://github.com/milagros888/Mediapila_TicketApp",
                liveLink: "https://mediapila-ticket-app.vercel.app/",
                codeText: "Code",
                liveText: "Live Demo",
                viewRepoText: "View Repository",
                mockupTitle: "ticketapp / src/App.jsx",
                mockupContent: `
                    <div class="mockup-web-interface">
                        <div class="ui-sidebar"></div>
                        <div class="ui-content">
                            <div class="ui-card-sm"></div>
                            <div class="ui-card-lg"></div>
                        </div>
                    </div>
                `
            },
            {
                id: "proj-2",
                number: "02",
                type: "web",
                category: "Web App & Productivity",
                title: "Tu Espacio — Web Notes App",
                description: "Interactive note-taking and productivity web application featuring a rich-text editor (Quill.js). Includes light/dark theme switching, local storage persistence, customizable user avatars, guest mode, and a responsive Bootstrap 5 interface.",
                tags: ["JavaScript ES6+", "Bootstrap 5", "Quill.js", "LocalStorage", "Vercel", "UI/UX"],
                image: "assets/images/proyectos/tuespacio.png",
                githubLink: "https://github.com/milagros888/Mediapila_App.Web_Anotador",
                liveLink: "https://mediapila-app-web-anotador.vercel.app/",
                codeText: "Code",
                liveText: "Live Demo",
                viewRepoText: "View Repository",
                mockupTitle: "tuespacio-app / editor.js",
                mockupContent: `
                    <div class="mockup-notes-visual">
                        <div class="notes-toolbar">
                            <span class="note-tool-pill">B</span>
                            <span class="note-tool-pill"><i>I</i></span>
                            <span class="note-tool-pill"><u>U</u></span>
                            <span class="note-theme-badge"><i class="fa-solid fa-moon"></i></span>
                        </div>
                        <div class="notes-body-preview">
                            <div class="note-item-preview">
                                <span class="note-title-line">📝 Notes & Tasks List</span>
                                <span class="note-desc-line">Quill.js rich text editor with local persistence...</span>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: "proj-3",
                number: "03",
                type: "qa",
                category: "QA Automation & E2E Testing",
                title: "Shady Meadows E2E Suite — QA Challenge",
                description: "End-to-End automated testing suite implemented with Cypress and JavaScript for the Shady Meadows B&B booking system (XAcademy). Built on Test Isolation principles, covering dynamic date pickers, contact forms, HTTP status validation, test cases matrix, and bug tracking on Trello.",
                tags: ["Cypress", "JavaScript", "E2E Testing", "Test Isolation", "Trello", "QA Automation"],
                image: "assets/images/proyectos/automation.jpg",
                githubLink: "https://github.com/milagros888/QA_XAcademy_Challenge",
                liveLink: "https://automationintesting.online/",
                codeText: "Code",
                liveText: "Tested App",
                viewRepoText: "View Repository",
                mockupTitle: "cypress/e2e/booking_flow.cy.js",
                mockupContent: `
                    <code><span class="c-keyword">describe</span>(<span class="c-str">'Shady Meadows - Booking E2E'</span>, () => {</code>
                    <code>  <span class="c-keyword">it</span>(<span class="c-str">'should book room with dynamic dates'</span>, () => {</code>
                    <code>    cy.<span class="c-fn">visit</span>(<span class="c-str">'/automationintesting'</span>);</code>
                    <code>    cy.<span class="c-fn">get</span>(<span class="c-str">'.btn-book-room'</span>).<span class="c-fn">click</span>();</code>
                    <code>    cy.<span class="c-fn">contains</span>(<span class="c-str">'Booking confirmed'</span>).<span class="c-fn">should</span>(<span class="c-str">'be.visible'</span>);</code>
                    <code>  });</code>
                    <code>});</code>
                `
            },
            {
                id: "proj-4",
                number: "04",
                type: "ecommerce",
                category: "E-Commerce & ITBA Collaboration",
                title: "Hermanos Jota — Design Catalog",
                description: "Commercial website and interactive design catalog for author furniture developed collaboratively in a team project (ITBA). Features modular layouts built with Bootstrap 5, product showcase, contact form, and continuous deployment on Vercel.",
                tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Vercel", "Collaborative"],
                image: "assets/images/proyectos/hermanosjota.png",
                githubLink: "https://github.com/valenap-utn/hermanos-jota-itba-2026",
                liveLink: "https://hermanos-jota-itba-web.vercel.app/",
                codeText: "Code",
                liveText: "Live Demo",
                viewRepoText: "View Repository",
                mockupTitle: "hermanos-jota / catalogo.html",
                mockupContent: `
                    <div class="mockup-ecommerce-visual">
                        <div class="ecom-banner">
                            <span class="ecom-badge">Hermanos Jota</span>
                            <span class="ecom-hero-text">Redescubrir el arte de vivir</span>
                        </div>
                        <div class="ecom-cards">
                            <div class="ecom-card">
                                <div class="ecom-thumb"><i class="fa-solid fa-couch"></i></div>
                                <span class="ecom-label">Furniture</span>
                            </div>
                            <div class="ecom-card">
                                <div class="ecom-thumb"><i class="fa-solid fa-chair"></i></div>
                                <span class="ecom-label">Collection</span>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: "proj-5",
                number: "05",
                type: "qa",
                category: "QA Automation & Framework",
                title: "Cypress Testing Framework & Learning Path",
                description: "Automated testing development repository and framework built with Cypress and JavaScript at XAcademy. Implements reusable Custom Commands, Data-Driven Testing with Fixtures, advanced assertions, and Git version control workflows.",
                tags: ["Cypress", "JavaScript", "Custom Commands", "Fixtures", "Data-Driven", "QA Framework"],
                image: "assets/images/proyectos/automation.jpg",
                githubLink: "https://github.com/milagros888/QA_XAcademy_2026",
                liveLink: "https://github.com/milagros888/QA_XAcademy_2026#readme",
                codeText: "Code",
                liveText: "Documentation",
                viewRepoText: "View Repository",
                mockupTitle: "cypress/e2e/custom_commands.cy.js",
                mockupContent: `
                    <code><span class="c-keyword">describe</span>(<span class="c-str">'Data-Driven & Custom Commands'</span>, () => {</code>
                    <code>  <span class="c-keyword">it</span>(<span class="c-str">'should validate flow with fixtures'</span>, () => {</code>
                    <code>    cy.<span class="c-fn">fixture</span>(<span class="c-str">'userData'</span>).<span class="c-fn">then</span>((data) => {</code>
                    <code>      cy.<span class="c-fn">loginUser</span>(data.validUser);</code>
                    <code>      cy.<span class="c-fn">get</span>(<span class="c-str">'#dashboard'</span>).<span class="c-fn">should</span>(<span class="c-str">'exist'</span>);</code>
                    <code>    });</code>
                    <code>  });</code>
                    <code>});</code>
                `
            },
            {
                id: "proj-6",
                number: "06",
                type: "frontend",
                category: "Frontend & Responsive Web",
                title: "Pastelería Suspiro — Commercial Website",
                description: "Commercial showcase website for an artisanal bakery created within the Mediapila initiative. Features a dynamic carousel for featured pastries, mobile-first responsive layout with Bootstrap 5, custom typography, and deployment on Netlify.",
                tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Netlify", "Mobile First"],
                image: "assets/images/proyectos/suspiro.png",
                githubLink: "https://github.com/milagros888/Mediapila_Web.cliente",
                liveLink: "https://panaderia-suspiro.netlify.app/",
                codeText: "Code",
                liveText: "View Site",
                viewRepoText: "View Repository",
                mockupTitle: "panaderia-suspiro / index.html",
                mockupContent: `
                    <div class="mockup-bakery-visual">
                        <div class="bakery-header-bar">
                            <span class="bakery-brand"><i class="fa-solid fa-cake-candles"></i> Pastelería Suspiro</span>
                        </div>
                        <div class="bakery-carousel-preview">
                            <div class="cake-pill"><i class="fa-solid fa-cookie-bite"></i> Artisanal Cakes</div>
                            <div class="cake-pill"><i class="fa-solid fa-heart"></i> Specialties</div>
                        </div>
                    </div>
                `
            }
        ],
        educationSection: {
            subtitle: "BACKGROUND & CERTIFICATIONS",
            title: "Education &",
            titleAccent: "Certifications"
        },
        education: [
            {
                title: "Computer Systems Technician",
                institution: "E.E.S.T. N°8 “ALMAFUERTE”",
                date: "March 2013 - December 2024",
                badge: "Graduated",
                featured: true,
                icon: "fa-solid fa-school",
                description: "Comprehensive technical-professional training in software development, computer architecture, networking, IT support, and databases."
            },
            {
                title: "Manual QA Tester",
                institution: "UTN & Fundación Empujar",
                date: "August 2025 - December 2025",
                icon: "fa-solid fa-certificate",
                description: "Software testing lifecycle (SDLC/STLC), test matrix & case design, agile methodologies, bug tracking and reporting in Jira & Trello."
            },
            {
                title: "Data Analyst",
                institution: "EducacionIT & Digitalers",
                date: "May 2025 - September 2025",
                icon: "fa-solid fa-chart-pie",
                description: "Exploratory data analysis, Power BI with DAX, Looker Studio, relational database queries in MySQL and SQL Server."
            },
            {
                title: "Automation with Cypress",
                institution: "XAcademy",
                date: "July, 2026",
                icon: "fa-solid fa-robot",
                description: "Functional and regression test automation using JavaScript, custom assertions, and automated test execution reports."
            },
            {
                title: "Web Development",
                institution: "MPF Fundación Mediapila",
                date: "July, 2026",
                icon: "fa-solid fa-laptop-code",
                description: "Semantic web markup, multi-device responsive design, and modern frontend web development best practices."
            },
            {
                title: "Python Programming & Practical AI",
                institution: "Daxus Latam",
                date: "February - March 2026",
                icon: "fa-solid fa-microchip",
                description: "Python fundamentals, algorithmic logic, and practical integration of Artificial Intelligence tools."
            }
        ],
        contact: {
            subtitle: "LET'S CONNECT",
            title: "Get in",
            titleAccent: "Touch",
            description: "Have an open position, project, or question? Feel free to reach out and let's talk!",
            infoHeading: "Contact Information",
            infoSubheading: "Always open to discussing QA, Data Analytics, or Web Development opportunities.",
            emailLabel: "Primary Email",
            linkedinLabel: "LinkedIn",
            phoneLabel: "Phone / WhatsApp",
            locationLabel: "Location",
            locationValue: "Lanús Oeste, Buenos Aires, Argentina",
            cvHeading: "Download Resume / CV",
            cvSub: "Updated PDF Format",
            cvBtn: "Download",
            formNameLabel: "Full Name",
            formNamePlaceholder: "Your name...",
            formEmailLabel: "Email Address",
            formEmailPlaceholder: "your-email@example.com",
            formSubjectLabel: "Subject",
            formSubjectPlaceholder: "Job Opportunity / Inquiry...",
            formMessageLabel: "Message",
            formMessagePlaceholder: "Tell me about your project or opportunity...",
            formSubmitBtn: "Send Message",
            formSuccessMsg: "Thank you so much <strong>{name}</strong>! Opening your email client to send the message..."
        },
        footer: {
            copy: "Milagros Escarlon. Built with clean architecture (HTML5, CSS3, JS)."
        }
    }

};
