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

