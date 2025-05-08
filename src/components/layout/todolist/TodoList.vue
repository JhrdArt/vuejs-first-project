<script setup>
import { computed, onMounted, ref } from 'vue';
import TasksLists from './TasksLists.vue';
import { stylesComponents } from '@/styles/styles';
import FilterTasks from './FilterTasks.vue';
import { useTaskStore } from '@/store/useTasksStore';
import InputForAddTask from './InputForAddTask.vue';
const taskStore = useTaskStore()
const currentFilter = ref("all");


onMounted(() => {
    taskStore.fetchTasks()
    taskStore.loadFromLocalStorage()
})

const filteredTasks = computed(() => {
    if (currentFilter.value === "all") {
        return taskStore.getTasks
    } else if (currentFilter.value === "completed") {
        return taskStore.getCompletedTasks
    } else if (currentFilter.value === "pending") {
        return taskStore.getPendingTasks
    }
    return []
})
const updateFilter = (newFilter) => {
    currentFilter.value = newFilter;
};
</script>

<template>
    <div :class="stylesComponents.container" class="p-4!">
        <div :class="stylesComponents.divContainer" class="hover:shadow-md border border-stone-400 w-full md:w-128">
            <h1 class="text-3xl uppercase mb-5">Crear tarea</h1>
            <InputForAddTask />
            <FilterTasks @update:current-filter="updateFilter" :currentFilter="currentFilter" />
            <TasksLists :filteredTasks="filteredTasks" />
        </div>
    </div>
</template>