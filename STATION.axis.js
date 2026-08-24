// ============================================================
// STATION.axis · OS → BOOT → 243 → iki1uc
// ============================================================

import { AXIOM0 } from "./XI-NC3x3.room.js";
import { AXIOM2 } from "../service/AXIOM2.service.js";

export const STATION = {
    async boot() {

        console.log("OS Station aktiv (Axiom-1: Brutus/User)");

        await AXIOM0.prefetch?.();
        console.log("BOOT Station aktiv (Axiom-0: XI-NC3×3.room)");

        await AXIOM2.init?.();
        console.log("243 Station aktiv (Axiom-2: Service)");

        console.log("iki1uc Station aktiv (Ordnung)");
    }
};
