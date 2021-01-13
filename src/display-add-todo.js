import Storage from './storage';
import { Todo } from './todo-class';
import { showTodos } from './show-todos';

const createAddTodoDisplay = () => {
  const popupDisplayEl = document.querySelector('.popup-display-container');

  popupDisplayEl.innerHTML = `
        <div class="add-container">
            <h2>New Todo</h2>
            <div class="close-btn">X</div>
            <form class="input-form">
                <div class="input-container">
                    <label for="title" class="input-label">Todo:</label>
                    <input type="text" name="title" class="input" id="title" required/>
                </div>

                <div class="input-container">
                    <label for="date" class="input-label">Due:</label>
                    <input type="date" name="date" id="date" class="input" required />
                </div>
                <input type="date" id="due-date" name="due-date" required /><br />
                <div class="input-container">
                    <label for="priority" class="input-label">Priority:</label>
                    <select class="input" name="priority" id="priority">
                        <option class="input" value="high">High</option>
                        <option class="input" value="medium">Medium</option>
                        <option class="input" value="low">Low</option>
                    </select>
                </div>

                <button class="add-btn" id="add-todo" role="add-todo">Add New</button>
            </form>
        </div>
    `;
};

const formValidation = () => {
  const titleInputEl = document.getElementById('title');

  if (titleInputEl.value.trim()) {
    return true;
  }
  return false;
};

const createNewTodo = () => {
  const formEl = document.querySelector('.input-form');
  const titleInputEl = document.getElementById('title');
  const dueInputEl = document.getElementById('date');
  const priorityInputeEl = document.getElementById('priority');
  const projectContainerEls = document.querySelectorAll('.project-container');
  const popupDisplayEl = document.querySelector('.popup-display-container');

  let index;

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    // find current project
    projectContainerEls.forEach((el) => {
      if (el.classList.contains('current')) {
        index = el.getAttribute('data-index');
      }
    });
    if (formValidation()) {
      const todo = new Todo(titleInputEl.value.trim(), dueInputEl.value, priorityInputeEl.value);

      Storage.saveTodo(todo, index);
      showTodos(index);
      popupDisplayEl.innerHTML = '';
    }
  });
};

const closeAddTodo = () => {
  const closeEl = document.querySelector('.close-btn');
  const popupDisplayEl = document.querySelector('.popup-display-container');

  closeEl.addEventListener('click', () => {
    popupDisplayEl.innerHTML = '';
  });
};

const renderAddTodo = () => {
  const addTodosButton = document.querySelector('.add-todo-btn');

  addTodosButton.addEventListener('click', () => {
    createAddTodoDisplay();
    createNewTodo();
    closeAddTodo();
  });
};

export {
  renderAddTodo, createAddTodoDisplay, closeAddTodo, formValidation,
};