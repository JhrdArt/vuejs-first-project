<template>
    <div :class="stylesComponents.container" class="p-4!">
        <div :class="stylesComponents.divContainer" class="hover:shadow-md border border-stone-400">
            <h1 class="text-3xl uppercase mb-5">Crear tarea</h1>
            <SearchComponent />
            <TasksLists />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SearchComponent from './SearchComponent.vue';
import TasksLists from './TasksLists.vue';
import { stylesComponents } from '@/styles/styles';

const feature = ref();
</script>

<style lang="css" scoped></style>