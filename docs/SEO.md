# Guía SEO · Caroa Vintage

Las palabras clave son hipótesis sin volumen de búsqueda verificado. Cuando haya dominio y Search Console, ajustar con datos reales (consultas, impresiones, clics). La etiqueta meta "keywords" no se usa: Google la ignora.

## Mapa de palabras clave por página
| Página | Palabra principal | Secundarias |
|---|---|---|
| index.html | ropa vintage de marca para hombre | ropa de segunda mano de marca, moda retro, ropa años 90, comprar ropa vintage Vinted |
| catalogo.html | catálogo de ropa vintage de marca | ropa vintage hombre, filtrar por talla |
| chaquetas-deportivas-vintage.html | chaquetas deportivas vintage | chaqueta deportiva años 90, chaqueta retro |
| vaqueros-vintage.html | vaqueros vintage de hombre | denim clásico, vaqueros retro, medidas cintura entrepierna |
| sudaderas-y-polos-vintage.html | sudaderas, polos y jerséis vintage de marca | sudadera vintage, polo vintage |
| workwear-y-outdoor-vintage.html | workwear y ropa outdoor vintage | chaqueta de trabajo vintage |
| camisetas-y2k-vintage.html | camisetas gráficas y ropa Y2K vintage | camiseta estampada vintage, moda Y2K |
| Fichas de prenda | [tipo de prenda] vintage [marca] talla X | época (90s, 2000s), categoría |

## Reglas al añadir prendas reales (`products.js`)
- `nombre`: tipo de prenda + marca + época. Ej.: "Chaqueta deportiva [marca] años 90".
- `slug`: tipo-marca-epoca-talla, minúsculas y guiones. Único y permanente (no cambiarlo después de indexar).
- `seo.titulo`: "[Tipo] vintage [marca] talla X" (máx. ~55 caracteres; "| Caroa Vintage" se añade solo).
- `seo.descripcion`: 120–155 caracteres con tipo, marca, época, talla y estado.
- Fotos: nombre de archivo descriptivo (`chaqueta-deportiva-marca-90s-frente.jpg`), peso < 200 KB, formato 4:5. El texto alternativo se genera con nombre, marca y talla.
- Nombrar marcas solo cuando la prenda es de esa marca y la etiqueta lo confirma.

## Reglas generales
- Un solo H1 por página; títulos y descripciones únicos; texto original (no copiar descripciones de Vinted).
- Enlazar prendas ↔ categoría ↔ catálogo (ya automático: migas, chip de categoría, "Otras categorías", pie).
- Mantener la web ligera: sin librerías externas ni fuentes remotas.

## Lista de lanzamiento (cuando compres el dominio)
1. Poner el dominio en `site.config.js` (`dominio: 'https://tudominio.es'`): activa canonical, Open Graph, imagen para redes y datos estructurados (Organization, WebSite, BreadcrumbList).
2. Poner las URLs de tus perfiles en `plataformas.vinted` y `redes.instagram` (también alimentan `sameAs`).
3. Abrir `herramientas/sitemap.html`, copiar el resultado a `sitemap.xml` en la raíz y añadir en `robots.txt` la línea `Sitemap: https://tudominio.es/sitemap.xml`.
4. Quitar `<meta name="robots" content="noindex, nofollow">` de todas las páginas HTML.
5. Sustituir las prendas "Ejemplo" por reales y poner `provisional: false` (activa los datos estructurados de producto).
6. Dar de alta el sitio en Google Search Console y enviar el sitemap.
7. Revisar con una gestoría los textos legales y completar NIF y domicilio.
