<template>
  <navbar
    position="fixed"
    type="dark"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        <img src="@/assets/logo.png" />
      </router-link>
    </template>
    
    <template slot="navbar-menu">
      <li class="nav-item" @click="navlinkClick">
        <a class="nav-link" href="#home">
          <i class="now-ui-icons media-1_button-play"></i>
          <p>Inicio</p>
        </a>
      </li>
      <li class="nav-item" @click="navlinkClick">
        <a class="nav-link" href="#about">
          <i class="now-ui-icons design_bullet-list-67"></i>
          <p>Acerca de</p>
        </a>
      </li>
      <li class="nav-item" @click="navlinkClick">
        <router-link class="nav-link" to="/proyects">
          <i class="now-ui-icons design_app"></i>
          <p>Proyectos</p>
        </router-link>
      </li>
    </template>
  </navbar>
</template>

<script>

import { Navbar } from "@/components";
import { Popover } from "element-ui";

import EventBus from '@/EventBus'

export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    Navbar,
    [Popover.name]: Popover
  },
  methods: {
    navlinkClick() {
      EventBus.$emit('close-navbar')
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  img {
    height: 32px;
  }
}
</style>
