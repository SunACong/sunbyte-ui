<script setup lang="ts">
    import Footer from './sections/Footer.vue';
    import Navbar from './sections/Navbar.vue';
</script> 

<template>
    <div class="">
        <Navbar />
        <router-view />
        <Footer />
    </div>
</template>

<style scoped>

</style>