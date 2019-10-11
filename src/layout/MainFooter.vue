<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li class="mr-5">
            <a
              href="https://t.me/soft4cuba"
              class="btn btn-primary btn-icon btn-round"
              target="_blank"
            >
              <i class="fab fa-telegram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/groups/495795397671271/"
              class="btn btn-primary btn-icon btn-round"
              target="_blank"
            >
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright text-primary">
        &copy; {{ year }}, Soft4Cuba
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
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
