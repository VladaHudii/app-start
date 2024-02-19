

document.addEventListener('DOMContentLoaded', function(){
    // code
    const buttonMenu = document.querySelector('.mobileMenuButton');
    buttonMenu.addEventListener('click', function () {
        document.querySelector('.navigation').classList.toggle('visible');
        buttonMenu.classList.toggle('open');
    });
})