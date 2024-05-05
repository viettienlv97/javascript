'use strict'

import { getFromStorage, saveToStorage } from './storage'
import { parseUser } from '../models/User'
import Task, { parseTask } from '../models/Task'
import { directTo } from '../scripts/helper'

// Data
const tasksKey = 'TASK_ARRAY'
const userKey = 'USER'
const user = parseUser(getFromStorage(userKey, null))
if (!user) directTo('login')
const todoArr = getFromStorage(tasksKey, [])
// DOM
const inputTask = document.getElementById('input-task')
const btnAdd = document.getElementById('btn-add')
const todoList = document.getElementById('todo-list')

// List template
const taskTemplate = (task, index) => {
  return `
  <li id="task-number-${index}" class="${task.isDone ? 'checked' : ''}">
    ${task.task}
    <span role="delete" class="close">×</span>
  </li>
  `
}

// Function
const toggleTask = (e, i) => {
  if (e.target.role === 'delete') {
    deleleTask(i)
  } else {
    const task = parseTask(todoArr.find((todo, index) => index == i))
    console.log(task)
    task.toggleTask()
    todoArr[i] = task
    saveToStorage(tasksKey, todoArr)
    renderList()
  }
}
const deleleTask = i => {
  todoArr.splice(i, 1)
  saveToStorage(tasksKey, todoArr)
  renderList()
}
const validateTask = () => {
  const todo = inputTask.value
  if (!todo) {
    inputTask.classList.add('invalid')
    inputTask.focus()
    return null
  }

  return todo
}
const clearInput = () => {
  inputTask.value = ''
  inputTask.focus()
}
const handleAddTodo = e => {
  e.preventDefault()
  const todo = validateTask()
  if (!todo) return

  const task = new Task(todo, user.username)
  todoArr.push(task)
  saveToStorage(tasksKey, todoArr)
  renderList()
  clearInput()
}

// Add event listener
const addEventList = () => {
  if (!todoArr.length) return
  for (let i = 0; i < todoArr.length; i++) {
    const todo = document.getElementById('task-number-' + i)
    if (todo) {
      todo.addEventListener('click', e => toggleTask(e, i))
    }
  }
}
inputTask.addEventListener('keyup', e => {
  if (e.target.value) inputTask.classList.remove('invalid')
})
btnAdd.addEventListener('click', handleAddTodo)

// Render list
;(renderList = () => {
  if (!todoArr.length) {
    todoList.innerHTML = ''
    return
  }

  let list = ''
  for (let i = 0; i < todoArr.length; i++) {
    if (todoArr[i].owner === user.username) list += taskTemplate(todoArr[i], i)
  }
  todoList.innerHTML = list
  addEventList()
})()
