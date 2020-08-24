import "../styles/styles.css";
const slides = document.querySelectorAll(".slide");
for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
let count = 1;
function slideshow() {
  slides[count - 1].style.display = "none";
  slides[count].style.display = "block";
  count++;
  if (count === slides.length) {
    count = 1;
  }
  setTimeout(() => {
    slideshow();
  }, 3000);
}

slideshow();
