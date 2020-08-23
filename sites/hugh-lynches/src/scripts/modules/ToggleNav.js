class ToggleNav {
  constructor() {
    this.btn = document.querySelector(".nav-btn");
    this.body = document.querySelector("body");
    this.menu = document.querySelector(".top-nav");
    this.element = document.documentElement;
    this.events();
  }
  events() {
    this.btn.addEventListener("click", this.toggleTheMenu.bind(this));
  }
  toggleTheMenu() {
    this.menu.classList.toggle("top-nav--is-closed");
    this.body.classList.toggle("stop-scroll");
    this.body.scrollTop = 0;
    this.element.scrollTop = 0;
    this.transformButton();
  }
  transformButton() {
    this.btn.classList.toggle("nav-btn--close");
    if (this.btn.classList.contains("nav-btn--close")) {
      this.btn.innerHTML = "&times;";
    } else {
      this.btn.innerHTML = "&equiv;";
    }
  }
}
export default ToggleNav;
