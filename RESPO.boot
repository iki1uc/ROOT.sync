// ============================================================
// RESPO.boot · Optimierter Master-Startpunkt
// ============================================================

import { STATION } from "./STATION.axis.js";
import { SYSTEM } from "./system.boot.js";

export async function RESPO_BOOT() {

    console.log("🔵 RESPO: Starte Master-Korridor...");

    // 1 — Stationen aktivieren (OS → BOOT → 243 → iki1uc)
    await STATION.boot();
    console.log("🟢 RESPO: Station-Achse aktiv");

    // 2 — System starten (KERN + SERVICE + SUITE + META)
    await SYSTEM.boot();
    console.log("🟢 RESPO: SYSTEM.boot aktiv");

    // 3 — RESPO-UI aktivieren (optional)
    const ui = document.getElementById("respo-ui");
    if (ui) ui.style.display = "block";

    console.log("🎉 RESPO: Master-Start abgeschlossen!");

    return "RESPO + STATION + SYSTEM aktiv";
}
