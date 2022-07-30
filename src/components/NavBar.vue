<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Chicago Artist Atlas</a>
    <button
      class="navbar-toggler"
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
        <li class="nav-item status-item">
          <a class="nav-link" :class="{ active: $route.name == 'signup' }" href="/signup">Sign Up</a>
        </li>
        <li class="nav-item status-item">
          <button
            class="nav-link"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            :class="{ active: $route.name == 'login' }"
          >
            Login
          </button>
        </li>
        <li class="nav-item status-item">
          <a class="nav-link" href="/logout">Logout</a>
        </li>
      </ul>
    </div>
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {};
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
</style>
