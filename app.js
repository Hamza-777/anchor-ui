const darkMode = document.querySelector('.dark-mode');
const darkBtn = document.querySelector('.changer');

darkMode.addEventListener('click', e => {
    darkBtn.classList.toggle('fa-moon');
    darkBtn.classList.toggle('fa-sun');
    darkBtn.classList.toggle('dark');
    darkBtn.classList.toggle('light');
});