# Caroa Vintage · Escaparate de ropa vintage de marca

Web estática (HTML/CSS/JS modular, sin compilación). Cada prenda enlaza a su anuncio en Vinted: no hay carrito ni pagos.

## Ejecutar en local
python3 -m http.server 8000  → abrir http://localhost:8000
(No abrir index.html con doble clic: los módulos ES no cargan desde file://.)

## Dónde se edita cada cosa
- Prendas (fotos, medidas, estado, enlaces a anuncios): `src/data/products.js`
- Marca, titular y URLs de tus perfiles de Vinted: `src/data/site.config.js`
- Textos de ayuda y legales: `src/data/info-pages.js`
- Textos de cada categoría: los 5 archivos `*-vintage.html` / `workwear-y-outdoor-vintage.html`
- Guía de palabras clave y lanzamiento: `docs/SEO.md`

## Estado
Ver `docs/ESTADO.md`. Las prendas "Ejemplo" son de demostración: sustitúyelas por prendas reales.
