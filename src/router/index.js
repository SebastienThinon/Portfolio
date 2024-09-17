import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projet/:id",
      name: "projet",
      component: () => import("../views/ProjectView.vue"),
    },
    {
      path: "/404",
      name: "Page404",
      component: () => import("../views/Page404.vue"),
    },
  ],
});

export default router;
