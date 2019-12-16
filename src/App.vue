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
// import Loader from './Loader'

export default {
  mounted() {

    // Ocultar preloader
    window.$('#preloader').fadeOut('1000', function () {
        window.$(this).remove();
    });
  },
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

.btn-primary {
  background-color: #32a9ed !important;
}

.blockquote.blockquote-primary {
  border-color: #32a9ed !important;
  color:  #32a9ed !important;
}

.text-blue {
  color: #32a9ed !important;
}

</style>
