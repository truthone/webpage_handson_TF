import { promotions } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  renderPromotions(promotions);
  renderProducts(promotions);
});

function renderPromotions(promotions) {
  const mainTag = document.getElementsByTagName("main")[0];

  const result = promotions
    .map((promotion) => {
      return `
      <section>
        <h1 class="section-title">${promotion.sectionTitle}</h1>
        <div class="productContainer grid">
        </div>
      </section>
      `;
    })
    .join("");

  return (mainTag.innerHTML += result);
}

function renderProducts(promotions) {
  for (let i = 0; i < promotions.length; i++) {
    const productContainer =
      document.getElementsByClassName("productContainer")[i];

    const result = promotions[i].products
      .map((product) => {
        return `<div class="item" data-id="${product.productId}">
            <img class="item-thumbnail" src="${
              product.imageUrl
            }" alt="상품썸네일이미지" />
            <div class="flex-between">
              <div class="item-info">
                  <a href="${product.link}" class="item-name">${
          product.productName
        }</a>
                  <div class="price-info">
                    <p class="item-price">${product.price.toLocaleString()}원</p>
                    <p class="saled-price">${product.discountPrice.toLocaleString()}원</p>
                  </div>
              </div>
              <button>
                  <span class="icon material-symbols-rounded button-add-cart"
                      onclick="addToCart('${product.productName}')">add_Circle
                  </span>
              </button>
            </div>
          </div>`;
      })
      .join("");
    productContainer.innerHTML += result;
  }
}
