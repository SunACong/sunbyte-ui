<template>
    <div class="flex items-center justify-end">
        <div class="mr-auto flex items-center justify-center gap-x-20">
            <div>
                <h1 class="mb-4 font-bold">链接</h1>
                <div v-for="item in linkList" :key="item.id">
                    <p>{{ item.title }}</p>
                </div>
            </div>
            <div class="">
                <h1 class="mb-4 font-bold">社区</h1>
                <div v-for="item in linkList1" :key="item.id">
                    <p>{{ item.title }}</p>
                </div>
            </div>
        </div>
        <div>1111</div>
    </div>
</template>

<script setup lang="ts">
    const linkList = [
        { id: 1, title: '组件列表', link: '/components' },
        { id: 2, title: '主题定制', link: '/theme' },
        { id: 3, title: '资源下载', link: '/resources' },
        { id: 4, title: '使用指南', link: '/guide' },
        { id: 5, title: '关于我们', link: '/about' },
        { id: 6, title: '联系我们', link: '/contact' },
    ]
    const linkList1 = [
        { id: 1, title: '组件列表', link: '/components' },
        { id: 2, title: '主题定制', link: '/theme' },
        { id: 3, title: '资源下载', link: '/resources' },
        { id: 4, title: '使用指南', link: '/guide' },
        { id: 5, title: '关于我们', link: '/about' },
        { id: 6, title: '联系我们', link: '/contact' },
    ]
</script>
