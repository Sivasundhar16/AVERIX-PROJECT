document.addEventListener("DOMContentLoaded", function () {
  const courses = [
    {
      title: "Python Basics",
      videos: 10,
      link: "https://youtu.be/F11fJgsT7mo?si=Rj5QqWCFaSvMpar8",
    },
    {
      title: "JavaScript Fundamentals",
      videos: 8,
      link: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
    },
    {
      title: "HTML & CSS",
      videos: 12,
      link: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    },
  ];

  const grid = document.getElementById("course-grid");

  courses.forEach((course) => {
    const div = document.createElement("div");
    div.classList.add("course");

    div.innerHTML = `
      <h3>${course.title}</h3>
      <p>Videos: ${course.videos}</p>
      <button onclick="window.open('${course.link}', '_blank')">Watch Now</button>
    `;

    grid.appendChild(div);
  });
});
