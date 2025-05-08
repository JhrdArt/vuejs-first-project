<script setup>
import Button from '@/components/common/Button.vue';
import { useTaskStore } from '@/store/useTasksStore';
defineProps({
    currentFilter: {
        type: String,
        default: 'all'
    }
})
const emit = defineEmits(["update:currentFilter"]);
const taskStore = useTaskStore();
const setFilter = (filter) => {
    console.log("filter", filter)
    emit("update:currentFilter", filter)
}
console.log("🚀 ~ setFilter ~ setFilter:", setFilter)

</script>

<template>
    <div class="flex gap-2 px-4 w-full items-center">
        <Button @click="() => setFilter('completed')" variant="primary" size="sm">
            Completadas
        </Button>
        <Button @click="() => setFilter('pending')" variant="primary" size="sm">
            Por completar
        </Button>
        <Button @click="() => setFilter('all')" variant="primary" size="sm">
            Todas
        </Button>
        <Button @click="() => taskStore.deleteAllTasks()" variant="destructive" size="sm">
            Vaciar 🗑
        </Button>
    </div>
</template>