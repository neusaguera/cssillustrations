function toggleMenu() {
    var openMenu = document.getElementById("menu");
    if (hasClass(openMenu, 'close')) {
        openMenu.classList = "menu-list"
    } else {
        openMenu.classList = "menu-list close"
    }
}

function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}