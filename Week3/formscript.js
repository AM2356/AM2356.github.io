// Assign constants for form elements and error message placeholders
const form = document.getElementById("registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPassError = document.getElementById("confirm-password-error");

// Add event listeners for real-time form validation
username.addEventListener("blur", validateUsername);
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);

// Form submission event listener
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
        alert("Form submitted successfully!");
        // Message displayed upon submission of form
    }
});

// Validation function for username field 
function validateUsername() {
    if (username.value === "") {
        setError(username, usernameError, "Username is required");
    } else {
        setSuccess(username, usernameError);
    }
}
// Function for Email input field validation
function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.value === "") {
        setError(email, emailError, "Email is required");
    } else if (!emailPattern.test(email.value)) {
        setError(email, emailError, "Enter a valid email address");
    } else {
        setSuccess(email, emailError);
    }
}
// Function for password input field validation
function validatePassword() {
    if (password.value === "") {
        setError(password, passwordError, "Password is required");
    } else if (password.value.length < 8) {
        setError(password, passwordError, "Password must be at least 8 characters");
    } else {
        setSuccess(password, passwordError);
    }
}
//Function for password confirmation validation
function validateConfirmPassword() {
    if (confirmPassword.value === "") {  //No input for confirm password
        setError(confirmPassword, confirmPassError, "Please confirm your password");
    } else if (confirmPassword.value !== password.value) { // Value of confirm password does not match with initial password
        setError(confirmPassword, confirmPassError, "Passwords do not match");
    } else {
        setSuccess(confirmPassword, confirmPassError);
    }
}

// Function to validate the whole form
function validateForm() {
    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    return (
        //Checking if the error text for these error elements is empty.
        usernameError.textContent === "" &&
        emailError.textContent === "" &&
        passwordError.textContent === "" &&
        confirmPassError.textContent === ""
    );
}
// Function to set denote errors and successes
function setError(input, errorElement, errorMessage) {
    input.classList.remove("success");
    input.classList.add("error");
    errorElement.textContent = errorMessage;
}

function setSuccess(input, errorElement) {
    input.classList.remove("error");
    input.classList.add("success");
    errorElement.textContent = "";
}
