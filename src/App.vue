<script setup>
import { onMounted } from 'vue';
import TodoApp from './view/TodoApp.vue';
import { useThemeStore } from './store/useThemeStore';
const themeStore = useThemeStore();
onMounted(() => {
  console.log('App mounted');
  themeStore.initTheme();
})
</script>

<template>
  <TodoApp />
</template>
