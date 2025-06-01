const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id: 1, name: "Admin" }];

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(3000, () => console.log('User Service on 3000'));
