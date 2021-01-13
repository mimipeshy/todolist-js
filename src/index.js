import { renderAddTodo } from './display-add-todo';
import projectDisplayListener from './project-functions';
import showProjects from './show-projects';
import { showTodos, showTodosInClickedProject } from './show-todos';
import Storage from './storage';


Storage.getProjects();
renderAddTodo();
projectDisplayListener();
showProjects();
showTodos();
showTodosInClickedProject();
