// function to toggle password visibility
function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eye-icon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}

// Predefined username and password = "Ryan1211" and password = "Ryan1#"
const savedUsername = "Ryan1211";
const savedPassword = "Ryan1#";

// Get the form element
const form = document.getElementById("loginForm");

// Add event listener to handle the form submission
form.addEventListener("submit", function (event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the entered username and password
  const inputUsername = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;

  // Check if the entered username and password match the saved ones
  if (inputUsername === savedUsername && inputPassword === savedPassword) {
    // If credentials match, redirect to a success page
    window.location.href = "account.html";
  } else {
    // If credentials do not match, display an error message
    Toastify({
      text: "Wrong username or password.",
      duration: 3000, // Duration in milliseconds
      gravity: "bottom", // Position of the toast
      backgroundColor: "#ff6347", // Background color
    }).showToast();
  }
});
