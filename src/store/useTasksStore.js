import { defineStore } from 'pinia'
const dateNow = Date.now()
console.log('🚀 ~ date:', dateNow)
export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    isLoading: false,
    error: null
  }),
  getters: {
    getTasks (state) {
      return state.tasks
    },
    getCompletedTasks (state) {
      return state.tasks.filter(task => task.completed)
    },
    getPendingTasks (state) {
      return state.tasks.filter(task => !task.completed)
    },
    totalTasks (state) {
      return state.tasks.length
    },
    totalCompletedTasks (state) {
      return state.tasks.filter(task => task.completed).length
    },
    totalPendingTasks (state) {
      return state.tasks.filter(task => !task.completed).length
    }
  },
  actions: {
    addTask (taskTitle) {
      const newTask = {
        id: Date.now().toString(),
        title: taskTitle,
        completed: false,
        createdAt: new Date().toISOString()
      }
      this.tasks.push(newTask)
      this.saveToLocalStorage()
      return newTask
    },
    removeTask (taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId)
      this.saveToLocalStorage()
    },
    toggleTaskStatus (taskId) {
      const task = this.tasks.find(task => task.id === taskId)
      if (task) {
        task.completed = !task.completed
        this.saveToLocalStorage()
      }
    },
    deleteAllTasks () {
      return (this.tasks = [])
    },
    updateTask (taskId, newTitle) {
      const task = this.tasks.find(t => t.id === taskId)
      if (task) {
        task.title = newTitle
      }
    },
    saveToLocalStorage () {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    loadFromLocalStorage () {
      const tasks = localStorage.getItem('tasks')
      if (tasks) {
        this.tasks = JSON.parse(tasks)
      }
    },
    async fetchTasks () {
      this.isLoading = true
      this.error = null
      try {
        await new Promise(
          resolve => setTimeout(resolve, 500),
          this.loadFromLocalStorage()
        )
      } catch (error) {
        this.error =
          error && error instanceof Error ? error.message : 'Unknown error'
        console.error(error.message)
      } finally {
        this.isLoading = false
      }
    },
    taskFindById (taskId) {
      return this.tasks.find(task => task.id === taskId)
    }
  }
})
