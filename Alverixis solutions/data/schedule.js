document.addEventListener("DOMContentLoaded", function () {
  const schedules = [
    { course: "Python Basics", date: "March 5, 2025", time: "10:00 AM" },
    { course: "JavaScript", date: "March 7, 2025", time: "2:00 PM" },
    { course: "HTML & CSS", date: "March 9, 2025", time: "4:00 PM" },
  ];

  const grid = document.getElementById("schedule-grid");

  schedules.forEach((schedule) => {
    const div = document.createElement("div");
    div.classList.add("schedule-box");

    div.innerHTML = `
      <h3>${schedule.course}</h3>
      <p>Date: ${schedule.date}</p>
      <p>Time: ${schedule.time}</p>
    `;

    grid.appendChild(div);
  });
});
