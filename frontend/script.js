function getUserId() {
  return localStorage.getItem("user_id");
}

function register() {
  const username = document.getElementById("username").value;
  fetch("/api/users/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username })
  })
  .then(res => res.json())
  .then(data => {
    localStorage.setItem("user_id", data.id);
    alert("Registered as " + username);
  });
}

function login() {
  const username = document.getElementById("username").value;
  fetch("/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username })
  })
  .then(res => res.json())
  .then(data => {
    localStorage.setItem("user_id", data.id);
    alert("Logged in as " + username);
  });
}

function addExpense() {
  const amount = document.getElementById("amount").value;
  const description = document.getElementById("description").value;
  const user_id = getUserId();

  fetch("/api/expenses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id, amount, description })
  }).then(() => alert("Expense added!"));
}

function loadExpenses() {
  const user_id = getUserId();
  fetch(`/api/expenses/${user_id}`)
    .then(res => res.json())
    .then(data => {
      const ul = document.getElementById("expenses");
      ul.innerHTML = "";
      data.forEach(e => {
        ul.innerHTML += `<li>${e.description}: Rs. ${e.amount}</li>`;
      });
    });
}
