const carousel = document.querySelector(".carousel");
const btnPrev = document.querySelector(".carousel-btn.prev");
const btnNext = document.querySelector(".carousel-btn.next");

let currentIndex = 0;
const lastIndex = 2;
let isThrottled = false;
const THROTTLE_DURATION = 500;

document.addEventListener("DOMContentLoaded", () => {
  setVisibilityOfSlideButtons(currentIndex);
});

btnPrev.addEventListener("click", () => {
  if (isThrottled) return;
  isThrottled = true;

  carousel.scrollBy({
    left: -carousel.clientWidth,
    behavior: "smooth",
  });
  currentIndex--;
  setVisibilityOfSlideButtons(currentIndex);

  setTimeout(() => {
    isThrottled = false;
  }, THROTTLE_DURATION);
});

btnNext.addEventListener("click", () => {
  if (isThrottled) return;
  isThrottled = true;

  carousel.scrollBy({
    left: carousel.clientWidth,
    behavior: "smooth",
  });
  currentIndex++;
  setVisibilityOfSlideButtons(currentIndex);

  setTimeout(() => {
    isThrottled = false;
  }, THROTTLE_DURATION);
});

function setVisibilityOfSlideButtons(currentIndex) {
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
