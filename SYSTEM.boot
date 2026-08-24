// ============================================================
// SYSTEM.boot · Ultimative Integration
// ============================================================

import { AXIOM2 } from "./service/AXIOM2.service.js";

export const SYSTEM = {
    ready: false,
    log: [],

    async boot() {

        this.logEntry("🚀 SYSTEM: Starte ultimative Integration...");

        // Axiom-2 aktivieren
        await AXIOM2.init?.();
        this.logEntry("✅ Axiom-2 aktiv (Service)");

        // ... dein bestehender Boot-Code bleibt unverändert ...

        this.ready = true;
        this.logEntry("🎉 SYSTEM vollständig aktiv!");

        return this.ready;
    },

    logEntry(entry) {
        const zeit = new Date().toISOString();
        this.log.push({ zeit, entry });
        console.log(`[SYSTEM] ${entry}`);
    }
};
