const toggleModeBtn = document.querySelector('.toggle-mode');
const hamburgerBtn = document.querySelector('.hamburger');
const dropdown = document.querySelector('.dropdown');

// Event listener for toggle mode button
toggleModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Event listener for hamburger button
hamburgerBtn.addEventListener('click', () => {
  // Toggle dropdown visibility
  dropdown.classList.toggle('active');
});

// Close dropdown when clicking outside of it
document.addEventListener('click', (event) => {
  if (!event.target.matches('.hamburger') && !event.target.closest('.dropdown')) {
    dropdown.classList.remove('active');
  }
});
