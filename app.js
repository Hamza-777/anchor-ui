const darkMode = document.querySelector('.dark-mode');
const darkBtn = document.querySelector('.changer');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');
const main = document.querySelector('.main-content');
const footer = document.querySelector('.footer');
const body = document.querySelector('body');
const codebox = document.querySelector('.code-box');

darkMode.addEventListener('click', e => {
    darkBtn.classList.toggle('fa-moon');
    darkBtn.classList.toggle('fa-sun');
    darkBtn.classList.toggle('dark');
    darkBtn.classList.toggle('light');
    codebox.classList.toggle('dark-codebox');
    navbar.classList.toggle('dark-nav');
    header.classList.toggle('dark-head');
    main.classList.toggle('dark-main');
    footer.classList.toggle('dark-foot');
    body.classList.toggle('dark-body');
});