const carousel = document.querySelector(".carousel");
const btnPrev = document.querySelector(".carousel-btn.prev");
const btnNext = document.querySelector(".carousel-btn.next");

let currentIndex = 0;
const lastIndex = 2;

document.addEventListener("DOMContentLoaded", () => {
  visibilitySlideButtons(currentIndex);
});

btnPrev.addEventListener("click", () => {
  carousel.scrollBy({
    left: -carousel.clientWidth,
    behavior: "smooth",
  });
  currentIndex--;
  visibilitySlideButtons(currentIndex);
});

btnNext.addEventListener("click", () => {
  carousel.scrollBy({
    left: carousel.clientWidth,
    behavior: "smooth",
  });
  currentIndex++;
  visibilitySlideButtons(currentIndex);
});

function visibilitySlideButtons(currentIndex) {
  if (currentIndex === 0) {
    btnPrev.style.display = "none";
    btnNext.style.display = "block";
  } else if (currentIndex === 1) {
    btnPrev.style.display = "block";
    btnNext.style.display = "block";
  } else {
    btnPrev.style.display = "block";
    btnNext.style.display = "none";
  }
}
