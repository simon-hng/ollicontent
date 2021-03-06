/* css checkbox hack */
var burgerCheckbox = document.querySelector('.burger-checkbox');
var burger = document.querySelector('.burger');
var burgerNav = document.querySelector('.nav__list');
var burgerActive = 'burger--active';

function headerColor() {
    var displayheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var scrollPos = document.body.getBoundingClientRect().top;
    var logoPos = logo.offsetHeight + logo.getBoundingClientRect().top;

    if (scrollPos < -displayheight + logoPos) {
        isLogoAlt(true);
        burger.classList.add(burgerActive);
    } else {
        isLogoAlt(false);
        burger.classList.remove(burgerActive);
    }
}

function toggleNav() {
    burgerCheckbox.checked = false;
}
/* initiation in BurgerMenu.html */