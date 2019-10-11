<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.sidebar-collapse .navbar-collapse:before {
  background: linear-gradient(#212529 0%, #000 80%) !important;
}
</style>
