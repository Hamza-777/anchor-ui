const darkMode = document.querySelector('.dark-mode');
const darkBtn = document.querySelector('.changer');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const sidebar = document.querySelector('.sidebar');

darkMode.addEventListener('click', e => {
    darkBtn.classList.toggle('fa-moon');
    darkBtn.classList.toggle('fa-sun');
    darkBtn.classList.toggle('dark');
    darkBtn.classList.toggle('light');
});

open.addEventListener('click', e => {
    sidebar.style.display = 'block';
});

close.addEventListener('click', e => {
    sidebar.style.display = 'none';
});