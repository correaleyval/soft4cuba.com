<template>
  <card class="mt-5" data-aos="zoom-in">
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <img v-lazy="'img/pdi.png'" alt="Raised Image" class="rounded img-raised" />
      </div>
      <div class="col-lg-6 col-md-12">
        <br />
        <h2 class="h2-seo">PDI Python</h2>
        <h5>Curso de procesamiento de imágenes con Python</h5>
        <div class="col-md-6">
            <a
              href="https://nbviewer.jupyter.org/github/correaleyval/Procesamiento-de-Imagenes/tree/master"
              class="btn btn-primary btn-round"
              target="_blank"
            >
              Leer Online
            </a>
          </div>
          <div class="col-md-6">
            <a
              href="https://github.com/correaleyval/Procesamiento-de-Imagenes"
              class="btn btn-primary btn-round"
              target="_blank"
            >
              <i class="fab fa-github"></i> Descargar de Github
            </a>
          </div>
      </div>
    </div>
  </card>
</template>

<script>
import { Card } from "@/components";

export default {
  components: {
    Card
  }
};
</script>