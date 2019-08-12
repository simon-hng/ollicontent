var logo = document.querySelector('.logo');

var burger = document.querySelector('.burger');
var burgerActive = 'burger--active';

var headerLogo;
var headerLogoActive;

var scrollPos = 0;

function headerColor() {
    var displayheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var scrollPos = document.body.getBoundingClientRect().top;

    var logoPos = logo.offsetHeight + logo.getBoundingClientRect().top;

    if (scrollPos < -displayheight + logoPos) { 
        logo.src = headerLogoActive;
        burger.classList.add(burgerActive);
    } else {
        logo.src = headerLogo;
        burger.classList.remove(burgerActive);
    }
}

window.addEventListener('scroll', function () {
    headerColor();
});