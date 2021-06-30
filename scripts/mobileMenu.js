export default class MobileMenu {
  burgerBtn = document.getElementById('burger');

  display = document.getElementById('mobile-menu');

  displayStyleBtn = document.getElementById('stylefy');

  body = document.querySelector('body');

  isPixelStyle = false;

  toggleMenu = () => {
    this.burgerBtn.classList.toggle('show');
    this.display.classList.toggle('show');
  }

  stylefy = () => {
    if (this.isPixelStyle) {
      this.body.classList.add('theme-normal');
      this.body.classList.remove('theme-pixel');
    } else {
      this.body.classList.remove('theme-normal');
      this.body.classList.add('theme-pixel');
    }

    this.toggleMenu();
    this.isPixelStyle = !this.isPixelStyle;
  }

  init = () => {
    this.displayStyleBtn.addEventListener('click', () => {
      this.stylefy();
    });

    this.burgerBtn.addEventListener('click', () => {
      this.toggleMenu();
    });
  }
}
