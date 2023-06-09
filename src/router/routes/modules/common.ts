import type { RouteRecordRaw } from "vue-router";

// 路由规则
const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue")
  },
  {
    path: "/form",
    name: "form",
    component: () => import("@/views/form.vue")
  }
];

export default routes;
