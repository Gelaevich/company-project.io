const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', function () {
  this.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('lock');
});
