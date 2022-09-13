/////selectors////////
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".filter-todo");

///////////event handlers/////////
todoButton.addEventListener("click", addtodo);
todoList.addEventListener("click", deleteCheck);
todoFilter.addEventListener("click", filterOption);

///////////functions////////////
function addtodo(e) {
    /////prevent form from submitting///
    e.preventDefault();

    ///////////
    //////////add div/////
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    ////////add li //
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);
    //////add check btn////
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completeButton);
    //////add trash btn///
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);
    /////////////

    /////append this to ul///
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    ///////////delete todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        ////animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }
    //////check mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterOption(e) {
    const todos = todoList.childNodes;
    console.log(todos);
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}