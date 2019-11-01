<template>
    <card class="mt-5" data-aos="zoom-in">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <img v-lazy="'img/page.png'" alt="Raised Image" class="rounded img-raised" />
          </div>
          <div class="col-lg-6 col-md-12">
            <br />
            <h2 class="h2-seo">Soft4Cuba.com</h2>
            <h5>Web principal de nuestra comunidad</h5>
            <!-- <div class="nucleo-container">
                    <img v-lazy="'assetsimg/nucleo.svg'" alt="">
            </div>-->
            <a
              href="https://github.com/correaleyval/soft4cuba.com"
              class="btn btn-primary btn-round btn-lg"
              target="_blank"
            >
              <i class="fab fa-github"></i> Ver código en Github
            </a>
          </div>
        </div>
      </card>
</template>

<script>
import { Card } from "@/components"

export default {
    components: {
        Card
    }
}
</script>