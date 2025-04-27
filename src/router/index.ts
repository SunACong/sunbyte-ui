import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Guide from '@/pages/Guide.vue'
import Components from '@/pages/Components.vue'
import Theme from '@/pages/Theme.vue'
import Resources from '@/pages/Resources.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            redirect: '/home',
        },
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/guide',
            name: 'guide',
            component: Guide,
        },
        {
            path: '/components',
            name: 'components',
            component: Components,
        },
        {
            path: '/theme',
            name: 'theme',
            component: Theme,
        },
        {
            path: '/resources',
            name: 'resources',
            component: Resources,
        },
    ],
})

export default router
