<script setup>
import Button from '@/components/common/Button.vue';
import { useTaskStore } from '@/store/useTasksStore';
import { ref } from 'vue';

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

const refInputValue = ref(null)

const deleteCurrentTask = (taskId) => {
    taskStore.removeTask(taskId)
    console.log("🚀 ~ file: TasksLists.vue:26 ~ deleteCurrentTask ~ taskId:", taskId)
}

const editTitle = (taskId) => {
    if (!taskId) return
    const input = document.querySelector(`#input-task-${taskId}`)
    console.log("🚀 ~ editTitle ~ input:", input)
    if (input) {
        input.removeAttribute('readonly');
        input.focus();
        input.addEventListener('blur', () => {
            input.setAttribute('readonly', 'true');

            taskStore.updateTask(taskId, input.value);
            taskStore.saveToLocalStorage()
        });
    }
}

</script>

<template>
    <div class="w-full p-4">
        <div v-if="!props.filteredTasks || props.filteredTasks.length === 0">
            <p class="text-sm text-center">
                No hay tareas por hacer. Empieza añadiendo alguna.
            </p>
        </div>
        <ul v-else class="w-full">
            <li v-for="task in props.filteredTasks" :key="task.id"
                class="grid grid-cols-[16px_1fr_auto] gap-2 items-center dark:hover:bg-stone-500 p-2 rounded-md duration-300 w-full">
                <!-- checkbox -->
                <input type="checkbox" :id="'task-' + task.id" v-model="task.completed" class="hidden">
                <div @click="() => toggleTaskStatus(task.id)"
                    class="w-4 h-4 dark:hover:bg-white dark:bg-stone-200 hover:bg-stone-800/80 bg-stone-800 rounded flex">
                    <svg v-if="task.completed" xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                        stroke-linejoin="round" class="text-green-500 m-auto drop-shadow-2xl">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <!-- input task -->
                <input :class="task.completed ? 'line-through text-green-600' : 'after:content-[`a`]'"
                    class="outline-none" :id="'input-task-' + task.id" v-bind:value="task.title" readonly />
                <!-- actions -->
                <div class="ml-auto space-x-1 flex">
                    <Button @click="() => editTitle(task.id)" variant="primary" size="sm">
                        ✏
                    </Button>
                    <Button @click="() => deleteCurrentTask(task.id)" variant="destructive" size="sm">
                        X
                    </Button>
                </div>
            </li>
        </ul>
    </div>
</template>
