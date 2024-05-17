import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';
import TodoManager from '../components/TodoManager.vue';
import TodoDetail from '../components/TodoDetail.vue';
import Login from '../views/Login.vue';
const history = createWebHistory();
const routes = [
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: About,
  },
  {
    path: '/',
    redirect: '/todo-manager',
  },
  { path: '/:notfound(.*)', component: NotFound },
  { path: '/todo-manager', name: 'TodoManager', component: TodoManager },
  { path: '/login', name: 'Login', component: Login },
  { path: '/todo-detail/:todoId', name: 'TodoDetail', component: TodoDetail },
];
const router = createRouter({
  history,
  routes,
  linkActiveClass: 'text-purple-600',
});
export default router;
