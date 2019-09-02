var logo = document.querySelector('.logo');
var logoDefault = document.querySelector('.logo__default');
var logoAlt = document.querySelector('.logo__alternative');
var lastScrollTop;

var logoHidden = 'logo--hidden';

function checkLogo() {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (scrollPos > lastScrollTop) {
        logo.classList.add(logoHidden);
    } else {
        logo.classList.remove(logoHidden);
    }
    lastScrollTop = scrollPos <= 0 ? 0 : scrollPos; // For Mobile or negative scrolling
}

function isLogoAlt(parameter) {
    if (parameter == true) {
        logoDefault.classList.add(logoHidden);
        logoAlt.classList.remove(logoHidden);
    } else if (parameter == false) {
        logoDefault.classList.remove(logoHidden);
        logoAlt.classList.add(logoHidden);
    }
}