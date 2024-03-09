import { registerUser } from "./authentication.mjs";


var registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener('submit', async function(event){
    event.preventDefault();
    const username = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    const confirmPassword = document.getElementById("confirmPasswordInput").value;
    const errorMessage = document.getElementById("errorMessage");
    const emailValidationError = document.getElementById("emailValidationError");

    if (password.length < 8) {
        errorMessage.textContent = "password must be at least 8 characters long";
        return false;
    }
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match";
        return false;
    }
    const emailRegex = /^[A-Za-z0-9._%+-]+@(noroff\.no|stud\.noroff\.no)$/;
    if (!emailRegex.test(email)) {
        emailValidationError.textContent = "Please enter a valid email address ending with @noroff.no or @stud.noroff.no";
        return false;
    }
    var response = await registerUser(username, email, password);
    if (response.data) {
        window.location.href = "../index.html";
      } else {
        console.log("Registration failed");
      }
});