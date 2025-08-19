document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function createTaskElement(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');//Assign class name to remove button

        removeButton.onclick = function() {
            taskList.removeChild(taskItem);
            // Update localStorage when task is removed
            const tasks = JSON.parse(localStorage.getItem('stored')) || [];
            const updatedTasks = tasks.filter(task => task !== taskText);
            localStorage.setItem('stored', JSON.stringify(updatedTasks));
        };
        
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
    }

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('stored')) || [];
        storedTasks.forEach(taskText => {
            createTaskElement(taskText);
        });
    }

    // Function to add a new task

    function addTask(){
        let taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }
        
        // Add task to the page
        createTaskElement(taskText);
        
        // Save to localStorage
        const stored = JSON.parse(localStorage.getItem('stored')) || [];
        stored.push(taskText);
        localStorage.setItem('stored', JSON.stringify(stored));
        
        // Clear input field
        taskInput.value = '';
    }
    
    // Load stored when the page loads
    loadTasks();

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    
});