//"use strict";

import * as toRender from "./render"
import * as classes from "./npcClasses"

let fajnyGostek = new classes.npc(null, {x: 10, y: 12, rotation:0});
let npcToRender = new toRender.spritePosition();
npcToRender.add(fajnyGostek);
npcToRender.del(fajnyGostek);