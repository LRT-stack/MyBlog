const routers = [
    {
        path: '/home/blog/qian',
        name: 'qian',
        component: () => import('@/views/blog/qian.vue')
    },
    {
        path: '/home/blog/hou',
        name: 'hou',
        component: () => import('@/views/blog/hou.vue'),
    },
    {
        path: '/home/blog/bug',
        name: 'bug',
        component: () => import('@/views/blog/bug.vue'),
    },
    {
        path: '/home/blog/operation',
        name: 'bug',
        component: () => import('@/views/blog/operation.vue'),
    },
]

export default routers;