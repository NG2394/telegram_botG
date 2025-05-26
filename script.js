const products = document.querySelectorAll('.product-card');
const cartBar = document.getElementById('cart-bar');
const cartCount = document.getElementById('cart-count');

let cart = new Set();

products.forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.id;
    if (cart.has(id)) {
      cart.delete(id);
      card.classList.remove('selected');
    } else {
      cart.add(id);
      card.classList.add('selected');
    }
    updateCart();
  });
});

function updateCart() {
  const count = cart.size;
  if (count > 0) {
    cartBar.classList.remove('hidden');
    cartCount.textContent = count;
  } else {
    cartBar.classList.add('hidden');
  }
}
