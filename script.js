let selected = null;

function selectProduct(card, name, price) {
  if (selected) {
    selected.classList.remove('selected');
  }
  card.classList.add('selected');
  selected = card;

  const cart = document.getElementById('cart');
  cart.style.display = 'block';
  cart.innerText = `🛒 В корзине: ${name} — ${price}₽`;
}
