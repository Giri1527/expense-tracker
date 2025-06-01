const express = require('express');
const app = express();
app.use(express.json());

let expenses = [];

app.post('/expenses', (req, res) => {
  const { amount, description } = req.body;
  expenses.push({ amount, description });
  res.status(201).json({ message: "Expense added" });
});

app.get('/expenses', (req, res) => {
  res.json(expenses);
});

app.listen(3000, () => console.log('Expense Service on 3000'));
