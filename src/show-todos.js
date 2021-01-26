import { getTodos } from './storage';

const todosContainer = document.querySelector('.todos-container');

// Add current class to project for reference
const projectReference = (target) => {
  const projectContainerEls = document.querySelectorAll('.project-container');
  projectContainerEls.forEach(el => el.classList.remove('current'));
  projectContainerEls[target].classList.add('current');
};

const showTodos = (index = 0) => {
  const todos = getTodos(index);
  todosContainer.innerHTML = '';
  projectReference(index);

  if (todos.length > 0) {
    todos.forEach((todo, todoIndex) => {
      const todoEl = new (todo.title, todo.due, todo.priority, todoIndex, todo.done)();
      todosContainer.appendChild(todoEl.div);
    });
  } else {
    const emptyDiv = document.createElement('div');
    emptyDiv.textContent = 'Empty Todo List';
    todosContainer.appendChild(emptyDiv);
  }
};

// When project is clicked, display its todos
const showTodosInClickedProject = () => {
  const projectsTitleEl = document.querySelectorAll('.project-title');

  projectsTitleEl.forEach((project) => {
    project.addEventListener('click', () => {
      const projectIndex = project.parentElement.getAttribute('data-index');

      if (projectIndex !== -1) {
        projectReference(projectIndex);
        showTodos(projectIndex);
      }
    });
  });
};

export { showTodos, showTodosInClickedProject };