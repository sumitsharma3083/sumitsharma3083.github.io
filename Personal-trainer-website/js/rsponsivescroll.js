
var responsiveMenu = document.querySelector('.responsive_menu_btn')
var menuList = document.querySelector('.menu-link-list')
var hideBtn = document.querySelector('.hide-menu')


window.onscroll = function(){
    mainHeader.style.backgroundPosition = `0px ${Math.trunc(-70+Math.trunc(window.pageYOffset/2))}px`

     if(window.pageYOffset > 10){
         scrollDown.classList.add('scroll-hide')
     }
     else{
        scrollDown.classList.remove('scroll-hide')
     }
}

responsiveMenu.addEventListener('click', function(){
     menuList.classList.add('menuvisible')
})

hideBtn.addEventListener('click', function(){
    menuList.classList.remove('menuvisible')
})