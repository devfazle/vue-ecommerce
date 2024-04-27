import { createRouter, createWebHistory } from 'vue-router'
import AdminMainLayout from '@/admin-panel/views/MainLayout.vue'
import AdminDashboard from '@/admin-panel/views/Dashboard.vue'
import AdminForms from '@/admin-panel/views/Forms.vue'
import ContactUs from '@/admin-panel/views/ContactUs.vue'
import Products from '@/admin-panel/views/Products.vue'
import FrontMainLayout from '@/front-panel/views/MainLayout.vue'
import Product from '@/front-panel/views/Product.vue'
import FrontPage from '@/front-panel/views/FrontPage.vue'
import Roles from '@/admin-panel/nazad/Roles/Roles.vue'
import Users from '@/admin-panel/nazad/Users/Users.vue'
import UserCreate from '@/admin-panel/nazad/Users/UserCreate.vue'
import RoleCreate from '@/admin-panel/nazad/Roles/RoleCreate.vue'
import UserEdit from '@/admin-panel/nazad/Users/UserEdit.vue'
import RoleEdit from '@/admin-panel/nazad/Roles/RoleEdit.vue'
import Payment from '@/admin-panel/nazad/Payment/Payment.vue'
import PaytmentCreate from '@/admin-panel/nazad/Payment/PaytmentCreate.vue'
import PaymentEdit from '@/admin-panel/nazad/Payment/PaymentEdit.vue'

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
          path: 'roles',
          name: 'roles',
          component: Roles,
        },
        {
          path: 'rolecreate',
          name: 'rolecreate',
          component: RoleCreate,
        },
        {
          path: 'roleedit/:id',
          name: 'roleedit',
          component: RoleEdit,
        },
        {
          path: 'users',
          name: 'users',
          component: Users,
        },
        {
          path: 'usercreate',
          name: 'usercreate',
          component: UserCreate,
        },
        {
          path: 'useredit/:id',
          name: 'useredit',
          component: UserEdit
        },
        {
          path: 'payment',
          name: 'payment',
          component: Payment,
        },
        {
          path: 'paymentcreate',
          name: 'paymentcreate',
          component: PaytmentCreate,
        },
        {
          path: 'paymentedit/:id',
          name: 'paymentedit',
          component: PaymentEdit
        },
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
