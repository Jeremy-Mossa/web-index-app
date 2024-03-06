const hamburgerButton = document.querySelector('.hamburger-button');
const navLinks = document.querySelector('.nav-links');

hamburgerButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburgerButton.classList.toggle('active'); // Optional: Add class for visual feedback on button
});
