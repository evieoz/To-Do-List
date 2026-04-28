let tasks = [];
let completed = [];

// ADD TASK
document.getElementById("addTaskBtn").addEventListener("click", function () {
  let taskInput = document.getElementById("taskInput").value;

  if (taskInput) {
    tasks.push(taskInput);
    completed.push(false);

    document.getElementById("taskInput").value = "";

    displayTasks();
    updateCounter();
  }
});

// DISPLAY TASKS
function displayTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    // completed style
    if (completed[index]) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <span onclick="toggleTask(${index})" style="cursor:pointer">
        ${task}
      </span>
      <button class='btn btn-warning btn-sm' onclick='removeTask(${index})'>
        🗑
      </button>
    `;

    taskList.appendChild(li);
  });
}

// TOGGLE COMPLETED
function toggleTask(index) {
  completed[index] = !completed[index];
  displayTasks();
  updateCounter();
}

// REMOVE TASK
function removeTask(index) {
  tasks.splice(index, 1);
  completed.splice(index, 1);

  displayTasks();
  updateCounter();
}

// CLEAR ALL TASKS
document.getElementById("clearAllTasksBtn")
  .addEventListener("click", function () {
    tasks = [];
    completed = [];

    displayTasks();
    updateCounter();
  });

// ENTER KEY TO ADD TASK
document.getElementById("taskInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.getElementById("addTaskBtn").click();
    }
  });

// COUNTER
function updateCounter() {
  document.getElementById("taskCounter").innerText =
    "Total Tasks: " + tasks.length;
}

// INITIAL DISPLAY
updateCounter();