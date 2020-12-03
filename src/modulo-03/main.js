let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

let renderTodos = function () {
  listElement.innerHTML = '';

  for (todo of todos) {
    let todoElement = document.createElement('li');
    let todoText = document.createTextNode(todo);

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');

    let index = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + index + ')');

    let linkText = document.createTextNode('Delete');

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
};

renderTodos();

let addTodo = function () {
  let todoText = inputElement.value;

  todos.push(todoText);

  inputElement.value = '';

  renderTodos();

  saveToStorage;
};

buttonElement.onclick = addTodo;

let deleteTodo = function (index) {
  // from position [index], remove 1 element
  todos.splice(index, 1);

  renderTodos();

  saveToStorage();
};

let saveToStorage = function () {
  localStorage.setItem('list_todos', JSON.stringify(todos));
};
