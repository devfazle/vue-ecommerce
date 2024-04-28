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
          path: "product",
          name: "products",
          component: Products,
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
