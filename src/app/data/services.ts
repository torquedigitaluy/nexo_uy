import { localImages } from './images';

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  detailImage?: string;
  contact: {
    phone: string;
    whatsapp: string;
    email?: string;
    facebook?: string;
    instagram?: string;
    website?: string;
  };
}

export const services: Service[] = [
  {
    id: 'traslados',
    name: 'LIR Traslados',
    category: 'Traslados',
    description: 'Tu viaje seguro y confortable',
    fullDescription: `Servicio profesional de traslados para pasajeros. Vehículos modernos, conductores experimentados y atención personalizada para que llegues a tu destino con total comodidad y seguridad.

Nuestros Servicios:

• Traslados al Aeropuerto
Servicio puerta a puerta, seguimiento de vuelos y asistencia con equipaje.

• Disponibilidad 24/7
Estamos disponibles las 24 horas, todos los días del año para atenderte.

• Servicio Premium
Vehículos modernos y cómodos con aire acondicionado y WiFi.

Contamos con una minivan Hyundai H1 con capacidad para 11 personas y aire acondicionado, perfecta para grupos, familias o viajes corporativos.`,
    image: localImages.lirTrasladosLogo,
    contact: {
      phone: '+598 99 158 798',
      whatsapp: '59899158798',
      facebook: 'https://www.facebook.com/profile.php?id=61587185623745',
      instagram: '@lirtraslados'
    }
  },
  {
    id: 'inmobiliaria',
    name: 'Ronnie Guigou - Agente Inmobiliario',
    category: 'Inmobiliaria',
    description: 'Agente inmobiliario especializado en venta de apartamentos en Montevideo',
    fullDescription: `Sobre mí

Soy Ronnie Guigou, agente inmobiliario en Montevideo, enfocado en la venta de apartamentos en zonas como Pocitos, Cordón y Centro.

Trabajo en el mercado inmobiliario formando parte de REMAX, y mi enfoque no está en simplemente publicar propiedades, sino en ayudar a propietarios a tomar decisiones correctas desde el inicio.

A lo largo del tiempo, fui viendo un patrón claro: muchas propiedades no se venden no por falta de demanda, sino por cómo se posicionan en el mercado.

Precio mal definido, falta de estrategia o una presentación poco trabajada suelen ser los factores que hacen que una propiedad quede estancada.

Por eso mi trabajo se centra en tres puntos clave:

– Definir un precio alineado al mercado
– Lograr una presentación que genere interés real
– Aplicar una estrategia de comercialización clara

Porque en este negocio, publicar no alcanza.

Lo que marca la diferencia es cómo sale una propiedad a competir desde el primer día.

Este espacio lo uso para compartir análisis y contenido sobre el mercado inmobiliario en Montevideo, con foco en propietarios que quieren vender con criterio.

Si estás pensando en vender y querés entender cómo está posicionada tu propiedad hoy en el mercado, puedo darte una opinión concreta antes de que tomes una decisión.`,
    image: localImages.ronniePhoto,
    contact: {
      phone: '+598 98 272 429',
      whatsapp: '59898272429',
      facebook: 'ronnieguigouagenteinmobiliario',
      instagram: '@ronnieguigou',
      website: 'https://rguigou.remax.com.uy/'
    }
  },
  {
    id: 'security-market',
    name: 'Security Market',
    category: 'Seguridad Electrónica',
    description: 'Soluciones en seguridad, inspirando confianza',
    fullDescription: `Brindamos soluciones de CCTV, IT, intrusión, sistemas contra incendio, control de acceso y telecomunicaciones.

Somos importadores mayoristas y asesores en Seguridad Electrónica con 26 años de experiencia en el mercado, lo que nos ha consolidado como líderes en el rubro. Con locales en Montevideo, Maldonado y Salto, distribuimos nuestros productos en todo el país.

Nuestro compromiso se centra en ofrecer productos de alta calidad y en proporcionar capacitación y soporte personalizado a nuestros clientes. Desde nuestra fundación, nos hemos dedicado a fortalecer nuestros conocimientos y hemos reunido a un equipo humano excepcional, siempre comprometido con la honestidad, la responsabilidad y la profesionalidad en cada proyecto.

Nos especializamos en la comercialización de productos dirigidos a profesionales y empresas, contando con una extensa red de integradores que recomendamos según las características y la ubicación geográfica del proyecto. Además, ofrecemos el mejor servicio técnico tanto pre como posventa en el mercado.

La experiencia en seguridad nos ha validado para proyectar, asesorar y apoyar en la realización de importantes proyectos de renombre a nivel nacional, trabajando con clientes como: ANTEL, Santander, Presidencia de la República, AGESIC, Instituto Nacional de Rehabilitación, INAU, Fuerza Aérea Uruguaya, Municipio de Montevideo, Tienda Inglesa, Plaza Italia, SODIMAC, Distrito M, eNJoy, Claro, Riogas, UCU y muchos más.

Nuestras Sucursales:

📍 MONTEVIDEO
Dámaso A. Larrañaga 3536
Tel: 2509 3000

📍 MALDONADO
Avda. Martiniano Chiossi, local 27 - Portón de San Fernando
Tel: 4224 0095

📍 SALTO
Brasil 1202 esq. Invernizzi (Edificio el Mirador)
Tel: 4732 5238`,
    image: localImages.securityMarketLogo,
    contact: {
      phone: '2509 3000',
      whatsapp: '',
      facebook: 'https://www.facebook.com/smarketuruguay',
      instagram: '@securitymarket.uy',
      website: 'https://www.smarket.com.uy/'
    }
  },
  {
    id: 'dls-construcciones',
    name: 'DLS Construcciones',
    category: 'Construcción, Electricidad y Sanitaria',
    description: 'Soluciones integrales para tu hogar o empresa',
    fullDescription: `Somos una empresa con amplia trayectoria en el mercado, especializada en servicios de construcción, electricidad y sanitaria.

Nuestros Servicios:

🏗️ Construcción
Realizamos todo tipo de obras: construcciones nuevas, refacciones, ampliaciones, reformas y mantenimiento general. Trabajamos con materiales de primera calidad y mano de obra altamente calificada.

⚡ Electricidad
Instalaciones eléctricas completas, reparaciones, actualización de sistemas eléctricos, iluminación, tableros y protecciones. Cumplimos con todas las normativas de seguridad vigentes.

🚰 Sanitaria
Instalación y reparación de sistemas de agua fría y caliente, desagües, cloacas, gas y climatización. Soluciones rápidas y efectivas para tu hogar o empresa.

Con años de experiencia en el rubro, nos comprometemos a entregar trabajos de calidad, cumpliendo con los plazos establecidos y brindando garantía en todos nuestros servicios.

Contamos con un equipo de profesionales capacitados que te asesorarán en cada etapa del proyecto, desde el presupuesto hasta la entrega final.

Trabajamos en Montevideo y zona metropolitana.`,
    image: localImages.dlsLogo,
    contact: {
      phone: '+598 91 920 136',
      whatsapp: '59891920136',
      facebook: '',
      instagram: '@dls_construcciones_'
    }
  },
  {
    id: 'antonio-barna',
    name: 'Antonio Barna - Carpintero',
    category: 'Carpintería y Muebles a Medida',
    description: 'Muebles a medida con más de 25 años de experiencia',
    fullDescription: `Soy Antonio Barna, carpintero con más de 25 años de experiencia en el rubro y más de 10 años dedicado de forma exclusiva a la fabricación de muebles a medida.

Nos especializamos en mobiliario de cocina, placares, muebles para dormitorios y trabajos en madera y MDF laminado de alta calidad, combinando diseño, funcionalidad y terminaciones cuidadas en cada proyecto.

Además de fabricar e instalar, también realizamos restauraciones y reparaciones en todo tipo de mobiliario de madera.

Trabajamos de forma personalizada desde el primer contacto:

✔️ Nos reunimos contigo para entender exactamente lo que buscas
✔️ Tomamos medidas precisas en el espacio
✔️ Asesoramos en materiales, diseño y distribución
✔️ Presentamos una cotización clara con tiempos definidos
✔️ Fabricamos cada mueble de manera artesanal y a medida

Nuestro objetivo es crear muebles duraderos, funcionales y hechos para aprovechar cada espacio de tu hogar.`,
    image: localImages.antonioBarnaLogo,
    contact: {
      phone: '+598 94 702 267',
      whatsapp: '59894702267',
      facebook: '',
      instagram: '@maderashierrosymas'
    }
  },
  {
    id: 'quiroga-automoviles',
    name: 'Quiroga Automóviles',
    category: 'Compra-Venta de Vehículos',
    description: 'Compra y venta de vehículos usados y 0km',
    fullDescription: `Quiroga Automóviles es tu concesionaria de confianza para la compra y venta de vehículos usados y 0km en Montevideo y Canelones.

Con amplia experiencia en el mercado automotor, ofrecemos un servicio integral que incluye ventas, permutas y financiación adaptada a tus necesidades.

🚗 Nuestros Servicios:

• Venta de vehículos 0km y usados seleccionados
• Permutas: recibimos tu vehículo usado en parte de pago
• Financiación: planes accesibles con las mejores condiciones
• Asesoramiento personalizado en la elección de tu vehículo
• Gestión de documentación y transferencias

Contamos con un amplio stock de vehículos de diversas marcas y modelos, todos revisados y en óptimas condiciones.

📍 Nuestras Sucursales:

• Zonamerica - Montevideo
Ruta 8 km 19

• San Luis - Canelones
Interbalnearia km 63

Visitanos en cualquiera de nuestras sucursales o consultanos por WhatsApp para conocer nuestro stock actualizado y las mejores opciones de financiación.`,
    image: localImages.quirogaLogo,
    contact: {
      phone: '+598 92 852 725',
      whatsapp: '59892852725',
      facebook: '',
      instagram: '@quirogautomoviles'
    }
  },
  {
    id: 'torque-digital',
    name: 'Torque Digital',
    category: 'Desarrollo Web y Marketing Digital',
    description: 'Soluciones digitales integrales para tu negocio',
    fullDescription: `Torque Digital es tu partner en transformación digital, ofreciendo soluciones completas para llevar tu negocio al siguiente nivel.

Nuestros Servicios:

💻 Desarrollo Web
Creamos sitios web profesionales, responsive y optimizados para conversión. Desde páginas corporativas hasta plataformas complejas, desarrollamos tu presencia digital con las últimas tecnologías.

🛒 Ecommerce & Shopify
Especialistas en tiendas online y soluciones Shopify. Diseñamos y desarrollamos tu tienda virtual para que vendas más, con integraciones de pago, gestión de inventario y experiencia de usuario optimizada.

📈 Marketing Digital
Estrategias de marketing digital efectivas para hacer crecer tu negocio. SEO, redes sociales, publicidad digital y analítica para maximizar tu presencia online y generar resultados reales.

⚙️ Automatizaciones
Optimizamos procesos y automatizamos tareas repetitivas para que tu negocio sea más eficiente. Integraciones entre plataformas, flujos de trabajo automatizados y soluciones personalizadas.

🛠️ Consultoría y Soporte Técnico
Asesoramiento profesional en tecnología y soporte continuo para que tu proyecto digital esté siempre funcionando al máximo rendimiento.

Trabajamos con empresas y emprendedores en Montevideo y todo Uruguay, brindando soluciones digitales que generan resultados medibles.`,
    image: localImages.torqueLogo,
    contact: {
      phone: '',
      whatsapp: '',
      facebook: '',
      instagram: '@torquedigitaluy'
    }
  },
  {
    id: 'cerrajeria-fabian',
    name: 'Cerrajería Fabián',
    category: 'Cerrajería',
    description: 'Soluciones rápidas con la seriedad que te da tranquilidad',
    fullDescription: `En Cerrajería Fabián cuidamos lo que más te importa. Soluciones rápidas con la seriedad que te da tranquilidad.

¿Te quedaste afuera? No desesperes, estamos para ayudarte.

Sabemos que los imprevistos con las cerraduras ocurren en el momento menos pensado. Ya sea que las llaves quedaron adentro de casa, perdiste el acceso a tu vehículo o necesitás reforzar la seguridad de tu hogar, necesitás a un profesional que responda rápido, trabaje con la máxima calidad y, sobre todo, sea de total confianza.

En Cerrajería Fabián nos especializamos en brindar un servicio eficiente, transparente y sin sorpresas. Nos avala el compromiso con el buen trato y la satisfacción de cada cliente.

Nuestros Servicios Profesionales

Ofrecemos soluciones integrales de cerrajería residencial, automotriz y comercial:

🔓 Apertura de Casas y Autos
Llegamos rápido para solucionar tu urgencia sin dañar tus puertas ni cerraduras.

🔑 Cambios de Combinación
Ideales si te mudaste, perdiste tus llaves o querés renovar la seguridad de tu propiedad de forma inmediata.

⚖️ Lanzamientos Judiciales
Brindamos la asistencia formal y técnica necesaria para procedimientos legales, garantizando puntualidad y discreción.

💰 Presupuestos SIN CARGO
Evaluamos tu problema y te damos una cotización transparente antes de empezar a trabajar. ¡Sin costos ocultos!

¿Por qué elegir a Cerrajería Fabián?

📞 Atención Inmediata: Tu urgencia es nuestra prioridad. Respondemos a tu llamado sin vueltas.

🛠️ Calidad Garantizada: Trabajamos con materiales de primera línea y técnicas que cuidan tu propiedad.

🔒 Confianza y Honestidad: Un servicio profesional respaldado por la tranquilidad de saber a quién estás dejando entrar a tu hogar.`,
    image: localImages.cerrajeriaFabianLogo,
    contact: {
      phone: '+598 95 550 276',
      whatsapp: '59895550276',
      facebook: '',
      instagram: ''
    }
  },
  {
    id: 'roverano-despachante',
    name: 'Diego Roverano - Despachante de Aduanas',
    category: 'Despacho de Aduana y Comercio Exterior',
    description: 'Asesoramiento integral en comercio exterior e importaciones y exportaciones',
    fullDescription: `Somos una empresa con amplia experiencia en despacho de aduanas y comercio exterior. Brindamos asesoramiento integral y soluciones personalizadas para importaciones, exportaciones, tránsitos, admisiones temporarias y operaciones en zonas francas.

Además, gestionamos trámites ante organismos oficiales como MGAP, DGI y MIEM, ofreciendo un servicio ágil, confiable y competitivo desde nuestra oficina en Ciudad Vieja, Montevideo.

Nuestros pilares:

🌐 Experiencia en Comercio Exterior
Años de trayectoria en operaciones de importación y exportación con un equipo altamente capacitado.

🛡️ Seguridad y Confianza
Gestionamos cada operación con rigor profesional, cumpliendo todas las normativas aduaneras vigentes.

⏱️ Agilidad en Cada Operación
Optimizamos los tiempos de despacho para que tu mercadería llegue cuando la necesitás.

📍 Edificio Zeinal, Rambla 25 de Agosto de 1825 318, Entrepiso 101 — Ciudad Vieja, Montevideo`,
    image: localImages.roveranoLogo,
    detailImage: localImages.roveranoFlyer,
    contact: {
      phone: '095 017 281',
      whatsapp: '59895017281',
      email: 'diego@droverano.com',
      website: 'https://www.droverano.com'
    }
  },
  {
    id: 'cortinas-sur',
    name: 'Cortinas Sur',
    category: 'Cortinas de Enrollar',
    description: 'Soluciones integrales en cortinas de enrollar',
    fullDescription: `En Cortinas Sur nos especializamos en la venta, instalación y reparación de cortinas de enrollar. Ofrecemos presupuestos sin costo y soluciones adaptadas a cada necesidad.

Casas y Comercios: Reparamos tus cortinas actuales o adaptamos sistemas nuevos a medida, mejorando la seguridad y estética de cualquier espacio.

Innovación en Domótica: Automatizamos tus cortinas para que experimentes el confort de la apertura y cierre a distancia desde tu celular o control remoto.

Aliado Inmobiliario: Atendemos de forma inmediata las propiedades que administras, solucionando los problemas de mantenimiento de tus inquilinos rápido y efectivo.`,
    image: localImages.cortinasSurLogo,
    contact: {
      phone: '093 979 663',
      whatsapp: '59893979663',
    }
  },
  {
    id: 'steffani-sastre',
    name: 'Steffani Sastre - Escribana Pública',
    category: 'Escribanía',
    description: 'Asesoramiento jurídico y notarial con seguridad, confianza y profesionalismo',
    fullDescription: `Soy Steffani Sastre, Escribana Pública, dedicada a brindar asesoramiento jurídico y notarial a personas, familias y empresas, acompañándolas en la toma de decisiones con seguridad jurídica, confianza y profesionalismo.

En nuestro estudio, trabajamos con compromiso, celeridad y un enfoque personalizado, entendiendo que detrás de cada trámite existe un proyecto, una inversión o una necesidad particular.

Porque actuar correctamente desde el principio, marca la diferencia.

Servicios que brindamos:

🏠 Inmuebles
Compraventas, promesas, cesiones, donaciones, hipotecas, permutas y demás negocios jurídicos vinculados a bienes inmuebles.

🚗 Automotores
Compraventa de vehículos, leasing, prendas, transferencias, certificaciones y trámites registrales.

📋 Poderes y Mandatos
Redacción y formalización de poderes y mandatos adaptados a cada necesidad.

💼 Separación de Bienes
Asesoramiento y redacción de acuerdos patrimoniales con soluciones personalizadas.

🏢 Sociedades Comerciales
Especializados en la constitución de sociedades comerciales como SAS, SRL y SA, así como Asociaciones Civiles y Fundaciones.

📜 Sucesiones y Testamentos
Trámites sucesorios y planificación testamentaria con eficiencia, seguridad jurídica y acompañamiento profesional.

Sabemos que detrás de cada trámite hay personas y proyectos importantes. Por eso, trabajamos para brindar la confianza y seguridad que cada cliente se merece, a sabiendas de que la confianza se construye con profesionalismo, transparencia y compromiso.`,
    image: localImages.steffaniLogo,
    detailImage: localImages.steffaniPhoto,
    contact: {
      phone: '092 558 857',
      whatsapp: '59892558857',
      email: 'steffanisastre@estudioss.org',
      facebook: '',
      instagram: ''
    }
  }
];
