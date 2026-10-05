export const SYSTEM = {
    ready: false,
    logEntry(msg){
      const t = new Date().toLocaleTimeString();
      console.log(msg);
      const el = document.getElementById('log');
      if(el) el.innerText += `\n[${t}] ${msg}`;
    },
    async boot() {
        if(this.ready) return;
        this.logEntry('🚀 SYSTEM: Starte /7...');
        this.logEntry('✅ Axiom-0 XI-NC3x3 aktiv');
        this.logEntry('✅ Axiom-2 Service aktiv');
        this.logEntry('🎉 SYSTEM aktiv! Q is empty = Maß aller Dinge');
        this.ready = true;
    }
};
