let addBtn = document.querySelector(".add-btn")
let input = document.querySelector(".input")
let taskList = document.querySelector(".task-here")

addBtn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Enter something")
  } else {
    let listItem = document.createElement("li")
    // leftside
    let tasks = document.createElement("div")
    tasks.className = "tasks"

    let image = document.createElement("img")
    image.className = "uncheck-img"
    image.src = "./unchecked.png"
    let flag = 0
    image.addEventListener("click", () => {
      if (flag == 0) {
        image.src = "./checked.png"
        flag = 1
      } else {
        image.src = "./unchecked.png"
        flag = 0
      }
    })

    let inp = document.createElement("input")
    inp.className = "value-here"
    inp.value = input.value
    inp.setAttribute("readonly", " ")

    // rightside
    let buttons = document.createElement("div")
    buttons.className = "buttons"
    let editBtn = document.createElement("button")
    editBtn.className = "edit-btn"
    editBtn.innerText = "Edit"
    let check = 0
    editBtn.addEventListener("click", () => {
      if (check == 0) {
        editBtn.innerText = "Save"
        inp.removeAttribute("readonly")
        check = 1
      } else {
        editBtn.innerText = "Edit"
        inp.setAttribute("readonly", "")
        check = 0
      }
    })

    let deleteBtn = document.createElement("button")
    deleteBtn.className = "delete-btn"
    deleteBtn.innerText = "Delete"
    deleteBtn.addEventListener("click", () => {
      listItem.remove()
    })

    taskList.append(listItem)
    listItem.append(tasks)
    tasks.append(image)
    tasks.append(inp)
    listItem.append(buttons)
    buttons.append(editBtn)
    buttons.append(deleteBtn)
    input.value = ""
  }
})
