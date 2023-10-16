let email = document.querySelector("[name='email']");
let pass = document.querySelector("[name='password']");

document.forms[0].onsubmit = function (e) {
    let emailValid = false;
    let passValid = false;

    // Check if email is not empty
    if (email.value.trim() !== "") {
        emailValid = true;
    }

    if (pass.value.length >= 6) {
        passValid = true;
    }

    if (emailValid && passValid) {
        alert('Login successful');
        window.location.href = 'index.html';
    } else {
        alert('Please enter a valid email and password');
        e.preventDefault();
    }
    
};


