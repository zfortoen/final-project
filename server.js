const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//display mobile menu
const mobileMenu = ()  => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
} 

menu.addEventListener('click', mobileMenu);

//show active menu when scrolling 
const highlightMenu = () => {
  
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
