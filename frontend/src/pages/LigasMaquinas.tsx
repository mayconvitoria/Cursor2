import { useNavigate, Link } from 'react-router-dom'

export default function LigasMaquinas() {
  const navigate = useNavigate()
  return (
    <div className="bg-industrial-surface font-display text-industrial-text min-h-screen pb-28">
      
<header className="sticky top-0 z-30 bg-industrial-bg/95 backdrop-blur-md border-b border-industrial-border px-4 py-4 flex items-center justify-between shadow-lg">
<button type="button" onClick={() => navigate('/menu')} className="flex items-center justify-center p-3 rounded-lg bg-industrial-surface border border-industrial-border hover:bg-slate-800 transition-colors text-industrial-text active:bg-industrial-accent active:text-white">
<span className="material-symbols-outlined text-xl">arrow_back_ios</span>
</button>
<h1 className="text-lg font-bold tracking-tight text-center flex-1 text-white uppercase">Ligas e Máquinas</h1>
<div className="w-12"></div> 
</header>
<main className="max-w-md mx-auto p-4 space-y-8">
<section className="space-y-4">
<h2 className="text-xs font-bold uppercase tracking-widest text-industrial-accent px-1 flex items-center gap-2">
<span className="material-symbols-outlined text-base">factory</span>
                Dados de Produção
            </h2>
<div className="bg-industrial-bg rounded-none border-l-4 border-l-industrial-accent border-y border-r border-industrial-border p-5 shadow-md space-y-5">
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-industrial-text-muted uppercase tracking-wide">Data</label>
<div className="relative">
<input className="w-full h-14 rounded bg-industrial-surface border-2 border-industrial-border text-white focus:border-industrial-accent focus:ring-0 transition-all text-base px-4 font-mono" type="date" value="2023-10-05"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-industrial-text-muted uppercase tracking-wide">Nº OP</label>
<input className="w-full h-14 rounded bg-industrial-surface border-2 border-industrial-border text-white focus:border-industrial-accent focus:ring-0 transition-all text-base px-4 placeholder-slate-600 font-mono" inputMode="numeric" placeholder="Digite o número da OP" type="number"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-industrial-text-muted uppercase tracking-wide">Atividade</label>
<div className="relative">
<select className="w-full h-14 rounded bg-industrial-surface border-2 border-industrial-border text-white focus:border-industrial-accent focus:ring-0 transition-all text-base px-4 pr-12 appearance-none">
<option value="">Selecione a atividade</option>
<option value="envase">Envase</option>
<option value="mistura">Mistura</option>
<option value="carregamento">Carregamento</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-industrial-accent pointer-events-none text-2xl">expand_more</span>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-industrial-text-muted uppercase tracking-wide">Qual Máquina?</label>
<div className="relative">
<select className="w-full h-14 rounded bg-industrial-surface border-2 border-industrial-border text-white focus:border-industrial-accent focus:ring-0 transition-all text-base px-4 pr-12 appearance-none">
<option value="">Selecione a máquina</option>
<option value="m1">Máquina 01 - Principal</option>
<option value="m2">Máquina 02 - Reserva</option>
<option value="m3">Máquina 03 - Compacta</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-industrial-accent pointer-events-none text-2xl">expand_more</span>
</div>
</div>
</div>
</section>
<section className="space-y-4">
<h2 className="text-xs font-bold uppercase tracking-widest text-industrial-accent px-1 flex items-center gap-2">
<span className="material-symbols-outlined text-base">schedule</span>
                Horários e Equipe
            </h2>
<div className="bg-industrial-bg rounded-none border-l-4 border-l-slate-500 border-y border-r border-industrial-border p-5 shadow-md space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="flex flex-col gap-2">
<label className="text-xs font-bold text-industrial-text-muted uppercase tracking-wide">Café (Início)</label>
<div className="relative">
<input className="w-full h-14 rounded bg-industrial-surface border-2 border-industrial-border text-white focus:border-industrial-accent focus:ring-0 transition-all text-base px-3 font-mono text-center" type="time"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold text-industrial-text-muted uppercase tracking-wide">Café (Fim)</label>
<div className="relative">
<input className="w-full h-14 rounded bg-industrial-surface border-2 border-industrial-border text-white focus:border-industrial-accent focus:ring-0 transition-all text-base px-3 font-mono text-center" type="time"/>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-industrial-text-muted uppercase tracking-wide">Nº de Pessoas</label>
<div className="flex items-center">
<span className="bg-industrial-surface border-y-2 border-l-2 border-industrial-border h-14 w-12 flex items-center justify-center rounded-l">
<span className="material-symbols-outlined text-slate-500">group</span>
</span>
<input className="w-full h-14 rounded-r border-2 border-industrial-border bg-industrial-surface text-white focus:border-industrial-accent focus:ring-0 transition-all text-lg px-4 font-mono" inputMode="numeric" placeholder="0" type="number"/>
</div>
</div>
</div>
</section>
<section className="space-y-4">
<h2 className="text-xs font-bold uppercase tracking-widest text-industrial-accent px-1 flex items-center gap-2">
<span className="material-symbols-outlined text-base">analytics</span>
                Métricas de Tempo e Volume
            </h2>
<div className="bg-industrial-bg rounded-none border-l-4 border-l-slate-500 border-y border-r border-industrial-border p-5 shadow-md space-y-5">
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-industrial-text-muted uppercase tracking-wide">Quantidade (sc)</label>
<input className="w-full h-14 rounded bg-industrial-surface border-2 border-industrial-border text-white focus:border-industrial-accent focus:ring-0 transition-all text-xl font-bold px-4 text-right font-mono" inputMode="decimal" placeholder="0.00" step="0.01" type="number"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-industrial-text-muted uppercase tracking-wide">Tempo Empilhadeiras (min)</label>
<input className="w-full h-14 rounded bg-industrial-surface border-2 border-industrial-border text-white focus:border-industrial-accent focus:ring-0 transition-all text-xl font-bold px-4 text-right font-mono" inputMode="decimal" placeholder="0.0" step="0.1" type="number"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-industrial-text-muted uppercase tracking-wide">Tempo da Máquina (min)</label>
<input className="w-full h-14 rounded bg-industrial-surface border-2 border-industrial-border text-white focus:border-industrial-accent focus:ring-0 transition-all text-xl font-bold px-4 text-right font-mono" inputMode="decimal" placeholder="0.0" step="0.1" type="number"/>
</div>
</div>
</section>
<section className="space-y-4">
<h2 className="text-xs font-bold uppercase tracking-widest text-industrial-accent px-1 flex items-center gap-2">
<span className="material-symbols-outlined text-base">calculate</span>
                Campos Calculados
            </h2>
<div className="bg-slate-800/50 rounded border border-industrial-border p-5 flex items-center justify-between shadow-inner">
<div>
<p className="text-sm font-bold text-slate-300 uppercase tracking-wide">Ritmo de Produção</p>
<p className="text-xs text-slate-500 mt-1">Sacos por hora (sc/hr)</p>
</div>
<div className="text-right bg-black/40 px-4 py-2 rounded border border-industrial-border">
<span className="text-3xl font-black text-industrial-accent font-mono tracking-tighter">0.00</span>
</div>
</div>
</section>
</main>
<div className="fixed bottom-0 left-0 right-0 z-40 bg-industrial-bg border-t border-industrial-border pb-safe-area shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
<div className="max-w-md mx-auto px-4 pt-4 pb-6">
<button className="w-full h-16 bg-industrial-accent hover:bg-orange-600 active:bg-orange-700 text-white font-bold rounded shadow-lg shadow-orange-900/40 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg uppercase tracking-wide">
<span className="material-symbols-outlined text-[24px]">save</span>
                Salvar Atividade
            </button>
<div className="grid grid-cols-3 gap-2 mt-5 border-t border-slate-700/50 pt-4">
<Link className="flex flex-col items-center justify-center gap-1.5 text-slate-500 hover:text-white transition-colors" to="/menu">
<span className="material-symbols-outlined text-2xl">home</span>
<p className="text-[10px] font-bold uppercase tracking-widest">Início</p>
</Link>
<Link className="flex flex-col items-center justify-center gap-1.5 text-industrial-accent" to="/ligas-maquinas">
<span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: `'FILL' 1` }}>list_alt</span>
<p className="text-[10px] font-bold uppercase tracking-widest">Atividades</p>
</Link>
<Link className="flex flex-col items-center justify-center gap-1.5 text-slate-500 hover:text-white transition-colors" to="/menu">
<span className="material-symbols-outlined text-2xl">person</span>
<p className="text-[10px] font-bold uppercase tracking-widest">Perfil</p>
</Link>
</div>
</div>
</div>


    </div>
  );
}
