let listId = 0
let listForm = document.getElementById("create-list-form")
let allLists = []
class List {
  // your code here
  constructor(name){
    this.name = name
    this.id = ++listId
    allLists.push(this)
  }

  static all(){
    return allLists
  }

  tasks(list){
    Task.all().filter((task)=>(task.listName === list))
  }

  deleteList(){
    event.preventDefault()
    let thisList = String(event.target.parentElement.innerText)
    let listObj = List.all().find((list) => (list.name === thisList))
    let tasks = document.getElementById(thisList).getElementsByTagName("li")
    document.getElementById(thisList).remove()
    document.querySelectorAll(`option[value=${thisList}]`)[0].remove()
  }

  newList(){
    event.preventDefault()
    let list = document.createElement('div')
    let taskForm = document.createElement('div')
    let input = event.target.children[1].value
    let newList = new List (input)

    console.log(event)
    list.id = input
    list.class = "lists"
    list.innerHTML = `
    <h2>${input}<button data-title="${input}" class="delete-list"></button></h2>
    <ul></ul>
    `
    listHolder.appendChild(list)
    list.addEventListener('click', List.prototype.deleteList)
  }
  newTaskList(){
    event.preventDefault()
    if (!document.getElementById("create-task-form")){
      let taskForm = document.createElement('div')
      let input = event.target.children[1].value
      console.log(event)
      taskForm.class = "taskForm"
      taskForm.innerHTML = `<form id="create-task-form">
      <label for="parent-list">Select List:</label>
      <select id="parent-list">
      </select>
      <label for="new-task-description">Task description:</label>
      <input required type="text" id="new-task-description" placeholder="description">
      <label for="new-task-priority">Priority level:</label>
      <input type="text" id="new-task-priority" placeholder="priority">
      <input type="submit" value="Create New Task">
    </form>`
      listDiv.prepend(taskForm)
    }

      let formOption = document.createElement('option')
      formOption.value = event.target.children[1].value
      formOption.innerHTML = event.target.children[1].value
      document.getElementById("parent-list").append(formOption)
      let taskForm = document.getElementById("create-task-form")
      taskForm.addEventListener('submit', Task.prototype.newTask)
  }
}
listForm.addEventListener('submit', List.prototype.newTaskList)
listForm.addEventListener('submit', List.prototype.newList)
