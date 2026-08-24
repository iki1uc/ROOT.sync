// ============================================================
// RESPO.boot · Optimierter Master-Startpunkt (geo.raw integriert)
// ============================================================

import { STATION } from "./STATION.axis.js";
import { SYSTEM } from "./system.boot.js";
import { GEO } from "./geo.raw.js";   // ← NEU: Raum-Geometrie

export async function RESPO_BOOT() {

    console.log("🔵 RESPO: Starte Master-Korridor...");

    // 1 — Raum-Geometrie laden (3 → 9 → ◎ → 81 → △ → 27 → ▣ → 3↺)
    GEO.init();
    console.log("🟣 RESPO: geo.raw aktiv (Raum-Achse)");

    // 2 — Stationen aktivieren (OS → BOOT → 243 → iki1uc)
    await STATION.boot();
    console.log("🟢 RESPO: Station-Achse aktiv");

    // 3 — System starten (KERN + SERVICE + SUITE + META)
    await SYSTEM.boot();
    console.log("🟢 RESPO: SYSTEM.boot aktiv");

    // 4 — RESPO-UI aktivieren (optional)
    const ui = document.getElementById("respo-ui");
    if (ui) ui.style.display = "block";

    console.log("🎉 RESPO: Master-Start abgeschlossen!");

    return "RESPO + GEO + STATION + SYSTEM aktiv";
}
