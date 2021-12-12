const myButtonElement = document.getElementById("myButton");
const errormsg = 'should contain only Alphabets and length should be greater than 2.'

/* Event Listener for the submit button*/
myButtonElement.addEventListener('click', function (event) {
    if (!validateInput(document.getElementById('firstName'))) {
        document.getElementById('error-firstname').innerHTML = " Name " + errormsg;
        event.preventDefault();
    }
    else {
        document.getElementById('error-firstname').innerHTML = "";
    }
    if (validateEmail(document.getElementById('email'))) {
        document.getElementById('error-email').innerHTML = "";
    }
    else {
        document.getElementById('error-email').innerHTML = " Please enter a valid Email.";
        event.preventDefault();
    }
    if (!validateMessage(document.getElementById('message'))) {
        document.getElementById('error-message').innerHTML = " Message cannot be empty.";
        event.preventDefault();
    }
    else {
        document.getElementById('error-message').innerHTML = "";
    }
});

/* This function receives a variable and validates if the variable is not null is greater than 2 characters 
    and contains only Alphabets.
*/
function validateInput(enteredVal) {
    // Validating if the value is not null and greater than 2 characters
    if (enteredVal.value.length < 2 || enteredVal.value === "") {
        return false;
    }
    // Validating if the entered text is Alpha only
    let letters = /^[a-zA-Z ]*$/;
    if (enteredVal.value.match(letters)) {
        return true;
    }
    else {
        console.log('here');
        return false;
    }
}
function validateMessage(enteredVal) {
    // Validating if the value is not null and greater than 1 character
    if (enteredVal.value.length < 1 || enteredVal.value === "") {
        return false;
    }
    else {
        return true;
    }
}

/* Validating if the entered email is correct. */
function validateEmail(inputText) {
    var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const email = inputText.value;
    if (email.match(emailformat)) {
        return true;
    }
    else {
        return false;
    }
}