import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import WorkspaceView from '@/workspace/WorkspaceView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: WorkspaceView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
