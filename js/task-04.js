let counterValue = 0;
const btnIncr = document.querySelector('[data-action="increment"]');
const btnDecr = document.querySelector('[data-action="decrement"]');
const counterEll = document.querySelector('#value');

// Вариант 1
const increment = () => {
    counterValue += 1;
    counterEll.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    counterEll.textContent = counterValue;
};

btnIncr.addEventListener("click", increment);
btnDecr.addEventListener("click", decrement);

// Вариант 2
// btnIncr.addEventListener("click", () => {
//     counterValue += 1;
//     counterEll.textContent = counterValue;
// }
// );

// btnDecr.addEventListener("click", () => {
//     counterValue -= 1;
//     counterEll.textContent = counterValue;
// }
// );