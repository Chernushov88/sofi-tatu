
const routes = [
  {
    path: '/',
    component: () => import('layouts/MenuLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/recording', component: () => import('pages/Recording.vue') },
      { path: '/project', component: () => import('pages/Project.vue') },
      { path: '/profile', component: () => import('pages/Profile.vue') },
      { path: '/affilials', component: () => import('pages/Affilials.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
