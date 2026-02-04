$(document).ready(function() {
    
    const cookieData = getCookie('todo_list');
    if (cookieData) {
        const todos = JSON.parse(cookieData);
        $.each(todos, function(index, value) {
            createTodoElement(value);
        });
    }

    $("#newBtn").click(function() {
        const text = prompt("Enter new TO DO:");
        if (text && text.trim() !== "") {
            createTodoElement(text);
            saveTodoList();
        }
    });

    function createTodoElement(text) {
        const $div = $('<div>').text(text).addClass('todo-item');

        $div.click(function() {
            if (confirm("Do you want to remove this TO DO?")) {
                $(this).remove(); 
                saveTodoList();   
            }
        });

        
        $('#ft_list').prepend($div);
    }

    function saveTodoList() {
        const todos = [];
        $('#ft_list').children().each(function() {
            todos.unshift($(this).text());
        });
        setCookie('todo_list', JSON.stringify(todos), 7);
    }

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
});