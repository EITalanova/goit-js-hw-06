
const input = document.querySelector('#validation-input');

const validationInputHandler = (event) => {
    if (event.currentTarget.value.length  < 6 || event.currentTarget.value.length > 6) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    } else {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
};

input.addEventListener("blur", validationInputHandler);