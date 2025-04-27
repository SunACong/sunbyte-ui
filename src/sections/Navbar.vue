<template>
    <div class="flex items-center justify-around">
        <div class="flex items-center justify-center gap-2" @click="goHome">
            <img src="../assets/vue.svg" alt="" />
            <h1 class="text-primary">Sunbyte UI</h1>
        </div>
        <div class="flex items-center justify-center gap-x-10">
            <div
                v-for="item in linkList"
                :key="item.id"
                @click="currentTab = item.id"
                :class="[
                    'text-base transition-all',
                    currentTab === item.id ? 'border-b-2' : 'border-b-0',
                ]">
                <router-link :to="item.link">{{ item.title }}</router-link>
            </div>
            <ToggleTheme />
        </div>
    </div>
</template>

<script setup lang="ts">
    import ToggleTheme from '@/components/doc/ToggleTheme.vue'
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const currentTab = ref(0)

    // 路由
    const router = useRouter()
    const goHome = () => {
        router.push('/')
    }
    const linkList = [
        { id: 1, title: '指南', link: '/guide' },
        { id: 2, title: '组件', link: '/components' },
        { id: 3, title: '主题', link: '/theme' },
        { id: 4, title: '资源', link: '/resources' },
    ]
</script>
