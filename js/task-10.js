const input = document.querySelector('input[type="number"]');

const btnCreate = document.querySelector('[data-create="1"]')
// console.log(btnCreate);
const btnDestroy = document.querySelector('[data-destroy="2"]')
// console.log(btnDestroy);

const boxes = document.querySelector('#boxes');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const amount = input.value;
// console.log(amount);

function createBoxes(amount) {

console.log(amount);

  for (let i = 0; i < amount; i += 1) {
    const widthBox = 30;
    const hightBox = 30;
    const box = document.createElement('div');
    box.setAttribute(width, widthBox);
    box.setAttribute(hight, hightBox);
    
  
  }
  boxes.after(box);
};

btnCreate.addEventListener('click', createBoxes);