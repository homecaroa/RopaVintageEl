// Contenido de las páginas informativas y legales (info.html?p=<clave>).
// Marcadores: {titular} {nif} {domicilio} {email} {telefono} {marca} {vinted} {wallapop}
//   → se rellenan desde site.config.js; si falta el dato aparece "Pendiente de confirmar".
// {?Texto} → dato pendiente de decidir (se muestra resaltado). [texto](info.html?p=faq) → enlace interno.
// Los textos legales son ORIENTATIVOS: deben revisarse con un profesional antes de vender.
export const INFO = {
  faq: {
    titulo: 'Preguntas frecuentes',
    descripcion: 'Preguntas frecuentes sobre cómo comprar ropa vintage de marca en Vinted y Wallapop, tallas y medidas, autenticidad, envíos y devoluciones en Caroa Vintage.',
    secciones: [
      { h: '¿Cómo compro una prenda?', p: ['Entra en la ficha de la prenda y pulsa «Ver en Vinted» o «Ver en Wallapop». La compra, el pago y el envío se hacen en esa plataforma.'] },
      { h: '¿Se paga o se piden datos en esta web?', p: ['No. Esta web es un escaparate: no procesa pagos ni pedidos y no guarda datos de compra.'] },
      { h: '¿Cómo sé qué talla me queda?', p: ['Cada ficha incluye medidas reales de la prenda. Compáralas con una prenda tuya que te quede bien: la talla de la etiqueta puede variar entre épocas y marcas.'] },
      { h: '¿Cómo sé que la prenda es auténtica?', p: ['Cada ficha indica la marca, la etiqueta y el estado. {?Política de autenticidad y qué hacer si hay dudas}.'] },
      { h: '¿Cuánto cuesta el envío y puedo devolver?', p: ['Depende de la plataforma y del anuncio. Más información en [Envíos y devoluciones](info.html?p=envios-devoluciones).'] },
      { h: '¿Las prendas de la web son reales?', p: ['Mientras se construye la web, las prendas marcadas como ejemplo son de demostración y se sustituirán por prendas reales con fotos propias.'] }
    ]
  },
  'quienes-somos': {
    titulo: 'Quiénes somos',
    descripcion: 'Conoce Caroa Vintage: selección de ropa vintage de marca para hombre de los 80, 90 y 2000, elegida prenda a prenda con medidas reales y estado explicado.',
    secciones: [
      { h: 'Qué es {marca}', p: ['{marca} es una selección de ropa vintage de marca para hombre de los años 80, 90 y 2000: chaquetas deportivas, vaqueros, sudaderas, workwear y camisetas retro. Las prendas se venden a través de Vinted y Wallapop.'] },
      { h: 'Cómo seleccionamos', p: ['Elegimos las prendas una a una. Cada ficha incluye fotografías propias, medidas reales, el estado explicado y la marca y el modelo cuando se pueden identificar.'] },
      { h: 'Nuestra historia', p: ['{?Historia y propósito del proyecto}.'] },
      { h: 'Dónde comprar', p: ['Perfil en Vinted: {vinted}.', 'Perfil en Wallapop: {wallapop}.'] }
    ]
  },
  'envios-devoluciones': {
    titulo: 'Envíos y devoluciones',
    descripcion: 'Cómo funcionan los envíos, las devoluciones y las reclamaciones al comprar ropa vintage de Caroa Vintage a través de Vinted y Wallapop.',
    revisionLegal: true,
    secciones: [
      { h: 'Cómo se gestiona', p: ['Esta web no vende ni envía directamente. Cada compra se hace en Vinted o en Wallapop, y esa plataforma gestiona el pago, el envío y las reclamaciones según sus propias condiciones.'] },
      { h: 'Envío', p: ['Los costes, plazos y métodos de envío se muestran en el anuncio de cada prenda, antes de comprar.'] },
      { h: 'Devoluciones y desistimiento', p: ['Las condiciones dependen de la plataforma y de si el vendedor actúa como profesional. {?Política propia de devoluciones y desistimiento, según la normativa aplicable}.'] },
      { h: 'Incidencias', p: ['Si hay un problema con una prenda, escribe por la mensajería de la plataforma donde la compraste o a {email}.'] }
    ]
  },
  contacto: {
    titulo: 'Contacto',
    descripcion: 'Contacta con Caroa Vintage para resolver dudas sobre tallas, medidas, estado o disponibilidad de una prenda de ropa vintage de marca.',
    secciones: [
      { h: 'Consultas sobre una prenda', p: ['Lo más rápido es escribir por la mensajería del anuncio en Vinted ({vinted}) o Wallapop ({wallapop}).'] },
      { h: 'Otros asuntos', p: ['Correo electrónico: {email}.', 'Teléfono: {telefono}.'] }
    ]
  },
  'aviso-legal': {
    titulo: 'Aviso legal',
    descripcion: 'Aviso legal de Caroa Vintage: datos identificativos del titular de esta web de escaparate de ropa vintage de marca.',
    revisionLegal: true,
    secciones: [
      { h: 'Titular del sitio', p: ['Titular: {titular}.', 'NIF: {nif}.', 'Domicilio: {domicilio}.', 'Correo electrónico: {email}.', 'Teléfono: {telefono}.'] },
      { h: 'Objeto', p: ['Este sitio ({marca}) es un escaparate de ropa vintage de marca. No procesa ventas: las compras se realizan en Vinted o Wallapop.'] },
      { h: 'Actividad y obligaciones', p: ['{?Alta censal, IVA y régimen aplicable a la actividad; consultar con una gestoría}.'] },
      { h: 'Propiedad intelectual y responsabilidad', p: ['{?Redacción legal sobre propiedad intelectual, responsabilidad y legislación aplicable}.'] }
    ]
  },
  condiciones: {
    titulo: 'Condiciones de uso y de compra',
    descripcion: 'Condiciones de uso de la web de Caroa Vintage y funcionamiento de las compras de ropa vintage a través de Vinted y Wallapop.',
    revisionLegal: true,
    secciones: [
      { h: 'Qué es esta web', p: ['Un escaparate con las prendas disponibles. No se puede comprar ni pagar aquí.'] },
      { h: 'Compra en plataformas', p: ['La compraventa se formaliza en Vinted o Wallapop, bajo sus condiciones. Vinted y Wallapop son servicios de terceros con sus propias políticas de privacidad.'] },
      { h: 'Precios y disponibilidad', p: ['Los precios de esta web son orientativos: vale el precio del anuncio en el momento de la compra. Cada prenda es única; si aparece como vendida o reservada puede que ya no esté disponible.'] },
      { h: 'Envíos y devoluciones', p: ['Consulta [Envíos y devoluciones](info.html?p=envios-devoluciones).'] },
      { h: 'Reclamaciones', p: ['{?Hojas de reclamaciones y resolución de conflictos, según normativa aplicable}.'] }
    ]
  },
  privacidad: {
    titulo: 'Política de privacidad',
    descripcion: 'Política de privacidad de Caroa Vintage: esta web de ropa vintage no recoge datos personales; qué ocurre al visitar Vinted o Wallapop.',
    revisionLegal: true,
    secciones: [
      { h: 'Responsable', p: ['{titular}, NIF {nif}, {domicilio}. Contacto: {email}.'] },
      { h: 'Qué datos se tratan', p: ['Esta web no tiene registro, formularios ni pagos y no recoge datos personales. {?Actualizar si se añade un formulario de contacto o analítica}.'] },
      { h: 'Enlaces a otras plataformas', p: ['Al pulsar un enlace a Vinted o Wallapop sales de esta web. Esas plataformas tratan tus datos según sus propias políticas.'] },
      { h: 'Tus derechos', p: ['Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a {email}. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).'] }
    ]
  },
  cookies: {
    titulo: 'Política de cookies',
    descripcion: 'Política de cookies de Caroa Vintage: esta web de ropa vintage de marca no instala cookies ni usa analítica ni publicidad.',
    revisionLegal: true,
    secciones: [
      { h: 'Qué usa esta web hoy', p: ['El código de esta web no instala cookies ni usa servicios de analítica, publicidad o almacenamiento local.'] },
      { h: 'Enlaces externos', p: ['Vinted y Wallapop pueden usar sus propias cookies cuando las visitas; consulta sus políticas.'] },
      { h: 'Si se añaden cookies no necesarias', p: ['Si se incorporan analítica o publicidad, se pedirá tu consentimiento antes de activarlas y se actualizará esta página. {?Actualizar al añadir analítica o publicidad}.'] }
    ]
  }
};
