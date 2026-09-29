const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.className = "task-text";

    // Mark task as completed
    span.addEventListener("click", () => {
        span.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Delete task
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}

// Add task when button is clicked
addBtn.addEventListener("click", addTask);

// Add task when Enter key is pressed
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});