function addExpense() {
  const amount = document.getElementById("amount").value;
  const description = document.getElementById("description").value;

  fetch("/api/expenses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount, description })
  }).then(() => alert("Expense added!"));
}

function loadExpenses() {
  fetch("/api/expenses")
    .then(res => res.json())
    .then(data => {
      const ul = document.getElementById("expenses");
      ul.innerHTML = "";
      data.forEach(e => {
        ul.innerHTML += `<li>${e.description}: ₹${e.amount}</li>`;
      });
    });
}
