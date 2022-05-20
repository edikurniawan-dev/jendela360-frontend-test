<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
    <header>
        <div>
            <nav class="text-center mt-5">
                <RouterLink to="/" class="hover:underline">Form</RouterLink>
                <RouterLink to="/dashboard" class="ml-4 hover:underline"
                    >Dashboard</RouterLink
                >
            </nav>
        </div>
    </header>

    <RouterView />
</template>
