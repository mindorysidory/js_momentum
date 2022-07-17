const todoInput = document.querySelector(".todo_input");
const todoList = document.querySelector(".todo_list_list");

function handetodoInputSubmit(todoo){
    todoo.preventDefault();
    const mainFocusForToday = todoInput.lastElementChild.value;
    localStorage.setItem("mainFocusForToday", mainFocusForToday);
    const createList = document.createElement("li");
    createList.innerText = `${mainFocusForToday}`;
    todoList.appendChild(createList);
};

todoInput.addEventListener("submit", handetodoInputSubmit);


