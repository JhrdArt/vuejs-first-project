<script setup>
import Nav from './Nav.vue';
import { stylesComponents } from "@/styles/styles"
</script>

<template>
    <header :class="stylesComponents.container" class="rounded-md mt-5">
        <div class="flex w-10 h-10 my-auto bg-stone-950/50 rounded-full ">
            <img class="w-6 h-6 object-contain m-auto aspect-[173/150]" src="../../../assets/logo.svg" alt="logo" />
        </div>
        <Nav />
    </header>
</template>
