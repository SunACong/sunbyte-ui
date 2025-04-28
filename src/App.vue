<template>
    <div class="px-60">
        <Navbar class="my-4" />
        <main class="opacity-90 transition-transform">
            <Transition name="fade" mode="out-in">
                <RouterView />
            </Transition>
        </main>
        <Footer class="my-4" />
    </div>
</template>

<script setup lang="ts">
    import Navbar from './sections/Navbar.vue'
    import Footer from './sections/Footer.vue'
</script>

<style scoped></style>
