import { Storage } from './storage.js'

// Class for creating project object
class Project {
    constructor(title, todos = []){
        this.title = title,
        this.todos = todos
    }
}

// Class for each project DOM element
class ProjectDOMElement {
    constructor(title, index){
        this.title = title;
        this.index = index;

        this.div = document.createElement('div');
        this.h3 = document.createElement('h3');
        this.deleteButton = document.createElement('button');

        this.div.classList.add('project-container');
        this.h3.classList.add('project-title');
        this.deleteButton.classList.add('btn', 'project-delet-btn');

        this.div.setAttribute('data-index', index);

        this.h3.textContent = title;
        this.deleteButton.textContent = 'Delete';

        this.deleteButton.onclick = this.onClickDelete.bind(this);

        this.div.appendChild(this.h3);
        this.div.appendChild(this.deleteButton);
    }

     //Delete project from DOM and localStorage when clicked
    onClickDelete() {
        const projectDisplay = document.querySelector('.project-display-container');

        if (Storage.getProjects().length > 1) {
            Storage.removeProject(this.title);
            projectDisplay.querySelector(`[data-index='${this.index}']`).remove()
        }else {
            alert('At least 1 project is required');
        }
    }

}

export { Project, ProjectDOMElement }
