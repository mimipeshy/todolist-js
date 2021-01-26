import { getProjects, saveProject } from './storage';
import { Project, ProjectDOMElement } from './project-class';
import { showTodosInClickedProject } from './show-todos';

const projectAddFormEl = document.getElementById('project-add-form');

// Add new project to Localstorage and display
const addProject = () => {
  const projectDisplay = document.querySelector('.project-display-container');
  const projectAddInput = document.getElementById('project-add').value.trim();

  const numberOfProjects = getProjects().length;

  // instantiate and save to LocalStorage
  const project = new Project(projectAddInput);

  // create elements for new project
  const div = new ProjectDOMElement(projectAddInput, numberOfProjects);

  saveProject(project);
  projectDisplay.appendChild(div.div);
  showTodosInClickedProject();
  document.getElementById('project-add').value = '';
};

// EventListener for Add new project form
const projectDisplayListener = () => {
  projectAddFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    addProject();
  });
};

export default projectDisplayListener;