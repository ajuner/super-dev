import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw, RouteMeta } from 'vue-router';

interface MenuRouteMeta {
  title?: string;
}

type MenuRouteItem = {
  children?: MenuRouteItem[];
  meta?: MenuRouteMeta & RouteMeta;
} & RouteRecordRaw;

const staticRoutes: MenuRouteItem[] = [
  {
    path: '/',
    name: 'home',
    meta: {},
    component: () => import('src/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {},
    component: () => import('src/views/About.vue'),
  },
];

export default createRouter({
  history: createWebHashHistory('/'),
  routes: staticRoutes,
});
