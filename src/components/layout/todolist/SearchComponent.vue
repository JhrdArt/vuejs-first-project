<script setup>
import { ref, onMounted } from "vue"
import TasksLists from "./TasksLists.vue";
import { stylesComponents } from "@/styles/styles";
const addTodo = (e) => {
    console.log(e.target.value)
}
const focusRef = ref(null)

onMounted(() => {
    if (focusRef.value) {
        focusRef.value.focus()
    }
});
</script>
<template>
    <div class="w-full p-4 rounded-sm space-y-3">
        <p class="ext-sm font-semibold">
            Añadir nueva tarea
        </p>
        <label for="add task" class="flex flex-col t w-full gap-2" v-bind:key="enter">
            <input type="text" ref="focusRef" @keyup.enter="addTodo" placeholder="Añádir..." id="search"
                :class="stylesComponents.input">
        </label>
    </div>
</template>
