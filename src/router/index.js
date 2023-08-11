import { createRouter, createWebHistory } from "vue-router";
import ContactView from "../views/ContactView.vue";
import Classes from "../views/MasterClasses.vue";
import HomeView from "../views/HomeView.vue";
import TheaterDirectory from "../views/TheaterDirectory.vue";

// Auditions
import AuditionBoard from "../views/Auditions/AuditionBoard.vue";

// Authentication
import LogOut from "../views/Authentication/LogOut.vue";
import Signup from "../views/SignUp.vue";

// Users
import ArtistDashboard from "../views/User/ArtistDashboard.vue";
import UserAccount from "../views/User/UserAccount.vue";
import UserAuditions from "../views/User/UserAuditions.vue";
import UserCalendar from "../views/User/UserCalendar.vue";
import UserProfile from "../views/User/UserProfile.vue";
import UserResume from "../views/User/UserResume.vue";

// User Profile Pages
import UserAwards from "../views/User/Profile/UserAwards.vue";
import UserBio from "../views/User/Profile/UserBio.vue";
import UserPerformances from "../views/User/Profile/UserPerformances.vue";
import UserTalents from "../views/User/Profile/UserTalents.vue";
import UserTraining from "../views/User/Profile/UserTraining.vue";

// Resources
import Resources from "../views/Resources/ResourcesView.vue";
import BusinessResources from "../views/Resources/BusinessResources.vue";
import IdentityResources from "../views/Resources/IdentityResources.vue";
import LifeHackResources from "../views/Resources/LifeHackResources.vue";

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
  // {
  //   path: "/contact",
  //   name: "contact",
  //   component: ContactView,
  // },
  // {
  //   path: "/classes",
  //   name: "classes",
  //   component: Classes,
  // },
  {
    path: "/resources",
    name: "resources",
    component: Resources,
  },
  {
    path: "/resources/identity",
    name: "identity-resources",
    component: IdentityResources,
  },
  {
    path: "/resources/business",
    name: "business-resources",
    component: BusinessResources,
  },
  {
    path: "/resources/life-hacks",
    name: "life-hack-resources",
    component: LifeHackResources,
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
    component: ArtistDashboard,
    redirect: "/user/account",
    children: [
      {
        path: "account",
        name: "user-account",
        component: UserAccount,
      },
      {
        path: "auditions",
        name: "user-auditions",
        component: UserAuditions,
      },
      {
        path: "calendar",
        name: "user-calendar",
        component: UserCalendar,
      },
      {
        path: "profile",
        name: "user-profile",
        component: UserProfile,
        redirect: "/user/profile/bio",
        children: [
          {
            path: "bio",
            name: "user-profile-bio",
            component: UserBio,
          },
          {
            path: "awards",
            name: "user-profile-awards",
            component: UserAwards,
          },
          {
            path: "performances",
            name: "user-profile-performances",
            component: UserPerformances,
          },
          {
            path: "training",
            name: "user-profile-training",
            component: UserTraining,
          },
          {
            path: "talents",
            name: "user-profile-talents",
            component: UserTalents,
          },
        ],
      },
      {
        path: "resume",
        name: "user-resume",
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
