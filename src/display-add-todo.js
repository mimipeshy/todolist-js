import { saveTodo } from './storage';
import { showTodos } from './show-todos';
import createAddTodoDisplay from './view/displaytodo'

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
      const todo = new (titleInputEl.value.trim(), dueInputEl.value, priorityInputeEl.value)();

      saveTodo(todo, index);
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