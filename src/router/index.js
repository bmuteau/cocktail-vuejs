import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/public/Home.vue'
import Cocktail from '@/views/public/Cocktail.vue'
import Contact from '@/views/public/Contact.vue'
import NotFound from '@/views/public/NotFound.vue'

import PublicLayout from '@/views/public/Layout.vue'

const routes = [

{
  path: '/',
  name: 'public',
  component:PublicLayout,
  children: [
    { path: '/', name: 'home', component: Home },
    { path: '/cocktails', name: 'cocktails', component: Cocktail},
    { path: '/contact', name: 'contact', component: Contact},
  ]
},
{
  path: '/:pathMatch(.*)*', 
  component:NotFound
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
