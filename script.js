let tasks = []; //empty array to store tasks
// add event listener to add task button
document.getElementById("addTaskBtn").addEventListener("click", function () {
  // get value from input field
  let taskInput = document.getElementById("taskInput").value;
  // check if input is empty
  if (taskInput) {
    // add new task to task array
    tasks.push({ text: taskInput, completed: false });
    // clear input field value
    document.getElementById("taskInput").value = "";
    // update task list display
    displayTasks();
    updateCounter();
  }
});
// function to display tasks in html list
function displayTasks() {
  // select our task list in html
  let taskList = document.getElementById("taskList");
  // clear existing html list
  taskList.innerHTML = "";
  // loop through each task in the array and create a list item for each
  tasks.forEach((task, index) => {
    // create <li> element for each task in array
    let li = document.createElement("li");

    // add styling
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center",
    );

    // set completed style
    if (task.completed) {
      li.classList.add("completed");
    }
// add task text and delete button to list item
    li.innerHTML = `
    <span onclick="toggleTask(${index})" style="cursor:pointer">
        ${task.text}
    </span>
    <button class='btn btn-warning btn-sm' onclick='removeTask(${index})'>
        🗑
    </button>
`;

    // append new task list to html
    taskList.appendChild(li);
  });
}

// remove task from array and update display
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
    updateCounter();
}
// clear all tasks from array and update display
document.getElementById("clearAllTasksBtn")
  .addEventListener("click", function () {
    tasks = [];
    displayTasks();
    updateCounter();
  });
// allow user to press enter key to add task
document.getElementById("taskInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.getElementById("addTaskBtn").click();
    }
  });
// update task counter display
function updateCounter() {
  document.getElementById("taskCounter").innerText =
    "Total Tasks: " + tasks.length;
}
// toggle task completion status
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
    updateCounter();
}

// finalize counter
updateCounter();