<script setup>
import { ref, onMounted } from "vue"
import { stylesComponents } from "@/styles/styles";
import { useTaskStore } from "@/store/useTasksStore";

const taskStore = useTaskStore();
const newTaskText = ref("")
console.log("🚀 ~ newTaskText:", newTaskText)

const addTodo = (e) => {
    let task = e.target.value.trim();

    if (task) {
        taskStore.addTask(task)
        task = ""
        newTaskText.value = ""
    }
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
        <label for="add task" class="flex flex-col t w-full gap-2">
            <input v-model="newTaskText" type="text" ref="focusRef" @keyup.enter="addTodo" placeholder="Añádir..."
                id="add-task" :class="stylesComponents.input">
        </label>

    </div>
</template>
