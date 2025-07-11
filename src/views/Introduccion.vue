<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .fondo___color
      .px-5
        p.mb-4 En el mercado campesino, cada producto que nace de la tierra, cada servicio que se ofrece con dedicación lleva consigo una historia de esfuerzo y amor por el campo. Para fortalecer nuestro mercado, es necesario entender cómo funciona nuestro entorno, cómo organizar mejor lo que ofrecemos, cómo hacer llegar nuestros productos a más personas, cómo atender de manera cordial a nuestros compradores y cómo mejorar cada día a partir de sus opiniones.

        .row.align-items-center.mb-5
          .col-xl
            .row.align-items-center.style___box_1.m-0(data-aos="fade-right")
              .col-xl-auto
                figure.d-none.d-xl-block.ajuste___img
                  img(src='@/assets/curso/intro/img2.png', alt='' style="max-width: 400px").m-auto
              .col-xl
                figure.d-none.d-xl-block.mb-3(data-aos="zoom-in")
                  img(src='@/assets/curso/intro/img3.svg', alt='' style="max-width: 85px")
                p.mb-0 Este componente formativo tiene como objetivo brindar herramientas prácticas, sencillas y aplicables para fortalecer las unidades productivas campesinas, estructurar correctamente la oferta de productos y servicios, promocionarlos adecuadamente, concretar acuerdos de venta y lograr una atención al cliente de calidad, todo esto respetando los procedimientos técnicos y la política comercial que nos rige.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/intro/img4.png', alt='' style="max-width: 260px").m-auto

        .row.align-items-center.m-0.style___box_2(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-right")
              img(src='@/assets/curso/intro/img5.png', alt='' style="max-width: 80px").m-auto
          .col-xl
            p.mb-0 A lo largo de este recorrido, se encontrarán ejemplos reales, recomendaciones claras y estrategias pensadas para la vida rural, buscando siempre impulsar el bienestar económico y social de las comunidades campesinas.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
