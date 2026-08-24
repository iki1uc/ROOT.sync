// ============================================================
// RESPO.boot · Master-Layer
// ============================================================

import { AXIOM0 } from './XI-NC3x3.room.js';
import { SYSTEM } from './system.boot.js';

export async function RESPO_BOOT() {

    // 1 — Axiom-0 zuerst (Admin-0)
    await AXIOM0.prefetch?.();

    // 2 — SYSTEM.boot starten (Suite)
    await SYSTEM.boot();

    // 3 — RESPO-UI aktivieren
    const ui = document.getElementById("respo-ui");
    if (ui) ui.style.display = "block";

    return "RESPO + SYSTEM aktiv";
}
