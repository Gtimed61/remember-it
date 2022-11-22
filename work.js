var tasks = {};

//create task element and append to the DOM
tasks.create = function (task) {
    var taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.innerHTML = task;
    document.getElementById('tasks').appendChild(taskElement);
}



