import { promotions } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector("main");
  container.addEventListener("click", (e) => {
    // 'Add to Cart' 버튼 클릭 여부 확인
    if (e.target.matches(".button-add-cart")) {
      const itemId = e.target.parentElement.dataset.id;
      if (itemId) {
        addToCart(itemId);
      }
    }
  });
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productList = [];
promotions.forEach((p) => {
  p.products.forEach((p) => {
    productList.push(p);
  });
});

console.log(productList);

function addToCart(productId) {
  const product = productList.find((p) => p.productId === productId);
  if (product) {
    const isProductInCart = cart.some((p) => p.productId === productId);
    if (!isProductInCart) {
      cart.push({ ...product, quantity: 1 });
    } else {
      const productInCart = cart.find((p) => p.productId === productId);
      productInCart.quantity += 1;
    }
    saveCart();
  }
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
