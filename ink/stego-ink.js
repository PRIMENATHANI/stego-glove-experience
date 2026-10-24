/*! STEGO Ink v1.0.0 — a paint-splat easter egg for stegosafety.com. One script, no markup.
    Tap the splat button (bottom right) to switch ink on; every tap on the page then lands a splat in the STEGO technology
    colours; the ink stays on the screen while the page scrolls; the water drop washes it off. Esc washes too.
    Options via data attributes on the script tag: data-colors="#hex,#hex" (default: TEGX blue, GRYX teal, SHELL red,
    ChemBlock gold, KYNO lime), data-trigger="button|logo" (default button). Public API: window.StegoInk.{on,off,splat(x,y),wash}. */
(function () {
  'use strict';
  if (window.StegoInk) return;
  var script = document.currentScript;
  var COLORS = ((script && script.getAttribute('data-colors')) || '#3F78E0,#17A39A,#E33130,#E9B92A,#AFD235').split(',').map(function (c) { return c.trim(); });
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- styles
  var css = document.createElement('style');
  css.textContent =
    '.stego-ink-canvas{position:fixed;inset:0;width:100%;height:100%;z-index:2147483000;pointer-events:none;touch-action:pan-y pan-x}' +
    '.stego-ink-canvas.on{pointer-events:auto;cursor:crosshair}' +
    '.stego-ink-btn{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(18px,env(safe-area-inset-bottom));z-index:2147483001;width:56px;height:56px;border:0;padding:0;background:transparent;cursor:pointer;-webkit-tap-highlight-color:transparent;filter:drop-shadow(0 6px 16px rgba(0,0,0,.35));transition:transform .25s cubic-bezier(.2,.8,.2,1)}' +
    '.stego-ink-btn:hover{transform:scale(1.08)}.stego-ink-btn:active{transform:scale(.94)}' +
    '.stego-ink-btn svg{width:100%;height:100%;display:block;overflow:visible}' +
    '.stego-ink-btn .drop{opacity:0;transform:scale(.6);transform-origin:50% 50%;transition:opacity .25s,transform .35s cubic-bezier(.2,.8,.2,1)}' +
    '.stego-ink-btn .splat{transition:opacity .25s,transform .35s cubic-bezier(.2,.8,.2,1);transform-origin:50% 50%}' +
    '.stego-ink-btn.on .splat{opacity:0;transform:scale(.6)}.stego-ink-btn.on .drop{opacity:1;transform:scale(1)}' +
    '@media (prefers-reduced-motion: reduce){.stego-ink-btn,.stego-ink-btn .drop,.stego-ink-btn .splat{transition:none}}';
  document.head.appendChild(css);

  // ---------- canvas
  var canvas = document.createElement('canvas'); canvas.className = 'stego-ink-canvas'; canvas.setAttribute('aria-hidden', 'true');
  var ctx = canvas.getContext('2d'); var DPR = 1, W = 0, H = 0;
  function size() { DPR = Math.min(window.devicePixelRatio || 1, 2); W = window.innerWidth; H = window.innerHeight; canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR); draw(); }

  // ---------- button: a splat glyph and a water drop, drawn in the first ink colour
  var btn = document.createElement('button'); btn.className = 'stego-ink-btn'; btn.type = 'button'; btn.setAttribute('aria-label', 'Ink mode: tap, then tap anywhere to splat');
  btn.innerHTML =
    '<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<g class="splat"><path fill="' + COLORS[0] + '" d="M29 7c3 0 4 3 5 6s4 2 7 3 5 3 4 6-3 3-3 6 3 4 2 7-4 2-7 3-3 4-6 5-5-1-7-3-5 0-8-1-3-4-2-7-2-4-3-7 1-5 3-7 1-5 2-8 4-2 7-2 3-1 6-1z"/>' +
    '<circle fill="' + COLORS[0] + '" cx="10" cy="12" r="2.6"/><circle fill="' + COLORS[0] + '" cx="47" cy="14" r="1.8"/><circle fill="' + COLORS[0] + '" cx="46" cy="44" r="2.2"/><circle fill="' + COLORS[0] + '" cx="12" cy="45" r="1.6"/>' +
    '<ellipse fill="rgba(255,255,255,.28)" cx="22" cy="22" rx="6" ry="3.6" transform="rotate(-28 22 22)"/></g>' +
    '<g class="drop"><path fill="' + COLORS[0] + '" d="M28 9c6 9 13 17 13 25a13 13 0 0 1-26 0c0-8 7-16 13-25z"/>' +
    '<ellipse fill="rgba(255,255,255,.35)" cx="22.5" cy="33" rx="3" ry="6" transform="rotate(14 22.5 33)"/></g></svg>';

  // ---------- splats
  var splats = [], colorIndex = Math.floor(Math.random() * COLORS.length), on = false, raf = 0, washing = null;
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function makeSplat(x, y) {
    var base = Math.min(W, H) * rnd(0.17, 0.30);
    var lobes = Math.floor(rnd(4, 8)), ph = rnd(0, Math.PI * 2), amp = rnd(0.10, 0.22), lobes2 = Math.floor(rnd(9, 14)), amp2 = rnd(0.03, 0.08), ph2 = rnd(0, 6);
    var drops = []; var n = Math.floor(rnd(7, 15));
    for (var i = 0; i < n; i++) { var a = rnd(0, Math.PI * 2), d = base * rnd(1.05, 2.3), r = base * rnd(0.035, 0.14); drops.push({ a: a, d: d, r: r, tail: Math.random() < 0.45, delay: rnd(0, 0.18), dur: rnd(0.28, 0.5) }); }
    return { x: x, y: y, base: base, lobes: lobes, ph: ph, amp: amp, lobes2: lobes2, amp2: amp2, ph2: ph2, drops: drops, color: COLORS[colorIndex++ % COLORS.length], born: performance.now(), p: reduce ? 1 : 0, fall: 0, alpha: 1 };
  }
  function easeBack(t) { var c = 1.70158; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  function blobPath(s, k) {
    ctx.beginPath();
    var steps = 72;
    for (var i = 0; i <= steps; i++) {
      var t = i / steps * Math.PI * 2;
      var r = s.base * k * (1 + s.amp * Math.sin(s.lobes * t + s.ph) + s.amp2 * Math.sin(s.lobes2 * t + s.ph2));
      var px = s.x + Math.cos(t) * r, py = s.y + s.fall + Math.sin(t) * r * 0.96;
      i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
    }
    ctx.closePath();
  }
  function draw() {
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0); ctx.clearRect(0, 0, W, H);
    var now = performance.now(), live = false;
    for (var i = 0; i < splats.length; i++) {
      var s = splats[i]; var age = (now - s.born) / 1000;
      if (!reduce && s.p < 1) { s.p = Math.min(1, age / 0.42); live = true; }
      var k = easeBack(s.p) * (0.94 + 0.06 * s.p);
      ctx.globalAlpha = s.alpha; ctx.fillStyle = s.color;
      blobPath(s, k); ctx.fill();
      // wet highlight
      ctx.globalAlpha = s.alpha * 0.22; ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.ellipse(s.x - s.base * 0.28 * k, s.y + s.fall - s.base * 0.26 * k, s.base * 0.34 * k, s.base * 0.16 * k, -0.5, 0, Math.PI * 2); ctx.fill();
      // droplets
      ctx.globalAlpha = s.alpha; ctx.fillStyle = s.color;
      for (var j = 0; j < s.drops.length; j++) {
        var d = s.drops[j]; var q = reduce ? 1 : Math.min(1, Math.max(0, (age - d.delay) / d.dur)); if (q < 1) live = true;
        var dist = d.d * easeOut(q), dx = s.x + Math.cos(d.a) * dist, dy = s.y + s.fall + Math.sin(d.a) * dist * 0.96, rr = d.r * (0.6 + 0.4 * q);
        if (q <= 0) continue;
        if (d.tail) { ctx.beginPath(); ctx.moveTo(s.x + Math.cos(d.a) * dist * 0.72, s.y + s.fall + Math.sin(d.a) * dist * 0.72 * 0.96); ctx.lineTo(dx + Math.cos(d.a + 1.5) * rr * 0.9, dy + Math.sin(d.a + 1.5) * rr * 0.9); ctx.lineTo(dx + Math.cos(d.a - 1.5) * rr * 0.9, dy + Math.sin(d.a - 1.5) * rr * 0.9); ctx.closePath(); ctx.fill(); }
        ctx.beginPath(); ctx.arc(dx, dy, rr, 0, Math.PI * 2); ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
    if (washing) {
      var w = Math.min(1, (now - washing) / (reduce ? 0.01 : 900));
      for (var m = 0; m < splats.length; m++) { splats[m].fall = easeOut(w) * H * 0.9 * (0.6 + 0.4 * ((m * 7919) % 100) / 100); splats[m].alpha = 1 - w; }
      if (w < 1) live = true; else { splats = []; washing = null; }
    }
    if (live) raf = requestAnimationFrame(draw); else raf = 0;
  }
  function kick() { if (!raf) raf = requestAnimationFrame(draw); }

  // ---------- interaction: a tap is a splat; a drag is a scroll
  var downX = 0, downY = 0, downT = 0;
  canvas.addEventListener('pointerdown', function (e) { downX = e.clientX; downY = e.clientY; downT = performance.now(); });
  canvas.addEventListener('pointerup', function (e) {
    if (!on) return;
    if (Math.hypot(e.clientX - downX, e.clientY - downY) > 10 || performance.now() - downT > 600) return;
    splat(e.clientX, e.clientY);
  });
  canvas.addEventListener('click', function (e) { e.preventDefault(); });
  function splat(x, y) { splats.push(makeSplat(x, y)); if (splats.length > 60) splats.shift(); kick(); }
  function setOn(v) { on = v; canvas.classList.toggle('on', v); btn.classList.toggle('on', v); btn.setAttribute('aria-label', v ? 'Wash the ink off' : 'Ink mode: tap, then tap anywhere to splat'); }
  function wash() { if (!splats.length) { setOn(false); return; } washing = performance.now(); setOn(false); kick(); }
  btn.addEventListener('click', function () { if (on) wash(); else { setOn(true); var r = btn.getBoundingClientRect(); splat(r.left + r.width / 2, r.top + r.height / 2); } });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && (on || splats.length)) wash(); });
  window.addEventListener('resize', size);

  function mount() { document.body.appendChild(canvas); document.body.appendChild(btn); size(); }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
  window.StegoInk = { on: function () { setOn(true); }, off: function () { setOn(false); }, splat: splat, wash: wash, get active() { return on; }, version: '1.0.0' };
})();
