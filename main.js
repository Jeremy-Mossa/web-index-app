const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

themeSwitch.addEventListener('change', function() {
    body.classList.toggle('dark-mode');
});
