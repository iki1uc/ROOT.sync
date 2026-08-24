// ============================================================
// RESPO.boot · Master-Layer
// ============================================================

import { AXIOM0 } from '../ROOT.sync/XI-NC3x3.room.js';
import { SYSTEM } from '../SYSTEM.boot.js';

export async function RESPO_BOOT() {

    // 1 — Axiom-0 zuerst
    await AXIOM0.prefetch?.();

    // 2 — SYSTEM.boot starten
    await SYSTEM.boot();

    return "RESPO + SYSTEM aktiv";
}
