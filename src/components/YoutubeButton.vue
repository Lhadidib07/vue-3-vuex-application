<template>
    <a
        :href="href"
        target="_blank"
        class="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors">
        <slot></slot>
    </a>
</template>

<script setup>
// Directement déclarer les props sans assigner à une variable
defineProps({
    href: String

});
</script>