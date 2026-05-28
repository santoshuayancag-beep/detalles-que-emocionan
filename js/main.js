const WHATSAPP_NUMBER = '51999999999';

const DEFAULT_MESSAGE =
  'Hola, vi la página de Detalles que emocionan y deseo información sobre una tarjeta personalizada.';

function abrirWhatsApp(message = DEFAULT_MESSAGE) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

const services = [
  {
    icon: '🕊️',
    title: 'Bautizo',
    description: 'Tarjetas delicadas y especiales para celebrar un bautizo familiar.'
  },
  {
    icon: '🙏',
    title: 'Misa',
    description: 'Diseños sobrios y emotivos para invitaciones o recordatorios religiosos.'
  },
  {
    icon: '💙💗',
    title: 'Revelación de sexo',
    description: 'Tarjetas tiernas y modernas para anunciar si será niño o niña.'
  },
  {
    icon: '👶',
    title: 'Baby shower',
    description: 'Diseños dulces y personalizados para celebrar la llegada del bebé.'
  },
  {
    icon: '🎂',
    title: 'Cumpleaños',
    description: 'Tarjetas alegres para niños, jóvenes y adultos con temática personalizada.'
  },
  {
    icon: '👑',
    title: 'Quinceañero',
    description: 'Diseños elegantes y juveniles para una celebración inolvidable.'
  },
  {
    icon: '💍',
    title: 'Matrimonio',
    description: 'Tarjetas románticas y elegantes para bodas o invitaciones digitales.'
  },
  {
    icon: '🎓',
    title: 'Graduaciones',
    description: 'Diseños para promociones, egresados, ceremonias y logros académicos.'
  }
];

const galleryItems = [
  {
    title: 'Bautizo',
    description: 'Diseño delicado para una celebración religiosa especial.',
    icon: '🕊️',
    image: 'img/tarjetas/bautizo.png'
  },
  {
    title: 'Misa',
    description: 'Tarjeta sobria para misa, recordatorio o invitación religiosa.',
    icon: '🙏',
    image: 'img/tarjetas/misa.png'
  },
  {
    title: 'Revelación de sexo',
    description: 'Diseño tierno en tonos rosado y celeste para revelar la noticia.',
    icon: '💙💗',
    image: 'img/tarjetas/revelacion.png'
  },
  {
    title: 'Baby shower',
    description: 'Tarjeta dulce para celebrar la próxima llegada del bebé.',
    icon: '👶',
    image: 'img/tarjetas/babyshower.png'
  },
  {
    title: 'Cumpleaños',
    description: 'Diseño alegre para cumpleaños infantiles, juveniles o adultos.',
    icon: '🎂',
    image: 'img/tarjetas/cumpleanos.png'
  },
  {
    title: 'Quinceañero',
    description: 'Tarjeta elegante y moderna para una fecha inolvidable.',
    icon: '👑',
    image: 'img/tarjetas/quinceanero.png'
  },
  {
    title: 'Matrimonio',
    description: 'Diseño romántico para invitación o felicitación de boda.',
    icon: '💍',
    image: 'img/tarjetas/matrimonio.png'
  },
  {
    title: 'Graduaciones',
    description: 'Tarjeta para celebrar logros, promociones y ceremonias.',
    icon: '🎓',
    image: 'img/tarjetas/graduacion.png'
  }
];

const prices = [
  {
    title: 'Plan Básico',
    price: 'S/ 35',
    featured: true,
    items: [
      'Diseño digital personalizado',
      'Nombre del homenajeado',
      'Frase breve o dedicatoria',
      'Colores según el evento',
      'Formato listo para WhatsApp'
    ],
    message:
      'Hola, vi la página de Detalles que emocionan y deseo solicitar el Plan Básico de S/ 35. Quisiera una tarjeta personalizada.'
  },
  {
    title: 'Plan Especial',
    price: 'S/ 45',
    featured: false,
    items: [
      'Diseño personalizado con más detalles',
      'Incluye una foto principal',
      'Datos del evento',
      'Frase o mensaje especial',
      'Ideal para invitaciones digitales'
    ],
    message:
      'Hola, vi la página de Detalles que emocionan y deseo solicitar el Plan Especial de S/ 45. Quisiera una tarjeta con foto y datos del evento.'
  },
  {
    title: 'Plan Premium',
    price: 'S/ 55',
    featured: false,
    items: [
      'Diseño más elaborado',
      'Temática especial del evento',
      'Puede incluir más de una imagen',
      'Mayor detalle visual',
      'Acabado moderno y elegante'
    ],
    message:
      'Hola, vi la página de Detalles que emocionan y deseo solicitar el Plan Premium de S/ 55. Quisiera un diseño más elaborado y personalizado.'
  },
  {
    title: 'Diseño a medida',
    price: 'Consultar',
    featured: false,
    items: [
      'Para pedidos especiales',
      'Eventos con más información',
      'Diseños con mayor personalización',
      'Ideal para matrimonios o quinceañeros',
      'Cotización por WhatsApp'
    ],
    message:
      'Hola, vi la página de Detalles que emocionan y deseo cotizar un diseño a medida para una tarjeta personalizada.'
  }
];

const frasesPorEvento = {
  'Cumpleaños': [
    'Que este nuevo año de vida esté lleno de alegría, sueños cumplidos y momentos inolvidables.',
    'Hoy celebramos tu vida con amor, gratitud y mucha felicidad.',
    'Que cada sonrisa de este día se convierta en un recuerdo hermoso para siempre.',
    'Que la alegría de este cumpleaños ilumine tu corazón y acompañe todos tus sueños.',
    'Hoy es un día especial porque celebramos a una persona única y muy querida.'
  ],
  'Bautizo': [
    'Que la luz de Dios acompañe siempre tu camino y llene tu vida de amor y bendiciones.',
    'Hoy recibes una bendición especial que quedará guardada para siempre en el corazón.',
    'Que este día marque el inicio de una vida llena de fe, amor y esperanza.',
    'Que Dios guíe tus pasos y te proteja con su infinito amor.',
    'Hoy celebramos con alegría este hermoso encuentro con la fe y la bendición de Dios.'
  ],
  'Misa': [
    'Con fe y amor, elevamos una oración especial para recordar este momento significativo.',
    'Que la paz de Dios acompañe a nuestra familia en este día de recogimiento y esperanza.',
    'Nos reunimos en oración para compartir un momento de fe, amor y unión familiar.',
    'Que esta misa sea un espacio de paz, gratitud y encuentro espiritual.',
    'Con amor y esperanza, compartimos este momento de oración junto a quienes más queremos.'
  ],
  'Baby shower': [
    'Con mucha ilusión esperamos la llegada de una nueva vida llena de amor y ternura.',
    'Un pequeño milagro viene en camino y queremos celebrarlo con quienes más queremos.',
    'La dulzura de este momento anuncia la llegada de un amor inmenso.',
    'Cada detalle de este día está lleno de ilusión, ternura y esperanza.',
    'Celebramos con alegría la próxima llegada de un bebé que llenará nuestros corazones.'
  ],
  'Revelación de sexo': [
    'Una hermosa sorpresa está por revelarse y queremos compartirla contigo.',
    'La emoción crece mientras descubrimos juntos si será niño o niña.',
    'Hoy compartimos una noticia llena de ilusión, amor y mucha felicidad.',
    'Un momento especial se acerca y queremos vivirlo junto a ti.',
    'La espera se llena de alegría porque pronto conoceremos esta hermosa sorpresa.'
  ],
  'Quinceañero': [
    'Hoy celebramos una etapa llena de sueños, ilusión y momentos inolvidables.',
    'Que esta noche especial marque el inicio de nuevos sueños y grandes alegrías.',
    'Una fecha única para celebrar la belleza de crecer y soñar en grande.',
    'Que cada instante de esta celebración brille con alegría, amor y emoción.',
    'Hoy empieza una etapa maravillosa llena de sueños, metas y nuevas experiencias.'
  ],
  'Matrimonio': [
    'Dos corazones se unen para escribir una historia llena de amor, respeto y felicidad.',
    'Que este nuevo camino esté lleno de unión, comprensión y momentos inolvidables.',
    'Hoy celebramos el amor que une dos vidas en una misma promesa.',
    'Que la felicidad de este día acompañe siempre su historia de amor.',
    'El amor se convierte hoy en promesa, camino y celebración compartida.'
  ],
  'Graduación': [
    'Hoy celebramos tu esfuerzo, dedicación y el inicio de nuevos caminos llenos de oportunidades.',
    'Cada logro alcanzado refleja tu perseverancia, compromiso y deseo de superarte.',
    'Esta meta cumplida es solo el comienzo de nuevos sueños por conquistar.',
    'Que este logro te inspire a seguir creciendo y alcanzando todo lo que te propongas.',
    'Hoy celebramos una victoria construida con esfuerzo, constancia y mucha ilusión.'
  ],
  'Aniversario': [
    'Celebramos un tiempo compartido lleno de amor, recuerdos y momentos que viven en el corazón.',
    'Que este aniversario renueve la alegría de caminar juntos y seguir construyendo sueños.',
    'Cada momento vivido es parte de una historia que merece celebrarse con amor.',
    'Hoy recordamos con cariño todo lo vivido y celebramos lo que aún está por venir.',
    'Que este día sea una pausa hermosa para agradecer, recordar y seguir amando.'
  ],
  'Amor': [
    'Eres ese detalle especial que hace más bonito cada día de mi vida.',
    'Mi corazón sonríe cada vez que pienso en ti y en todo lo que compartimos.',
    'Amarte es encontrar alegría en los pequeños momentos de cada día.',
    'Gracias por ser parte de mis días, mis sueños y mis mejores recuerdos.',
    'Contigo aprendí que el amor también vive en los detalles sencillos.'
  ],
  'Amistad': [
    'La amistad verdadera se celebra con detalles que nacen del corazón.',
    'Gracias por estar, por escuchar y por compartir tantos momentos especiales.',
    'Una buena amistad es un regalo que se cuida, se valora y se celebra.',
    'Tu amistad hace más bonitos los días y más ligeros los momentos difíciles.',
    'Hoy celebro la alegría de contar con una amistad tan especial como la tuya.'
  ]
};

const estilosPorEvento = {
  'Cumpleaños': 'infantil',
  'Bautizo': 'religioso',
  'Misa': 'religioso',
  'Baby shower': 'infantil',
  'Revelación de sexo': 'infantil',
  'Quinceañero': 'moderno',
  'Matrimonio': 'elegante',
  'Graduación': 'graduacion',
  'Aniversario': 'romantico',
  'Amor': 'romantico',
  'Amistad': 'moderno'
};

const plantillasPorEvento = {
  'Cumpleaños': 'festive',
  'Bautizo': 'frame',
  'Misa': 'minimal',
  'Baby shower': 'festive',
  'Revelación de sexo': 'festive',
  'Quinceañero': 'frame',
  'Matrimonio': 'frame',
  'Graduación': 'frame',
  'Aniversario': 'classic',
  'Amor': 'classic',
  'Amistad': 'minimal'
};

const decoracionesPorEstilo = {
  romantico: {
    top: '🌸',
    bottom: '❤',
    extra: '💗',
    titulo: 'Con mucho cariño'
  },
  elegante: {
    top: '✦',
    bottom: '✧',
    extra: '❦',
    titulo: 'Invitación especial'
  },
  infantil: {
    top: '🎈',
    bottom: '⭐',
    extra: '🎉',
    titulo: 'Celebremos juntos'
  },
  religioso: {
    top: '🕊️',
    bottom: '✝',
    extra: '✨',
    titulo: 'Bendición especial'
  },
  moderno: {
    top: '✨',
    bottom: '✦',
    extra: '◆',
    titulo: 'Momento especial'
  },
  graduacion: {
    top: '🎓',
    bottom: '✦',
    extra: '🏅',
    titulo: 'Logro especial'
  }
};

function crearMensajePorTipo(tipo) {
  return `Hola, vi la página de Detalles que emocionan y me interesa una tarjeta de ${tipo}. Quisiera recibir más información sobre diseños, precios y personalización.`;
}

function crearMensajePorServicio(tipo) {
  return `Hola, vi la página de Detalles que emocionan y deseo consultar por una tarjeta personalizada para ${tipo}.`;
}

function renderServices() {
  const container = document.getElementById('servicesContainer');
  if (!container) return;

  container.innerHTML = '';

  services.forEach((service, index) => {
    const card = document.createElement('article');
    card.className = `service-card service-theme-${index + 1}`;

    card.innerHTML = `
      <div class="service-top">
        <div class="service-icon">${service.icon}</div>
        <span class="service-badge">Digital</span>
      </div>

      <div class="service-content">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </div>

      <div class="service-footer">
        <button 
          class="btn btn-outline service-btn"
          data-message="${crearMensajePorServicio(service.title)}"
        >
          Consultar diseño
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderGallery() {
  const container = document.getElementById('galleryContainer');
  if (!container) return;

  container.innerHTML = '';

  galleryItems.forEach(item => {
    const card = document.createElement('article');
    card.className = 'design-card';

    card.innerHTML = `
      <div
        class="design-image"
        data-src="${item.image}"
        data-alt="Tarjeta personalizada de ${item.title}"
      >
        <img
          src="${item.image}"
          alt="Tarjeta personalizada de ${item.title}"
        >
      </div>

      <div class="design-body">
        <h3>
          <span class="title-icon">${item.icon}</span>
          <span>${item.title}</span>
        </h3>

        <p>${item.description}</p>

        <button
          class="btn btn-outline gallery-btn"
          data-message="${crearMensajePorTipo(item.title)}"
        >
          Quiero este diseño
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderPrices() {
  const container = document.getElementById('pricesContainer');
  if (!container) return;

  container.innerHTML = '';

  prices.forEach(plan => {
    const card = document.createElement('article');
    card.className = plan.featured ? 'price-card featured' : 'price-card';

    const itemsHTML = plan.items.map(item => `<li>${item}</li>`).join('');

    card.innerHTML = `
      <h3>${plan.title}</h3>
      <div class="price-tag">${plan.price}</div>

      <ul>
        ${itemsHTML}
      </ul>

      <button
        class="btn ${plan.featured ? 'btn-primary' : 'btn-outline'} price-btn"
        data-message="${plan.message}"
      >
        Solicitar
      </button>
    `;

    container.appendChild(card);
  });
}

/* ============================
   CREADOR AUTOMÁTICO DE TARJETAS
============================ */

function obtenerValor(id, defaultValue = '') {
  const element = document.getElementById(id);
  return element ? element.value : defaultValue;
}

function obtenerDatosTarjeta() {
  const tipo = obtenerValor('cardType', 'Cumpleaños');
  const nombre = obtenerValor('cardName', '').trim() || 'Nombre especial';
  const fecha = obtenerValor('cardDate', '').trim() || 'Fecha especial';
  const frase =
    obtenerValor('cardMessage', '').trim() ||
    'Que este momento quede guardado para siempre en el corazón.';

  const estiloSeleccionado = obtenerValor('cardStyle', 'auto');
  const plantillaSeleccionada = obtenerValor('cardTemplate', 'auto');
  const formato = obtenerValor('cardFormat', 'vertical');

  const estilo = estiloSeleccionado === 'auto'
    ? estilosPorEvento[tipo] || 'romantico'
    : estiloSeleccionado;

  const plantilla = plantillaSeleccionada === 'auto'
    ? plantillasPorEvento[tipo] || 'classic'
    : plantillaSeleccionada;

  const esInvitacion = !!document.getElementById('isInvitation')?.checked;
  const hora = obtenerValor('eventTime', '').trim();
  const lugar = obtenerValor('eventPlace', '').trim();
  const direccion = obtenerValor('eventAddress', '').trim();
  const confirmacion = obtenerValor('rsvpText', '').trim();

  return {
    tipo,
    nombre,
    fecha,
    frase,
    estilo,
    plantilla,
    formato,
    esInvitacion,
    hora,
    lugar,
    direccion,
    confirmacion,
    estiloSeleccionado,
    plantillaSeleccionada
  };
}

function actualizarVistaPrevia() {
  const preview = document.getElementById('generatedCard');
  const styleBadge = document.getElementById('styleBadge');
  if (!preview) return;

  const {
    tipo,
    nombre,
    fecha,
    frase,
    estilo,
    plantilla,
    formato,
    esInvitacion,
    hora,
    lugar,
    direccion,
    confirmacion
  } = obtenerDatosTarjeta();

  const decor = decoracionesPorEstilo[estilo] || decoracionesPorEstilo.romantico;
  preview.className = `generated-card style-${estilo} template-${plantilla} format-${formato}`;

  const detallesInvitacion = esInvitacion
    ? `
      <div class="generated-invitation">
        ${hora ? `<p><strong>Hora:</strong> ${hora}</p>` : ''}
        ${lugar ? `<p><strong>Lugar:</strong> ${lugar}</p>` : ''}
        ${direccion ? `<p><strong>Dirección:</strong> ${direccion}</p>` : ''}
        ${confirmacion ? `<p class="generated-rsvp">${confirmacion}</p>` : ''}
      </div>
    `
    : '';

  preview.innerHTML = `
    <div class="generated-decoration decoration-top">${decor.top}</div>
    <div class="generated-decoration decoration-bottom">${decor.bottom}</div>
    <div class="generated-decoration decoration-extra">${decor.extra}</div>
    <div class="generated-watermark-bg">Detalles que emocionan</div>

    <div class="generated-card-content">
      <span class="generated-label">${tipo}</span>
      <p class="generated-subtitle">${decor.titulo}</p>
      <h3>${nombre}</h3>
      <p class="generated-date">${fecha}</p>
      <p class="generated-message">“${frase}”</p>
      ${detallesInvitacion}
      <div class="generated-watermark">Creado en Detalles que emocionan</div>
    </div>
  `;

  if (styleBadge) {
    const formatoTexto = formato === 'square' ? 'Cuadrado' : formato === 'story' ? 'Historia' : 'Vertical';
    styleBadge.textContent = `${capitalizar(estilo)} · ${capitalizar(plantilla)} · ${formatoTexto}`;
  }
}

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function generarFraseAutomatica() {
  const tipo = obtenerValor('cardType', 'Cumpleaños');
  const frases = frasesPorEvento[tipo] || frasesPorEvento['Cumpleaños'];
  const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

  const textarea = document.getElementById('cardMessage');
  if (textarea) {
    textarea.value = fraseAleatoria;
  }

  actualizarVistaPrevia();
}

function aplicarEstiloAutomaticoPorEvento() {
  const tipo = obtenerValor('cardType', 'Cumpleaños');
  const estiloSelect = document.getElementById('cardStyle');
  const templateSelect = document.getElementById('cardTemplate');

  if (estiloSelect && estiloSelect.value !== 'auto') {
    // No cambiamos la selección manual del usuario.
  }

  if (templateSelect && templateSelect.value !== 'auto') {
    // No cambiamos la selección manual del usuario.
  }

  const frases = frasesPorEvento[tipo];
  const textarea = document.getElementById('cardMessage');
  if (textarea && !textarea.value.trim() && frases?.length) {
    textarea.value = frases[0];
  }

  actualizarVistaPrevia();
}

function cambiarPlantilla() {
  const select = document.getElementById('cardTemplate');
  if (!select) return;

  const opciones = ['classic', 'frame', 'festive', 'minimal'];
  const actual = select.value === 'auto'
    ? obtenerDatosTarjeta().plantilla
    : select.value;

  const siguienteIndice = (opciones.indexOf(actual) + 1) % opciones.length;
  select.value = opciones[siguienteIndice];
  actualizarVistaPrevia();
}

function reiniciarTarjeta() {
  const campos = ['cardName', 'cardDate', 'cardMessage', 'eventTime', 'eventPlace', 'eventAddress', 'rsvpText'];
  campos.forEach(id => {
    const element = document.getElementById(id);
    if (element) element.value = '';
  });

  const styleSelect = document.getElementById('cardStyle');
  const templateSelect = document.getElementById('cardTemplate');
  const formatSelect = document.getElementById('cardFormat');
  const invitationCheck = document.getElementById('isInvitation');

  if (styleSelect) styleSelect.value = 'auto';
  if (templateSelect) templateSelect.value = 'auto';
  if (formatSelect) formatSelect.value = 'vertical';
  if (invitationCheck) invitationCheck.checked = false;

  toggleInvitationFields();
  generarFraseAutomatica();
  actualizarVistaPrevia();
}

function toggleInvitationFields() {
  const invitationFields = document.getElementById('invitationFields');
  const isInvitation = document.getElementById('isInvitation');

  if (!invitationFields || !isInvitation) return;

  invitationFields.classList.toggle('active', isInvitation.checked);
  actualizarVistaPrevia();
}

function descargarTarjeta() {
  const card = document.getElementById('generatedCard');

  if (!card) {
    alert('No se encontró la tarjeta para descargar.');
    return;
  }

  if (typeof html2canvas === 'undefined') {
    alert('No se pudo cargar la librería de descarga. Verifica tu conexión a internet.');
    return;
  }

  const { tipo, formato } = obtenerDatosTarjeta();
  const nombreArchivo = `tarjeta-${tipo.toLowerCase().replaceAll(' ', '-')}-${formato}.png`;

  html2canvas(card, {
    backgroundColor: null,
    scale: 2,
    useCORS: true
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = nombreArchivo;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

function compartirTarjetaWhatsApp() {
  const { tipo, nombre } = obtenerDatosTarjeta();
  const enlace = window.location.href.split('#')[0];
  const mensaje = `Acabo de crear una tarjeta de ${tipo} para ${nombre} en Detalles que emocionan. Crea la tuya también aquí: ${enlace}`;

  abrirWhatsApp(mensaje);
}

async function copiarEnlace() {
  const enlace = window.location.href.split('#')[0] + '#crear-tarjeta';

  try {
    await navigator.clipboard.writeText(enlace);
    alert('Enlace copiado. Ya puedes compartirlo.');
  } catch (error) {
    prompt('Copia este enlace:', enlace);
  }
}

function pedirVersionPersonalizada() {
  const {
    tipo,
    nombre,
    fecha,
    frase,
    estilo,
    plantilla,
    formato,
    esInvitacion,
    hora,
    lugar,
    direccion,
    confirmacion
  } = obtenerDatosTarjeta();

  const mensaje =
    `Hola, vi la página de Detalles que emocionan y creé una tarjeta automática, pero deseo una versión personalizada.

` +
    `Tipo de evento: ${tipo}
` +
    `Nombre: ${nombre}
` +
    `Fecha o dato especial: ${fecha}
` +
    `Frase: ${frase}
` +
    `Estilo elegido: ${estilo}
` +
    `Plantilla elegida: ${plantilla}
` +
    `Formato: ${formato}
` +
    `¿Es invitación?: ${esInvitacion ? 'Sí' : 'No'}
` +
    `${hora ? `Hora: ${hora}
` : ''}` +
    `${lugar ? `Lugar: ${lugar}
` : ''}` +
    `${direccion ? `Dirección: ${direccion}
` : ''}` +
    `${confirmacion ? `Confirmación: ${confirmacion}
` : ''}` +
    `
Quisiera cotizar una versión más elaborada, con mejor diseño y/o sin marca de agua.`;

  abrirWhatsApp(mensaje);
}

function setupCardGenerator() {
  const inputs = [
    'cardType',
    'cardName',
    'cardDate',
    'cardMessage',
    'cardStyle',
    'cardTemplate',
    'cardFormat',
    'eventTime',
    'eventPlace',
    'eventAddress',
    'rsvpText'
  ];

  inputs.forEach(id => {
    const element = document.getElementById(id);

    if (element) {
      element.addEventListener('input', actualizarVistaPrevia);
      element.addEventListener('change', () => {
        if (id === 'cardType') {
          aplicarEstiloAutomaticoPorEvento();
        }
        actualizarVistaPrevia();
      });
    }
  });

  const invitationCheck = document.getElementById('isInvitation');
  const generatePhraseBtn = document.getElementById('generatePhrase');
  const changeTemplateBtn = document.getElementById('changeTemplate');
  const downloadBtn = document.getElementById('downloadCard');
  const shareBtn = document.getElementById('shareCard');
  const copyLinkBtn = document.getElementById('copyLink');
  const resetBtn = document.getElementById('resetCard');
  const customBtn = document.getElementById('customCard');

  if (invitationCheck) {
    invitationCheck.addEventListener('change', toggleInvitationFields);
  }

  if (generatePhraseBtn) {
    generatePhraseBtn.addEventListener('click', generarFraseAutomatica);
  }

  if (changeTemplateBtn) {
    changeTemplateBtn.addEventListener('click', cambiarPlantilla);
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', descargarTarjeta);
  }

  if (shareBtn) {
    shareBtn.addEventListener('click', compartirTarjetaWhatsApp);
  }

  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', copiarEnlace);
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', reiniciarTarjeta);
  }

  if (customBtn) {
    customBtn.addEventListener('click', pedirVersionPersonalizada);
  }

  toggleInvitationFields();
  generarFraseAutomatica();
  actualizarVistaPrevia();
}

/* ============================
   BOTONES, MENÚ Y MODAL
============================ */

function setupButtons() {
  document.addEventListener('click', event => {
    const whatsappButton = event.target.closest('[data-message]');

    if (whatsappButton) {
      const message = whatsappButton.dataset.message;
      abrirWhatsApp(message);
    }

    const imageBox = event.target.closest('.design-image');

    if (imageBox) {
      const src = imageBox.dataset.src;
      const alt = imageBox.dataset.alt;
      abrirImagen(src, alt);
    }
  });
}

function setupMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

function abrirImagen(src, alt) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');

  if (!modal || !modalImage) return;

  modalImage.src = src;
  modalImage.alt = alt;
  modal.classList.add('active');

  document.body.style.overflow = 'hidden';
}

function cerrarImagen() {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');

  if (!modal || !modalImage) return;

  modal.classList.remove('active');
  modalImage.src = '';

  document.body.style.overflow = '';
}

function setupModal() {
  const modal = document.getElementById('imageModal');
  const modalClose = document.getElementById('modalClose');

  if (!modal || !modalClose) return;

  modalClose.addEventListener('click', cerrarImagen);

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      cerrarImagen();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      cerrarImagen();
    }
  });
}

/* ============================
   INICIO
============================ */

document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderGallery();
  renderPrices();
  setupMenu();
  setupModal();
  setupButtons();
  setupCardGenerator();
});
