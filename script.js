* {
  box-sizing: border-box;
}

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
  overflow: hidden;
}

/* Фоновое видео */
#bg-video {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* Сетка товаров */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  height: 100vh;
  align-content: center;
}

.item {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0,0,0,0.5);
  transition: transform 0.3s ease;
  aspect-ratio: 1 / 1;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
}

.item:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #00f;
}
