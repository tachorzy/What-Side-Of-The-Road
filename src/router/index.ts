import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Which Side of the Road?',
        metaTags: [
          {
            name: 'description',
            content: 'Find if a country drives on the left or the right.'
          },
          {
            property: 'og:description',
            content: 'Find if a country drives on the left or the right.'
          }
        ]
      }
    },
  ]
})


router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).forEach(el => el.parentNode?.removeChild(el));

  if (to.meta.metaTags) {
    (to.meta.metaTags as Array<{ name?: string; property?: string; content: string }>).forEach(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key as keyof typeof tagDef] as string);
      });

      tag.setAttribute('data-vue-router-controlled', '');

      document.head.appendChild(tag);
    });
  }

  next();
});

export default router
