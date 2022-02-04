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

// Remove Alert
const removeAlert = document.querySelector('.remove-alert');
const dismissAlert = document.querySelector('.alert-dismiss');

removeAlert.addEventListener('click', e => {
    dismissAlert.style.display = 'none';
});

// Remove Card
const removeCard = document.querySelector('.card-dismiss');
const card = document.querySelector('.removable-card');

removeCard.addEventListener('click', e => {
    card.style.display = 'none';
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

// Navigation JS
const shortContainer = document.querySelector('.short-container');
const short = document.querySelector('.short');
const title = document.querySelector('.nav-title');

shortContainer.addEventListener('scroll', e => {
    if(shortContainer.scrollTop > 0) {
        short.style.width = '125px';
        short.style.borderRadius = '0 0 25px 0';
        setTimeout(() => {
            title.style.display = 'none';
        }, 200);
    } else {
        short.style.width = '100%';
        short.style.borderRadius = '0';
        setTimeout(() => {
            title.style.display = 'block';
        }, 200);
    }
});

// Modal JS
const opener = document.querySelector('#opener');
const modalBox = document.querySelector('.modal-box');
const actions = document.querySelectorAll('.action');

opener.addEventListener('click', e => {
    modalBox.style.display = 'flex';
});

actions.forEach(
    action => {
        action.addEventListener('click', e => {
            modalBox.style.display = 'none';
        });
    }
);