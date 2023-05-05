import { createRouter, createWebHistory } from "vue-router";

const checkAuth = (to, from, next) => {
  if (localStorage.getItem("auth")) {
    next();
  } else {
    next({ name: "login" });
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/courses",
    name: "courses",
    component: () => import("../views/CoursesView.vue"),
  },
  {
    path: "/format",
    name: "format",
    component: () => import("../views/FormatView.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/BlogView.vue"),
  },
  {
    path: "/jobs",
    name: "jobs",
    component: () => import("../views/JobsView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfileView.vue"),
    beforeEnter: checkAuth,
  },
  {
    path: "/coursefree",
    name: "coursefree",
    component: () => import("../views/CourseFreeView.vue"),
    beforeEnter: checkAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
