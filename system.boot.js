const isQEmpty = () => {
  try { const q = localStorage.getItem('Q.room'); return !q || q === 'empty'; }
  catch { return true; }
};

import { NOAH } from './NOAH/NOAH.js';
import { SYS_VEC } from './SYS.VEC/index.js';
import { CONTINUUM_BRIDGE } from './CONTINUUM/CONTINUUM_BRIDGE.js';
import { DEEPSPACENINE } from './DEEPSPACENINE/DEEPSPACENINE.js';
import { NC99 } from './service/NC9x9.room.js';
import { FIELD } from './service/FIELD/field.core.js';
import { ORT } from './ORT/boot.js';
import { MAIN } from './MAIN/index.js';
import { LIVE } from './LIVE.team/live.load.js';
import { AXIOM0 } from './ROOT.sync/XI-NC3x3.room.js';

export const SYSTEM = {
    name: 'IKI1UC · META-SYSTEM',
    version: '3.0 /7 Q is empty',
    status: 'initializing',
    noah: NOAH, sysvec: SYS_VEC, continuum: CONTINUUM_BRIDGE, deepspace: DEEPSPACENINE,
    nc99: NC99, field: FIELD, ort: ORT, main: MAIN, live: LIVE, axiom0: AXIOM0,
    _logs: [],
    log(msg){
      const zeit = new Date().toLocaleTimeString();
      this._logs.push({zeit, msg});
      console.log(`[${zeit}] ${msg}`);
    },
    async boot() {
        if (this.status === 'aktiv') return;
        this._logs = [];
        this.log('🚀 SYSTEM: Starte - Q Check /7...');
        if (isQEmpty()) this.log('📭 Q is empty → nur wenn rein, verspricht nix');

        try { await this.axiom0.prefetch?.(); this.log('✅ Axiom-0 aktiv'); } catch(e){ this.log(`⚠ Axiom-0: ${e.message}`); }
        try { await this.nc99.init?.(); this.log('✅ NC9x9 81 aktiv'); } catch(e){ this.log(`⚠ NC9x9: ${e.message}`); }
        try { this.field.init?.(); this.log('✅ FIELD C81 aktiv'); } catch(e){ this.log(`⚠ FIELD: ${e.message}`); }
        try { this.sysvec.boot?.(); this.log('✅ SYS.VEC aktiv'); } catch(e){ this.log(`⚠ SYS.VEC: ${e.message}`); }
        try { this.continuum.open?.(); this.log('✅ CONTINUUM offen'); } catch(e){ this.log(`⚠ CONTINUUM: ${e.message}`); }
        try { this.noah.boot?.(true); this.log('✅ NOAH aktiv'); } catch(e){ this.log(`⚠ NOAH: ${e.message}`); }
        try { await this.ort.boot?.(); this.log('✅ ORT aktiv'); } catch(e){ this.log(`⚠ ORT: ${e.message}`); }
        try { await this.main.start?.(); this.log('✅ MAIN aktiv'); } catch(e){ this.log(`⚠ MAIN: ${e.message}`); }
        try { await this.live.load?.(); this.log('✅ LIVE.team aktiv'); } catch(e){ this.log(`⚠ LIVE.team: ${e.message}`); }
        try { this.deepspace.open?.(); this.log('✅ DEEPSPACENINE aktiv'); } catch(e){ this.log(`⚠ DEEPSPACENINE: ${e.message}`); }

        if (new Date().getDate() % 7 === 6) this.log('🧹 /7: bench Ritze - Lohn NEU');

        this.continuum.open = true;
        this.status = 'aktiv';
        this.log('✅ FERTIG - Q is empty = Maß aller Dinge');
        return this.status;
    }
};

if (isQEmpty()) {
  console.log('Q is empty → click um zu starten, /7 verspricht nix');
  window.addEventListener('click', () => SYSTEM.boot(), { once: true });
} else {
  SYSTEM.boot();
}
