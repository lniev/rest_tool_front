import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {
        path: '/home',
        component: () => import('src/pages/IndexPage.vue'),
      },
      {
        path: '/calendar',
        component: () => import('src/pages/Calendar/Calendar.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErrorNotFound/ErrorNotFound.vue'),
  },
];

export default routes;
