<script setup>
import Button from '@/components/common/Button.vue';
import { useTaskStore } from '@/store/useTasksStore';

const taskStore = useTaskStore()

const props = defineProps({
    filteredTasks: {
        type: Array,
        required: true
    }
})

const toggleTaskStatus = (taskId) => {
    taskStore.toggleTaskStatus(taskId)
}

const deleteCurrentTask = (taskId) => {
    taskStore.removeTask(taskId)
    console.log("🚀 ~ file: TasksLists.vue:26 ~ deleteCurrentTask ~ taskId:", taskId)
}

</script>

<template>
    <div class="w-full p-4">
        <div v-if="!props.filteredTasks || props.filteredTasks.length === 0">
            <p class="text-sm text-center">
                No hay tareas por hacer. Empieza añadiendo alguna.
            </p>
        </div>
        <ul v-else class="">
            <li v-for="task in props.filteredTasks" :key="task.id"
                class="flex gap-2 items-center dark:hover:bg-stone-500 p-2 rounded-md duration-300">
                <input type="checkbox" :id="'task-1' + task.id" v-model="task.completed" class="hidden">
                <div @click="() => toggleTaskStatus(task.id)" class="w-4 h-4 hover:bg-white bg-stone-50 rounded flex">
                    <svg v-if="task.completed" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                        stroke-linejoin="round" class="text-green-500">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <label :class="task.completed ? 'line-through' : ''" :for="'task-' + task.id">{{ task.title
                    }}</label>
                <div class="ml-auto space-x-2">
                    <Button variant="primary">
                        🖊
                    </Button>
                    <Button @click="() => deleteCurrentTask(task.id)" variant="destructive">
                        X
                    </Button>
                </div>
            </li>
        </ul>
    </div>
</template>
