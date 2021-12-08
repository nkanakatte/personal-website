const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const myButtonElement = document.getElementById("myButton");
const errormsg = 'should contain only Alphabets and length should be greater than 2.'


navLink.forEach(n => n.addEventListener("click", closeMenu));
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/* Event Listener for the submit button*/
myButtonElement.addEventListener('click', function (event) {
    if (!validateInput(document.getElementById('firstName'))) {
        document.getElementById('error-firstname').innerHTML = " Name " + errormsg;
        event.preventDefault();
    }
    else {
        document.getElementById('error-firstname').innerHTML = "";
    }
    if (!validateInput(document.getElementById('email'))) {
        document.getElementById('error-email').innerHTML = " Email " + errormsg;
        event.preventDefault();
    }
    else {
        document.getElementById('error-email').innerHTML = "";
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
    let letters = /^[A-Za-z]+$/;
    if (enteredVal.value.match(letters)) {
        return true;
    }
    else {
        return false;
    }
}
function validateMessage(enteredVal) {
    // Validating if the value is not null and greater than 1 character
    if (enteredVal.value.length < 1 || enteredVal.value === "") {
        return false;
    }
}