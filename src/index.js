  document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("create-task-form");
    const taskList = document.getElementById("task-list");

    taskForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the task description from the input field
        const taskDescription = document.getElementById("new-task-description").value;

        // Create a new task item
        const taskItem = document.createElement("li");
        taskItem.textContent = taskDescription;

        // Append the task to the task list
        taskList.appendChild(taskItem);

        // Clear the input field after adding the task
        document.getElementById("new-task-description").value = "";
    });
});