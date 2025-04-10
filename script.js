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

