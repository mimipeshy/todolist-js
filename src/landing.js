const listContainer = document.querySelector('[data-lists]')
const newProjectForm = document.querySelector('[data-new-list-form]')
const newProjectInput = document.querySelector('[data-new-list-input]')
const deleteListButon = document.querySelector('[data-delete-list-button]')
const listDisplayContainer = document.querySelector('[data-list-display-container')
const listCountElement = document.querySelector('[data-list-count]')
const tasksContainer = document.querySelector('[data-tasks]')
const listTitleElement = document.querySelector('[data-list-title]')
const taskTemplate= document.querySelector('[task-template]')


const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)

listContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li') {
        selectedListId = e.target.dataset.listId
        saveAndRender()
    }
})

newProjectForm.addEventListener('submit', e => {
    e.preventDefault()
    const listName = newProjectInput.value
    if (listName == null || listName === '') return
    const list = createProject(listName)
    newProjectInput.value = null
    lists.push(list)
    saveAndRender()
})

deleteListButon.addEventListener('click', e => {
    lists = lists.filter(list => list.id !== selectedListId)
    selectedListId = null
    saveAndRender()
})

function createProject(name) {
    return { id: Date.now().toString(), name: name, tasks: [] }
}
function saveItems() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
}
function saveAndRender() {
    saveItems()
    getLists()
}
function getLists() {
    clearElement(listContainer)
    renderLists()

    const selectedList = lists.find(list => list.id === selectedListId)
    if (selectedListId == null) {
        listDisplayContainer.style.display = 'none'
    } else {
        listDisplayContainer.style.display = ''
        listTitleElement.innerText = selectedList.name
        renderTaskCount(selectedList)
        clearElement(tasksContainer)
        renderTasks(selectedList)
    }
}

function renderTasks(selectedList){
    selectedList.task.forEach(task =>{
        const taskElement= document.importNode(taskTemplate.textContent, true)
        const checkbox= taskElement.querySelector('input')
        checkbox.id= task.id
        checkbox.checked= task.complete
        const label= taskElement.querySelector('label')
        label.htmlFor= task.id
        label.append(task.name)
        tasksContainer.appendChild(taskElement)
    })
}
function renderTaskCount(selectedList) {
    const incompleteTaskCount = selectedList.tasks.filter(tasks => !tasks.complete).length
    const taskString = incompleteTaskCount === 1 ? "task" : "tasks"

    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`
}
function renderLists() {
    lists.forEach(list => {
        const newList = document.createElement('li')
        newList.dataset.listId = list.id
        newList.classList.add('list-name')
        newList.innerText = list.name
        if (list.id === selectedListId) {
            newList.classList.add('active-list')
        }
        listContainer.appendChild(newList)
    })

}
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }

}

export default getLists()
