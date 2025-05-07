<script setup>
const tasks = [
    {
        id: 1,
        title: 'Tarea 1',
        completed: false
    }
]

const completedTasks = tasks.filter(t => t.completed)


</script>

<template>
    <div class="w-full p-4">
        <ul class="">
            <li v-for="task in tasks" :key="task.id"
                class="flex gap-2 items-center dark:hover:bg-stone-500 p-2 rounded-md duration-300">
                <input type="checkbox" :id="'task-1' + task.id" v-model="task.completed" class="hidden">
                <div class="w-5 h-5 bg-blue-950 rounded-full flex">
                    <div :id="'task-id' + task.id" typeof="checkbox" role="checkbox" aria-checked="false"
                        @click="task.completed = !task.completed"
                        :class="task.completed ? 'bg-red-600 hover:bg-red-500' : 'bg-blue-600 hover:bg-blue-500'"
                        class="w-3 h-3  m-auto rounded-full">
                    </div>
                </div>
                <label :class="task.completed ? 'line-through' : ''" :for="'task-' + task.id">{{ task.title }}</label>
            </li>
        </ul>
    </div>
</template>
