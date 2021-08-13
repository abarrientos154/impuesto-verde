
const routes = [
  {
    path: '/inicio',
    component: () => import('layouts/MainLayout.vue'),
    children: [
    ]
  },
  {
    path: '/home',
    component: () => import('pages/Home.vue')
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    redirect: '/home'
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
