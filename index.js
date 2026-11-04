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
app.get("/users", (req, res) => {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];
  
    res.json(users);
  });
  app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    res.send(`You requested the user with ID: ${id}`);
  });
  app.get("/search", (req, res) => {
    const name = req.query.name;
  
    if (!name) {
      return res.send("Please provide a name, e.g. /search?name=alice");
    }
  
    res.send(`You searched for: ${name}`);
  });
  