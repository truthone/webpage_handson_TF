const promotions = [
  {
    sectionTitle: "[푸드] 건강하고 맛있는 식재료🥝",
    products: [
      {
        productName: "베리베리 설향 딸기 3팩 묶음",
        price: 15000,
        discountPrice: 8000,
        productId: "404",
        imageUrl: "https://media.graphassets.com/RfDbsZyuQ5euPYYVy2rW",
      },

      {
        productName: "우리자연농산물 토종 아카시아 꿀 100%",
        price: 19000,
        discountPrice: 9800,
        productId: "402",
        imageUrl: "https://media.graphassets.com/zEhUDReuTI6YHlr4fbp4",
      },
      {
        productName: "어글리오케이 유기농 자연 농산물 보따리 미니",
        price: 12400,
        discountPrice: 8400,
        productId: "403",
        imageUrl: "https://media.graphassets.com/4tZPgmbsS6ejyGkGChpw",
      },
      {
        productName: "밀해피밀 건조 베리이 들어간 씨리얼 아침대용",
        price: 28000,
        discountPrice: 8000,
        productId: "401",
        imageUrl: "https://media.graphassets.com/qsvCDwaESkinc0UlRqED",
      },
    ],
  },
  {
    sectionTitle: "[뷰티] 신상 컬러 집합!🎨",
    products: [
      {
        productName: "헤이메이크업 유리알 글로시 틴트",
        price: 13000,
        discountPrice: 7800,
        productId: "201",
        imageUrl: "https://media.graphassets.com/yojHQL0RriVlNdUmSCZX",
      },
      {
        productName: "뷰리풀뷰리 에어 촉촉 콤팩트 파운데이션 쿠션",
        price: 19000,
        discountPrice: 9800,
        productId: "202",
        imageUrl: "https://media.graphassets.com/RycKvc6jRWyjiQpXz9NU",
      },
      {
        productName: "뷰리풀뷰리 컬링 볼륨업 마스카라 ver2",
        price: 19000,
        discountPrice: 11000,
        productId: "203",
        imageUrl: "https://media.graphassets.com/FXPkYrm6Ta6AMCHQ677t",
      },
      {
        productName: "헤이메이크업 브러쉬 세트 + 퍼스널컬러 웜톤 팔레트",
        price: 36500,
        discountPrice: 21000,
        productId: "204",
        imageUrl: "https://media.graphassets.com/swECJc4SMqgiVJPf2HLU",
      },
    ],
  },
  {
    sectionTitle: "[잡화] 향기로워지는 마법🌺",
    products: [
      {
        productName: "GOLDEN SCENT 우디 머스크 디퓨저 블랙",
        price: 14000,
        discountPrice: 8800,
        productId: "302",
        imageUrl: "https://media.graphassets.com/Q2wF87XRsypxkbR3eoxA",
      },
      {
        productName: "네이처파운드 유칼립투스 아로마 오일 20ml",
        price: 8700,
        discountPrice: 3200,
        productId: "303",
        imageUrl: "https://media.graphassets.com/grsQhbCjRvqpCqYVN3YH",
      },
      {
        productName: "네이처파운드 비온뒤 상쾌한 향 롤링온 아로마 20ml ",
        price: 13000,
        discountPrice: 8000,
        productId: "301",
        imageUrl: "https://media.graphassets.com/qEdoFg3SToGccBmkTXCG",
      },
      {
        productName: "GOLDEN SCENT 네이처 골든 우드 향수 45ml",
        price: 48000,
        discountPrice: 39000,
        productId: "304",
        imageUrl: "https://media.graphassets.com/PIWwpLC3Qh2ELsKaT0YD",
      },
    ],
  },
  {
    sectionTitle: "[테마] 한강으로 고고! 피크닉 감성 🥂",
    products: [
      {
        productName: "동유럽감성 피크닉 햇 + 피크닉 가방 세트",
        price: 28000,
        discountPrice: 8000,
        productId: "401",
        imageUrl: "https://media.graphassets.com/TTUhaiT0lsmx7eon1PAZ",
        link: "./detail.html",
      },
      {
        productName: "피크닉 바구니 (레드 체크 식탁보 포함)",
        price: 19000,
        discountPrice: 9800,
        productId: "402",
        imageUrl: "https://media.graphassets.com/nguzRYFFRPeRMClFt7YX",
      },
      {
        productName: "피크닉 플레저 디쉬 우드 트레이",
        price: 12400,
        discountPrice: 8400,
        productId: "403",
        imageUrl: "https://media.graphassets.com/zJwe9WH5TvO0z6oZlOaZ",
      },
      {
        productName: "플라스틱 와인 고블렛 잔 2p",
        price: 10000,
        discountPrice: 8000,
        productId: "404",
        imageUrl: "https://media.graphassets.com/RoWLHySjSgqrQeLR1N2B",
      },
    ],
  },
];

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
