<template>
  <div class="container-fluid">
    <section class="m-4">
      <!--Section heading-->
      <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
      <!--Section description-->
      <p class="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        24-hours to help you.
      </p>

      <div class="row">
        <!--Grid column-->
        <div class="col-md-9 mb-md-0 mb-5">
          <form method="post" action="https://formspree.io/f/xpzbkjvn" id="contact-form" name="contact-form">
            <!--Grid row-->
            <div class="row">
              <!--Grid column-->
              <div class="col-md-6 mb-4">
                <div class="md-form mb-0">
                  <input placeholder="Name" type="text" id="name" name="name" class="form-control" />
                </div>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-md-6 mb-4">
                <div class="md-form mb-0">
                  <input placeholder="Email" type="text" id="email" name="email" class="form-control" />
                </div>
              </div>
              <!--Grid column-->
            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row mb-4">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <input placeholder="Subject" type="text" id="subject" name="subject" class="form-control" />
                </div>
              </div>
            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row my-4">
              <!--Grid column-->
              <div class="col-md-12">
                <div class="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    placeholder="Your Message"
                    class="form-control md-textarea"
                  ></textarea>
                </div>
              </div>
            </div>
            <!--Grid row-->
          </form>

          <div class="text-center text-md-left">
            <a
              style="background-color: #0b0b35; border-color: #0b0b35"
              class="btn btn-primary"
              onclick="document.getElementById('contact-form').submit();"
            >
              Send
            </a>
          </div>
          <div class="status"></div>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-3 text-center">
          <ul class="list-unstyled mb-0">
            <li>
              <i class="fas fa-map-marker-alt fa-2x"></i>
              <p>Chicago, IL 60613, USA</p>
            </li>

            <!-- <li>
              <i class="fas fa-phone mt-4 fa-2x"></i>
              <p>+ 01 800 123 4567</p>
            </li> -->

            <li>
              <i class="fas fa-envelope mt-4 fa-2x"></i>
              <p>info@chiartistatlas.com</p>
            </li>
          </ul>
        </div>
        <!--Grid column-->
      </div>
    </section>
    <!--Section: Contact v.2-->
  </div>
</template>
