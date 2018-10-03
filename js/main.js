// JavaScript Document
(() => {
    console.log('Linked Up');

    //VARIABLE STACK
    let navIcon = document.querySelector('.navIcon'),
        navMenu = document.querySelector('.navMenu'),
        body = document.querySelector('body');

    
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


    //EVENT HANDLING
    navIcon.addEventListener('click', showMenu);

})();
