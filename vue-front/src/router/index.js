import { createRouter, createWebHistory } from "vue-router";
import AdminMainLayout from "@/admin-panel/views/MainLayout.vue";
import AdminDashboard from "@/admin-panel/views/Dashboard.vue";
import AdminForms from "@/admin-panel/views/Forms.vue";
import ContactUs from "@/admin-panel/views/ContactUs.vue";
import Products from "@/admin-panel/views/Products.vue";
import FrontMainLayout from "@/front-panel/views/MainLayout.vue";
import Product from "@/front-panel/views/Product.vue";
import FrontPage from "@/front-panel/views/FrontPage.vue";
import CartsAdd from "@/admin-panel/fazle/views/CartsAdd.vue";
import CartLayout from "@/admin-panel/fazle/views/CartLayout.vue";
import CouponsAdd from "@/admin-panel/ruhul/views/CouponsAdd.vue";
import CouponsLaout from "@/admin-panel/ruhul/views/CouponsLaout.vue";
import CouponsList from "@/admin-panel/ruhul/views/CouponsList.vue";
import UpdateCupons from "@/admin-panel/ruhul/views/UpdateCupons.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      name: "admin",
      component: AdminMainLayout,
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
          ],
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
          ],
        },
      ],
    },
    {
      path: "/",
      name: "h",
      component: FrontMainLayout,
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
