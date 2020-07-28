var navMain = document.querySelector('.navigation');
var navToggle = document.querySelector('.main-nav__toggle');


navToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (!navToggle.classList.contains('navigation__close')) {
    navToggle.classList.add('navigation__close');
    navToggle.classList.remove('navigation__open');
    navMain.classList.add('navigation__none');
  } else {
    navToggle.classList.remove('navigation__close');
    navToggle.classList.add('navigation__open');
    navMain.classList.remove('navigation__none');
  }
});
