import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'



const r: RouteRecordRaw[] = [{
    path: '/',
    component: () => import('../views/index.vue')
},{
    path: '/template',
    name:'template',
    component: () => import('../views/getPdf.vue')
}
]


const router = createRouter({
    history: createWebHistory(),
    routes: r

})


export default router;