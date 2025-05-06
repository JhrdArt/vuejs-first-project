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
    <div class="task-container">
        <ul class="task-lists">
            <li v-for="task in tasks" :key="task.id" class="task">
                <input type="checkbox" :id="'task-1' + task.id" v-model="task.completed">
                <label :for="'task-' + task.id">{{ task.title }}</label>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.task-container {
    width: 100%;
    max-width: 450px;
    display: flex;
    margin: 10px auto;
    background: blue;
}

.task-lists {
    list-style: none;
    background: #000;
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    height: 200px;
}

.task {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    background: #000;
    box-sizing: border-box;

}
</style>