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
            avatarHint: "Foto de Perfil"
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
            subtitle: "TRABAJOS Y PRÁCTICAS",
            title: "Proyectos",
            titleAccent: "Destacados",
            description: "Selección de proyectos y pruebas de concepto en automatización de pruebas, análisis de datos y desarrollo web."
        },
        projects: [
            {
                id: "proj-1",
                number: "01",
                type: "qa",
                category: "QA Automation & Testing",
                title: "Suite de Automatización E2E",
                description: "Suite de pruebas automatizadas End-to-End implementada con Cypress y JavaScript. Incluye validación de flujos críticos de usuario, aserciones personalizadas, reportes de ejecución y testing de APIs.",
                tags: ["Cypress", "JavaScript", "Postman", "E2E Testing", "CI/CD"],
                githubLink: "https://github.com/milagros888",
                liveLink: "#contact",
                codeText: "Código",
                liveText: "Info / Demo",
                viewRepoText: "Ver Repositorio",
                mockupTitle: "cypress/e2e/test_suite.cy.js",
                mockupContent: `
                    <code><span class="c-keyword">describe</span>(<span class="c-str">'E2E Test Flow'</span>, () => {</code>
                    <code>  <span class="c-keyword">it</span>(<span class="c-str">'should pass assertion'</span>, () => {</code>
                    <code>    cy.<span class="c-fn">visit</span>(<span class="c-str">'/app'</span>);</code>
                    <code>    cy.<span class="c-fn">get</span>(<span class="c-str">'[data-testid=submit]'</span>).<span class="c-fn">click</span>();</code>
                    <code>    cy.<span class="c-fn">contains</span>(<span class="c-str">'Success'</span>).<span class="c-fn">should</span>(<span class="c-str">'be.visible'</span>);</code>
                    <code>  });</code>
                    <code>});</code>
                `
            },
            {
                id: "proj-2",
                number: "02",
                type: "data",
                category: "Data Analytics & BI",
                title: "Dashboard de Métricas & KPIs",
                description: "Tablero analítico e interactivo desarrollado en Power BI con modelado relacional en SQL y fórmulas DAX avanzadas para visualización de KPIs comerciales y toma de decisiones estratégicas.",
                tags: ["Power BI", "DAX", "SQL Server", "MySQL", "Excel"],
                githubLink: "https://github.com/milagros888",
                liveLink: "#contact",
                codeText: "Código",
                liveText: "Ver Dashboard",
                viewRepoText: "Ver Repositorio",
                mockupTitle: "PowerBI / Dashboard_Analytics.pbix",
                mockupContent: `
                    <div class="mockup-chart-visual">
                        <div class="chart-bars">
                            <div class="bar" style="height: 45%;"></div>
                            <div class="bar" style="height: 75%;"></div>
                            <div class="bar" style="height: 60%;"></div>
                            <div class="bar" style="height: 90%;"></div>
                            <div class="bar" style="height: 70%;"></div>
                        </div>
                        <div class="chart-legend">
                            <span><i class="fa-solid fa-circle" style="color: #2563eb;"></i> Métricas KPI</span>
                            <span><i class="fa-solid fa-circle" style="color: #60a5fa;"></i> Tendencia</span>
                        </div>
                    </div>
                `
            },
            {
                id: "proj-3",
                number: "03",
                type: "web",
                category: "Fullstack Development",
                title: "Plataforma Web Interactiva",
                description: "Aplicación web completa construida con React en el frontend y Node.js con MongoDB en el backend. Integra arquitectura REST, autenticación segura y diseño adaptable a cualquier dispositivo.",
                tags: ["React.js", "Node.js", "JavaScript", "MongoDB", "CSS3"],
                githubLink: "https://github.com/milagros888",
                liveLink: "#contact",
                codeText: "Código",
                liveText: "Demo en Vivo",
                viewRepoText: "Ver Repositorio",
                mockupTitle: "React App - Fullstack Platform",
                mockupContent: `
                    <div class="mockup-web-interface">
                        <div class="ui-sidebar"></div>
                        <div class="ui-content">
                            <div class="ui-card-sm"></div>
                            <div class="ui-card-sm"></div>
                            <div class="ui-card-lg"></div>
                        </div>
                    </div>
                `
            },
            {
                id: "proj-4",
                number: "04",
                type: "frontend",
                category: "Frontend & UI Design",
                title: "Landing Page Moderna IT",
                description: "Sitio web landing de alto rendimiento optimizado para SEO y velocidad de carga. Desarrollado con HTML5 semántico, CSS3 moderno con variables dinámicas, animaciones y micro-interacciones.",
                tags: ["HTML5", "CSS3", "JavaScript", "UI/UX", "Responsive"],
                githubLink: "https://github.com/milagros888",
                liveLink: "#contact",
                codeText: "Código",
                liveText: "Ver Sitio",
                viewRepoText: "Ver Repositorio",
                mockupTitle: "Landing Page - UI/UX Design",
                mockupContent: `
                    <div class="mockup-landing-visual">
                        <div class="landing-hero-bar"></div>
                        <div class="landing-grid-cards">
                            <div class="grid-box"></div>
                            <div class="grid-box"></div>
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
            avatarHint: "Profile Picture"
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
            subtitle: "RECENT WORK & PRACTICE",
            title: "Featured",
            titleAccent: "Projects",
            description: "Curated selection of projects and proof-of-concepts in test automation, business intelligence dashboards, and fullstack web applications."
        },
        projects: [
            {
                id: "proj-1",
                number: "01",
                type: "qa",
                category: "QA Automation & Testing",
                title: "E2E Automation Test Suite",
                description: "End-to-End automated testing suite implemented with Cypress and JavaScript. Includes critical user flow validation, custom assertions, test execution reporting, and API testing integration.",
                tags: ["Cypress", "JavaScript", "Postman", "E2E Testing", "CI/CD"],
                githubLink: "https://github.com/milagros888",
                liveLink: "#contact",
                codeText: "Code",
                liveText: "Info / Demo",
                viewRepoText: "View Repository",
                mockupTitle: "cypress/e2e/test_suite.cy.js",
                mockupContent: `
                    <code><span class="c-keyword">describe</span>(<span class="c-str">'E2E Test Flow'</span>, () => {</code>
                    <code>  <span class="c-keyword">it</span>(<span class="c-str">'should pass assertion'</span>, () => {</code>
                    <code>    cy.<span class="c-fn">visit</span>(<span class="c-str">'/app'</span>);</code>
                    <code>    cy.<span class="c-fn">get</span>(<span class="c-str">'[data-testid=submit]'</span>).<span class="c-fn">click</span>();</code>
                    <code>    cy.<span class="c-fn">contains</span>(<span class="c-str">'Success'</span>).<span class="c-fn">should</span>(<span class="c-str">'be.visible'</span>);</code>
                    <code>  });</code>
                    <code>});</code>
                `
            },
            {
                id: "proj-2",
                number: "02",
                type: "data",
                category: "Data Analytics & BI",
                title: "Business KPI Analytics Dashboard",
                description: "Interactive analytics dashboard built in Power BI with relational SQL data modeling (MySQL / SQL Server) and advanced DAX formulas for strategic KPI visualization and business decision making.",
                tags: ["Power BI", "DAX", "SQL Server", "MySQL", "Excel"],
                githubLink: "https://github.com/milagros888",
                liveLink: "#contact",
                codeText: "Code",
                liveText: "View Dashboard",
                viewRepoText: "View Repository",
                mockupTitle: "PowerBI / Dashboard_Analytics.pbix",
                mockupContent: `
                    <div class="mockup-chart-visual">
                        <div class="chart-bars">
                            <div class="bar" style="height: 45%;"></div>
                            <div class="bar" style="height: 75%;"></div>
                            <div class="bar" style="height: 60%;"></div>
                            <div class="bar" style="height: 90%;"></div>
                            <div class="bar" style="height: 70%;"></div>
                        </div>
                        <div class="chart-legend">
                            <span><i class="fa-solid fa-circle" style="color: #2563eb;"></i> KPI Metrics</span>
                            <span><i class="fa-solid fa-circle" style="color: #60a5fa;"></i> Trend</span>
                        </div>
                    </div>
                `
            },
            {
                id: "proj-3",
                number: "03",
                type: "web",
                category: "Fullstack Development",
                title: "Interactive Web Platform",
                description: "Fullstack web application built with React on the frontend and Node.js with MongoDB on the backend. Features REST API architecture, secure authentication, and fully responsive UI.",
                tags: ["React.js", "Node.js", "JavaScript", "MongoDB", "CSS3"],
                githubLink: "https://github.com/milagros888",
                liveLink: "#contact",
                codeText: "Code",
                liveText: "Live Demo",
                viewRepoText: "View Repository",
                mockupTitle: "React App - Fullstack Platform",
                mockupContent: `
                    <div class="mockup-web-interface">
                        <div class="ui-sidebar"></div>
                        <div class="ui-content">
                            <div class="ui-card-sm"></div>
                            <div class="ui-card-sm"></div>
                            <div class="ui-card-lg"></div>
                        </div>
                    </div>
                `
            },
            {
                id: "proj-4",
                number: "04",
                type: "frontend",
                category: "Frontend & UI Design",
                title: "Modern Tech Landing Page",
                description: "High-performance landing page optimized for SEO and fast loading speed. Crafted with semantic HTML5, modern CSS3 variables, micro-interactions, and mobile-first responsive layout.",
                tags: ["HTML5", "CSS3", "JavaScript", "UI/UX", "Responsive"],
                githubLink: "https://github.com/milagros888",
                liveLink: "#contact",
                codeText: "Code",
                liveText: "View Site",
                viewRepoText: "View Repository",
                mockupTitle: "Landing Page - UI/UX Design",
                mockupContent: `
                    <div class="mockup-landing-visual">
                        <div class="landing-hero-bar"></div>
                        <div class="landing-grid-cards">
                            <div class="grid-box"></div>
                            <div class="grid-box"></div>
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
