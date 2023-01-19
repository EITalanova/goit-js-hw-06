const userName = document.querySelector('#name-output');
const inputUserName = document.querySelector('#name-input');

const userNameHandler = (event) => {
    event.currentTarget.value === '' ? userName.textContent = 'Anonymous' : userName.textContent = event.currentTarget.value;

};

inputUserName.addEventListener("input", userNameHandler);