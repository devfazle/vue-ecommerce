import { createRouter, createWebHistory } from "vue-router";
import AdminDashboard from "@/admin-panel/views/Dashboard.vue";
import AdminForms from "@/admin-panel/views/Forms.vue";
import ContactUs from "@/admin-panel/views/ContactUs.vue";
import Products from "@/admin-panel/views/Products.vue";
import Product from "@/front-panel/views/Product.vue";
import FrontPage from "@/front-panel/views/FrontPage.vue";
import CartsAdd from "@/admin-panel/fazle/views/CartsAdd.vue";
import CartLayout from "@/admin-panel/fazle/views/CartLayout.vue";

import CouponsAdd from "@/admin-panel/ruhul/views/CouponsAdd.vue";
import CouponsLaout from "@/admin-panel/ruhul/views/CouponsLaout.vue";
import CouponsList from "@/admin-panel/ruhul/views/CouponsList.vue";
import UpdateCupons from "@/admin-panel/ruhul/views/UpdateCupons.vue";
import UseCuponsAdd from "@/admin-panel/ruhul/views/UseCuponsAdd.vue";
import UsecuponList from "@/admin-panel/ruhul/views/UsecuponList.vue";
import UpdateUseCoupon from "@/admin-panel/ruhul/views/UpdateUseCoupon.vue";


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
          path: "product",
          name: "products",
          component: Products,
        },
        {
          path: "coupons",
          name: "coupons",
          component: CouponsLaout,
          children: [
            {
              path: "coupons-add",
              name: "couponsAdd",
              component: CouponsAdd,
            },
            {
              path: "coupons-list",
              name: "couponsshow",
              component: CouponsList,
            },
            {
              path: "coupons-update/:id",
              name: "couponsUpdate",
              component: UpdateCupons,
            },
            {
              path: "coupons-use",
              name: "couponsUse",
              component: UseCuponsAdd,
            },
            {
              path: "coupons-uselist",
              name: "couponsUselist",
              component: UsecuponList,
            },
            {
              path: "coupons-useupdate/:id",
              name: "couponsUseUpdate",
              component: UpdateUseCoupon,
            },
          ],
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
          component: Sub_categoryLayout,
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
