const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my Express server!");
});
app.get("/about", (req, res) => {
    res.send("About page: this server was built while learning Express.js.");
  });
  
  app.get("/contact", (req, res) => {
    res.send("Contact us at: t.sibo@alustudent.com");
  });
  
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
