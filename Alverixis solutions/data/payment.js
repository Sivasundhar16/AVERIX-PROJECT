document.addEventListener("DOMContentLoaded", function () {
  const payments = [
    {
      name: "John Doe",
      course: "Python Basics",
      paid: "$200",
      balance: "$50",
      status: "Pending",
    },
    {
      name: "Jane Smith",
      course: "JavaScript",
      paid: "$300",
      balance: "$0",
      status: "Paid",
    },
  ];

  const tableBody = document.getElementById("payment-table");

  payments.forEach((payment) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${payment.name}</td>
      <td>${payment.course}</td>
      <td>${payment.paid}</td>
      <td>${payment.balance}</td>
      <td>${payment.status}</td>
    `;
    tableBody.appendChild(row);
  });
});
