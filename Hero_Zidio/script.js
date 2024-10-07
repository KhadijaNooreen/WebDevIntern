const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    nav.classList.toggle('nav-active');
});

