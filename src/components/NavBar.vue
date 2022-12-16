<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Chicago Artist Atlas</a>
    <button
      class="navbar-toggler ml-auto mr-3"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav w-100">
        <li class="nav-item active">
          <a class="nav-link" :class="{ active: $route.name == 'home' }" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: $route.name == 'directory' }" href="/theater-directory">
            Theater Directory
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: $route.name == 'auditions' }" href="/auditions">Auditions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: $route.name == 'classes' }" href="/classes">Classes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: $route.name == 'resources' }" href="/resources">Resources</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: $route.name == 'contact' }" href="/contact">Contact</a>
        </li>
      </ul>
    </div>

    <div>
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style="background-color: #0b0b35; border-color: rgba(255, 255, 255, 0.1); border-width: 1px"
      >
        <i class="fa-solid fa-user" style="opacity: 0.75; color: #ffffff; font-size: 0.75rem"></i>
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="right: 5px">
        <a
          v-if="!isLoggedIn"
          class="dropdown-item"
          href="/signup?path=login"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          :class="{ active: $route.name == 'signup' }"
        >
          Login
        </a>
        <a
          v-if="!isLoggedIn"
          class="dropdown-item"
          href="/signup"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          :class="{ active: $route.name == 'signup' }"
        >
          Signup
        </a>
        <a
          v-if="isLoggedIn"
          class="dropdown-item"
          href="/logout"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          :class="{ active: $route.name == 'signup' }"
        >
          Logout
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["isLoggedIn"],
  data: function () {
    return {};
  },
  watch: {
    isLoggedIn: function () {
      console.log(this.isLoggedIn);
    },
  },
};
</script>

<style>
.navbar-dark.bg-dark {
  background-color: #0b0b35 !important;
}
.nav-item {
  font-size: 14px !important;
}
@media only screen and (min-width: 889px) {
  .navbar-nav {
    display: flex;
    flex-direction: row;
  }
  .status-item {
    justify-content: flex-end !important;
  }
}

@media (min-width: 576px) {
  .dropdown-menu {
    left: 60%;
  }
}

@media (min-width: 768px) {
  .dropdown-menu {
    left: 70%;
  }
}

@media (min-width: 992px) {
  .dropdown-menu {
    left: 88%;
  }
}

@media (min-width: 1200px) {
  .dropdown-menu {
    left: 85%;
  }
}

@media (min-width: 1400px) {
  .dropdown-menu {
    left: 90%;
  }
}
</style>
