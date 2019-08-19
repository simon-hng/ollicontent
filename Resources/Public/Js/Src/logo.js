var logo = document.querySelector('.logo');
var lastScrollTop;

var logoHidden = 'logo--hidden';

function hideLogo() {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (scrollPos > lastScrollTop) {
        logo.classList.add(logoHidden);
    } else {
        logo.classList.remove(logoHidden);
    }
    lastScrollTop = scrollPos <= 0 ? 0 : scrollPos; // For Mobile or negative scrolling
}