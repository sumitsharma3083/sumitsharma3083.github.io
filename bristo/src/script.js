
var body = document.querySelector('body');
var companybrand = document.querySelector('.navbar-brand');
var navbar = document.querySelector('#full-navbar');

body.onscroll = function(){
   if(Math.trunc(scrollY)> 45)
   {
      navbar.style.backgroundColor = 'black';
      navbar.style.position = 'fixed';
      navbar.style.top = '0';
      companybrand.removeAttribute('class','navbar-brand-style');
      companybrand.setAttribute('class','animated-brand-style animated slideInDown infinite');

   }
   else
   {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.position = '';
    navbar.style.top = '';
    companybrand.removeAttribute('class','animated-brand-style');
    companybrand.setAttribute('class','navbar-brand-style');
}
}
 
  var cards = document.querySelectorAll('.card');
  var card_overlay = document.querySelectorAll('.card-overlay');




   cards[0].onmouseenter= function(){
       card_overlay[0].style.display = 'flex';
   }
   
   cards[0].onmouseleave= function(){
    card_overlay[0].style.display = 'none';
}


cards[1].onmouseenter= function(){
    card_overlay[1].style.display = 'flex';
}

cards[1].onmouseleave= function(){
 card_overlay[1].style.display = 'none';
}

cards[2].onmouseenter= function(){
    card_overlay[2].style.display = 'flex';
}

cards[2].onmouseleave= function(){
 card_overlay[2].style.display = 'none';
}


cards[3].onmouseenter= function(){
    card_overlay[3].style.display = 'flex';
}

cards[3].onmouseleave= function(){
 card_overlay[3].style.display = 'none';
}

cards[4].onmouseenter= function(){
    card_overlay[4].style.display = 'flex';
}

cards[4].onmouseleave= function(){
 card_overlay[4].style.display = 'none';
}

cards[5].onmouseenter= function(){
    card_overlay[5].style.display = 'flex';
}

cards[5].onmouseleave= function(){
 card_overlay[5].style.display = 'none';
}