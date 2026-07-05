/* ==========================================
   HERO FADE IN
========================================== */

window.addEventListener("load", () => {
    const hero = document.querySelector(".hero-content");
    if (hero) {
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }
});

/* ==========================================
   NAVBAR SHADOW ON SCROLL
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
    } else {
        header.style.boxShadow = "none";
    }
});

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
    ".section, .card, .timeline-card"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.12 }
);

revealElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});

/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 160;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        const href = link.getAttribute("href");
        if (!href) return;

        if (href === `#${current}`) {
            link.classList.add("active");
        }
    });
});

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topButton = document.createElement("button");
topButton.innerHTML = "↑";
topButton.className = "top-btn";
topButton.setAttribute("aria-label", "Back to top");
document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topButton.classList.add("show-top");
    } else {
        topButton.classList.remove("show-top");
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* ==========================================
   MOBILE MENU TOGGLE
========================================== */

const menuButton = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");
const dropdownItems = document.querySelectorAll(".dropdown");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("mobile-open");
        menuButton.classList.toggle("open");

        const expanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!expanded));
    });
}

/* ==========================================
   MOBILE DROPDOWN TOGGLE
========================================== */

dropdownItems.forEach((item) => {
    const trigger = item.querySelector(":scope > a");

    if (!trigger) return;

    trigger.addEventListener("click", (e) => {
        if (window.innerWidth <= 920) {
            e.preventDefault();
            item.classList.toggle("open");
        }
    });
});

/* ==========================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================== */

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        const isDropdownTrigger =
            link.parentElement.classList.contains("dropdown");

        if (window.innerWidth <= 920 && navMenu && menuButton) {
            if (!isDropdownTrigger) {
                navMenu.classList.remove("mobile-open");
                menuButton.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
            }
        }
    });
});

/* ==========================================
   REGISTER BUTTON HOVER POLISH
========================================== */

const registerBtn = document.querySelector(".register-btn");

if (registerBtn) {
    registerBtn.addEventListener("mouseenter", () => {
        registerBtn.style.transform = "translateY(-4px) scale(1.02)";
    });

    registerBtn.addEventListener("mouseleave", () => {
        registerBtn.style.transform = "translateY(0) scale(1)";
    });
}

/* ==========================================
   SMOOTH SCROLL FOR INTERNAL LINKS
========================================== */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (!target) return;

        if (
            window.innerWidth <= 920 &&
            this.parentElement.classList.contains("dropdown")
        ) {
            return;
        }

        e.preventDefault();

        const headerOffset = 95;
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

/* ==========================================
   CLOSE MOBILE MENU ON WINDOW RESIZE
========================================== */

window.addEventListener("resize", () => {
    if (window.innerWidth > 920 && navMenu && menuButton) {
        navMenu.classList.remove("mobile-open");
        menuButton.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");

        dropdownItems.forEach((item) => item.classList.remove("open"));
    }
});