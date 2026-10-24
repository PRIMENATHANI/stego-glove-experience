/* STEGO Try-On · scroll-driven glove fitting · v1.4.1 */
(() => {
'use strict';

/* ---------- content (ratings verified against the STEGO sell sheets, 2024-25) ---------- */
const GLOVES = [
  { code:"7095", name:"Cut Defender-I", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"Light cut work.<br><em>A4 in a thin knit.</em>",
    lead:"Boxes, blades, sheet edges: the everyday cut risk. A seamless TexArn™ knit rated ANSI A4, a smooth PU palm for dry handling, a cuff that keeps its shape.",
    ratings:[["A4", "ANSI cut"], ["6", "Abrasion"], ["3", "Puncture"], ["D", "EN 388 cut"]],
    standards:"EN 388:2016 4443D · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[150, 155, 160], cuff:{ base:"#6c6758", hem:"#af643a" },
    callouts:[ { x:0.42, y:0.11, title:"Smooth PU palm", text:"Dry grip, fine feel." }, { x:0.62, y:0.34, title:"TexArn™ knit", text:"ANSI A4 cut." }, { x:0.38, y:0.42, title:"Thin seamless liner", text:"Light all shift." }, { x:0.5, y:0.73, title:"EdgeLock™ cuff", text:"Holds its shape, no fraying." } ] },
  { code:"7096", name:"Cut Defender-II", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"Sharp components.<br><em>A6 under a rough palm.</em>",
    lead:"Sharp parts passing through the hands all shift. A TexArn™ knit rated ANSI A6 with a rough PU palm that holds dry components and a close fit that follows the hand.",
    ratings:[["A6", "ANSI cut"], ["6", "Abrasion"], ["4", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4X43F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[63, 120, 224], cuff:{ base:"#646463", hem:"#2f1810" },
    callouts:[ { x:0.42, y:0.11, title:"Rough PU palm", text:"Grip on dry parts." }, { x:0.62, y:0.34, title:"TexArn™ knit", text:"ANSI A6 cut." }, { x:0.55, y:0.28, title:"FlexFit™ shaping", text:"Follows the hand." }, { x:0.38, y:0.42, title:"Seamless knit", text:"No seams to rub." } ] },
  { code:"7097", name:"Cut Defender-III", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"Oily sharp parts.<br><em>Still held.</em>",
    lead:"Oily sharp parts: the grip goes first. A sandy nitrile palm with LiquiBlock™ keeps the fluid on the part; an enhanced TexArn™ knit carries ANSI A6 cut.",
    ratings:[["A6", "ANSI cut"], ["6", "Abrasion"], ["4", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4X44F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[63, 120, 224], cuff:{ base:"#2f2e2b", hem:"#73523d" },
    callouts:[ { x:0.42, y:0.11, title:"Sandy nitrile palm", text:"Grip in oil." }, { x:0.62, y:0.34, title:"TexArn™ knit", text:"ANSI A6 cut." }, { x:0.3, y:0.2, title:"LiquiBlock™ coating", text:"Oil stays out." }, { x:0.33, y:0.34, title:"Secure grip design", text:"Controlled, repeat handling." } ] },
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
    accent:[79, 98, 174], cuff:{ base:"#2c3e66", hem:"#4c3a43" }, url:"https://stegosafety.com/product/fortflex-st-2085/",
    callouts:[ { x:0.42, y:0.11, title:"Sandy nitrile coating", text:"Wraps the fingertips." }, { x:0.62, y:0.34, title:"TexArn™ liner", text:"ANSI A6 cut." }, { x:0.3, y:0.2, title:"LiquiBlock™", text:"Oil stays out." }, { x:0.33, y:0.34, title:"CutCage™", text:"Reinforced where blades hit." } ] },
  { code:"2095", name:"Fortmax", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"Blades and small parts.<br><em>A6, fingertip feel.</em>",
    lead:"Fine work around sharp edges. A high-mobility NanoArn™ knit rated ANSI A6, a double-dipped sandy palm for tactile grip in oil, dry inside through a long shift.",
    ratings:[["A6", "ANSI cut"], ["5", "Abrasion"], ["3", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4X42F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[138, 102, 84], cuff:{ base:"#2c2420", hem:"#120a05" },
    callouts:[ { x:0.42, y:0.11, title:"Double-dipped sandy palm", text:"Tactile in oil." }, { x:0.62, y:0.34, title:"NanoArn™ knit", text:"ANSI A6 cut." }, { x:0.5, y:0.66, title:"DryHold™", text:"Dry inside." }, { x:0.55, y:0.28, title:"Close contour", text:"Less fatigue." } ] },
  { code:"2080", name:"Xyron Guard", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"Blades on the line.<br><em>Air in the glove.</em>",
    lead:"Made for lines where sharp parts pass through hands all shift. ANSI A6 cut, CutCage™ over the contact zones, an AirWeave™ knit that breathes and TruTouch™ tips for the screen.",
    ratings:[["A6", "ANSI cut"], ["5", "Abrasion"], ["3", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4X42F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[70, 98, 203], cuff:{ base:"#51273a", hem:"#5b3b2a" },
    callouts:[ { x:0.6, y:0.09, title:"TruTouch™ fingertips", text:"Works a touchscreen." }, { x:0.33, y:0.34, title:"CutCage™", text:"Reinforced contact zones." }, { x:0.38, y:0.42, title:"AirWeave™ knit", text:"Cool all shift." }, { x:0.42, y:0.11, title:"Sandy nitrile coating", text:"Wraps the fingertips." } ] },
  { code:"2091", name:"Xyron Max", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"A7 cut.<br><em>18-gauge feel.</em>",
    lead:"Sharp edges handled with fine feel. An ultra-fine 18-gauge FlexSkin™ knit rated ANSI A7, AirWeave™ breathing through the back, a foam nitrile palm that outlasts the task.",
    ratings:[["A7", "ANSI cut"], ["5", "Abrasion"], ["3", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4X42F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[120, 195, 60], cuff:{ base:"#433422", hem:"#724933" },
    callouts:[ { x:0.42, y:0.11, title:"Foam nitrile palm", text:"Grip, long service." }, { x:0.62, y:0.34, title:"18-gauge knit", text:"ANSI A7 cut." }, { x:0.33, y:0.34, title:"Thumb crotch patch", text:"Where gloves wear first." }, { x:0.38, y:0.42, title:"AirWeave™ knit", text:"Cool all shift." } ] },
  { code:"2092", name:"Xyron Ultra", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"Razor edges.<br><em>A7 at the fingertips.</em>",
    lead:"Razor-edge contact, all shift. Ultra NanoArn™ on an 18-gauge knit rated ANSI A7, TruTouch™ fingertips for the screen, a sandy nitrile palm, a fit that recovers after every stretch.",
    ratings:[["A7", "ANSI cut"], ["5", "Abrasion"], ["3", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4X42F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[200, 55, 50], cuff:{ base:"#542f25", hem:"#a57452" },
    callouts:[ { x:0.6, y:0.09, title:"TruTouch™ fingertips", text:"Works a touchscreen." }, { x:0.62, y:0.34, title:"Ultra NanoArn™ knit", text:"ANSI A7 cut." }, { x:0.33, y:0.34, title:"Thumb crotch patch", text:"Where gloves wear first." }, { x:0.42, y:0.11, title:"Sandy nitrile palm", text:"Grip, wet or dry." } ] },
  { code:"2093", name:"Praxor Neo", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"Sharp edges, all day.<br><em>A6, skin-like.</em>",
    lead:"Repeated contact with sharp edges. A 21-gauge NanoArn™ Neo knit you can feel through, rated ANSI A6, breathing through the back, a sandy nitrile palm for exact handling.",
    ratings:[["A6", "ANSI cut"], ["5", "Abrasion"], ["3", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4X42F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[60, 145, 215], cuff:{ base:"#296038", hem:"#543c2b" },
    callouts:[ { x:0.42, y:0.11, title:"Sandy nitrile palm", text:"Exact handling." }, { x:0.62, y:0.34, title:"21-gauge NanoArn™ Neo", text:"ANSI A6 cut." }, { x:0.38, y:0.42, title:"AirWeave™ knit", text:"Cool all shift." }, { x:0.55, y:0.28, title:"Stretch-recovery liner", text:"Fit holds all day." } ] },
  { code:"2078", name:"Xyron Neo", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"Light cuts, light oil.<br><em>A3 with a dotted grip.</em>",
    lead:"Lighter sharp work in dry or light-oil conditions. CutCage™ over the contact zones, a nitrile foam dotted palm, TruTouch™ tips, an AirWeave™ knit that breathes.",
    ratings:[["A3", "ANSI cut"], ["4", "Abrasion"], ["4", "Puncture"], ["C", "EN 388 cut"]],
    standards:"EN 388:2016 4X43C · ANSI/ISEA 105 · CE Cat II",
    accent:[150, 205, 60], cuff:{ base:"#627233", hem:"#70452c" }, url:"https://stegosafety.com/product/xyron-neo-st-2078/",
    callouts:[ { x:0.6, y:0.09, title:"TruTouch™ fingertips", text:"Works a touchscreen." }, { x:0.33, y:0.34, title:"CutCage™ zone", text:"Reinforced contact area." }, { x:0.42, y:0.11, title:"Nitrile foam dots", text:"Dry and light-oil grip." }, { x:0.55, y:0.28, title:"FlexFit™ design", text:"Less hand fatigue." } ] },
  { code:"2094", name:"Praxor Evo", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"A7 cut.<br><em>Skin-thin.</em>",
    lead:"The highest cut level in the series on a 21-gauge liner you can feel through. NanoArn™ Evo yarn with stretch recovery, DryHold™ inside, a sandy nitrile palm for high-risk work needing fingers.",
    ratings:[["A7", "ANSI cut"], ["5", "Abrasion"], ["3", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4X42F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[95, 115, 150], cuff:{ base:"#907362", hem:"#685e54" },
    callouts:[ { x:0.42, y:0.11, title:"Sandy nitrile coating", text:"Wraps the fingertips." }, { x:0.62, y:0.34, title:"NanoArn™ Evo liner", text:"ANSI A7, 21 gauge." }, { x:0.5, y:0.66, title:"DryHold™", text:"Dry inside." }, { x:0.5, y:0.6, title:"Stretch-recovery fit", text:"Holds its shape." } ] },
  { code:"2086", name:"Fort Flex Oil", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"Sharp, heavy and wet.<br><em>A6 to the wrist.</em>",
    lead:"Heavy handling where fluid and blades meet. A CutCage™ TexArn™ knit rated ANSI A6, a 3/4 double-dipped LiquiBlock™ coat, TruTouch™ tips, an extended cuff over the wrist.",
    ratings:[["A6", "ANSI cut"], ["6", "Abrasion"], ["4", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4544F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[98, 106, 149], cuff:{ base:"#74748c", hem:"#a07f6f" }, url:"https://stegosafety.com/product/fortflex-oil-st-2086/",
    callouts:[ { x:0.56, y:0.26, title:"3/4 double-dipped coat", text:"Liquid off the knuckles." }, { x:0.62, y:0.34, title:"TexArn™ knit", text:"ANSI A6 cut." }, { x:0.6, y:0.09, title:"TruTouch™ fingertips", text:"Works a touchscreen." }, { x:0.5, y:0.73, title:"Extended cuff", text:"Covers the wrist." } ] },
  { code:"2096", name:"Fortmax Oil", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"Oil on the blade.<br><em>Still a dry grip.</em>",
    lead:"For wet and oily cut work: a three-quarter nitrile shell over a NanoArn™ A6 liner, LiquiBlock™ to shed the fluid, a sandy palm for grip when the part is slick.",
    ratings:[["A6", "ANSI cut"], ["5", "Abrasion"], ["3", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4X42F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[150, 95, 60], cuff:{ base:"#314364", hem:"#91625e" },
    callouts:[ { x:0.42, y:0.11, title:"Sandy nitrile coating", text:"Wraps the fingertips." }, { x:0.62, y:0.34, title:"NanoArn™ liner", text:"ANSI A6 cut." }, { x:0.3, y:0.2, title:"LiquiBlock™", text:"Sheds oil and fluid." }, { x:0.56, y:0.26, title:"3/4 nitrile coat", text:"Liquid off the knuckles." } ] },
  { code:"2097", name:"Xyron Ultra Oil", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"A7 cut in oil.<br><em>18 gauge, 3/4 coated.</em>",
    lead:"Oily sharp parts handled all shift. An 18-gauge high-mobility carbon knit rated ANSI A7 under a 3/4 dual nitrile coat, TruTouch™ tips, a sandy palm for wet and oily grip.",
    ratings:[["A7", "ANSI cut"], ["5", "Abrasion"], ["3", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4X42F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[174, 70, 70], cuff:{ base:"#4f2c25", hem:"#452c20" },
    callouts:[ { x:0.56, y:0.26, title:"3/4 dual nitrile coat", text:"Liquid off the knuckles." }, { x:0.62, y:0.34, title:"18-gauge carbon knit", text:"ANSI A7 cut." }, { x:0.6, y:0.09, title:"TruTouch™ fingertips", text:"Works a touchscreen." }, { x:0.33, y:0.34, title:"Thumb crotch patch", text:"Where gloves wear first." } ] },
  { code:"6050", name:"Super Cut", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"Sharp and hot.<br><em>A7 aramid, crinkle grip.</em>",
    lead:"Glass, sheet metal, hot edges. A para-aramid TexArn™ knit rated ANSI A7 with contact-heat resistance, a crinkle latex palm that bites into dry, wet and oily surfaces.",
    ratings:[["A7", "ANSI cut"], ["5", "Abrasion"], ["5", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 3X44F · EN 407:2020 X2XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[45, 110, 215], cuff:{ base:"#4173a3", hem:"#403f55" },
    callouts:[ { x:0.42, y:0.11, title:"Crinkle latex palm", text:"Bites into the surface." }, { x:0.62, y:0.34, title:"Para-aramid knit", text:"A7 cut, heat resistant." }, { x:0.38, y:0.42, title:"Yellow aramid back", text:"Breathes, resists heat." }, { x:0.55, y:0.28, title:"DryHold™", text:"Dry inside, less slip." } ] },
  { code:"2098", name:"Super Cut Max", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"Sharp and hot.<br><em>Both handled.</em>",
    lead:"Steel sheet, swarf, hot edges. A TexArn™ Max para-aramid liner rated ANSI A7 cut with contact-heat resistance, TruTouch™ fingertips and a sandy nitrile palm for 360° grip.",
    ratings:[["A7", "ANSI cut"], ["5", "Abrasion"], ["4", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4X44F · EN 407:2020 X2XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[120, 140, 60], cuff:{ base:"#575c34", hem:"#533120" }, url:"https://stegosafety.com/product/super-cut-max-st-2098/",
    callouts:[ { x:0.6, y:0.09, title:"TruTouch™ fingertips", text:"Works a touchscreen." }, { x:0.62, y:0.34, title:"Para-aramid liner", text:"A7 cut, heat resistant." }, { x:0.5, y:0.66, title:"DryHold™", text:"Dry inside." }, { x:0.42, y:0.11, title:"Sandy nitrile coating", text:"Wraps the fingertips." } ] },
  { code:"2099", name:"Super Cut Vanta", platform:"TEGX®", category:"CUT & PUNCTURE",
    title:"The sharpest work.<br><em>ANSI A9.</em>",
    lead:"Relentless handling of aggressive sharp materials. The highest cut rating in the range on a fine-gauge NanoArn™ CutCage™ knit, a sandy nitrile palm, a fit that still moves like a glove.",
    ratings:[["A9", "ANSI cut"], ["5", "Abrasion"], ["3", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 4X42F · EN 407:2020 X1XXXX · ANSI/ISEA 105 · CE Cat II",
    accent:[230, 115, 40], cuff:{ base:"#533424", hem:"#3f2418" },
    callouts:[ { x:0.42, y:0.11, title:"Sandy nitrile palm", text:"Grip, wet or dry." }, { x:0.62, y:0.34, title:"NanoArn™ knit", text:"ANSI A9 cut." }, { x:0.33, y:0.34, title:"CutCage™ zone", text:"Reinforced where blades hit." }, { x:0.38, y:0.42, title:"FlexSkin™ liner", text:"Airflow, all-day comfort." } ] },
  { code:"5588", name:"Pyron Arc", platform:"TEGX®", category:"CUT · ARC FLASH",
    title:"Arc flash.<br><em>Cut, too.</em>",
    lead:"For live electrical work with sharp edges in reach. Arc-rated CAT 3 at 9.3 cal/cm², NFPA 70E compliant, a TexArn™ aramid liner rated A4 cut and a foam neoprene palm.",
    ratings:[["A4", "ANSI cut"], ["CAT 3", "Arc rated"], ["4", "Abrasion"], ["D", "EN 388 cut"]],
    standards:"EN 388:2016 3X42D · EN 407:2020 4132XX · ANSI/ISEA 105 · NFPA 70E · ATPV 9.3 cal/cm² · CE Cat III",
    accent:[210, 220, 40], cuff:{ base:"#caca5e", hem:"#9e5538" },
    callouts:[ { x:0.42, y:0.11, title:"Foam neoprene coating", text:"Grip on cable and tool." }, { x:0.62, y:0.34, title:"Aramid liner", text:"Arc flash, 9.3 cal/cm²." }, { x:0.38, y:0.42, title:"AirWeave™ knit", text:"Cool under the sleeve." }, { x:0.3, y:0.2, title:"LiquiBlock™", text:"Oil stays out." } ] },
  { code:"5589", name:"Pyron Volt", platform:"TEGX®", category:"CUT · ARC FLASH",
    title:"Arc flash, 13 cal/cm².<br><em>A5 cut.</em>",
    lead:"Live electrical work with sharp edges in reach. Arc-rated CAT 2 at 13 cal/cm², NFPA 70E compliant, a TexArn™ para-aramid knit rated A5 cut, a sandy neoprene palm.",
    ratings:[["A5", "ANSI cut"], ["CAT 2", "Arc rated"], ["6", "Abrasion"], ["E", "EN 388 cut"]],
    standards:"EN 388:2016 4X42E · EN 407:2020 X2XXXX · ANSI/ISEA 105 · NFPA 70E · ATPV 13 cal/cm² · CE Cat III",
    accent:[155, 200, 60], cuff:{ base:"#838f50", hem:"#6d4932" }, url:"https://stegosafety.com/product/pyron-volt-st-5589/",
    callouts:[ { x:0.42, y:0.11, title:"Sandy neoprene palm", text:"Grip on cable and tool." }, { x:0.62, y:0.34, title:"Para-aramid knit", text:"Arc flash, 13 cal/cm²." }, { x:0.38, y:0.42, title:"AirWeave™ knit", text:"Cool under the sleeve." }, { x:0.33, y:0.34, title:"TexArn™ yarn", text:"Cut, abrasion and tear." } ] },
  { code:"4510", name:"Ambiflex Super Cut", platform:"TEGX®", category:"CUT · FOOD SAFE",
    title:"Knives in food processing.<br><em>A7, either hand.</em>",
    lead:"Boning, trimming, packing. An ambidextrous, uncoated, antimicrobial knit rated ANSI A7 on seamless TexArn™ CutCage™, worn alone or under a disposable glove.",
    ratings:[["A7", "ANSI cut"], ["3", "Abrasion"], ["3", "Puncture"], ["F", "EN 388 cut"]],
    standards:"EN 388:2016 444XF · ANSI/ISEA 105 · CE Cat II",
    accent:[140, 170, 200], cuff:{ base:"#798aa1", hem:"#b89075" },
    callouts:[ { x:0.62, y:0.34, title:"TexArn™ CutCage™ knit", text:"ANSI A7 cut." }, { x:0.42, y:0.11, title:"Uncoated fingers", text:"Wears under a disposable." }, { x:0.33, y:0.34, title:"Ambidextrous shape", text:"Either hand." }, { x:0.5, y:0.73, title:"Antimicrobial knit", text:"Hygiene, no odour." } ] },
  { code:"6075", name:"Cut Defender Thermo", platform:"TEGX®", category:"CUT · COLD",
    title:"Cold and sharp.<br><em>A6, warm, hi-vis.</em>",
    lead:"Winter cut work in the wet. A TexArn™ hybrid knit rated ANSI A6 over brushed acrylic terry, CoreTherm™ warmth, a 3/4 sandy nitrile coat, hi-vis so the hand is seen.",
    ratings:[["A6", "ANSI cut"], ["6", "Abrasion"], ["4", "Puncture"], ["121", "EN 511 cold"]],
    standards:"EN 388:2016 4X44F · EN 407:2020 X2XXXX · EN 511:2006 121 · ANSI/ISEA 105 · CE Cat II",
    accent:[40, 125, 210], cuff:{ base:"#7b6f5c", hem:"#906a4a" },
    callouts:[ { x:0.56, y:0.26, title:"3/4 sandy nitrile coat", text:"Wet and oil out." }, { x:0.62, y:0.34, title:"TexArn™ hybrid knit", text:"ANSI A6 cut." }, { x:0.5, y:0.66, title:"Terry lining inside", text:"CoreTherm™ warmth." }, { x:0.38, y:0.42, title:"Hi-vis knit", text:"Seen in low light." } ] },
];
const DETAILS = {
  "7095": { desc:"Cut-resistant protection that guards against lacerations while supporting safe, consistent performance. A TexArn™ blended high-strength yarn core forms the structural foundation of cut resistance, EdgeLock™ reinforced cuff construction holds shape and resists fraying, and the lightweight breathable liner delivers lasting comfort over extended wear.",
    tech:[["TEGX® platform", "Cut-protection system of the Cut Defender series."], ["TexArn™", "Blended high-strength yarn core forming the structural foundation of cut resistance."], ["EdgeLock™", "Reinforced cuff construction that holds shape, resists fraying and supports long-term durability."], ["Smooth PU", "Polyurethane palm for dry handling with fine tactility."]],
    std:[["ANSI/ISEA 105", "Cut A4 · Abrasion 6 · Puncture 3 · Dexterity 5"], ["EN 388:2016+A1:2018", "4443D"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "HPPE blend cut liner, seamless"], ["Coating", "Polyurethane (PU) palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "7096": { desc:"Advanced cut-resistant gloves: ANSI A6 and EN 388 cut F on a seamless TexArn™ liner with a rough PU coating. Cut Safety Design protects hands during demanding tasks involving sharp components, FlexFit™ anatomical shaping follows natural hand movement for a stable fit, and the textured palm keeps steady handling through repeated use.",
    tech:[["TEGX® platform", "Cut-protection system of the Cut Defender series."], ["TexArn™", "Blended high-strength yarn core forming the structural foundation of cut resistance."], ["FlexFit™", "Anatomical shaping engineered to follow natural hand movement for stable fit and controlled motion."], ["Rough PU", "Textured polyurethane palm for grip reliability in dry handling."]],
    std:[["ANSI/ISEA 105", "Cut A6 · Abrasion 6 · Puncture 4 · Dexterity 5"], ["EN 388:2016+A1:2018", "4X43F"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "HPPE blend cut liner, seamless"], ["Coating", "Textured polyurethane (PU) palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "7097": { desc:"Advanced cut-resistant gloves with ANSI A6 and EN 388 cut F on an enhanced TexArn™ liner under a sandy nitrile coating. Sharp Handling Protection delivers reliable cut resistance through repeated movements and daily operations, LiquiBlock™ resists oil and fluid absorption while keeping grip, and the Secure Grip Design supports controlled handling in routine and repetitive tasks.",
    tech:[["TEGX® platform", "Cut-protection system of the Cut Defender series."], ["TexArn™", "Blended high-strength yarn core forming the structural foundation of cut resistance."], ["LiquiBlock™", "Surface-bonded liquid-repellent coating that resists oil and fluid absorption while keeping grip."], ["Sandy nitrile", "Textured palm for grip in wet, dry and oily handling."]],
    std:[["ANSI/ISEA 105", "Cut A6 · Abrasion 6 · Puncture 4 · Dexterity 5"], ["EN 388:2016+A1:2018", "4X44F"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "HPPE blend cut liner, enhanced"], ["Coating", "Sandy nitrile palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  '7098': { desc:'Delivers ANSI A6 cut protection through an advanced TEGX® engineered liner and TexArn™ yarn technology. Built for demanding environments with resistance to cuts, abrasion, tears and fluid exposure, with CutCage™ reinforcement in high-contact zones, 360° stretch ergonomics and touchscreen-ready fingertips.',
    tech:[['TEGX® liner','High-tenacity HPPE blend cut liner.'],['TexArn™','Blended high-strength yarn core forming the structural foundation of cut resistance.'],['CutCage™','Reinforcement in the zones where blades make contact.'],['TruTouch™','Fingertip zones for precise handling and touchscreen use.'],['Microfoam nitrile','Breathable palm coating with grip in dry and light-oil conditions.'],['Precision Flex','Breathable comfort and reduced perspiration for precise handling.']],
    std:[['ANSI/ISEA 105','Cut A6 · Abrasion 6 · Puncture 4 · Dexterity 5'],['EN 388:2016+A1:2018','4X44F'],['EN 407:2020','X1XXXX'],['EN ISO 21420:2020','CE · Category II']],
    meta:[['Liner','HPPE blend'],['Coating','Microfoam nitrile'],['Sizes','7/S · 8/M · 9/L · 10/XL · 11/2XL'],['Packing','1 pr / polybag · 144 prs / carton']] },
  "2085": { desc:"Tactile sensitivity and flexibility with ANSI A6 and EN 388 cut F protection. A CutCage™ TexArn™ liner forms the cut-resistant structure, a sandy nitrile palm gives grip in oil and dry handling, and LiquiBlock™ keeps fluid from soaking the glove through repeated movements and daily operations.",
    tech:[["TEGX® platform", "Cut-protection system of the Fort series."], ["TexArn™", "Blended high-strength yarn core forming the structural foundation of cut resistance."], ["CutCage™", "Reinforcement framework in the zones where cutting force concentrates."], ["LiquiBlock™", "Surface-bonded liquid-repellent coating that resists oil and fluid absorption while keeping grip."]],
    std:[["ANSI/ISEA 105", "Cut A6 · Abrasion 6 · Puncture 4 · Dexterity 5"], ["EN 388:2016+A1:2018", "4544F"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "CutCage™ TexArn™ HPPE blend"], ["Coating", "Sandy nitrile"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2095": { desc:"High-mobility NanoArn™ liner with A6 cut and EN 388 cut F protection and a double-dipped LiquiBlock™ palm for tactile sensitivity. Cut-resistant protection guards against lacerations, NanoArn™ adds strength and structural consistency without losing dexterity, DryHold™ keeps the inside dry and reduces slippage, and the ergonomic hand contour reduces fatigue in all-day wear.",
    tech:[["TEGX® platform", "Cut-protection system of the Fort series."], ["NanoArn™", "Lightweight reinforcement layer that adds strength and structural consistency while keeping dexterity."], ["DryHold™", "Moisture-wicking system that keeps the inside dry and reduces slippage."], ["LiquiBlock™", "Double-dipped liquid-repellent palm that resists oil and fluid absorption."]],
    std:[["ANSI/ISEA 105", "Cut A6 · Abrasion 5 · Puncture 3 · Dexterity 5"], ["EN 388:2016+A1:2018", "4X42F"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "High-mobility carbon blend"], ["Coating", "Sandy nitrile, double-dipped palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2080": { desc:"Advanced cut protection with reliable grip, flexibility and comfort. A high-cut blend liner rated ANSI A6 with CutCage™ reinforcement over the critical contact zones, a breathable close-fit AirWeave™ knit, TruTouch™ fingertips and a sandy nitrile palm that extends glove life.",
    tech:[["TEGX® platform", "Cut-protection system behind the Xyron series."], ["CutCage™", "Reinforcement framework protecting critical contact zones against cutting forces."], ["AirWeave™", "Breathable knit structure that promotes airflow and thermal regulation."], ["TruTouch™", "Fingertip zones for precise handling and touchscreen use."]],
    std:[["ANSI/ISEA 105", "Cut A6 · Abrasion 5 · Puncture 3 · Dexterity 5"], ["EN 388:2016+A1:2018", "4X42F"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "High-cut HPPE blend, close fit"], ["Coating", "Sandy nitrile"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2091": { desc:"Next-generation cut-protection gloves with A7 cut and EN 388 cut F on an ultra-fine 18-gauge liner. An ultra-light seamless liner gives comfort, breathability and stretch recovery for all-day wear, FlexSkin™ adds flexibility and tactility, AirWeave™ promotes airflow and thermal regulation, and the high-performance foam nitrile palm improves grip and extends service life.",
    tech:[["TEGX® platform", "Cut-protection system of the Xyron series."], ["FlexSkin™", "Ultra-fine gauge layer enhancing flexibility, tactility and dexterity in cut-resistant gloves."], ["AirWeave™", "Breathable knit structure that promotes airflow and thermal regulation."], ["Foam nitrile", "High-performance palm coating that improves grip and extends service life."]],
    std:[["ANSI/ISEA 105", "Cut A7 · Abrasion 5 · Puncture 3 · Dexterity 5"], ["EN 388:2016+A1:2018", "4X42F"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "High-mobility carbon blend, 18 gauge"], ["Coating", "Foam nitrile palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2092": { desc:"Next-generation cut-protection gloves with A7 cut and EN 388 cut F on an ultra-fine 18-gauge liner. Ultra NanoArn™ is built to endure razor-edge contact in high-risk tasks, TensionForm™ regulates stretch and recovery for a consistent fit, TruTouch™ fingertip zones give precise handling and touchscreen use, and the precision-fit liner with sandy nitrile keeps airflow and lasting comfort.",
    tech:[["TEGX® platform", "Cut-protection system of the Xyron series."], ["Ultra NanoArn™", "Fine-gauge cut-protection yarn for maximum cut resistance in high-risk tasks."], ["TensionForm™", "Tension-control architecture that regulates stretch and recovery for consistent fit and reduced fatigue."], ["TruTouch™", "Fingertip zones for precise handling, tactile clarity and touchscreen interaction."]],
    std:[["ANSI/ISEA 105", "Cut A7 · Abrasion 5 · Puncture 3 · Dexterity 5"], ["EN 388:2016+A1:2018", "4X42F"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "High-mobility carbon blend, 18 gauge"], ["Coating", "Sandy nitrile palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2093": { desc:"Skin-like cut-protection gloves with A6 cut and abrasion 5 on a 21-gauge liner with a sandy nitrile grip. NanoArn™ Neo shields hands from repeated laceration exposure and sharp-edge hazards, the ultra-light seamless liner gives comfort, breathability and stretch recovery, AirWeave™ promotes airflow, and the Precision Grip Design enables confident handling with secure grip control.",
    tech:[["TEGX® platform", "Cut-protection system of the Praxor series."], ["NanoArn™ Neo", "Cut-protection yarn in a skin-like 21-gauge liner."], ["AirWeave™", "Breathable knit structure that promotes airflow and thermal regulation."], ["Sandy nitrile", "Precision grip coating for secure control."]],
    std:[["ANSI/ISEA 105", "Cut A6 · Abrasion 5 · Puncture 3 · Dexterity 5"], ["EN 388:2016+A1:2018", "4X42F"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "High-mobility carbon blend, 21 gauge"], ["Coating", "Sandy nitrile palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2078": { desc:"Engineered for tasks involving cut hazards, this glove protects hands while maintaining grip, dexterity and comfort. The CutCage™ framework reinforces key contact zones for cut resistance, the nitrile foam dotted grip improves handling in dry and light-oily conditions, TruTouch™ fingertips deliver precise tactile control with touchscreen compatibility, and the AirWeave™ liner keeps airflow for lasting comfort.",
    tech:[["TEGX® platform", "Cut-protection system of the Xyron series."], ["CutCage™", "Reinforcement framework protecting critical contact zones against cutting forces."], ["TruTouch™", "Fingertip zones for precise handling and touchscreen use."], ["AirWeave™", "Lightweight breathable knit that promotes airflow."], ["FlexFit™", "Ergonomic fit that supports natural hand movement and reduces fatigue."]],
    std:[["ANSI/ISEA 105", "Cut A3 · Abrasion 4 · Puncture 4"], ["EN 388:2016+A1:2018", "4X43C"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "TexArn™ HPPE blend"], ["Coating", "Foam nitrile, dotted palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2094": { desc:"Next-generation cut protection: a skin-like 21-gauge NanoArn™ Evo liner rated ANSI A7 with precision-fit stretch recovery, for high-risk tasks that still need fine handling. DryHold™ moisture wicking keeps the inside dry; the sandy nitrile palm gives controlled grip through repetitive work.",
    tech:[["TEGX® platform", "Cut-protection system of the Praxor series."], ["NanoArn™ Evo", "High-performance cut-protection yarn in a 21-gauge liner with stretch recovery."], ["DryHold™", "Moisture-wicking system that keeps the inside dry and reduces slippage."], ["Agility-driven liner", "Airflow and continuous comfort in intensive work."]],
    std:[["ANSI/ISEA 105", "Cut A7 · Abrasion 5 · Puncture 3 · Dexterity 5"], ["EN 388:2016+A1:2018", "4X42F"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "NanoArn™ Evo, 21 gauge"], ["Coating", "Sandy nitrile palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2086": { desc:"High-strength CutCage™ TexArn™ liner with ANSI A6 and cut F protection and sandy nitrile LiquiBlock™ technology, for heavy-duty mechanical applications where heavy handling and fluid exposure occur together. The 3/4 double-dipped coating helps prevent liquid penetration while keeping grip, flexibility and touchscreen compatibility; the extended cuff adds wrist coverage.",
    tech:[["TEGX® platform", "Cut-protection system of the Fort series."], ["TexArn™", "Blended high-strength yarn core forming the structural foundation of cut resistance."], ["CutCage™", "Reinforcement framework protecting critical contact zones against cutting forces."], ["LiquiBlock™", "Surface-bonded liquid-repellent coating that resists oil and fluid absorption while keeping grip."], ["TruTouch™", "Fingertip zones for precise handling and touchscreen use."]],
    std:[["ANSI/ISEA 105", "Cut A6 · Abrasion 6 · Puncture 4 · Dexterity 5"], ["EN 388:2016+A1:2018", "4544F"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "Engineered TexArn™ HPPE blend"], ["Coating", "Sandy nitrile, 3/4 double-dipped"], ["Cuff", "Extended elastic knit wrist"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2096": { desc:"Engineered NanoArn™ advanced cut resistance with a smooth three-quarter nitrile coating: ANSI A6 and EN 388 cut F for intense sharp-material handling in wet, dry and oily conditions. NanoArn™ adds strength without bulk, LiquiBlock™ resists oil and fluid absorption, and the sandy palm keeps the grip.",
    tech:[["TEGX® platform", "Cut-protection system of the Fort series."], ["NanoArn™", "Lightweight reinforcement layer that adds strength and structural consistency while keeping dexterity."], ["LiquiBlock™", "Surface-bonded liquid-repellent coating that resists oil and fluid absorption while keeping grip."], ["3/4 nitrile coating", "Liquid resistance over the knuckles with a sandy palm grip."]],
    std:[["ANSI/ISEA 105", "Cut A6 · Abrasion 5 · Puncture 3 · Dexterity 5"], ["EN 388:2016+A1:2018", "4X42F"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "NanoArn™ HPPE blend"], ["Coating", "3/4 smooth nitrile, sandy palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2097": { desc:"Advanced-engineered cut and oil resistant gloves: an 18-gauge high-mobility carbon liner with 3/4 dual nitrile. The Industrial Protection Design delivers cut and liquid protection for prolonged use, FlexSkin™ keeps flexibility and tactility, TruTouch™ fingertips give precise handling and touchscreen use, and the 3/4 nitrile coating is a liquid-resistant barrier with sandy palm grip in wet, dry and oily conditions.",
    tech:[["TEGX® platform", "Cut-protection system of the Xyron series."], ["FlexSkin™", "Ultra-fine gauge layer enhancing flexibility, tactility and dexterity in cut-resistant gloves."], ["TruTouch™", "Fingertip zones for precise handling, tactile clarity and touchscreen interaction."], ["3/4 nitrile coating", "Liquid-resistant barrier with sandy palm grip in wet, dry and oily conditions."]],
    std:[["ANSI/ISEA 105", "Cut A7 · Abrasion 5 · Puncture 3 · Dexterity 5"], ["EN 388:2016+A1:2018", "4X42F"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "NanoArn™ high-mobility carbon blend, 18 gauge"], ["Coating", "3/4 dual nitrile, sandy palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "6050": { desc:"Advanced A7 and cut F protection with a TEGX® TexArn™ para-aramid liner and crinkle latex. The para-aramid liner provides reliable laceration protection for safe and consistent task performance, TexArn™ forms the structural foundation of cut resistance, DryHold™ keeps the inside dry and reduces slippage, and the crinkle latex palm enhances traction and control in dry, wet and oily conditions.",
    tech:[["TEGX® platform", "Cut-protection system of the Super Cut series."], ["TexArn™ para-aramid", "Blended high-strength yarn core with inherent heat resistance."], ["DryHold™", "Moisture-wicking system that keeps the inside dry and reduces slippage."], ["Crinkle latex", "Grip coating for traction and control in dry, wet and oily conditions."]],
    std:[["ANSI/ISEA 105", "Cut A7 · Abrasion 5 · Puncture 5 · Dexterity 5"], ["EN 388:2016+A1:2018", "3X44F"], ["EN 407:2020", "X2XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "TEGX® aramid blend"], ["Coating", "Crinkled latex palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2098": { desc:"Exceptional cut protection for sharp-edge hazards in high-risk industrial work. The TexArn™ Max para-aramid liner carries ANSI A7 and EN 388 cut F with inherent resistance to high temperatures; TruTouch™ fingertips keep precision and touchscreen use; the sandy nitrile coating gives breathable 360° tactility and grip.",
    tech:[["TEGX® platform", "Cut-protection system of the Super Cut series."], ["TexArn™ Max", "Para-aramid liner with inherent cut resistance and heat protection."], ["TruTouch™", "Fingertip zones for precise handling and touchscreen use."], ["DryHold™", "Moisture-wicking system that keeps the inside dry."], ["CutCage™", "Reinforcement framework in the zones where cutting force concentrates."]],
    std:[["ANSI/ISEA 105", "Cut A7 · Abrasion 5 · Puncture 4 · Dexterity 5"], ["EN 388:2016+A1:2018", "4X44F"], ["EN 407:2020", "X2XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "TexArn™ Max para-aramid blend"], ["Coating", "Sandy nitrile"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "2099": { desc:"Ultimate cut-protection gloves with ANSI A9 cut and abrasion 5: a next-generation NanoArn™ CutCage™ liner with sandy nitrile. Extreme Cut Protection withstands sharp-edge hazards in high-risk industrial environments, the fine-gauge NanoArn™ glove gives maximum cut protection through relentless handling of aggressive sharp materials, FlexSkin™ keeps airflow and agility, and FlexFit™ shaping follows natural hand movement.",
    tech:[["TEGX® platform", "Cut-protection system of the Super Cut series."], ["NanoArn™", "Fine-gauge cut-protection yarn for maximum super-cut protection."], ["CutCage™", "Reinforcement framework in the zones where cutting force concentrates."], ["FlexSkin™", "Agility-driven liner with sandy nitrile coating for airflow and continuous comfort."], ["FlexFit™", "Anatomical shaping engineered to follow natural hand movement."]],
    std:[["ANSI/ISEA 105", "Cut A9 · Abrasion 5 · Puncture 3 · Dexterity 5"], ["EN 388:2016+A1:2018", "4X42F"], ["EN 407:2020", "X1XXXX"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "High-mobility carbon blend, fine gauge"], ["Coating", "Sandy nitrile palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "5588": { desc:"Multi-hazard specialised cut gloves, arc-rated CAT 3 with an ATPV of 9.3 cal/cm² and NFPA 70E compliant. The TEGX® TexArn™ aramid-blend liner withstands arc flash exposure and carries ANSI A4 cut; an AirWeave™ knit keeps airflow and thermal regulation; the foam neoprene palm gives grip and lasting comfort.",
    tech:[["TEGX® platform", "Cut-protection system with arc-rated construction."], ["TexArn™", "Blended high-strength aramid yarn core forming the structural foundation of cut resistance."], ["AirWeave™", "Breathable knit structure that promotes airflow and thermal regulation."], ["LiquiBlock™", "Surface-bonded liquid-repellent coating that resists oil and fluid absorption."]],
    std:[["ANSI/ISEA 105", "Cut A4 · Abrasion 4 · Puncture 3 · Dexterity 5"], ["Arc rating", "NFPA 70E · CAT 3 · ATPV 9.3 cal/cm²"], ["EN 388:2016+A1:2018", "3X42D"], ["EN 407:2020", "4132XX"], ["EN ISO 21420:2020", "CE · Category III"]],
    meta:[["Liner", "TexArn™ aramid blend"], ["Coating", "Foam neoprene palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "5589": { desc:"Multi-hazard specialised cut gloves, arc-rated CAT 2 with an ATPV of 13 cal/cm² and NFPA 70E compliant. The TEGX® technology liner withstands arc flash exposure with lasting protection and stability, the advanced TexArn™ blended yarn gives outstanding cut, abrasion and tear resistance, AirWeave™ keeps airflow and thermal regulation, and the premium para-aramid liner carries extreme cut resistance.",
    tech:[["TEGX® platform", "Cut-protection system with arc-rated construction."], ["TexArn™", "Blended high-strength aramid yarn core forming the structural foundation of cut resistance."], ["AirWeave™", "Breathable knit structure that promotes airflow and thermal regulation."], ["Sandy neoprene", "Foam neoprene palm for grip on cable and tools."]],
    std:[["ANSI/ISEA 105", "Cut A5 · Abrasion 6 · Puncture 2 · Dexterity 5"], ["Arc rating", "NFPA 70E · CAT 2 · ATPV 13 cal/cm²"], ["EN 388:2016+A1:2018", "4X42E"], ["EN 407:2020", "X2XXXX"], ["EN ISO 21420:2020", "CE · Category III"]],
    meta:[["Liner", "TEGX® para-aramid blend"], ["Coating", "Foam neoprene palm"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 144 prs / carton"]] },
  "4510": { desc:"Ambidextrous cut gloves with ANSI A7 and cut F protection on a seamless TexArn™ CutCage™ liner. The ultra-high-performance liner gives reliable cut and laceration protection for food processing and packaging, Food-Safe Cut Protection supports hygiene compliance, and the antimicrobial ambidextrous liner helps maintain hygiene, control odours and support food safety.",
    tech:[["TEGX® platform", "Cut-protection system of the Super Cut series."], ["TexArn™", "Blended high-strength yarn core forming the structural foundation of cut resistance."], ["CutCage™", "Reinforcement framework in the zones where cutting force concentrates."], ["Antimicrobial liner", "Hygiene and odour control for food environments."]],
    std:[["ANSI/ISEA 105", "Cut A7 · Abrasion 3 · Puncture 3 · Dexterity 5"], ["EN 388:2016+A1:2018", "444XF"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "HPPE reinforced blend, seamless, ambidextrous"], ["Coating", "Uncoated"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pc / polybag · 100 pcs / carton"]] },
  "6075": { desc:"Specialised hi-vis thermo cut gloves: a cut liner with brushed acrylic terry and a 3/4 sandy nitrile coating. Dual-Layer Thermal Defense combines a high-performance shell with a brushed lining for warmth retention, the TexArn™ hybrid winter design delivers strength, thermal stability and cut protection in the cold, CoreTherm™ insulation retains warmth without restricting mobility, and the 3/4 dip gives layered liquid resistance with confident grip.",
    tech:[["TEGX® platform", "Cut-protection system of the Cut Defender series."], ["TexArn™", "Hybrid winter design with high strength, thermal stability and cut protection."], ["CoreTherm™", "Integrated insulation layer that retains warmth without restricting mobility."], ["3/4 sandy nitrile", "Layered liquid resistance with confident grip in wet, dry and oily work."]],
    std:[["ANSI/ISEA 105", "Cut A6 · Abrasion 6 · Puncture 4"], ["EN 388:2016+A1:2018", "4X44F"], ["EN 407:2020", "X2XXXX"], ["EN 511:2006", "121"], ["EN ISO 21420:2020", "CE · Category II"]],
    meta:[["Liner", "HPPE + brushed acrylic terry"], ["Coating", "Sandy nitrile, 3/4, smooth under"], ["Sizes", "7/S · 8/M · 9/L · 10/XL · 11/2XL"], ["Packing", "1 pr / polybag · 60 prs / carton"]] },
};
const INTRO = { title:'Engineered by hazard.<br>Designed for precision.', lead:'All twenty-two TEGX® cut-resistant gloves, pulled onto your hand one after another as you scroll, in the order of the catalogue. Blades, glass, sheet metal, arc flash: the hazard changes, the liner holds.' };

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
const EXPLORE = document.getElementById('explore'), cards = EXPLORE ? [...EXPLORE.querySelectorAll('.explore-card')] : [];
const techLogo = $('#techLogo');
const TECH_LOGO = { '7095':'tegx', '7096':'tegx', '7097':'tegx', '7098':'tegx', '2085':'tegx', '2095':'tegx', '2080':'tegx', '2091':'tegx', '2092':'tegx', '2093':'tegx', '2078':'tegx', '2094':'tegx', '2086':'tegx', '2096':'tegx', '2097':'tegx', '6050':'tegx', '2098':'tegx', '2099':'tegx', '5588':'tegx', '5589':'tegx', '4510':'tegx', '6075':'tegx' };
const bgs = [...document.querySelectorAll('.bg-photo')];
const AV = '?v=2.1.0';                                   // asset version query, set by the series builder (cache-busting after a re-render)
const calloutLayer = $('#callouts');
const ctx = canvas.getContext('2d', { alpha:true });

/* ---------- images ---------- */
const IMG = { bare:null, glove:[null,null,null,null] };
let EXT = null;
const load = src => new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.decoding = 'async'; i.src = src; });
const ready = { bare:false, glove:Array(GLOVES.length).fill(false) };
/* a glove that arrives after its chapter has started is pulled on when it lands (0.45 s), never shown as a bare hand with that glove's callouts */
const arriveAt = Array(GLOVES.length).fill(0); let enteredGi = -1, enteredAt = 0;
const arrival = gi => { if (gi < 0) return 1; if (!ready.glove[gi]) return 0; if (arriveAt[gi] <= enteredAt) return 1;
  const k = clamp((performance.now() - arriveAt[gi]) / 450); if (k < 1) requestRender(true); return k >= 1 ? 1 : easeOut(k); };
fetch('assets/hand/extents.json' + AV, AV ? { credentials:'same-origin', mode:'cors' } : undefined).then(r => r.json()).then(j => { EXT = j; requestRender(); });
load('assets/hand/bare.webp').then(i => { IMG.bare = i; ready.bare = true; requestRender(); });
const loadGlove = i => { if (i < 0 || i >= N || IMG.glove[i] || loadGlove.pending?.[i]) return; (loadGlove.pending ||= {})[i] = true; load(`assets/hand/st-${GLOVES[i].code}.webp` + AV).then(img => (img.decode ? img.decode().catch(() => {}).then(() => img) : img)).then(img => { IMG.glove[i] = img; ready.glove[i] = true; arriveAt[i] = performance.now(); requestRender(); }).catch(() => { delete loadGlove.pending[i]; }); };
/* series pages: bg photos carry data-src / data-src-m. Each is fetched and decoded once (bgReady), then applied; the near chapters
   go first, then the whole page in order, so a fast scroll never meets an empty backdrop or a bare hand where a glove belongs. */
const bgSrc = b => (window.innerWidth <= 900 ? (b.dataset.srcM || b.dataset.src) : b.dataset.src) || '';
const bgReady = {};
const ensureBg = i => { const b = bgs[i]; if (!b) return Promise.resolve(); const s = bgSrc(b); if (!s) return Promise.resolve();
  if (bgReady[s]) return bgReady[s];
  return bgReady[s] = load(s).then(img => (img.decode ? img.decode().catch(() => {}) : Promise.resolve())).then(() => { if (bgSrc(b) === s && b.dataset.on !== s) { b.dataset.on = s; b.style.backgroundImage = `url(${s})`; } }).catch(() => { delete bgReady[s]; });
};
const bgNear = ch => { const c = Math.max(0, Math.min(N - 1, ch));
  bgs.forEach((b, i) => { if (!b.dataset.src) return; const near = Math.abs(i - c) <= 1; b.style.display = near ? '' : 'none'; if (near) ensureBg(i); }); };
const warmBg = i => new Promise(res => { const b = bgs[i]; const s = b && bgSrc(b); if (!s || bgReady[s]) return res(); const im = new Image(); im.onload = im.onerror = () => res(); im.src = s; });   // HTTP cache only, nothing held decoded
const loadNear = ch => { for (let k = Math.max(0, ch - 1); k <= Math.min(N - 1, Math.max(0, ch) + 2); k++) loadGlove(k); bgNear(ch); };
loadNear(0);
let preloadStarted = false;
const preloadAll = () => {                              // the rest of the page, in order, one at a time, after the first glove is on screen
  if (preloadStarted) return; preloadStarted = true;
  let k = 0; const order = []; for (let i = Math.max(0, currentChapter); i < N; i++) order.push(i); for (let i = 0; i < Math.max(0, currentChapter); i++) order.push(i);
  const step = () => { if (k >= order.length) return; const i = order[k++]; loadGlove(i); warmBg(i).then(() => setTimeout(step, 40)); };
  step();
};
(window.requestIdleCallback || (f => setTimeout(f, 1200)))(preloadAll);

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
    flood.style.background = dark > 0 ? `color-mix(in srgb, rgb(var(--tech-rgb, var(--accent-rgb))) ${Math.round((1 - dark) * 100)}%, #07090c)` : 'rgb(var(--tech-rgb, var(--accent-rgb)))';
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
  layoutCallouts(); fitCopy();
  requestRender(true);
}
// desktop: a long title (series pages) steps down until the buttons clear the dock; no-op when the copy already fits (the live page)
function fitCopy() {
  const c = $('#copy'), d = $('#dock'), t = $('#title'); if (!c || !d || !t) return;
  t.style.fontSize = '';
  if (!EXPLORE || window.innerWidth <= 900) return;                 // series pages only: the live page is never touched
  const dr = d.getBoundingClientRect(), right = Math.max(0, ...[...$('#actions').children, ...$('#ratings').children].map(e => e.getBoundingClientRect().right));
  if (right < dr.left) return;                                      // a short dock that clears the copy column
  const low = () => c.getBoundingClientRect().top + (c.clientHeight + c.firstElementChild.offsetHeight) / 2 > dr.top - 16;
  for (let fs = parseFloat(getComputedStyle(t).fontSize); low() && fs > 48; ) { fs -= 4; t.style.fontSize = fs + 'px'; }
}
let unitPx = 1;

/* ---------- state ---------- */
let target = 0, t = 0, raf = 0, lastKey = '';
let aimX = 0, aimY = 0, px = 0, py = 0, lastTime = 0, idle = 0, lastDt = 16;
let currentChapter = -2;          // -1 intro, 0..N-1 gloves, N outro
let hashTimer = 0;
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
  if (gi !== enteredGi) { enteredGi = gi; enteredAt = performance.now(); }
  const af = arrival(gi);
  // series pages: while this chapter's glove is still on its way the hand is not shown at all (never a bare hand under a glove's copy); it fades in as the glove lands
  const handVis = (EXPLORE && gi >= 0) ? (ready.glove[gi] ? (af >= 1 ? 1 : Math.min(1, af * 2.5)) : 0) : 1;
  const iu = seg.phase === 'intro' ? (REVEAL ? seg.u - 1 : seg.u) : 1;          // the hazard intro's own clock; negative while the opener runs
  const introLift = seg.phase === 'intro' ? (1 - easeOut(clamp(iu / 0.55))) : 0;
  if (REVEAL) renderReveal(seg);
  const outroDrop = seg.phase === 'outro' ? easeOut(clamp(seg.u / 0.6)) : 0;

  // hand layer transform (parallax + idle float + intro rise)
  const floatY = reduced.matches ? 0 : Math.sin(idle * 0.9) * 3;
  const lift = introLift * window.innerHeight * 0.42 + outroDrop * window.innerHeight * 0.55;
  hand.style.transform = `translate(calc(-50% + ${px * -10}px), ${lift + floatY + py * -6}px)`;
  hand.style.opacity = String((1 - outroDrop * 0.6) * (REVEAL ? clamp((iu + 0.12) / 0.14) : 1) * handVis);   // hidden under the opener

  // background parallax: slow drift with t, pointer counter-move
  const drift = t * 1.1;
  bgs.forEach((b, i) => {
    if (b.style.display === 'none') return;        // series pages: a far backdrop, out of the layer tree
    const local = t - 1 - i;                       // -1..1 around the chapter
    b.style.transform = `translate3d(${px * 14}px, ${(-drift * 1.6 + local * 2.5) + py * 10}px, 0) scale(${1.06 + Math.abs(local) * 0.02})`;
    b.classList.toggle('on', gi === i);
  });
  bignum.style.transform = `translate3d(${px * -18}px, ${(-(t % 1) * 60) + py * -8}px, 0)`;

  // canvas
  const gpd = af >= 1 ? gp : { p: gp.p * af, dir: 'on' };
  drawHand(gi, gpd);

  // chapter DOM updates
  setChapter(seg, gp, af);
  updateCallouts(seg, af);

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
function setChapter(seg, gp, af = 1) {
  const ch = seg.phase === 'intro' ? -1 : seg.phase === 'outro' ? N : seg.i;
  if (ch !== currentChapter) {
    currentChapter = ch;
    const g = GLOVES[ch];
    const rgb = g ? g.accent : [63,120,224];
    document.documentElement.style.setProperty('--accent-rgb', rgb.join(','));
    chips.forEach((c, i) => c.classList.toggle('on', i === ch));
    const dock = $('#dock'), chip = chips[ch];                          // a long dock (series pages) follows the lit chip; no-op when every chip fits
    if (dock && chip && dock.scrollWidth > dock.clientWidth + 1) dock.scrollTo({ left: chip.offsetLeft - (dock.clientWidth - chip.offsetWidth) / 2, behavior: 'smooth' });
    loadNear(ch); cards.forEach((c, i) => c.classList.toggle('on', i === ch));
    if (EXPLORE && !deepLinking) { clearTimeout(hashTimer); hashTimer = setTimeout(() => { const want = g ? `#st-${g.code}` : ''; if (location.hash !== want) { try { history.replaceState(null, '', want || location.pathname + location.search); } catch (e) {} } }, 700); }
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
      const si = $('#stdIcons'); si.src = `assets/std/st-${g.code}.webp` + AV; si.alt = g.standards; si.style.display = '';
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
    fitCopy();
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
    if (EXPLORE && !ready.glove[seg.i]) { label = `LOADING ST-${GLOVES[seg.i].code}`; cls = 'fitting'; }
    else if (gp.dir === 'on' || af < 1) { label = 'PULLING ON'; cls = 'fitting'; }
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
function updateCallouts(seg, af = 1) {
  if (!calloutNodes.length) return;
  calloutNodes.forEach((n, i) => {
    const start = CO_START + i * CO_STEP;
    let a = 0;
    if (seg.phase === 'chapter') {
      const inA = easeOut(clamp((seg.u - start) / CO_FADE));
      const outA = 1 - clamp((seg.u - (OFF_START - 0.06)) / 0.05);
      a = Math.min(inA, outA, af >= 1 ? 1 : 0);
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
  $('#dImage').src = `assets/pack/st-${g.code}.webp` + AV; $('#dImage').alt = `STEGO ST-${g.code} ${g.name}`;
  $('#dNo').textContent = String(i + 1).padStart(2, '0'); $('#dPlatform').textContent = `${g.platform}  ·  ${g.category}`;
  $('#dTitle').innerHTML = `ST-${g.code}<br>${g.name}`; $('#dDesc').textContent = d.desc;
  $('#dTech').innerHTML = d.tech.map(([t, x]) => `<li><b>${t}</b> — ${x}</li>`).join('');
  $('#dStdImg').src = `assets/std/st-${g.code}.webp` + AV; $('#dStdImg').alt = g.standards;
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
function goTo(i, instant) {
  const tt = i < 0 ? 0 : i >= N ? T_OUT + 0.45 : I0 + i + 0.42;
  if (i >= 0 && i < N) loadGlove(i);
  window.scrollTo({ top: tt * unitPx, behavior: (instant || reduced.matches) ? 'instant' : 'smooth' });
  if (instant) { target = t = clamp(tt, 0, T_END); requestRender(true); }
}
/* deep link: #st-7098 (or #7098) lands on that glove, opener skipped; the explore cards and the product-page buttons use it */
const hashIndex = () => { const m = /^#(?:st-)?(\d{4})$/i.exec(location.hash || ''); return m ? GLOVES.findIndex(g => g.code === m[1]) : -1; };
let deepLinking = false;
window.addEventListener('hashchange', () => { const i = hashIndex(); if (i >= 0) goTo(i); });
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
window.addEventListener('resize', () => { size(); onScroll(); bgNear(currentChapter); });
reduced.addEventListener?.('change', () => requestRender(true));
size();
{ const i = hashIndex(); if (i >= 0) { deepLinking = true; if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; goTo(i, true); requestAnimationFrame(() => requestAnimationFrame(() => { deepLinking = false; })); } }
onScroll(); requestRender(true);
})();
