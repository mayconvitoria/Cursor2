import { useNavigate, Link } from 'react-router-dom'

export default function Recebimento() {
  const navigate = useNavigate()
  return (
    <div className="font-display min-h-screen flex flex-col bg-slate-900 text-slate-100 selection:bg-safety-orange selection:text-white">
      
<header className="sticky top-0 z-50 bg-slate-850 border-b border-slate-700 px-4 py-4 flex items-center justify-between shadow-industrial">
<button type="button" onClick={() => navigate('/menu')} className="p-3 -ml-2 text-slate-300 hover:text-safety-orange active:scale-95 transition-colors rounded-full active:bg-slate-700">
<span className="material-symbols-outlined text-2xl">arrow_back_ios</span>
</button>
<h1 className="text-xl font-bold tracking-tight text-white uppercase">Recebimento</h1>
<button className="p-3 -mr-2 text-safety-orange hover:text-white transition-colors rounded-full active:bg-slate-700">
<span className="material-symbols-outlined text-2xl">more_vert</span>
</button>
</header>
<main className="flex-1 overflow-y-auto pb-40 px-4 pt-6">
<div className="max-w-md mx-auto space-y-8">
<section className="space-y-4 bg-slate-800 p-5 rounded-lg border-l-4 border-safety-orange shadow-md">
<div className="flex items-center gap-3 mb-2 border-b border-slate-700 pb-2">
<span className="material-symbols-outlined text-safety-orange text-2xl">info</span>
<h2 className="text-base font-bold uppercase tracking-wider text-slate-300">Informações Gerais</h2>
</div>
<div className="space-y-5">
<div>
<label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">DATA</label>
<input className="w-full h-14 px-4 rounded bg-slate-900 border border-slate-600 text-white focus:ring-2 focus:ring-safety-orange focus:border-safety-orange transition-all outline-none text-lg font-medium" type="date" value="2023-10-27"/>
</div>
<div>
<label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">ATIVIDADE</label>
<div className="relative">
<select className="w-full h-14 px-4 pr-10 rounded bg-slate-900 border border-slate-600 text-white focus:ring-2 focus:ring-safety-orange focus:border-safety-orange transition-all outline-none text-lg appearance-none">
<option>Selecione a atividade</option>
<option>Descarga Convencional</option>
<option>Transferência Interna</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
</div>
<div>
<label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">LOCAL</label>
<div className="relative">
<select className="w-full h-14 px-4 pr-10 rounded bg-slate-900 border border-slate-600 text-white focus:ring-2 focus:ring-safety-orange focus:border-safety-orange transition-all outline-none text-lg appearance-none">
<option>Armazém A1</option>
<option>Silo Norte</option>
<option>Silo Sul</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
</div>
</div>
</section>
<section className="space-y-4 bg-slate-800 p-5 rounded-lg border-l-4 border-slate-600 shadow-md">
<div className="flex items-center gap-3 mb-2 border-b border-slate-700 pb-2">
<span className="material-symbols-outlined text-safety-orange text-2xl">local_shipping</span>
<h2 className="text-base font-bold uppercase tracking-wider text-slate-300">Detalhes da Carga</h2>
</div>
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase">TIPO CARGA (INÍCIO)</label>
<div className="relative">
<select className="w-full h-14 px-3 rounded bg-slate-900 border border-slate-600 text-white focus:ring-2 focus:ring-safety-orange focus:border-safety-orange text-base appearance-none">
<option>Soja</option>
<option>Milho</option>
<option>Trigo</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
<span className="material-symbols-outlined text-lg">expand_more</span>
</div>
</div>
</div>
<div>
<label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase">TIPO CARGA (FIM)</label>
<div className="relative">
<select className="w-full h-14 px-3 rounded bg-slate-900 border border-slate-600 text-white focus:ring-2 focus:ring-safety-orange focus:border-safety-orange text-base appearance-none">
<option>Soja</option>
<option>Milho</option>
<option>Trigo</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
<span className="material-symbols-outlined text-lg">expand_more</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase">QTDE LOTES</label>
<input className="w-full h-14 px-4 rounded bg-slate-900 border border-slate-600 text-white focus:ring-2 focus:ring-safety-orange focus:border-safety-orange text-lg font-mono placeholder-slate-600" placeholder="0" type="number"/>
</div>
<div>
<label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase">QTDE (sc)</label>
<input className="w-full h-14 px-4 rounded bg-slate-900 border border-slate-600 text-white focus:ring-2 focus:ring-safety-orange focus:border-safety-orange text-lg font-mono placeholder-slate-600" inputMode="decimal" placeholder="0.00" type="number"/>
</div>
</div>
</section>
<section className="space-y-4 bg-slate-800 p-5 rounded-lg border-l-4 border-slate-600 shadow-md">
<div className="flex items-center gap-3 mb-2 border-b border-slate-700 pb-2">
<span className="material-symbols-outlined text-safety-orange text-2xl">groups</span>
<h2 className="text-base font-bold uppercase tracking-wider text-slate-300">Métricas Operacionais</h2>
</div>
<div className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-[10px] font-bold text-safety-orange mb-2 uppercase">Nº COLAB. (DESCARGA)</label>
<input className="w-full h-12 px-3 rounded bg-slate-900 border border-slate-700 text-white focus:ring-1 focus:ring-safety-orange font-mono" placeholder="0" type="number"/>
</div>
<div>
<label className="block text-[10px] font-bold text-safety-orange mb-2 uppercase">DESC. CAMINHÃO (MIN)</label>
<input className="w-full h-12 px-3 rounded bg-slate-900 border border-slate-700 text-white focus:ring-1 focus:ring-safety-orange font-mono" placeholder="0.0" step="0.1" type="number"/>
</div>
</div>
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-[10px] font-bold text-safety-orange mb-2 uppercase">Nº COLAB. (RETIRADA)</label>
<input className="w-full h-12 px-3 rounded bg-slate-900 border border-slate-700 text-white focus:ring-1 focus:ring-safety-orange font-mono" placeholder="0" type="number"/>
</div>
<div>
<label className="block text-[10px] font-bold text-safety-orange mb-2 uppercase">DESC. MOEGA (MIN)</label>
<input className="w-full h-12 px-3 rounded bg-slate-900 border border-slate-700 text-white focus:ring-1 focus:ring-safety-orange font-mono" placeholder="0.0" step="0.1" type="number"/>
</div>
</div>
</div>
</section>
<section className="bg-slate-850 border border-slate-700 p-5 rounded-lg shadow-industrial relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-safety-orange/10 rounded-bl-full -mr-4 -mt-4 pointer-events-none"></div>
<div className="flex justify-between items-center relative z-10">
<div>
<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Campos calculados</p>
<h3 className="text-lg font-bold text-white">Ritmo Operacional</h3>
</div>
<div className="text-right">
<span className="text-4xl font-black text-safety-orange drop-shadow-sm font-mono tracking-tighter">450</span>
<span className="text-[10px] font-bold text-slate-500 block uppercase mt-1">sc / HRS</span>
</div>
</div>
</section>
<section className="space-y-3">
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-safety-orange text-xl">analytics</span>
<h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">Resumo</h2>
</div>
<span className="text-[10px] bg-slate-800 text-safety-orange border border-safety-orange/30 px-3 py-1 rounded font-bold uppercase tracking-wider">Sessão Atual</span>
</div>
<div className="overflow-hidden border border-slate-700 rounded-lg bg-slate-800 shadow-sm">
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-900/50 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
<th className="px-4 py-3 border-b border-slate-700">Tipo Carga</th>
<th className="px-4 py-3 border-b border-slate-700 text-center">Nº Desc.</th>
<th className="px-4 py-3 border-b border-slate-700 text-right">Qtde (sc)</th>
<th className="px-4 py-3 border-b border-slate-700 text-right">sc/HR</th>
</tr>
</thead>
<tbody className="text-xs divide-y divide-slate-700">
<tr className="hover:bg-slate-700/50 transition-colors">
<td className="px-4 py-4 font-bold text-white">Soja</td>
<td className="px-4 py-4 text-center text-slate-300 font-mono">12</td>
<td className="px-4 py-4 text-right text-slate-300 font-mono">5.400</td>
<td className="px-4 py-4 text-right font-bold text-safety-orange font-mono">450</td>
</tr>
<tr className="hover:bg-slate-700/50 transition-colors">
<td className="px-4 py-4 font-bold text-white">Milho</td>
<td className="px-4 py-4 text-center text-slate-300 font-mono">08</td>
<td className="px-4 py-4 text-right text-slate-300 font-mono">3.200</td>
<td className="px-4 py-4 text-right font-bold text-safety-orange font-mono">400</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</div>
</main>
<div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)]">
<div className="px-4 -mt-6 mb-2">
<button className="w-full h-16 bg-safety-orange hover:bg-safety-orange-hover text-white font-bold text-lg rounded shadow-glow flex items-center justify-center gap-3 active:scale-[0.98] transition-all uppercase tracking-wide">
<span className="material-symbols-outlined text-2xl">save</span>
            SALVAR RECEBIMENTO
        </button>
</div>
<nav className="flex justify-around items-center px-2 py-3 pb-6">
<Link className="flex flex-col items-center gap-1 p-2 text-slate-500 hover:text-slate-300 transition-colors w-16" to="/menu">
<span className="material-symbols-outlined">home</span>
<span className="text-[9px] font-bold uppercase tracking-wider">Início</span>
</Link>
<Link className="flex flex-col items-center gap-1 p-2 text-safety-orange w-16 relative" to="/recebimento">
<span className="material-symbols-filled">download</span>
<span className="text-[9px] font-bold uppercase tracking-wider">Receber</span>
<span className="absolute top-0 right-3 w-2 h-2 bg-safety-orange rounded-full" />
</Link>
<Link className="flex flex-col items-center gap-1 p-2 text-slate-500 hover:text-slate-300 transition-colors w-16" to="/menu">
<span className="material-symbols-outlined">history</span>
<span className="text-[9px] font-bold uppercase tracking-wider">Hist.</span>
</Link>
<Link className="flex flex-col items-center gap-1 p-2 text-slate-500 hover:text-slate-300 transition-colors w-16" to="/menu">
<span className="material-symbols-outlined">settings</span>
<span className="text-[9px] font-bold uppercase tracking-wider">Ajustes</span>
</Link>
</nav>
</div>


    </div>
  );
}
