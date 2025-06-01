const express = require('express');
const app = express();
app.use(express.json());

let expensesByUser = {}; // { userId: [{amount, description}] }

app.post('/expenses', (req, res) => {
  const { user_id, amount, description } = req.body;
  if (!user_id) return res.status(400).json({ message: "user_id required" });

  if (!expensesByUser[user_id]) expensesByUser[user_id] = [];
  expensesByUser[user_id].push({ amount, description });
  res.status(201).json({ message: "Expense added" });
});

app.get('/expenses/:user_id', (req, res) => {
  const user_id = req.params.user_id;
  res.json(expensesByUser[user_id] || []);
});

app.listen(3000, () => console.log("Expense service running on 3000"));
