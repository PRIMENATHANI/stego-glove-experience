/* STEGO Try-On · scroll-driven glove fitting · v1.4.1 */
(() => {
'use strict';

/* ---------- content (ratings verified against the STEGO sell sheets, 2024-25) ---------- */
const GLOVES = [
  { code:'7095', name:'Cut Defender I', platform:'TEGX®', category:'CUT & PUNCTURE',
    title:'Light on the hand.<br><em>Firm on the edge.</em>',
    lead:'The entry to the series. A seamless TexArn™ liner rated ANSI A4 cut, a smooth PU palm for dry handling, and an EdgeLock™ cuff that holds its shape.',
    ratings:[['A4','ANSI cut'],['6','Abrasion'],['3','Puncture'],['D','EN 388 cut']],
    standards:'EN 388:2016 4443D · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II',
    accent:[159,176,204], cuff:{ base:'#2a2a2a', hem:'#141310' },
    callouts:[
      { x:0.55, y:0.12, title:'PU palm', text:'Smooth grip, dry work.' },
      { x:0.60, y:0.40, title:'TexArn™ liner', text:'Cut resistance in the yarn.' },
      { x:0.32, y:0.46, title:'Lightweight knit', text:'Breathable all shift.' },
      { x:0.50, y:0.74, title:'EdgeLock™ cuff', text:'Holds its shape.' } ] },
  { code:'7096', name:'Cut Defender II', platform:'TEGX®', category:'CUT & PUNCTURE',
    title:'Sharp parts.<br><em>Sure grip.</em>',
    lead:'A step up in cut level. The TexArn™ liner reaches ANSI A6, the rough PU palm bites into sharp components, and FlexFit™ shaping follows the hand through repeated moves.',
    ratings:[['A6','ANSI cut'],['6','Abrasion'],['4','Puncture'],['F','EN 388 cut']],
    standards:'EN 388:2016 4X43F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II',
    accent:[30,79,168], cuff:{ base:'#656465', hem:'#1c1712' },
    callouts:[
      { x:0.55, y:0.12, title:'Rough PU palm', text:'Grip on sharp parts.' },
      { x:0.60, y:0.40, title:'TexArn™ liner', text:'ANSI A6 cut.' },
      { x:0.32, y:0.46, title:'FlexFit™', text:'Moves with the hand.' },
      { x:0.50, y:0.74, title:'EdgeLock™ cuff', text:'Stays put.' } ] },
  { code:'7097', name:'Cut Defender III', platform:'TEGX®', category:'CUT & PUNCTURE',
    title:'Wet, oily,<br><em>still sharp.</em>',
    lead:'The series glove for wet and contaminated work. A TexArn™ liner rated ANSI A6 under a sandy nitrile palm; LiquiBlock™ keeps oil out and DryHold™ keeps the inside dry.',
    ratings:[['A6','ANSI cut'],['6','Abrasion'],['4','Puncture'],['F','EN 388 cut']],
    standards:'EN 388:2016 4X44F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II',
    accent:[15,155,215], cuff:{ base:'#373534', hem:'#181413' },
    callouts:[
      { x:0.55, y:0.10, title:'TruTouch™ fingertips', text:'Works a touchscreen.' },
      { x:0.60, y:0.40, title:'Sandy nitrile palm', text:'Grip, wet or oily.' },
      { x:0.32, y:0.46, title:'LiquiBlock™', text:'Oil stays out.' },
      { x:0.50, y:0.72, title:'DryHold™', text:'Dry inside.' } ] },
  { code:'7098', name:'Cut Defender Ultra', platform:'TEGX®', category:'CUT & PUNCTURE',
    title:'Sharp work.<br><em>Steady hands.</em>',
    lead:'Feels like a knit glove. Underneath, a TEGX® TexArn™ liner rated ANSI A6 cut, CutCage™ reinforcement where blades bite, and a microfoam nitrile palm that holds parts without the slip.',
    ratings:[['A6','ANSI cut'],['6','Abrasion'],['4','Puncture'],['F','EN 388 cut']],
    standards:'EN 388:2016 4X44F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II',
    accent:[63,120,224], cuff:{ base:'#15161a', hem:'#2d4f9a' },
    callouts:[
      { x:0.55, y:0.10, title:'TruTouch™ fingertips', text:'Works a touchscreen.' },
      { x:0.60, y:0.42, title:'TexArn™ liner', text:'Cut resistance built into the yarn.' },
      { x:0.32, y:0.46, title:'Precision Flex', text:'Breathable and flexible.' },
      { x:0.50, y:0.70, title:'CutCage™', text:'Reinforced where blades hit.' } ] },
];
const DETAILS = {
  '7095': { desc:'Built to hold ANSI A4 cut resistance with puncture protection for everyday sharp-edge handling. A seamless TexArn™ blended-yarn liner forms the cut-resistant structure, CutCage™ reinforcement targets the zones where cutting force concentrates, and FlexFit™ shaping with an EdgeLock™ cuff keeps the build stable from palm to wrist. Smooth PU palm for dry grip.',
    tech:[['TEGX® platform','Cut-protection system of the Cut Defender series.'],['TexArn™','Blended high-strength yarn core forming the structural foundation of cut resistance.'],['CutCage™','Reinforcement framework in the zones where cutting force concentrates.'],['EdgeLock™','Reinforced cuff construction that holds shape and resists fraying.']],
    std:[['ANSI/ISEA 105','Cut A4 · Abrasion 6 · Puncture 3 · Dexterity 5'],['EN 388:2016+A1:2018','4443D'],['EN 407:2020','X1XXXX'],['EN ISO 21420:2020','CE · Category II']],
    meta:[['Liner','TexArn™ HPPE blend, seamless'],['Coating','PU'],['Sizes','7/S · 8/M · 9/L · 10/XL · 11/2XL'],['Packing','1 pr / polybag · 144 prs / carton']] },
  '7096': { desc:'ANSI A6 cut protection for repetitive sharp-component handling. The TexArn™ blended-yarn liner forms a durable cut-resistant structure, CutCage™ reinforcement protects the high-risk zones, and FlexFit™ anatomical shaping follows natural hand movement for a stable fit. A rough PU palm gives reliable grip through repeated use.',
    tech:[['TEGX® platform','Cut-protection system of the Cut Defender series.'],['TexArn™','Blended high-strength yarn core forming the structural foundation of cut resistance.'],['CutCage™','Reinforcement framework in the zones where cutting force concentrates.'],['FlexFit™','Anatomical shaping engineered to follow natural hand movement.'],['EdgeLock™','Reinforced cuff construction that holds shape and resists fraying.']],
    std:[['ANSI/ISEA 105','Cut A6 · Abrasion 6 · Puncture 4 · Dexterity 5'],['EN 388:2016+A1:2018','4X43F'],['EN 407:2020','X1XXXX'],['EN ISO 21420:2020','CE · Category II']],
    meta:[['Liner','TexArn™ HPPE blend, seamless'],['Coating','Rough PU'],['Sizes','7/S · 8/M · 9/L · 10/XL · 11/2XL'],['Packing','1 pr / polybag · 144 prs / carton']] },
  '7097': { desc:'ANSI A6 cut protection for daily use in wet and contaminated conditions. The TexArn™ blended-yarn liner provides the cut-resistant base and CutCage™ reinforcement covers the high-risk zones. LiquiBlock™ and DryHold™ keep grip and internal dryness in oil and fluids; TruTouch™ fingertips allow precise handling and touchscreen use without removing the glove.',
    tech:[['TEGX® platform','Cut-protection system of the Cut Defender series.'],['TexArn™','Blended high-strength yarn core forming the structural foundation of cut resistance.'],['CutCage™','Reinforcement framework in the zones where cutting force concentrates.'],['LiquiBlock™','Surface-bonded liquid-repellent coating that resists oil and fluid absorption while keeping grip.'],['DryHold™','Moisture management that keeps the inside of the glove dry.'],['TruTouch™','Fingertip zones for precise handling and touchscreen use.']],
    std:[['ANSI/ISEA 105','Cut A6 · Abrasion 6 · Puncture 4 · Dexterity 5'],['EN 388:2016+A1:2018','4X44F'],['EN 407:2020','X1XXXX'],['EN ISO 21420:2020','CE · Category II']],
    meta:[['Liner','TexArn™ HPPE blend, seamless'],['Coating','Sandy nitrile'],['Sizes','7/S · 8/M · 9/L · 10/XL · 11/2XL'],['Packing','1 pr / polybag · 144 prs / carton']] },
  '7098': { desc:'Delivers ANSI A6 cut protection through an advanced TEGX® engineered liner and TexArn™ yarn technology. Built for demanding environments with resistance to cuts, abrasion, tears and fluid exposure, with CutCage™ reinforcement in high-contact zones, 360° stretch ergonomics and touchscreen-ready fingertips.',
    tech:[['TEGX® liner','High-tenacity HPPE blend cut liner.'],['TexArn™','Blended high-strength yarn core forming the structural foundation of cut resistance.'],['CutCage™','Reinforcement in the zones where blades make contact.'],['TruTouch™','Fingertip zones for precise handling and touchscreen use.'],['Microfoam nitrile','Breathable palm coating with grip in dry and light-oil conditions.'],['Precision Flex','Breathable comfort and reduced perspiration for precise handling.']],
    std:[['ANSI/ISEA 105','Cut A6 · Abrasion 6 · Puncture 4 · Dexterity 5'],['EN 388:2016+A1:2018','4X44F'],['EN 407:2020','X1XXXX'],['EN ISO 21420:2020','CE · Category II']],
    meta:[['Liner','HPPE blend'],['Coating','Microfoam nitrile'],['Sizes','7/S · 8/M · 9/L · 10/XL · 11/2XL'],['Packing','1 pr / polybag · 144 prs / carton']] },
};
const INTRO = { title:'Engineered by hazard.<br>Designed for precision.', lead:'The four Cut Defender gloves, pulled onto your hand one after another as you scroll. From ANSI A4 to A6, from dry handling to oil and water.' };

/* ---------- timeline ---------- */
// t units: [0,1) intro · [1,5) chapters · [5,5.8) outro
const ON_END = 0.28, OFF_START = 0.86, CO_START = 0.31, CO_STEP = 0.11, CO_FADE = 0.06;
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const $ = s => document.querySelector(s);
const clamp = (v,a=0,b=1) => Math.min(b, Math.max(a, v));
const ease = x => x < .5 ? 4*x*x*x : 1 - Math.pow(-2*x+2,3)/2;          // in-out cubic
const easeOut = x => 1 - Math.pow(1-x, 3);
const easeIn = x => x*x*x;
// pull-on: fast over the fingers, settles at the cuff · take-off: peels slowly, then clears the fingertips fast,
// so off → on across a chapter boundary reads as one motion instead of two stops
const onCurve = x => 1 - Math.pow(1-x, 2.2);
const offCurve = x => Math.pow(x, 2.2);
const lerp = (a,b,x) => a + (b-a)*x;

/* ---------- elements ---------- */
const stage = $('#stage'), scroller = $('#scroller'), hand = $('#hand'), canvas = $('#handCanvas');
const copy = $('#copy'), outro = $('#outro'), glow = $('#glow'), bignum = $('#bignum');
const fitStatus = $('#fitStatus'), fitLabel = fitStatus.querySelector('span');
const chips = [...document.querySelectorAll('.chip')];
const techLogo = $('#techLogo');
const TECH_LOGO = { '7095':'tegx', '7096':'tegx', '7097':'tegx', '7098':'tegx', '2055':'gryx', '9080':'shell-grd', '2023':'chemblock' };
const bgs = [...document.querySelectorAll('.bg-photo')];
const calloutLayer = $('#callouts');
const ctx = canvas.getContext('2d', { alpha:true });

/* ---------- images ---------- */
const IMG = { bare:null, glove:[null,null,null,null] };
let EXT = null;
const load = src => new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.decoding = 'async'; i.src = src; });
const ready = { bare:false, glove:[false,false,false,false] };
fetch('assets/hand/extents.json').then(r => r.json()).then(j => { EXT = j; requestRender(); });
load('assets/hand/bare.webp').then(i => { IMG.bare = i; ready.bare = true; requestRender(); });
const loadGlove = i => { if (IMG.glove[i] || loadGlove.pending?.[i]) return; (loadGlove.pending ||= {})[i] = true; load(`assets/hand/st-${GLOVES[i].code}.webp`).then(img => { IMG.glove[i] = img; ready.glove[i] = true; requestRender(); }); };
loadGlove(0);
(window.requestIdleCallback || (f => setTimeout(f, 800)))(() => { loadGlove(1); loadGlove(2); loadGlove(3); });

/* ---------- canvas sizing ---------- */
let W = 0, H = 0, DPR = 1, off = null, offCtx = null;
function size() {
  const r = canvas.getBoundingClientRect();
  DPR = Math.min(window.devicePixelRatio || 1, 2);
  W = Math.round(r.width), H = Math.round(r.height);
  canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
  off = off || document.createElement('canvas'); off.width = canvas.width; off.height = canvas.height; offCtx = off.getContext('2d');
  unitPx = window.innerHeight * (window.innerWidth <= 640 ? 1.2 : window.innerWidth <= 900 ? 1.3 : 1.5);
  layoutCallouts();
  requestRender(true);
}
let unitPx = 1;

/* ---------- state ---------- */
let target = 0, t = 0, raf = 0, lastKey = '';
let aimX = 0, aimY = 0, px = 0, py = 0, lastTime = 0, idle = 0, lastDt = 16;
let currentChapter = -2;          // -1 intro, 0..3 gloves, 4 outro
let copyProgress = -1, outroProgress = -1;
const copyChildren = [...copy.querySelectorAll('.copy-inner > *')];
const outroChildren = [...outro.querySelectorAll('.outro-inner > *')];

function onScroll() { target = clamp(window.scrollY / unitPx, 0, 5.8); requestRender(); }
function requestRender(force) { if (force) lastKey = ''; if (!raf) raf = requestAnimationFrame(tick); }
function tick(now) {
  const dt = Math.min(48, now - lastTime || 16); lastTime = now; lastDt = dt;
  const k = reduced.matches ? 1 : 1 - Math.pow(0.86, dt / 16.7);
  t += (target - t) * k; if (Math.abs(target - t) < 0.0004) t = target;
  px += (aimX - px) * 0.08; py += (aimY - py) * 0.08;
  idle = now / 1000;
  render();
  const moving = t !== target || Math.abs(px - aimX) > .001 || Math.abs(py - aimY) > .001;
  raf = (moving || !reduced.matches) ? requestAnimationFrame(tick) : 0;   // keep ticking for the idle float
}

/* ---------- timeline helpers ---------- */
function segment(tt) {
  if (tt < 1) return { phase:'intro', i:-1, u:tt };
  if (tt < 5) { const i = Math.floor(tt - 1); return { phase:'chapter', i, u:tt - 1 - i }; }
  return { phase:'outro', i:4, u:clamp((tt - 5) / 0.8) };
}
/* how far the glove i is "on": 0 bare → 1 fitted; and the direction */
function gloveProgress(u) {
  if (u < ON_END) return { p: onCurve(u / ON_END), dir:'on' };
  if (u < OFF_START) return { p: 1, dir:'hold' };
  return { p: 1 - offCurve((u - OFF_START) / (1 - OFF_START)), dir:'off' };
}

/* ---------- drawing ---------- */
function extAt(rows, yImg) { const i = clamp(Math.round(yImg / EXT.step), 0, rows.length - 1); return rows[i]; }

function render() {
  const seg = segment(t);
  const gi = seg.phase === 'chapter' ? seg.i : -1;
  const gp = gi >= 0 ? gloveProgress(seg.u) : { p:0, dir:'bare' };
  const introLift = seg.phase === 'intro' ? (1 - easeOut(clamp(seg.u / 0.55))) : 0;
  const outroDrop = seg.phase === 'outro' ? easeOut(clamp(seg.u / 0.6)) : 0;

  // hand layer transform (parallax + idle float + intro rise)
  const floatY = reduced.matches ? 0 : Math.sin(idle * 0.9) * 3;
  const lift = introLift * window.innerHeight * 0.42 + outroDrop * window.innerHeight * 0.55;
  hand.style.transform = `translate(calc(-50% + ${px * -10}px), ${lift + floatY + py * -6}px)`;
  hand.style.opacity = String(1 - outroDrop * 0.6);

  // background parallax: slow drift with t, pointer counter-move
  const drift = t * 1.1;
  bgs.forEach((b, i) => {
    const local = t - 1 - i;                       // -1..1 around the chapter
    b.style.transform = `translate3d(${px * 14}px, ${(-drift * 1.6 + local * 2.5) + py * 10}px, 0) scale(${1.06 + Math.abs(local) * 0.02})`;
    b.classList.toggle('on', gi === i);
  });
  bignum.style.transform = `translate3d(${px * -18}px, ${(-(t % 1) * 60) + py * -8}px, 0)`;

  // canvas
  drawHand(gi, gp);

  // chapter DOM updates
  setChapter(seg, gp);
  updateCallouts(seg);

  // rail
  const fill = clamp((t - 1) / 4);
  $('#railFill').style.transform = `scaleY(${fill})`;
}

function drawHand(gi, gp) {
  if (!ready.bare || !EXT) return;
  const key = `${gi}:${gp.p.toFixed(4)}:${W}x${H}:${ready.glove[gi] ? 1 : 0}`;
  if (key === lastKey) return; lastKey = key;
  const scale = (W * DPR) / EXT.w;                 // image → canvas px
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (gi < 0 || !ready.glove[gi] || gp.p <= 0) { ctx.drawImage(IMG.bare, 0, 0, canvas.width, canvas.height); return; }

  const g = GLOVES[gi], gimg = IMG.glove[gi], ex = EXT[`st-${g.code}`];
  const yTop = ex.top - 30, yCuff = ex.cuff + 6;    // image coords
  const lineImg = lerp(yTop, yCuff, gp.p);
  const line = lineImg * scale;
  // skin shows only below the opening: what is above it is inside the glove
  // (36 image px of overlap: fills any gaps in a render's cuff edge; the glove is drawn over it)
  ctx.save(); ctx.beginPath(); ctx.rect(0, line - 36 * scale, canvas.width, canvas.height); ctx.clip();
  ctx.drawImage(IMG.bare, 0, 0, canvas.width, canvas.height); ctx.restore();
  const tension = gp.dir === 'hold' ? 0 : Math.sin(Math.PI * gp.p) * 0.035;
  const row = extAt(ex.rows, clamp(lineImg, 0, EXT.h - 1));
  // the opening is a stretched cuff: never wider than ~1.3× the wrist, measured on the bare arm at the cuff row
  const wrist = extAt(EXT.bare, clamp(ex.cuff + 10, 0, EXT.h - 1));
  const wristHW = (wrist[1] - wrist[0]) / 2 * scale;
  const cx = ((row[0] + row[1]) / 2) * scale;
  const hw = Math.max(8, Math.min((row[1] - row[0]) / 2 * scale * 1.02, wristHW * 1.3));
  const ringA = gp.p < 0.995 ? 1 - clamp((gp.p - 0.93) / 0.065) : 0;   // fades as it meets the real cuff
  const rx = hw * (1.04 + tension * 2), ry = Math.max(6 * DPR, hw * 0.26);

  // 1 · opening shadow on the skin just below the cuff line
  if (ringA > 0) {
    const sh = ctx.createRadialGradient(cx, line + ry * 0.4, hw * 0.15, cx, line + ry * 0.4, hw * 1.2);
    sh.addColorStop(0, 'rgba(0,0,0,.5)'); sh.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.save(); ctx.globalCompositeOperation = 'source-atop'; ctx.globalAlpha = ringA; ctx.fillStyle = sh;
    ctx.fillRect(cx - hw * 1.5, line, hw * 3, hw * 1.3); ctx.restore();
    // the inside of the opening, drawn first so the glove covers its far half
    ctx.save(); ctx.globalAlpha = ringA;
    ctx.beginPath(); ctx.ellipse(cx, line, rx, ry, 0, 0, Math.PI); ctx.closePath();
    ctx.fillStyle = 'rgba(10,10,12,.9)'; ctx.fill(); ctx.restore();
  }

  // 2 · glove, clipped above the cuff line, slightly stretched while sliding
  ctx.save();
  ctx.beginPath(); ctx.rect(0, 0, canvas.width, line); ctx.clip();
  ctx.translate(cx, 0); ctx.scale(1 + tension, 1); ctx.translate(-cx, 0);
  ctx.drawImage(gimg, 0, 0, canvas.width, canvas.height);
  ctx.restore();

  // 3 · the front of the cuff band travelling down the hand
  if (ringA > 0) {
    ctx.save(); ctx.globalAlpha = ringA;
    ctx.beginPath(); ctx.ellipse(cx, line, rx, ry, 0, 0.02, Math.PI - 0.02);
    ctx.lineWidth = Math.max(4, hw * 0.17); ctx.strokeStyle = g.cuff.base; ctx.lineCap = 'round'; ctx.stroke();
    ctx.beginPath(); ctx.ellipse(cx, line + ry * 0.5, rx * 0.985, ry * 0.8, 0, 0.18, Math.PI - 0.18);
    ctx.lineWidth = Math.max(1.5, hw * 0.035); ctx.strokeStyle = g.cuff.hem; ctx.stroke();
    const sheen = ctx.createLinearGradient(cx - rx, 0, cx + rx, 0);
    sheen.addColorStop(0, 'rgba(255,255,255,0)'); sheen.addColorStop(0.42, 'rgba(255,255,255,.2)'); sheen.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.beginPath(); ctx.ellipse(cx, line - ry * 0.15, rx, ry, 0, 0.25, Math.PI - 0.25);
    ctx.lineWidth = Math.max(2, hw * 0.05); ctx.strokeStyle = sheen; ctx.stroke();
    ctx.restore();
  }

  // 4 · light sweep across the fitted glove, once, right after it seats
  const sweep = gp.dir === 'hold' ? clamp((t - Math.floor(t) - ON_END) / 0.18) : 0;
  if (sweep > 0 && sweep < 1 && !reduced.matches) {
    offCtx.setTransform(1, 0, 0, 1, 0, 0); offCtx.clearRect(0, 0, off.width, off.height);
    offCtx.globalCompositeOperation = 'source-over';
    offCtx.drawImage(gimg, 0, 0, off.width, off.height);
    offCtx.globalCompositeOperation = 'source-in';
    const pos = lerp(-0.3, 1.3, sweep), span = 0.18;
    const lg = offCtx.createLinearGradient(0, 0, off.width, off.height);
    lg.addColorStop(clamp(pos - span), 'rgba(255,255,255,0)'); lg.addColorStop(clamp(pos), 'rgba(255,255,255,.55)'); lg.addColorStop(clamp(pos + span), 'rgba(255,255,255,0)');
    offCtx.fillStyle = lg; offCtx.fillRect(0, 0, off.width, off.height);
    ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.globalAlpha = Math.sin(Math.PI * sweep) * 0.9;
    ctx.beginPath(); ctx.rect(0, 0, canvas.width, line); ctx.clip();
    ctx.drawImage(off, 0, 0); ctx.restore();
    lastKey = '';                                    // keep animating through the sweep
  }
}

/* ---------- DOM: chapter copy, accent, status ---------- */
function setChapter(seg, gp) {
  const ch = seg.phase === 'intro' ? -1 : seg.phase === 'outro' ? 4 : seg.i;
  if (ch !== currentChapter) {
    currentChapter = ch;
    const g = GLOVES[ch];
    const rgb = g ? g.accent : [63,120,224];
    document.documentElement.style.setProperty('--accent-rgb', rgb.join(','));
    chips.forEach((c, i) => c.classList.toggle('on', i === ch));
    bignum.textContent = String(Math.max(1, ch + 1)).padStart(2, '0');
    $('#railTop').textContent = String(Math.max(0, ch + 1)).padStart(2, '0');
    if (g) { techLogo.src = `assets/tech/${TECH_LOGO[g.code]}.webp`; techLogo.alt = `${g.platform} technology`; techLogo.classList.add('on'); }
    else techLogo.classList.remove('on');
    if (ch >= 0 && ch < 4) {
      $('#chapterNo').textContent = String(ch + 1).padStart(2, '0');
      $('#eyebrow').textContent = `${g.platform}  ·  ${g.category}`;
      $('#title').innerHTML = g.title;
      $('#lead').textContent = g.lead;
      $('#ratings').innerHTML = g.ratings.map(([v, l]) => `<div class="rating"><b>${v}</b><span>${l}</span></div>`).join('');
      $('#standards').textContent = g.standards;
      const si = $('#stdIcons'); si.src = `assets/std/st-${g.code}.webp`; si.alt = g.standards; si.style.display = '';
      $('#actions').innerHTML = `<button class="btn btn-primary btn-tiny" type="button" data-details="${ch}">Glove details</button><a class="btn btn-ghost btn-tiny" href="https://stegosafety.com/product/st-${g.code}/" target="_blank" rel="noopener">Visit ST-${g.code}</a>`;
      $('#announce').textContent = `${g.name}, ST-${g.code}. ${g.category.toLowerCase()}. ${g.lead}`;
      buildCallouts(g);
    } else if (ch === -1) {
      $('#chapterNo').textContent = '00';
      $('#eyebrow').textContent = 'STEGO TRY-ON';
      $('#title').innerHTML = INTRO.title;
      $('#lead').textContent = INTRO.lead;
      $('#ratings').innerHTML = ''; $('#standards').textContent = ''; $('#stdIcons').style.display = 'none';
      $('#actions').innerHTML = `<span class="scroll-cue" id="scrollCue"><i></i>SCROLL · STANDARDS TO FIT</span>`;
      $('#announce').textContent = 'Your bare hand. Scroll to pull on four STEGO gloves.';
      calloutLayer.innerHTML = '';
    } else {
      calloutLayer.innerHTML = '';
    }
  }
  // copy entrance / exit, driven by scroll so it is deterministic (no CSS transitions)
  let cp = 0;
  if (seg.phase === 'intro') cp = 1 - clamp((seg.u - 0.62) / 0.2);
  else if (seg.phase === 'chapter') cp = Math.min(clamp((seg.u - 0.04) / 0.16), 1 - clamp((seg.u - (OFF_START + 0.02)) / 0.1));
  if (cp !== copyProgress) {
    copyProgress = cp;
    copy.style.visibility = cp <= 0 ? 'hidden' : '';
    copyChildren.forEach((el, i) => {
      const a = easeOut(clamp((cp - i * 0.07) / (1 - i * 0.07)));
      el.style.opacity = String(a);
      el.style.transform = `translateY(${(1 - a) * 18}px)`;
    });
  }
  const oa = seg.phase === 'outro' ? easeOut(clamp((seg.u - 0.2) / 0.45)) : 0;
  if (oa !== outroProgress) {
    outroProgress = oa;
    outro.style.opacity = String(oa); outro.style.pointerEvents = oa > 0.5 ? 'auto' : 'none';
    outroChildren.forEach((el, i) => {
      const a = easeOut(clamp((oa - i * 0.1) / (1 - i * 0.1)));
      el.style.opacity = String(a); el.style.transform = `translateY(${(1 - a) * 16}px)`;
    });
  }

  // fit status + glow
  let label = 'YOUR HAND', cls = '';
  if (seg.phase === 'chapter') {
    if (gp.dir === 'on') { label = 'PULLING ON'; cls = 'fitting'; }
    else if (gp.dir === 'hold') { label = `ST-${GLOVES[seg.i].code} FITTED`; cls = 'done'; }
    else { label = 'TAKING OFF'; cls = 'fitting'; }
  } else if (seg.phase === 'outro') label = 'TRIAL PAIRS AVAILABLE';
  if (fitLabel.textContent !== label) { fitLabel.textContent = label; fitStatus.className = 'fit-status ' + cls; }
  fitStatus.style.opacity = seg.phase === 'outro' ? '0' : '';
  const energy = seg.phase === 'chapter' ? (gp.dir === 'hold' ? 0.75 : 0.5 + Math.sin(Math.PI * gp.p) * 0.6) : 0.35;
  glow.style.opacity = String(energy);
}

/* ---------- callouts (SVG overlay on the hand) ---------- */
let calloutNodes = [];
function wrapWords(str, max) {
  const out = []; let line = '';
  str.split(' ').forEach(w => { if ((line + ' ' + w).trim().length > max && line) { out.push(line); line = w; } else line = (line + ' ' + w).trim(); });
  if (line) out.push(line); return out.slice(0, 3);
}
function buildCallouts(g) {
  calloutLayer.innerHTML = '';
  calloutNodes = g.callouts.map((c, i) => {
    const ns = 'http://www.w3.org/2000/svg';
    const grp = document.createElementNS(ns, 'g'); grp.setAttribute('class', 'co');
    const pulse = document.createElementNS(ns, 'circle'); pulse.setAttribute('class', 'pulse'); pulse.setAttribute('r', '5');
    const dot = document.createElementNS(ns, 'circle'); dot.setAttribute('class', 'dot'); dot.setAttribute('r', '4');
    const path = document.createElementNS(ns, 'path');
    const label = document.createElementNS(ns, 'g'); label.setAttribute('class', 'co-label');
    const t1 = document.createElementNS(ns, 'text'); t1.setAttribute('class', 'co-title'); t1.textContent = c.title;
    const t2 = document.createElementNS(ns, 'text'); t2.setAttribute('class', 'co-text');
    label.append(t1, t2); grp.append(pulse, dot, path, label); calloutLayer.appendChild(grp);
    return { c, grp, pulse, dot, path, label, t1, t2 };
  });
  layoutCallouts();
}
function layoutCallouts() {
  if (!calloutNodes.length) return;
  const w = hand.clientWidth, h = hand.clientHeight;
  calloutLayer.setAttribute('viewBox', `0 0 ${w} ${h}`);
  const phone = window.innerWidth <= 900;
  const ns = 'http://www.w3.org/2000/svg';
  const maxChars = phone ? 24 : 34, lineH = phone ? 13 : 14;
  const setText = (t, lines, x, y, anchor) => {
    t.textContent = ''; t.setAttribute('x', x); t.setAttribute('y', y); t.setAttribute('text-anchor', anchor);
    lines.forEach((ln, k) => { const ts = document.createElementNS(ns, 'tspan'); ts.setAttribute('x', x); ts.setAttribute('dy', k ? lineH : 0); ts.textContent = ln; t.appendChild(ts); });
  };
  if (!phone) {
    const lx = w * 0.80 + 10;                                // label column, just right of the hand
    const minGap = 78;
    const order = calloutNodes.map((n, i) => ({ i, y: n.c.y * h })).sort((a, b) => a.y - b.y);
    for (let k = 1; k < order.length; k++) order[k].y = Math.max(order[k].y, order[k - 1].y + minGap);
    for (let k = order.length - 2; k >= 0; k--) order[k].y = Math.min(order[k].y, order[k + 1].y - minGap);
    order.forEach(o => {
      const n = calloutNodes[o.i];
      const x = n.c.x * w, y = n.c.y * h, ly = o.y;
      const elbow = x + (lx - x) * 0.6;
      n.pulse.setAttribute('cx', x); n.pulse.setAttribute('cy', y);
      n.dot.setAttribute('cx', x); n.dot.setAttribute('cy', y);
      n.path.setAttribute('d', `M${x},${y} L${elbow},${ly} L${lx},${ly}`);
      setText(n.t1, [n.c.title], lx + 8, ly - 5, 'start');
      setText(n.t2, wrapWords(n.c.text, maxChars), lx + 8, ly + 12, 'start');
    });
    return;
  }
  // phone / tablet: the hand fills the width, so labels sit left and right of it, alternating by the point's side
  const padL = Math.max(10, -hand.getBoundingClientRect().left + 10), padR = w - Math.max(10, hand.getBoundingClientRect().right - window.innerWidth + 10);
  const sides = { left: [], right: [] };
  calloutNodes.forEach((n, i) => (n.c.x < 0.5 ? sides.left : sides.right).push({ i, y: n.c.y * h }));
  // balance: if one side holds all four, move the ones nearest the centre over
  while (sides.right.length - sides.left.length > 1) sides.left.push(sides.right.splice(sides.right.reduce((m, o, k, a) => calloutNodes[o.i].c.x < calloutNodes[a[m].i].c.x ? k : m, 0), 1)[0]);
  while (sides.left.length - sides.right.length > 1) sides.right.push(sides.left.splice(sides.left.reduce((m, o, k, a) => calloutNodes[o.i].c.x > calloutNodes[a[m].i].c.x ? k : m, 0), 1)[0]);
  const minGap = 62;
  Object.entries(sides).forEach(([side, list]) => {
    list.sort((a, b) => a.y - b.y);
    for (let k = 1; k < list.length; k++) list[k].y = Math.max(list[k].y, list[k - 1].y + minGap);
    for (let k = list.length - 1; k >= 0; k--) list[k].y = Math.min(list[k].y, h * 0.44 - (list.length - 1 - k) * minGap);
    list.forEach(o => {
      const n = calloutNodes[o.i];
      const x = n.c.x * w, y = n.c.y * h, ly = Math.max(h * 0.05, Math.min(o.y, h * 0.44));
      const lx = side === 'left' ? padL : padR;
      const elbow = x + (lx - x) * 0.45;
      n.pulse.setAttribute('cx', x); n.pulse.setAttribute('cy', y);
      n.dot.setAttribute('cx', x); n.dot.setAttribute('cy', y);
      n.path.setAttribute('d', `M${x},${y} L${elbow},${ly} L${lx},${ly}`);
      const anchor = side === 'left' ? 'start' : 'end';
      setText(n.t1, [n.c.title], lx, ly - 5, anchor);
      setText(n.t2, wrapWords(n.c.text, maxChars), lx, ly + 11, anchor);
    });
  });
}
function updateCallouts(seg) {
  if (!calloutNodes.length) return;
  calloutNodes.forEach((n, i) => {
    const start = CO_START + i * CO_STEP;
    let a = 0;
    if (seg.phase === 'chapter') {
      const inA = easeOut(clamp((seg.u - start) / CO_FADE));
      const outA = 1 - clamp((seg.u - (OFF_START - 0.06)) / 0.05);
      a = Math.min(inA, outA);
    }
    if (n.a === a) return; n.a = a;
    n.grp.style.opacity = String(a);
    n.path.style.strokeDashoffset = String(400 * (1 - Math.min(1, a * 1.25)));
    const la = clamp((a - 0.35) / 0.65);
    n.label.style.opacity = String(la);
    n.label.style.transform = `translateY(${(1 - la) * 8}px)`;
    n.pulse.style.display = a > 0.95 ? '' : 'none';
  });
}

/* ---------- details dialog ---------- */
const dlg = $('#details');
function openDetails(i) {
  const g = GLOVES[i], d = DETAILS[g.code];
  $('#dImage').src = `assets/pack/st-${g.code}.webp`; $('#dImage').alt = `STEGO ST-${g.code} ${g.name}`;
  $('#dNo').textContent = String(i + 1).padStart(2, '0'); $('#dPlatform').textContent = `${g.platform}  ·  ${g.category}`;
  $('#dTitle').innerHTML = `ST-${g.code}<br>${g.name}`; $('#dDesc').textContent = d.desc;
  $('#dTech').innerHTML = d.tech.map(([t, x]) => `<li><b>${t}</b> — ${x}</li>`).join('');
  $('#dStdImg').src = `assets/std/st-${g.code}.webp`; $('#dStdImg').alt = g.standards;
  $('#dStd').innerHTML = d.std.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');
  $('#dMeta').innerHTML = d.meta.map(([k, v]) => `<span>${k}: <b>${v}</b></span>`).join('');
  $('#dLink').href = `https://stegosafety.com/product/st-${g.code}/`;
  dlg.showModal();
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-details]'); if (b) openDetails(Number(b.dataset.details));
});
$('#dClose').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

/* ---------- navigation ---------- */
function goTo(i) {
  const tt = i < 0 ? 0 : i >= 4 ? 5.45 : 1 + i + 0.42;
  window.scrollTo({ top: tt * unitPx, behavior: reduced.matches ? 'instant' : 'smooth' });
}
chips.forEach(c => c.addEventListener('click', () => goTo(Number(c.dataset.i))));
window.addEventListener('keydown', e => {
  if (e.target !== document.body) return;
  if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); goTo(Math.min(4, currentChapter + 1)); }
  if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); goTo(Math.max(-1, currentChapter - 1)); }
});

/* ---------- pointer parallax ---------- */
window.addEventListener('pointermove', e => {
  if (e.pointerType !== 'mouse' || reduced.matches) return;
  aimX = e.clientX / window.innerWidth - 0.5; aimY = e.clientY / window.innerHeight - 0.5;
  requestRender();
}, { passive:true });
document.addEventListener('pointerleave', () => { aimX = aimY = 0; requestRender(); });

/* ---------- boot ---------- */
window.addEventListener('scroll', onScroll, { passive:true });
window.addEventListener('resize', () => { size(); onScroll(); });
reduced.addEventListener?.('change', () => requestRender(true));
size(); onScroll(); requestRender(true);
})();
