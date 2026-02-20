import { useNavigate, Link } from 'react-router-dom'

export default function ControleMaquinario() {
  const navigate = useNavigate()
  return (
    <div className="bg-industrial-dark text-text-light font-body min-h-screen pb-32 selection:bg-safety-orange selection:text-white">
      
<header className="sticky top-0 z-50 bg-industrial-slate/95 backdrop-blur-md border-b-2 border-safety-orange px-4 pt-12 pb-4 shadow-industrial">
<div className="flex items-center justify-between mb-5">
<button type="button" onClick={() => navigate('/menu')} className="text-text-muted hover:text-safety-orange transition-colors p-2 active:bg-industrial-surface rounded-lg">
<span className="material-symbols-outlined text-3xl">arrow_back_ios</span>
</button>
<h1 className="text-xl font-display font-bold uppercase tracking-wider text-center flex-1 text-white">Controle de Maquinário</h1>
<button className="text-text-muted hover:text-safety-orange transition-colors p-2 active:bg-industrial-surface rounded-lg">
<span className="material-symbols-outlined text-3xl">more_vert</span>
</button>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-industrial-surface p-4 rounded-lg border-l-4 border-safety-orange shadow-md">
<label className="block text-[11px] font-bold uppercase tracking-widest text-text-muted mb-1 font-display">Ordem de Prod. (OP)</label>
<div className="flex items-center">
<span className="text-safety-orange material-symbols-outlined mr-2 text-lg">tag</span>
<input className="w-full bg-transparent border-none p-0 text-2xl font-bold font-display text-white focus:ring-0 placeholder:text-slate-500" placeholder="00000" type="number" value="45892"/>
</div>
</div>
<div className="bg-industrial-surface p-4 rounded-lg border-l-4 border-safety-orange shadow-md">
<label className="block text-[11px] font-bold uppercase tracking-widest text-text-muted mb-1 font-display">Total Sacas</label>
<div className="flex items-center">
<span className="text-safety-orange material-symbols-outlined mr-2 text-lg">inventory_2</span>
<input className="w-full bg-transparent border-none p-0 text-2xl font-bold font-display text-white focus:ring-0 placeholder:text-slate-500" placeholder="0.00" step="0.01" type="number" value="1250.00"/>
</div>
</div>
</div>
</header>
<main className="p-4 space-y-6">
<div className="flex items-center justify-between pt-2">
<h2 className="text-sm font-bold text-safety-orange uppercase tracking-widest font-display border-b border-safety-orange/30 pb-1">Registros de Máquina</h2>
<span className="bg-safety-orange text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider shadow-glow">2 Ativos</span>
</div>
<div className="bg-industrial-slate rounded-lg shadow-industrial border border-slate-700 overflow-hidden">
<div className="p-4 border-b border-slate-600 flex justify-between items-center bg-slate-800">
<div className="flex items-center gap-3 w-full">
<div className="bg-safety-orange/20 p-2 rounded text-safety-orange">
<span className="material-symbols-outlined">settings_suggest</span>
</div>
<select className="flex-1 bg-transparent border-none font-bold text-lg text-white p-0 focus:ring-0 font-display">
<option className="bg-industrial-slate">Classificador A1</option>
<option className="bg-industrial-slate">Secador B4</option>
<option className="bg-industrial-slate">Elevador Central</option>
</select>
</div>
<button className="text-text-muted hover:text-white p-2">
<span className="material-symbols-outlined text-2xl">close</span>
</button>
</div>
<div className="p-5 space-y-6">
<div className="grid grid-cols-2 gap-4">
<div className="bg-industrial-dark p-3 rounded border border-slate-700">
<label className="block text-[10px] font-bold text-text-muted uppercase mb-2">Início Funcionamento</label>
<input className="w-full text-base font-medium rounded border border-slate-600 bg-industrial-surface text-white p-3 focus:border-safety-orange focus:ring-1 focus:ring-safety-orange" type="datetime-local" value="2023-10-27T08:00"/>
</div>
<div className="bg-industrial-dark p-3 rounded border border-slate-700">
<label className="block text-[10px] font-bold text-text-muted uppercase mb-2">Fim Funcionamento</label>
<input className="w-full text-base font-medium rounded border border-slate-600 bg-industrial-surface text-white p-3 focus:border-safety-orange focus:ring-1 focus:ring-safety-orange" type="datetime-local" value="2023-10-27T17:30"/>
</div>
</div>
<div className="p-4 rounded border border-warning-border bg-warning-bg/40 space-y-4">
<div className="flex items-center gap-2 text-orange-400 border-b border-orange-900/50 pb-2">
<span className="material-symbols-outlined">warning</span>
<span className="text-xs font-bold uppercase tracking-wider font-display">Parada de Máquina</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[10px] text-orange-200/70 mb-1">Início Parada</label>
<input className="w-full text-sm rounded border border-orange-900/60 bg-black/40 text-orange-100 p-2.5" type="datetime-local" value="2023-10-27T10:15"/>
</div>
<div>
<label className="block text-[10px] text-orange-200/70 mb-1">Fim Parada</label>
<input className="w-full text-sm rounded border border-orange-900/60 bg-black/40 text-orange-100 p-2.5" type="datetime-local" value="2023-10-27T11:00"/>
</div>
</div>
<div>
<label className="block text-[10px] text-orange-200/70 mb-1">Motivo</label>
<select className="w-full text-sm rounded border border-orange-900/60 bg-black/40 text-orange-100 p-3 h-12">
<option disabled selected>Selecione o Motivo</option>
<option className="bg-industrial-slate">Manutenção Preventiva</option>
<option className="bg-industrial-slate">Falta de Energia</option>
<option className="bg-industrial-slate">Limpeza Técnica</option>
<option className="bg-industrial-slate">Troca de Lote</option>
</select>
</div>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="col-span-1">
<label className="block text-[10px] font-bold text-text-muted uppercase mb-1">Qtde Sacas</label>
<input className="w-full text-base rounded border border-slate-600 bg-industrial-dark text-white p-3 font-mono font-bold text-center" step="0.01" type="number" value="450.50"/>
</div>
<div className="col-span-1">
<label className="block text-[10px] font-bold text-text-muted uppercase mb-1">Peneiras</label>
<input className="w-full text-base rounded border border-slate-600 bg-industrial-dark text-white p-3 text-center" type="text" value="14/16"/>
</div>
<div className="col-span-1">
<label className="block text-[10px] font-bold text-text-muted uppercase mb-1">Responsável</label>
<input className="w-full text-base rounded border border-slate-600 bg-industrial-dark text-white p-3 text-center truncate" type="text" value="João Silva"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-700 mt-2">
<div className="flex items-center gap-3 bg-industrial-dark px-3 py-2 rounded border border-slate-700">
<span className="text-xs font-bold text-text-muted uppercase">BL/DV</span>
<input className="flex-1 text-sm font-mono border-none bg-transparent p-0 text-right text-safety-orange focus:ring-0" type="text" value="B-12"/>
</div>
<div className="flex items-center gap-3 bg-industrial-dark px-3 py-2 rounded border border-slate-700">
<span className="text-xs font-bold text-text-muted uppercase">T</span>
<input className="flex-1 text-sm font-mono border-none bg-transparent p-0 text-right text-safety-orange focus:ring-0" type="text" value="T-01"/>
</div>
</div>
</div>
</div>
<div className="bg-industrial-slate rounded-lg shadow-industrial border border-slate-700 opacity-60 hover:opacity-100 transition-opacity">
<div className="p-4 flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded bg-industrial-surface flex items-center justify-center text-text-muted border border-slate-600">
<span className="material-symbols-outlined">settings_input_component</span>
</div>
<div>
<h3 className="font-bold text-base font-display text-white">Empacotadora 02</h3>
<p className="text-xs text-text-muted font-mono mt-1">Início: 08:30 • Sacas: 210.00</p>
</div>
</div>
<button className="text-safety-orange text-xs font-bold uppercase tracking-wider border border-safety-orange/30 px-3 py-2 rounded hover:bg-safety-orange/10 transition-colors">Editar</button>
</div>
</div>
<button className="w-full py-5 border-2 border-dashed border-safety-orange/40 rounded-lg text-safety-orange font-bold font-display uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-safety-orange/5 active:bg-safety-orange/10 transition-colors mb-6">
<span className="material-symbols-outlined">add_circle</span>
            Adicionar Registro
        </button>
</main>
<nav className="fixed bottom-0 left-0 right-0 bg-industrial-slate/95 backdrop-blur-lg border-t-2 border-safety-orange pb-8 pt-3 px-6 shadow-[0_-5px_15px_rgba(0,0,0,0.5)] z-40">
<div className="max-w-md mx-auto flex justify-between items-center">
<Link className="flex flex-col items-center gap-1.5 text-safety-orange" to="/controle-maquinario">
<span className="material-symbols-outlined text-[28px] font-variation-fill">factory</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Produção</span>
</Link>
<Link className="flex flex-col items-center gap-1.5 text-text-muted hover:text-white transition-colors" to="/dashboard">
<span className="material-symbols-outlined text-[28px]">assessment</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Relatórios</span>
</Link>
<Link className="flex flex-col items-center gap-1.5 text-text-muted hover:text-white transition-colors" to="/menu">
<span className="material-symbols-outlined text-[28px]">inventory_2</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Estoque</span>
</Link>
<Link className="flex flex-col items-center gap-1.5 text-text-muted hover:text-white transition-colors" to="/menu">
<span className="material-symbols-outlined text-[28px]">person</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Perfil</span>
</Link>
</div>
</nav>
<div className="fixed bottom-28 right-6 z-50">
<button className="bg-safety-orange text-white w-16 h-16 rounded shadow-lg shadow-black/50 flex items-center justify-center active:scale-95 transition-transform border border-white/10 hover:bg-safety-orange-hover">
<span className="material-symbols-outlined text-4xl">save</span>
</button>
</div>


    </div>
  );
}
