/* =============================================
   BIOVIVA — SERVICE WORKER (PWA)
   =============================================
   Estratégia:
   - Navegação (HTML): rede primeiro, cache como reserva (permite uso offline).
   - Arquivos do app (CSS/JS/ícones): cache primeiro com revalidação em segundo plano.
   - Fontes do Google: cache em tempo de execução.
   ============================================= */

const VERSION = 'bioviva-v1';
const STATIC_CACHE = `bioviva-static-${VERSION}`;
const RUNTIME_CACHE = `bioviva-runtime-${VERSION}`;

// Caminhos relativos à raiz do app (funciona em /bioensino.attv/ ou na raiz).
const PRECACHE_URLS = [
  './',
  './index.html',
  './bio.css',
  './script.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-64.png'
];

const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];


/* =============================================
   INSTALAÇÃO
   ============================================= */

self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_CACHE);

      // Um arquivo ausente não deve impedir a instalação do app inteiro.
      await Promise.allSettled(
        PRECACHE_URLS.map(url => cache.add(new Request(url, { cache: 'reload' })))
      );

      await self.skipWaiting();
    })()
  );
});


/* =============================================
   ATIVAÇÃO E LIMPEZA DE CACHES ANTIGOS
   ============================================= */

self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      const outdated = names.filter(
        name => name.startsWith('bioviva-') && name !== STATIC_CACHE && name !== RUNTIME_CACHE
      );

      await Promise.all(outdated.map(name => caches.delete(name)));
      await self.clients.claim();
    })()
  );
});


/* =============================================
   ESTRATÉGIAS DE CACHE
   ============================================= */

/** Rede primeiro: usa a rede quando possível e cai para o cache. */
async function networkFirst(request) {
  const cache = await caches.open(STATIC_CACHE);

  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) return cached;

    const fallback = await cache.match('./index.html');
    if (fallback) return fallback;

    return new Response(
      '<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><title>BioViva — offline</title></head>' +
      '<body style="font-family:sans-serif;padding:40px;text-align:center">' +
      '<h1>Você está offline</h1><p>Reabra a página quando tiver internet para continuar estudando.</p>' +
      '</body></html>',
      { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }
}

/** Cache primeiro com revalidação: responde na hora e atualiza em segundo plano. */
async function staleWhileRevalidate(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(request);

  const network = fetch(request)
    .then(response => {
      if (response && response.ok && response.type !== 'opaque') {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);

  if (cached) {
    network.catch(() => null);
    return cached;
  }

  const response = await network;

  if (response) return response;

  return new Response('', { status: 504, statusText: 'Offline' });
}

/**
 * Cache primeiro para recursos externos (fontes do Google).
 * Respostas opacas também são guardadas para o app funcionar offline.
 */
async function cacheFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);

  if (cached) {
    fetch(request)
      .then(response => {
        if (response) cache.put(request, response.clone());
      })
      .catch(() => null);

    return cached;
  }

  try {
    const response = await fetch(request);

    if (response) cache.put(request, response.clone());

    return response;
  } catch (error) {
    // Offline e sem cópia no cache: devolve uma resposta vazia,
    // para o navegador não registrar erro no console.
    return new Response('', {
      status: 200,
      headers: { 'Content-Type': 'text/css; charset=utf-8' }
    });
  }
}


/* =============================================
   INTERCEPTAÇÃO DE REQUISIÇÕES
   ============================================= */

self.addEventListener('fetch', event => {
  const { request } = event;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
    return;
  }

  if (sameOrigin) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  if (FONT_HOSTS.includes(url.hostname)) {
    event.respondWith(cacheFirst(request));
  }
});


/* =============================================
   MENSAGENS DA PÁGINA
   ============================================= */

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
