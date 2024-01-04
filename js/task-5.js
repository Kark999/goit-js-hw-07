const colorBtnChange = document.querySelector(".change-color");
const colorSpanChange = document.querySelector(".color");
const bodyColorChange = document.body;

colorBtnChange.addEventListener("click", onChangeColor);

function onChangeColor() {
  const newColor = getRandomHexColor();

  bodyColorChange.style.backgroundColor = newColor;
  colorSpanChange.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
