document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');

    const email = document.getElementById('email');
    const country = document.getElementById('country');
    const zip = document.getElementById('zip');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const formError = document.getElementById('formError');

    const emailError = document.getElementById('emailError');
    const countryError = document.getElementById('countryError');
    const zipError = document.getElementById('zipError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // The form.checkValidity() method is a built-in JavaScript method for HTML forms. 
        // It checks the validity of all form elements (e.g., <input>, <select>, <textarea>) and returns a Boolean value (true or false).
        if (!form.checkValidity() || password.value !== confirmPassword.value) {
            formError.style.display = 'block';
            validateField(email, emailError);
            validateField(country, countryError);
            validateField(zip, zipError);
            validateField(password, passwordError);
            validateField(confirmPassword, confirmPasswordError);
        } else {
            formError.style.display = 'none';
            alert('High five!');
        }
    });

    email.addEventListener('input', () => validateField(email, emailError));
    country.addEventListener('input', () => validateField(country, countryError));
    zip.addEventListener('input', () => validateField(zip, zipError));
    password.addEventListener('input', () => validateField(password, passwordError));
    confirmPassword.addEventListener('input', () => validateField(confirmPassword, confirmPasswordError));

    function validateField(field, errorField) {
        //The validity property of a form element returns a ValidityState object, which contains information about the validity state of the element. 
        // The valid property of this ValidityState object is a Boolean that indicates whether the element meets all its validation constraints.
        if (!field.validity.valid) {
            errorField.style.display = 'block';
        } else {
            errorField.style.display = 'none';
        }
    }
});