//open, shows day and current time -momentjs



//time blocks for 9-5



//time blocks color coded for past-red present- future-
//timeblocks on click add task

var tasks = {};

var createTask = function(taskText, taskDate, taskList) {
    // create elements that make up a task item
    var taskLi = $("<li>").addClass("list-group-item");
    var taskSpan = $("<span>")
      .addClass("badge badge-primary badge-pill")
      .text(taskDate);
    var taskP = $("<p>")
      .addClass("m-1")
      .text(taskText);
  
    // append span and p element to parent li
    taskLi.append(taskSpan, taskP);


     // append to ul list on the page
  $("#list-" + taskList).append(taskLi);

//save button for timeblocks save task to local storage

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
//on refresh, saved task persist

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = { //save to selected 
        toDo: [],
        inProgress: [],
        inReview: [],
        done: []
      };
    }