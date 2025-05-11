document.getElementById("signinForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const remember = document.getElementById("remember").checked;

  if (username === "" || password === "") {
    alert("Please fill in both fields.");
    return;
  }

  if (remember) {
    localStorage.setItem("savedUser", username);
  } else {
    localStorage.removeItem("savedUser");
  }

  alert("Signed in successfully!");
  window.location.href = "welcome.html";
});

window.onload = function() {
  const savedUser = localStorage.getItem("savedUser");
  if (savedUser) {
    document.getElementById("username").value = savedUser;
    document.getElementById("remember").checked = true;
  }
};
