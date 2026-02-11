// Signup validation
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let valid = true;

    // Name validation
    if (name === "") {
      document.getElementById("nameError").innerText = "Name is required";
      valid = false;
    } else {
      document.getElementById("nameError").innerText = "";
    }

    // Email validation
    if (email === "") {
      document.getElementById("emailError").innerText = "Email is required";
      valid = false;
    } else {
      document.getElementById("emailError").innerText = "";
    }

    // Password validation
    if (password.length < 6) {
      document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
      valid = false;
    } else {
      document.getElementById("passwordError").innerText = "";
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      document.getElementById("confirmError").innerText = "Passwords do not match";
      valid = false;
    } else {
      document.getElementById("confirmError").innerText = "";
    }

    if (valid) {
      alert("Signup successful!");
      signupForm.reset();
    }
  });
}

// Login validation
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    let valid = true;

    if (email === "") {
      document.getElementById("loginEmailError").innerText = "Email is required";
      valid = false;
    } else {
      document.getElementById("loginEmailError").innerText = "";
    }

    if (password === "") {
      document.getElementById("loginPasswordError").innerText = "Password is required";
      valid = false;
    } else {
      document.getElementById("loginPasswordError").innerText = "";
    }

    if (valid) {
      alert("Login successful!");
      loginForm.reset();
    }
  });
}
