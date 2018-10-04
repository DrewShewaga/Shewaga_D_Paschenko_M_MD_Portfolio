// JavaScript Document
(() => {
    console.log('Linked Up');
    

    //VARIABLE STACK
    let navIcon = document.querySelector('.navIcon'),
        navMenu = document.querySelector('.navMenu'),
        body = document.querySelector('body'),
        mWorks = document.querySelector('.worksMax'),
        navDes = document.querySelector('.navDes'),
        dWorks = document.querySelector('.worksDrew'),
        navDev = document.querySelector('.navDev'),
        mbox = document.querySelector('.maxBox'),
        dbox = document.querySelector('.drewBox'),
        navHome = document.querySelector('.navHome');



    //FLICKITY
    var max = document.querySelector('.max-carousel');
    var drew = document.querySelector('.drew-carousel');
    // var Flickity = require('flickity');
    // require('flickity-imagesloaded');
    var flkty = new Flickity( max, {
      // options
      cellAlign: 'center',
      wrapAround: true,
      initialIndex: 1,
      autoPlay: 8000,
      imagesLoaded: true
    });
    var flkty = new Flickity( drew, {
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

            if (mbox.classList.value == 'maxBox hidden'){
            body.classList.remove('scrollStop');
            }
            else {

            }
        }
    }

    function closeMenu() {
        navMenu.classList.add('hidden');
    }


    function showMax() {
        mbox.classList.remove('hidden');
        body.classList.add('scrollStop');
        dbox.classList.add('hidden');
    }

    function showDrew() {
        dbox.classList.remove('hidden');
        body.classList.add('scrollStop');
        mbox.classList.add('hidden');
    }

    function closeLB() {
        mbox.classList.add('hidden');
        dbox.classList.add('hidden');
        body.classList.remove('scrollStop');
        navMenu.classList.add('hidden');
    }



    //EVENT HANDLING
    navIcon.addEventListener('click', showMenu);
    mWorks.addEventListener('click', showMax);
    navDes.addEventListener('click', showMax);
    dWorks.addEventListener('click', showDrew);
    navDev.addEventListener('click', showDrew);
    navDes.addEventListener('click', closeMenu);
    navDev.addEventListener('click', closeMenu);
    navHome.addEventListener('click', closeLB);
    exit = document.querySelectorAll('.exit').forEach(exit => exit.addEventListener('click', closeLB));
})();
