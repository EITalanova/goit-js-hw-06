const form = document.querySelector('.login-form');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');

const formHandler = (event) => {
    event.preventDefault();
    const {
        elements: { email, password } } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Всі поля повинні бути заповнені!');
    } else {
        console.log((`Email: ${email.value}, Password: ${password.value}`));
        event.currentTarget.reset();
    }
};

form.addEventListener("submit", formHandler);
