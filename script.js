// Взаимодействие с товарами
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', () => {
    // Переключаем класс selected
    item.classList.toggle('selected');
    // Переключаем класс cracked для трещин
    item.classList.toggle('cracked');
  });
});
