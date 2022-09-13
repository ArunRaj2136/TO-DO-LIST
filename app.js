/////selectors////////
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

///////////event handlers/////////
todoButton.addEventListener("click", addtodo);

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
}