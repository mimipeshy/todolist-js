const listContainer= document.querySelector('[data-lists]')
const newProjectForm= document.querySelector('[data-new-list-form]')
const newProjectInput= document.querySelector('[data-new-list-input]')

const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_SELECTED_LIST_KEY ='task.selectedListIs'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_KEY)

listContainer.addEventListener('click', e=>{
    e.preventDefault()
    if(e.target.tagName.toLowerCase()==='li'){
        selectedListId =e.target.dataset.listId
        saveAndRender()
    }

})

newProjectForm.addEventListener('submit',e =>{
    e.preventDefault()
    const listName= newProjectInput.value
    if(listName == null || listName ==='')return
    const list = createProject(listName)
    newProjectInput.value=null
    lists.push(list)
    saveAndRender()
})

function createProject(name){
    return {id: Date.now().toString(), name: name, tasks:[]}
}
function saveItems(){
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
}
function saveAndRender(){
    saveItems()
    getLists()
}
function getLists(){
   clearElement(listContainer)
    lists.forEach(list =>{
      const newList= document.createElement('list-name')
      newList.dataset.listId = list.id
      newList.classList.add('list-name')
      newList.innerText= list.name
      if(list.id === selectedListId){
          newList.classList.add('active-list')
      }
      listContainer.appendChild(newList)
    })
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }

}

export default getLists()
