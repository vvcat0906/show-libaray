import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index.vue') // 路由懒加载
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue') // 路由懒加载
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;