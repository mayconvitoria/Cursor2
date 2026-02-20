import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className="bg-background-dark font-display text-text-light min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
      <header className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-md pt-safe px-5 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-0.5">Armazém 01</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-trend-green" />
            <h1 className="text-xl font-bold text-white uppercase tracking-tight">Turno A <span className="text-text-dim font-medium text-lg">#8821</span></h1>
          </div>
        </div>
        <button type="button" className="w-10 h-10 bg-surface-card rounded-lg border border-border-dark flex items-center justify-center hover:bg-border-dark transition-colors relative">
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
          <span className="material-symbols-outlined text-text-dim">person</span>
        </button>
      </header>

      <main className="flex-1 px-4 pb-32 space-y-4">
        <section className="bg-surface-card rounded-lg border border-border-dark p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[120px]">trending_up</span>
          </div>
          <div className="flex justify-between items-start mb-2 relative z-10">
            <h2 className="text-xs font-bold text-text-dim uppercase tracking-widest">Eficiência</h2>
          </div>
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-black text-trend-green tracking-tighter">92%</span>
              <span className="px-1.5 py-0.5 rounded text-xs font-bold bg-trend-green/10 text-trend-green">+4.2%</span>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-surface-darker border-t-trend-green border-r-trend-green flex items-center justify-center transform rotate-45">
              <span className="material-symbols-outlined text-trend-green transform -rotate-45">trending_up</span>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-card rounded-lg border border-border-dark p-4 flex flex-col justify-between h-28">
            <h3 className="text-[10px] font-bold text-primary uppercase tracking-widest">Entrada (Ton)</h3>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-white">450<span className="text-sm text-text-dim font-medium ml-0.5">t</span></span>
              <span className="material-symbols-outlined text-text-dim transform rotate-180">arrow_outward</span>
            </div>
          </div>
          <div className="bg-surface-card rounded-lg border border-border-dark p-4 flex flex-col justify-between h-28">
            <h3 className="text-[10px] font-bold text-primary uppercase tracking-widest">Saída (Ton)</h3>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-white">320<span className="text-sm text-text-dim font-medium ml-0.5">t</span></span>
              <span className="material-symbols-outlined text-text-dim">arrow_outward</span>
            </div>
          </div>
        </div>

        <section className="pt-2">
          <div className="flex justify-between items-center mb-3 px-1">
            <h2 className="text-xs font-bold text-text-dim uppercase tracking-widest">Operações</h2>
            <span className="text-[10px] font-mono text-surface-dark bg-border-dark px-1.5 py-0.5 rounded">V 2.4.1</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Link to="/recebimento" className="bg-surface-card active:bg-surface-darker rounded-lg border border-border-dark p-4 h-32 flex flex-col justify-between group transition-all relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-[0.03] transform translate-x-1/4 translate-y-1/4 scale-150">
                <span className="material-symbols-outlined text-[100px]">local_shipping</span>
              </div>
              <div className="w-10 h-10 bg-surface-darker rounded flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-primary">local_shipping</span>
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-wide text-left">Recebimento</span>
            </Link>
            <Link to="/expedicao" className="bg-surface-card active:bg-surface-darker rounded-lg border border-border-dark p-4 h-32 flex flex-col justify-between group transition-all relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-[0.03] transform translate-x-1/4 translate-y-1/4 scale-150">
                <span className="material-symbols-outlined text-[100px]">forklift</span>
              </div>
              <div className="w-10 h-10 bg-surface-darker rounded flex items-center justify-center group-hover:scale-105 transition-transform relative">
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="material-symbols-outlined text-primary">forklift</span>
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-wide text-left">Expedição</span>
            </Link>
            <Link to="/ligas-maquinas" className="bg-surface-card active:bg-surface-darker rounded-lg border border-border-dark p-4 h-32 flex flex-col justify-between group transition-all relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-[0.03] transform translate-x-1/4 translate-y-1/4 scale-150">
                <span className="material-symbols-outlined text-[100px]">factory</span>
              </div>
              <div className="w-10 h-10 bg-surface-darker rounded flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-text-dim">factory</span>
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-wide text-left">Processos</span>
            </Link>
            <Link to="/controle-maquinario" className="bg-surface-card active:bg-surface-darker rounded-lg border border-border-dark p-4 h-32 flex flex-col justify-between group transition-all relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-[0.03] transform translate-x-1/4 translate-y-1/4 scale-150">
                <span className="material-symbols-outlined text-[100px]">settings</span>
              </div>
              <div className="w-10 h-10 bg-surface-darker rounded flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-text-dim">settings</span>
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-wide text-left">Maquinário</span>
            </Link>
            <Link to="/checklist" className="bg-surface-card active:bg-surface-darker rounded-lg border border-border-dark p-4 h-32 flex flex-col justify-between group transition-all relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-[0.03] transform translate-x-1/4 translate-y-1/4 scale-150">
                <span className="material-symbols-outlined text-[100px]">checklist</span>
              </div>
              <div className="w-10 h-10 bg-surface-darker rounded flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-text-dim">checklist</span>
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-wide text-left">Checklist</span>
            </Link>
            <Link to="/producao-quebras" className="bg-surface-card active:bg-surface-darker rounded-lg border border-border-dark p-4 h-32 flex flex-col justify-between group transition-all relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-[0.03] transform translate-x-1/4 translate-y-1/4 scale-150">
                <span className="material-symbols-outlined text-[100px]">precision_manufacturing</span>
              </div>
              <div className="w-10 h-10 bg-surface-darker rounded flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-text-dim">precision_manufacturing</span>
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-wide text-left">Rendimento</span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-surface-card border-t border-border-dark pb-safe pt-2 z-40">
        <div className="relative px-2 flex justify-between items-end h-16">
          <Link to="/menu" className="flex flex-col items-center justify-center w-1/5 h-full gap-1 border-t-2 border-primary -mt-[2px]">
            <span className="material-symbols-outlined text-[24px] text-primary">home</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Início</span>
          </Link>
          <Link to="/menu" className="flex flex-col items-center justify-center w-1/5 h-full gap-1 text-text-dim hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[24px]">notifications</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Alertas</span>
          </Link>
          <div className="w-1/5 relative h-full flex justify-center">
            <button type="button" className="absolute -top-6 bg-primary hover:bg-primary-hover active:bg-primary-hover text-white rounded-full w-14 h-14 shadow-lg shadow-orange-900/40 flex items-center justify-center transition-transform active:scale-95 border-4 border-background-dark">
              <span className="material-symbols-outlined text-[28px]">qr_code_scanner</span>
            </button>
          </div>
          <Link to="/menu" className="flex flex-col items-center justify-center w-1/5 h-full gap-1 text-text-dim hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[24px]">history</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Histórico</span>
          </Link>
          <Link to="/menu" className="flex flex-col items-center justify-center w-1/5 h-full gap-1 text-text-dim hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[24px]">settings</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Config</span>
          </Link>
        </div>
      </footer>
      <div className="fixed bottom-0 h-safe bg-surface-card w-full z-50" />
    </div>
  )
}
