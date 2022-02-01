const darkMode = document.querySelector('.dark-mode');
const darkBtn = document.querySelector('.changer');
const navbar = document.querySelector('.navbar');
const sidebar = document.querySelector('.sidebar');

darkMode.addEventListener('click', e => {
    darkBtn.classList.toggle('fa-moon');
    darkBtn.classList.toggle('fa-sun');
    darkBtn.classList.toggle('dark');
    darkBtn.classList.toggle('light');
    navbar.classList.toggle('dark-nav');
    sidebar.classList.toggle('dark-sidebar');
});