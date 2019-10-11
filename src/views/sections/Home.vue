<template>
  <div id="home" class="page-header clear-filter">
    <parallax class="page-header-image" style="background-image:url('images/hero-bg.jpg')"></parallax>
    <div class="container">
      <div class="content-center brand">
        <img class="logo" src="@/assets/logo.png" alt />
        <h1 class="h1-seo">Soluciones creativas para convertir tu idea en una realidad</h1>
        <div class="text-center">
          <a
            href="https://t.me/soft4cuba"
            class="btn btn-primary btn-icon btn-round btn-lg mr-5"
            target="_blank"
          >
            <i class="fab fa-telegram"></i>
          </a>
          <a
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