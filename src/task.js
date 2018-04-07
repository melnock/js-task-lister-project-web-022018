let mainContent = document.getElementById("main-content")
let listDiv = document.getElementById("app-content")
let listHolder = document.getElementById("app-content").getElementsByClassName("list-holder")[0]
let all = []
class Task {
  // your code here
  constructor(description, priorityLevel, listName){
    this.description = description
    this.priorityLevel = priorityLevel
    this.listName = listName
    all.push(this)
  }

  static all(){
    return all
  }

  newTask(){
    event.preventDefault()
    console.log(event)

    let newTask = new Task(event.target[1].value, event.target[2].value,event.target[0].value)

    let listDivForTask = document.getElementById(newTask.listName).getElementsByTagName("ul")[0]
    console.log(listDivForTask)
    let task = document.createElement('li')
    let input = newTask.description
    let priority = newTask.priorityLevel

    task.id = newTask.listName
    task.class = "task"
    task.innerHTML = `<br><h3>Task Description: </h3> <br>${input}<br><h3>Task Priority: </h3><br>${priority}<br>`
    listDivForTask.appendChild(task)
  }
}
