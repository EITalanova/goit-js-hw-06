const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const nameColor = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const onChangeColor = event => {
  body.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = getRandomHexColor();
};

changeColorBtn.addEventListener('click', onChangeColor);