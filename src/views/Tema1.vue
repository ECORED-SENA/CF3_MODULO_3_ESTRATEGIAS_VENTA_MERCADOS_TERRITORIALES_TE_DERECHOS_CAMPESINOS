<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Caracterización del mercado territorial campesino

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Antes de ofrecer cualquier producto o servicio, es fundamental conocer el mercado donde se va a participar. Este tema permitirá entender qué es un mercado territorial campesino, cómo identificar a nuestros clientes y cuáles son las características del entorno que pueden afectar o favorecer nuestras ventas. Comprender el mercado es el primer paso para estructurar una oferta que responda realmente a las necesidades de nuestra comunidad y asegurar el éxito de la unidad productiva.

    <!-- BLOQUE 1 -->
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 ¿Qué es un mercado territorial campesino?

    .fondo___color
      .px-5
        .row.align-items-center.mb-5.m-0
          .col-xl.style___box_3(data-aos="fade-right")
            p.mb-0 El mercado territorial campesino es mucho más que un espacio de intercambio de productos; constituye el corazón de la vida rural. En él, las familias campesinas ofrecen directamente el fruto de su trabajo a quienes valoran la frescura, el sabor y la tradición de los alimentos locales. Estos mercados no solo funcionan como puntos de venta, sino como verdaderos centros de encuentro comunitario, donde también se comparten conocimientos, costumbres y valores culturales.
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/img2.png', alt='' style="max-width: 500px").m-auto

        p.mb-5.espacio___movil_1 En estos espacios es común encontrar productos que reflejan la riqueza de la tierra y el esfuerzo diario de quienes la trabajan:

        .row.align-items-center.mb-5
          .col-xl-3
            figure.d-none.d-xl-block(data-aos="fade-right")
              img(src='@/assets/curso/temas/img3.png', alt='' style="max-width: 295px").m-auto
          .col-xl-9
            .row
              .col-xl-4(data-aos="zoom-in").espacio___movil_1
                .style___box_4.h-100
                  .row.justify-content-center.mb-3
                    .col-7
                      figure.mb-4.d-none.d-xl-block(data-aos="fade-right")
                        img(src='@/assets/curso/temas/img4.svg', alt="" style="max-width: 85px").m-auto
                    p.mb-0 Verduras frescas como lechugas, zanahorias o cebollas, recogidas esa misma mañana del huerto.
              .col-xl-4(data-aos="zoom-in").espacio___movil_3
                .style___box_4.h-100
                  .row.justify-content-center.mb-3
                    .col-7
                      figure.mb-4.d-none.d-xl-block(data-aos="fade-right")
                        img(src='@/assets/curso/temas/img5.svg', alt="" style="max-width: 85px").m-auto
                    p.mb-0 Artesanías hechas a mano, como canastos, tejidos o utensilios de madera.
              .col-xl-4(data-aos="zoom-in").espacio___movil_3
                .style___box_4.h-100
                  .row.justify-content-center.mb-3
                    .col-7
                      figure.mb-4.d-none.d-xl-block(data-aos="fade-left")
                        img(src='@/assets/curso/temas/img6.svg', alt="" style="max-width: 85px").m-auto
                    p.mb-0 Productos transformados, como arequipe, bocadillos o quesos elaborados en las fincas de la región.

        p.mb-5 Una de las características fundamentales de estos mercados es la eliminación de intermediarios. Esto permite que el dinero pagado por quien compra vaya directamente a quien cultiva o fabrica el producto, fortaleciendo así la economía local. Además, estos mercados permiten preservar saberes tradicionales que tienden a desaparecer con la industrialización, como la siembra de maíz criollo o la preparación de arepas en fogón de leña. Así, no solo se comercializa un alimento, sino que se transmite historia, cultura e identidad. A continuación se presentan las características esenciales de un mercado territorial campesino:

    .row.mb-5.justify-content-center
      .col-xl-4(data-aos="zoom-in")
        .style___box_5.h-100
          h4.mb-0.text-center Productos propios del territorio
          p.mb-0 Se ofrece lo que la tierra da, respetando los ciclos naturales.
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .style___box_5.h-100
          h4.mb-0.text-center Prácticas sostenibles
          p.mb-0 Se promueven cultivos orgánicos y el uso responsable de recursos como el agua.
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .style___box_5.h-100
          h4.mb-0.text-center Relación de confianza
          p.mb-0 Existe un vínculo directo entre quien produce y quien consume.

    p.mb-5 Por ejemplo, en un municipio pequeño, el mercado campesino puede organizarse una vez a la semana en la plaza principal. Allí, don José ofrece sus plátanos recién cortados, doña Marta vende miel pura de sus colmenas y la familia Ramírez muestra orgullosa sus tejidos de fique. Cada venta lleva consigo una historia, un saber, una tradición.

    .row.align-items-center.mb-5.style___box_6.m-0(data-aos="zoom-in")
      .col-xl
        p.mb-0 Participar en un mercado territorial campesino no solo mejora los ingresos familiares, sino que también fortalece la identidad comunitaria. Es una forma de recordar que la verdadera riqueza está en valorar lo que se produce con esfuerzo, conocimiento y respeto por la tierra.
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img7.jpg', alt='' style="max-width: 400px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img8.svg" style="max-width: 50px").m-auto
      .col
        h3 Características principales de los mercados campesinos
    
    .fondo___color_1
      .px-5
        p.mb-5 Los mercados campesinos poseen una identidad especial que los distingue de cualquier otro tipo de mercado. Cada característica está vinculada al modo de vida rural y a la intención de acercar directamente los productos al consumidor, conservando la calidad, la tradición y el sentido de comunidad.

        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img9.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Una de sus principales características es la frescura de los productos, que son siempre de temporada. Esto significa que los alimentos no han sido almacenados por días ni transportados largas distancias, sino que han sido cosechados pocas horas antes de su venta. Por ejemplo, una mazorca vendida en uno de estos mercados probablemente fue arrancada de la milpa esa misma mañana, manteniendo así su sabor y valor nutritivo.

        p.mb-5 Además, cada productor ofrece una gran variedad de artículos, lo que enriquece la experiencia de compra:

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center.m-0
              .col-xl.style___box_7(data-aos="fade-right")
                <ul class="fa-ul mb-0 estilo___ul">
                  <li class="mb-3 estilo___li_fondo"><span class="fa-li"><i class="fas fa-leaf"></i></span>Derivados alimenticios como arequipe, queso artesanal, yogur casero y dulces típicos.</li>
                  <li class="mb-3 estilo___li_fondo"><span class="fa-li"><i class="fas fa-leaf"></i></span>Productos de cuidado personal como jabones naturales elaborados con plantas locales.</li>
                  <li class="mb-0 estilo___li_fondo"><span class="fa-li"><i class="fas fa-leaf"></i></span>Productos de cuidado personal como jabones naturales elaborados con plantas locales.</li>
                </ul>
              .col-xl-auto(data-aos="fade-left")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img10.png', alt='' style="max-width: 295px").m-auto
        
        p.mb-5 A continuación se sintetizan las principales características en la siguiente tabla:

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Frescura y temporalidad
                p.mb-0 Los productos son cosechados poco antes de su venta, sin largos procesos de almacenamiento ni transporte.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img12.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Diversidad de productos
                p.mb-0 Incluyen alimentos frescos, transformados, artículos de higiene y artesanías tradicionales.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img13.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Relación directa y de confianza
                p.mb-0 El comprador puede conversar con el productor sobre métodos de cultivo, elaboración y calidad de los productos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img14.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Precios justos
                p.mb-0 Al no haber intermediarios, el productor recibe una mejor retribución y el consumidor paga un precio razonable.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img15.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Espacios vivos de cultura
                p.mb-0 Se integran expresiones culturales como música, gastronomía y festividades locales que fortalecen la identidad.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img16.png', alt='' style="max-width: 500px").m-auto

    p.mb-5 <strong>Por ejemplo</strong>, en un mercado campesino es habitual escuchar preguntas como: <strong>“¿Qué abono utilizó?”, “¿Esta miel es pura?”, “¿Hace cuánto cosechó esto?”</strong>. Y quien vende responde con honestidad, fortaleciendo un vínculo de credibilidad que fideliza al cliente.

    .row.justify-content-center
      .col-xl-10
        .row.align-items-center.style___box_8.m-0(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img17.png', alt='' style="max-width: 295px").m-auto
          .col-xl
            p.mb-0 Además, más allá de ser espacios de comercio, estos mercados se convierten en escenarios de expresión comunitaria: es común encontrar música tradicional, platos típicos, muestras artísticas o celebraciones patronales. Así, asistir al mercado se transforma en una experiencia integral de participación cultural y social.
      
    <!-- BLOQUE 2 -->
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Perfil de los clientes rurales

    p.mb-5 Conocer bien a quienes compran en el mercado campesino es como sembrar en tierra fértil: asegura que los esfuerzos realizados rindan frutos. Comprender qué buscan, qué valoran y cómo se comportan las personas que visitan el mercado permite organizar mejor la oferta, mejorar los servicios y garantizar que cada jornada sea exitosa.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img18.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cuando el productor entiende a su comunidad, puede tomar decisiones más acertadas sobre qué cultivar, en qué cantidades y cómo presentar sus productos. Por ejemplo, si se identifica una alta demanda de alimentos orgánicos, es conveniente enfocarse en una producción libre de químicos y resaltarlo al momento de la venta. Asimismo, si se sabe que la población mayor valora productos tradicionales como la panela o el bocadillo, estos deben destacarse en la oferta.
    
    p.mb-5 Los siguientes aspectos resultan clave al momento de conocer el perfil del cliente rural:

    .fondo___img
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img20.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img21.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Preferencias de consumo
                p.mb-0 Determinar si se buscan productos frescos, transformados, artesanías o servicios rurales.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img22.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Capacidad de compra
                p.mb-0 Adaptar los precios y presentaciones (como paquetes pequeños) según el poder adquisitivo local.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img23.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Horarios y días de afluencia
                p.mb-0 Organizar la logística de producción y transporte según el flujo de personas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img24.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Costumbres locales
                p.mb-0 Alinear la oferta con festividades y tradiciones, como platos típicos o decoraciones artesanales.

        p.mb-5 Un ejemplo práctico es el de don Martín, productor de hortalizas, quien observó que muchas madres asistían al mercado con sus hijos pequeños. Al notar que preferían productos listos para cocinar, comenzó a ofrecer "paquetes de sopa" que incluían zanahoria, papa, cebolla y cilantro fresco. Esta estrategia sencilla le permitió aumentar sus ventas sin necesidad de ampliar la producción.      

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl.style___box_9(data-aos="fade-right")
            p.mb-0 Conocer a la comunidad no es difícil, pero requiere atención y diálogo constante. Escuchar a quienes compran, formular preguntas simples como “¿Qué le gustaría encontrar la próxima vez?” o “¿Cómo le parece el precio de hoy?”, y observar con atención el comportamiento de los clientes son acciones que ayudan a ajustar la oferta de manera natural. De esta manera, el mercado campesino se transforma en un espacio de encuentro y entendimiento, donde productor y comprador construyen una relación duradera y mutuamente beneficiosa.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img25.png', alt='' style="max-width: 400px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img8.svg" style="max-width: 50px").m-auto
      .col
        h3 ¿Quiénes son nuestros principales compradores?

    p.mb-5 Identificar a los principales compradores del mercado campesino es esencial para lograr una oferta atractiva y efectiva. No todos los clientes buscan lo mismo ni compran de la misma forma; por eso, comprender sus perfiles ayuda a ofrecer productos que respondan a sus necesidades, presentados de forma adecuada.

    h5.mb-4 En los mercados rurales suelen destacarse los siguientes tipos de compradores:

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Familias locales
                p.mb-0 Buscan alimentos frescos, variados y a buen precio para el consumo diario. Valoran productos como verduras, frutas, huevos, lácteos, granos y tubérculos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img26.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Pequeños comerciantes
                p.mb-0 Compran al por mayor para revender en tiendas o mercados más pequeños. Buscan volumen y precios competitivos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img27.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Instituciones educativas o sociales
                p.mb-0 Adquieren productos frescos para programas alimentarios (escuelas, comedores, centros sociales). Requieren calidad, cumplimiento y regularidad.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img28.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Turistas rurales
                p.mb-0 Interesados en productos típicos, artesanías o alimentos naturales como panela, miel y frutas autóctonas. Valoran la autenticidad y están dispuestos a pagar más.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img29.png', alt='' style="max-width: 500px").m-auto

    h5.mb-5 Cada tipo de cliente tiene necesidades específicas. Por Ejemplo.

    .fondo___color
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center.m-0
              .col-xl.style___box_9.ajuste___espacio(data-aos="fade-right")
                <ul class="fa-ul mb-0 estilo___ul_1">
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span>Las <strong>familias</strong> valoran la frescura y el precio justo.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span>Los <strong>comerciantes</strong> priorizan el volumen y el ahorro.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span>Las <strong>instituciones</strong> exigen calidad constante y puntualidad en la entrega.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-leaf"></i></span>Los <strong>turistas</strong> buscan productos únicos y experiencias auténticas de compra directa al productor.</li>
                </ul>
              .col-xl-auto(data-aos="fade-left")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img30.png', alt='' style="max-width: 400px").m-auto
        
        p.mb-5 Un caso concreto es el de don Arturo, productor de hortalizas en un municipio con mercado dominical. Él preparó paquetes especiales con verduras para ensaladas, pensando en las familias, y ofreció descuentos por volumen, atrayendo a pequeños comerciantes. Esta estrategia, basada en entender los perfiles de sus clientes, le permitió aumentar significativamente sus ventas.

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center.m-0
              .col-xl-auto(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img31.png', alt='' style="max-width: 400px").m-auto
              .col-xl.style___box_10(data-aos="fade-left")
                h4.mb-3 Además, conocer a los compradores ayuda a organizar mejor el punto de venta:
                <ul class="fa-ul mb-0 estilo___ul_1">
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span>Ofrecer muestras gratuitas para que el cliente pruebe el producto.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span>Crear promociones o combos adaptados a cada perfil de cliente.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-leaf"></i></span>Presentar información clara sobre precios, pesos y origen de los productos para generar confianza.</li>
                </ul>

        p.mb-5 En el mercado campesino, cada cliente puede convertirse en un aliado. Si queda satisfecho, no solo regresará, sino que también recomendará el mercado a otras personas, ampliando así su alcance e impacto en la comunidad.  

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img8.svg" style="max-width: 50px").m-auto
          .col
            h3 ¿Qué necesidades tienen las familias rurales?

        p.mb-5 Cada familia rural tiene particularidades, pero existen necesidades comunes que permiten entender mejor qué buscan al acercarse al mercado campesino. Conocer estas necesidades facilitas preparar una oferta ajustada y garantiza que cada cliente encuentre lo que necesita.

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img32.png", alt="" style="width: 382px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Alimentos frescos y de buena calidad").ajuste-cajaAcordion
              p.mb-0 Prefieren productos naturales, sin procesos industriales. Buscan verduras recién cosechadas, frutas maduras, huevos del día, carnes naturales y productos artesanales como miel o queso fresco. Ejemplo. Doña Mercedes, de la vereda El Jardín, prefiere zanahorias con tierra por su frescura.
            .row(titulo="Precios accesibles").ajuste-cajaAcordion
              p.mb-0  Valoran precios justos que reflejen el esfuerzo del productor sin ser elevados. A menudo encuentran mejores precios que en supermercados urbanos. 
            .row(titulo="Presentación práctica").ajuste-cajaAcordion
              p.mb-0 Aprecian productos organizados en bolsas, por peso o en combos, lo cual facilita la compra y ahorra tiempo. Ejemplo. Don Miguel prepara "paquetes de sancochos" con papa, yuca, plátano y mazorca en una sola bolsa lista para cocinar.
            .row(titulo="Disponibilidad regular").ajuste-cajaAcordion
              p.mb-0 Esperan encontrar cada semana los productos que necesitan. La constancia del vendedor genera confianza.
            .row(titulo="Atención amable y personalizada").ajuste-cajaAcordion
              p.mb-0  El trato cercano, cordial y respetuoso es valorado. Una recomendación o una pequeña rebaja pueden fidelizar al cliente.
            .row(titulo="Fiestas patronales").ajuste-cajaAcordion
              p.mb-0 Se incrementa la demanda de ingredientes tradicionales y platos típicos. Ejemplo. Mayor venta de maíz, plátano, carne de cerdo y dulces artesanales.
            .row(titulo="Temporada escolar").ajuste-cajaAcordion
              p.mb-0 Las familias buscan opciones nutritivas y prácticas para los niños. Ejemplo. Aumenta la demanda de frutas fáciles de llevar en las loncheras escolares.
    
    p.mb-0.espacio___movil_2 Cumplir con estas expectativas convierte a cada cliente en un posible promotor del mercado, fortaleciendo su presencia y valor en la comunidad.
 
    <!-- BLOQUE 3 -->
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Análisis del entorno local

    .fondo___color_1
      .px-5
        p.mb-5 En el campo, el éxito de un mercado campesino no depende únicamente de la calidad de los productos ni del esfuerzo de quien los produce. También intervienen factores del entorno que pueden facilitar o dificultar las ventas. Entender estos elementos es como conocer el clima antes de sembrar: permite anticiparse y tomar mejores decisiones. A continuación, se presenta un pódcast que analiza los principales factores que influyen en la dinámica de los mercados campesinos:

        .row.align-items-center.m-0.mb-5
          .col-xl
            .row.align-items-center.style___box_11(data-aos="zoom-in")
              .col-auto
                figure.d-none.d-xl-block(data-aos="fade-right")
                  img(src="@/assets/curso/temas/img34.png" style="max-width: 220px").m-auto
              .col
                h4.mb-4 Lo invitamos a escuchar el siguiente <em>Podcast</em>:
                TarjetaAudio.color-acento-contenido.mb-3(
                  texto="Análisis del entorno local"
                  :audio="require('@/assets/componentes/audios/Podcast01_CF03_Modulo_3_Economia_campesina_Tecnico_Derecho_campesinos.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
          .col-xl-auto
            figure(data-aos="fade-left").d-none.d-xl-block
              img(src="@/assets/curso/temas/img35.png" style="max-width: 400px").m-auto
        
        p.mb-5 <strong>Ejemplo concreto</strong>. En la vereda La Esperanza, durante la construcción de una carretera, el acceso al mercado estuvo restringido por seis meses. Para no perder a sus clientes, los campesinos organizaron entregas a domicilio en motos y bicicletas cada domingo. Esta solución creativa les permitió mantener las ventas hasta que se normalizó el acceso.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img8.svg" style="max-width: 50px").m-auto
          .col
            h3 Competencia y aliados en la comunidad

        p.mb-5 En un mercado campesino, no se trabaja en solitario. Existen otros productores, comerciantes, asociaciones e instituciones que pueden representar competencia o, mejor aún, convertirse en aliados. Identificar a cada uno y comprender su rol en el mercado es fundamental para fortalecer nuestra participación y construir estrategias de cooperación.

    .row.mb-5
      .col-xl-6(data-aos="zoom-in")
        .style___box_12.h-100
          h4.mb-3 Competencia
          p.mb-4 Son quienes ofrecen productos o servicios similares. En vez de verlos como amenaza, pueden motivarnos a mejorar.
          h4.mb-3 Ejemplos:
          <ul class="fa-ul mb-4 estilo___ul_1">
            <li class="mb-1"><span class="fa-li"><i class="fas fa-leaf"></i></span>Otro productor que también vende tomates y cilantro.</li>
            <li class="mb-1"><span class="fa-li"><i class="fas fa-leaf"></i></span>Una familia que elabora bocadillos de guayaba igual que uno mismo.</li>
            <li class="mb-0"><span class="fa-li"><i class="fas fa-leaf"></i></span>Una tienda local que vende frutas traídas de otra región.</li>
          </ul>
          h4.mb-3 Estrategias útiles:
          <ul class="fa-ul mb-0 estilo___ul_1">
            <li class="mb-1"><span class="fa-li"><i class="fas fa-leaf"></i></span>Observar qué productos venden para buscar diferenciación.</li>
            <li class="mb-1"><span class="fa-li"><i class="fas fa-leaf"></i></span>Aprender de sus formas de presentación.</li>
            <li class="mb-0"><span class="fa-li"><i class="fas fa-leaf"></i></span>Ajustar precios de forma competitiva sin afectar la rentabilidad.</li>
          </ul>
      .col-xl-6(data-aos="zoom-in").espacio___movil_3
        .style___box_12.h-100.ajuste___color
          h4.mb-3 Aliados
          p.mb-4 Personas o instituciones que ayudan a fortalecer el emprendimiento.
          h4.mb-3 Ejemplos:
          <ul class="fa-ul mb-4 estilo___ul_1">
            <li class="mb-1"><span class="fa-li"><i class="fas fa-leaf"></i></span><strong>Productores complementarios</strong>: unir ofertas para armar combos, como el caso del “combo para sancocho” entre quien vende papas y quien vende zanahorias.</li>
            <li class="mb-1"><span class="fa-li"><i class="fas fa-leaf"></i></span><strong>Asociaciones campesinas</strong>: permiten mejorar la negociación, acceder a ferias y capacitaciones.</li>
            <li class="mb-1"><span class="fa-li"><i class="fas fa-leaf"></i></span><strong>Instituciones locales</strong>: alcaldías, juntas de acción comunal, iglesias o fundaciones que promueven el consumo local.</li>
            <li class="mb-0"><span class="fa-li"><i class="fas fa-leaf"></i></span><strong>Clientes fieles</strong>: pueden recomendar el puesto a otros vecinos.</li>
          </ul>
          p.mb-0 <strong>Ejemplo exitoso</strong>: En San Antonio, varios productores se unieron bajo una sola carpa en la feria dominical. Ofrecieron más variedad, redujeron costos de transporte y fortalecieron su imagen comunitaria.
    
    .fondo___color
      .px-5
        h4.mb-5 Claves para construir buenas alianzas:

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center.m-0
              .col-xl-auto(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img36.png', alt='' style="max-width: 400px").m-auto
              .col-xl.style___box_10.ajuste___espacio_1(data-aos="fade-left")
                <ul class="fa-ul mb-0 estilo___ul_1">
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span>Mantener una comunicación abierta y respetuosa.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span>Cumplir acuerdos con honestidad.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-leaf"></i></span>Buscar beneficios compartidos, no solo individuales.</li>
                </ul>
        
        p.mb-5 Además, conocer bien a los actores del mercado permite planificar con inteligencia. Por ejemplo, si varios vendedores ofrecen panela, se puede optar por <strong>diferenciarse</strong>: panela orgánica, saborizada con jengibre o empaques pequeños ideales para turistas. Una comunidad campesina fuerte no compite para dividir, sino para mejorar. Reconocer y gestionar bien tanto la competencia como las alianzas es sembrar en terreno fértil para un crecimiento colectivo.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img8.svg" style="max-width: 50px").m-auto
          .col
            h3 Cómo aprovechar las ferias y mercados locales

        p.mb-5 Las ferias y mercados locales representan verdaderas ventanas de oportunidad para el productor campesino. No se trata simplemente de asistir para vender, sino de participar de forma activa, preparada y estratégica. Esto puede marcar una gran diferencia en las ventas, en la visibilidad del emprendimiento y en el fortalecimiento de los lazos con la comunidad.
    
    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Planificar la participación").ajuste-cajaAcordion
              p.mb-3 No basta con presentarse el día de la feria. Se debe preparar con anticipación lo que se llevará, asegurando variedad, frescura y buena presentación. 
              p.mb-3 <strong>Ejemplo</strong>. Don Ramiro, productor de miel, aprovecha las ferias agrícolas preparando frascos pequeños, medianos y grandes. Así, quienes quieren solo probar, y quienes desean abastecerse, tienen opciones.
            .row(titulo="Presentación del producto").ajuste-cajaAcordion
              p.mb-3 Un producto bien presentado se vende mejor. En un mercado donde muchos venden tomates, ¿qué hace que los suyos destaquen? Tal vez un empaque bonito, una caja limpia, o un cartel que indique que son tomates criados sin químicos.
              p.mb-5 <strong>Sugerencias útiles</strong>: - Limpiar y clasificar bien los productos. - Usar manteles coloridos y rústicos. - Tener precios visibles y claros.
            .row(titulo="Atención al cliente").ajuste-cajaAcordion
              p.mb-3 La feria es también una oportunidad para construir confianza con los compradores. Un saludo cálido, una breve explicación sobre cómo se produce el alimento o una muestra gratis pueden marcar la diferencia.
              p.mb-5 <strong>Ejemplo</strong>. En la feria de San José, doña Elvia ofrece pequeñas degustaciones de su queso campesino a quien pasa frente a su mesa, lo que impulsa las ventas.
            .row(titulo="Ofertas especiales y promociones").ajuste-cajaAcordion
              p.mb-3  Pequeñas estrategias de venta pueden incrementar notablemente el interés del público.
              p.mb-5 <strong>Ejemplo</strong>. - Ofrecer descuentos por compras en cantidad ("Lleve dos canastas de fresas y pague una rebaja especial"). - Hacer combos ("Combo para ensalada: lechuga + tomate + cebolla a precio reducido"). - Armar kits de regalo en fechas especiales como Día de la Madre o fiestas patronales.
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img37.png", alt="" style="width: 382px").m-auto
    
    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img38.png", alt="" style="width: 382px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Aprovechar el flujo de personas").ajuste-cajaAcordion
              p.mb-3  No todas las personas compran en el momento, pero muchas se interesan en el producto. Es importante dejarles una forma de contacto.
              p.mb-3 <strong>Sugerencias</strong>. - Entregar tarjetas sencillas hechas a mano con el nombre del productor, los productos que ofrece y un número de contacto. - Anotar a clientes interesados para futuras entregas a domicilio o pedidos especiales.
            .row(titulo="Observar y aprender").ajuste-cajaAcordion
              p.mb-3  Cada feria enseña algo nuevo. Observar qué productos se venden más, qué tipo de compradores asisten y cómo organizan sus puestos otros vendedores permite mejorar constantemente. Esto también ayuda a anticipar tendencias de consumo y adaptarse a las preferencias del público. 
            .row(titulo="Mostrar identidad y origen").ajuste-cajaAcordion
              p.mb-3 Contar la historia del producto y del productor genera una conexión especial con los compradores.
              p.mb-4 <strong>Ejemplo</strong>. La familia Gómez, de la vereda La Ilusión, participó en la feria municipal llevando arepas de maíz pelao y una cartelera donde narraban la historia de su finca y cómo elaboraban sus productos de forma tradicional. Esto atrajo a muchos visitantes que luego quisieron conocerlos directamente.

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl.style___box_9.ajuste___espacio(data-aos="fade-right")
            p.mb-4 En conclusión, las ferias y mercados locales no son solo lugares para hacer transacciones económicas. También son espacios clave para:
            <ul class="fa-ul mb-0 estilo___ul_1">
              <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span>Conectar con nuevos clientes.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span>Posicionar productos en la mente del consumidor.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf"></i></span>Aprender sobre el comportamiento del mercado y las tendencias.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-leaf"></i></span>Reforzar el orgullo por la identidad campesina.</li>
            </ul>
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img39.png', alt='' style="max-width: 400px").m-auto
    
    p.mb-0 Aprovechar estos espacios con preparación y conciencia es sembrar relaciones duraderas, confianza y mejores ingresos para el futuro.
  
    <!-- BLOQUE 4 -->
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Circuitos alimentarios de proximidad, mercados territoriales y abastecimiento

    p.mb-5 Estos tres conceptos son fundamentales para fortalecer los sistemas alimentarios locales, promover la economía campesina y garantizar el acceso a alimentos sanos, frescos y culturalmente apropiados. A continuación se presentan sus características principales:

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Circuitos alimentarios de proximidad
                p.mb-3 Son formas de comercialización donde los alimentos llegan directamente del productor al consumidor, con pocos o ningún intermediario. Se basan en la cercanía geográfica, la confianza mutua y la venta directa.
                p.mb-3 <strong>Ventajas</strong>: precios justos, productos frescos, menor huella ambiental, mayor trazabilidad.
                p.mb-0 <strong>Ejemplo</strong>. En la vereda El Encuentro, un grupo de mujeres creó un sistema de entrega de canastas campesinas cada sábado, duplicando sus ingresos al eliminar intermediarios.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img40.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Mercados territoriales
                p.mb-3 Son espacios que integran economía, cultura y tejido social. Van más allá de la transacción comercial y promueven relaciones solidarias, identidad cultural y desarrollo endógeno del territorio.
                p.mb-3  <strong>Características</strong>: soberanía alimentaria, diversidad cultural, pedagogía comunitaria, reconocimiento del trabajo
                p.mb-0 <strong>Ejemplo</strong>. En San Andrés, el mercado territorial incluye venta de productos, talleres de cocina tradicional, música campesina y exposiciones artesanales.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img41.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Abastecimiento local
                p.mb-3  Estrategia para garantizar el acceso estable y digno a alimentos frescos en la comunidad. Implica coordinación entre la producción campesina y las necesidades locales mediante planificación participativa.
                p.mb-3  <strong>Formas de implementación</strong>: compras públicas, redes comunitarias de distribución, sistemas de canastas campesinas.
                p.mb-0 <strong>Ejemplo</strong>. En Pasto, el programa “Compra Local” abastece comedores escolares directamente desde productores rurales, promoviendo economía solidaria.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img42.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
