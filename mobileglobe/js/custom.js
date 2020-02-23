var galleryimgs      = document.querySelectorAll('.galleryimg')
var galleryoverlay   = document.querySelector('.gallery_overlay')
var showcaseImg      = document.querySelector('.showcase_img')


  galleryimgs.forEach(img  => {
       img.addEventListener('click', ()=>{
        showcaseImg.setAttribute('src', img.getAttribute('src'))
        galleryoverlay.style.display = 'block'
        showcaseImg.style.display  =  'block'  
       })       
  });


  galleryoverlay.addEventListener('click', ()=>{
      showcaseImg.style.display = 'none'
      galleryoverlay.style.display = 'none'
  })