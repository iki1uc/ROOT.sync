// ============================================================
// RESPO.boot · Master-Startpunkt
// ============================================================

import { STATION } from "./STATION.axis.js";
import { SYSTEM } from "./system.boot.js";

export async function RESPO_BOOT() {

    await STATION.boot();
    console.log("Station-Achse aktiv");

    await SYSTEM.boot();
    console.log("SYSTEM.boot aktiv");

    return "RESPO + STATION + SYSTEM aktiv";
}
