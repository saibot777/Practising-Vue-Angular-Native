

document.addEventListener('DOMContentLoaded', function () {
    var inputEl = document.getElementById('myinput');
    var buttonEl = document.getElementById('btn');
    var ulEl = document.getElementById('list');
    buttonEl.addEventListener('click', addTodo);

    function addTodo() {
        var userInput = inputEl.value;

        if(userInput.trim() == '') {
            return;
        }

        var todoLi = document.createElement('LI');
        todoLi.textContent = userInput;
        todoLi.addEventListener('click', removeTodo);
        ulEl.appendChild(todoLi);
    }

    function removeTodo(event) {
        var clickedLi = event.target;
        clickedLi.parentNode.removeChild(clickedLi);
    }
});




