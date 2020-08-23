class SlideShow {
  constructor(time) {
    this.slides = document.querySelectorAll(".slideshow__slide");
    this.count = 0;
    this.prev = document.querySelector(".slideshow__btn--left");
    this.next = document.querySelector(".slideshow__btn--right");
    this.timer;
    this.interval = time | 3000;
    this.events();
    this.startSlideShow();
  }
  events() {
    this.prev.addEventListener("click", this.showPrevSlide.bind(this));
    this.next.addEventListener("click", this.showNextSlide.bind(this));
  }
  startSlideShow() {
    this.slides[this.count].classList.remove("slideshow__slide--is-hidden");
    this.timer = setTimeout(this.showNextSlide.bind(this), this.interval);
  }
  showNextSlide() {
    clearTimeout(this.timer);
    this.slides[this.count].classList.add("slideshow__slide--is-hidden");
    if (this.count === this.slides.length - 1) {
      this.count = 0;
    } else {
      this.count++;
    }
    this.slides[this.count].classList.remove("slideshow__slide--is-hidden");
    this.timer = setTimeout(this.showNextSlide.bind(this), this.interval);
  }
  showPrevSlide() {
    clearTimeout(this.timer);
    this.slides[this.count].classList.add("slideshow__slide--is-hidden");
    if (this.count === 0) {
      this.count = this.slides.length - 1;
    } else {
      this.count--;
    }
    this.slides[this.count].classList.remove("slideshow__slide--is-hidden");
    this.timer = setTimeout(this.showNextSlide.bind(this), this.interval);
  }
}
export default SlideShow;
