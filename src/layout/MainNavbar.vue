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
      <li class="nav-item">
        <a class="nav-link" href="#home">
          <i class="now-ui-icons media-1_button-play"></i>
          <p>Inicio</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about">
          <i class="now-ui-icons design_bullet-list-67"></i>
          <p>Acerca de</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">
          <i class="now-ui-icons users_circle-08"></i>
          <p>Contáctenos</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
/* eslint-disable */

import { DropDown, NavbarToggleButton, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
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
