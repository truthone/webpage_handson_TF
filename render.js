import { promotions } from "https://media.graphassets.com/n5qrl3pRBWb51NXtbdr8";
document.addEventListener("DOMContentLoaded", () => {
  const mainTag = document.getElementsByTagName("main")[0];
  renderPromotions(mainTag, promotions);
  renderProducts(mainTag, promotions);
});

function renderPromotions(mainTag, promotions) {
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

  mainTag.innerHTML += result;
}

function renderProducts(mainTag, promotions) {
  const productContainers = mainTag.getElementsByClassName("productContainer");
  promotions.forEach((promotion, index) => {
    const productContainer = productContainers[index];
    const productsMarkup = promotion.products
      .map((product) => createProductMarkup(product))
      .join("");
    productContainer.innerHTML = productsMarkup;
  });
}

function createProductMarkup(product) {
  return `
    <div class="item" data-id="${product.productId}">
      <figure>
        <img class="item-thumbnail" 
          src="${product.imageUrl}" 
          alt="${product.productName} 상품 이미지" />
      </figure>
      <div class="flex-between">
        <div class="item-info">
          <a href="${product.link}"class="item-name">
            ${product.productName}
          </a>
          <div class="price-info">
            <p class="item-price">${product.price.toLocaleString()}원</p>
            <p class="saled-price">${product.discountPrice.toLocaleString()}원</p>
          </div>
        </div>
        <button aria-label="${product.productName} 상품 추가 버튼"
          data-id="${product.productId}">
          <span class="icon icon-add-cart material-symbols-rounded add-cart-button">add_Circle</span>
        </button>
      </div>
    </div>
  `;
}
