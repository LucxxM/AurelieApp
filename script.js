const darkMode = document.getElementById('dark-mode');

darkMode.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

// PART Counter

function syncDelay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
}

let id = 0; 
function addElement () {
  const newParent = document.getElementById('sectionHome');
  
  var newDiv = document.createElement("div");
  newDiv.classList.add('box-actes');

  
  var newH2 = document.createElement("h2");
  newH2.textContent = prompt('choissez un nom');
  if (newH2.textContent == ''){
    id++;
    newH2.textContent = 'Compteur : ' + id ;
    alert(`Vous n'avez pas choisi de nom, vous avez donc un compteur par défaut`);
  }
  newDiv.appendChild(newH2);
  
  var newInput = document.createElement("input");
  newInput.classList.add('input');
  newInput.type = 'hidden';
  newInput.value = 0;
  newInput.ariaValueMax = prompt('choisir un nombre à atteindre');

  if (newInput.ariaValueMax == ''){
    newInput.ariaValueMax = 10;
    alert('nombre à atteindre par défaut: 10');
  }
  newDiv.appendChild(newInput);

  
  
  var newDiv2 = document.createElement('div');
  newDiv2.classList.add('count-box');
  newDiv2.textContent = newInput.value;
  newDiv.appendChild(newDiv2);
  
  var newBtn = document.createElement('button');
  newBtn.classList.add('btn');
  newBtn.id = 'brnPrepend';
  newBtn.textContent = 'Ajouter un acte';
  newBtn.click = 'onClickBtn()';
  newDiv.appendChild(newBtn);

  const newP = document.createElement('p');
  newP.innerText = 'nombre à atteindre ' + newInput.ariaValueMax;

  newDiv.appendChild(newP);
  
  newParent.prepend(newDiv);
  
  newParent.insertBefore(newDiv, newParent.childNodes[0]);
  document.querySelectorAll('button.btn');
  
}

document.querySelectorAll('button.btn').forEach(function (link){
    link.addEventListener("click", onClickBtn); 
})

function onClickBtn(e){
  
  this.previousElementSibling.previousElementSibling.value ++;
  var countShow = this.previousElementSibling;
  var count = this.previousElementSibling.previousElementSibling.value;
  var maxCount = this.previousElementSibling.previousElementSibling.ariaValueMax;
  var valueMaxDiv = this.nextElementSibling;
  var valueToInsert = maxCount - parseInt(count);
  console.log(maxCount - parseInt(count));
  valueMaxDiv.textContent = "Nombre restant : " + valueToInsert;
  e.preventDefault();
  countShow.textContent = count;

  function random(max){
    return Math.random() * (max - 0) + 0;
  }
  var c = document.createDocumentFragment();

  for (var i=0; i<20; i++) {
    var styles = 'transform: translate3d(' + (random(25) - 0) + 'px, ' + (random(50) - 150) + 'px, 0) rotate(' + random(360) + 'deg);\
                  background: hsla('+random(360)+',100%,50%,1);\
                  animation: bang 800ms ease-out forwards;\
                  opacity: 0';
    var e = document.createElement("i");
    e.style.cssText = styles.toString();
    c.appendChild(e);
  }
  document.getElementById('confetti').appendChild(c);


  if (count == maxCount){
    onClickBtn2();
    countShow.textContent = 'Fini!!!';
    this.classList.add('display-none');
  }

} 

document.addEventListener('click',function(e){ if(e.target && e.target.id == 'brnPrepend'){ document.querySelectorAll('button.btn').forEach(function (link){
  link.addEventListener("click", onClickBtn); 
}) } })

function onClickBtn2(){  

  function random(max){
    return Math.random() * (max - 0) + 0;
  }
  var c = document.createDocumentFragment();

  for (var i=0; i<200; i++) {
    var styles = 'transform: translate3d(' + (random(1000) - 250) + 'px, ' + (random(500) - 150) + 'px, 0) rotate(' + random(360) + 'deg);\
                  background: hsla('+random(360)+',100%,50%,1);\
                  animation: bang 1100ms ease-out forwards;\
                  opacity: 0';
    var e = document.createElement("i");
    e.style.cssText = styles.toString();
    c.appendChild(e);
  }
  document.getElementById('confetti').appendChild(c);
}

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
    btnDelete.innerHTML = "Delete Todo";
    btnDelete.id = id2;
    btnDelete.addEventListener("click", function () {
      this.parentElement.remove();
      localStorage.removeItem(this.id);
    });
  
  inputBox.style.width = "max-content";
  inputBox.prepend(btnDelete);
  inputBox.prepend(title);
  inputBox.prepend(btn);
  inputBox.prepend(input);
  task.appendChild(inputBox);

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
        console.log(localStorage.getItem(id));
        console.log(JSON.parse(localStorage.getItem(id)));

        let todoList = JSON.parse(localStorage.getItem(id));
        console.log(todoList.todoListTasks.length);
        for(i=0; i<todoList.todoListTasks.length; i++){
          if(todoList.todoListTasks[i].id == this.id){
            todoList.todoListTasks[i].done = true;
          }
        }

        console.log(todoList.todoListTasks);

        localStorage.setItem(id, JSON.stringify(todoList));


      } else {
        this.style.opacity = "1";
        this.style.textDecoration = "none";
        this.done = false;
        let todoList = JSON.parse(localStorage.getItem(id));
        console.log(todoList.todoListTasks.length);
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
      todoList.pop(this);
      const data = {
        id: idInputBox,
        title: tilteValue,
        idInputBox: idInputBox,
        todoListTasks: todoList,
      };
      const dataJson = JSON.stringify(data);
      localStorage.setItem(id, dataJson, todoList);
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
    btnDelete.innerHTML = "Delete Todo";
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
        console.log(localStorage.getItem(id));
        console.log(JSON.parse(localStorage.getItem(id)));

        let todoList = JSON.parse(localStorage.getItem(id));
        console.log(todoList.todoListTasks.length);
        for(i=0; i<todoList.todoListTasks.length; i++){
          console.log(todoList.todoListTasks[i].id);
          if(todoList.todoListTasks[i].id == this.id){
            todoList.todoListTasks[i].done = true;
          }
        }

        console.log(todoList.todoListTasks);

        localStorage.setItem(id, JSON.stringify(todoList));
        
        
      } else {
        this.style.opacity = "1";
        this.style.textDecoration = "none";
        this.done = false;
        
        let todoList = JSON.parse(localStorage.getItem(id));
        console.log(todoList.todoListTasks.length);
        for(i=0; i<todoList.todoListTasks.length; i++){
          if(todoList.todoListTasks[i].id == this.id){
            todoList.todoListTasks[i].done = false;
          }
        }
        console.log(todoList.todoListTasks);

        localStorage.setItem(id, JSON.stringify(todoList));
      }
    });
    
    newTask.addEventListener("dblclick", function () {
      this.remove();
      todoList.pop(this);
      
      const data = {
        id: id2,
        title: tilteValue,
        idInputBox: idInputBox,
        todoListTasks: todoList,
      };
      
      const dataJson = JSON.stringify(data);
      
      localStorage.setItem(key, dataJson, todoList);
      
      console.log(todoList);
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
    btn.innerHTML = "add";
    input.type = "text";
    input.placeholder = "Title Task";
    input.className = "task";
    todoList.id = todoListId;
    
    inputBox.style.width = "max-content";
    inputBox.prepend(btnDelete);
    inputBox.prepend(tilte);
    inputBox.prepend(btn);
    inputBox.prepend(input);
    task.appendChild(inputBox);
    
    let taskId = 0;
    btn.addEventListener("click", function () {
      const newTask = document.createElement("li");

      taskId++;
      newTask.innerHTML = input.value;
      newTask.title = input.value;
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

function showForm() {
  const form = document.querySelector("#display-add__form");
  const btn = document.querySelector("#showForm");  

  if (form.classList.contains("display-none")) {
    form.classList.remove("display-none");
    btn.innerHTML = "Hide Form";  
  } else {
    form.classList.add("display-none");
    btn.innerHTML = "Show Form";
  }
 
} 
  