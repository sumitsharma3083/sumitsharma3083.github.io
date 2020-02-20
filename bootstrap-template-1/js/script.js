var navbar = document.querySelector('.main-navbar')

var menu = document.querySelector('.hamburger-menu')
var navResponsive = document.querySelector('.mobile-responsive-navbar')



window.onscroll = function(){
    if(window.pageYOffset > 500)
    {
        navbar.classList.add('turnblack')
    }else{
        navbar.classList.remove('turnblack')
    } 
}


menu.onclick= function(){
    navResponsive.classList.toggle('ShowNav')
}    
