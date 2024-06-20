// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignUp from '../views/SignUp.vue';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';

const routes = [
  { path: '/signup', component: SignUp },
  { path: '/login', component: Login },
  { path: '/home', component: Home, meta: { requiresAuth: true } },
  { path: '/', redirect: '/login' },  // Redirigir a login por defecto
  { path: '/:catchAll(.*)', redirect: '/login' } // Redirigir cualquier otra ruta a login
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (requiresAuth && !user) {
      next('/login');
    } else if ((to.path === '/login' || to.path === '/signup') && user) {
      next('/home');
    } else {
      next();
    }
  });
});

export default router;
