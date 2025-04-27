<template>
  <div class="flex justify-around items-center">
    <div class="flex justify-center items-center gap-2" @click="goHome">
        <img src="../assets/vue.svg" alt="">
        <h1 class="text-primary">Sunbyte UI</h1>
    </div>
    <div class="flex justify-center items-center gap-x-10">
        <router-link to="/guide">指南</router-link>
        <router-link to="/components">组件</router-link>
        <router-link to="/theme">主题</router-link>
        <router-link to="/resources">资源</router-link>
        <ToggleTheme />
    </div>
  </div>
</template>

<script setup lang="ts">
import ToggleTheme from '@/components/ToggleTheme.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goHome = () => {
  router.push('/');
};
</script>