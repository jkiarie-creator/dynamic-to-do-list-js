document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    // Function to add a new task

    function addTask(){
        let taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }else{
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);
            taskInput.value = ''; // Clear input field
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');//Assign class name to remove button

            // Add click event handler for remove button
            removeButton.onclick = function() {
                taskList.removeChild(taskItem);
            };
            
            taskItem.appendChild(removeButton);
        }
    }
    document.addEventListener('DOMContentLoaded', addTask);

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    
});