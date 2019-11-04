<template>
  <div id="about" class="section section-about-us">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="title" data-aos="fade-up">Quiénes somos</h2>
          <h5 data-aos="zoom-in-down">
            Soft4Cuba es una comunidad abierta para desarrolladores, diseñadores e innovadores
            cubanos. En Soft4Cuba se reúnen programadores, diseñadores e innovadores cubanos con
            el objetivo de expresar sus ideas y formar grupos de desarrollo para materializarlas.
          </h5>
        </div>
      </div>
      <div class="separator separator-primary"></div>
      <div class="section-story-overview">
        <div class="row">
          <div class="col-md-6">
            <div
              data-aos="fade-right"
              class="image-container image-left"
              style="background-image: url('img/2.jpg')"
            >
              <!-- First image on the left side -->
              <p class="blockquote blockquote-primary" data-aos="flip-left">
                ¿Tienes una idea o un gran proyecto en mente? Hable con nosotros. Juntos podemos crear grandes cosas.
                <br />
                <br />
                <a
                  href="https://www.facebook.com/groups/495795397671271/"
                  class="btn btn-primary btn-icon btn-round mr-2"
                  target="_blank"
                >
                  <i class="fab fa-facebook-square"></i>
                </a>
                <a
                  href="https://t.me/soft4cuba"
                  class="btn btn-primary btn-icon btn-round mr-2"
                  target="_blank"
                >
                  <i class="fab fa-telegram"></i>
                </a>
                <a
                  href="https://twitter.com/Soft4Cuba"
                  class="btn btn-primary btn-icon btn-round"
                  target="_blank"
                >
                  <i class="fab fa-twitter"></i>
                </a>
              </p>
            </div>
            <!-- Second image on the left side of the article -->
            <div data-aos="zoom" class="image-container" style="background-image: url('img/3.jpg')"></div>
          </div>
          <div class="col-md-5">
            <!-- First image on the right side, above the article -->
            <div
              data-aos="fade-left"
              class="image-container image-right hidden-xs"
              style="background-image: url('img/1.jpg')"
            ></div>
            <br />
            <br />
            <p data-aos="fade-up">
              Soft4Cuba sienta las bases en la igualdad de oportunidad para presentar opiniones,
              ideas y proyectos con el objetivo de lograr el acceso de toda la sociedad al uso de
              las tecnologías de la comunicación y la información y con ello promover en el empleo
              de la informatización en las diferentes esferas de la vida práctica de nuestro país.
            </p>
            <p data-aos="fade-up">
              Todos los integrantes de la comunidad con sus proyectos o propuestas serán dignos de
              atención por todos, que han de contribuir con su divulgación a fin de que sean
              puestos a disposición de las entidades o personas que puedan reconocer su utilidad y
              hacer uso de sus resultados.

              <br />
              <br />

              <router-link
                to="proyects"
                class="btn btn-primary btn-round"
              >
                <i class="now-ui-icons design_app"></i> Proyectos
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
