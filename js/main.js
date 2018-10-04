// JavaScript Document
(() => {
    console.log('Linked Up');
    

    //VARIABLE STACK
    let navIcon = document.querySelector('.navIcon'),
        navMenu = document.querySelector('.navMenu'),
        body = document.querySelector('body'),
        mWorks = document.querySelector('.worksMax'),
        dWorks = document.querySelector('.worksDrew'),
        mbox = document.querySelector('.maxBox');



    //FLICKITY
    var elem = document.querySelector('.main-carousel');
    // var Flickity = require('flickity');
    // require('flickity-imagesloaded');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'center',
      wrapAround: true,
      initialIndex: 1,
      autoPlay: 8000,
      imagesLoaded: true
    });
  

    //FUNCTIONS
    function showMenu() {
        if (navMenu.classList.value == 'navMenu hidden') {
            navMenu.classList.remove('hidden');
            body.classList.add('scrollStop');
        }
        else {
            navMenu.classList.add('hidden');
            body.classList.remove('scrollStop');
        }
    }


    function showMax() {
        mbox.classList.remove('hidden');
    }



    //EVENT HANDLING
    navIcon.addEventListener('click', showMenu);
    mWorks.addEventListener('click', showMax);
})();
