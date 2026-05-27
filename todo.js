function addTodo() {
    const input = document.querySelector(".js-todo-input");
    const todoText = input.value.trim();
    const todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : {};

    if (todoText === "") {
        alert("할 일을 입력해주세요!");
        return;
    }

    const todoList = document.querySelector(".todo-list");

    const li = document.createElement("li");

    const p = document.createElement("p");
    p.className = "todo-text";
    p.textContent = todoText;

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.setAttribute("onclick", "editTodo(this)");
    editBtn.textContent = "수정";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.setAttribute("onclick", "deleteTodo(this)");
    deleteBtn.textContent = "삭제";

    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);

    li.appendChild(p);
    li.appendChild(buttonContainer);

    todoList.appendChild(li);

    input.value = "";
    input.focus();
    localStorage.setItem("todos", JSON.stringify({ ...todos, [todoText]: true }));
}

function deleteTodo(button) {
    const li = button.closest("li");
    li.remove();
    const todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : {};
    delete todos[li.querySelector(".todo-text").textContent.trim()];
    localStorage.setItem("todos", JSON.stringify(todos));
}

function editTodo(button) {
    const li = button.closest("li");
    const p = li.querySelector(".todo-text");

    const currentText = p.textContent.trim();
    const newText = prompt("할 일을 수정하세요:", currentText);

    if (newText !== null && newText.trim() !== "") {
        p.textContent = newText.trim();
        const todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : {};
        delete todos[currentText];
        todos[newText.trim()] = true;
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}

function resetTodo() {
    if (confirm("모든 할 일 목록을 초기화하시겠습니까?")) {
        const todoList = document.querySelector(".todo-list");
        todoList.innerHTML = "";
        localStorage.setItem("todos", JSON.stringify({}));
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const todoList = document.querySelector(".todo-list");
    const todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : {};

    todoList.innerHTML = "";

    Object.keys(todos).forEach((todoText) => {
        const li = document.createElement("li");

        const p = document.createElement("p");
        p.className = "todo-text";
        p.textContent = todoText;

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";

        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.setAttribute("onclick", "editTodo(this)");
        editBtn.textContent = "수정";

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.setAttribute("onclick", "deleteTodo(this)");
        deleteBtn.textContent = "삭제";

        buttonContainer.appendChild(editBtn);
        buttonContainer.appendChild(deleteBtn);

        li.appendChild(p);
        li.appendChild(buttonContainer);

        todoList.appendChild(li);
    });

    const input = document.querySelector(".js-todo-input");
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTodo();
        }
    });
});
