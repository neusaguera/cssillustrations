var openMenu = document.getElementById("menu");
var btnMenu = document.getElementById("bars-menu");

function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

document.addEventListener('click', function(event) {
  var isClickInside = openMenu.contains(event.target);
  var isClickBtn = btnMenu.contains(event.target);

  if (isClickInside ){
     openMenu.classList = "menu close";
  } else {
      if(isClickBtn){
          openMenu.classList = "menu";
      } else {
          openMenu.classList = "menu close";
      }
  }
});