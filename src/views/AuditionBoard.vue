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
        <!-- <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 py-2 my-2">
          <select class="h-100 w-100" name="performance-type" id="performance-type">
            <option value="">Performance Type</option>
            <option value="theatre">Theatre</option>
            <option value="film">Film</option>
            <option value="television">Television</option>
          </select>
        </div> -->
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 py-2 my-2">
          <select class="h-100 w-100" name="audition-type" id="audition-type">
            <option value="">Union Status</option>
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
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 py-2 my-2">
          <a class="create-aud-btn h-100 w-100 btn" href="/create-auditions">Create New Audition</a>
        </div>
      </div>
      <div class="row my-2 py-2 no-gutters">
        <h4>Top Results</h4>
        <div class="row my-2 py-2 pl-4">
          <!-- START Audition Card -->
          <div v-for="audition in auditions" v-bind:key="audition.id" class="aud-card card d-flex pb-2">
            <div class="row mb-1">
              <div class="col">
                <div class="row float-right">
                  <small class="posted-date p-1">
                    <em>Posted on {{ formatDate(audition.created_at) }}</em>
                  </small>
                </div>
              </div>
            </div>
            <div class="row info-row">
              <div class="col-xs-8 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div class="row">
                  <p style="font-size: 16px">
                    <span class="strong">Production:</span>
                    {{ audition.name_of_show }}
                  </p>
                </div>
                <br />
                <div class="row">
                  <p>
                    <span class="strong">Company:</span>
                    {{ audition.theater.name || audition.company }}
                  </p>
                </div>
                <div class="row">
                  <p>
                    <span class="strong">Audition Dates:</span>
                    {{ formatDate(audition.date) }}
                  </p>
                </div>
                <div class="row">
                  <p>
                    <span class="strong">Pay Rate:</span>
                    {{ audition.pay_scale }}
                  </p>
                </div>
                <span class="hide" :class="'audition' + audition.id">
                  <div class="row">
                    <p>
                      <span class="strong">Written By:</span>
                      {{ audition.written_by }}
                    </p>
                  </div>
                  <div class="row">
                    <p>
                      <span class="strong">Director:</span>
                      {{ audition.director }}
                    </p>
                  </div>
                  <div class="row">
                    <p>
                      <span class="strong">In the Room for Auditions:</span>
                      {{ audition.in_the_room }}
                    </p>
                  </div>
                </span>
              </div>
              <div class="col-xs-4 col-sm-6 col-md-8 col-lg-8 col-xl-8">
                <div class="float-right union-badge">{{ audition.union_status }}</div>
              </div>
            </div>
            <div class="row description-row mt-3">
              <p>
                <span class="strong">Description:</span>
                "Sally's Shoe" is a heartwarming and inspiring play about Sally, a brilliant shoe designer, who is
                diagnosed with cancer. Despite the challenges that she faces, Sally refuses to let the disease define
                her or slow her down. She continues to work on her passion, designing beautiful and unique shoes that
                have become her signature style.
              </p>
            </div>
            <div class="hide mt-3" :class="'audition' + audition.id">
              <div class="row">
                <p>
                  <span class="strong">Cast Breakdown:</span>
                </p>
                <div id="accordion" class="mt-3 row">
                  <div
                    v-for="character in audition.characters"
                    v-bind:key="character.id"
                    class="col-lg-6 col-xl-6 col-m-6 col-sm-12 col-xs-12"
                  >
                    <div class="card mx-3 mb-3">
                      <div
                        class="card-header collapsed"
                        :id="`heading-${character.id}`"
                        data-toggle="collapse"
                        :data-target="`#collapse-${character.id}`"
                        aria-expanded="true"
                        :aria-controls="`#collapse-${character.id}`"
                      >
                        <div class="character-title mb-0">
                          <div class="mr-auto">
                            <strong>{{ character.name }}</strong>
                            -
                            {{ character.age }}
                          </div>
                          <div class="ml-auto">Gender: {{ character.gender }}</div>
                        </div>
                      </div>

                      <div
                        :id="`collapse-${character.id}`"
                        class="collapse"
                        :aria-labelledby="`heading-${character.id}`"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          <div class="row mb-2">
                            <div class="col-11">
                              <p>
                                <span class="strong">Character Description:</span>
                                {{ character.description }}
                              </p>
                            </div>
                            <div class="col-1">
                              <i @click="heart = false" class="fa-solid fa-heart fa-lg" v-if="heart"></i>
                              <i @click="heart = true" class="fa-regular fa-heart fa-lg" v-else></i>
                            </div>
                          </div>
                          <div class="row mb-2">
                            <p>
                              <span class="strong">Character Skills:</span>
                              {{ character.skills }}
                            </p>
                          </div>
                          <div class="row mb-2">
                            <p>
                              <span class="strong">Character Warnings:</span>
                              {{ character.warnings }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="card" v-for="character in audition.characters" v-bind:key="character.id">
                  {{ character.name }}
                </div> -->
              </div>
              <br />
              <div class="row">
                <p>
                  <span class="strong">Materials to Prepare:</span>
                  {{ audition.materials_to_prepare }}
                </p>
              </div>
              <div class="row">
                <p>
                  <span class="strong">How to Submit:</span>
                  {{ audition.how_to_submit }}
                </p>
              </div>
              <div class="row" v-if="audition.additional_notes">
                <p>
                  <span class="strong">Additional Notes:</span>
                  {{ audition.additional_notes }}
                </p>
              </div>
              <br />
              <div class="row">
                <p>
                  <span class="strong">Rehearsal Start Date:</span>
                  {{ formatDate(audition.rehearsal_startdate) }}
                </p>
              </div>
              <div class="row">
                <p>
                  <span class="strong">Show Opening:</span>
                  {{ formatDate(audition.show_startdate) }}
                </p>
              </div>
              <div class="row">
                <p>
                  <span class="strong">Show Closing:</span>
                  {{ formatDate(audition.show_enddate) }}
                </p>
              </div>
              <div class="row">
                <p>
                  <span class="strong">Show Location:</span>
                  {{ audition.location }}
                </p>
              </div>
              <div class="row">
                <p>
                  <span class="strong">Show Warnings:</span>
                  {{ audition.show_warnings }}
                </p>
              </div>
            </div>
            <div class="d-flex flex-row-reverse">
              <button class="btn btn-link pt-0" style="text-decoration: none" @click="expandAudition(audition)">
                Audition Details
              </button>
              <button class="btn btn-link pt-0" style="text-decoration: none">Save Audition</button>
            </div>
          </div>
          <!-- END Audition Card -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";

export default {
  data: function () {
    return {
      title: "Audition Board",
      auditions: [],
      currentAuditionId: null,
      heart: false,
      // totalPages: 28,
      // startingPage: 1,
      // middlePage: 2,
      // endingPage: 3,
      // currentPage: 1,
    };
  },
  computed: {
    formatDate() {
      return (value) => {
        return moment(String(value)).format("MM/DD/YYYY");
      };
    },
  },
  watch: {
    // currentPage(newPage, oldPage) {
    //   console.log(newPage);
    //   if (newPage > this.endingPage) {
    //     this.startingPage = newPage;
    //     this.middlePage = newPage + 1;
    //     this.endingPage = newPage + 2;
    //   }
    //   if (newPage < this.startingPage) {
    //     this.endingPage = newPage;
    //     this.middlePage = newPage - 1;
    //     this.startingPage = newPage - 2;
    //   }
    //   this.getAuditions(`/auditions?page_number=${newPage}`);
    // },
  },
  created: function () {
    this.getAuditions("/auditions");
  },
  methods: {
    expandAudition(audition) {
      if (this.currentAuditionId == audition.id) {
        document.querySelectorAll(`.audition` + audition.id).forEach((item) => {
          item.classList.add("hide");
        });
        this.currentAuditionId = null;
      } else {
        if (this.currentAuditionId != null && this.currentAuditionId != audition.id) {
          document.querySelectorAll(`.audition` + this.currentAuditionId).forEach((item) => {
            item.classList.add("hide");
          });
          this.currentAuditionId = audition.id;
          "audition" + audition.id;
          document.querySelectorAll(`.audition` + audition.id).forEach((item) => {
            item.classList.remove("hide");
          });
        } else {
          this.currentAuditionId = audition.id;
          "audition" + audition.id;
          document.querySelectorAll(`.audition` + audition.id).forEach((item) => {
            item.classList.remove("hide");
          });
        }
      }
    },
    getAuditions(link) {
      console.log("hi");
      axios
        .get(link)
        .then((response) => {
          this.auditions = response.data;
          console.log(this.auditions);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.character-title {
  display: flex;
  justify-content: space-between;
}
.collapsed {
  border-radius: 5px !important;
}
.card {
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.card-header {
  background-color: #eff5f8;
}
p {
  margin-bottom: 0;
}
.hide {
  display: none;
}
.aud-btn {
  background-color: #05788c;
  color: white;
  font-weight: 500;
  border-color: #05788c;
}
.aud-btn:hover {
  background-color: #0b0b35;
  border-color: #0b0b35;
}
.posted-date {
  color: #c4c4c4;
  font-weight: bold;
}
.circle {
  background-color: #ebdba1;
  padding: 1em;
  border-radius: 50%;
  height: 65px;
  width: 65px;
}
.union-badge {
  background-color: #bff0f2;
  padding: 4px 25px;
  text-align: center;
  border-radius: 5px;
  max-width: 150px;
}
.strong {
  font-weight: 700 !important;
}

.create-aud-btn {
  background-color: #00c4cc;
  color: white;
  font-weight: 500;
  border-color: #00c4cc;
}
.create-aud-btn:hover {
  color: white;
  background-color: #0b0b35;
  border-color: #0b0b35;
}
i {
  color: #c385c0;
}
</style>
