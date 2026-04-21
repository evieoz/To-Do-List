let tasks = []; //empty array to store tasks

document.getElementById('addTaskBtn').addEventListener('click', function() {
    // get value from input field
    let taskInput = document.getElementById('taskInput').value;
    // check if input is empty
    if(taskInput) {
    // add new task to task array
        tasks.push(taskInput);
    // clear input field value
        document.getElementById('taskInput').value = '';
    // update task list display
        displayTasks();
    }
})

function displayTasks() {
    // select our task list in html
    let taskList = document.getElementById('taskList');
    // clear existing html list
    taskList.innerHTML = '';
    // loop through each task in the array and create a list item for each
    tasks.forEach((task, index) => {
        // create <li> element for each task in array
        let li = document.createElement('li');
        
        // add styling
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        )

        // set inner html of list item with a task and remove btn
        li.innerHTML = `${task} <button class='btn btn-warning btn-sm' onclick='removeTask(${index})'>✓</button>`;
        
        // append new task list to html
        taskList.appendChild(li);
    })


}


function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

document.getElementById('clearAllTasksBtn').addEventListener('click', function() {
    tasks = [];
    displayTasks();
})

document.getElementById('taskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('addTaskBtn').click();
    }
});

