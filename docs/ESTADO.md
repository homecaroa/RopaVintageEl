# ESTADO DEL PROYECTO · Caroa Vintage

Última actualización (Wallapop sustituido por Instagram): Marca Caroa Vintage, logo y SEO inicial · 11 oct 2026

## Cambio de rumbo
El proyecto ya no es una tienda de regalos. Ahora es un **escaparate de ropa vintage de marca** (España y Europa; adultos de 25–40) que redirige a los perfiles del usuario en **Vinted** (compra) e **Instagram** (seguir y contactar). Marca: **Caroa Vintage** (logo: daga minimalista crema sobre negro con el texto CAROA; versiones en `assets/`: logo-caroa.png para fondos oscuros, logo-cabecera.png para la cabecera, logo-512.png, favicon y og-caroa.png). Titular: Caroa, particular por ahora. Se mantiene la estructura de la web anterior. Se eliminaron carrito, "Encuentra tu regalo", packs y pagos. Fuente de contexto: estudio de mercado y plan de negocio de ropa vintage (proyecto).
Principio del estudio: validar en marketplaces antes de una tienda propia; la web no cobra ni gestiona pedidos.

## Reglas de trabajo
- Entregar solo los archivos que cambian en cada lote.
- Tener presente la lista de pendientes: si algo depende del usuario, pasar a lo siguiente y recordárselo después.
- Lotes pequeños; no planificar funciones que aún no hacen falta.

## Arquitectura
- HTML/CSS/JS vanilla con módulos ES6, sin build; GitHub Pages; rutas relativas.
- Datos: `src/data/products.js` (prendas), `site.config.js` (marca, empresa, perfiles de plataformas), `info-pages.js` (textos).
- Páginas: `<body data-page>` + `main.js` + módulo `src/js/<pagina>.js` con `iniciar()`.
- Enlaces externos: solo https a vinted.* o instagram.com (validados en `ui.js`: vinted.* y instagram.com); se abren con `rel="noopener noreferrer"`. Sin cookies, sin almacenamiento local, sin analítica.
- SEO desde el inicio: guía y lista de lanzamiento en `docs/SEO.md`; páginas estáticas por categoría con texto propio; canonical, Open Graph y JSON-LD se activan al definir `dominio`.
- Paleta: navy #1E3153, loden #56643A, burdeos #7A1F2E sobre base clara #F7F3EA.

## Archivos
README.md · .gitignore · robots.txt · index.html · catalogo.html · prenda.html · info.html · chaquetas-deportivas-vintage.html · vaqueros-vintage.html · sudaderas-y-polos-vintage.html · workwear-y-outdoor-vintage.html · camisetas-y2k-vintage.html · docs/ESTADO.md · docs/SEO.md · herramientas/sitemap.html
assets/logo-caroa.png · favicon.png · apple-touch-icon.png · og-caroa.png
src/css/base.css · components.css · paginas.css
src/data/site.config.js · products.js · info-pages.js
src/js/main.js · ui.js · layout.js · home.js · catalog.js · categoria.js · product.js · info.js · seo.js · validar.js
Eliminados (borrar en GitHub si siguen): assets/favicon.svg, carrito.html, encuentra.html, pack.html, src/js/cart.js, src/js/carrito.js, src/js/encuentra.js.

## Publicación
- Publicada en GitHub Pages: https://homecaroa.github.io/RopaVintageEl/ (subcarpeta del repositorio; las rutas relativas funcionan). `robots.txt` y `sitemap.xml` solo surten efecto con dominio propio en la raíz.
- Actualizar siempre con el **zip completo** (`caroa-vintage-completo.zip`) para no mezclar versiones.
- Si aparece «No se ha podido cargar esta sección» o se ve el logo antiguo: es una mezcla de archivos nuevos y antiguos (subida parcial o caché del navegador). Subir el zip completo, esperar 1–2 minutos a que Pages despliegue y recargar con Ctrl+F5 (Cmd+Shift+R en Mac).
- Archivos antiguos que deben haberse borrado: carrito.html, encuentra.html, pack.html, src/js/cart.js, src/js/carrito.js, src/js/encuentra.js, assets/favicon.svg.
- Al imprimir la web a PDF no se imprimen los fondos: botones y pie se ven pálidos; es normal.

## Qué hay
- Portada: propuesta de valor, últimas prendas, categorías con prendas, cómo comprar, ventajas, botones a tus perfiles, FAQ.
- Catálogo: filtros por categoría, marca y talla; orden por recientes/precio; vendidas al final; URL compartible.
- Ficha: galería, marca/época/talla, precio orientativo, botón «Ver en Vinted» (enlace al anuncio de esa prenda), medidas reales, estado y autenticidad, prendas relacionadas, JSON-LD solo cuando la prenda deja de ser ejemplo.
- Info: FAQ, Quiénes somos, Envíos y devoluciones, Contacto, Aviso legal, Condiciones, Privacidad, Cookies (textos orientativos con datos pendientes resaltados).
- Categorías (del estudio): chaquetas deportivas, denim, polos/jerséis/sudaderas, workwear y outdoor, camisetas gráficas y Y2K.

## Pendiente de ti
- U1 URLs de tus perfiles de Vinted y de Instagram → `site.config.js` (`plataformas.vinted` y `redes.instagram`). Mientras estén vacías, los botones aparecen como "enlace pendiente".
- U2 Comprar el dominio (y comprobar que "Caroa Vintage" está libre como dominio y marca) → seguir `docs/SEO.md`.
- U3 Primeras prendas reales: fotos propias (en `assets/img/`), marca, talla, medidas, estado, defectos, precio y URL del anuncio. Las 4 prendas "Ejemplo" son de demostración y hay que borrarlas.
- U4 NIF, domicilio y correo del titular (el titular "Caroa" ya está): `site.config.js`.
- U5 Gestoría: alta censal, RETA, IVA y régimen de bienes usados (el estudio lo marca como paso previo a comprar lotes de forma sistemática) y revisión de los textos legales.
- U6 Texto de "Quiénes somos" (historia y propósito) y política de autenticidad.

## Lo que puedo hacer sin ti (próximos lotes)
- L2-SEO Prerenderizado de fichas (URL limpia por prenda) y más contenido útil (guía de tallas, cómo comprar ropa vintage) cuando decidas el dominio.
- L2 Plantilla de hoja de cálculo para el registro del estudio (compra, coste por prenda vendible, precio final, rotación, rentabilidad por hora) y, si se quiere, una calculadora en `herramientas/`.
- L3 Optimizaciones SEO: descripciones meta más largas, Organization/BreadcrumbList, URLs limpias por prerenderizado.
- L4 Mejoras de ficha: más fotos, guía de tallas, enlace "Compartir".

## Fuera de la web
Compras a proveedores, fotografía, publicación de anuncios, gestión de pedidos, envíos, devoluciones y facturación se hacen en Vinted y con la gestoría. Una tienda propia solo cuando haya ventas repetidas, márgenes demostrados y capacidad de captar clientes (criterio del estudio).

## Pruebas realizadas
Chromium local (Playwright), 16 vistas (incluye 5 categorías); títulos y descripciones únicos (títulos 24–59 caracteres, descripciones 115–156); canonical, Open Graph, Organization, WebSite y BreadcrumbList verificados con dominio simulado; sitemap con 19 URL. Antes, 13 vistas: 1 H1 por página, sin saltos de encabezado, 0 errores de consola, 18 enlaces internos sin roturas. Filtros y orden del catálogo, ficha, estado "vendida", validación de URLs (https válida aceptada; http o dominio ajeno rechazados), enlaces externos con `target=_blank` y `rel=noopener noreferrer`. No probado en GitHub Pages ni en dispositivos reales.

## Próxima tarea exacta
Esperar U1 y U3 para cargar tus perfiles y primeras prendas. Mientras, L2 (hoja de cálculo de seguimiento).
