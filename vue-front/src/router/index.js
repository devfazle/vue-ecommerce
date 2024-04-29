import { createRouter, createWebHistory } from 'vue-router'
import AdminMainLayout from '@/admin-panel/views/MainLayout.vue'
import AdminDashboard from '@/admin-panel/views/Dashboard.vue'
import AdminForms from '@/admin-panel/views/Forms.vue'
import ContactUs from '@/admin-panel/views/ContactUs.vue'
import Products from '@/admin-panel/views/Products.vue'
import FrontMainLayout from '@/front-panel/views/MainLayout.vue'
import Product from '@/front-panel/views/Product.vue'
import FrontPage from '@/front-panel/views/FrontPage.vue'
import Categorylist from '@/admin-panel/foysal/components/category/Categorylist.vue'
import Categoryadd from '@/admin-panel/foysal/components/category/Categoryadd.vue'
import Sub_categoryAdd from '@/admin-panel/foysal/components/category/sub_category/Sub_categoryAdd.vue'
import Sub_categoryLayout from '@/admin-panel/foysal/components/category/sub_category/Sub_categoryLayout.vue'
import Categoryupdate from '@/admin-panel/foysal/components/category/Categoryupdate.vue'
import Sub_categorylist from '@/admin-panel/foysal/components/category/sub_category/Sub_categorylist.vue'
import Sub_categoryupdate from '@/admin-panel/foysal/components/category/sub_category/Sub_categoryupdate.vue'
import Wishlistlayout from '@/admin-panel/foysal/components/wishlist/Wishlistlayout.vue'
import Wishlistadd from '@/admin-panel/foysal/components/wishlist/Wishlistadd.vue'
import Wishlisttable from '@/admin-panel/foysal/components/wishlist/Wishlisttable.vue'
import Wishlistupdate from '@/admin-panel/foysal/components/wishlist/Wishlistupdate.vue'






const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'admin',  
      component: AdminMainLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: AdminDashboard,
        },
        {
          path: 'forms',
          name: 'adminforms',
          component: AdminForms,
        },
        {
          path: 'contact',
          name: 'contactus',
          component: ContactUs,
        },
        {
          path: 'product',
          name: 'products',
          component: Products,
        },
        {
          path: 'categorylist',
          name: 'categorylist',
          component: Categorylist,
        },
        {
          path: 'category',
          name: 'category',
          component:Categoryadd,
        },
        {
          path: 'categoryupdate/:id',
          name: 'categoryupdate',
          component:Categoryupdate,
        },
        {
          path:'sub_category',
          name:'sub-category',
          component:Sub_categoryLayout,
          children: [
            {
              path: 'sub_add',
              name: 'sub_add',
              component:Sub_categoryAdd,
            },
            {
              path: 'sub_list',
              name: 'sub_list',
              component:Sub_categorylist,
            },
            {
              path: 'sub_update/:id',
              name: 'sub_update',
              component:Sub_categoryupdate,
            },
          
          ]
        },
        {
          path:'wishlist',
          name:'wishlist',
          component:Wishlistlayout,
          children: [
            {
              path: 'wishlistadd',
              name: 'wishlistadd',
              component:Wishlistadd,
            },
            {
              path: 'wishlisttable',
              name: 'wishlisttable',
              component:Wishlisttable,
            },
            {
              path: 'wishlistupdate/:id',
              name: 'wishlistupdate',
              component:Wishlistupdate,
            },
          ]
        }
      ],
    },
    {
      path: '/',
      name: 'h',
      component: FrontMainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: FrontPage,
        },
        {
          path: 'products',
          name: 'products',
          component: Product,
        },
      ],
    }
  ]
})

export default router
