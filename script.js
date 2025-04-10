// Simple animation on page load
window.addEventListener('load', () => {
    document.querySelector('.hero-text').classList.add('animate');
    document.querySelector('.hero-visual').classList.add('animate');
});


// Reveal cards on scroll
const cards = document.querySelectorAll('.feature-card');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// Reveal steps on scroll
const steps = document.querySelectorAll('.step-box');

const revealSteps = () => {
    const triggerBottom = window.innerHeight * 0.85;

    steps.forEach(step => {
        const top = step.getBoundingClientRect().top;
        if (top < triggerBottom) {
            step.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealSteps);
window.addEventListener('load', revealSteps);


const flashcard = document.getElementById("flashcard");
const categorySelector = document.getElementById("category");

const demoData = {
    tech: {
        front: "What is JavaScript?",
        back: "A programming language used for web development.",
    },
    history: {
        front: "Who was Napoleon?",
        back: "A French military leader who became emperor.",
    },
    science: {
        front: "What is H2O?",
        back: "The chemical formula for water.",
    },
};

function flipCard() {
    flashcard.classList.toggle("flip");
}

categorySelector.addEventListener("change", (e) => {
    const selected = e.target.value;
    flashcard.classList.remove("flip"); // reset
    flashcard.querySelector(".front").innerText = demoData[selected].front;
    flashcard.querySelector(".back").innerText = demoData[selected].back;
});


// Reveal testimonial cards on scroll
const testimonialCards = document.querySelectorAll('.testimonial-card');

function revealTestimonials() {
    const triggerBottom = window.innerHeight * 0.85;

    testimonialCards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < triggerBottom) {
            card.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealTestimonials);
window.addEventListener('load', revealTestimonials);


const chooseCards = document.querySelectorAll('.choose-card');

function showChooseCards() {
    const triggerBottom = window.innerHeight * 0.9;

    chooseCards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < triggerBottom) {
            card.classList.add('active');
        }
    });
}

window.addEventListener('scroll', showChooseCards);
window.addEventListener('load', showChooseCards);


// Toggle Monthly / Yearly Pricing
const toggle = document.getElementById('billingToggle');
const prices = document.querySelectorAll('.price');

toggle.addEventListener('change', () => {
    prices.forEach(price => {
        price.textContent = toggle.checked
            ? price.getAttribute('data-yearly')
            : price.getAttribute('data-monthly');
    });
});


// Typewriter Text
const typedText = document.getElementById("typed-text");
const introLines = [
    "Hi, I'm Omkar Kadam 👋",
    "Web Developer & UI Enthusiast 🚀",
    "Building Study Tools That Work 📚"
];

let lineIndex = 0;
let charIndex = 0;
let currentLine = "";
let isDeleting = false;

function type() {
    currentLine = introLines[lineIndex];

    if (isDeleting) {
        typedText.textContent = currentLine.substring(0, charIndex--);
    } else {
        typedText.textContent = currentLine.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentLine.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        lineIndex = (lineIndex + 1) % introLines.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

document.addEventListener("DOMContentLoaded", type);


// Smooth scroll to a section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
}

// Scroll to Top Button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Dummy subscribe handler
function subscribe() {
    const email = document.querySelector('.footer-newsletter input').value;
    if (email) {
        alert(`🎉 Thanks for subscribing, ${email}!`);
        document.querySelector('.footer-newsletter input').value = "";
    } else {
        alert("Please enter your email address.");
    }
}
