<template>
    <div class="flex ml-auto items-center gap-2">
        <ul class="flex gap-2" v-for="(link, index) in navigation" :key="index">
            <li :key="index"><router-link
                    class="py-2 px-4 hover:bg-stone-50 dark:hover:bg-stone-950/50 rounded duration-300"
                    :to="link.path">{{
                        link.name }}</router-link></li>
        </ul>
        <ToggleTheme />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ToggleTheme from './ToggleTheme.vue';
const navigation = ref([
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Task',
        path: '/tasks',
    },
    {
        name: 'About',
        path: '/about',
    },
])
</script>