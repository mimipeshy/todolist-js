const listContainer = document.querySelector('[data-lists]');
const newProjectForm = document.querySelector('[data-new-list-form]');
const newProjectInput = document.querySelector('[data-new-list-input]');
const deleteListButon = document.querySelector('[data-delete-list-button]');
const listDisplayContainer = document.querySelector('[data-list-display-container');
const listTitleElement = document.querySelector('[data-list-title]');
const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];
const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const newTaskDate = document.querySelector("#due-date");
const newTaskPriority = document.querySelector("#priority");
const newTaskDescription = document.querySelector("#description");
const tasksContainer = document.querySelector('[data-tasks]');
const clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]');
const taskTemplate = document.getElementById('task-template');
const listCountElement = document.querySelector('[data-list-count]');

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

const saveAndRender = () => {
  saveItems();
  getLists();
};

const createProject = (name) => ({ id: Date.now().toString(), name, tasks: [] });

listContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
});

newProjectForm.addEventListener('submit', e => {
  e.preventDefault();
  const listName = newProjectInput.value;
  if (listName == null || listName === '') return;
  const list = createProject(listName);
  newProjectInput.value = null;
  lists.push(list);
  saveAndRender();
});



tasksContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'input') {
    const selectedList = lists.find(list => list.id === selectedListId);
    const selectedTask = selectedList.tasks.find(task => task.id === e.target.id);
    selectedTask.complete = e.target.checked;
    saveItems();
    renderTaskCount(selectedList);
  }
});

deleteListButon.addEventListener('click', e => {
  lists = lists.filter(list => list.id !== selectedListId);
  selectedListId = null;
  saveAndRender();
});
btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

newTaskForm.addEventListener('submit', e => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  // const h2 = document.querySelector(".container h2");
  // if (h2.textContent === "Update Task") return;
  if (taskName === null || taskName === "") return;
  const task = createTask();
  newTaskInput.value = null;
  const selectedList = lists.find((list) => list.id === selectedListId);
  selectedList.tasks.push(task);
  saveAndRender();
});

const createTask = () => ({ id: Date.now().toString(), name: newTaskInput.value,
  date: newTaskDate.value,
  priority: newTaskPriority.value,
  description: newTaskDescription.value,
  complete: false 
});

clearCompleteTasksButton.addEventListener('click', e => {
  const selectedList = lists.find(list => list.id === selectedListId);
  selectedList.tasks = selectedList.tasks.filter(task => !task.complete);
  saveAndRender();
});

const saveItems = () => {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
};


const getLists = () => {
  clearElement(listContainer);
  renderLists();

  const selectedList = lists.find(list => list.id === selectedListId);
  if (selectedListId == null) {
    listDisplayContainer.style.display = 'none';
  } else {
    listDisplayContainer.style.display = '';
    listTitleElement.innerText = selectedList.name;
    renderTaskCount(selectedList);
    clearElement(tasksContainer);
    renderTasks(selectedList);
    colorTasks(selectedList);
  }
};

const renderLists = () => {
  lists.forEach(list => {
    const newList = document.createElement('li');
    newList.dataset.listId = list.id;
    newList.classList.add('list-name');
    newList.innerText = list.name;
    if (list.id === selectedListId) {
      newList.classList.add('active-list');
    }
    listContainer.appendChild(newList);
  });
};

const editTask =(task, label) =>{
  alert('poppimg');
}
const renderTaskCount = (selectedList) => {
  const incompleteTaskCount = selectedList.tasks.filter(tasks => !tasks.complete).length;
  const taskString = incompleteTaskCount === 1 ? 'task' : 'tasks';

  listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
};

//render todo tasks
const renderTasks = (selectedList) => {
  selectedList.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector("input");
    checkbox.id = task.id;
    checkbox.checked = task.complete;
    const label = taskElement.querySelector("label");
    label.htmlFor = task.id;
    const lineBreak = document.createElement("br");
    label.append(task.name, ", ", task.date, lineBreak, task.description);
    const editButton = document.createElement("span");
    editButton.innerHTML = `<i class="fa fa-edit"></i>`;
    editButton.classList.add("editing-button");
    editButton.addEventListener("click", () => editTask(task, label));
    const todoTask = taskElement.querySelector(".task");
    todoTask.append(editButton);
    tasksContainer.appendChild(taskElement);
  });
};


function colorTasks(selectedList) {
  const todos = [...document.querySelectorAll(".task")];
  const checkbox = [...document.querySelectorAll(".custom-checkbox")];
  for (let i = 0; i < todos.length; i++) {
    for (let i = 0; i < selectedList.tasks.length; i++) {
      if (selectedList.tasks[i].priority === "High") {
        checkbox[i].style.border = "2px solid #ed1250";
      } else if (selectedList.tasks[i].priority === "Medium") {
        checkbox[i].style.border = "2px solid #d3d00f";
      } else {
        checkbox[i].style.border = "2px solid #0fc53d";
      }
    }
  }
}

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

export default getLists();
