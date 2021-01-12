import { Storage } from './storage.js'
import { TodoDOMElement } from './todo-class.js'
const todosContainer = document.querySelector('.todos-container');

const showTodos = (index = 0) => {
    let todos = Storage.getTodos(index);
    todosContainer.innerHTML = '';
    projectReference(index);
    
    if (todos.length > 0) {
        todos.forEach((todo, todoIndex) => {
            let todoEl = new TodoDOMElement(todo.title, todo.due, todo.priority, todoIndex, todo.done);
            todosContainer.appendChild(todoEl.div);
        });
    } else {
        const emptyDiv = document.createElement('div');
        emptyDiv.textContent = "Empty Todo List";
        todosContainer.appendChild(emptyDiv);
    }
};

// When project is clicked, display its todos
const showTodosInClickedProject = () => {
    const projectsTitleEl = document.querySelectorAll('.project-title');

    projectsTitleEl.forEach((project) => {
        project.addEventListener('click', () => {
            const projectIndex = project.parentElement.getAttribute('data-index');

            if (projectIndex != -1){
                projectReference(projectIndex);
                showTodos(projectIndex);
            }
        })
    })
}

// Add current class to project for reference
const projectReference = (target) => {
    const projectContainerEls = document.querySelectorAll('.project-container');
    projectContainerEls.forEach(el => el.classList.remove('current'));
    projectContainerEls[target].classList.add('current');
}

export { showTodos, showTodosInClickedProject }