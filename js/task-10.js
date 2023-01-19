const input = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function createBoxes(amount) {
  amount = input.value;
  boxes.innerHTML = '';
    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement('div');
      const size = 30 + i * 10 + "px";
      box.style.backgroundColor = getRandomHexColor();
      box.style.height = size;
      box.style.width = size;

       boxes.append(box);
    }
};
  
function destroyBoxes() {
  boxes.innerHTML = '';
}
btnCreate.addEventListener('click', createBoxes);
btnDestroy .addEventListener('click', destroyBoxes);