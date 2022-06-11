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
      <ul class="navbar-nav">
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
          <a class="nav-link" :class="{ active: $route.name == 'resources' }" href="/classes">Resources</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: $route.name == 'contact' }" href="/contact">Contact</a>
        </li>
      </ul>
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
</style>
