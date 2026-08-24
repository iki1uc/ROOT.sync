import { AXIOM0 } from "./XI-NC3x3.room.js";
import { AXIOM2 } from "../service/AXIOM2.service.js";

export const STATION = {
    async boot() {
        // OS → Brutus (User)
        console.log("OS Station aktiv (Axiom-1)");

        // BOOT → Axiom-0
        await AXIOM0.prefetch?.();
        console.log("BOOT Station aktiv (Axiom-0)");

        // 243 → Axiom-2
        await AXIOM2.init?.();
        console.log("243 Station aktiv (Axiom-2)");

        // iki1uc → Ordnung
        console.log("iki1uc Station aktiv (Ordnung)");
    }
};
