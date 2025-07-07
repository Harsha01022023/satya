function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorEl = document.getElementById("error");

  // Demo login credentials
  const validUsername = "Harsha";
  const validPassword = "Harsha@2023";

  if (username === validUsername && password === validPassword) {
    // ✅ Redirect to next page
    window.location.href = "file:///E:/Dasboard/dashboard.html";
  } else {
    // ❌ Show error message
    error.textContent = "Invalid username or password.";
  }
}