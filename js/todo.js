const todoForm = document.getElementById("todo_form");
const todoInput = document.querySelector("#todo_form input");
const todoList = document.getElementById("todo_list");

let todoArray = [];

function saveToDos() {
    localStorage.setItem(todos, JSON.stringify(todoArray));
}

function deleteOne(e) {
    const li = e.target.parentElement;
    console.log(li.id);
    li.remove();
    todoArray = todoArray.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function showingTodo(newone) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newone.text;
    button.innerText = '✔︎';
    button.addEventListener("click", deleteOne);
    li.id = newone.id;
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}
function todoSubmit(e) {
    e.preventDefault();
    const newone = todoInput.value;
    todoInput.value = "";
    const newoneObj = {
        text: newone,
        id: Date.now(),
    };
    todoArray.push(newoneObj);
    showingTodo(newoneObj);
    saveToDos();
}

todoForm.addEventListener("submit", todoSubmit);

const savedTodos = localStorage.getItem(todos);
if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todoArray = parsedTodos;
    parsedTodos.forEach(showingTodo);
}