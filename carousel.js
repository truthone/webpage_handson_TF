const carousel = document.querySelector(".carousel");
const btnPrev = document.querySelector(".carousel-btn.prev");
const btnNext = document.querySelector(".carousel-btn.next");

let currentIndex = 0;
const lastIndex = 2;
let isThrottled = false;
const throttleDuration = 500;

document.addEventListener("DOMContentLoaded", () => {
  visibilitySlideButtons(currentIndex);
});

btnPrev.addEventListener("click", () => {
  if (isThrottled) return;
  isThrottled = true;

  carousel.scrollBy({
    left: -carousel.clientWidth,
    behavior: "smooth",
  });
  currentIndex--;
  visibilitySlideButtons(currentIndex);

  setTimeout(() => {
    isThrottled = false;
  }, throttleDuration);
});

btnNext.addEventListener("click", () => {
  if (isThrottled) return;
  isThrottled = true;

  carousel.scrollBy({
    left: carousel.clientWidth,
    behavior: "smooth",
  });
  currentIndex++;
  visibilitySlideButtons(currentIndex);

  setTimeout(() => {
    isThrottled = false;
  }, throttleDuration);
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
