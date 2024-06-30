<template>
    <footer class="my-10">
        <p class="text-center text-md text-slate-500">
            © {{ year }} Cerana Team. All rights reserved.
        </p>
    </footer>
</template>
<script setup lang="ts">
const year = new Date().getFullYear()
</script>
