const routers = [
    {
        path: '/home/mine/love',
        name: 'love',
        component: () => import('@/views/mine/love.vue')
    },
    {
        path: '/home/mine/project',
        name: 'project',
        component: () => import('@/views/mine/project.vue'),
    },
    {
        path: '/home/mine/contact',
        name: 'contact',
        component: () => import('@/views/mine/contact.vue'),
    },
    
]

export default routers;