import './styles/style.css';
import { renderAddTodo } from './display-add-todo';
import projectDisplayListener from './project-functions';
import showProjects from './show-projects';
import { showTodos, showTodosInClickedProject } from './show-todos';
import { getProjects } from './storage';

getProjects();
renderAddTodo();
projectDisplayListener();
showProjects();
showTodos();
showTodosInClickedProject();
