const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", addTask);

function addTask() {

  const taskText = todoInput.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create li
  const li = document.createElement("li");
  li.classList.add("li");

  // Task text
  const taskSpan = document.createElement("span");
  taskSpan.innerText = taskText;

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete-btn");

  // Add elements inside li
  li.appendChild(taskSpan);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Add li to ul
  todoList.appendChild(li);

  // Clear input
  todoInput.value = "";

  // DELETE
  deleteBtn.addEventListener("click", function () {
    todoList.removeChild(li);
  });

  // EDIT
  editBtn.addEventListener("click", function () {

    // Create input
    const editInput = document.createElement("input");
    editInput.value = taskSpan.innerText;

    // Create save button
    const saveBtn = document.createElement("button");
    saveBtn.innerText = "✔️";

    // Replace task text with input
    li.replaceChild(editInput, taskSpan);

    // Add save button
    li.insertBefore(saveBtn, deleteBtn);

    // Save edited text
    saveBtn.addEventListener("click", function () {

      taskSpan.innerText = editInput.value;

      // Restore task text
      li.replaceChild(taskSpan, editInput);

      // Remove save button
      li.removeChild(saveBtn);
    });
  });
}