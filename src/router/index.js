import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/space-tourism-website',
        name: 'Home',
        component: Home
    },
    {
        path: '/space-tourism-website/destination',
        name: 'Destination',
        component: () =>
            import ('../views/Destination.vue')
    },
    {
        path: '/space-tourism-website/crew',
        name: 'Crew',
        component: () =>
            import ('../views/Crew.vue')
    },
    {
        path: '/space-tourism-website/technology',
        name: 'Technology',
        component: () =>
            import ('../views/Technology.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router