// PART Todolist

const task = document.querySelector("#task");
const inputTilte = document.querySelector("#inputTitle");

let biggerId = 0;
for (let i = 0; i < localStorage.length; i++) {
  if (localStorage.key(i) > biggerId) {
    biggerId = parseInt(localStorage.key(i));
  }
}

let idInputBox = biggerId;
let id2 = biggerId;
let todoListId = biggerId;

const addTodo = document.querySelector("#addTodo");
addTodo.addEventListener("click", function () {
  
  const inputBox = document.createElement("div");
  const title = document.createElement("h3");
  const input = document.createElement("input");
  const btn = document.createElement("button");
  const tilteValue = inputTilte.value;
  let todoList = [];

  inputTilte.value = "";
  id2++;
  todoListId++;
  idInputBox++;

  inputBox.classList.add("inputBox");
  inputBox.id = idInputBox;
  title.style.textAlign = "center";
  title.style.color = "rgb(219, 65, 173)";
  title.innerHTML = tilteValue;
  btn.type = "submit";
  btn.innerHTML = "add";
  btn.id = id2;
  input.type = "text";
  input.placeholder = "Title Task";
  input.className = "task";
  todoList.id = todoListId;


  const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn");
    btnDelete.innerHTML = "Delete List";
    btnDelete.id = id2;
    btnDelete.addEventListener("click", function () {
      this.parentElement.remove();
      localStorage.removeItem(this.id);
    });
  
  inputBox.style.width = "max-content";
  inputBox.prepend(title);
  inputBox.prepend(btn);
  inputBox.prepend(input);
  inputBox.prepend(btnDelete);
  task.appendChild(inputBox);

  console.log(todoList);
  let taskId = 0;
  btn.addEventListener("click", function () {
    const newTask = document.createElement("li");
    const id = this.id;

    taskId++;
    newTask.innerHTML = input.value;
    newTask.title = input.value;
    newTask.id = taskId;
    newTask.style.backgroundColor = "rgb(219, 65, 173)";
    newTask.style.opacity = "1";
    newTask.style.color = "white";
    inputBox.appendChild(newTask);
    newTask.done = false;
    input.value = "";

    newTask.addEventListener("click", function () {
      if (this.style.opacity === "1") {
        this.style.opacity = "0.5";
        this.style.textDecoration = "line-through";
        this.done = true;

        let todoList = JSON.parse(localStorage.getItem(id));
        for(i=0; i<todoList.todoListTasks.length; i++){
          if(todoList.todoListTasks[i].id == this.id){
            todoList.todoListTasks[i].done = true;
          }
        }
        localStorage.setItem(id, JSON.stringify(todoList));


      } else {
        this.style.opacity = "1";
        this.style.textDecoration = "none";
        this.done = false;
        let todoList = JSON.parse(localStorage.getItem(id));
        // console.log(todoList.todoListTasks.length);
        for(i=0; i<todoList.todoListTasks.length; i++){
          if(todoList.todoListTasks[i].id == this.id){
            todoList.todoListTasks[i].done = false;
          }
        }

        localStorage.setItem(id, JSON.stringify(todoList));
      }
    });

    newTask.addEventListener("dblclick", function () {
      this.remove();
      let todoList = JSON.parse(localStorage.getItem(id));
        for(i=0; i<todoList.todoListTasks.length; i++){
          if(todoList.todoListTasks[i].id == this.id){

            todoList.todoListTasks.splice(i, 1);
          }
        }

        localStorage.setItem(id, JSON.stringify(todoList));
    });

    const task = {
      id: newTask.id,
      title: newTask.title,
      done: newTask.done,
    };

    todoList.push(task);

    const data = {
      id: id2,
      title: tilteValue,
      idInputBox: idInputBox,
      todoListTasks: todoList,
    };

    const dataJson = JSON.stringify(data);
    localStorage.setItem(id2, dataJson, todoList);

  });

  const data = {
    id: id2,
    title: tilteValue,
    idInputBox: idInputBox,
    todoListTasks: todoList,
  };

  const dataJson = JSON.stringify(data);
  localStorage.setItem(id2, dataJson, todoList); 
});

const loadTodo = document.querySelector("#loadTodo");
if (localStorage.length < 1) {
    loadTodo.innerHTML = "No list!! Open the App";
}
const btnForm = document.querySelector("#showForm");
loadTodo.addEventListener("click", function () {
  for (let i = 0; i < localStorage.length; i++) {

    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const data = JSON.parse(value);
    const inputBox = document.createElement("div");
    const tilte = document.createElement("h3");
    const input = document.createElement("input");
    const btn = document.createElement("button");

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn");
    btnDelete.innerHTML = "Delete List";
    btnDelete.id = id2;
    btnDelete.addEventListener("click", function () {
    this.parentElement.remove();
    localStorage.removeItem(key);

  });
  
  
  let id = data.id;
  let todoList = data.todoListTasks;
  let idInputBox = data.idInputBox; 
  let tilteValue = data.title;

  todoList.forEach(function (task) {
    const newTask = document.createElement("li");
    newTask.innerHTML = task.title;
    newTask.title = task.title;
    newTask.id = task.id;
    newTask.done = task.done;
    newTask.style.backgroundColor = "rgb(219, 65, 173)";
    if (task.done === true) {
      newTask.style.opacity = "0.5";
      newTask.style.textDecoration = "line-through";
    }else{
      newTask.style.opacity = "1";
    }

    newTask.style.color = "white";
    inputBox.appendChild(newTask);
    
    newTask.addEventListener("click", function () {
      if (this.style.opacity === "1") {
        this.style.opacity = "0.5";
        this.style.textDecoration = "line-through";
        this.done = true;
        let todoList = JSON.parse(localStorage.getItem(id));
        for(i=0; i<todoList.todoListTasks.length; i++){
          if(todoList.todoListTasks[i].id == this.id){
            todoList.todoListTasks[i].done = true;
          }
        }
        localStorage.setItem(id, JSON.stringify(todoList));
        
        
      } else {
        this.style.opacity = "1";
        this.style.textDecoration = "none";
        this.done = false;
        
        let todoList = JSON.parse(localStorage.getItem(id));
        // console.log(todoList.todoListTasks.length);
        for(i=0; i<todoList.todoListTasks.length; i++){
          if(todoList.todoListTasks[i].id == this.id){
            todoList.todoListTasks[i].done = false;
          }
        }
        // console.log(todoList.todoListTasks);

        localStorage.setItem(id, JSON.stringify(todoList));
      }
    });
    
    newTask.addEventListener("dblclick", function () {
      this.remove();
      let todoList = JSON.parse(localStorage.getItem(id));
        for(i=0; i<todoList.todoListTasks.length; i++){
          if(todoList.todoListTasks[i].id == this.id){

            todoList.todoListTasks.splice(i, 1);
          }
        }

        localStorage.setItem(id, JSON.stringify(todoList));
    });
    
    const data = {
      id: idInputBox,
      title: tilteValue,
      idInputBox: idInputBox,
      todoListTasks: todoList,
    };
    
    const dataJson = JSON.stringify(data);
    
      localStorage.setItem(key, dataJson, todoList);
  });
    
    inputBox.classList.add("inputBox");
    inputBox.id = idInputBox;
    tilte.style.textAlign = "center";
    tilte.style.color = "rgb(219, 65, 173)";
    tilte.innerHTML = tilteValue;
    btn.type = "submit";
    btn.innerHTML = "add Task";
    input.type = "text";
    input.placeholder = "Title Task";
    input.className = "task";
    todoList.id = todoListId;
    
    inputBox.style.width = "max-content";
    inputBox.prepend(tilte);
    inputBox.prepend(btn);
    inputBox.prepend(input);
    inputBox.prepend(btnDelete);
    task.appendChild(inputBox);
    
    let taskId = 0;
    console.log(todoList.length);
    for (let i = 0; i < todoList.length; i++) {
      taskId = parseInt(todoList[i].id);
    }
    btn.addEventListener("click", function () {
      const newTask = document.createElement("li");
      console.log(taskId);
      taskId++;
      newTask.innerHTML = input.value;
      newTask.title = input.value;
      newTask.id  = taskId;
      newTask.style.backgroundColor = "rgb(219, 65, 173)";
      newTask.style.opacity = "1";
      newTask.style.color = "white";
      inputBox.appendChild(newTask);
      input.value = "";

      newTask.addEventListener("click", function () {
        if (this.style.opacity === "1") {
          this.style.opacity = "0.5";
          this.style.textDecoration = "line-through";
        } else {
          this.style.opacity = "1";
          this.style.textDecoration = "none";
        }
      });

      newTask.addEventListener("dblclick", function () {
        this.remove();
        todoList.pop(this);

        const data = {
          id: idInputBox,
          title: tilteValue,
          idInputBox: idInputBox,
          todoListTasks: todoList,
        };

        const dataJson = JSON.stringify(data);

        localStorage.setItem(key, dataJson, todoList);
      });

      const task = {
        id: todoList.length + 1,
        title: newTask.title,
        done: newTask.done,
      };

      todoList.push(task);

      const data = {
        id: idInputBox,
        title: tilteValue,
        idInputBox: idInputBox,
        todoListTasks: todoList,
      };

      const dataJson = JSON.stringify(data);
      localStorage.setItem(key, dataJson, todoList);
    });
  }
  loadTodo.remove();
  btnForm.style.display = "flex";
});

const showForm = () => {
  const form = document.querySelector("#display-add__form");
  const btn = document.querySelector("#showForm");  

  form.classList.toggle("display-none");

  if (form.classList.contains("display-none")) {
    btn.innerHTML = "Show form";
  } else {
    btn.innerHTML = "Hide form";
  }
} 
  