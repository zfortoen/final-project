const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navbar = document.querySelector('#navbar__logo')

//display mobile menu
const mobileMenu = ()  => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
} 

menu.addEventListener('click', mobileMenu);

//show active menu when scrolling 
const highlightMenu = () => {
  
}