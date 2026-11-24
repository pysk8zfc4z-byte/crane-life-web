// オフラインで遊ぶためのサービスワーカー（2026-11-20 本人「wifiでゲームを落として、オフラインでも遊べるようにはできる？」→「作る」）。
// これはひな形。`npm run build` の最後に vite.config.ts の offline が、dist/ の中身の一覧と版（中身のハッシュ）を下の2か所に入れて dist/sw.js に書き出す。
// ・はじめて開いた時に、ゲームの全部（約 7.5MB）をこの端末に保存する。そのあとは電波が無くても、保存した物から開く
// ・公開し直したら：ネットにつないで開いた時に新しい版を裏で保存し、アプリを開き直した時から新しい版になる（遊んでいる途中で中身が入れ替わらないように）
// ・保存データ（お金・景品など）は localStorage にあり、ここでは触らない
const VERSION = '2cf3df1fe691';
const FILES = ["assets/appliances-DUDPU7Yb.webp","assets/arm-head-DPvWG-m0.glb","assets/bridge-CJVhkLGM.webp","assets/clocks-CrmW0kmJ.webp","assets/croon-BbbyW-WC.webp","assets/drop-BSBEp_W0.css","assets/drop-Dl8rM8oL.js","assets/drop-Ox-t41Zv.svg","assets/gen-jean-CdbShlT-.webp","assets/gen-leo-Csl5nv0b.webp","assets/gen-luca-S2EjbQ3V.webp","assets/gomoku-Cg_3cvWi.css","assets/gomoku-WR6UwlAQ.js","assets/gomoku-zvhhpXJW.svg","assets/gomokuWorker-BlmT93hC.js","assets/hockey-C21NpB66.js","assets/hockey-DzCuNRxW.css","assets/index-CF8sKnlF.css","assets/index-xuS8RH_d.js","assets/kou-gen-CfffIAgs.webp","assets/kou-kin-Dkyv75VX.webp","assets/kou-taiga-CzaOHZuj.webp","assets/kou-tetsu-zQCTqeML.webp","assets/lightsout-Blqo5JQE.js","assets/lightsout-ixDmsFlX.svg","assets/lightsout-q67gHU9m.css","assets/luxury-DXtvWj0b.webp","assets/mascots-jK7mVfpP.webp","assets/mask-4sCQXVaZ.webp","assets/plush2-BkAaqTiz.webp","assets/plush3-DJumm7x3.webp","assets/pusher-DfqwihHZ.webp","assets/reversi-AN6wyQhC.css","assets/reversi-BY4srT15.js","assets/reversiWorker-B5_80FCl.js","assets/rod-DsH2xmuH.webp","assets/sen-gou-CRJwmLrm.webp","assets/sen-jin-Cr2nAO0H.webp","assets/sen-kai-BwZGKskd.webp","assets/slant-ti8g2yCu.webp","assets/snack-photos-D3zRmfYX.webp","assets/standard-Dj2Gsd3M.webp","assets/sudoku-5yXH0aMt.js","assets/sudoku-ChZCgrcu.css","assets/sudoku-Dq6cbLmD.svg","assets/sudokuWorker-CM9CcclB.js","assets/tabby-C3vefzqX.webp","assets/takoyaki-DnqX_Zxd.webp","assets/timer-DqR5NrTd.webp","assets/tower-D01QZ7sT.webp","assets/triple-COEpxxAK.webp","assets/worker-xYoLWJyX.js","icon-180.png","icon-192.png","icon-512.png","icon-maskable-512.png","icon.svg","index.html","manifest.webmanifest","og.jpg","sfx/sfx.wav"];
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
