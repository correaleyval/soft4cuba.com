<template>
  <div>
    <HomeSection />
    <AboutSection />
  </div>
</template>
<script>
import HomeSection from './sections/Home'
import AboutSection from './sections/About'

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    HomeSection,
    AboutSection,
  }
};
</script>
<style>
.logo {
  margin-bottom: 20px;
}

.clear-filter {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 100%);
}
</style>
