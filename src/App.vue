<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
    <loader v-if="loading" />
  </div>
</template>
<script>
import Loader from './Loader'

export default {
  data: () => ({
    loading: true 
  }),

  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 3000)
  },

  components: {
    Loader
  }
};
</script>

<style lang="scss">
.sidebar-collapse .navbar-collapse:before {
  background: linear-gradient(#212529 0%, #000 80%) !important;
}

@media (max-width: 767px) {
  .hidden-xs {
    display: none !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .hidden-sm {
    display: none !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-md {
    display: none !important;
  }
}
@media (min-width: 1200px) {
  .hidden-lg {
    display: none !important;
  }
}

</style>
