const express = require('express');
const app = express();
app.use(express.json());

let users = []; // { id: 1, username: 'alice' }

app.post('/users/register', (req, res) => {
  const { username } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  const id = users.length + 1;
  users.push({ id, username });
  res.json({ id, username });
});

app.post('/users/login', (req, res) => {
  const { username } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

app.listen(3000, () => console.log("User service running on 3000"));
