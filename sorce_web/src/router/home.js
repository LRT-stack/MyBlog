import BlogRouter from './blog/index'
import MineRouter from './mine/index'

const homeRoutes = [
    {
        path: '/home/index',
        name: 'Home',
        component: () => import('../views/index.vue')
    },
    {
        path: '/home/blog',
        name: 'blog',
        redirect : '/home/blog/qian',
        component: () => import('../views/blog/index.vue'),
        children : BlogRouter,
    },
    {
        path: '/home/mine',
        name: 'mine',
        redirect : '/home/mine/love',
        component: () => import('../views/mine/index.vue'),
        children : MineRouter,
    },
  
    
]
export default homeRoutes;