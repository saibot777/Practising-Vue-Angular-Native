

document.addEventListener('DOMContentLoaded', function () {
    var inputEl = $('#myinput');
    var buttonEl = $('#btn');
    var ulEl = $('#list');

    var todos = [];

    buttonEl.click(addTodo);

    function addTodo() {
        var userInput = inputEl.val();

        if(userInput.trim() == '') {
            return;
        }

        var newTodo = {id: Math.random(), value: userInput };

        todos.push(newTodo);
        $('<li>' + userInput + '</li>')
            .appendTo(ulEl)
            .attr('dataset-id', newTodo.id)
            .click(removeTodo);
        console.log(todos);
    }

    function removeTodo(event) {
        var clickedLi = $(this);
        var itemId = clickedLi.attr('dataset-id');
        for (var i = 0; i < todos.length; i++) {
            if(todos[i].id == itemId) {
                todos.splice(i, 1);
                break;
            }
        }
        clickedLi.remove();
        console.log(todos);
    }
});




