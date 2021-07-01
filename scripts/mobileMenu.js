export default class MobileMenu {
  burgerBtn = document.getElementById('burger');

  display = document.getElementById('mobile-menu');

  displayStyleBtn = document.getElementsByClassName('stylefy');

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
    this.isPixelStyle = !this.isPixelStyle;
  }

  init = () => {
    Object.entries(this.displayStyleBtn).forEach((element) => {
      element[1].addEventListener('click', () => {
        this.stylefy();
      });
    });
    this.burgerBtn.addEventListener('click', () => {
      this.toggleMenu();
    });
  }
}
