'use strict'

export default class Task {
  constructor(task, owner, isDone = false) {
    this.task = task
    this.owner = owner
    this.isDone = isDone
  }

  toggleTask() {
    this.isDone = !this.isDone
  }
}

export const parseTask = taskData => {
  if (!taskData) return null
  const task = new Task(taskData.task, taskData.owner, taskData.isDone)

  return task
}
