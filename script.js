// ==============================
// OFFICIAL BOYFRIEND WEBSITE
// script.js
// ==============================

// Popup Elements
const hireBtn = document.getElementById("hireBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");

// ==============================
// Hire Me Button
// ==============================

hireBtn.addEventListener("click", () => {

    // Show popup
    popup.classList.add("show");

    // Change button
    hireBtn.innerHTML = "❤️ HIRED ❤️";
    hireBtn.disabled = true;
    hireBtn.style.cursor = "default";

    // Confetti
    if (typeof confetti === "function") {

        confetti({
            particleCount: 180,
            spread: 120,
            origin: {
                y: 0.6
            }
        });

    }

});

// ==============================
// Close Popup
// ==============================

closeBtn.addEventListener("click", () => {

    popup.classList.remove("show");

});

// Click outside popup
window.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.classList.remove("show");

    }

});

// ==============================
// Floating Hearts
// ==============================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 350);

// ==============================
// Scroll Reveal
// ==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section, .card, .box").forEach(el => {

    el.classList.add("fade");

    observer.observe(el);

});

// ==============================
// Navbar Shadow
// ==============================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

    } else {

        nav.style.boxShadow = "0 5px 25px rgba(0,0,0,.05)";

    }

});

// ==============================
// Smooth Button Hover
// ==============================

hireBtn.addEventListener("mouseenter", () => {

    hireBtn.style.transform = "scale(1.08)";

});

hireBtn.addEventListener("mouseleave", () => {

    hireBtn.style.transform = "scale(1)";

});

// ==============================
// Typewriter Effect
// ==============================

const heroTitle = document.querySelector(".hero h1");

const originalText = heroTitle.innerText;

heroTitle.innerHTML = "";

let i = 0;

function typeWriter() {

    if (i < originalText.length) {

        heroTitle.innerHTML += originalText.charAt(i);

        i++;

        setTimeout(typeWriter, 60);

    }

}

window.addEventListener("load", () => {

    typeWriter();

});

// ==============================
// Random Romantic Messages
// ==============================

const messages = [

    "You're the best part of my day ❤️",

    "I hope this website made you smile 😊",

    "You're my favorite notification ❤️",

    "I'd choose you every single day.",

    "Thank you for existing 💕"

];

setInterval(() => {

    const random = messages[Math.floor(Math.random() * messages.length)];

    document.title = random;

}, 4000);

// ==============================
// Welcome Console Message
// ==============================

console.log("%c❤️ Welcome ❤️", "font-size:24px;color:#ff4d6d;font-weight:bold;");

console.log("%cIf you're reading this... I hope you smile today. 😊", "font-size:14px;color:#777;");

// ==============================
// Double Click Hearts
// ==============================

document.addEventListener("dblclick", (e) => {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "30px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "all 1s ease";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform = "translateY(-120px) scale(2)";
        heart.style.opacity = "0";

    }, 50);

    setTimeout(() => {

        heart.remove();

    }, 1000);

});

// ==============================
// Footer Year
// ==============================

const footer = document.querySelector("footer");

footer.innerHTML =
`Made with ❤️ by Miko • ${new Date().getFullYear()}`;

// ==============================
// End
// ==============================