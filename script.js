window.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");

  // Волна — задержка от центра
  items.forEach((item, i) => {
    setTimeout(() => {
      item.classList.add("animate");
    }, i * 100);
  });

  // Снять класс после анимации
  setTimeout(() => {
    items.forEach(item => item.classList.remove("animate"));
  }, 2000);

  // Клик по иконке
  items.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("selected");
    });
  });
});
