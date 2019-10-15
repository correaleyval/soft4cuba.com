<template>
  <div id="home" class="page-header clear-filter">
    <parallax class="page-header-image" style="background-image:url('images/hero-bg.jpg')"></parallax>
    <div class="container">
      <div class="content-center brand">
        <img class="logo" src="@/assets/logo.png" data-aos="fade-up"/>
        <h1 class="h1-seo" data-aos="zoom-in-down">Soluciones creativas para convertir tu idea en una realidad</h1>
        <div class="text-center">
          <a data-aos="zoom-in"
            href="https://t.me/soft4cuba"
            class="btn btn-primary btn-icon btn-round btn-lg mr-5"
            target="_blank"
          >
            <i class="fab fa-telegram"></i>
          </a>
          <a data-aos="zoom-in"
            href="https://www.facebook.com/groups/495795397671271/"
            class="btn btn-primary btn-icon btn-round btn-lg ml-5"
            target="_blank"
          >
            <i class="fab fa-facebook-square"></i>
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