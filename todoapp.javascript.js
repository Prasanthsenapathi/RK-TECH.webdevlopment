function addTask() {
    const taskInput = document.getElementById("taskio");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const timestamp = new Date().toLocaleString();
    const task = {
        text: taskText,
        timestamp: timestamp,
        completed: false
    };

    tasks.push(task);
    renderTasks();
    taskInput.value = "";
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index, newText) {
    tasks[index].text = newText;
    renderTasks();
}

function renderTasks() {
    const pendingTasksList = document.getElementById("pendingTasks");
    const completedTasksList = document.getElementById("completedTasks");
    pendingTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.className = "task";
        if (task.completed) {
            listItem.classList.add("completed");
        }

        const actions = document.createElement("div");
        actions.className = "actions";
        const completeButton = document.createElement("button");
        completeButton.textContent = task.completed ? "Undo" : "Complete";
        completeButton.onclick = () => toggleComplete(index);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTask(index);
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => {
            const newText = prompt("Edit task:", task.text);
            if (newText !== null) {
                editTask(index, newText.trim());
            }
        };

        actions.appendChild(completeButton);
        actions.appendChild(deleteButton);
        actions.appendChild(editButton);

        listItem.innerHTML = `<span>${task.text}</span><span>${task.timestamp}</span>`;
        listItem.appendChild(actions);

        if (task.completed) {
            completedTasksList.appendChild(listItem);
        } else {
            pendingTasksList.appendChild(listItem);
        }
    });
}

let tasks = [];

renderTasks();
