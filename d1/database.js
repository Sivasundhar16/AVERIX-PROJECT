const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // Update if your DB user is different
  password: "", // Add your password if needed
  database: "student_db",
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.stack);
    return;
  }
  console.log("✅ Connected to MySQL Database");
});

module.exports = connection;
