import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/info",
    name: "InfoComponent",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InfoView.vue"),
  },
  {
    path: "/projects",
    name: "ProjectComponent",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProjectsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
