/*==================== SHOW MENU ====================*/
const navBox = document.getElementById('nav-box'),
      navMenu = document.getElementById('nav_menu'),
      navClose = document.getElementById('nav_close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navMenu){
    navMenu.addEventListener('click', () =>{
        navBox.classList.add('show-box')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navBox.classList.remove('show-box')
    })
}


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

