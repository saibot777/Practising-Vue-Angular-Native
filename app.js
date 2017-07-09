

document.addEventListener('DOMContentLoaded', function () {

    new Vue({
        el: '#app',
        data: {
            todos: [],
            userInput: ''
        },
        methods: {
            addTodo: function() {
                if(this.userInput.trim() == ''){
                    return;
                }
                var newTodo = {
                    id: _.uniqueId(), 
                    value: this.userInput
                };
                this.todos.push(newTodo);
                console.log(this.todos);
            },
            removeTodo: function(todo) {
                var id = todo.id;
                for (var i = 0; i < this.todos.length; i++) {
                    if(this.todos[i].id ==id) {
                        this.todos.splice(i, 1);
                        break;
                    }
                }
            }
        }
    });
    // var inputEl = $('#myinput');
    // var buttonEl = $('#btn');
    // var ulEl = $('#list');

    // var todos = [];

    // buttonEl.click(addTodo);

    // function addTodo() {
    //     var userInput = inputEl.val();

    //     if(userInput.trim() == '') {
    //         return;
    //     }

    //     var newTodo = {id: _.uniqueId(), value: userInput };

    //     todos.push(newTodo);
    //     $('<li>' + userInput + '</li>')
    //         .appendTo(ulEl)
    //         .attr('dataset-id', newTodo.id)
    //         .click(removeTodo);
    //     console.log(todos);
    // }

    // function removeTodo(event) {
    //     var clickedLi = $(this);
    //     var itemId = clickedLi.attr('dataset-id');
    //     for (var i = 0; i < todos.length; i++) {
    //         if(todos[i].id == itemId) {
    //             todos.splice(i, 1);
    //             break;
    //         }
    //     }
    //     clickedLi.remove();
    //     console.log(todos);
    // }
});




