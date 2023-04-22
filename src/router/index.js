import { createRouter, createWebHistory } from "vue-router";
import ContactView from "../views/ContactView.vue";
import Classes from "../views/MasterClasses.vue";
import HomeView from "../views/HomeView.vue";
import Resources from "../views/ResourcesView.vue";
import TheaterDirectory from "../views/TheaterDirectory.vue";

// Auditions
import AuditionBoard from "../views/AuditionBoard.vue";

// Authentication
import LogOut from "../views/Authentication/LogOut.vue";
import Signup from "../views/SignUp.vue";

// User Profile
import ArtistDashboard from "../views/User/ArtistDashboard.vue";
import UserAccount from "../views/User/UserAccount.vue";
import UserAuditions from "../views/User/UserAuditions.vue";
import UserCalendar from "../views/User/UserCalendar.vue";
import UserProfile from "../views/User/UserProfile.vue";
import UserResume from "../views/User/UserResume.vue";

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
  {
    path: "/user",
    name: "user-dashboard",
    component: ArtistDashboard,
    redirect: "/user/account",
    children: [
      {
        path: "account",
        component: UserAccount,
      },
      {
        path: "auditions",
        component: UserAuditions,
      },
      {
        path: "calendar",
        component: UserCalendar,
      },
      {
        path: "profile",
        component: UserProfile,
      },
      {
        path: "resume",
        component: UserResume,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
