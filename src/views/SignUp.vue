<template>
  <div class="container-fluid">
    <div class="row ltblue py-3 px-4 text-center">
      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 m-auto my-3">
        <h2>
          <strong v-if="path == 'login'">Login</strong>
          <strong v-else>Signup</strong>
        </h2>
        <p style="font-size: 16px">
          ATLAS strives to provide the best, most up to date resources to our community! [Coming soon...]
        </p>
      </div>
    </div>
    <div class="row pb-5 px-5 m-auto">
      <form v-if="path == 'login'" v-on:submit.prevent="login()">
        <div class="card mt-5 py-3 px-5">
          <h1>Login</h1>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
          <div class="input-group row mb-3">
            <label>Email:</label>
            <input class="form-control" type="email" v-model="newSessionParams.email" />
          </div>
          <div class="input-group row mb-3">
            <label>Password:</label>
            <input class="form-control" type="password" v-model="newSessionParams.password" />
          </div>
          <input
            style="max-width: 150px; background-color: #0b0b35; border-color: #0b0b35; color: white"
            class="btn btn-primary my-4 mx-auto"
            type="submit"
            value="Login"
          />
        </div>
      </form>
      <form v-else v-on:submit.prevent="createUser()">
        <div class="card mt-5 py-3 px-5">
          <div class="row">
            <div class="col-6">
              <div class="input-group row mb-3">
                <label class="form-label pl-0">First Name:</label>
                <input type="text" class="form-control" v-model="userParams.first_name" />
              </div>
            </div>
            <div class="col-6">
              <div class="input-group row mb-3">
                <label class="form-label pl-0">Last Name:</label>
                <input type="text" class="form-control" v-model="userParams.last_name" />
              </div>
            </div>
          </div>
          <div class="input-group row mb-3">
            <label class="form-label pl-0">
              Phone Number:
              <span class="text-secondary"><small>(optional)</small></span>
            </label>
            <input type="text" class="form-control" v-model="userParams.phone" />
          </div>
          <div class="input-group row mb-3">
            <label class="form-label pl-0">Email:</label>
            <input type="email" class="form-control" v-model="userParams.email" />
          </div>
          <div class="input-group row mb-3">
            <label class="form-label pl-0">Password:</label>
            <input type="password" class="form-control" v-model="userParams.password" />
          </div>
          <div class="input-group row mb-3">
            <label class="form-label pl-0">Password Confirmation:</label>
            <input type="password" class="form-control" v-model="userParams.password_confirmation" />
          </div>
          <div class="input-group row mb-3">
            <label class="form-label pl-0">Pronouns:</label>
            <div class="form-check">
              <input
                class="form-check-input"
                value="She/Her/Hers"
                v-model="userParams.pronouns"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">She/Her/Hers</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                value="He/Him/His"
                v-model="userParams.pronouns"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">He/Him/His</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                value="They/Them/Theirs"
                v-model="userParams.pronouns"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">They/Them/Theirs</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                value="Other"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">Other</label>
            </div>
            <input type="text" class="form-control" />
          </div>
          <input
            style="max-width: 150px; background-color: #0b0b35; border-color: #0b0b35; color: white"
            class="btn btn-primary my-4 mx-auto"
            type="submit"
            value="Signup"
          />
          <!-- <button
            style="max-width: 150px; background-color: #0b0b35; border-color: #0b0b35; color: white"
            class="btn btn-primary my-4 mx-auto"
          >
            Signup
          </button> -->
          <div class="row mb-3">
            <a href="#" class="text-secondary text-center">Already a member? Login</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      path: "",
      userParams: {},
      newSessionParams: {},
      errors: [],
    };
  },
  created: function () {
    this.path = this.$route.query.path ? this.$route.query.path : null;
  },
  methods: {
    createUser: function () {
      axios
        .post("/users", this.userParams, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          crossDomain: true,
        })
        .then((response) => {
          // console.log(response.data);
          this.$router.push("/signup?path=login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    login: function () {
      axios
        .post("/sessions", this.newSessionParams, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          crossDomain: true,
        })
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

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
.input-group > .form-control {
  border-radius: 5px !important;
}
</style>
