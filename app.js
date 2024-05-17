let tasks = [
  //   {
  //     id: Math.ceil(Math.random() * 1000),
  //     task: "Cleaning",
  //     text: "Do washing",
  //     completed: false,
  //   },
];

const main = document.querySelector(".tasks");
const ttask = document.getElementById("task");
const ttext = document.getElementById("text");
const button = document.getElementById("btn");
button.addEventListener("click", create);

function create() {
  let newTask = {
    id: Math.ceil(Math.random() * 1000),
    task: ttask.value,
    text: ttext.value,
    completed: false,
  };

  tasks.push(newTask);
  read();
}
function read() {
  main.innerHTML = "";
  if (!tasks.length) {
    main.innerHTML = "No tasks found";
  } else {
    tasks.forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.className = "item";
      taskElement.innerHTML = `
        <h1>${task.task}</h1>
        <p>${task.text}</p>
        <input type='checkbox' ${
          task.completed ? "checked" : ""
        } name='complete' onchange='toggleComplete(${task.id})'/> Completed?
        <br />
        <div class="btn-c">
        <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
         
      `;
      main.appendChild(taskElement);
    });
  }
  //   main.innerHTML = t;
  //console.log(taskElement);
}

function deleteTask(id) {
  const tas = tasks.find((t) => t.id === id);
  if (!tas) {
    console.log("Task does not exist");
  } else {
    console.log("Task deleted successfully");
    tasks = tas;
  }
  read();
  //console.log(id);
}

function toggleComplete(taskId) {
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
  }
  read();
}
