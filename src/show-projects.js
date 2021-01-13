import { Storage } from './storage.js';
import { ProjectDOMElement } from './project-class.js';

// Bring project from LocalStorage and display - for when page is refreshed
const showProjects = () => {
  const projectDisplay = document.querySelector('.project-display-container');
  const project = Storage.getProjects();

  project.forEach((element, index) => {
    const project = new ProjectDOMElement(element.title, index);

    projectDisplay.appendChild(project.div);
  });
};


export { showProjects };