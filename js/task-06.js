const input = document.querySelector('#validation-input');

const validationInputHandler = (event) => {
    if (event.currentTarget.value.length < input.getAttribute('data-length')) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    } else {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
};

input.addEventListener("blur", validationInputHandler);