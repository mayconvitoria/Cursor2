import { useNavigate } from 'react-router-dom'

export default function ProducaoQuebras() {
  const navigate = useNavigate()
  return (
    <div className="bg-background text-text-main font-display min-h-screen pb-32 selection:bg-primary selection:text-white">
      
<header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-surface-highlight px-4 py-4 flex items-center justify-between shadow-lg">
<div className="flex items-center gap-4">
<button type="button" onClick={() => navigate('/menu')} className="flex items-center justify-center size-12 rounded-xl bg-surface hover:bg-surface-highlight text-text-main border border-surface-highlight transition-colors active:scale-95">
<span className="material-symbols-outlined text-2xl">arrow_back</span>
</button>
<div>
<h1 className="text-xl font-bold tracking-tight text-white leading-tight">Produção</h1>
<p className="text-xs text-primary font-bold uppercase tracking-wider">Controle de Quebras</p>
</div>
</div>
<button className="flex items-center justify-center size-12 rounded-xl bg-surface hover:bg-surface-highlight text-primary border border-surface-highlight transition-colors active:scale-95">
<span className="material-symbols-outlined text-2xl">history</span>
</button>
</header>
<main className="max-w-md mx-auto p-4 space-y-8">
<section className="space-y-3">
<div className="flex items-center gap-3 px-1">
<div className="p-1.5 bg-primary/20 rounded-lg">
<span className="material-symbols-outlined text-primary text-xl">info</span>
</div>
<h2 className="text-sm font-bold uppercase tracking-widest text-text-muted">Informações Básicas</h2>
</div>
<div className="bg-surface rounded-2xl p-5 shadow-lg border border-surface-highlight space-y-5">
<div>
<label className="block text-sm font-bold mb-2 text-text-muted uppercase tracking-wide">OP (Ordem de Produção)</label>
<div className="relative">
<input className="w-full h-14 pl-4 pr-10 rounded-xl border-2 border-surface-highlight bg-background text-white placeholder-slate-600 focus:border-primary focus:ring-0 transition-colors font-mono text-lg" placeholder="Ex: 2024-001" type="text"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 material-symbols-outlined">qr_code_scanner</span>
</div>
</div>
<div>
<label className="block text-sm font-bold mb-2 text-text-muted uppercase tracking-wide">Mês Fechamento</label>
<div className="relative">
<select className="w-full h-14 pl-4 pr-10 rounded-xl border-2 border-surface-highlight bg-background text-white focus:border-primary focus:ring-0 appearance-none text-lg">
<option value="">Selecione o mês</option>
<option value="jan">Janeiro</option>
<option value="feb">Fevereiro</option>
<option value="mar">Março</option>
</select>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none material-symbols-outlined">expand_more</span>
</div>
</div>
</div>
</section>
<section className="space-y-3">
<div className="flex items-center gap-3 px-1">
<div className="p-1.5 bg-primary/20 rounded-lg">
<span className="material-symbols-outlined text-primary text-xl">schedule</span>
</div>
<h2 className="text-sm font-bold uppercase tracking-widest text-text-muted">Cronograma</h2>
</div>
<div className="bg-surface rounded-2xl p-5 shadow-lg border border-surface-highlight space-y-5">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold mb-2 text-text-muted uppercase">Data Início</label>
<input className="w-full h-14 px-3 rounded-xl border-2 border-surface-highlight bg-background text-white focus:border-primary focus:ring-0 text-base" type="date"/>
</div>
<div>
<label className="block text-xs font-bold mb-2 text-text-muted uppercase">Data Fim</label>
<input className="w-full h-14 px-3 rounded-xl border-2 border-surface-highlight bg-background text-white focus:border-primary focus:ring-0 text-base" type="date"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold mb-2 text-text-muted uppercase">Hora Início</label>
<input className="w-full h-14 px-3 rounded-xl border-2 border-surface-highlight bg-background text-white focus:border-primary focus:ring-0 text-base" type="time"/>
</div>
<div>
<label className="block text-xs font-bold mb-2 text-text-muted uppercase">Hora Fim</label>
<input className="w-full h-14 px-3 rounded-xl border-2 border-surface-highlight bg-background text-white focus:border-primary focus:ring-0 text-base" type="time"/>
</div>
</div>
</div>
</section>
<section className="space-y-3">
<div className="flex items-center gap-3 px-1">
<div className="p-1.5 bg-primary/20 rounded-lg">
<span className="material-symbols-outlined text-primary text-xl">scale</span>
</div>
<h2 className="text-sm font-bold uppercase tracking-widest text-text-muted">Despejo e Quebras</h2>
</div>
<div className="bg-surface rounded-2xl p-5 shadow-lg border border-surface-highlight space-y-5">
<div>
<label className="block text-sm font-bold mb-2 text-text-muted uppercase tracking-wide">Despejo (KG) Painel</label>
<input className="w-full h-14 px-4 rounded-xl border-2 border-surface-highlight bg-background text-white placeholder-slate-600 focus:border-primary focus:ring-0 font-mono text-xl font-medium" placeholder="0,00" step="0.01" type="number"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold mb-2 text-text-muted uppercase">Quebra Painel (KG)</label>
<input className="w-full h-14 px-4 rounded-xl border-2 border-surface-highlight bg-background text-white placeholder-slate-600 focus:border-primary focus:ring-0 font-mono text-lg" placeholder="0,00" step="0.01" type="number"/>
</div>
<div>
<label className="block text-xs font-bold mb-2 text-primary/80 uppercase">Resultado (KG)</label>
<input className="w-full h-14 px-4 rounded-xl border-2 border-primary/30 bg-primary/10 text-primary cursor-not-allowed font-mono text-lg font-bold" placeholder="Calculado" readOnly={true} step="0.01" type="number"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold mb-2 text-text-muted uppercase">Pó (KG)</label>
<input className="w-full h-14 px-4 rounded-xl border-2 border-surface-highlight bg-background text-white placeholder-slate-600 focus:border-primary focus:ring-0 font-mono text-lg" placeholder="0,00" step="0.01" type="number"/>
</div>
<div>
<label className="block text-xs font-bold mb-2 text-text-muted uppercase">Varredura (KG)</label>
<input className="w-full h-14 px-4 rounded-xl border-2 border-surface-highlight bg-background text-white placeholder-slate-600 focus:border-primary focus:ring-0 font-mono text-lg" placeholder="0,00" step="0.01" type="number"/>
</div>
</div>
</div>
</section>
<section className="space-y-3">
<div className="flex items-center gap-3 px-1">
<div className="p-1.5 bg-primary/20 rounded-lg">
<span className="material-symbols-outlined text-primary text-xl">analytics</span>
</div>
<h2 className="text-sm font-bold uppercase tracking-widest text-text-muted">Métricas de Perda</h2>
</div>
<div className="bg-gradient-to-br from-surface to-background rounded-2xl p-0.5 shadow-lg border-none relative overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
<div className="bg-surface rounded-[14px] p-5 space-y-4">
<div className="flex justify-between items-center py-2 border-b border-surface-highlight/50">
<span className="text-sm font-medium text-text-muted">Quebra Total KG</span>
<span className="text-lg font-bold text-white font-mono">0,00 <span className="text-sm text-text-muted">KG</span></span>
</div>
<div className="flex justify-between items-center py-2 border-b border-surface-highlight/50">
<span className="text-sm font-medium text-text-muted">Quebra Painel %</span>
<span className="text-lg font-bold text-white font-mono">0,00 <span className="text-sm text-text-muted">%</span></span>
</div>
<div className="flex justify-between items-center py-2 border-b border-surface-highlight/50">
<span className="text-sm font-medium text-text-muted">Quebra Pó</span>
<span className="text-lg font-bold text-white font-mono">0,00 <span className="text-sm text-text-muted">%</span></span>
</div>
<div className="flex justify-between items-center py-2 border-b border-surface-highlight/50">
<span className="text-sm font-medium text-text-muted">Quebra Varredura</span>
<span className="text-lg font-bold text-white font-mono">0,00 <span className="text-sm text-text-muted">%</span></span>
</div>
<div className="flex justify-between items-center pt-3 mt-1 bg-surface-highlight/20 -mx-5 px-5 -mb-5 pb-5 rounded-b-[14px]">
<span className="text-sm font-black text-primary uppercase tracking-wider">QUEBRA TOTAL</span>
<span className="text-2xl font-black text-primary font-mono shadow-glow">0,00 %</span>
</div>
</div>
</div>
</section>
<section className="space-y-3">
<div className="flex items-center gap-3 px-1">
<div className="p-1.5 bg-primary/20 rounded-lg">
<span className="material-symbols-outlined text-primary text-xl">speed</span>
</div>
<h2 className="text-sm font-bold uppercase tracking-widest text-text-muted">Produtividade</h2>
</div>
<div className="bg-surface rounded-2xl p-5 shadow-lg border border-surface-highlight space-y-5">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold mb-2 text-text-muted uppercase">Hrs Trabalhadas</label>
<input className="w-full h-14 px-4 rounded-xl border-2 border-surface-highlight bg-background text-white placeholder-slate-600 focus:border-primary focus:ring-0 font-mono text-lg" placeholder="0.0" step="0.1" type="number"/>
</div>
<div>
<label className="block text-xs font-bold mb-2 text-text-muted uppercase">Setup (HRS)</label>
<input className="w-full h-14 px-4 rounded-xl border-2 border-surface-highlight bg-background text-white placeholder-slate-600 focus:border-primary focus:ring-0 font-mono text-lg" placeholder="0.0" step="0.1" type="number"/>
</div>
</div>
<div>
<label className="block text-xs font-bold mb-2 text-primary/80 uppercase">Produtividade (SCS/HR)</label>
<input className="w-full h-14 px-4 rounded-xl border-2 border-primary/30 bg-primary/10 text-primary cursor-not-allowed font-mono text-xl font-bold" placeholder="Calculado" readOnly={true} step="0.1" type="number"/>
</div>
<div>
<label className="block text-sm font-bold mb-2 text-text-muted uppercase tracking-wide">Status do Processo</label>
<div className="relative">
<select className="w-full h-14 px-4 rounded-xl border-2 border-surface-highlight bg-background text-white focus:border-primary focus:ring-0 appearance-none text-lg">
<option value="processing">Em Processo</option>
<option value="finished">Concluído</option>
<option value="paused">Pausado</option>
</select>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none material-symbols-outlined">expand_more</span>
</div>
</div>
</div>
</section>
</main>
<div className="fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-xl border-t border-surface-highlight z-40">
<div className="max-w-md mx-auto">
<button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-5 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 uppercase tracking-wide text-lg">
<span className="material-symbols-outlined text-2xl">save</span>
                SALVAR PRODUÇÃO
            </button>
<div className="h-6"></div>
</div>
</div>


    </div>
  );
}
