const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./database"); // Make sure your database connection works

const app = express();
app.use(bodyParser.json());

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM students_details WHERE email = ? AND password = ?";
  connection.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.json({ success: false, message: "Database error." });
    }

    if (results.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: "Invalid credentials." });
    }
  });
});

// Static files (to serve first.html and other pages)
app.use(express.static(__dirname + "/public")); // Make sure first.html is inside /public

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
