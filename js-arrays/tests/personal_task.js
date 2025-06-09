// First task - Personal Task Tracker

const tasks = []; // empty array to store tasks.

function addTask(task) {
    if (typeof task === 'string' && task.trim() !== '') {
        const trimmedTask = task.trim();
        const normalizedTask = trimmedTask.toLowerCase();

        for (const existingTask of tasks) { // This for loop is the same as the normal for (let i = 0; i < arr.length; i++) loop
            if (existingTask.toLowerCase() === normalizedTask) {
                console.log('Task already exists.');
                return
            }
        }
        tasks.push(trimmedTask);
        console.log(`Task Added: ${trimmedTask}`);
    } else {
        console.log("Please enter a valid, non-empty task.")
    }
};

function displayCurrentTasks() {
    const currentTasks = tasks.map((task, index) => `${index + 1}: ${task}`); 
    currentTasks.forEach(task => console.log(task)); // Appears each tasks in separate lines.
}

function removeTaskByIndex(index) {
    if (index > 0 && index <= tasks.length) {
        const removeTask= tasks.splice(index - 1, 1 );
        console.log(`Removed task: ${index} - ${removeTask[0]}`)
    } else {
        console.log('Invalid task index!')
    }
}

function totalTasks() {
    const countTasks = tasks.length;
    console.log(`Total tasks: ${countTasks}`);
}


// Test cases
console.log("----- Personal Tasks -----");
addTask('Focus on fundamentals first!');
addTask('Then proceed step by step');
addTask('One at a time.');
addTask("Don't compare yourself to others.")
console.log('');


displayCurrentTasks();
totalTasks();
    
console.log('');
removeTaskByIndex(3);
console.log('');

displayCurrentTasks();
totalTasks();
