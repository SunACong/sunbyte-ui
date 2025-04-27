<script setup lang="ts">
    import { Switch } from '@/components/ui/switch'
    import { ref, onMounted } from 'vue'
    import { MoonIcon, SunIcon } from 'lucide-vue-next'

    const isDark = ref(false)

    const toggleTheme = () => {
        isDark.value = !isDark.value
        document.documentElement.classList.toggle('dark')
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }

    onMounted(() => {
        const theme = localStorage.getItem('theme')
        isDark.value = theme === 'dark'
        if (isDark.value) {
            document.documentElement.classList.add('dark')
        }
    })
</script>

<template>
    <Switch :model-value="isDark" @update:model-value="toggleTheme">
        <template #thumb>
            <MoonIcon v-if="isDark" class="h-4 w-4" />
            <SunIcon v-else class="text-primary h-4 w-4" />
        </template>
    </Switch>
</template>

<style scoped></style>
