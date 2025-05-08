<script setup>
import { cx } from '@/modules/utils/cx';

defineProps({
    variant: {
        type: String,
        required: false,
        default: 'primary'
    },
    size: {
        type: String,
        required: false,
        default: 'md'
    },
    className: {
        type: String,
        required: false,
        default: null
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false
    }
})

// Estilos base que se aplican a todos los botones
const baseButton = "font-medium rounded-md transition-colors focus:outline-none focus:ring-1 focus:ring-offset-2 dark:focus:ring-offset-stone-900 focus:ring-offset-white text-sm text-nowrap cursor-pointer"

// Variantes de tamaño
const sizes = {
    sm: 'py-1 px-3 ',
    md: 'py-2 px-4 ',
    lg: 'py-3 px-6 ',
}

// Variantes de estilo usando la paleta stone
const variants = {
    primary: 'bg-stone-800 hover:bg-stone-900 text-white dark:bg-stone-700 dark:hover:bg-stone-600 dark:text-stone-100 focus:ring-stone-500',
    secondary: 'bg-stone-200 hover:bg-stone-300 text-stone-800 dark:bg-stone-600 dark:hover:bg-stone-500 dark:text-stone-100 focus:ring-stone-400',
    outline: 'border border-stone-300 hover:bg-stone-100 text-stone-700 dark:border-stone-600 dark:hover:bg-stone-700 dark:text-stone-300 focus:ring-stone-400',
    ghost: 'hover:bg-stone-100 text-stone-700 dark:hover:bg-stone-800 dark:text-stone-300 focus:ring-stone-400',
    destructive: 'bg-red-600 hover:bg-red-700 text-white dark:bg-red-700 dark:hover:bg-red-600 focus:ring-red-500',
    success: 'bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-600 focus:ring-green-500',
    warning: 'bg-amber-500 hover:bg-amber-600 text-white dark:bg-amber-600 dark:hover:bg-amber-500 focus:ring-amber-400',
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none'
}
</script>

<template>
    <button :class="cx(
        baseButton,
        sizes[size],
        variants[variant],
        disabled ? variants.disabled : '',
        className
    )" :disabled="disabled">
        <slot></slot>
    </button>
</template>