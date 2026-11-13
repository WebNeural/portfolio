document.addEventListener("DOMContentLoaded", () => {
    const languageToggle = document.getElementById("languageToggle");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const certificateModal = document.getElementById("certificateModal");
    const certificateImage = document.getElementById("certificateImage");
    const modalClose = document.getElementById("modalClose");

    const translations = {
        en: {
            "nav-home": "Home",
            "nav-about": "About",
            "nav-skills": "Skills",
            "nav-certificates": "Certificates",
            "nav-projects": "Projects",
            "nav-contact": "Contact",

            "availability": "Available for freelance work",
            "hero-greeting": "Hello, I'm",
            "hero-name": "Amirhossein",
            "hero-surname": "Montazerbahasht.",
            "hero-role": "Full-Stack Web Developer",
            "hero-description": "I build modern, responsive and functional web applications. Turning ideas into digital experiences through clean code and creative solutions.",
            "hero-projects": "Explore Projects",
            "hero-contact": "Contact Me",

            "about-label": "INTRODUCTION",
            "about-title": "About Me",
            "about-heading": "A developer who loves building digital products.",
            "about-description": "I'm a Full-Stack Web Developer passionate about creating modern and practical web applications. I work with frontend and backend technologies to build complete digital experiences. I enjoy solving problems, learning new technologies and turning ideas into real products.",
            "about-name-label": "Name",
            "about-name": "Amirhossein Montazerbahasht",
            "about-role-label": "Role",
            "about-role": "Full-Stack Developer",
            "about-focus-label": "Main Focus",
            "about-focus": "Web Development",

            "skills-label": "MY EXPERTISE",
            "skills-title": "Technologies & Skills",
            "skills-description": "Technologies I use to build modern web applications.",
            "skill-backend": "Backend Development",
            "skill-database": "Database Management",
            "skill-frontend": "Frontend Development",
            "skill-react": "Frontend Library",
            "skill-design": "Web Design & Styling",
            "skill-version": "Version Control",
            "skill-python": "Programming",

            "certificates-label": "ACHIEVEMENTS",
            "certificates-title": "Certificates",
            "certificates-description": "Courses and certifications I've completed.",
            "certificate-backend": "Backend Development",
            "certificate-frontend": "Frontend Development",
            "certificate-view": "View Certificate",

            "projects-label": "MY WORK",
            "projects-title": "Featured Projects",
            "projects-description": "Some of the projects I've worked on.",
            "project-diba": "A full-stack e-commerce application with user authentication, admin dashboard, product management and shopping cart.",
            "project-two-title": "Project Two",
            "project-two-description": "A modern web application built with React and JavaScript.",
            "project-three-title": "Namava(sampel)",
            "project-three-description": "A responsive sample website inspired by Namava, focusing on modern design, API integration, and dynamic data display through interactive cards.",
            "project-four-title": "Project Four",
            "project-four-description": "A software project developed to solve practical problems.",
            "project-demo": "Live Demo",
            "project-source": "Source Code",

            "contact-label": "GET IN TOUCH",
            "contact-title": "Let's Work Together",
            "contact-description": "Have a project in mind or want to work together? Feel free to get in touch.",
            "contact-email": "Email",
            "contact-phone": "Phone",
            "contact-github": "View my repositories",
            "contact-linkedin": "Connect with me",

            "footer-text": "Amirhossein Montazerbahasht. All rights reserved."
        },

        fa: {
            "nav-home": "خانه",
            "nav-about": "درباره من",
            "nav-skills": "مهارت‌ها",
            "nav-certificates": "مدارک",
            "nav-projects": "پروژه‌ها",
            "nav-contact": "ارتباط با من",

            "availability": "آماده همکاری در پروژه‌های فریلنسری",
            "hero-greeting": "سلام، من",
            "hero-name": "امیرحسین",
            "hero-surname": "منتظربهشت هستم.",
            "hero-role": "توسعه‌دهنده فول‌استک وب",
            "hero-description": "من وب‌اپلیکیشن‌های مدرن، واکنش‌گرا و کاربردی طراحی و توسعه می‌دهم. ایده‌ها را با کدنویسی تمیز و راهکارهای خلاقانه به تجربه‌های دیجیتال تبدیل می‌کنم.",
            "hero-projects": "مشاهده پروژه‌ها",
            "hero-contact": "ارتباط با من",

            "about-label": "معرفی",
            "about-title": "درباره من",
            "about-heading": "برنامه‌نویسی که عاشق ساخت محصولات دیجیتال است.",
            "about-description": "من توسعه‌دهنده فول‌استک وب هستم و به ساخت وب‌اپلیکیشن‌های مدرن و کاربردی علاقه دارم. با فناوری‌های فرانت‌اند و بک‌اند کار می‌کنم تا تجربه‌های دیجیتال کاملی بسازم. از حل مسئله، یادگیری فناوری‌های جدید و تبدیل ایده‌ها به محصولات واقعی لذت می‌برم.",
            "about-name-label": "نام",
            "about-name": "امیرحسین منتظربهشت",
            "about-role-label": "عنوان شغلی",
            "about-role": "توسعه‌دهنده فول‌استک",
            "about-focus-label": "حوزه اصلی",
            "about-focus": "توسعه وب",

            "skills-label": "تخصص‌های من",
            "skills-title": "فناوری‌ها و مهارت‌ها",
            "skills-description": "فناوری‌هایی که برای توسعه وب‌اپلیکیشن‌های مدرن استفاده می‌کنم.",
            "skill-backend": "توسعه بک‌اند",
            "skill-database": "مدیریت پایگاه داده",
            "skill-frontend": "توسعه فرانت‌اند",
            "skill-react": "کتابخانه فرانت‌اند",
            "skill-design": "طراحی و استایل‌دهی وب",
            "skill-version": "کنترل نسخه",
            "skill-python": "برنامه‌نویسی",

            "certificates-label": "دستاوردها",
            "certificates-title": "مدارک و گواهینامه‌ها",
            "certificates-description": "دوره‌ها و گواهینامه‌هایی که دریافت کرده‌ام.",
            "certificate-backend": "توسعه بک‌اند",
            "certificate-frontend": "توسعه فرانت‌اند",
            "certificate-view": "مشاهده مدرک",

            "projects-label": "نمونه کارها",
            "projects-title": "پروژه‌های منتخب",
            "projects-description": "برخی از پروژه‌هایی که روی آن‌ها کار کرده‌ام.",
            "project-diba": "یک فروشگاه اینترنتی فول‌استک با سیستم احراز هویت کاربران، پنل مدیریت، مدیریت محصولات و سبد خرید.",
            "project-two-title": "پروژه دوم",
            "project-two-description": "یک وب‌اپلیکیشن مدرن توسعه‌یافته با React و JavaScript.",
            "project-three-title": "Namava(sampel)",
            "project-three-description":" یک وب‌سایت واکنش‌گرا با الهام از نماوا، با تمرکز بر دریافت اطلاعات از رابط برنامه‌نویسی و نمایش پویای داده‌ها در قالب کارت‌های تعاملی و طراحی مدرن.",
            "project-four-title": "پروژه چهارم",
            "project-four-description": "",
            "project-demo": "مشاهده آنلاین",
            "project-source": "مشاهده کد",

            "contact-label": "راه‌های ارتباطی",
            "contact-title": "بیایید همکاری کنیم",
            "contact-description": "پروژه‌ای در ذهن دارید یا مایل به همکاری هستید؟ خوشحال می‌شوم با من در ارتباط باشید.",
            "contact-email": "ایمیل",
            "contact-phone": "شماره تماس",
            "contact-github": "مشاهده مخازن کد",
            "contact-linkedin": "ارتباط با من",

            "footer-text": "امیرحسین منتظربهشت. تمامی حقوق محفوظ است."
        }
    };

    const certificatePaths = {
        backend: {
            en: "assets/certificates/certificate-en.jpg",
            fa: "assets/certificates/certificate.jpg"
        },
        frontend: {
            en: "assets/certificates/certificate-en (1).jpg",
            fa: "assets/certificates/certificate (1).jpg"
        }
    };

    let currentLanguage = "en";

    function updateCertificateImages() {
        document.querySelectorAll("[data-certificate-image]").forEach(image => {
            const certificate = image.dataset.certificateImage;
            const paths = certificatePaths[certificate];

            if (paths) {
                image.src = paths[currentLanguage];

                image.alt = currentLanguage === "fa"
                    ? (certificate === "backend" ? "مدرک توسعه بک‌اند" : "مدرک توسعه فرانت‌اند")
                    : (certificate === "backend" ? "Backend PHP and MySQL Certificate" : "Frontend Development Certificate");
            }
        });
    }

    function setLanguage(language) {
        const selectedLanguage = translations[language] ? language : "en";

        currentLanguage = selectedLanguage;

        document.documentElement.lang = selectedLanguage;
        document.documentElement.dir = selectedLanguage === "fa" ? "rtl" : "ltr";
        document.body.dir = selectedLanguage === "fa" ? "rtl" : "ltr";

        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.dataset.i18n;
            const translatedText = translations[selectedLanguage][key];

            if (translatedText !== undefined) {
                element.textContent = translatedText;
            }
        });

        languageToggle.textContent = selectedLanguage === "en" ? "FA" : "EN";

        document.title = selectedLanguage === "fa"
            ? "امیرحسین منتظربهشت | توسعه‌دهنده فول‌استک"
            : "Amirhossein Montazerbahasht | Full-Stack Developer";

        localStorage.setItem("portfolio-language", selectedLanguage);

        updateCertificateImages();

        if (window.lucide) {
            lucide.createIcons();
        }
    }

    languageToggle.addEventListener("click", () => {
        const currentLanguage = document.documentElement.lang;
        setLanguage(currentLanguage === "en" ? "fa" : "en");
    });

    const savedLanguage = localStorage.getItem("portfolio-language") || "en";
    setLanguage(savedLanguage);

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        const menuIcon = menuToggle.querySelector("i");

        if (menuIcon) {
            menuIcon.setAttribute(
                "data-lucide",
                navLinks.classList.contains("open") ? "x" : "menu"
            );

            if (window.lucide) {
                lucide.createIcons();
            }
        }
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");

            const menuIcon = menuToggle.querySelector("i");

            if (menuIcon) {
                menuIcon.setAttribute("data-lucide", "menu");

                if (window.lucide) {
                    lucide.createIcons();
                }
            }
        });
    });

    const sections = document.querySelectorAll("main section[id]");
    const navigationItems = document.querySelectorAll(".nav-links a");

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navigationItems.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${entry.target.id}`
                    );
                });
            }
        });
    }, {
        threshold: 0.35
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    document.querySelectorAll("[data-certificate]").forEach(button => {
        button.addEventListener("click", () => {
            const certificate = button.dataset.certificate;
            const imagePath = certificatePaths[certificate]?.[currentLanguage];

            if (!imagePath) return;

            certificateImage.src = imagePath;
            certificateModal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    function closeModal() {
        certificateModal.classList.remove("active");
        document.body.style.overflow = "";
    }

    modalClose.addEventListener("click", closeModal);

    certificateModal.querySelector(".modal-overlay").addEventListener("click", closeModal);

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    document.getElementById("currentYear").textContent = new Date().getFullYear();

    if (window.lucide) {
        lucide.createIcons();
    }
});