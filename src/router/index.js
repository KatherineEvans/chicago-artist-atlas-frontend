import { createRouter, createWebHistory } from "vue-router";
import ContactView from "../views/ContactView.vue";
import Classes from "../views/MasterClasses.vue";
import HomeView from "../views/HomeView.vue";
import TheaterDirectory from "../views/TheaterDirectory.vue";

// Auditions
import AuditionBoard from "../views/Auditions/AuditionBoard.vue";
import AuditionView from "../views/Auditions/AuditionView.vue";

// Authentication
import LogOut from "../views/Authentication/LogOut.vue";
import SignUpOptions from "../views/Authentication/SignUpOptions.vue";

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
import TheaterResources from "../views/Resources/TheaterResources.vue";
import IdentityResources from "../views/Resources/IdentityResources.vue";
import LifeHackResources from "../views/Resources/LifeHackResources.vue";

// Theaters
import ProfessionalsBrowse from "@/views/Theaters/ProfessionalsBrowse.vue";

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
    path: "/auditions/:id",
    name: "auditions-show",
    component: AuditionView,
  },
  // {
  //   path: "/theaters/theatre-professionals/search",
  //   name: "search-theatre-professionals",
  //   component: ProfessionalsBrowse,
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
    path: "/resources/production",
    name: "theater-resources",
    component: TheaterResources,
  },
  {
    path: "/resources/life-hacks",
    name: "life-hack-resources",
    component: LifeHackResources,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUpOptions,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogOut,
  },
  {
    path: "/user",
    name: "user-overview",
    component: ArtistDashboard,
    redirect: { name: "user-account" },
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
        redirect: { name: "user-profile-bio" },
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: "smooth",
        };
      } else {
        return { x: 0, y: 0 };
      }
    }
  },
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("tokenGeneratedAt") && to.fullPath != "/logout" && to.fullPath != "/signup") {
    var date = new Date(localStorage.getItem("tokenGeneratedAt"));
    var expDate = date.setMinutes(date.getMinutes() + 10079);
    var today = new Date();
    var todayDate = today.setMinutes(today.getMinutes());
    if (todayDate > expDate) {
      // redirect the user to the login page
      next("/logout");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
