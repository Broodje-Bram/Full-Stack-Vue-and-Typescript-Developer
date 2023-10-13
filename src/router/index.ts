import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import UserDetailPage from '@/views/UserDetailPage.vue';
import FakeLoginPage from '@/views/FakeLoginPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user/:id',
    name: 'UserDetail',
    component: UserDetailPage,
  },
  {
    path: '/fake-login',
    name: 'FakeLogin',
    component: FakeLoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
