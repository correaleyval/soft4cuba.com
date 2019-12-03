<template>
  <div
    class="section section-nucleo-icons"
    style="background-image: url('img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;"
  >
    <div class="container">
      <Soft4Cuba />
      <PDI />
      <ML />
    </div>
  </div>
</template>

<script>
import Soft4Cuba from './proyects/soft4cuba'
import PDI from './proyects/pdipython'
import ML from './proyects/mlnotebooks'

export default {
  components: {
    Soft4Cuba,
    PDI,
    ML
  }
};
</script>