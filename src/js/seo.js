// Metadatos compartidos: Open Graph, Twitter, canonical y datos estructurados.
// Lo que necesita URL absoluta (canonical, og:url, og:image, JSON-LD) se activa al definir SITE.dominio.
import { SITE } from '../data/site.config.js';
import { urlPlataforma } from './ui.js';

function meta(atributo, nombre, contenido) {
  let nodo = document.head.querySelector(`meta[${atributo}="${nombre}"]`);
  if (!nodo) {
    nodo = document.createElement('meta');
    nodo.setAttribute(atributo, nombre);
    document.head.append(nodo);
  }
  nodo.setAttribute('content', contenido);
}

function jsonLd(id, datos) {
  document.getElementById(id)?.remove();
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.textContent = JSON.stringify(datos);
  document.head.append(script);
}

export function aplicarSeo() {
  const descripcion = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
  meta('property', 'og:title', document.title);
  meta('property', 'og:description', descripcion);
  meta('property', 'og:type', 'website');
  meta('property', 'og:site_name', SITE.marca.nombre);
  meta('property', 'og:locale', 'es_ES');
  meta('name', 'twitter:card', 'summary_large_image');

  if (!SITE.dominio) return;
  const base = SITE.dominio.replace(/\/$/, '');
  const archivo = location.pathname.split('/').pop() || 'index.html';
  const claves = { 'prenda.html': ['id'], 'info.html': ['p'] }[archivo] || [];
  const params = new URLSearchParams(location.search);
  const q = new URLSearchParams();
  for (const k of claves) if (params.has(k)) q.set(k, params.get(k));
  const url = `${base}/${archivo === 'index.html' ? '' : archivo}${q.toString() ? `?${q}` : ''}`;

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.append(canonical);
  }
  canonical.href = url;
  meta('property', 'og:url', url);
  meta('property', 'og:image', `${base}/${SITE.marca.ogImagen}`);
  meta('name', 'twitter:image', `${base}/${SITE.marca.ogImagen}`);

  if (archivo === 'index.html') {
    const perfiles = [...Object.entries(SITE.plataformas), ...Object.entries(SITE.redes)].map(([k, pl]) => urlPlataforma(k, pl.perfil)).filter(Boolean);
    jsonLd('ld-org', { '@context': 'https://schema.org', '@type': 'Organization', name: SITE.marca.nombre, url: `${base}/`, logo: `${base}/${SITE.marca.logo}`, ...(perfiles.length ? { sameAs: perfiles } : {}) });
    jsonLd('ld-web', { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.marca.nombre, url: `${base}/`, inLanguage: 'es-ES' });
  }

  const migas = [...document.querySelectorAll('.migas li')];
  if (migas.length > 1) {
    const abs = (href) => (href === 'index.html' ? `${base}/` : `${base}/${href}`);
    jsonLd('ld-bc', {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: migas.map((li, i) => {
        const a = li.querySelector('a');
        return { '@type': 'ListItem', position: i + 1, name: li.textContent.trim(), item: a ? abs(a.getAttribute('href')) : url };
      })
    });
  }
}
