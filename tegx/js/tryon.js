/* STEGO Try-On · scroll-driven glove fitting · v1.4.1 */
(() => {
'use strict';

/* ---------- content (ratings verified against the STEGO sell sheets, 2024-25) ---------- */
const GLOVES = [
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
  { code:"2085", name:"Fort Flex", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"Sharp edges, oily parts.<br><em>Feel every one.</em>",
    lead:"A6 cut in a glove you forget is on. A CutCage™ TexArn™ liner under a sandy nitrile palm, LiquiBlock™ so oil stays on the part, tactility fine enough for small components.",
    ratings:[["A6", "ANSI cut"], ["6", "Abrasion"], ["4", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4544F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[48, 70, 160], cuff:{ base:"#2c3e66", hem:"#4c3a43" }, url:"https://stegosafety.com/product/fortflex-st-2085/",
    callouts:[ { x:0.42, y:0.11, title:"Sandy nitrile coating", text:"Wraps the fingertips." }, { x:0.62, y:0.34, title:"TexArn™ liner", text:"ANSI A6 cut." }, { x:0.3, y:0.2, title:"LiquiBlock™", text:"Oil stays out." }, { x:0.33, y:0.34, title:"CutCage™", text:"Reinforced where blades hit." } ] },
  { code:"2080", name:"Xyron Guard", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"Blades on the line.<br><em>Air in the glove.</em>",
    lead:"Made for lines where sharp parts pass through hands all shift. ANSI A6 cut, CutCage™ over the contact zones, an AirWeave™ knit that breathes and TruTouch™ tips for the screen.",
    ratings:[["A6", "ANSI cut"], ["5", "Abrasion"], ["3", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4X42F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[60, 90, 200], cuff:{ base:"#51273a", hem:"#5b3b2a" },
    callouts:[ { x:0.6, y:0.09, title:"TruTouch™ fingertips", text:"Works a touchscreen." }, { x:0.33, y:0.34, title:"CutCage™", text:"Reinforced contact zones." }, { x:0.38, y:0.42, title:"AirWeave™ knit", text:"Cool all shift." }, { x:0.42, y:0.11, title:"Sandy nitrile coating", text:"Wraps the fingertips." } ] },
  { code:"2094", name:"Praxor Evo", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"A7 cut.<br><em>Skin-thin.</em>",
    lead:"The highest cut level in the series on a 21-gauge liner you can feel through. NanoArn™ Evo yarn with stretch recovery, DryHold™ inside, a sandy nitrile palm for high-risk work needing fingers.",
    ratings:[["A7", "ANSI cut"], ["5", "Abrasion"], ["3", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4X42F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[95, 115, 150], cuff:{ base:"#907362", hem:"#685e54" },
    callouts:[ { x:0.42, y:0.11, title:"Sandy nitrile coating", text:"Wraps the fingertips." }, { x:0.62, y:0.34, title:"NanoArn™ Evo liner", text:"ANSI A7, 21 gauge." }, { x:0.5, y:0.66, title:"DryHold™", text:"Dry inside." }, { x:0.5, y:0.6, title:"Stretch-recovery fit", text:"Holds its shape." } ] },
  { code:"2096", name:"Fortmax Oil", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"Oil on the blade.<br><em>Still a dry grip.</em>",
    lead:"For wet and oily cut work: a three-quarter nitrile shell over a NanoArn™ A6 liner, LiquiBlock™ to shed the fluid, a sandy palm for grip when the part is slick.",
    ratings:[["A6", "ANSI cut"], ["5", "Abrasion"], ["3", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4X42F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[150, 95, 60], cuff:{ base:"#314364", hem:"#91625e" },
    callouts:[ { x:0.42, y:0.11, title:"Sandy nitrile coating", text:"Wraps the fingertips." }, { x:0.62, y:0.34, title:"NanoArn™ liner", text:"ANSI A6 cut." }, { x:0.3, y:0.2, title:"LiquiBlock™", text:"Sheds oil and fluid." }, { x:0.56, y:0.26, title:"3/4 nitrile coat", text:"Liquid off the knuckles." } ] },
  { code:"2098", name:"Super Cut Max", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"Sharp and hot.<br><em>Both handled.</em>",
    lead:"Steel sheet, swarf, hot edges. A TexArn™ Max para-aramid liner rated ANSI A7 cut with contact-heat resistance, TruTouch™ fingertips and a sandy nitrile palm for 360° grip.",
    ratings:[["A7", "ANSI cut"], ["5", "Abrasion"], ["4", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4X44F · EN 407:2020 X2XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[120, 140, 60], cuff:{ base:"#575c34", hem:"#533120" }, url:"https://stegosafety.com/product/super-cut-max-st-2098/",
    callouts:[ { x:0.6, y:0.09, title:"TruTouch™ fingertips", text:"Works a touchscreen." }, { x:0.62, y:0.34, title:"Para-aramid liner", text:"A7 cut, heat resistant." }, { x:0.5, y:0.66, title:"DryHold™", text:"Dry inside." }, { x:0.42, y:0.11, title:"Sandy nitrile coating", text:"Wraps the fingertips." } ] },
  { code:"5588", name:"Pyron Arc", platform:"TEGX®", category:"CUT · ARC FLASH",
    title:"Arc flash.<br><em>Cut, too.</em>",
    lead:"For live electrical work with sharp edges in reach. Arc-rated CAT 3 at 9.3 cal/cm², NFPA 70E compliant, a TexArn™ aramid liner rated A4 cut and a foam neoprene palm.",
    ratings:[["A4", "ANSI cut"], ["CAT 3", "Arc rated"], ["4", "Abrasion"], ["D", "EN 388 cut"]],
    standards:"EN 388:2016 3X42D · EN 407:2020 4132XX · ANSI/ISEA 105 · NFPA 70E · ATPV 9.3 cal/cm² · CE Cat III",
    accent:[210, 220, 40], cuff:{ base:"#caca5e", hem:"#9e5538" },
    callouts:[ { x:0.42, y:0.11, title:"Foam neoprene coating", text:"Grip on cable and tool." }, { x:0.62, y:0.34, title:"Aramid liner", text:"Arc flash, 9.3 cal/cm²." }, { x:0.38, y:0.42, title:"AirWeave™ knit", text:"Cool under the sleeve." }, { x:0.3, y:0.2, title:"LiquiBlock™", text:"Oil stays out." } ] },
];
const DETAILS = {
  '7098': { desc:'Delivers ANSI A6 cut protection through an advanced TEGX® engineered liner and TexArn™ yarn technology. Built for demanding environments with resistance to cuts, abrasion, tears and fluid exposure, with CutCage™ reinforcement in high-contact zones, 360° stretch ergonomics and touchscreen-ready fingertips.',
    tech:[['TEGX® liner','High-tenacity HPPE blend cut liner.'],['TexArn™','Blended high-strength yarn core forming the structural foundation of cut resistance.'],['CutCage™','Reinforcement in the zones where blades make contact.'],['TruTouch™','Fingertip zones for precise handling and touchscreen use.'],['Microfoam nitrile','Breathable palm coating with grip in dry and light-oil conditions.'],['Precision Flex','Breathable comfort and reduced perspiration for precise handling.']],
    std:[['ANSI/ISEA 105','Cut A6 · Abrasion 6 · Puncture 4 · Dexterity 5'],['EN 388:2016+A1:2018','4X44F'],['EN 407:2020','X1XXXX'],['EN ISO 21420:2020','CE · Category II']],
    meta:[['Liner','HPPE blend'],['Coating','Microfoam nitrile'],['Sizes','7/S · 8/M · 9/L · 10/XL · 11/2XL'],['Packing','1 pr / polybag · 144 prs / carton']] },
  "2085": { desc:"Tactile sensitivity and flexibility with ANSI A6 and EN 388 cut F protection. A CutCage™ TexArn™ liner forms the cut-resistant structure, a sandy nitrile palm gives grip in oil and dry handling, and LiquiBlock™ keeps fluid from soaking the glove through repeated movements and daily operations.",
    tech:[["TEGX® platform", "Cut-protection system of the Fort series."], ["TexArn™", "Blended high-strength yarn core forming the structural foundation of cut resistance."], ["CutCage™", "Reinforcement framework in the zones where cutting force concentrates."], ["LiquiBlock™", "Surface-bonded liquid-repellent coating that resists oil and fluid absorption while keeping grip."]],
    std:[["ANSI/ISEA 105", "Cut A6 · Abrasion 6 · Puncture 4 · Dexterity 5"], ["EN 388:2016+A1:2018", "4544F"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "CutCage™ TexArn™ HPPE blend"], ["Coating", "Sandy nitrile"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2080": { desc:"Advanced cut protection with reliable grip, flexibility and comfort. A high-cut blend liner rated ANSI A6 with CutCage™ reinforcement over the critical contact zones, a breathable close-fit AirWeave™ knit, TruTouch™ fingertips and a sandy nitrile palm that extends glove life.",
    tech:[["TEGX® platform", "Cut-protection system behind the Xyron series."], ["CutCage™", "Reinforcement framework protecting critical contact zones against cutting forces."], ["AirWeave™", "Breathable knit structure that promotes airflow and thermal regulation."], ["TruTouch™", "Fingertip zones for precise handling and touchscreen use."]],
    std:[["ANSI/ISEA 105", "Cut A6 · Abrasion 5 · Puncture 3 · Dexterity 5"], ["EN 388:2016+A1:2018", "4X42F"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "High-cut HPPE blend, close fit"], ["Coating", "Sandy nitrile"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2094": { desc:"Next-generation cut protection: a skin-like 21-gauge NanoArn™ Evo liner rated ANSI A7 with precision-fit stretch recovery, for high-risk tasks that still need fine handling. DryHold™ moisture wicking keeps the inside dry; the sandy nitrile palm gives controlled grip through repetitive work.",
    tech:[["TEGX® platform", "Cut-protection system of the Praxor series."], ["NanoArn™ Evo", "High-performance cut-protection yarn in a 21-gauge liner with stretch recovery."], ["DryHold™", "Moisture-wicking system that keeps the inside dry and reduces slippage."], ["Agility-driven liner", "Airflow and continuous comfort in intensive work."]],
    std:[["ANSI/ISEA 105", "Cut A7 · Abrasion 5 · Puncture 3 · Dexterity 5"], ["EN 388:2016+A1:2018", "4X42F"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "NanoArn™ Evo, 21 gauge"], ["Coating", "Sandy nitrile palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2096": { desc:"Engineered NanoArn™ advanced cut resistance with a smooth three-quarter nitrile coating: ANSI A6 and EN 388 cut F for intense sharp-material handling in wet, dry and oily conditions. NanoArn™ adds strength without bulk, LiquiBlock™ resists oil and fluid absorption, and the sandy palm keeps the grip.",
    tech:[["TEGX® platform", "Cut-protection system of the Fort series."], ["NanoArn™", "Lightweight reinforcement layer that adds strength and structural consistency while keeping dexterity."], ["LiquiBlock™", "Surface-bonded liquid-repellent coating that resists oil and fluid absorption while keeping grip."], ["3/4 nitrile coating", "Liquid resistance over the knuckles with a sandy palm grip."]],
    std:[["ANSI/ISEA 105", "Cut A6 · Abrasion 5 · Puncture 3 · Dexterity 5"], ["EN 388:2016+A1:2018", "4X42F"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "NanoArn™ HPPE blend"], ["Coating", "3/4 smooth nitrile, sandy palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2098": { desc:"Exceptional cut protection for sharp-edge hazards in high-risk industrial work. The TexArn™ Max para-aramid liner carries ANSI A7 and EN 388 cut F with inherent resistance to high temperatures; TruTouch™ fingertips keep precision and touchscreen use; the sandy nitrile coating gives breathable 360° tactility and grip.",
    tech:[["TEGX® platform", "Cut-protection system of the Super Cut series."], ["TexArn™ Max", "Para-aramid liner with inherent cut resistance and heat protection."], ["TruTouch™", "Fingertip zones for precise handling and touchscreen use."], ["DryHold™", "Moisture-wicking system that keeps the inside dry."], ["CutCage™", "Reinforcement framework in the zones where cutting force concentrates."]],
    std:[["ANSI/ISEA 105", "Cut A7 · Abrasion 5 · Puncture 4 · Dexterity 5"], ["EN 388:2016+A1:2018", "4X44F"], ["EN 407:2020", "X2XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "TexArn™ Max para-aramid blend"], ["Coating", "Sandy nitrile"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "5588": { desc:"Multi-hazard specialised cut gloves, arc-rated CAT 3 with an ATPV of 9.3 cal/cm² and NFPA 70E compliant. The TEGX® TexArn™ aramid-blend liner withstands arc flash exposure and carries ANSI A4 cut; an AirWeave™ knit keeps airflow and thermal regulation; the foam neoprene palm gives grip and lasting comfort.",
    tech:[["TEGX® platform", "Cut-protection system with arc-rated construction."], ["TexArn™", "Blended high-strength aramid yarn core forming the structural foundation of cut resistance."], ["AirWeave™", "Breathable knit structure that promotes airflow and thermal regulation."], ["LiquiBlock™", "Surface-bonded liquid-repellent coating that resists oil and fluid absorption."]],
    std:[["ANSI/ISEA 105", "Cut A4 · Abrasion 4 · Puncture 3 · Dexterity 5"], ["Arc rating", "NFPA 70E · CAT 3 · ATPV 9.3 cal/cm²"], ["EN 388:2016+A1:2018", "3X42D"], ["EN 407:2020", "4132XX"], ["EN ISO 21420:2020", "CE · Category III"]],
    meta:[["Liner", "TexArn™ aramid blend"], ["Coating", "Foam neoprene palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
};
const INTRO = { title:'Engineered by hazard.<br>Designed for precision.', lead:'Seven TEGX® cut gloves, pulled onto your hand one after another as you scroll. Blades, glass, sheet metal, arc flash: the hazard changes, the liner holds.' };

/* ---------- timeline ---------- */
// t units: [0,1) intro · [1,1+N) chapters · [1+N,1+N+0.8) outro, N = GLOVES.length (4 on the live page)
const REVEAL = (typeof window !== 'undefined' && document.getElementById('reveal')) ? document.getElementById('reveal') : null;
const I0 = REVEAL ? 2 : 1, N = GLOVES.length, T_OUT = I0 + N, T_END = T_OUT + 0.8;
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
const TECH_LOGO = { '7098':'tegx', '2085':'tegx', '2080':'tegx', '2094':'tegx', '2096':'tegx', '2098':'tegx', '5588':'tegx' };
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

/* ---------- category reveal: Netflix-style crash zoom (series pages; second intro unit) ----------
   v 0.00–0.22  the mark and the words arrive (small, slow)
   v 0.26–0.60  crash zoom: the camera bursts through the wordmark on a slow → snap → settle curve, directional blur with the speed
   v 0.46–0.66  the screen floods with the technology colour, then goes dark
   v 0.66–0.90  the dark lifts and the first glove is already there */
const zoomCurve = p => p < 0.35 ? 0.12 * Math.pow(p / 0.35, 2.4) : p < 0.72 ? 0.12 + 0.78 * (1 - Math.pow(1 - (p - 0.35) / 0.37, 3.2)) : 0.90 + 0.10 * ((p - 0.72) / 0.28);
function renderReveal(seg) {
  const core = REVEAL.querySelector('.reveal-core'), flood = REVEAL.querySelector('.reveal-flood');
  if (seg.phase !== 'intro' || seg.u >= 1) { REVEAL.style.opacity = '0'; REVEAL.style.pointerEvents = 'none'; if (flood) flood.style.opacity = '0'; document.body.classList.remove('revealing'); return; }
  const v = clamp(seg.u);
  REVEAL.style.opacity = v < 0.9 ? '1' : String(1 - clamp((v - 0.9) / 0.1));
  document.body.classList.toggle('revealing', v < 0.86);
  const inA = easeOut(clamp(v / 0.22));
  REVEAL.querySelectorAll('.reveal-words > *').forEach(w => { w.style.opacity = '1'; w.style.transform = 'none'; });
  const p = clamp((v - 0.20) / 0.40), z = zoomCurve(p);                       // 0 → 1 over the zoom window, snapping in the middle
  const k = 1 + z * 22;                                     // scale: settles at 1, bursts to ~23×
  const speed = p <= 0 || p >= 1 ? 0 : Math.max(0, zoomCurve(Math.min(1, p + 0.02)) - zoomCurve(Math.max(0, p - 0.02)));
  if (core) { core.style.transform = `scale(${k.toFixed(3)})`; core.style.filter = speed > 0.004 ? `blur(${Math.min(18, speed * 260).toFixed(1)}px)` : 'none'; core.style.opacity = String(1 - clamp((v - 0.58) / 0.08)); }
  if (flood) {                                                               // colour flood, then dark, then lift
    const fill = clamp((v - 0.46) / 0.12), dark = clamp((v - 0.60) / 0.08), lift = clamp((v - 0.70) / 0.2);
    flood.style.opacity = String(Math.max(fill, dark) * (1 - lift));
    flood.style.background = dark > 0 ? `color-mix(in srgb, rgb(var(--accent-rgb)) ${Math.round((1 - dark) * 100)}%, #07090c)` : 'rgb(var(--accent-rgb))';
  }
}

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
  if (tt < I0) return { phase:'intro', i:-1, u:tt };
  if (tt < T_OUT) { const i = Math.floor(tt - I0); return { phase:'chapter', i, u:tt - I0 - i }; }
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
  const iu = seg.phase === 'intro' ? (REVEAL ? seg.u - 1 : seg.u) : 1;          // the hazard intro's own clock; negative while the opener runs
  const introLift = seg.phase === 'intro' ? (1 - easeOut(clamp(iu / 0.55))) : 0;
  if (REVEAL) renderReveal(seg);
  const outroDrop = seg.phase === 'outro' ? easeOut(clamp(seg.u / 0.6)) : 0;

  // hand layer transform (parallax + idle float + intro rise)
  const floatY = reduced.matches ? 0 : Math.sin(idle * 0.9) * 3;
  const lift = introLift * window.innerHeight * 0.42 + outroDrop * window.innerHeight * 0.55;
  hand.style.transform = `translate(calc(-50% + ${px * -10}px), ${lift + floatY + py * -6}px)`;
  hand.style.opacity = String((1 - outroDrop * 0.6) * (REVEAL ? clamp((iu + 0.12) / 0.14) : 1));   // hidden under the opener

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
  const fill = clamp((t - I0) / N);
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
  if (seg.phase === 'intro') cp = Math.min(REVEAL ? clamp((seg.u - 1 + 0.12) / 0.14) : 1, 1 - clamp(((REVEAL ? seg.u - 1 : seg.u) - 0.62) / 0.2));   // hidden under the opener, then the usual fade
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
  const tt = i < 0 ? 0 : i >= N ? T_OUT + 0.45 : I0 + i + 0.42;
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
