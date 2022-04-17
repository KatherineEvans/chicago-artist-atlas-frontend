import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TheaterDirectory from "../views/TheaterDirectory.vue";
import TheaterResources from "../views/TheaterResources.vue";
import ContactView from "../views/ContactView.vue";
import AuditionBoard from "../views/AuditionBoard.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/theater-directory",
    name: "directory",
    component: TheaterDirectory,
  },
  {
    path: "/auditions",
    name: "auditions",
    component: AuditionBoard,
  },
  {
    path: "/resources",
    name: "resources",
    component: TheaterResources,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
