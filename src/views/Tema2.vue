<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Diseño de la oferta de productos y servicios en el mercado campesino

    .fondo___color
      .px-5
        .row.align-items-center.m-0.mb-5
          .col-xl.style___box_13(data-aos="fade-right")
            p.mb-0 Contar con una oferta bien pensada es clave para que el trabajo campesino sea rentable. En este tema se aprenderá a planear, diversificar y agregar valor a los productos y servicios, todo de acuerdo con los requerimientos del mercado y los procedimientos técnicos establecidos. Así, se podrán aprovechar mejor los recursos de la unidad productiva y satisfacer la demanda de manera eficiente y atractiva para el cliente.
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/img43.png', alt='' style="max-width: 500px").m-auto

        <!-- BLOQUE 1 -->
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Planeación de la oferta
        
        p.mb-5 Organizar de forma adecuada la oferta de productos y servicios en el mercado campesino es tan importante como cultivarlos o elaborarlos. No se trata de producir al azar, sino de seleccionar de manera inteligente qué ofrecer, basándose en las necesidades reales de la comunidad y en las oportunidades del mercado.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img8.svg" style="max-width: 50px").m-auto
          .col
            h3 ¿Cómo saber qué productos son los adecuados?

        p.mb-5 El primer paso es observar la demanda: ¿qué compran con mayor frecuencia las familias, comerciantes o instituciones locales? Esta información se puede obtener prestando atención durante las ferias, conversando directamente con los clientes o intercambiando experiencias con otros productores.

        h4.mb-5 A continuación, se presentan los criterios clave para seleccionar productos:

        .fondo___slider.mb-5
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Frecuencia de consumo
                    p.mb-3 Priorizar productos que las familias compran con regularidad
                    p.mb-0 <strong>Ejemplo</strong>. Papa, plátano, cebolla y arroz son alimentos básicos en la dieta rural.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img44.png', alt='' style="max-width: 500px").m-auto
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Temporada y estacionalidad
                    p.mb-3 Aprovechar productos que se dan en ciertas épocas del año.
                    p.mb-0 <strong>Ejemplo</strong>. En época de lluvias, conviene sembrar frijol en regiones donde su producción aumenta en ese periodo.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img45.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Preferencias culturales y gastronómicas
                    p.mb-3 Adaptarse a los gustos locales.
                    p.mb-0 <strong>Ejemplo</strong>. En unas zonas prefieren el maíz amarillo, en otras el blanco; algunas comunidades valoran más las hierbas aromáticas.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img46.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Tendencias nuevas
                    p.mb-3 Observar cambios en el consumo, como el interés en productos saludables.
                    p.mb-0 <strong>Ejemplo</strong>. En algunas regiones ha crecido la demanda por quinua, miel pura o cacao artesanal.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img47.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Rentabilidad y facilidad de producción
                    p.mb-3 Equilibrar demanda con condiciones reales de la finca.
                    p.mb-0 <strong>Ejemplo</strong>. Don Esteban dejó de sembrar zanahoria (suelo poco apto) y amplió cultivos de lechuga y acelga, más rentables.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img48.png', alt='' style="max-width: 500px").m-auto

    .fondo___color
      .px-5
        p.mb-5 Además de productos alimenticios, también es importante considerar la oferta de servicios rurales que respondan a otras necesidades de la comunidad:

        .row.justify-content-center
          .col-xl-8
            .row.justify-content-center.mb-5
              .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="zoom-in")
                .tarjeta-avatar
                  img(src='@/assets/curso/temas/img49.svg' alt="" )
                  .tarjeta.color-primario
                    .p-4
                      .row.justify-content-center.mb-3
                        .col-auto
                          .py-2.px-3
                            p.mb-0 Alquiler de herramientas agrícolas.
              
              .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="zoom-in")
                .tarjeta-avatar
                  img(src='@/assets/curso/temas/img50.svg' alt="" )
                  .tarjeta.color-primario
                    .p-4
                      .row.justify-content-center.mb-3
                        .col-auto
                          .py-2.px-3
                            p.mb-0 Venta de semillas locales.
              
              .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="zoom-in")
                .tarjeta-avatar
                  img(src='@/assets/curso/temas/img51.svg' alt="" )
                  .tarjeta.color-primario
                    .p-4
                      .row.justify-content-center.mb-3
                        .col-auto
                          .py-2.px-3
                            p.mb-0 Servicios de siembra o mantenimiento de huertas.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img8.svg" style="max-width: 50px").m-auto
          .col
            h3 Herramientas para planificar mejor la oferta

        p.mb-5 Una estrategia práctica es llevar una pequeña libreta de observaciones, registrando después de cada feria:

        .row.justify-content-center
          .col-xl-8
            .row.justify-content-center.mb-5
              .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="zoom-in")
                .tarjeta-avatar
                  img(src='@/assets/curso/temas/img52.svg' alt="" )
                  .tarjeta.color-primario.ajuste___color_1
                    .p-4
                      .row.justify-content-center.mb-3
                        .col-auto
                          .py-2.px-3
                            p.mb-0 ¿Qué productos se vendieron más rápido?
              
              .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="zoom-in")
                .tarjeta-avatar
                  img(src='@/assets/curso/temas/img53.svg' alt="" )
                  .tarjeta.color-primario.ajuste___color_1
                    .p-4
                      .row.justify-content-center.mb-3
                        .col-auto
                          .py-2.px-3
                            p.mb-0 ¿Qué productos pidieron los clientes y no teníamos?
              
              .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="zoom-in")
                .tarjeta-avatar
                  img(src='@/assets/curso/temas/img54.svg' alt="" )
                  .tarjeta.color-primario.ajuste___color_1
                    .p-4
                      .row.justify-content-center.mb-3
                        .col-auto
                          .py-2.px-3
                            p.mb-0 ¿Qué comentarios se escucharon sobre calidad, precio o variedad?

        p.mb-5.espacio___movil_2 Este ejercicio, sencillo pero efectivo, permite afinar la producción, evitar pérdidas y concentrar los esfuerzos en lo que realmente tiene demanda.

        p.mb-5 <strong>Ejemplo práctico</strong>. En la Asociación Nueva Vida, los productores aplicaron una encuesta sencilla entre los clientes. Descubrieron una alta demanda de hierbas medicinales como menta, ruda y toronjil. Algunos productores comenzaron a cultivarlas, ampliando la oferta y generando mayores ingresos.

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl.style___box_9.ajuste___espacio(data-aos="fade-right")
            p.mb-0 La planeación de la oferta basada en la demanda es una siembra que no solo ocurre en la tierra, sino también en el corazón de quienes consumen. Así se asegura una producción con salida estable, mayor satisfacción del cliente y mejores ingresos para el productor.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img55.png', alt='' style="max-width: 400px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img8.svg" style="max-width: 50px").m-auto
      .col
        h3 Organización de servicios adicionales

    p.mb-5 En el mercado campesino, no solo se comercializan productos físicos. También pueden ofrecerse servicios complementarios que agregan valor, fortalecen la relación con los clientes y diferencian al productor como alguien que responde a necesidades reales de su comunidad.

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img56.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Entregas a domicilio").ajuste-cajaAcordion
              p.mb-3 Muy valoradas por familias con personas mayores o niños pequeños. Permiten fidelizar clientes mediante la comodidad.
              p.mb-3 <strong>Ejemplo</strong>. Don Manuel ofrece entregas gratuitas dentro del casco urbano por compras superiores a cierto monto.
            .row(titulo="Pedidos anticipados").ajuste-cajaAcordion
              p.mb-3 Clientes que no desean hacer filas o perder tiempo pueden encargar su compra por adelantado. Esto facilita la organización y garantiza ventas.
              p.mb-3 <strong>Ejemplo</strong>. Se pueden usar listas, cuadernos o mensajes por celular para organizar pedidos.
            .row(titulo="Arreglo y empaque especial").ajuste-cajaAcordion
              p.mb-3 Mejorar la presentación de los productos o crear combos listos para usar aumenta las ventas.
              p.mb-3 <strong>Ejemplo</strong>. Doña Flor arma paquetes de ensalada con lechugas, tomates, zanahorias ralladas y cilantro, todo listo para preparar.
            .row(titulo="Capacitación o asesoría básica").ajuste-cajaAcordion
              p.mb-3 Talleres breves sobre plantas medicinales, elaboración de conservas o siembra casera generan prestigio y pueden representar una fuente adicional de ingresos.
            .row(titulo="Eventos especiales").ajuste-cajaAcordion
              p.mb-3 Cuando varios productores se organizan, pueden crear ferias temáticas, jornadas de trueque o celebraciones comunitarias que dinamizan el mercado.
              p.mb-3 <strong>Ejemplo</strong>. “Feria de frutas de temporada” para atraer más compradores.

    h4.mb-5 Los elementos clave para organizar servicios exitosamente son:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl.style___box_9.ajuste___espacio_2(data-aos="fade-right")
            <ul class="fa-ul mb-0 estilo___ul_1">
              <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span><strong>Definir con claridad lo que se ofrece</strong>: especificar condiciones, precios (si los hay), horarios y zonas de cobertura. <strong>Ejemplo</strong>. “Entregas a domicilio solo los sábados en la mañana dentro del corregimiento.”</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span><strong>Prepararse adecuadamente</strong>: si se promete un servicio, debe cumplirse con calidad y puntualidad. La confianza se construye con responsabilidad.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-leaf"></i></span>Coordinar recursos humanos y logísticos: puede requerirse apoyo de familiares, vecinos o aliados para responder con eficacia.</li>
            </ul>
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img57.png', alt='' style="max-width: 400px").m-auto
    
    p.mb-5 <strong>Ejemplo destacado</strong>. La Cooperativa Semillas del Futuro no solo vende hortalizas. Algunos de sus miembros también ofrecen la instalación de huertas caseras. Esto les permite vender plántulas y semillas, y además cobrar por el servicio de siembra, generando ingresos dobles y promoviendo la alimentación sana.
    
    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-right")
              img(src='@/assets/curso/temas/img58.png', alt='' style="max-width: 400px").m-auto
          .col-xl.style___box_13(data-aos="fade-left")
            p.mb-0 Ofrecer servicios adicionales no representa una carga, sino una <strong>oportunidad para ampliar el impacto del mercado campesino</strong>, demostrar compromiso y construir relaciones duraderas con la comunidad, basadas en la atención a necesidades concretas.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img8.svg" style="max-width: 50px").m-auto
      .col
        h3 Programación de producción y entrega

    p.mb-5 En el mercado campesino, la improvisación puede resultar costosa. Para satisfacer a los clientes y evitar pérdidas, es fundamental planificar tanto la producción como las entregas. Esta programación permite garantizar disponibilidad, calidad y continuidad en la oferta, adaptándose a la demanda real del mercado.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Conocer los ciclos de cultivo o producción
                p.mb-3 Cada producto tiene su tiempo natural de crecimiento.
                p.mb-0 <strong>Ejemplo</strong>. La lechuga puede estar lista en 60 días, mientras que el maíz necesita entre 90 y 120 días. Esto permite sembrar con antelación para tener productos listos en temporada alta.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img59.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Planificación escalonada
                p.mb-3 Sembrar en pequeños lotes y en distintos momentos para asegurar producción continua.
                p.mb-0 <strong>Ejemplo</strong>. Sembrar una parcela de cilantro cada quince días garantiza disponibilidad semanal y evita pérdidas por excedentes no vendidos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img60.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ajuste según demanda estacional
                p.mb-3 Adaptar la producción a las épocas del año.
                p.mb-0 <strong>Ejemplo</strong>. En Semana Santa aumenta la demanda de pescado y hierbas; en diciembre, la de frutas y dulces típicos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img61.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Coordinación con ferias y eventos
                p.mb-3 Planificar la producción con base en el calendario de ferias.
                p.mb-0 <strong>Ejemplo</strong>. Si se aproxima una feria importante, sembrar productos que estén listos justo para esa fecha.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img62.png', alt='' style="max-width: 500px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img8.svg" style="max-width: 50px").m-auto
      .col
        h3 ¿Qué implica programar las entregas?

    p.mb-5 Además de producir con orden, es necesario asegurar que los productos lleguen al mercado en condiciones óptimas. Para ello se deben tener en cuenta los siguientes aspectos:
    
    .fondo___img_2.mb-5
      .px-5 
        .row.justify-content-center.mb-5
          .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/img63.svg' alt="" )
              .tarjeta.color-primario.ajuste___color_2
                .p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3
                        h4 Definir días y horarios de entrega
                        p.mb-0 Informar a clientes y aliados sobre disponibilidad de productos.
          
          .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/img64.svg' alt="" )
              .tarjeta.color-primario.ajuste___color_2
                .p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3
                        h4 Preparación del transporte
                        p.mb-0 Asegurar los medios de transporte adecuados, propios o compartidos.
          
          .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/img65.svg' alt="" )
              .tarjeta.color-primario.ajuste___color_2
                .p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3
                        h4 Empaque adecuado
                        p.mb-0 Usar materiales que protejan los productos durante el traslado: canastas, cajas, sacos.

          .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/img66.svg' alt="" )
              .tarjeta.color-primario.ajuste___color_2
                .p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3
                        h4 Confirmar pedidos anticipados
                        p.mb-0 Verificar con los clientes sus encargos antes de salir al mercado, para asegurar que todo esté correcto.

        h4.mb-5 Ejemplo de éxito en programación

        p.mb-5 La señora Rosalía, productora de hortalizas, solía llevar al mercado sin saber cuánto vendería, generando muchas pérdidas. Luego, programó siembras semanales de lechuga y rábano, e implementó pedidos telefónicos. Solo cosechaba lo que ya tenía encargado o sabía que vendería, reduciendo pérdidas casi a cero.

        .row.justify-content-center.m-0.mb-5
          .col-xl-10
            .row.align-items-center.style___box_14(data-aos="zoom-in")
              .col-xl
                h4 Beneficios de la programación:
                <ul class="fa-ul mb-0 estilo___ul_1">
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span>Se optimizan los recursos de la finca o parcela.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span>Se garantiza disponibilidad constante de productos frescos.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-leaf"></i></span>Se fortalecen relaciones con los clientes gracias a la puntualidad y calidad.</li>
                </ul>
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img68.jpg', alt='' style="max-width: 500px").m-auto

    p.mb-0 En el mundo campesino, como en la naturaleza, todo lo que se siembra con orden florece con más fuerza. Programar la producción y la entrega no solo mejora las ventas, sino que también <strong>siembra confianza</strong> en quienes compran y fortalecen el vínculo con el productor.
      
    <!-- BLOQUE 2 -->
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Valor agregado de nuestros productos
    
    p.mb-5 En el mercado campesino, el valor agregado se refiere a todo aquello que puede mejorar un producto sin cambiar su esencia, haciéndolo más atractivo, útil o valioso para quien lo compra. Esto permite vender mejor y, en muchos casos, a un mejor precio.

    .row.justify-content-center.m-0.mb-5
      .col-xl-10
        .row.align-items-center.style___box_15(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img69.jpg', alt='' style="max-width: 500px").m-auto
          .col-xl
            h4 ¿Por qué es importante agregar valor a nuestros productos?
            <ul class="fa-ul mb-0 estilo___ul_1">
              <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span><strong>Diferencia</strong> frente a productos similares.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span><strong>Genera mayores ingresos</strong>, al poder venderse a un precio superior.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-leaf"></i></span><strong>Abre nuevos mercados</strong>, especialmente con productos listos para el consumo o con presentaciones llamativas.</li>
            </ul>

    p.mb-5 A continuación, se presentan algunas estrategias sencillas que ayudan a agregar valor a lo que se produce.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Mejorando la presentación
                p.mb-3 Un empaque limpio y llamativo atrae más compradores.
                p.mb-0 <strong>Ejemplo</strong>. Don Guillermo empaca su café molido en bolsitas de tela artesanal, lo que llama la atención de turistas y compradores interesados en productos locales.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img70.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Transformando la materia prima
                p.mb-3 Convertir un producto básico en uno procesado.
                p.mb-0 <strong>Ejemplo</strong>. Doña Teresa transforma guayabas en bocadillos caseros listos para consumir.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img71.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ofreciendo productos listos para el consumo
                p.mb-3 Facilitarle la vida al cliente con productos cortados, lavados o combinados.
                p.mb-0 <strong>Ejemplo</strong>. Bolsas de ensalada listas para servir, frutas peladas y combos de verduras para sancocho.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img73.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Destacando características especiales
                p.mb-3 Informar si el producto es orgánico, tradicional o sin químicos.
                p.mb-0 <strong>Ejemplo</strong>. Don Luis coloca un letrero: "Plátanos orgánicos, criados sin venenos", generando más confianza.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img72.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Contando la historia del producto
                p.mb-3 Compartir el origen y proceso del producto, creando conexión emocional.
                p.mb-0 <strong>Ejemplo</strong>. “Esta miel proviene de nuestras abejas criadas en el bosque de la vereda La Montaña, donde no se usan pesticidas.”
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img74.png', alt='' style="max-width: 500px").m-auto
          
    p.mb-4 El <strong>valor agregado también puede ser emocional</strong>. Cuando el cliente percibe que al comprar está apoyando a una familia campesina, preservando una tradición o protegiendo el ambiente, el producto adquiere más valor ante sus ojos.

    p.mb-5 <strong>Ejemplo inspirador</strong>. La Asociación Raíces de Mi Tierra comenzó vendiendo hierbas frescas, pero al deshidratarlas y empacarlas en frascos pequeños, lograron venderlas en tiendas naturales de la ciudad a un precio tres veces mayor. El cultivo no cambió, pero sí lo hizo el formato y la presentación.

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl.style___box_13(data-aos="fade-right")
            p.mb-0 El valor agregado es como un fertilizante especial: no se trata de producir más cantidad, sino de <strong>ofrecer mejor calidad, presentación y conexión</strong>. Es una forma de hacer que el trabajo de siempre rinda más frutos y genere mayores oportunidades.
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/img75.png', alt='' style="max-width: 400px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img8.svg" style="max-width: 50px").m-auto
      .col
        h3 Cómo embellecer la presentación de nuestros productos

    p.mb-5 La presentación de un producto en el mercado campesino es como una carta de presentación: puede abrir puertas en segundos. Incluso los productos sencillos, si están bien presentados, pueden atraer más miradas, generar interés y aumentar las ventas.

    .row.justify-content-center.m-0.mb-5
      .col-xl-10
        .row.align-items-center.style___box_15(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img76.jpg', alt='' style="max-width: 500px").m-auto
          .col-xl
            h4 ¿Por qué es importante embellecer la presentación?
            <ul class="fa-ul mb-0 estilo___ul_1">
              <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span>Transmite cuidado, respeto y profesionalismo.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span>Facilita que el cliente valore más el producto.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span>Permite diferenciarse de otros vendedores.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-leaf"></i></span>Genera una primera impresión positiva que influye en la decisión de compra.</li>
            </ul>

    h4.mb-5 A continuación, se comparten estrategias prácticas para lograrlo.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Limpieza y orden
                p.mb-3 El primer paso es que el producto esté limpio y bien clasificado.
                p.mb-0 <strong>Ejemplo</strong>. Don Fabio separa sus cebollas por tamaño y las agrupa de forma ordenada. Su puesto siempre luce atractivo y organizado.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img77.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Empaque sencillo pero llamativo
                p.mb-3 No hace falta gastar mucho: bolsas de papel, tela o plástico transparente; etiquetas hechas a mano; amarrar con cabuya natural.
                p.mb-0 <strong>Ejemplo</strong>. Doña Luz empaca sus limones en bolsas de tela reutilizable, transmitiendo respeto al ambiente.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img78.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Uso de colores naturales
                p.mb-3 Aprovechar la viveza de los colores de frutas y verduras, organizándolos de manera armoniosa.
                p.mb-0 <strong>Ejemplo</strong>. Un puesto con zanahorias, rábanos y acelgas bien ordenados atrae miradas desde lejos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img79.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Carteles informativos
                p.mb-3 Un letrero que indique el nombre del producto, su precio y algún dato relevante genera confianza.
                p.mb-0 <strong>Ejemplo</strong>. “Miel pura de la montaña, sin químicos” puede ser decisivo para una venta.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img80.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cestas y soportes rústicos
                p.mb-0  Utilizar canastos, cajas de madera y manteles coloridos crea un ambiente cálido y tradicional que resalta el producto.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img81.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cuidado personal del vendedor
                p.mb-0  La presentación también incluye a quien atiende. Un vendedor sonriente, con ropa limpia y actitud cordial, mejora la experiencia de compra y embellece el puesto.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img82.png', alt='' style="max-width: 500px").m-auto

    .fondo___color
      .px-5
        p.mb-5 <strong>Ejemplo inspirador</strong>. La familia Rodríguez vendía fríjol criollo en bolsas transparentes. Comenzaron a colocar una cinta roja en cada bolsa y una etiqueta sencilla que decía: <strong>“Fríjol de nuestras montañas, cosechado con amor”</strong>. Este pequeño detalle hizo que sus ventas aumentaran notablemente en la feria mensual.

        .row.justify-content-center
          .col-xl-10
            .row.align-items-center.m-0
              .col-xl-auto
                figure.d-none.d-xl-block(data-aos="fade-right")
                  img(src='@/assets/curso/temas/img83.png', alt='' style="max-width: 400px").m-auto
              .col-xl.style___box_13(data-aos="fade-left")
                p.mb-0 Embellecer la presentación no es disfrazar el producto, sino <strong>resaltar su valor natural y cultural</strong>, mostrando el esfuerzo y la honestidad del productor. Un mercado campesino que cuida sus productos no solo mejora sus ingresos, sino que también <strong>fortalece el orgullo comunitario y conquista a quienes valoran lo auténtico</strong>.

        <!-- BLOQUE 3 -->
        Separador
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Diversificación de la oferta

        p.mb-5 Diversificar la oferta en el mercado campesino significa no depender de un solo producto, sino ofrecer una variedad que atraiga a diferentes tipos de compradores, aproveche mejor los recursos disponibles y reduzca los riesgos económicos. Esta estrategia fortalece la economía familiar y comunitaria, al igual que la diversidad fortalece a los ecosistemas.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img8.svg" style="max-width: 50px").m-auto
          .col
            h3 ¿Por qué es importante diversificar?

        p.mb-5 Ofrecer una variedad de productos no solo mejora las oportunidades de venta, también protege frente a riesgos como las pérdidas por clima o cambios en la demanda. A continuación, se explican los beneficios principales de diversificar y cómo aplicarlos.

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Mayor atracción para los clientes").ajuste-cajaAcordion
              p.mb-3 Un puesto variado satisface varias necesidades y capta más atención.
              p.mb-5 <strong>Ejemplo</strong>. Don Ernesto, que vendía solo plátanos, incluyó miel casera y café. Así, sus clientes terminaron comprando más de un producto.
            .row(titulo="Protección ante pérdidas").ajuste-cajaAcordion
              p.mb-3 Si una cosecha falla, otros productos pueden sostener los ingresos
              p.mb-3 <strong>Ejemplo</strong>. Si el tomate se pierde por exceso de lluvia, aún pueden vender lechuga, yuca o habichuelas.
            .row(titulo="Aprovechamiento de recursos naturales").ajuste-cajaAcordion
              p.mb-3 Las fincas pueden adaptarse a diferentes cultivos en distintos espacios.
              p.mb-3 <strong>Ejemplo</strong>. La familia Pardo cultiva cebolla y, en espacios pequeños, también siembra albahaca, hierbabuena y orégano que venden en paquetes combinados.
            .row(titulo="Respuesta a demandas variadas").ajuste-cajaAcordion
              p.mb-3 No todos los clientes buscan lo mismo; una oferta variada atiende más perfiles. Esto permite llegar a familias, comerciantes, turistas o instituciones.
            .row(titulo="Inclusión de productos y servicios").ajuste-cajaAcordion
              p.mb-3 Diversificar también puede significar ofrecer servicios complementarios.
              p.mb-3 <strong>Ejemplo</strong>. Entrega a domicilio, asesoría para huertas, venta de abonos naturales.
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img84.png", alt="" style="width: 400px").m-auto  
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img8.svg" style="max-width: 50px").m-auto
      .col
        h3 ¿Qué combinaciones de productos funcionan bien?

    p.mb-5 Diversificar también implica pensar en combinaciones inteligentes. Algunos productos se complementan naturalmente y, al ofrecidos juntos, generan más valor. Aquí algunos ejemplos de combinaciones útiles para el mercado campesino.
    
    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img85.svg' alt="" )
          .tarjeta.color-primario.ajuste___color_2
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    h4 Frescos + transformados
                    p.mb-0 Vender zanahorias junto con mermelada casera de zanahoria.
      
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img86.svg' alt="" )
          .tarjeta.color-primario.ajuste___color_2
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    h4 Agrícolas + artesanías
                    p.mb-0 Ofrecer verduras junto a canastos de mimbre para transportar compras.
      
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img87.svg' alt="" )
          .tarjeta.color-primario.ajuste___color_2
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    h4 Alimentos de temporada combinados
                    p.mb-0 Combos de frutas de verano como mango, guayaba y maracuyá.

      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img88.svg' alt="" )
          .tarjeta.color-primario.ajuste___color_2
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    h4 Agrícolas + plantas medicinales u ornamentales
                    p.mb-0 Al lado de los tomates, vender pequeñas matas de albahaca en macetas recicladas. 
    
    p.mb-5 <strong>Caso destacado</strong>. En el Mercado Campesino La Unión, varios productores ampliaron su oferta para incluir huevos criollos, miel, arequipe y plantas medicinales, además de hortalizas. Esta diversificación convirtió su espacio en un punto de encuentro más atractivo, incrementando sus ingresos y el interés de la comunidad.

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-right")
              img(src='@/assets/curso/temas/img89.png', alt='' style="max-width: 400px").m-auto
          .col-xl.style___box_13.ajuste___color_3(data-aos="fade-left")
            p.mb-0 Diversificar no significa hacer de todo al mismo tiempo, sino <strong>planear con inteligencia</strong>, elegir productos y servicios que se complementen, que puedan producirse con los recursos disponibles y que respondan a lo que realmente necesita el mercado. Así, la diversidad se convierte en una fortaleza económica y cultural para el campesinado.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img8.svg" style="max-width: 50px").m-auto
      .col
        h3 Estrategias para innovar en el campo

    p.mb-5 Innovar no significa dejar de ser campesino ni abandonar las tradiciones. Significa <strong>buscar nuevas formas de hacer mejor lo que ya se hace</strong>, con más eficiencia, atractivo y sostenibilidad. En un mundo donde los mercados y los gustos cambian rápidamente, el campo también debe adaptarse para seguir siendo competitivo, rentable y profundamente valioso.

    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in").mb-5
      .row(titulo="Transformar lo tradicional en algo nuevo").ajuste-cajaAcordion
        .col-xl
          p.mb-3 Dar un giro a productos conocidos para adaptarlos a nuevas formas de consumo.
          p.mb-3 <strong>Ejemplo</strong>. Doña Isabel, en vez de vender solo mazorcas, empezó a ofrecer arepas de maíz pelao listas para calentar, atrayendo a clientes jóvenes y ocupados.
        .col-xl-auto
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img90.png', alt='' style="max-width: 400px").m-auto
      .row(titulo="Agregar valor cultural al producto").ajuste-cajaAcordion
        .col-xl
          p.mb-3 Incorporar historias, técnicas ancestrales o recetas tradicionales que conecten emocionalmente al cliente.
          p.mb-3 <strong>Ejemplo</strong>. Don Pascual acompaña su miel con una tarjeta que explica cómo sus abejas viven libres y sin químicos en los bosques locales.
        .col-xl-auto
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img91.png', alt='' style="max-width: 400px").m-auto
      .row(titulo="Aprovechar nuevas tendencias de consumo").ajuste-cajaAcordion
        .col-xl
          p.mb-3 Responder a la demanda creciente de productos saludables, naturales y sostenibles.
          p.mb-3 <strong>Ideas prácticas</strong>: - Cultivos orgánicos sin agroquímicos. - Bolsitas de hierbas para infusión. - Canastas ecológicas de frutas y verduras locales.
        .col-xl-auto
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img92.png', alt='' style="max-width: 400px").m-auto
      .row(titulo="Diversificar presentaciones").ajuste-cajaAcordion
        .col-xl
          p.mb-3 Adaptar los formatos de venta a distintos tipos de cliente.
          p.mb-3 <strong>Ejemplo</strong>. Ofrecer combos pequeños de verduras para comidas rápidas y canastas grandes para familias.
        .col-xl-auto
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img93.png', alt='' style="max-width: 400px").m-auto
      .row(titulo="Aprovechar redes locales").ajuste-cajaAcordion
        .col-xl
          p.mb-3 Organizarse entre productores para ofrecer productos variados, distribuir en conjunto o asistir a ferias regionales.
          p.mb-3 <strong>Ejemplo</strong>. En La Primavera, varios campesinos ofrecen “canastas del mercado” con frutas, verduras, huevos y miel a domicilio.
        .col-xl-auto
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img94.png', alt='' style="max-width: 400px").m-auto
      .row(titulo="Incorporar tecnologías sencillas").ajuste-cajaAcordion
        .col-xl
          p.mb-3 Utilizar herramientas básicas para mejorar la comunicación y promoción.
          p.mb-3 <strong>Ejemplo</strong>. - Crear un grupo de WhatsApp con clientes. - Usar afiches y carteles caseros. - Anunciar en radios comunitarias las ofertas semanales.
        .col-xl-auto
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img95.png', alt='' style="max-width: 400px").m-auto

    p.mb-5 <strong>Ejemplo destacado</strong>. El grupo Sabores del Terruño presentó sus productos en canastos tejidos a mano y ofreció degustaciones gratuitas en ferias rurales. Esta fusión de tradición e innovación <strong>aumentó sus ventas y su reconocimiento en municipios cercanos</strong>.

    .row.justify-content-center
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-right")
              img(src='@/assets/curso/temas/img96.png', alt='' style="max-width: 400px").m-auto
          .col-xl.style___box_13.ajuste___color_3(data-aos="fade-left")
            p.mb-0 Innovar en el campo es <strong>respetar lo propio mientras se mejora lo posible</strong>. Así como la naturaleza se adapta a cada estación, el campesinado puede renovar sus prácticas, abrir nuevos caminos y florecer con cada oportunidad. Pensar en el cliente, cuidar la identidad y buscar mejorar son los pilares de una innovación auténtica y efectiva.
         
</template>

<script>
export default {
  name: 'Tema2',
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
