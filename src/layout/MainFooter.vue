<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li class="mr-3">
            <a
              href="https://www.facebook.com/groups/495795397671271/"
              class="btn btn-primary btn-icon btn-round"
              target="_blank"
            >
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li class="mr-3">
            <a
              href="https://t.me/soft4cuba"
              class="btn btn-primary btn-icon btn-round"
              target="_blank"
            >
              <i class="fab fa-telegram"></i>
            </a>
          </li>
          <li class="mr-3">
            <a
              href="https://twitter.com/Soft4Cuba"
              class="btn btn-primary btn-icon btn-round"
              target="_blank"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright text-primary">
        <img
            src="@/assets/images/os.png"
            class="img img-fluid mx-auto"
            alt="OpenSource"
            width="50"
          />
        <i class="fa fa-bullseye"></i> Soft<strong>4</strong>Cuba &copy; {{ year }} 
        <i class="fa fa-eye"></i> {{views}}
        
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear(),
      views: ''
    };
  },

  mounted() {
    let api = "https://soft4cuba.herokuapp.com/visits/getlen/www.soft4cuba.com"
    this.axios.get(api).then((response) => {
      this.views = response.data.data
    })
  }
};
</script>
<style></style>
