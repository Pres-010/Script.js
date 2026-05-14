const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const Container = document.querySelector('.container')

addBtn.addEventListener("click", function addTask() {

  const taskText = todoInput.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create li
  const li = document.createElement("li");
  li.classList.add('li')
  // Create task text
  li.innerHTML = `
    ${taskText}
    <span class='edit'>Edit</span>
    <span class="delete-btn">Delete</span>
  `;

  // Add to list
  todoList.appendChild(li)

  // Clear input
  todoInput.value = "";

  // Delete functionality
  const deleteBtn = li.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", function remove() {
    todoList.removeChild(li)
  });

  // Edit functionality
  const editBtn = li.querySelector(".edit")
 const editInput = document.createElement('input')
 editInput.classList.add('edit-input')
  editBtn.addEventListener('click', function () {
  todoList.appendChild(editInput)
  })

  const changeBtn = document.createElement('button')
  changeBtn.innerHTML = "✔️"
  Container.appendChild(changeBtn)
  changeBtn.addEventListener('click', function () {
    let EditedText = editInput.value
    li.innerHTML = ` ${EditedText}
    <span class='edit'>Edit</span>
    <span class="delete-btn">Delete</span>`
  })
});
