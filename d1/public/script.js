function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    document.getElementById("error").innerText = "Both fields are required.";
    return;
  }

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Login successful!");
        window.location.href = "first.html"; // Redirect to first.html
      } else {
        document.getElementById("error").innerText =
          "Invalid email or password.";
      }
    })
    .catch(() => {
      document.getElementById("error").innerText =
        "Server error. Please try again.";
    });
}
