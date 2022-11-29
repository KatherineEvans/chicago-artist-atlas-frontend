<template>
  <div class="container-fluid">
    <div class="row ltblue py-3 px-4 text-center">
      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 m-auto my-3">
        <h2>
          <strong>Resources</strong>
        </h2>
        <p style="font-size: 16px">
          Here at Atlas, we're focused on providing our users with the latest resources on topics that matter -
          inclusivity, diversity, sustainability, and the business of theater! We strive to continually improve and grow
          our resource respository to best serve the Chicago theater community.
        </p>
      </div>
    </div>
    <div class="container pb-5 px-5 m-auto">
      <div class="row">
        <div class="mt-5">
          <h5 class="resource-title">Top Inclusivity Resources</h5>
          <div class="resource-container">
            <div class="img-desc">
              <img class="lf-img" src="../assets/inclusivity.png" />
              <div class="resource-desc">
                <p>
                  Here at Atlas, an inclusive community is paramount to our mission. We know that inclusive theater is
                  great theater! No matter how you identify, Atlias is here to offer support and help you navigate this
                  industry. We strive to offer resources to fit your specific needs, challenges and concerns. Are there
                  resources you don't see here?
                </p>
                <a href="mailto:info@chiartistatlas.com?subject=Inclusivity Resources">Let us know!</a>
              </div>
            </div>
            <div class="resource-cards">
              <div class="card resource-card">
                <h6>Resource Name</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
              </div>
              <div class="card resource-card">
                <h6>Resource Name</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
              </div>
              <div class="card resource-card">
                <h6>Resource Name</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="mt-5">
          <h5 class="resource-title">Top Eco & Sustainability Resources</h5>
          <div class="resource-container">
            <div class="resource-cards">
              <div class="card resource-card">
                <h6>Resource Name</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
              </div>
              <div class="card resource-card">
                <h6>Resource Name</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
              </div>
              <div class="card resource-card">
                <h6>Resource Name</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
              </div>
            </div>
            <div class="img-desc">
              <img class="lf-img" src="../assets/eco_sustainability.png" />
              <div class="resource-desc">
                <p>
                  Want to adopt more environmentally friendly theatre practices? Atlas is here to help! As we slip
                  further into climate crisis, more and more theaters are making efforts to have smaller carbon
                  footprints. See how your theater or production company can join in the efforts!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="mt-5">
          <h5 class="resource-title">Top Theater Resources</h5>
          <div class="resource-container">
            <div class="img-desc">
              <img class="lf-img" src="../assets/theater.png" />
              <div class="resource-desc">
                <p>
                  From finding rehearsal spaces to creating brave spaces, ATLAS makes it easy for theatre companies to
                  discover resources to create processes and productions that are streamlined and sustainable.
                </p>
              </div>
            </div>
            <div class="resource-cards">
              <div class="card resource-card">
                <h6>Resource Name</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
              </div>
              <div class="card resource-card">
                <h6>Resource Name</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
              </div>
              <div class="card resource-card">
                <h6>Resource Name</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.resource-container {
  background-color: #e5e5e5;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  margin: 15px;
  padding: 20px;
}
@media only screen and (max-width: 768px) {
  .resource-container {
    flex-direction: column;
  }
}
.resource-title {
  font-weight: 700;
  text-align: center;
}
.resource-cards {
  flex: 3;
}
.resource-link {
  text-align: right;
  cursor: pointer;
  color: blue !important;
  text-decoration: underline !important;
}
.resource-card {
  margin-bottom: 15px;
  padding: 10px;
}
img {
  display: block;
  max-width: 250px;
  width: auto;
  height: auto;
  margin-bottom: 15px;
}
.resource-desc {
  text-align: center;
}
.img-desc {
  flex: 1;
  margin: 0 15px 0 15px;
}
.card {
  border: none;
}
img {
  border-radius: 5px;
}
/* .lf-img {
  border-radius: 5px 0px 0px 5px;
}

.rt-img {
  border-radius: 0px 5px 5px 0px;
}
.top-img {
  border-radius: 5px 5px 0px 0px;
} */
</style>
