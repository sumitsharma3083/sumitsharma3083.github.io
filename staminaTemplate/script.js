var dayBtns = document.querySelectorAll('.day-btn')
 

var hamburgBtn = document.querySelector('.hamburg-btn')
var closeBtn   = document.querySelector('.menu-close')
var mobile_menu = document.querySelector('.mobile-responsive-navbar') 

var main_nav = document.querySelector('.main-navbar')
var menu_link = document.querySelectorAll('.menu-list-link')


var mysection_102= document.querySelector('.mysection-102')


var sundayContainer = document.querySelector('.sunday-container')
var mondayContainer = document.querySelector('.monday-container')
var tuesdayContainer = document.querySelector('.tuesday-container')
var wednesdayContainer = document.querySelector('.wednesday-container')
var thrusdayContainer = document.querySelector('.thrusday-container')
var fridayContainer = document.querySelector('.friday-container')
var saturdayContainer = document.querySelector('.saturday-container')

   var commonContainer = document.querySelectorAll('.common-container')

    commonContainer.forEach(container => {
           container.style.display = 'none'
    });
    sundayContainer.style.display = 'block'; 
  


 dayBtns.forEach(btn => {
        btn.addEventListener('click', ()=>{

           var key = btn.getAttribute('day')
            switch (key) {
                case 'sunday':
            
                        commonContainer.forEach(container => {
                            container.style.display = 'none'
                     });
                    sundayContainer.style.display = 'block' ; 
                    break;
                    case 'monday':
                            commonContainer.forEach(container => {
                                container.style.display = 'none'
                         });
                        mondayContainer.style.display = 'block' ; 
                        break;
                case 'tuesday':  
                commonContainer.forEach(container => {
                    container.style.display = 'none'
             });
            tuesdayContainer.style.display = 'block' ;
                    
                    break ;
                case 'wednesday': 
                commonContainer.forEach(container => {
                    container.style.display = 'none'
             });
            wednesdayContainer.style.display = 'block' ;
                    break ;
                case 'thrusday': 
                commonContainer.forEach(container => {
                    container.style.display = 'none'
             });
            thrusdayContainer.style.display = 'block' ;
                    break ;
                case 'friday': 
                commonContainer.forEach(container => {
                    container.style.display = 'none'
             });
              fridayContainer.style.display = 'block' ;
                    break ;
                   default:
                        commonContainer.forEach(container => {
                            container.style.display = 'none'
                     });
                    saturdayContainer.style.display = 'block' ;
                    break;
            }
        })
 });


 hamburgBtn.addEventListener('click', ()=>{
    mobile_menu.style.display = 'block'
 })
 closeBtn.addEventListener('click', ()=>{
    mobile_menu.style.display = 'none'
 })


 window.addEventListener('scroll', ()=>{
           
       console.log(mysection_102.style.backgroundPosition) ; 
       if(window.pageYOffset > 10)
       {
           main_nav.classList.add('fixed')
               menu_link.forEach(link => {
               link.classList.add('black')
           });
       }
       else{
        main_nav.classList.remove('fixed')
            menu_link.forEach(link => {
                link.classList.remove('black')
            });
       }
 })