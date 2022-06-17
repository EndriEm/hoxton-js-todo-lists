function listUsers() {
  let greeting = "";

  for (let user of users) {
    let name = user.name;

    let id = user.id;

    let city = user.address.city;

    greeting += `Id: ${id} Name: ${name} City: ${city}\n\n`;
  }

  alert(greeting);
}

function getUserId() {
  let userId = Number(prompt("Enter your user id"));
  return userId;
}

function findUser() {
  let theUser = null;

  for (let user of users) {
    if (user.id === userId) {
      theUser = user;
      break;
    }
  }

  return theUser;
}

function findTodos() {
  let theTodos = [];

  for (let todo of todos) {
    if (todo.userId === userId) {
      theTodos.push(todo);
    }
  }

  return theTodos;
}

function showUserTodos() {
  let finalMessage = "";

  finalMessage += `Hello ${user.username}:\n\n`;

  for (let todo of userTodos) {
    finalMessage += `- ${todo.title}\n`;
  }

  alert(finalMessage);
}

listUsers();
let userId = getUserId();
let user = findUser();
let userTodos = findTodos();
showUserTodos();
