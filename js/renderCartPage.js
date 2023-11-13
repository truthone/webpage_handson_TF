let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", () => {
  renderCartItems();
});

document.addEventListener("click", (e) => {
  console.log(e.target.dataset.id);
  removeFromCart(e.target.dataset.id);
});

function renderCartItems() {
  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = "";
  let sum = 0;
  let amount = 0;

  cart.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${item.imageUrl}" alt="${item.productName}""></td>
      <td>${item.productName}</td>
      <td>${item.price}원</td>
      <td>${item.quantity}</td>
      <td>${item.price * item.quantity}원</td>
      <td><button id='remove-button' data-id="${
        item.productId
      }" onclick="removeFromCart(${item.productId})">삭제</button></td>
    `;
    sum += item.price;
    amount += item.quantity;
    cartItemsElement.appendChild(row);
  });

  renderSum(sum, amount);
}

function removeFromCart(productId) {
  const productIndex = cart.findIndex((p) => p.productId === productId);
  cart.splice(productIndex, 1);
  saveCart();
  renderCartItems();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderSum(sum, amount) {
  document.getElementById("amount").innerHTML = `총 수량: ${amount}`;
  document.getElementById("sum").innerHTML = `총 합계: ${sum * amount}`;
}
