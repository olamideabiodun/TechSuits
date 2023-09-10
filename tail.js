const nav_item = document.querySelector('.small_nav');
const open_nav = document.querySelector('.open_nav');
const clos_nav = document.querySelector('.close_nav');


function show_nav(){
    nav_item.style.height = '260px';
    clos_nav.style.display = ' block'
    open_nav.style.display = ' none'
    
}
function close_nav(){
    nav_item.style.height = '0';
    open_nav.style.display = ' block'
    clos_nav.style.display = ' none'
   
}
