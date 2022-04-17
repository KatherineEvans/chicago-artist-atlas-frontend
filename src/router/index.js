import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DirectoryView from "../views/DirectoryView.vue";
import ResourceView from "../views/ResourceView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/directory",
    name: "directory",
    component: DirectoryView,
  },
  {
    path: "/resources",
    name: "resources",
    component: ResourceView,
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
