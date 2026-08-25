/**
 * ==============================================================================
 * PORTFOLIO PROFESIONAL - MILAGROS ESCARLON
 * SCRIPT PRINCIPAL: INTERNACIONALIZACIÓN (ES/EN), TEMA CLARO/OSCURO Y NAVEGACIÓN
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------------------------------
    // 1. ESTADO GLOBAL DE IDIOMA (ESPAÑOL / ENGLISH)
    // --------------------------------------------------------------------------
    let currentLang = localStorage.getItem('portfolio_language') || 'es';

    function setLanguage(lang) {
        if (!portfolioData || !portfolioData[lang]) return;
        currentLang = lang;
        localStorage.setItem('portfolio_language', lang);
        document.documentElement.setAttribute('lang', lang);

        const data = portfolioData[lang];

        // 1.1 Actualizar botón de idioma
        const langText = document.getElementById('langText');
        const langToggle = document.getElementById('langToggle');
        if (langText) {
            // Muestra "EN" si estamos en español para invitar a cambiar a inglés, o "ES" si estamos en inglés
            langText.textContent = lang === 'es' ? 'EN' : 'ES';
        }
        if (langToggle) {
            langToggle.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
            langToggle.setAttribute('title', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
        }

        // 1.2 Actualizar Navbar
        updateNav(data.nav);

        // 1.3 Renderizar Secciones
        renderHero(data.personal);
        renderAbout(data.about);
        renderSkills(data.skillsSection, data.skills);
        renderProjects(data.projectsSection, data.projects);
        renderEducation(data.educationSection, data.education);
        renderContact(data.contact, data.personal);
        renderFooter(data.footer);
    }

    // --------------------------------------------------------------------------
    // 2. FUNCIONES DE RENDERIZADO BILINGÜE
    // --------------------------------------------------------------------------

    function updateNav(navData) {
        const linkHome = document.getElementById('navLinkHome');
        const linkAbout = document.getElementById('navLinkAbout');
        const linkSkills = document.getElementById('navLinkSkills');
        const linkProjects = document.getElementById('navLinkProjects');
        const linkEducation = document.getElementById('navLinkEducation');
        const linkContact = document.getElementById('navLinkContact');
        const navCvText = document.getElementById('navCvText');

        if (linkHome) linkHome.textContent = navData.home;
        if (linkAbout) linkAbout.textContent = navData.about;
        if (linkSkills) linkSkills.textContent = navData.skills;
        if (linkProjects) linkProjects.textContent = navData.projects;
        if (linkEducation) linkEducation.textContent = navData.education;
        if (linkContact) linkContact.textContent = navData.contact;
        if (navCvText) navCvText.textContent = navData.cvBtn;
    }

    function renderHero(personal) {
        const greeting = document.getElementById('heroGreeting');
        const badgeText = document.getElementById('heroBadgeText');
        const descContainer = document.getElementById('heroDescription');
        const rolesContainer = document.getElementById('heroRoles');
        const ctaCvText = document.getElementById('heroCtaCvText');
        const ctaContactText = document.getElementById('heroCtaContactText');
        const socialsLabel = document.getElementById('heroSocialsLabel');
        const avatarHint = document.getElementById('avatarHintText');
        const badgeQATitle = document.getElementById('badgeQATitle');
        const badgeQASub = document.getElementById('badgeQASub');
        const badgeDataTitle = document.getElementById('badgeDataTitle');
        const badgeDataSub = document.getElementById('badgeDataSub');

        if (greeting) greeting.textContent = currentLang === 'es' ? 'Hola, soy' : "Hello, I'm";
        if (badgeText) badgeText.textContent = personal.badge;
        if (descContainer) descContainer.textContent = personal.bioSummary;
        if (ctaCvText) ctaCvText.textContent = personal.ctaCv;
        if (ctaContactText) ctaContactText.textContent = personal.ctaContact;
        if (socialsLabel) socialsLabel.textContent = personal.socialsLabel;
        if (avatarHint) avatarHint.innerHTML = `<i class="fa-solid fa-camera"></i> ${personal.avatarHint}`;
        if (badgeQATitle) badgeQATitle.textContent = personal.badgeQA;
        if (badgeQASub) badgeQASub.textContent = personal.badgeQASub;
        if (badgeDataTitle) badgeDataTitle.textContent = personal.badgeData;
        if (badgeDataSub) badgeDataSub.textContent = personal.badgeDataSub;

        if (rolesContainer && personal.roles) {
            rolesContainer.innerHTML = personal.roles
                .map((role, idx) => `<span class="role-item">${role}</span>${idx < personal.roles.length - 1 ? '<span class="role-separator">•</span>' : ''}`)
                .join('');
        }
    }

    function renderAbout(about) {
        const header = document.getElementById('aboutHeader');
        const bioCard = document.getElementById('aboutBioCard');
        const infoGrid = document.getElementById('aboutInfoGrid');

        if (header) {
            header.innerHTML = `
                <span class="section-subtitle">${about.subtitle}</span>
                <h2 class="section-title">${about.title} <span class="text-accent">${about.titleAccent}</span></h2>
                <div class="section-line"></div>
            `;
        }

        if (bioCard) {
            bioCard.innerHTML = `
                <h3 class="about-heading">${about.heading}</h3>
                ${about.paragraphs.map(p => `<p class="about-paragraph">${p}</p>`).join('')}
                <div class="about-highlights">
                    ${about.highlights.map(h => `
                        <div class="highlight-item">
                            <i class="fa-solid fa-check-circle"></i>
                            <span>${h}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="about-actions">
                    <a href="#contact" class="btn btn-primary">
                        <span>${about.ctaBtn}</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            `;
        }

        if (infoGrid && about.cards) {
            infoGrid.innerHTML = about.cards.map(c => `
                <div class="info-card">
                    <div class="info-icon"><i class="${c.icon}"></i></div>
                    <div class="info-content">
                        <span class="info-label">${c.label}</span>
                        <h4 class="info-value ${c.label.includes('Email') || c.label.includes('Contacto') ? 'email-text' : ''}">${c.value}</h4>
                        <p class="info-desc">${c.desc}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    function renderSkills(skillsSection, skillsList) {
        const header = document.getElementById('skillsHeader');
        const container = document.getElementById('skillsContainer');

        if (header) {
            header.innerHTML = `
                <span class="section-subtitle">${skillsSection.subtitle}</span>
                <h2 class="section-title">${skillsSection.title} <span class="text-accent">${skillsSection.titleAccent}</span></h2>
                <div class="section-line"></div>
            `;
        }

        if (container && skillsList) {
            container.innerHTML = skillsList.map(category => `
                <div class="skill-category-card">
                    <div class="category-header">
                        <div class="category-icon ${category.badgeClass}">
                            <i class="${category.iconClass}"></i>
                        </div>
                        <div>
                            <h3 class="category-title">${category.category}</h3>
                            <span class="category-subtitle">${category.subtitle}</span>
                        </div>
                    </div>
                    <div class="skills-pill-group">
                        ${category.items.map(item => `
                            <div class="skill-pill">
                                <i class="${item.icon}"></i>
                                <span>${item.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }
    }

    function renderProjects(projectsSection, projectsList) {
        const header = document.getElementById('projectsHeader');
        const container = document.getElementById('projectsContainer');

        if (header) {
            header.innerHTML = `
                <span class="section-subtitle">${projectsSection.subtitle}</span>
                <h2 class="section-title">${projectsSection.title} <span class="text-accent">${projectsSection.titleAccent}</span></h2>
                <div class="section-line"></div>
                <p class="section-description">${projectsSection.description}</p>
            `;
        }

        if (container && projectsList) {
            container.innerHTML = projectsList.map(proj => `
                <article class="project-card" id="${proj.id}">
                    <div class="project-preview">
                        <div class="project-preview-mockup mockup-${proj.type}">
                            <div class="mockup-header">
                                <span class="dot red"></span>
                                <span class="dot yellow"></span>
                                <span class="dot green"></span>
                                <span class="mockup-title">${proj.mockupTitle}</span>
                            </div>
                            <div class="mockup-content-wrap">
                                ${proj.mockupContent}
                            </div>
                        </div>
                        <div class="project-overlay">
                            <a href="${proj.githubLink}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                                <i class="fa-brands fa-github"></i> ${proj.viewRepoText}
                            </a>
                        </div>
                    </div>
                    <div class="project-body">
                        <div class="project-meta">
                            <span class="project-number">${proj.number}</span>
                            <span class="project-category">${proj.category}</span>
                        </div>
                        <h3 class="project-title">${proj.title}</h3>
                        <p class="project-text">${proj.description}</p>
                        <div class="project-tags">
                            ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <a href="${proj.githubLink}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="${proj.codeText}">
                                <i class="fa-brands fa-github"></i> ${proj.codeText}
                            </a>
                            <a href="${proj.liveLink}" class="project-link" aria-label="${proj.liveText}">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> ${proj.liveText}
                            </a>
                        </div>
                    </div>
                </article>
            `).join('');
        }
    }

    function renderEducation(educationSection, educationList) {
        const header = document.getElementById('educationHeader');
        const container = document.getElementById('educationContainer');

        if (header) {
            header.innerHTML = `
                <span class="section-subtitle">${educationSection.subtitle}</span>
                <h2 class="section-title">${educationSection.title} <span class="text-accent">${educationSection.titleAccent}</span></h2>
                <div class="section-line"></div>
            `;
        }

        if (container && educationList) {
            container.innerHTML = educationList.map(item => `
                <div class="edu-card ${item.featured ? 'featured' : ''}">
                    ${item.badge ? `<div class="edu-badge">${item.badge}</div>` : ''}
                    <div class="edu-icon">
                        <i class="${item.icon}"></i>
                    </div>
                    <div class="edu-content">
                        <span class="edu-date">${item.date}</span>
                        <h3 class="edu-title">${item.title}</h3>
                        <h4 class="edu-institution">${item.institution}</h4>
                        <p class="edu-desc">${item.description}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    function renderContact(contact, personal) {
        const header = document.getElementById('contactHeader');
        const panel = document.getElementById('contactInfoPanel');
        const lblName = document.getElementById('lblFormName');
        const inputName = document.getElementById('contactName');
        const lblEmail = document.getElementById('lblFormEmail');
        const inputEmail = document.getElementById('contactEmail');
        const lblSubject = document.getElementById('lblFormSubject');
        const inputSubject = document.getElementById('contactSubject');
        const lblMessage = document.getElementById('lblFormMessage');
        const inputMessage = document.getElementById('contactMessage');
        const submitBtnText = document.getElementById('submitBtnText');

        if (header) {
            header.innerHTML = `
                <span class="section-subtitle">${contact.subtitle}</span>
                <h2 class="section-title">${contact.title} <span class="text-accent">${contact.titleAccent}</span></h2>
                <div class="section-line"></div>
                <p class="section-description">${contact.description}</p>
            `;
        }

        if (panel) {
            panel.innerHTML = `
                <div class="contact-panel-header">
                    <h3>${contact.infoHeading}</h3>
                    <p>${contact.infoSubheading}</p>
                </div>

                <div class="contact-channel-list">
                    <a href="mailto:${personal.email}" class="channel-card">
                        <div class="channel-icon"><i class="fa-solid fa-envelope"></i></div>
                        <div class="channel-content">
                            <span class="channel-label">${contact.emailLabel}</span>
                            <span class="channel-value">${personal.email}</span>
                        </div>
                    </a>

                    <a href="${personal.linkedin}" target="_blank" rel="noopener noreferrer" class="channel-card">
                        <div class="channel-icon"><i class="fa-brands fa-linkedin-in"></i></div>
                        <div class="channel-content">
                            <span class="channel-label">${contact.linkedinLabel}</span>
                            <span class="channel-value">linkedin.com/in/milagros-escarlon</span>
                        </div>
                    </a>

                    <a href="${personal.whatsapp}" target="_blank" rel="noopener noreferrer" class="channel-card">
                        <div class="channel-icon"><i class="fa-brands fa-whatsapp"></i></div>
                        <div class="channel-content">
                            <span class="channel-label">${contact.phoneLabel}</span>
                            <span class="channel-value">${personal.phone}</span>
                        </div>
                    </a>

                    <div class="channel-card no-hover">
                        <div class="channel-icon"><i class="fa-solid fa-location-dot"></i></div>
                        <div class="channel-content">
                            <span class="channel-label">${contact.locationLabel}</span>
                            <span class="channel-value">${contact.locationValue}</span>
                        </div>
                    </div>
                </div>

                <div class="contact-cv-box">
                    <div>
                        <h4>${contact.cvHeading}</h4>
                        <p>${contact.cvSub}</p>
                    </div>
                    <a href="${personal.cvPath}" download="${personal.cvFilename}" class="btn btn-sm btn-primary" target="_blank">
                        <i class="fa-solid fa-file-pdf"></i> ${contact.cvBtn}
                    </a>
                </div>
            `;
        }

        if (lblName) lblName.textContent = contact.formNameLabel;
        if (inputName) inputName.placeholder = contact.formNamePlaceholder;
        if (lblEmail) lblEmail.textContent = contact.formEmailLabel;
        if (inputEmail) inputEmail.placeholder = contact.formEmailPlaceholder;
        if (lblSubject) lblSubject.textContent = contact.formSubjectLabel;
        if (inputSubject) inputSubject.placeholder = contact.formSubjectPlaceholder;
        if (lblMessage) lblMessage.textContent = contact.formMessageLabel;
        if (inputMessage) inputMessage.placeholder = contact.formMessagePlaceholder;
        if (submitBtnText) submitBtnText.textContent = contact.formSubmitBtn;
    }

    function renderFooter(footerData) {
        const copySpan = document.getElementById('footerCopyText');
        if (copySpan) {
            copySpan.textContent = footerData.copy;
        }
    }

    // --------------------------------------------------------------------------
    // 3. EVENT LISTENER DEL SELECTOR DE IDIOMA (TOGGLE)
    // --------------------------------------------------------------------------
    const langToggleBtn = document.getElementById('langToggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(nextLang);
        });
    }

    // Inicializar idioma al cargar la página
    setLanguage(currentLang);

    // --------------------------------------------------------------------------
    // 4. TEMA CLARO / OSCURO (DARK & LIGHT MODE)
    // --------------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else if (systemPrefersDark) {
        htmlElement.setAttribute('data-theme', 'dark');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // --------------------------------------------------------------------------
    // 5. MENÚ MÓVIL RESPONSIVE
    // --------------------------------------------------------------------------
    const mobileToggleBtn = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggleBtn && navMenu) {
        mobileToggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            mobileToggleBtn.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                mobileToggleBtn.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileToggleBtn.contains(e.target)) {
                navMenu.classList.remove('open');
                mobileToggleBtn.classList.remove('active');
            }
        });
    }

    // --------------------------------------------------------------------------
    // 6. SCROLLSPY (RESALTADO DE NAVEGACIÓN ACTIVA)
    // --------------------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');

    function highlightActiveNavLink() {
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (correspondingLink) {
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    correspondingLink.classList.add('active');
                } else {
                    correspondingLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightActiveNavLink);

    // --------------------------------------------------------------------------
    // 7. BOTÓN VOLVER ARRIBA
    // --------------------------------------------------------------------------
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --------------------------------------------------------------------------
    // 8. AÑO ACTUAL EN FOOTER
    // --------------------------------------------------------------------------
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --------------------------------------------------------------------------
    // 9. FORMULARIO DE CONTACTO CON FEEDBACK BILINGÜE
    // --------------------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('contactName')?.value.trim();
            const email = document.getElementById('contactEmail')?.value.trim();
            const subject = document.getElementById('contactSubject')?.value.trim();
            const message = document.getElementById('contactMessage')?.value.trim();

            if (!name || !email || !message) return;

            const emailSubject = subject || (currentLang === 'es' ? 'Contacto desde Portfolio' : 'Contact from Portfolio');
            const emailBody = currentLang === 'es' 
                ? `Hola Milagros,\n\nMi nombre es ${name} (${email}).\n\nMensaje:\n${message}`
                : `Hello Milagros,\n\nMy name is ${name} (${email}).\n\nMessage:\n${message}`;

            const mailtoUrl = `mailto:milagrosescarln@yahoo.com.ar?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

            if (formFeedback) {
                const successTemplate = portfolioData[currentLang].contact.formSuccessMsg;
                formFeedback.className = 'form-feedback success';
                formFeedback.innerHTML = `
                    <i class="fa-solid fa-circle-check"></i> 
                    ${successTemplate.replace('{name}', name)}
                `;
            }

            setTimeout(() => {
                window.location.href = mailtoUrl;
                contactForm.reset();
            }, 800);
        });
    }

});
