// ============================================================
// RESPO.boot · Master-Startpunkt
// ============================================================

import { STATION } from "./STATION.axis.js";
import { SYSTEM } from "./system.boot.js";

export async function RESPO_BOOT() {

    // 1 — Stationen aktivieren
    await STATION.boot();
    console.log("Station-Achse aktiv");

    // 2 — System starten
    await SYSTEM.boot();
    console.log("SYSTEM.boot aktiv");

    // 3 — RESPO-UI aktivieren (optional)
    const ui = document.getElementById("respo-ui");
    if (ui) ui.style.display = "block";

    return "RESPO + STATION + SYSTEM aktiv";
}
