import { createRouter, createWebHistory } from 'vue-router';
import InboxView from '../views/inbox/InboxView.vue';
import ArchiveView from '../views/archive/ArchiveView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/inbox',
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: InboxView,
      meta: {
        title: 'Inbox',
      },
    },
    {
      path: '/archive',
      name: 'archive',
      component: ArchiveView,
      meta: {
        title: 'Archive',
      },
    },
  ],
});

export default router;
