// Selection
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditButton = document.querySelector("#cancel-edit-btn");

let oldInputValue;

// Functions
const saveTodo = (Text) => {

    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = Text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn);

    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove-todo")
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(removeBtn);

    todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();
};

const toggleForms = () => {

    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
};

const updateTodo = (text) => {

    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        
        let todoTitle = todo.querySelector("h3");

        console.log(todoTitle, text);

        if (todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text;
        }
    });
};

// Events
todoForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue);
    }
});

document.addEventListener("click", (e) => {

    const targetEL = e.target;
    const parentEL = targetEL.closest("div");
    let todoTitle;

    if (parentEL && parentEL.querySelector("h3")) {
        todoTitle = parentEL.querySelector("h3").innerText;
    }

    if (targetEL.classList.contains("finish-todo")) {
        parentEL.classList.toggle("done");
    }

    if (targetEL.classList.contains("remove-todo")) {
        parentEL.remove();
    }

    if (targetEL.classList.contains("edit-todo")) {
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
});

cancelEditButton.addEventListener("click", (e) => {

    e.preventDefault();

    toggleForms();
});

editForm.addEventListener("click", (e) => {

    e.preventDefault()

    const editInputValue = editInput.value
    if (editInputValue) {
        updateTodo(editInputValue)
    }

    toggleForms()
});
