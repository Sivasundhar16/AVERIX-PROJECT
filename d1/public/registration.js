document
  .getElementById("registration-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;

    if (name && course) {
      alert(`${name} has been registered for ${course}!`);
      this.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
