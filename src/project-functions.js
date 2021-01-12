import { Storage } from './storage.js'
import { Project, ProjectDOMElement } from './project-class.js'
import { showTodosInClickedProject } from './show-todos.js'


const projectAddFormEl = document.getElementById('project-add-form');

// check if there is duplicated project title in localStorage.
const validation = (el) => {
    const projects = Storage.getProjects();
    if (!el) return
    
    const index = projects.findIndex((project) => {
        return project.title === el
    })

    return index
}

//Add new project to Localstorage and display
const addProject = () => {
    const projectDisplay = document.querySelector('.project-display-container');
    const projectAddInput = document.getElementById('project-add').value.trim();

    if (validation(projectAddInput) === -1) {
        const numberOfProjects = Storage.getProjects().length;

        // instantiate and save to LocalStorage
        const project = new Project(projectAddInput);

        // create elements for new project
        const div = new ProjectDOMElement(projectAddInput, numberOfProjects);

        Storage.saveProject(project);
        projectDisplay.appendChild(div.div);
        showTodosInClickedProject();
        document.getElementById('project-add').value = '';
    } else {
        console.log('Duplicate Project')
    }
}

// EventListener for Add new project form
const projectDisplayListener = () => {
    projectAddFormEl.addEventListener('submit', (e)=>{
        e.preventDefault();
        addProject();
    });
}

export { projectDisplayListener }