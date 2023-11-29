import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/home/Home.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            component: Home,
            path: '/',
            name: 'home'
        }
    ]
       
})

export default router;