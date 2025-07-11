export default {
  global: {
    Name: 'Estrategias de venta en mercados campesinos territoriales',
    Description:
      'Este módulo se enfoca en estrategias de venta en mercados campesinos. Aborda la caracterización del mercado rural, el diseño de la oferta, estrategias de promoción, atención al cliente y satisfacción. Destaca la importancia del conocimiento del entorno, la comunicación efectiva y la innovación, todo con el fin de fortalecer la economía campesina.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Caracterización del mercado territorial campesino',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Qué es un mercado territorial campesino?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Perfil de los clientes rurales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Análisis del entorno local',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Circuitos alimentarios de proximidad, mercados territoriales y abastecimiento',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Diseño de la oferta de productos y servicios en el mercado campesino',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Planeación de la oferta',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Valor agregado de nuestros productos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diversificación de la oferta',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Estrategias de promoción y divulgación en el mercado campesino',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Herramientas sencillas de promoción',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Eventos comunitarios y alianzas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Comunicación efectiva',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Elementos clave en la atención al cliente rural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Conceptos básicos de atención al cliente',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Satisfacción del cliente y mejora continua en el mercado campesino',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Caracterización del mercado territorial campesino',
      referencia:
        'Colombia Sí es Solidaria. (). Así funcionan los mercados campesinos. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=DcRMpi4CibA&ab_channel=ColombiaS%C3%ADesSolidaria',
    },
    {
      tema:
        'Diseño de la oferta de productos y servicios en el mercado campesino',
      referencia:
        'TvAgro. (2025). Gran Mercado Campesino: FAO Apoya Comercialización Directa - TvAgro por Juan Gonzalo Angel. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qlpZE_ZGyE0&ab_channel=TvAgro',
    },
    {
      tema: 'Estrategias de promoción y divulgación en el mercado campesino',
      referencia:
        'Pachón-Romero, Jenny Paola, & Pachón-Ariza, Fabio Alberto. (2020). Mercados campesinos, ¿estrategia de implementación de la soberanía alimentaria?: Caso Sibaté (Cundinamarca). Revista de Investigación, Desarrollo e Innovación, 11(1), 35-48.',
      tipo: 'Artículo',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S2027-83062020000200035',
    },
    {
      tema: 'Elementos clave en la atención al cliente rural',
      referencia:
        'Madrid, M. (2020). Mercados campesinos: propuestas colectivas para retos comunes.',
      tipo: 'Sitio web',
      link:
        'https://www.dejusticia.org/mercados-campesinos-propuestas-colectivas-para-retos-comunes/',
    },
  ],
  glosario: [
    {
      termino: 'Alianza',
      significado:
        'acuerdo voluntario entre personas u organizaciones para trabajar juntas con el fin de alcanzar un beneficio común.',
    },
    {
      termino: 'Diversificación',
      significado:
        'estrategia que consiste en ofrecer varios productos o servicios para atraer a diferentes tipos de clientes y reducir riesgos económicos.',
    },
    {
      termino: 'Mercado territorial campesino',
      significado:
        'espacio donde los productores rurales venden directamente sus productos, promoviendo la cultura, sostenibilidad y economía local.',
    },
    {
      termino: 'Oferta',
      significado:
        'conjunto de productos y servicios que un productor pone a disposición del mercado para satisfacer las necesidades de los clientes.',
    },
    {
      termino: 'Planeación de la oferta',
      significado:
        'proceso de organizar qué productos o servicios se van a ofrecer, cuándo y en qué cantidades, basándose en la demanda del mercado y los recursos disponibles.',
    },
    {
      termino: 'Promoción',
      significado:
        'acciones encaminadas a dar a conocer los productos o servicios a potenciales compradores para aumentar su visibilidad y ventas.',
    },
    {
      termino: 'Satisfacción del cliente',
      significado:
        'grado en que un producto o servicio cumple o supera las expectativas del comprador, generando confianza y fidelidad.',
    },
    {
      termino: 'Servicios adicionales',
      significado:
        'actividades complementarias a la venta de productos, como entregas a domicilio o asesorías, que aumentan el valor ofrecido al cliente.',
    },
    {
      termino: 'Valor agregado',
      significado:
        'mejoras en presentación, calidad o transformación de un producto que lo hacen más atractivo y valioso para el cliente.',
    },
    {
      termino: 'Voz a voz',
      significado:
        'método de promoción basado en recomendaciones personales de los clientes satisfechos, muy efectivo en comunidades rurales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Azevedo da Silva, C. (2009). La configuración de los circuitos “de proximidad” en el sistema alimentario: tendencias evolutivas. Documents d’Anàlisi Geogràfica, 54, 11–32.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=3093071',
    },
    {
      referencia:
        'FAO Colombia. (2018). Estudio: Sistemas de abastecimiento agroalimentario en la subregión Alto Putumayo.',
      link:
        'https://www.fao.org.co/PublicacionesFAOCO/AP4/Estudios%20Abastecimiento%20Agroalimentarios/PUTUMATO_ALTO.pdf',
    },
    {
      referencia:
        'Food and Agriculture Organization (FAO). (2018). Sistemas territoriales de abastecimiento alimentario: propuesta metodológica. CGIAR.',
      link:
        'https://openknowledge.fao.org/server/api/core/bitstreams/c54dd65e-af5d-47fc-9d10-7ad25919d058/content',
    },
    {
      referencia:
        'Martínez Salvador, Laura, Hernández, Loarry Gabriel, & Alvarado Ramírez, David. (2021). Cadenas Cortas de Comercialización y seguridad alimentaria: el caso de El mercado el 100. Problemas del desarrollo, 52(206), 197-220.',
      link:
        'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0301-70362021000300197',
    },
    {
      referencia:
        'Santacoloma, P., & FAO. (2016). Cadenas cortas agroalimentarias: elementos para una definición. Territorios Inteligentes - FAO.',
      link: '',
    },
    {
      referencia:
        'Téllez Silva, J. M., et al. (2024). Propuesta metodológica con enfoque territorial para analizar la participación social en programas de abastecimiento alimentario. Agroalimentaria, 20(38), 15 - 33.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=9563701',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
