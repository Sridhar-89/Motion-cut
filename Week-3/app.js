document.addEventListener("DOMContentLoaded", function () {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const taskList = document.getElementById("task-list");
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-button");

  function addTask(text) {
    const newTask = {
      text: text,
      completed: false,
    };
    tasks.push(newTask);
    updateTasks();
  }

  function updateTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const taskItem = document.createElement("div");
      taskItem.className = "task-item";
      taskItem.innerHTML = `
                <input type="checkbox" ${task.completed ? "checked" : ""}>
                <span class="task-text ${task.completed ? "completed" : ""}">${
                  task.text
                }</span>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;

      taskItem.querySelector("input").addEventListener("change", (e) => {
        task.completed = e.target.checked;
        updateTasks();
      });

      taskItem.querySelector(".edit-button").addEventListener("click", () => {
        const newText = prompt("Edit task:", task.text);
        if (newText !== null) {
          task.text = newText;
          updateTasks();
        }
      });

      taskItem.querySelector(".delete-button").addEventListener("click", () => {
        tasks.splice(index, 1);
        updateTasks();
      });

      taskList.appendChild(taskItem);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  addButton.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text !== "") {
      addTask(text);
      taskInput.value = "";
    }
  });

  updateTasks();
});
