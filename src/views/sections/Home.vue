<template>
  <div id="home" class="page-header clear-filter">
    <parallax class="page-header-image" style="background-image:url('images/hero-bg.jpg')"></parallax>
    <div class="container">
      <div class="content-center brand">
        <img class="logo hidden-xs" src="@/assets/logo.png" data-aos="fade-up" />
        <h2
          class="h2-seo"
          data-aos="zoom-in-down"
        >Soluciones creativas para convertir tu idea en una realidad</h2>
        <div class="text-center">
          <div class="row"></div>
          <a
            data-aos="zoom-in"
            href="https://www.facebook.com/groups/495795397671271/"
            class="btn btn-primary btn-icon btn-round btn-lg mr-4"
            target="_blank"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
          <a
            data-aos="zoom-in"
            href="https://t.me/soft4cuba"
            class="btn btn-primary btn-icon btn-round btn-lg mr-4"
            target="_blank"
          >
            <i class="fab fa-telegram"></i>
          </a>
          <a
            data-aos="zoom-in"
            href="https://twitter.com/Soft4Cuba"
            class="btn btn-primary btn-icon btn-round btn-lg"
            target="_blank"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Parallax, Button } from "@/components";

export default {
  components: {
    [Button.name]: Button,
    Parallax
  }
};
</script>