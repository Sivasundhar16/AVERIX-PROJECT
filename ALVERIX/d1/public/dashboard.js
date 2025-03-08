document.addEventListener("DOMContentLoaded", function () {
  const progressData = [
    { course: "Python Basics", progress: 80 },
    { course: "JavaScript Fundamentals", progress: 60 },
    { course: "Data Structures", progress: 50 },
  ];

  const progressContainer = document.getElementById("progress-container");

  progressData.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("progress");

    div.innerHTML = `
      <h3>${item.course}</h3>
      <div class="progress-bar" style="width: ${item.progress}%; background: #ff9800;">${item.progress}%</div>
    `;

    progressContainer.appendChild(div);
  });
});
