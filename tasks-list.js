function showTasks() {
    tasks.forEach(function(title) {
    addNewTask(title);    
    });
}


//tg complete
function toggleTaskComplete(task) {
    task.classList.toggle('btn-success');
}

//dt task
function deleteTask(task) {
    var liToDelete = task.closest('li');
    
    task.closest('ul').removeChild(liToDelete);
  
}
