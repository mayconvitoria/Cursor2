import { useNavigate } from 'react-router-dom'

export default function Empilhadeira() {
  const navigate = useNavigate()
  return (
    <div className="bg-background-dark text-text-main min-h-screen pb-24 selection:bg-primary selection:text-white">
      
<header className="sticky top-0 z-50 bg-surface-dark/95 backdrop-blur-md border-b border-border-dark px-4 py-4 flex items-center justify-between shadow-md">
<div className="flex items-center gap-4">
<button type="button" onClick={() => navigate('/menu')} className="p-2 -ml-2 rounded-lg hover:bg-slate-700/50 text-text-main active:bg-slate-700">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<h1 className="text-lg font-bold tracking-tight text-white uppercase">Movimentação</h1>
</div>
<button className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-text-main">
<span className="material-symbols-outlined">more_vert</span>
</button>
</header>
<main className="max-w-md mx-auto p-4 space-y-6">
<section className="bg-surface-dark rounded-xl p-5 shadow-lg border border-border-dark space-y-5">
<div className="flex items-center gap-2 border-b border-border-dark pb-3">
<span className="material-symbols-outlined text-primary">info</span>
<h2 className="text-sm font-bold uppercase tracking-wider text-text-muted">Informações Gerais</h2>
</div>
<div className="space-y-5">
<label className="block">
<span className="text-sm font-bold text-slate-300 mb-2 block uppercase tracking-wide">Encarregado</span>
<div className="relative">
<input className="w-full rounded-lg bg-surface-darker border-border-dark text-white placeholder-slate-500 focus:border-primary focus:ring-1 focus:ring-primary h-14 pl-4 text-lg" placeholder="Nome do supervisor" type="text"/>
</div>
</label>
<div className="grid grid-cols-2 gap-4">
<label className="block">
<span className="text-sm font-bold text-slate-300 mb-2 block uppercase tracking-wide">Data</span>
<input className="w-full rounded-lg bg-surface-darker border-border-dark text-white focus:border-primary focus:ring-1 focus:ring-primary h-14 px-3" type="date"/>
</label>
<label className="block">
<span className="text-sm font-bold text-slate-300 mb-2 block uppercase tracking-wide">Assinatura</span>
<div className="w-full h-14 border-2 border-dashed border-slate-600 hover:border-primary rounded-lg flex items-center justify-center bg-surface-darker cursor-pointer transition-colors group">
<span className="material-symbols-outlined text-slate-500 group-hover:text-primary">draw</span>
</div>
</label>
</div>
</div>
</section>
<div className="space-y-4">
<div className="flex items-center justify-between px-1 pt-2">
<h2 className="text-xl font-bold text-white uppercase tracking-tight">Registros Operacionais</h2>
<span className="text-xs font-bold bg-primary text-black px-3 py-1.5 rounded-md uppercase">1 Ativo</span>
</div>
<div className="bg-surface-dark rounded-xl border border-l-4 border-l-primary border-y-border-dark border-r-border-dark shadow-lg overflow-hidden relative">
<div className="bg-surface-darker/50 px-4 py-3 border-b border-border-dark flex justify-between items-center">
<span className="text-xs font-black text-primary uppercase tracking-widest">Registro #01</span>
<button className="text-red-400 hover:text-red-300 p-2 -mr-2 rounded-full hover:bg-red-900/20 transition-colors">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
<div className="p-5 space-y-5">
<label className="block">
<span className="text-xs font-bold text-slate-400 mb-2 block uppercase">Código Empilhadeira</span>
<select className="w-full rounded-lg bg-surface-darker border-border-dark text-white focus:border-primary focus:ring-1 focus:ring-primary h-14 text-lg font-medium">
<option className="text-slate-400">Selecione a máquina</option>
<option>EMP-01 (Toyota 2.5t)</option>
<option>EMP-02 (Hyster 3.0t)</option>
<option>EMP-03 (Still 1.6t)</option>
</select>
</label>
<div className="grid grid-cols-2 gap-4">
<label className="block">
<span className="text-xs font-bold text-slate-400 mb-2 block uppercase">LOTE</span>
<input className="w-full rounded-lg bg-surface-darker border-border-dark text-white placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary h-14 px-4 font-mono" placeholder="2024-A" type="text"/>
</label>
<label className="block">
<span className="text-xs font-bold text-slate-400 mb-2 block uppercase">CERTIFICAÇÃO</span>
<input className="w-full rounded-lg bg-surface-darker border-border-dark text-white placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary h-14 px-4" placeholder="RTRS" type="text"/>
</label>
</div>
<div className="grid grid-cols-2 gap-4">
<label className="block">
<span className="text-xs font-bold text-slate-400 mb-2 block uppercase">Qtde Sacas</span>
<input className="w-full rounded-lg bg-surface-darker border-border-dark text-white placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary h-14 px-4 text-right font-mono text-lg" placeholder="0.0" step="0.1" type="number"/>
</label>
<label className="block">
<span className="text-xs font-bold text-slate-400 mb-2 block uppercase">OP (Ordem)</span>
<input className="w-full rounded-lg bg-surface-darker border-border-dark text-white placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary h-14 px-4 text-right font-mono text-lg" placeholder="12345" type="number"/>
</label>
</div>
<div className="bg-surface-darker/30 p-3 rounded-lg border border-border-dark/50 space-y-4">
<div className="grid grid-cols-2 gap-4 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-border-dark w-4 h-[1px]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface-dark border border-border-dark rounded-full p-1 z-10">
<span className="material-symbols-outlined text-xs text-slate-400 block">arrow_forward</span>
</div>
<label className="block">
<span className="text-[10px] font-bold text-primary mb-1.5 block uppercase tracking-wider">Origem</span>
<select className="w-full rounded-lg bg-surface-darker border-border-dark text-white text-sm focus:border-primary focus:ring-1 focus:ring-primary h-12">
<option>Setor A</option>
<option>Setor B</option>
<option>Doca 01</option>
</select>
</label>
<label className="block">
<span className="text-[10px] font-bold text-primary mb-1.5 block uppercase tracking-wider text-right">Destino</span>
<select className="w-full rounded-lg bg-surface-darker border-border-dark text-white text-sm focus:border-primary focus:ring-1 focus:ring-primary h-12 text-right dir-rtl">
<option>Setor C</option>
<option>Moega</option>
<option>Expedição</option>
</select>
</label>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<label className="block">
<span className="text-xs font-bold text-slate-400 mb-2 block uppercase">Início</span>
<input className="w-full rounded-lg bg-surface-darker border-border-dark text-white focus:border-primary focus:ring-1 focus:ring-primary h-14 px-2 text-center font-mono" type="time"/>
</label>
<label className="block">
<span className="text-xs font-bold text-slate-400 mb-2 block uppercase">Fim</span>
<input className="w-full rounded-lg bg-surface-darker border-border-dark text-white focus:border-primary focus:ring-1 focus:ring-primary h-14 px-2 text-center font-mono" type="time"/>
</label>
</div>
<div className="pt-4 border-t border-border-dark">
<span className="text-xs font-bold mb-4 block text-slate-400 uppercase tracking-widest">Tipo de Atividade</span>
<div className="grid grid-cols-2 gap-3">
<label className="relative flex items-center p-3 rounded-lg border border-border-dark bg-surface-darker/50 cursor-pointer hover:bg-slate-800 transition-colors">
<input className="peer h-6 w-6 rounded border-slate-600 bg-slate-700 text-primary focus:ring-offset-0 focus:ring-2 focus:ring-primary/50" type="checkbox"/>
<span className="ml-3 text-sm font-semibold text-slate-300 peer-checked:text-primary">REMOÇÃO</span>
</label>
<label className="relative flex items-center p-3 rounded-lg border border-border-dark bg-surface-darker/50 cursor-pointer hover:bg-slate-800 transition-colors">
<input className="peer h-6 w-6 rounded border-slate-600 bg-slate-700 text-primary focus:ring-offset-0 focus:ring-2 focus:ring-primary/50" type="checkbox"/>
<span className="ml-3 text-sm font-semibold text-slate-300 peer-checked:text-primary">DESPEJO</span>
</label>
<label className="relative flex items-center p-3 rounded-lg border border-border-dark bg-surface-darker/50 cursor-pointer hover:bg-slate-800 transition-colors">
<input className="peer h-6 w-6 rounded border-slate-600 bg-slate-700 text-primary focus:ring-offset-0 focus:ring-2 focus:ring-primary/50" type="checkbox"/>
<span className="ml-3 text-sm font-semibold text-slate-300 peer-checked:text-primary">SAÍDA MAQ</span>
</label>
<label className="relative flex items-center p-3 rounded-lg border border-border-dark bg-surface-darker/50 cursor-pointer hover:bg-slate-800 transition-colors">
<input className="peer h-6 w-6 rounded border-slate-600 bg-slate-700 text-primary focus:ring-offset-0 focus:ring-2 focus:ring-primary/50" type="checkbox"/>
<span className="ml-3 text-sm font-semibold text-slate-300 peer-checked:text-primary">EMBARQUE</span>
</label>
<label className="relative flex items-center p-3 rounded-lg border border-border-dark bg-surface-darker/50 cursor-pointer hover:bg-slate-800 transition-colors">
<input className="peer h-6 w-6 rounded border-slate-600 bg-slate-700 text-primary focus:ring-offset-0 focus:ring-2 focus:ring-primary/50" type="checkbox"/>
<span className="ml-3 text-sm font-semibold text-slate-300 peer-checked:text-primary">LIMPEZA</span>
</label>
<label className="relative flex items-center p-3 rounded-lg border border-border-dark bg-surface-darker/50 cursor-pointer hover:bg-slate-800 transition-colors">
<input className="peer h-6 w-6 rounded border-slate-600 bg-slate-700 text-primary focus:ring-offset-0 focus:ring-2 focus:ring-primary/50" type="checkbox"/>
<span className="ml-3 text-sm font-semibold text-slate-300 peer-checked:text-primary">REPOSIÇÃO</span>
</label>
</div>
</div>
</div>
</div>
<button className="w-full py-4 border-2 border-dashed border-slate-600 text-slate-400 font-bold rounded-xl flex items-center justify-center gap-2 bg-surface-darker/30 hover:bg-surface-darker/70 hover:border-primary hover:text-primary transition-all active:scale-[0.99]">
<span className="material-symbols-outlined">add_circle</span>
            ADICIONAR NOVO REGISTRO
        </button>
</div>
<section className="bg-surface-dark rounded-xl p-5 shadow-lg border border-border-dark space-y-5">
<label className="block">
<span className="text-sm font-bold text-slate-300 mb-2 block uppercase tracking-wide">Empilhadeirista</span>
<input className="w-full rounded-lg bg-surface-darker border-border-dark text-white placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary h-14 px-4 text-lg" placeholder="Nome do operador" type="text"/>
</label>
<label className="block">
<span className="text-sm font-bold text-slate-300 mb-2 block uppercase tracking-wide">Observação</span>
<textarea className="w-full rounded-lg bg-surface-darker border-border-dark text-white placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary min-h-[120px] p-4" placeholder="Relate qualquer imprevisto ou detalhe operacional..."></textarea>
</label>
</section>
<div className="pt-2 pb-8">
<button className="w-full bg-primary hover:bg-primary-dark text-black font-black uppercase tracking-wide py-5 rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center gap-3 text-lg transition-transform active:scale-[0.98]">
<span className="material-symbols-outlined font-bold">save</span>
            Salvar Movimentação
        </button>
</div>
</main>
<nav className="fixed bottom-0 left-0 right-0 bg-surface-dark/95 backdrop-blur-md border-t border-border-dark px-2 py-1 flex items-center justify-around z-50 h-20 shadow-[0_-5px_15px_rgba(0,0,0,0.3)]">
<button className="flex flex-col items-center gap-1.5 p-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 w-20">
<span className="material-symbols-outlined">home</span>
<span className="text-[10px] font-bold uppercase tracking-wide">Início</span>
</button>
<button className="flex flex-col items-center gap-1.5 p-3 rounded-xl text-primary bg-primary/10 w-20 border border-primary/20">
<span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>list_alt</span>
<span className="text-[10px] font-bold uppercase tracking-wide">Reg</span>
</button>
<button className="flex flex-col items-center gap-1.5 p-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 w-20">
<span className="material-symbols-outlined">inventory</span>
<span className="text-[10px] font-bold uppercase tracking-wide">Estoq</span>
</button>
<button className="flex flex-col items-center gap-1.5 p-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 w-20">
<span className="material-symbols-outlined">person</span>
<span className="text-[10px] font-bold uppercase tracking-wide">Perfil</span>
</button>
</nav>


    </div>
  );
}
