<template>
  <div class="container-fluid">
    <div class="row ltblue py-3 px-4 text-center">
      <div class="col-8 m-auto my-3">
        <h2>
          <strong>Auditions</strong>
        </h2>
        <p style="font-size: 16px">
          ATLAS strives to deliver accurate, timely, and transparent audition information for Chicago and the greater
          Chicagoland area. Theatres and creative who would like to post an audition, please fill out the form here!
        </p>
      </div>
    </div>
    <div class="container main">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 py-2 my-2">
          <select class="h-100 w-100" name="performance-type" id="performance-type">
            <option value="">Performance Type</option>
            <option value="theatre">Theatre</option>
            <option value="film">Film</option>
            <option value="television">Television</option>
          </select>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 py-2 my-2">
          <select class="h-100 w-100" name="audition-type" id="audition-type">
            <option value="">Audition Type</option>
            <option value="equity">Equity</option>
            <option value="non-equity">Non-Equity</option>
            <option value="union">Union</option>
            <option value="non-union">Non-Union</option>
            <option value="open">Open</option>
          </select>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 py-2 my-2">
          <button class="aud-btn h-100 w-100 btn btn-primary">Search Open Auditions</button>
        </div>
      </div>
      <div class="row my-2 py-2">
        <h4>Top Results</h4>
        <div class="row my-2 py-2">
          <div class="aud-card card d-flex pb-2">
            <div class="row mb-1">
              <div class="col">
                <div class="row float-right">
                  <small class="posted-date p-1"><em>Posted 15 days ago</em></small>
                </div>
              </div>
            </div>
            <div class="row info-row">
              <div class="col-xs-8 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div class="row">
                  <strong>Auditon Name</strong>
                </div>
                <div class="row">
                  <span>Production Company</span>
                </div>
                <div class="row">
                  <span>123 ABC St.</span>
                  <span>Chicago, IL 60613</span>
                </div>
              </div>
              <div class="col-xs-4 col-sm-6 col-md-8 col-lg-8 col-xl-8">
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="row m-auto text-center">
                      <strong>Age</strong>
                    </div>
                    <div class="circle m-auto">
                      <span>21-35</span>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="row m-auto text-center">
                      <strong>Gender</strong>
                    </div>
                    <div class="circle m-auto">
                      <span style="text-align: center; vertical-align: middle; height: 65px; width: 65px">Open</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row description-row mt-3">
              <p>
                <strong>Description:</strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel justo dui. Cras ac ullamcorper ante.
                Quisque lectus turpis, elementum et massa nec, convallis volutpat metus. Praesent vel viverra urna, in
                faucibus urna. Aliquam erat volutpat.
              </p>
            </div>
            <div class="d-flex flex-row-reverse">
              <button class="btn btn-link pt-0" style="text-decoration: none">View Details</button>
              <button class="btn btn-link pt-0" style="text-decoration: none">Save Audition</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.aud-btn {
  background-color: #05788c;
  color: white;
  font-weight: 500;
  border-color: #05788c;
}
.aud-btn:hover {
  background-color: #212529;
  border-color: #212529;
}
.posted-date {
  color: #c4c4c4;
  font-weight: bold;
}
.aud-card {
  border-left: 0.6rem solid;
  border-color: #05788c;
}
.circle {
  background-color: #ebdba1;
  padding: 1em;
  border-radius: 50%;
  height: 65px;
  width: 65px;
}
</style>
