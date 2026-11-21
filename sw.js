// オフラインで遊ぶためのサービスワーカー（2026-11-20 本人「wifiでゲームを落として、オフラインでも遊べるようにはできる？」→「作る」）。
// これはひな形。`npm run build` の最後に vite.config.ts の offline が、dist/ の中身の一覧と版（中身のハッシュ）を下の2か所に入れて dist/sw.js に書き出す。
// ・はじめて開いた時に、ゲームの全部（約 7.5MB）をこの端末に保存する。そのあとは電波が無くても、保存した物から開く
// ・公開し直したら：ネットにつないで開いた時に新しい版を裏で保存し、アプリを開き直した時から新しい版になる（遊んでいる途中で中身が入れ替わらないように）
// ・保存データ（お金・景品など）は localStorage にあり、ここでは触らない
const VERSION = 'a6e4cb760fe0';
const FILES = ["assets/appliances-DUDPU7Yb.webp","assets/clocks-CrmW0kmJ.webp","assets/gen-jean-CdbShlT-.webp","assets/gen-leo-Csl5nv0b.webp","assets/gen-luca-S2EjbQ3V.webp","assets/index-BwRmQi6x.css","assets/index-DsH4h3KL.js","assets/kou-gen-CfffIAgs.webp","assets/kou-kin-Dkyv75VX.webp","assets/kou-taiga-CzaOHZuj.webp","assets/kou-tetsu-zQCTqeML.webp","assets/luxury-DXtvWj0b.webp","assets/mascots-jK7mVfpP.webp","assets/mask-4sCQXVaZ.webp","assets/sen-gou-CRJwmLrm.webp","assets/sen-jin-Cr2nAO0H.webp","assets/sen-kai-BwZGKskd.webp","assets/snack-photos-D3zRmfYX.webp","assets/tabby-C3vefzqX.webp","assets/worker-Cp7w2gG5.js","icon-180.png","icon-192.png","icon-512.png","icon-maskable-512.png","icon.svg","index.html","manifest.webmanifest","og.jpg","sfx/sfx.wav"];
const CACHE = `crane-life-${VERSION}`;

self.addEventListener('install', event => {
  // 古い版の HTTP の保存を使わず、公開先から取り直す
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, {cache: 'reload'})))));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) if (key.startsWith('crane-life-') && key !== CACHE) await caches.delete(key);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    // ページを開く時は、いつも保存した index.html（URL に ?v=2 などが付いていても）
    if (req.mode === 'navigate') return (await cache.match('index.html', {ignoreVary: true})) ?? fetch(req);
    // ignoreVary：保存した時（Origin なし）と読む時（モジュールの読み込みは Origin あり）で、Vary の付いた返事が別物とみなされて出せなかった
    const hit = await cache.match(req, {ignoreSearch: true, ignoreVary: true});
    if (hit) return hit;
    try { return await fetch(req); } catch { return new Response('', {status: 504, statusText: 'offline'}); }
  })());
});
