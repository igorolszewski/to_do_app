//var
var newTaskForm = document.querySelector('.new-task-container form');
var tasksContainer = document.querySelector('.tasks-container ul');


//on dom load

document.addEventListener('DOMContentLoaded', function() {
    bindAddTaskEvents();
    
   showTasks(); 
    
});