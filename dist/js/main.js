const $ = (container) => {
   return document.querySelector(container)
}

let menuBtn = $('.menu-btn');
let arButton = $('.menu-btn__burger');
let showBtn = false;
let nav = $('.nav');
let menuNav = $('.menu-nav');
let navItems = document.querySelectorAll('.menu-nav__item');

menuBtn.addEventListener('click', (event) => {
   event.preventDefault();
   if (!showBtn) {
      arButton.classList.add('open')
      nav.classList.add('open')
      menuNav.classList.add('open');
      navItems.forEach(item => item.classList.add('open'))
      showBtn = true
   } else {
      arButton.classList.remove('open');
      nav.classList.remove('open');
      nav.classList.remove('open');
      navItems.forEach(item => item.classList.remove('open'))
      showBtn = false;
   }
})

const gallery = (() => {
   const $ = (container) => {
      return document.querySelector(container)
   }
   let images = document.querySelectorAll('.store-img');
   let allBtn = document.querySelectorAll('.lightbox-control')
   let container = $('.lightbox-container');
   let item = $('.lightbox-item');
   let close = $('.lightbox-close');
   let imageList = [];
   let counter = 0;

   images.forEach((image) => {
      imageList.push(image.src);
      image.addEventListener('click', (event) => {
         container.classList.add('show')
         let getSources = event.target.src;
         item.style.backgroundImage = `url(${getSources})`;
         counter = imageList.indexOf(getSources);
      })
   })

   close.addEventListener('click', (event) => {
      event.preventDefault();
      container.classList.remove('show')
   })

   allBtn.forEach((btn) => {
      btn.addEventListener('click', (event) => {
         event.preventDefault();
         if (event.target.parentElement.classList.contains('btnLeft')) {
            counter--;
            if (counter < 0) {
               counter = imageList.length - 1;
            }
            item.style.backgroundImage = `url(${imageList[counter]})`

         } else if (event.target.parentElement.classList.contains('btnRight')) {
            counter++
            if (counter > imageList.length - 1) {
               counter = 0;
            }
            item.style.backgroundImage = `url(${imageList[counter]})`
         }
      })
   })

})()