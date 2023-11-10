const carousel = document.querySelector(".carousel");
const btnPrev = document.querySelector(".carousel-btn.prev");
const btnNext = document.querySelector(".carousel-btn.next");

btnPrev.addEventListener("click", () => {
  carousel.scrollBy({
    left: -carousel.clientWidth,
    behavior: "smooth",
  });
});

btnNext.addEventListener("click", () => {
  carousel.scrollBy({
    left: carousel.clientWidth,
    behavior: "smooth",
  });
});
