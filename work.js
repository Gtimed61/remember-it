var tasks = {};

//function to create task on click of button
const btn = document.getElementsByClassName('btn')
    //allow clicked button to create task
    var taskNote = document.querySelector('#taskNote').value
    tasks[""] = taskNote;
    //append to html object
    var taskList = document.getElementById("button");
    var task = document.createElement("li");
    task.innerHTML = taskNote;
    taskNote.appendChild(tasks);
    console.log(tasks);
    //clear input field
    document.querySelector('#taskNote').value = "";
    //add task to list
    taskList.appendChild(task);
    //add task to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));




btn.addEventListener('click', function () {
    var taskToDo = document.getElementById("taskToDo").value;
    var taskNote = document.getElementById("taskNote").value;
    var taskList = document.getElementById("taskList");
    var task = document.createElement("li");
    task.innerHTML = taskToDo + " " + taskNote;
    taskList.appendChild(task);
})
