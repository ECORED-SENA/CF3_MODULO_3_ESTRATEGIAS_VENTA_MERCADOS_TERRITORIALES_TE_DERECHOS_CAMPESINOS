<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Estrategias de venta y atención en mercados campesinos territoriales',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar los conceptos clave sobre la organización de la oferta, la atención al cliente y las estrategias de promoción en mercados campesinos territoriales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué caracteriza a un mercado territorial campesino?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comercializa productos industriales de la ciudad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promueve productos locales con prácticas sostenibles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Permite la venta exclusiva a intermediarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Requiere licencias internacionales de exportación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es uno de los beneficios del mercado campesino para la comunidad?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facilita la importación de bienes agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fomenta el consumo de productos extranjeros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fortalece la economía local eliminando intermediarios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Obliga a los productores a vender en supermercados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de productos se encuentran comúnmente en un mercado campesino?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Electrodomésticos y tecnología.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verduras frescas, artesanías y alimentos transformados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Artículos de lujo importados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vehículos y maquinaria pesada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Por qué es importante conocer el perfil del cliente rural?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para adaptar la oferta a sus necesidades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para vender productos internacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para limitar la variedad de productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para imponer precios altos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué factor puede afectar la producción y venta en mercados rurales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Condiciones climáticas adversas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Publicidad en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aprobación de leyes internacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducción del turismo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué estrategia ayuda a planear la producción en el mercado campesino?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la variedad de productos ofrecidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Imitar a los supermercados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar observaciones sobre preferencias del cliente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exportar todos los productos posibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué se entiende por valor agregado en un producto campesino?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar su precio sin cambios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejorar su presentación o utilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incluirlo en campañas políticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Venderlo en tiendas extranjeras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué herramienta de promoción es común y económica en zonas rurales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicidad en televisión nacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Carteles, volantes y voz a voz.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Anuncios pagados en internet',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Campañas de call center.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué tipo de alianza puede fortalecer un mercado campesino?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Con bancos internacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Con otras organizaciones o instituciones locales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Con compañías de seguros urbanas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Con partidos políticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué actitud se debe tener frente a un cliente insatisfecho?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorarlo hasta que se calme.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Escucharlo y ofrecer soluciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Discutir y defender el producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Negarse a venderle de nuevo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La atención cordial al cliente es clave en el mercado campesino.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La diversificación de productos ayuda a atraer más compradores.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'El uso de redes sociales no es útil en zonas rurales.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Un producto bien presentado puede aumentar su valor percibido.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Las ferias campesinas no tienen impacto en la economía local.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
