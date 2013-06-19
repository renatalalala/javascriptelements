$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());
  var $todoList = $(".todo_list");
  var $input = $('input.todo');
  function bindEvents() {
    $(".add").on('click', function() {
      addTodo($input.val());
      $input.val("");
      return false;
    });
    $todoList.on("click", ".delete", function(evt) {
      deleteTodo($(evt.target).parents('.todo'));
      return false;
    });
    $todoList.on('click', ".complete", function(evt) {
      completeTodo($(evt.target).parents('.todo'));
      return false;

    });
  }

  function addTodo(todo) {
    if (todo) {
      $todoList.append(buildTodo(todo));
    }
  }


  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }

  function deleteTodo($todo) {
    $todo.remove();
  }

  function completeTodo($todo) {
    console.log($todo.toggleClass('complete'));
  }

  bindEvents();
  //TODO REMOVE ME
  addTodo("test1");
  addTodo("test2");

});
