const mainHeader = document.querySelector('.main-header') ;

const scrollDown = document.querySelector('.scroll-down-text')

var responsiveMenu = document.querySelector('.responsive_menu_btn')

var imgSources = ['https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500' , 'https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' , 'https://images.pexels.com/photos/863974/pexels-photo-863974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'  , 'https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' , 'https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500']

var imageShow   = document.querySelector('.image-show')
var crossBtn    = document.querySelector('.cross-btn')
const singleImg = document.querySelector('.single-image')
const images    = document.querySelectorAll('.img-collection')









window.onscroll = function(){
    mainHeader.style.backgroundPosition = `0px ${Math.trunc(-70+Math.trunc(window.pageYOffset/2))}px`

     if(window.pageYOffset > 10){
         scrollDown.classList.add('scroll-hide')
     }
     else{
        scrollDown.classList.remove('scroll-hide')
     }
}




 crossBtn.addEventListener('click', function(){
       imageShow.classList.remove('myclass')
 })


  images.forEach(image => {
         image.addEventListener('click', ()=>{
              imageShow.classList.add('myclass')
              singleImg.setAttribute('src', image.getAttribute('src'))
         })
  });


      var i = 0; 
  singleImg.addEventListener('click', function(){ 
      if(i == imgSources.length)
      {
          i = 0 ;
      }
            singleImg.setAttribute('src', imgSources[i]) 
            i = i+1  ; 
  })
