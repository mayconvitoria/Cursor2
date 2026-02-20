import { useNavigate, Link } from 'react-router-dom'

export default function Expedicao() {
  const navigate = useNavigate()
  return (
    <div className="bg-background-dark font-display text-text-light min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
      
<header className="sticky top-0 z-50 bg-surface-dark border-b border-border-dark pt-safe px-4 py-4 flex items-center justify-between shadow-md">
<button type="button" onClick={() => navigate('/menu')} className="flex items-center justify-center p-3 rounded-md hover:bg-white/5 active:bg-white/10 transition-colors">
<span className="material-symbols-outlined text-text-light">arrow_back_ios</span>
</button>
<h1 className="text-xl font-bold tracking-tight text-center flex-1 text-white uppercase">Expedição</h1>
<div className="w-12"></div> 
</header>
<main className="flex-1 pb-40">
<form className="p-4 space-y-6">
<div className="space-y-5 bg-surface-dark p-5 rounded-lg border border-border-dark shadow-lg">
<h2 className="text-xs font-bold text-primary uppercase tracking-widest border-b border-border-dark pb-2 mb-2">Dados Operacionais</h2>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-text-dim">Data</label>
<div className="relative">
<input className="w-full h-14 px-4 rounded-md border border-border-dark bg-surface-darker text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-500 font-medium" type="date" value="2023-10-27"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-text-dim">Atividade</label>
<div className="relative">
<select className="w-full h-14 px-4 rounded-md border border-border-dark bg-surface-darker text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none transition-all font-medium">
<option className="bg-surface-darker">Selecione a atividade</option>
<option className="bg-surface-darker" selected>Carga de Grãos</option>
<option className="bg-surface-darker">Carga de Fardos</option>
<option className="bg-surface-darker">Transferência Interna</option>
</select>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-text-dim">Local</label>
<div className="relative">
<select className="w-full h-14 px-4 rounded-md border border-border-dark bg-surface-darker text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none transition-all font-medium">
<option className="bg-surface-darker">Selecione o local</option>
<option className="bg-surface-darker" selected>Doca 04 - Setor Norte</option>
<option className="bg-surface-darker">Armazém Central</option>
<option className="bg-surface-darker">Silo 02</option>
</select>
</div>
</div>
</div>
<div className="space-y-5 bg-surface-dark p-5 rounded-lg border border-border-dark shadow-lg">
<h2 className="text-xs font-bold text-primary uppercase tracking-widest border-b border-border-dark pb-2 mb-2">Especificações</h2>
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-text-dim">Carga Início</label>
<select className="w-full h-14 px-3 rounded-md border border-border-dark bg-surface-darker text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-medium">
<option className="bg-surface-darker">SC 60kg</option>
<option className="bg-surface-darker">Big Bag</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-text-dim">Carga Fim</label>
<select className="w-full h-14 px-3 rounded-md border border-border-dark bg-surface-darker text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-medium">
<option className="bg-surface-darker">SC 60kg</option>
<option className="bg-surface-darker">Granel</option>
</select>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-text-dim">Nº Colaboradores</label>
<div className="flex items-center">
<button className="h-14 w-14 rounded-l-md bg-border-dark text-white hover:bg-white/10 active:bg-white/20 font-bold text-xl flex items-center justify-center border-r border-surface-darker" type="button">-</button>
<input className="flex-1 h-14 px-4 border-y border-border-dark bg-surface-darker text-white text-center font-bold text-lg focus:ring-0 focus:border-border-dark outline-none" inputMode="numeric" placeholder="0" type="number" value="4"/>
<button className="h-14 w-14 rounded-r-md bg-border-dark text-white hover:bg-white/10 active:bg-white/20 font-bold text-xl flex items-center justify-center border-l border-surface-darker" type="button">+</button>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-text-dim">Qtd (sc)</label>
<input className="w-full h-14 px-4 rounded-md border border-border-dark bg-surface-darker text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-mono text-lg text-right" inputMode="decimal" placeholder="0,00" step="0.01" type="number"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-text-dim">Tempo (min)</label>
<input className="w-full h-14 px-4 rounded-md border border-border-dark bg-surface-darker text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-mono text-lg text-right" inputMode="decimal" placeholder="0,0" step="0.1" type="number"/>
</div>
</div>
</div>
<div className="bg-surface-darker border-l-4 border-primary p-5 rounded-r-lg shadow-md flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs font-bold uppercase tracking-widest text-text-dim mb-1">Produtividade</span>
<span className="text-sm text-white opacity-80">Rítmo SC/Hour</span>
</div>
<span className="text-3xl font-bold text-primary font-mono tracking-tighter">0,00</span>
</div>
<div className="space-y-3 pt-2">
<h3 className="text-xs font-bold uppercase tracking-widest text-text-dim px-1">Histórico do Turno</h3>
<div className="bg-surface-dark rounded-lg overflow-hidden border border-border-dark shadow-lg">
<div className="overflow-x-auto hide-scrollbar">
<table className="w-full text-sm text-left">
<thead className="bg-surface-darker text-text-dim uppercase text-xs tracking-wider border-b border-border-dark">
<tr>
<th className="px-4 py-4 font-bold">Tipo</th>
<th className="px-4 py-4 font-bold text-center">Nº</th>
<th className="px-4 py-4 font-bold text-right">Qtde</th>
<th className="px-4 py-4 font-bold text-right">sc/HR</th>
</tr>
</thead>
<tbody className="divide-y divide-border-dark">
<tr className="hover:bg-white/5 transition-colors">
<td className="px-4 py-4 text-white font-medium">SC 60kg</td>
<td className="px-4 py-4 text-center text-text-dim">12</td>
<td className="px-4 py-4 text-right font-mono">720,00</td>
<td className="px-4 py-4 text-right font-mono font-bold text-primary">180,0</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="px-4 py-4 text-white font-medium">Big Bag</td>
<td className="px-4 py-4 text-center text-text-dim">08</td>
<td className="px-4 py-4 text-right font-mono">480,00</td>
<td className="px-4 py-4 text-right font-mono font-bold text-primary">120,5</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</form>
</main>
<footer className="fixed bottom-0 left-0 right-0 bg-surface-dark/95 backdrop-blur-xl border-t border-border-dark p-4 pb-safe flex flex-col gap-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)]">
<button className="w-full bg-primary hover:bg-primary-hover active:bg-primary-hover text-white font-bold h-14 rounded-md shadow-lg shadow-orange-900/20 flex items-center justify-center gap-3 transition-transform active:scale-[0.99] text-lg uppercase tracking-wide">
<span className="material-symbols-outlined text-[24px]">save</span>
        Salvar Registro
    </button>
<nav className="flex justify-between items-center px-4 pt-2">
<Link className="flex flex-col items-center gap-1.5 text-text-dim hover:text-white transition-colors p-2" to="/menu">
<span className="material-symbols-outlined text-[26px]">home</span>
<span className="text-[10px] font-bold uppercase tracking-wider">Início</span>
</Link>
<Link className="flex flex-col items-center gap-1.5 text-primary p-2 relative" to="/expedicao">
<span className="absolute -top-1 w-1 h-1 bg-primary rounded-full" />
<span className="material-symbols-outlined text-[26px] fill-current">local_shipping</span>
<span className="text-[10px] font-bold uppercase tracking-wider">Expedição</span>
</Link>
<Link className="flex flex-col items-center gap-1.5 text-text-dim hover:text-white transition-colors p-2" to="/menu">
<span className="material-symbols-outlined text-[26px]">inventory_2</span>
<span className="text-[10px] font-bold uppercase tracking-wider">Estoque</span>
</Link>
<Link className="flex flex-col items-center gap-1.5 text-text-dim hover:text-white transition-colors p-2" to="/dashboard">
<span className="material-symbols-outlined text-[26px]">bar_chart</span>
<span className="text-[10px] font-bold uppercase tracking-wider">Relatórios</span>
</Link>
</nav>
</footer>
<div className="fixed bottom-0 h-safe bg-surface-dark w-full z-50"></div>


    </div>
  );
}
