const darkMode = document.querySelector('.dark-mode');
const darkBtn = document.querySelector('.changer');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const navbar = document.querySelector('.navbar');
const sidebar = document.querySelector('.sidebar');
const footer = document.querySelector('.footer');
const body = document.querySelector('body');
const codeboxes = document.querySelectorAll('.code-box');
const componentContainers = document.querySelectorAll('.component-container');

darkMode.addEventListener('click', e => {
    darkBtn.classList.toggle('fa-moon');
    darkBtn.classList.toggle('fa-sun');
    darkBtn.classList.toggle('dark');
    darkBtn.classList.toggle('light');
    body.classList.toggle('dark-body');
    navbar.classList.toggle('dark-nav');
    sidebar.classList.toggle('dark-sidebar');
    footer.classList.toggle('dark-foot');
    codeboxes.forEach(codebox => {
        codebox.classList.toggle('dark-codebox');
    });
    componentContainers.forEach(componentContainer => {
        componentContainer.classList.toggle('dark-container');
    });
});

open.addEventListener('click', e => {
    sidebar.style.display = 'block';
});

close.addEventListener('click', e => {
    sidebar.style.display = 'none';
});

// Input validation
const passwordInput = document.querySelector('.inp-password');
const validationMessage = document.querySelector('.validation-message');

passwordInput.addEventListener('input', e => {
    if(passwordInput.value.length < 7) {
        passwordInput.style.border = '2px solid red';
        validationMessage.style.display = 'block';
    } else {
        passwordInput.style.border = '2px solid green';
        validationMessage.style.display = 'none';
    }
});