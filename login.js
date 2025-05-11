document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('login-message');

  if (email === "admin@library.com" && password === "123456") {
    message.style.color = "rgb(100, 220, 100)";
    message.textContent = "Login successful! Redirecting...";

    localStorage.setItem("user", JSON.stringify({ email: email }));

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    message.style.color = "rgb(255, 80, 80)";
    message.textContent = "Invalid email or password.";
  }
});
