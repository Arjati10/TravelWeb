/* ========== MENU SHOW Y HIDDEN ========== */
const navMenu = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*========== MENU SHOW ==========*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

/*========== MENU HIDDEN ==========*/
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

/*========== REMOVE MENU MOBILE ==========*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*========== OFFER MODAL ==========*/
const modalViews = document.querySelectorAll('.offer__modal'),
      modalBtns = document.querySelectorAll('.offer__button'),
      modalCloses = document.querySelectorAll('.offer__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*========== DESTINATION ==========*/
let swiperTestimonial = new Swiper('.destination__container', {
    loop:true,
    grabCursor:true,
    spaceBetween: 24,

    pagination: {
      el: ".swiper-pagination",
      clickable:true, 
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});

// /*========== SCROLL SECTION ACTIVE LINK ==========*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*========== CHANGE BACKGROUND HEADER ==========*/
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*========== SHOW SCROLL UP ==========*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*========== DARK LIGHT THEME ==========*/
const themeButton = document.getElementById('theme-button')
const logoButton = document.getElementById('logo-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
const logoTheme = 'logo-white.png'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const selectedLogo = localStorage.getItem('selected-img')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'
const getCurrentLogo = () => logoTheme.classList.contains(logoTheme) ? 'logo-black.png' : 'logo-white.png'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
  logoButton.classList[selectedLogo === 'assets/img/logo-white.png' ? 'add' : 'remove'](logoTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    logoButton.classList.toggle(logoButton)
    
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    localStorage.setItem('selected-logo', getCurrentLogo())
})