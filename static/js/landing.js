const csrfToken = "{{ csrf_token }}";
const createTaskBtn = document.getElementById("createTaskBtn");
const overlay = document.getElementById("overlay");
const overlayBackground = document.getElementById("overlayBackground");
const saveTaskButton = document.getElementById("saveTaskButton");

function dropFunc() {
    $("#dropdown").toggleClass("show");
}

$(document).on("click", function(event) {
    if(!$(event.target).closest('.drop-btn').length && !$(event.target).closest('.drop-content').length) {
        $(".drop-content").removeClass("show");
    }
});

$(document).ready(function() {
    fetchTasks('/api/tasks/');
});

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const tasksContainer = document.querySelector(".tasks"); 

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            tasksContainer.innerHTML = '';

            if (tab.id === "tab1") {
                fetchTasks('/api/tasks/');
            } else if (tab.id === "tab2") {
                fetchTasks('/api/tasks/?completed=false');
            } else if (tab.id === "tab3") {
                fetchTasks('/api/tasks/?completed=true');
            }
        });
    });
});

createTaskBtn.addEventListener("click", () => {
    overlay.style.display = "block";
    overlayBackground.style.display = "block";
});

saveTaskButton.addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput").value;
    const taskDate = document.getElementById("taskDate").value;
    const taskTime = document.getElementById("taskTime").value;

    const newTask = {
        task: taskInput,
        task_date: taskDate,
        task_time: taskTime
    };

    createTask('/api/tasks/', newTask);
});

overlayBackground.addEventListener("click", () => {
    overlay.style.display = "none";
    overlayBackground.style.display = "none";
});

function fetchTasks(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const tasksContainer = document.querySelector(".tasks");
            tasksContainer.innerHTML = ''; // Clear existing tasks

            data.forEach(task => {
                const taskItem = document.createElement("div");
                taskItem.classList.add("task-item");

                const taskLabel = document.createElement("label");
                taskLabel.classList.add("task-name");

                const taskCheckbox = document.createElement("input");
                taskCheckbox.type = "checkbox";
                taskCheckbox.classList.add("task-checkbox");
                taskCheckbox.checked = task.completed;

                taskCheckbox.addEventListener("change", () => {
                    updateTaskCompletion(`/api/tasks/${task.id}/`, { completed: taskCheckbox.checked });
                });

                const taskText = document.createElement("span");
                taskText.classList.add("task-text");

                const taskIcon = document.createElement("span");
                taskIcon.classList.add("task-icon");
                taskIcon.innerHTML = "&#9998;";

                const deleteIcon = document.createElement("span");
                deleteIcon.classList.add("delete-icon");
                deleteIcon.innerHTML = "&#128465;";
                deleteIcon.addEventListener("click", () => {
                    deleteTask(`/api/tasks/${task.id}`);
                });

                taskText.textContent = task.task;

                const taskCheck = document.createElement("span");
                taskCheck.classList.add("task-check");


                taskLabel.appendChild(taskCheckbox);
                taskLabel.appendChild(taskText);
                taskLabel.appendChild(taskCheck);
                taskLabel.appendChild(taskIcon);
                taskLabel.appendChild(deleteIcon);

                const taskDate = document.createElement("h3");
                taskDate.textContent = `${task.task_date}, ${task.task_time}`;

                taskItem.appendChild(taskLabel);
                taskItem.appendChild(taskDate);


                tasksContainer.appendChild(taskItem);
            });
        })
        .catch(error => {
            console.error('Error fetching tasks:', error);
        });
}

function createTask(url, data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(newTask => {
        fetchTasks('/api/tasks/');
        overlay.style.display = "none";
        overlayBackground.style.display = "none";
    })
    .catch(error => {
        console.error('Error creating task', error)
    })
};

function updateTaskCompletion(url, data) {
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(updatedTask => {
        const activeTab = document.querySelector(".tab.active");

        if (activeTab) {
            const activeTabId = activeTab.id;
            if (activeTabId == 'tab1') {
                fetchTasks('/api/tasks/');
            } else if (activeTabId == 'tab2') {
                fetchTasks('/api/tasks/?completed=false');
            } else if (activeTabId == 'tab3') {
                fetchTasks('/api/tasks/?completed=true');
            }

        }
        
    })
    .catch(error => {
        console.error('Error updating task completion', error);
    });
};

function deleteTask(url) {
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken
        },
    })
    .then(response => {
        if (response.ok) {
            fetchTasks('/api/tasks/');
        } else {
            console.error('Error deleting task:', response.statusText);
        }
    })
    .catch (error => {
        console.error('Error deleting task:', error);
    });
};