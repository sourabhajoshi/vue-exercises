import HomePage from "pages/HomePage.vue";
import IntroductionPage from "pages/IntroductionPage.vue";
import OwnerPage from "pages/OwnerPage.vue";
import EssentialsPage from "pages/EssentialsPage.vue";
import RouterPage from "pages/RouterPage.vue";
import StorePage from "pages/StorePage.vue";

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        component: HomePage,
      },
      {
        path: '/owner',
        component: OwnerPage,
      },
      {
        path: '/introduction',
        component: IntroductionPage,
      },
      {
        path:'/essentials',
        component: EssentialsPage,
      },
      {
        path:'/router',
        component:RouterPage
      },
      {
        path:'/router',
        component:RouterPage
      },
      {
        path: '/pinia',
        component: StorePage
      }
    ],
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
