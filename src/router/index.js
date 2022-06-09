import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/public/Home.vue'
import Cocktail from '@/views/public/Cocktail.vue'
import Contact from '@/views/public/Contact.vue'
import NotFound from '@/views/public/NotFound.vue'
import PublicLayout from '@/views/public/Layout.vue'

import AdminLayout from '@/views/admin/Layout.vue'
import Dashboard from '@/views/admin/Dashboard.vue'

import UserIndex from '@/views/admin/users/UserIndex.vue'
import UserEdit from '@/views/admin/users/UserEdit.vue'
import UserAdd from '@/views/admin/users/UserAdd.vue'

import CocktailEdit from '@/views/admin/cocktails/CocktailEdit.vue'
import CocktailIndex from '@/views/admin/cocktails/CocktailIndex.vue'

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
  path: '/admin',
  name: 'admin',
  component: AdminLayout,
  children: [
    { path: '/dashboard', name: 'dashboard', component: Dashboard },
    { path: 'users/index', component: UserIndex },
    { path: 'users/edit/:id', component: UserEdit },
    { path: 'users/add', component: UserAdd },

    { path: 'cocktails/index', component: CocktailIndex },
    { path: 'cocktails/edit/:id', component: CocktailEdit },
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
