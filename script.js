/* ==========================================
   HERO FADE IN
========================================== */

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";

});


/* ==========================================
   NAVBAR SHADOW ON SCROLL
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 30){

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

    else{

        header.style.boxShadow = "none";

    }

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".section, .card, .timeline-card").forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

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

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topButton.classList.add("show-top");

    }

    else{

        topButton.classList.remove("show-top");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuButton = document.querySelector(".menu-btn");

if(menuButton){

    menuButton.addEventListener("click",()=>{

        document.querySelector(".nav-links").classList.toggle("mobile-open");

    });

}


/* ==========================================
   REGISTER BUTTON RIPPLE EFFECT
========================================== */

const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("mouseenter",()=>{

    registerBtn.style.transform = "translateY(-4px) scale(1.03)";

});

registerBtn.addEventListener("mouseleave",()=>{

    registerBtn.style.transform = "translateY(0px) scale(1)";

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});