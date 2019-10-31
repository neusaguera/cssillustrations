function toggleMenu() {
    var openMenu = document.getElementById("menu");
    if (hasClass(openMenu, 'close')) {
        openMenu.classList = "menu"
    } else {
        openMenu.classList = "menu close"
    }
}

function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}