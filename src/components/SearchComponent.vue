<script setup>
import { ref, onMounted } from "vue"
import TasksLists from "./TasksLists.vue";
const addTodo = (e) => {
    console.log(e.target.value)
}
const focusRef = ref

onMounted(() => {
    focusRef.value.focus()
});
</script>
<template>
    <div>
        <label class="input-label" for="add task">
            Añadir nueva tarea
            <input type="text" ref="focusRef" @keyup.enter="addTodo" placeholder="Añádir una tarea..." id="search"
                class="ring-effect">
        </label>
        <TasksLists />
    </div>
</template>

<style>
.input-label {
    max-width: 250px;
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: start;
    font-size: .75rem;
    font-weight: 600;
}

#search {
    max-width: 450px;
    width: 100%;
    background: rgb(12, 11, 11);
    color: rgb(167, 160, 160);
    border: 1px solid rgb(57, 88, 226);
    border-radius: 5px;
    padding: 5px;

}

.ring-effect:focus {
    outline: 1px solid rgba(57, 88, 226, 0.5);
    outline-offset: 2px;
}
</style>