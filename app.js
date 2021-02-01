//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

//FUNCTIONS
//function of addTodo
function addTodo(event){
    //console.log("hello");
    //prevent form from submitting
    event.preventDefault(); 
    //console.log('hello');

    //todo DIV 
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create list
    const newTodo = document.createElement("li");
    newTodo.innerText =todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //CHECKMARK BUTTON
    const todoCheck = document.createElement('button');
    todoCheck.innerHTML='<i class="fas fa-check"> </i>';
    todoCheck.classList.add("complete-btn");
    todoDiv.appendChild(todoCheck);

    //DELETE BUTTON
    const todoTrash = document.createElement('button');
    todoTrash.innerHTML='<i class="fas fa-trash"> </i>';
    todoTrash.classList.add("trash-btn");
    todoDiv.appendChild(todoTrash);
    
    //APPEND TO LIST
    todoList.appendChild(todoDiv);

    //CLEAR TODO INPUT VALUE
    todoInput.value=""; 
}

//deletecheck function
function deleteCheck(e)
{
    const item = e.target;
    
    //DELETE TODO
    if(item.classList[0]==="trash-btn")
    {
        //item.remove(); //deletes trash button
         const todo=item.parentElement; //DOM traversal Method
         todo.classList.add('fall');
         todo.addEventListener('transitionend',function(){
            todo.remove();
         });
    }

    // CHECK MARK
    if(item.classList[0]==="complete-btn")
    {
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    console.log(e.target.value);
    todos.forEach(function(todo) 
    {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains('completed')) {
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