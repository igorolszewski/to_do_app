function addNewTask(title) {
    var taskLi = document.createElement('li');

    taskLi.classList.add('single-task');
    taskLi.innerHTML = prepareTaskHTML(title);
    
    //toggle delete
    
    var toggleCompleteBtn = taskLi.querySelector('.toggle-complete-btn');
    var deleteBtn = taskLi.querySelector('.delete-task-btn');
    
    toggleCompleteBtn.addEventListener('click',function(){
       toggleTaskComplete(this); 
    });
    
        deleteBtn.addEventListener('click',function(){
       deleteTask(this); 
    });

    //add task to DOM
    tasksContainer.appendChild(taskLi);


}

function prepareTaskHTML(title) {
    return '<div class="input-group">' + '<span class="input-group-btn">' +
        '<button class="btn btn-default toggle-complete-btn" ><i class="fa fa-check"></i></button></span>' +
        '<input type="text" class="form-control" placeholder="tytuł zadania..." value=' + title + '>' +
        '<span class="input-group-btn">' +
        '<button class="btn btn-danger delete-task-btn"><i class="fa fa-times"></i></button>' +
        '</span>' +
        '</div>';
};

function bindAddTaskEvents() {
    
    
    newTaskForm.addEventListener('submit',function(event) {
        event.preventDefault();
        
        var title = this.querySelector('input').value;
        
        if (title) {
            addNewTask(title);
            
        }
        
    });
};