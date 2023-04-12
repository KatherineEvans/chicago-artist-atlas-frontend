import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TheaterDirectory from "../views/TheaterDirectory.vue";
import ContactView from "../views/ContactView.vue";
import AuditionBoard from "../views/AuditionBoard.vue";
import Classes from "../views/MasterClasses.vue";
import Resources from "../views/ResourcesView.vue";
import Signup from "../views/SignUp.vue";
import LogOut from "../views/LogOut.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/directory",
    name: "directory",
    component: TheaterDirectory,
  },
  {
    path: "/auditions",
    name: "auditions",
    component: AuditionBoard,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/classes",
    name: "classes",
    component: Classes,
  },
  {
    path: "/resources",
    name: "resources",
    component: Resources,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogOut,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
