let createButton = document.querySelector('#create-account');
if (createButton) {
    console.log("success!");
}

let errorTextAdded = false;
function checkPassword() {

    let password = document.querySelector('#password');
    let confirmPassword = document.querySelector('#confirm-password');

    password.classList.add('submitted');
    confirmPassword.classList.add('submitted');
    if (password.value != confirmPassword.value) {
        
        if (errorTextAdded == false) {
            password.classList.add('mismatch');
    confirmPassword.classList.add('mismatch');
            const errorText = document.createElement('div');
            const errorTextNode = document.createTextNode('* Passwords do not match');
            errorText.style.fontSize = '0.8rem';
            errorText.style.color = 'red';
            errorText.appendChild(errorTextNode);
            password.parentNode.insertBefore(errorText, password.nextSibling); // insert errorText after password input field
            errorTextAdded = true;
        }
        
        return false;
    }
    else {
        return true;
    }
}