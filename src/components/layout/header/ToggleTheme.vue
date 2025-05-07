<script setup>
import Toggle from "@/components/common/Toggle.vue";
import { useThemeStore } from "@/store/useThemeStore";
const theme = useThemeStore();
console.log(theme.isDark)
</script>

<template>
    <Toggle :onClick="() => theme.toggleTheme()" :label="theme.isDark ? '🌚' : '🌞'" />
</template>
