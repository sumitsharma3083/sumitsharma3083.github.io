
menu_btn.onclick = function(){
   
    pic_section.classList.toggle('from-top');
    menu_section.classList.toggle('from-bottom');
   myimg.classList.toggle('myimgfloat'); 
   menu_list_items[0].classList.toggle('homelink');
   menu_list_items[1].classList.toggle('aboutlink');
   menu_list_items[2].classList.toggle('myworklink');
   menu_list_items[3].classList.toggle('reachmelink');
}