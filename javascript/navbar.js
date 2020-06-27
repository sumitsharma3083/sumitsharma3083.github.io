var menu= document.querySelector('.menu-toggle')
var responsive_navbar = document.querySelector('.responsive-navbar-toggle')

 menu.addEventListener('click', ()=>{
    responsive_navbar.classList.toggle('responsive')
 })