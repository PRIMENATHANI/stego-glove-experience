/* STEGO Try-On · scroll-driven glove fitting · v1.4.1 */
(() => {
'use strict';

/* ---------- content (ratings verified against the STEGO sell sheets, 2024-25) ---------- */
const GLOVES = [
  { code:"7020", name:"Optimax Palm Grip", platform:"GRYX™", category:"MECHANICAL & MULTI-PURPOSE",
    title:"Tools all day.<br><em>Hands still fresh.</em>",
    lead:"The workshop glove. A seamless knit liner with a smooth PU palm for dry handling, CoreForm™ structure that keeps its shape and a FlexFit™ contour that moves with the hand.",
    ratings:[["4", "Abrasion"], ["2", "Puncture"], ["A1", "ANSI cut"], ["5", "Dexterity"]],
    standards:"EN 388:2016 4131A · ANSI/ISEA 105 · CE Cat II",
    accent:[120, 125, 135], cuff:{ base:"#3b3c39", hem:"#7b6453" },
    callouts:[ { x:0.55, y:0.12, title:"Smooth PU palm", text:"Dry grip, fine feel." }, { x:0.6, y:0.4, title:"CoreForm™", text:"Keeps its shape." }, { x:0.32, y:0.46, title:"FlexFit™", text:"Moves with the hand." }, { x:0.5, y:0.74, title:"EdgeLock™ cuff", text:"Stays put." } ] },
  { code:"6035", name:"Optiflex", platform:"GRYX™", category:"MECHANICAL & MULTI-PURPOSE",
    title:"Seen on site.<br><em>Sure on the rail.</em>",
    lead:"High-visibility knit with a latex foam palm that locks onto wet timber, steel and rope. A CoreArn™ liner that will not distort, FlexFit™ shaping for a tired hand late in the shift.",
    ratings:[["4", "Abrasion"], ["2", "Puncture"], ["A1", "ANSI cut"], ["5", "Dexterity"]],
    standards:"EN 388:2016 3131X · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[200, 225, 40], cuff:{ base:"#d2e043", hem:"#907433" },
    callouts:[ { x:0.55, y:0.12, title:"Latex foam palm", text:"Grip on wet timber." }, { x:0.6, y:0.4, title:"Hi-vis knit", text:"Seen in low light." }, { x:0.32, y:0.46, title:"CoreArn™ liner", text:"Holds its shape." }, { x:0.5, y:0.72, title:"FlexFit™", text:"Follows the hand." } ] },
  { code:"6014", name:"Flexilite", platform:"GRYX™", category:"MECHANICAL & MULTI-PURPOSE",
    title:"Rough work.<br><em>Light glove.</em>",
    lead:"Crinkle latex over a light seamless knit: the glove for bricks, blocks and general handling where grip matters more than finesse. CoreForm™ keeps the shape, FlexFit™ keeps the fit.",
    ratings:[["3", "Abrasion"], ["2", "Puncture"], ["A1", "ANSI cut"], ["5", "Dexterity"]],
    standards:"EN 388:2016 3131X · ANSI/ISEA 105 · CE Cat II",
    accent:[200, 60, 50], cuff:{ base:"#c5231e", hem:"#792f22" },
    callouts:[ { x:0.55, y:0.12, title:"Crinkle latex palm", text:"Grip on rough surfaces." }, { x:0.6, y:0.4, title:"Lightweight knit", text:"No bulk." }, { x:0.32, y:0.46, title:"CoreForm™", text:"Keeps its shape." }, { x:0.5, y:0.72, title:"FlexFit™", text:"Follows the hand." } ] },
  { code:"2015", name:"Tactilite", platform:"GRYX™", category:"MECHANICAL · ESD",
    title:"Static-safe.<br><em>Fingertip fine.</em>",
    lead:"For electronics, panels and anything that must not spark. An ESD-safe breathable liner with controlled static dissipation, a micro-foam nitrile palm with 360° tactility, TruTouch™ tips for the screen.",
    ratings:[["4", "Abrasion"], ["2", "Puncture"], ["A1", "ANSI cut"], ["ESD", "EN 16350"]],
    standards:"EN 388:2016 4131A · EN 407:2020 X1XXXX · EN 16350:2014 · ANSI/ISEA 105 · CE Cat II",
    accent:[110, 130, 150], cuff:{ base:"#3d3937", hem:"#593f2f" },
    callouts:[ { x:0.55, y:0.1, title:"TruTouch™ fingertips", text:"Works a touchscreen." }, { x:0.6, y:0.4, title:"ESD-safe liner", text:"Static drains away." }, { x:0.32, y:0.46, title:"AirWeave™ knit", text:"Cool all shift." }, { x:0.5, y:0.72, title:"Micro-foam palm", text:"Light, 360° feel." } ] },
  { code:"2050", name:"Tacti-Vanta", platform:"GRYX™", category:"MECHANICAL & MULTI-PURPOSE",
    title:"Small parts.<br><em>Big grip.</em>",
    lead:"Ultra-light engineered knit for intricate handling, with a sandy nitrile palm that holds on dry, oily and greasy surfaces. CoreArn™ and FlexHold™ keep the fit through every flex.",
    ratings:[["4", "Abrasion"], ["2", "Puncture"], ["A1", "ANSI cut"], ["5", "Dexterity"]],
    standards:"EN 388:2016 4131A · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[40, 60, 150], cuff:{ base:"#1c223a", hem:"#45372e" },
    callouts:[ { x:0.55, y:0.12, title:"Sandy nitrile palm", text:"Grip, dry or greasy." }, { x:0.6, y:0.4, title:"CoreArn™ liner", text:"Will not distort." }, { x:0.32, y:0.46, title:"FlexHold™", text:"Fit holds under flex." }, { x:0.5, y:0.72, title:"DryHold™", text:"Dry inside." } ] },
  { code:'2055', name:'Tacti-Air', platform:'GRYX™', category:'MECHANICAL & MULTI-PURPOSE',
    title:'Forget it\'s on.<br><em>Until you grip.</em>',
    lead:'The everyday glove. A seamless knit you stop noticing, with a sandy nitrile palm that bites into boxes, tools and strapping. Abrasion 5, puncture 2, cut A1, touchscreen fingertip.',
    ratings:[['5','Abrasion'],['2','Puncture'],['A1','ANSI cut'],['5','Dexterity']],
    standards:'EN 388:2016 4132X · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II',
    accent:[23,163,154], cuff:{ base:'#4a1f26', hem:'#e8c21b' },
    callouts:[
      { x:0.55, y:0.11, title:'TruTouch™ fingertips', text:'Works a touchscreen.' },
      { x:0.62, y:0.38, title:'CoreArn™ liner', text:'Keeps its shape.' },
      { x:0.30, y:0.40, title:'Sandy nitrile palm', text:'Grip, dry or oily.' },
      { x:0.50, y:0.65, title:'Ergonomic contour', text:'Comfortable all day.' } ] },
  { code:"2066", name:"Nitri-Max", platform:"GRYX™", category:"MECHANICAL · FULLY COATED",
    title:"Wet, oily,<br><em>fully sealed.</em>",
    lead:"Fully coated sandy nitrile for wet and oily mechanical work: abrasion 6, ESD-safe, LiquiBlock™ to keep fluid out and TaskFlex™ mapping so a full coat still bends where the hand does.",
    ratings:[["6", "Abrasion"], ["2", "Puncture"], ["A1", "ANSI cut"], ["ESD", "EN 16350"]],
    standards:"EN 388:2016 4131A · EN 407:2020 X1XXXX · EN 16350:2014 · ANSI/ISEA 105 · CE Cat II",
    accent:[30, 120, 220], cuff:{ base:"#3b3b3d", hem:"#b4815d" },
    callouts:[ { x:0.55, y:0.12, title:"Full nitrile coat", text:"Sealed to the cuff." }, { x:0.6, y:0.4, title:"Sandy finish", text:"Grip in fluid." }, { x:0.32, y:0.46, title:"TaskFlex™", text:"Bends at the stress zones." }, { x:0.5, y:0.72, title:"LiquiBlock™", text:"Oil stays out." } ] },
  { code:"2067", name:"Nitri-Max Thermo", platform:"GRYX™", category:"MECHANICAL · COLD",
    title:"Cold store, oily steel.<br><em>Warm hands.</em>",
    lead:"Winter and cold-store mechanical work: a brushed acrylic terry liner under a full double-dipped sandy nitrile coat, A4 cut, abrasion 6, CoreTherm™ warmth and LiquiBlock™ against oil and water.",
    ratings:[["A4", "ANSI cut"], ["6", "Abrasion"], ["4", "Puncture"], ["X2X", "EN 511 cold"]],
    standards:"EN 388:2016 4X42D · EN 407:2020 X2XXXX · EN 511:2006 X2X · ANSI/ISEA 105 · CE Cat II",
    accent:[20, 100, 210], cuff:{ base:"#1d1d1d", hem:"#29221d" }, url:"https://stegosafety.com/product/nitri-max-thermo-st-2067/",
    callouts:[ { x:0.55, y:0.1, title:"TruTouch™ fingertips", text:"Works a touchscreen." }, { x:0.6, y:0.4, title:"Double-dipped nitrile", text:"Oil and water out." }, { x:0.32, y:0.46, title:"CoreTherm™ liner", text:"Warm in the cold." }, { x:0.5, y:0.72, title:"TaskFlex™", text:"Bends where you do." } ] },
];
const DETAILS = {
  "7020": { desc:"Flexible mechanical gloves with a seamless knit liner and a smooth PU grip for general handling: reliable resistance to surface wear during tool work, CoreForm™ reinforcement that stabilises the glove shape under mechanical stress, FlexFit™ anatomical shaping and precision grip control through repeated use.",
    tech:[["GRYX™ platform", "Mechanical-protection system behind the Optimax series."], ["CoreForm™", "Structural reinforcement that stabilises glove shape and resists collapse under mechanical stress."], ["FlexFit™", "Anatomical shaping engineered to follow natural hand movement."], ["EdgeLock™", "Reinforced cuff construction that holds shape and resists fraying."]],
    std:[["ANSI/ISEA 105", "Abrasion 4 · Puncture 2 · Cut A1 · Dexterity 5"], ["EN 388:2016+A1:2018", "4131A"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "Seamless knit"], ["Coating", "Smooth PU palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "6035": { desc:"Premium high-visibility gloves with latex microsurface technology for grip, dexterity and handling control. A lightweight liner without bulk, CoreArn™ reinforcement that resists distortion and material fatigue, FlexFit™ anatomical shaping and a latex foam coating for grip confidence and less hand fatigue.",
    tech:[["GRYX™ platform", "Mechanical-protection system behind the Optiflex series."], ["CoreArn™", "Reinforced liner framework that resists distortion and material fatigue over extended use."], ["FlexFit™", "Anatomical shaping engineered to follow natural hand movement."], ["Latex microsurface", "Foam latex coating with superior grip and reduced fatigue."]],
    std:[["ANSI/ISEA 105", "Abrasion 4 · Puncture 2 · Cut A1 · Dexterity 5"], ["EN 388:2016+A1:2018", "3131X"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "Lightweight hi-vis knit"], ["Coating", "Latex foam palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "6014": { desc:"Lightweight, flexible mechanical gloves with a high-resistance crinkle latex grip. Reliable resistance to surface wear and material breakdown during tool work, CoreForm™ structural reinforcement that resists collapse under mechanical stress, FlexFit™ anatomical shaping and a liner that stays comfortable without bulk.",
    tech:[["GRYX™ platform", "Mechanical-protection system behind the Flexilite series."], ["CoreForm™", "Structural reinforcement that stabilises glove shape and resists collapse under mechanical stress."], ["FlexFit™", "Anatomical shaping engineered to follow natural hand movement."], ["Crinkle latex", "High-resistance grip coating for rough handling."]],
    std:[["ANSI/ISEA 105", "Abrasion 3 · Puncture 2 · Cut A1 · Dexterity 5"], ["EN 388:2016+A1:2018", "3131X"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "Seamless knit, lightweight"], ["Coating", "Crinkle latex palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2015": { desc:"Anti-static mechanical gloves with an ultra-lightweight liner and micro-foam coating. The ESD-safe breathable liner reduces heat build-up while giving controlled static dissipation for long tasks; FlexHold™ limits over-flex and preserves the grip structure; AirWeave™ keeps airflow; the micro-foam nitrile palm gives lightweight breathability with 360° tactility.",
    tech:[["GRYX™ platform", "Mechanical-protection system behind the Tacti series."], ["ESD-safe liner", "Controlled static dissipation to EN 16350."], ["FlexHold™", "Stability-focused construction that limits over-flex and preserves fit and grip structure."], ["AirWeave™", "Breathable knit structure that promotes airflow and thermal regulation."], ["TruTouch™", "Fingertip zones for precise handling and touchscreen use."]],
    std:[["ANSI/ISEA 105", "Abrasion 4 · Puncture 2 · Cut A1 · Dexterity 5"], ["EN 388:2016+A1:2018", "4131A"], ["EN 407:2020", "X1XXXX"], ["EN 16350:2014", "Electrostatic properties"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "Ultra-lightweight ESD knit"], ["Coating", "Micro-foam nitrile palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2050": { desc:"Ultra-lightweight advanced multi-purpose glove with a sandy nitrile coating for tactility, dexterity and grip. The engineered knit gives tactile sensitivity and flexibility for intricate handling with reliable abrasion resistance; CoreArn™ and FlexHold™ keep shape and grip through repeated flex and load; AirWeave™ and DryHold™ keep the hand cool and dry.",
    tech:[["GRYX™ platform", "Mechanical-protection system behind the Tacti series."], ["CoreArn™", "Reinforced liner framework that resists distortion and material fatigue over extended use."], ["FlexHold™", "Stability-focused construction that limits over-flex and preserves fit and grip structure."], ["AirWeave™", "Breathable knit structure that promotes airflow and thermal regulation."], ["DryHold™", "Internal moisture control that wicks sweat and keeps hand positioning stable."]],
    std:[["ANSI/ISEA 105", "Abrasion 4 · Puncture 2 · Cut A1 · Dexterity 5"], ["EN 388:2016+A1:2018", "4131A"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "Ultra-lightweight engineered knit"], ["Coating", "Sandy nitrile palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  '2055': { desc:'Constructed with a flexible polyester and spandex liner and a sandy nitrile palm coating. Reliable grip, lasting comfort and dependable mechanical protection for everyday industrial work: assembly, logistics, tools and maintenance.',
    tech:[['GRYX™ platform','Mechanical-protection system behind the Tacti series.'],['CoreArn™','Reinforced liner framework that resists distortion and material fatigue.'],['TruTouch™','Fingertip zones for precise handling and touchscreen use.'],['DryHold™','Moisture-wicking liner that keeps hands dry.'],['Sandy nitrile palm','Secure grip in dry, oily and light-wet conditions.'],['FlexHold™','Keeps the glove\'s shape, fit and grip stability through the shift.']],
    std:[['ANSI/ISEA 105','Abrasion 5 · Puncture 2 · Cut A1 · Dexterity 5'],['EN 388:2016+A1:2018','4132X'],['EN 407:2020','X1XXXX'],['EN ISO 21420:2020','CE · Category II']],
    meta:[['Liner','Polyester / spandex, seamless knit'],['Coating','Sandy nitrile'],['Sizes','7/S · 8/M · 9/L · 10/XL · 11/2XL'],['Packing','1 pr / polybag · 144 prs / carton']] },
  "2066": { desc:"ANSI 6-abrasion, ESD-compliant mechanical gloves, fully coated in sandy nitrile for enhanced liquid protection. Stable handling and control in wet, dry and oily conditions; TaskFlex™ mapped flexibility aligned to the stress zones; LiquiBlock™ against oil and fluid absorption; an ESD-safe build that withstands abrasion and tearing in continuous use.",
    tech:[["GRYX™ platform", "Mechanical-protection system behind the Nitri series."], ["TaskFlex™", "Mapped flexibility system aligned to stress zones for controlled movement and reduced bunching."], ["LiquiBlock™", "Surface-bonded liquid-repellent coating that resists oil and fluid absorption while keeping grip."], ["ESD-safe", "Electrostatic properties to EN 16350 and EN 1149-2."]],
    std:[["ANSI/ISEA 105", "Abrasion 6 · Puncture 2 · Cut A1 · Dexterity 5"], ["EN 388:2016+A1:2018", "4131A"], ["EN 407:2020", "X1XXXX"], ["EN 16350:2014 · EN 1149-2", "Electrostatic properties"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "Seamless knit"], ["Coating", "Sandy nitrile, fully coated"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2067": { desc:"ANSI A4 cut, 6-abrasion high-performance seamless thermal glove with a soft brushed acrylic terry liner and a full double-dipped sandy nitrile coating. Dual-layer construction for thermal retention and flexibility; CoreForm™ and TaskFlex™ for shape and controlled movement; CoreTherm™ insulation; LiquiBlock™ against oil and moisture; TruTouch™ fingertips.",
    tech:[["GRYX™ platform", "Mechanical-protection system behind the Nitri series."], ["CoreTherm™", "Integrated insulation layer that retains warmth without restricting mobility."], ["TaskFlex™", "Mapped flexibility system aligned to stress zones for controlled movement and reduced bunching."], ["LiquiBlock™", "Surface-bonded liquid-repellent coating that resists oil and fluid absorption while keeping grip."], ["TruTouch™", "Fingertip zones for precise handling and touchscreen use."]],
    std:[["ANSI/ISEA 105", "Cut A4 · Abrasion 6 · Puncture 4"], ["EN 388:2016+A1:2018", "4X42D"], ["EN 407:2020", "X2XXXX"], ["EN 511:2006", "X2X"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "Brushed acrylic terry, dual layer"], ["Coating", "Sandy nitrile, double-dipped, full"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
};
const INTRO = { title:'Engineered by hazard.<br>Designed for precision.', lead:'Eight GRYX™ mechanical gloves, pulled onto your hand one after another as you scroll. Boxes, tools, cold steel, oily parts: the everyday hazards, each with its own grip.' };

/* ---------- timeline ---------- */
// t units: [0,1) intro · [1,1+N) chapters · [1+N,1+N+0.8) outro, N = GLOVES.length (4 on the live page)
const N = GLOVES.length, T_OUT = 1 + N, T_END = T_OUT + 0.8;
(() => { document.documentElement.style.setProperty('--chapters', String(N)); const tr = document.querySelector('.rail-track'); if (tr) { tr.querySelectorAll('b.tick').forEach(b => b.remove()); for (let k = 0; k < N; k++) { const b = document.createElement('b'); b.className = 'tick'; b.style.top = ((k + 0.5) / N * 100) + '%'; tr.appendChild(b); } } const lb = document.querySelectorAll('.rail-label'); if (lb[1]) lb[1].textContent = String(N).padStart(2, '0'); })();
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
const TECH_LOGO = { '7020':'gryx', '6035':'gryx', '6014':'gryx', '2015':'gryx', '2050':'gryx', '2055':'gryx', '2066':'gryx', '2067':'gryx' };
const bgs = [...document.querySelectorAll('.bg-photo')];
const calloutLayer = $('#callouts');
const ctx = canvas.getContext('2d', { alpha:true });

/* ---------- images ---------- */
const IMG = { bare:null, glove:[null,null,null,null] };
let EXT = null;
const load = src => new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.decoding = 'async'; i.src = src; });
const ready = { bare:false, glove:Array(GLOVES.length).fill(false) };
fetch('assets/hand/extents.json').then(r => r.json()).then(j => { EXT = j; requestRender(); });
load('assets/hand/bare.webp').then(i => { IMG.bare = i; ready.bare = true; requestRender(); });
const loadGlove = i => { if (IMG.glove[i] || loadGlove.pending?.[i]) return; (loadGlove.pending ||= {})[i] = true; load(`assets/hand/st-${GLOVES[i].code}.webp`).then(img => { IMG.glove[i] = img; ready.glove[i] = true; requestRender(); }); };
loadGlove(0);
(window.requestIdleCallback || (f => setTimeout(f, 800)))(() => { for (let k = 1; k < GLOVES.length; k++) loadGlove(k); });

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
let currentChapter = -2;          // -1 intro, 0..N-1 gloves, N outro
let copyProgress = -1, outroProgress = -1;
const copyChildren = [...copy.querySelectorAll('.copy-inner > *')];
const outroChildren = [...outro.querySelectorAll('.outro-inner > *')];

function onScroll() { target = clamp(window.scrollY / unitPx, 0, T_END); requestRender(); }
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
  if (tt < T_OUT) { const i = Math.floor(tt - 1); return { phase:'chapter', i, u:tt - 1 - i }; }
  return { phase:'outro', i:N, u:clamp((tt - T_OUT) / 0.8) };
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
  const fill = clamp((t - 1) / N);
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
  const ch = seg.phase === 'intro' ? -1 : seg.phase === 'outro' ? N : seg.i;
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
    if (ch >= 0 && ch < N) {
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
  $('#dLink').href = g.url || `https://stegosafety.com/product/st-${g.code}/`;
  dlg.showModal();
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-details]'); if (b) openDetails(Number(b.dataset.details));
});
$('#dClose').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

/* ---------- navigation ---------- */
function goTo(i) {
  const tt = i < 0 ? 0 : i >= N ? T_OUT + 0.45 : 1 + i + 0.42;
  window.scrollTo({ top: tt * unitPx, behavior: reduced.matches ? 'instant' : 'smooth' });
}
chips.forEach(c => c.addEventListener('click', () => goTo(Number(c.dataset.i))));
window.addEventListener('keydown', e => {
  if (e.target !== document.body) return;
  if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); goTo(Math.min(N, currentChapter + 1)); }
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
