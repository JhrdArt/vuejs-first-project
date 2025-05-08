<script setup>
import { onMounted } from 'vue';
import { useThemeStore } from './store/useThemeStore';
import Header from './components/layout/header/Header.vue';
const themeStore = useThemeStore();
onMounted(() => {
  console.log('App mounted');
  themeStore.initTheme();
})
</script>

<template>
  <main class="space-y-5">
    <Header />
    <router-view />
  </main>
</template>
