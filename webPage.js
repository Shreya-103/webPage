const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function validateForm() {
  let emailValid = emailInput.checkValidity();  
  let passwordValid = passwordInput.value !== "";

  emailError.textContent = emailValid ? "" : "Enter a valid email";
  passwordError.textContent = passwordValid ? "" : "Password is required";

  submitBtn.disabled = !(emailValid && passwordValid);
}

emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);
