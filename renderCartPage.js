let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
  renderCartItems();
});

document.querySelector('#cart').addEventListener('click', (e) => {
  removeFromCart(e.target.dataset.id);
})

document.getElementById('logo').addEventListener('click', () => {
window.location.href = './index.html'
})

function renderCartItems() {
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = ''; // 기존 항목들을 지움

  cart.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${item.imageUrl}" alt="${item.productName}" style="width: 50px; height: auto;"></td>
      <td>${item.productName}</td>
      <td>${item.price}원</td>
      <td>${item.quantity}</td>
      <td>${item.price * item.quantity}원</td>
      <td><button id='remove-button' data-id="${item.productId}">Remove</button></td>
    `;
    cartItemsElement.appendChild(row);
  });
}

function removeFromCart(productId){
  const productIndex = cart.findIndex(p => p.productId === productId);
  if (cart[productIndex].quantity > 1) {
    cart[productIndex].quantity -= 1;
  } else {
    cart.splice(productIndex, 1);
  }
  saveCart();
  renderCartItems();
} 

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}