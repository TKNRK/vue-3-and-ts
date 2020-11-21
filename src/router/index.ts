import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import ByeWorld from '@/components/ByeWorld.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/hello',
            name: 'Hello',
            component: HelloWorld,
        },
        {
            path: '/bye',
            name: 'Bye',
            component: ByeWorld,
        },

        // catch all
        {
            path: '/:pathMatch',
            redirect: 'hello',
        }
    ]
});