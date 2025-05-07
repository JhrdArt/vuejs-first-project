<script setup>
defineProps({
    label: {
        type: String,
        required: true
    },
    onClick: {
        type: Function,
        required: true
    }
})
</script>

<template>
    <button @click="onClick"
        class="p-2 dark:bg-stone-800 bg-stone-100 cursor-pointer rounded-full transition-all duration-300">
        {{ label }}
    </button>
</template>