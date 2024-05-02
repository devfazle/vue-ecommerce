import { createRouter, createWebHistory } from "vue-router";
import AdminDashboard from "@/admin-panel/views/Dashboard.vue";
import AdminForms from "@/admin-panel/views/Forms.vue";
import ContactUs from "@/admin-panel/views/ContactUs.vue";
import Products from "@/admin-panel/views/Products.vue";
import Product from "@/front-panel/views/Product.vue";
import FrontPage from "@/front-panel/views/FrontPage.vue";
import CartsAdd from "@/admin-panel/fazle/views/CartsAdd.vue";
import CartLayout from "@/admin-panel/fazle/views/CartLayout.vue";

import CartTable from "@/admin-panel/fazle/views/CartTable.vue";
import UpdateCart from "@/admin-panel/fazle/views/UpdateCart.vue";

import ProductsList from "@/admin-panel/devhelal/products/ProductsList.vue";
import AddProduct from "@/admin-panel/devhelal/products/AddProduct.vue";

import Roles from '@/admin-panel/nazad/Roles/Roles.vue'
import Users from '@/admin-panel/nazad/Users/Users.vue'
import UserCreate from '@/admin-panel/nazad/Users/UserCreate.vue'
import RoleCreate from '@/admin-panel/nazad/Roles/RoleCreate.vue'
import UserEdit from '@/admin-panel/nazad/Users/UserEdit.vue'
import RoleEdit from '@/admin-panel/nazad/Roles/RoleEdit.vue'
import Payment from '@/admin-panel/nazad/Payment/Payment.vue'
import PaytmentCreate from '@/admin-panel/nazad/Payment/PaytmentCreate.vue'
import PaymentEdit from '@/admin-panel/nazad/Payment/PaymentEdit.vue'
import UpdateProduct from "@/admin-panel/devhelal/products/UpdateProduct.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      name: "admin",
      component: () => import('@/admin-panel/views/MainLayout.vue'),
      children: [
        {
          path: "",
          name: "dashboard",
          component: AdminDashboard,
        },
        {
          path: "forms",
          name: "adminforms",
          component: AdminForms,
        },
        {
          path: "contact",
          name: "contactus",
          component: ContactUs,
        },
        {
          path: "productlist",
          name: "productslist",
          component: ProductsList,
        },  
        {
          path: "addproduct",
          name: "addproducts",
          component: AddProduct,
        },
            {
              path: "updateproduct/:id",
              name: "updateproduct",
              component: UpdateProduct,
            },
        {
          path: "product",
          name: "products",
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
        {
          path: "cart",
          name: "cart",
          component: CartLayout,
          children: [
            {
              path: "cart-add",
              name: "cartAdd",
              component: CartsAdd,
            },
            {
              path: "cart-table",
              name: "cartTable",
              component: CartTable,
            },
            {
              path: "cart-update/:id",
              name: "cartUpdate",
              component: UpdateCart,
            },
          ],
        },
      ],
    },
    {
      path: "/",
      name: "h",
      component: () => import('@/front-panel/views/MainLayout.vue'),
      children: [
        {
          path: "",
          name: "home",
          component: FrontPage,
        },
        {
          path: "products",
          name: "products",
          component: Product,
        },
      ],
    },
  ],
});

export default router;
