<template>
  <div class="container-fluid">
    <div class="row ltblue py-3 px-4 text-center">
      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 m-auto my-3">
        <h2>
          <strong>Signup</strong>
        </h2>
        <p style="font-size: 16px">
          ATLAS strives to provide the best, most up to date resources to our community! [Coming soon...]
        </p>
      </div>
    </div>
    <div class="row pb-5 px-5 m-auto">
      <form action="submit-signup">
        <div class="card mt-5 py-3 px-5">
          <div class="row mb-3">
            <label class="form-label pl-0">First Name:</label>
            <input type="text" />
          </div>
          <div class="row mb-3">
            <label class="form-label pl-0">Last Name:</label>
            <input type="text" />
          </div>
          <div class="row mb-3">
            <label class="form-label pl-0">Email:</label>
            <input type="email" />
          </div>
          <div class="row mb-3">
            <label class="form-label pl-0">Password:</label>
            <input type="password" />
          </div>
          <div class="row mb-3">
            <label class="form-label pl-0">Password Confirmation:</label>
            <input type="password" />
          </div>
          <button
            style="max-width: 150px; background-color: #0b0b35; border-color: #0b0b35; color: white"
            class="btn btn-primary my-4 mx-auto"
          >
            Signup
          </button>
          <div class="row mb-3">
            <a href="#" class="text-secondary text-center">Already a member? Login</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script></script>

<style scoped>
label {
  font-weight: 700;
}
img {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  max-height: 250px;
  width: 100%;
  object-fit: cover;
}
.lf-img {
  border-radius: 5px 0px 0px 5px;
}

.rt-img {
  border-radius: 0px 5px 5px 0px;
}
.top-img {
  border-radius: 5px 5px 0px 0px;
}
.card {
  max-width: 400px;
  margin: auto;
}
</style>
