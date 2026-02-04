const ft_list = document.getElementById('ft_list');

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
    }
    return null;
}

function saveTodoList() {
    const todos = [];
    const items = ft_list.children;
    for (let i = 0; i < items.length; i++) {
        todos.unshift(items[i].innerHTML); 
    }
    setCookie('todo_list', JSON.stringify(todos), 7);
}

function createTodoElement(text) {
    const div = document.createElement('div');
    div.innerHTML = text;
    div.className = 'todo-item'; 

    div.onclick = function() {
        if (confirm("Do you want to remove this TO DO?")) {
            this.remove(); 
            saveTodoList(); 
        }
    };

    ft_list.prepend(div);
}

function newTodo() {
    const text = prompt("Enter new TO DO:");
    if (text && text.trim() !== "") {
        createTodoElement(text);
        saveTodoList(); 
    }
}

window.onload = function() {
    const cookieData = getCookie('todo_list');
    if (cookieData) {
        const todos = JSON.parse(cookieData);
        for (let i = 0; i < todos.length; i++) {
            createTodoElement(todos[i]);
        }
    }
};