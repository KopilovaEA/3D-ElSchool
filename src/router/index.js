import { createRouter, createWebHistory } from "vue-router";
import { API } from "@/http/index.js";
import axios from "axios";

const checkAuth = (to, from, next) => {
  if (localStorage.getItem("auth")) {
    next();
  } else {
    next({ name: "login" });
  }
};

const checkAuthAndFreeCourse = async (to, from, next) => {
  if (localStorage.getItem("auth")) {
    const response = await axios.post(API + "/course_access", {
      course_id: 3,
      user_id: localStorage.getItem("auth"),
    });
    if (response.data?.id) next();
    else next({ name: "courses" });
  } else {
    next({ name: "login" });
  }
};

const checkAuthAndPayCourse = async (to, from, next) => {
  if (localStorage.getItem("auth")) {
    const response = await axios.post(API + "/course_access", {
      course_id: 4,
      user_id: localStorage.getItem("auth"),
    });
    console.log(response.data);
    if (response.data?.id) next();
    else next({ name: "courses" });
  } else {
    next({ name: "login" });
  }
};

const checkAdmin = async (to, from, next) => {
  if (localStorage.getItem("auth")) {
    const response = await axios.post(API + "/admin", {
      user_id: localStorage.getItem("auth"),
    });
    console.log(response.data);
    if (response.data?.role === "admin") next();
    else next({ name: "home" });
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
    path: "/course_free",
    name: "course_free",
    component: () => import("../views/CourseFreeView.vue"),
    beforeEnter: checkAuthAndFreeCourse,
  },
  {
    path: "/course_vip_pay",
    name: "course_vip_pay",
    component: () => import("../views/CourseVipPayView.vue"),
    beforeEnter: checkAuth,
  },
  {
    path: "/course_vip",
    name: "course_vip",
    component: () => import("../views/CourseVipView.vue"),
    beforeEnter: checkAuthAndPayCourse,
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
    beforeEnter: checkAdmin,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "page_not_found",
    component: () => import("../views/PageNotFound.vue"),
  },
];

const router = createRouter({
  scrollBehavior() {
    return { top: 0 };
  },
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
