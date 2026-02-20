export default function Dashboard() {
  return (
    <div className="bg-industrial-bg text-text-primary font-display min-h-screen antialiased selection:bg-safety-orange selection:text-white industrial-stripe">
      
<nav className="sticky top-0 z-50 bg-industrial-surface border-b-2 border-industrial-border shadow-lg">
<div className="px-6 py-4">
<div className="flex flex-col lg:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-5 w-full lg:w-auto">
<div className="bg-safety-orange w-12 h-12 flex items-center justify-center rounded-sm shadow-glow shrink-0">
<span className="material-icons text-white text-3xl">warehouse</span>
</div>
<div>
<h1 className="text-2xl font-black tracking-wider uppercase text-white leading-tight">OPS DASHBOARD</h1>
<div className="flex items-center gap-2 mt-1">
<span className="w-3 h-3 rounded-full bg-status-green shadow-glow-green animate-pulse"></span>
<p className="text-xs text-safety-orange font-bold uppercase tracking-[0.2em]">System Online</p>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 w-full lg:w-auto justify-end">
<div className="flex flex-col gap-1 w-full sm:w-auto">
<label className="text-[10px] font-bold uppercase text-text-secondary tracking-wider" htmlFor="filial">Unidade Operacional</label>
<div className="relative w-full sm:w-auto">
<select className="w-full sm:w-64 bg-industrial-bg border-2 border-industrial-border text-white text-lg font-bold rounded-sm focus:ring-0 focus:border-safety-orange px-4 py-3 appearance-none uppercase tracking-wide cursor-pointer hover:border-text-secondary transition-colors" id="filial">
<option>Matriz - São Paulo</option>
<option>Filial - Curitiba</option>
<option>Filial - Recife</option>
<option>Filial - Goiânia</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-safety-orange">
<span className="material-icons text-2xl">arrow_drop_down</span>
</div>
</div>
</div>
<div className="flex flex-col gap-1 w-full sm:w-auto">
<label className="text-[10px] font-bold uppercase text-text-secondary tracking-wider" htmlFor="periodo">Competência</label>
<input className="w-full sm:w-auto bg-industrial-bg border-2 border-industrial-border text-white text-lg font-bold rounded-sm focus:ring-0 focus:border-safety-orange px-4 py-3 uppercase cursor-pointer hover:border-text-secondary transition-colors" id="periodo" type="month" value="2023-10"/>
</div>
<button className="w-full sm:w-auto bg-safety-orange hover:bg-safety-orange-hover text-white px-8 py-4 rounded-sm text-lg font-black uppercase tracking-wider transition-all shadow-lg active:transform active:scale-95 flex items-center justify-center gap-2 border-b-4 border-[#bf360c] mt-auto h-[56px]">
<span className="material-icons">sync</span>
</button>
</div>
</div>
</div>
</nav>
<main className="p-4 lg:p-8 max-w-[1920px] mx-auto space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
<div className="bg-industrial-surface p-0 rounded-sm border-2 border-industrial-border hover:border-safety-orange transition-colors shadow-lg group relative overflow-hidden flex flex-col h-full">
<div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
<div className="p-6 pb-2 pl-8 flex justify-between items-start">
<div>
<h3 className="text-xl font-black uppercase text-white tracking-widest group-hover:text-blue-400 transition-colors">Recebimento</h3>
<div className="mt-2 inline-flex items-center px-2 py-0.5 bg-blue-900/40 border border-blue-500/50 rounded-sm">
<span className="text-[10px] font-bold text-blue-300 uppercase tracking-wide">Peso: 12%</span>
</div>
</div>
<span className="material-icons text-industrial-border group-hover:text-blue-500 text-5xl transition-colors opacity-50 group-hover:opacity-100">call_received</span>
</div>
<div className="p-6 pl-8 pt-4 space-y-5 flex-1 flex flex-col justify-end">
<div className="flex justify-between items-end border-b border-industrial-border/50 pb-2 border-dashed">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Volume Total</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">14.250 t</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-green shadow-glow-green"></span>
<span className="text-[10px] text-status-green font-bold uppercase tracking-wider">Meta OK</span>
</div>
</div>
</div>
<div className="flex justify-between items-end border-b border-industrial-border/50 pb-2 border-dashed">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Tempo Médio</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">01:45h</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-yellow shadow-[0_0_8px_rgba(255,234,0,0.4)]"></span>
<span className="text-[10px] text-status-yellow font-bold uppercase tracking-wider">Atenção</span>
</div>
</div>
</div>
<div className="flex justify-between items-end">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Ocupação Doca</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">88%</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-green shadow-glow-green"></span>
<span className="text-[10px] text-status-green font-bold uppercase tracking-wider">Ideal</span>
</div>
</div>
</div>
</div>
<button className="w-full bg-industrial-bg hover:bg-industrial-border/30 text-text-secondary hover:text-white py-3 border-t border-industrial-border uppercase text-xs font-bold tracking-widest transition-colors flex items-center justify-center gap-2">
                    Detalhar <span className="material-icons text-sm">arrow_forward</span>
</button>
</div>
<div className="bg-industrial-surface p-0 rounded-sm border-2 border-industrial-border hover:border-safety-orange transition-colors shadow-lg group relative overflow-hidden flex flex-col h-full">
<div className="absolute top-0 left-0 w-2 h-full bg-purple-600"></div>
<div className="p-6 pb-2 pl-8 flex justify-between items-start">
<div>
<h3 className="text-xl font-black uppercase text-white tracking-widest group-hover:text-purple-400 transition-colors">Maquinação</h3>
<div className="mt-2 inline-flex items-center px-2 py-0.5 bg-purple-900/40 border border-purple-500/50 rounded-sm">
<span className="text-[10px] font-bold text-purple-300 uppercase tracking-wide">Peso: 18%</span>
</div>
</div>
<span className="material-icons text-industrial-border group-hover:text-purple-500 text-5xl transition-colors opacity-50 group-hover:opacity-100">settings</span>
</div>
<div className="p-6 pl-8 pt-4 space-y-5 flex-1 flex flex-col justify-end">
<div className="flex justify-between items-end border-b border-industrial-border/50 pb-2 border-dashed">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Dif. Despejo</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">0.45%</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-green shadow-glow-green"></span>
<span className="text-[10px] text-status-green font-bold uppercase tracking-wider">Normal</span>
</div>
</div>
</div>
<div className="flex justify-between items-end border-b border-industrial-border/50 pb-2 border-dashed">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Pó Gerado</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">2.1%</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-red shadow-glow-red animate-pulse"></span>
<span className="text-[10px] text-status-red font-bold uppercase tracking-wider">Crítico</span>
</div>
</div>
</div>
<div className="flex justify-between items-end">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Rendimento</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">97.4%</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-green shadow-glow-green"></span>
<span className="text-[10px] text-status-green font-bold uppercase tracking-wider">Alto</span>
</div>
</div>
</div>
</div>
<button className="w-full bg-industrial-bg hover:bg-industrial-border/30 text-text-secondary hover:text-white py-3 border-t border-industrial-border uppercase text-xs font-bold tracking-widest transition-colors flex items-center justify-center gap-2">
                    Detalhar <span className="material-icons text-sm">arrow_forward</span>
</button>
</div>
<div className="bg-industrial-surface p-0 rounded-sm border-2 border-industrial-border hover:border-safety-orange transition-colors shadow-lg group relative overflow-hidden flex flex-col h-full">
<div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
<div className="p-6 pb-2 pl-8 flex justify-between items-start">
<div>
<h3 className="text-xl font-black uppercase text-white tracking-widest group-hover:text-amber-400 transition-colors">Estocagem</h3>
<div className="mt-2 inline-flex items-center px-2 py-0.5 bg-amber-900/40 border border-amber-500/50 rounded-sm">
<span className="text-[10px] font-bold text-amber-300 uppercase tracking-wide">Peso: 4%</span>
</div>
</div>
<span className="material-icons text-industrial-border group-hover:text-amber-500 text-5xl transition-colors opacity-50 group-hover:opacity-100">inventory_2</span>
</div>
<div className="p-6 pl-8 pt-4 space-y-5 flex-1 flex flex-col justify-end">
<div className="flex justify-between items-end border-b border-industrial-border/50 pb-2 border-dashed">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Ocupação</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">92.5%</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-yellow shadow-[0_0_8px_rgba(255,234,0,0.4)]"></span>
<span className="text-[10px] text-status-yellow font-bold uppercase tracking-wider">Alto Vol.</span>
</div>
</div>
</div>
<div className="flex justify-between items-end border-b border-industrial-border/50 pb-2 border-dashed">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Físico x Fiscal</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">0.02%</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-green shadow-glow-green"></span>
<span className="text-[10px] text-status-green font-bold uppercase tracking-wider">OK</span>
</div>
</div>
</div>
<div className="flex justify-between items-end">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Acuracidade</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">99.8%</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-green shadow-glow-green"></span>
<span className="text-[10px] text-status-green font-bold uppercase tracking-wider">Excel</span>
</div>
</div>
</div>
</div>
<button className="w-full bg-industrial-bg hover:bg-industrial-border/30 text-text-secondary hover:text-white py-3 border-t border-industrial-border uppercase text-xs font-bold tracking-widest transition-colors flex items-center justify-center gap-2">
                    Detalhar <span className="material-icons text-sm">arrow_forward</span>
</button>
</div>
<div className="bg-industrial-surface p-0 rounded-sm border-2 border-industrial-border hover:border-safety-orange transition-colors shadow-lg group relative overflow-hidden flex flex-col h-full">
<div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
<div className="p-6 pb-2 pl-8 flex justify-between items-start">
<div>
<h3 className="text-xl font-black uppercase text-white tracking-widest group-hover:text-teal-400 transition-colors">Embarque</h3>
<div className="mt-2 inline-flex items-center px-2 py-0.5 bg-teal-900/40 border border-teal-500/50 rounded-sm">
<span className="text-[10px] font-bold text-teal-300 uppercase tracking-wide">Peso: 10%</span>
</div>
</div>
<span className="material-icons text-industrial-border group-hover:text-teal-500 text-5xl transition-colors opacity-50 group-hover:opacity-100">local_shipping</span>
</div>
<div className="p-6 pl-8 pt-4 space-y-5 flex-1 flex flex-col justify-end">
<div className="flex justify-between items-end border-b border-industrial-border/50 pb-2 border-dashed">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Volume Emb.</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">12.100 t</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-green shadow-glow-green"></span>
<span className="text-[10px] text-status-green font-bold uppercase tracking-wider">Meta OK</span>
</div>
</div>
</div>
<div className="flex justify-between items-end border-b border-industrial-border/50 pb-2 border-dashed">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Tempo Carga</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">02:10h</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-green shadow-glow-green"></span>
<span className="text-[10px] text-status-green font-bold uppercase tracking-wider">Rápido</span>
</div>
</div>
</div>
<div className="flex justify-between items-end">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Erros Exp.</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">0</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-green shadow-glow-green"></span>
<span className="text-[10px] text-status-green font-bold uppercase tracking-wider">Zero</span>
</div>
</div>
</div>
</div>
<button className="w-full bg-industrial-bg hover:bg-industrial-border/30 text-text-secondary hover:text-white py-3 border-t border-industrial-border uppercase text-xs font-bold tracking-widest transition-colors flex items-center justify-center gap-2">
                    Detalhar <span className="material-icons text-sm">arrow_forward</span>
</button>
</div>
<div className="bg-industrial-surface p-0 rounded-sm border-2 border-industrial-border hover:border-safety-orange transition-colors shadow-lg group relative overflow-hidden flex flex-col h-full">
<div className="absolute top-0 left-0 w-2 h-full bg-rose-600"></div>
<div className="p-6 pb-2 pl-8 flex justify-between items-start">
<div>
<h3 className="text-xl font-black uppercase text-white tracking-widest group-hover:text-rose-400 transition-colors">Quebras</h3>
<div className="mt-2 inline-flex items-center px-2 py-0.5 bg-rose-900/40 border border-rose-500/50 rounded-sm">
<span className="text-[10px] font-bold text-rose-300 uppercase tracking-wide">Peso: 2%</span>
</div>
</div>
<span className="material-icons text-industrial-border group-hover:text-rose-500 text-5xl transition-colors opacity-50 group-hover:opacity-100">broken_image</span>
</div>
<div className="p-6 pl-8 pt-4 space-y-5 flex-1 flex flex-col justify-end">
<div className="flex justify-between items-end border-b border-industrial-border/50 pb-2 border-dashed">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Quebra Física</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">0.12%</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-green shadow-glow-green"></span>
<span className="text-[10px] text-status-green font-bold uppercase tracking-wider">Baixo</span>
</div>
</div>
</div>
<div className="flex justify-between items-end">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">OEE Equip.</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">82%</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-yellow shadow-[0_0_8px_rgba(255,234,0,0.4)]"></span>
<span className="text-[10px] text-status-yellow font-bold uppercase tracking-wider">Atenção</span>
</div>
</div>
</div>
</div>
<button className="w-full bg-industrial-bg hover:bg-industrial-border/30 text-text-secondary hover:text-white py-3 border-t border-industrial-border uppercase text-xs font-bold tracking-widest transition-colors flex items-center justify-center gap-2">
                    Detalhar <span className="material-icons text-sm">arrow_forward</span>
</button>
</div>
<div className="bg-industrial-surface p-0 rounded-sm border-2 border-industrial-border hover:border-safety-orange transition-colors shadow-lg group relative overflow-hidden flex flex-col h-full">
<div className="absolute top-0 left-0 w-2 h-full bg-orange-600"></div>
<div className="p-6 pb-2 pl-8 flex justify-between items-start">
<div>
<h3 className="text-xl font-black uppercase text-white tracking-widest group-hover:text-orange-400 transition-colors">Maquinário</h3>
<div className="mt-2 inline-flex items-center px-2 py-0.5 bg-orange-900/40 border border-orange-500/50 rounded-sm">
<span className="text-[10px] font-bold text-orange-300 uppercase tracking-wide">Peso: 5%</span>
</div>
</div>
<span className="material-icons text-industrial-border group-hover:text-orange-500 text-5xl transition-colors opacity-50 group-hover:opacity-100">precision_manufacturing</span>
</div>
<div className="p-6 pl-8 pt-4 space-y-5 flex-1 flex flex-col justify-end">
<div className="flex justify-between items-end border-b border-industrial-border/50 pb-2 border-dashed">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Consumo/Hora</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">4.2 L/h</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-green shadow-glow-green"></span>
<span className="text-[10px] text-status-green font-bold uppercase tracking-wider">Eficiente</span>
</div>
</div>
</div>
<div className="flex justify-between items-end">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Disponib.</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">91%</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-green shadow-glow-green"></span>
<span className="text-[10px] text-status-green font-bold uppercase tracking-wider">Alta</span>
</div>
</div>
</div>
</div>
<button className="w-full bg-industrial-bg hover:bg-industrial-border/30 text-text-secondary hover:text-white py-3 border-t border-industrial-border uppercase text-xs font-bold tracking-widest transition-colors flex items-center justify-center gap-2">
                    Detalhar <span className="material-icons text-sm">arrow_forward</span>
</button>
</div>
<div className="bg-industrial-surface p-0 rounded-sm border-2 border-industrial-border hover:border-safety-orange transition-colors shadow-lg group relative overflow-hidden flex flex-col h-full">
<div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
<div className="p-6 pb-2 pl-8 flex justify-between items-start">
<div>
<h3 className="text-xl font-black uppercase text-white tracking-widest group-hover:text-red-500 transition-colors">Segurança</h3>
<div className="mt-2 inline-flex items-center px-2 py-0.5 bg-red-900/40 border border-red-500/50 rounded-sm">
<span className="text-[10px] font-bold text-red-300 uppercase tracking-wide">Peso: 3%</span>
</div>
</div>
<span className="material-icons text-industrial-border group-hover:text-red-500 text-5xl transition-colors opacity-50 group-hover:opacity-100">security</span>
</div>
<div className="p-6 pl-8 pt-4 space-y-5 flex-1 flex flex-col justify-end">
<div className="flex justify-between items-end border-b border-industrial-border/50 pb-2 border-dashed">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Incidentes</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">0</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-green shadow-glow-green"></span>
<span className="text-[10px] text-status-green font-bold uppercase tracking-wider">Zero Acid.</span>
</div>
</div>
</div>
<div className="flex justify-between items-end">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Dias s/ acid.</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">412</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-green shadow-glow-green"></span>
<span className="text-[10px] text-status-green font-bold uppercase tracking-wider">Recorde</span>
</div>
</div>
</div>
</div>
<button className="w-full bg-industrial-bg hover:bg-industrial-border/30 text-text-secondary hover:text-white py-3 border-t border-industrial-border uppercase text-xs font-bold tracking-widest transition-colors flex items-center justify-center gap-2">
                    Detalhar <span className="material-icons text-sm">arrow_forward</span>
</button>
</div>
<div className="bg-industrial-surface p-0 rounded-sm border-2 border-industrial-border hover:border-safety-orange transition-colors shadow-lg group relative overflow-hidden flex flex-col h-full">
<div className="absolute top-0 left-0 w-2 h-full bg-gray-500"></div>
<div className="p-6 pb-2 pl-8 flex justify-between items-start">
<div>
<h3 className="text-xl font-black uppercase text-white tracking-widest group-hover:text-gray-300 transition-colors">Gestão</h3>
<div className="mt-2 inline-flex items-center px-2 py-0.5 bg-gray-700/40 border border-gray-400/50 rounded-sm">
<span className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">Peso: 13%</span>
</div>
</div>
<span className="material-icons text-industrial-border group-hover:text-gray-400 text-5xl transition-colors opacity-50 group-hover:opacity-100">payments</span>
</div>
<div className="p-6 pl-8 pt-4 space-y-5 flex-1 flex flex-col justify-end">
<div className="flex justify-between items-end border-b border-industrial-border/50 pb-2 border-dashed">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Absenteísmo</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">2.4%</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-green shadow-glow-green"></span>
<span className="text-[10px] text-status-green font-bold uppercase tracking-wider">Baixo</span>
</div>
</div>
</div>
<div className="flex justify-between items-end">
<span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Custo Oper.</span>
<div className="flex flex-col items-end">
<span className="text-2xl font-black text-white font-mono tracking-tight">R$ 412k</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-red shadow-glow-red animate-pulse"></span>
<span className="text-[10px] text-status-red font-bold uppercase tracking-wider">Alto</span>
</div>
</div>
</div>
</div>
<button className="w-full bg-industrial-bg hover:bg-industrial-border/30 text-text-secondary hover:text-white py-3 border-t border-industrial-border uppercase text-xs font-bold tracking-widest transition-colors flex items-center justify-center gap-2">
                    Detalhar <span className="material-icons text-sm">arrow_forward</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-4 bg-industrial-surface rounded-sm border-2 border-industrial-border shadow-lg">
<div className="flex items-center justify-between p-6 border-b border-industrial-border bg-industrial-bg/50">
<h3 className="font-black text-white uppercase tracking-widest text-sm">Performance Global</h3>
<span className="material-icons text-text-secondary">radar</span>
</div>
<div className="p-6 flex flex-col items-center justify-center">
<div className="relative w-full max-w-[300px] aspect-square flex items-center justify-center bg-industrial-bg rounded-full border border-industrial-border/30 overflow-hidden shadow-inner">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 h-3/4 border border-industrial-border/30 rounded-full flex items-center justify-center">
<div className="w-2/3 h-2/3 border border-industrial-border/30 rounded-full flex items-center justify-center">
<div className="w-1/2 h-1/2 border border-industrial-border/30 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute w-full h-px bg-industrial-border/20 top-1/2 transform -translate-y-1/2"></div>
<div className="absolute w-px h-full bg-industrial-border/20 left-1/2 transform -translate-x-1/2"></div>
<div className="relative w-full h-full p-8 z-10">
<svg className="w-full h-full drop-shadow-[0_0_15px_rgba(255,109,0,0.6)]" viewBox="0 0 100 100">
<polygon fill="rgba(255,109,0,0.2)" points="50,10 85,35 75,85 25,85 15,35" stroke="#ff6d00" strokeLinejoin="round" strokeWidth="3" />
<circle cx="50" cy="10" fill="#ff6d00" r="2" />
<circle cx="85" cy="35" fill="#ff6d00" r="2" />
<circle cx="75" cy="85" fill="#ff6d00" r="2" />
<circle cx="25" cy="85" fill="#ff6d00" r="2" />
<circle cx="15" cy="35" fill="#ff6d00" r="2" />
</svg>
</div>
</div>
<div className="grid grid-cols-2 gap-x-8 gap-y-2 w-full mt-6 text-xs font-bold text-text-secondary uppercase tracking-wider">
<div className="flex justify-between border-b border-industrial-border/30 pb-1"><span>Receb.</span> <span className="text-white">92%</span></div>
<div className="flex justify-between border-b border-industrial-border/30 pb-1"><span>Maquin.</span> <span className="text-white">88%</span></div>
<div className="flex justify-between border-b border-industrial-border/30 pb-1"><span>Estoque</span> <span className="text-white">95%</span></div>
<div className="flex justify-between border-b border-industrial-border/30 pb-1"><span>Embarq.</span> <span className="text-white">90%</span></div>
</div>
</div>
</div>
<div className="lg:col-span-5 bg-industrial-surface rounded-sm border-2 border-industrial-border shadow-lg">
<div className="flex items-center justify-between p-6 border-b border-industrial-border bg-industrial-bg/50">
<h3 className="font-black text-white uppercase tracking-widest text-sm">Comparativo Unidades</h3>
<div className="flex gap-4">
<span className="flex items-center gap-2 text-[10px] font-bold uppercase text-text-secondary tracking-wider"><div className="w-3 h-3 bg-safety-orange rounded-sm"></div> Atual</span>
<span className="flex items-center gap-2 text-[10px] font-bold uppercase text-text-secondary tracking-wider"><div className="w-3 h-3 bg-slate-600 rounded-sm"></div> Média</span>
</div>
</div>
<div className="p-6 space-y-8">
<div className="space-y-2">
<div className="flex justify-between text-xs font-bold uppercase text-white tracking-widest">
<span className="flex items-center gap-2"><span className="material-icons text-[14px] text-safety-orange">star</span> Matriz SP</span>
<span className="text-safety-orange font-mono text-sm">98.2%</span>
</div>
<div className="w-full h-6 bg-industrial-bg border border-industrial-border rounded-none overflow-hidden relative">
<div className="absolute inset-0 w-full h-full flex justify-between px-1 z-0">
<div className="w-px h-full bg-industrial-border/30"></div>
<div className="w-px h-full bg-industrial-border/30"></div>
<div className="w-px h-full bg-industrial-border/30"></div>
<div className="w-px h-full bg-industrial-border/30"></div>
</div>
<div className="h-full bg-safety-orange relative z-10 flex items-center justify-end pr-2" style={{ width: `98%` }}>
<span className="text-[10px] font-bold text-black uppercase tracking-wider">Top 1</span>
</div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs font-bold uppercase text-text-secondary tracking-widest">
<span>Filial Curitiba</span>
<span className="font-mono text-sm text-white">85.4%</span>
</div>
<div className="w-full h-5 bg-industrial-bg border border-industrial-border rounded-none overflow-hidden">
<div className="h-full bg-slate-600 hover:bg-slate-500 transition-colors" style={{ width: `85%` }}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs font-bold uppercase text-text-secondary tracking-widest">
<span>Filial Recife</span>
<span className="font-mono text-sm text-white">91.1%</span>
</div>
<div className="w-full h-5 bg-industrial-bg border border-industrial-border rounded-none overflow-hidden">
<div className="h-full bg-slate-600 hover:bg-slate-500 transition-colors" style={{ width: `91%` }}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs font-bold uppercase text-text-secondary tracking-widest">
<span>Filial Goiânia</span>
<span className="font-mono text-sm text-white">78.9%</span>
</div>
<div className="w-full h-5 bg-industrial-bg border border-industrial-border rounded-none overflow-hidden">
<div className="h-full bg-slate-600 hover:bg-slate-500 transition-colors" style={{ width: `78%` }}></div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-3 bg-industrial-surface rounded-sm border-2 border-industrial-border shadow-lg flex flex-col">
<div className="flex items-center justify-between p-6 border-b border-industrial-border bg-industrial-bg/50">
<h3 className="font-black text-white uppercase tracking-widest text-sm">Log Operacional</h3>
<span className="material-icons text-text-secondary">history_edu</span>
</div>
<div className="p-6 flex-1 flex flex-col gap-4">
<textarea className="flex-1 w-full bg-industrial-bg border-2 border-industrial-border text-white rounded-sm p-4 text-base focus:ring-0 focus:border-safety-orange resize-none placeholder-text-secondary/50 font-mono leading-relaxed" placeholder="&gt; Aguardando entrada de dados..."></textarea>
<button className="w-full bg-transparent hover:bg-safety-orange text-safety-orange hover:text-white border-2 border-safety-orange px-6 py-4 rounded-sm text-sm font-black uppercase tracking-widest transition-all shadow-md active:transform active:scale-95 flex items-center justify-center gap-2 group">
<span className="material-icons group-hover:animate-bounce">save_alt</span>
                        Gravar Registro
                    </button>
</div>
</div>
</div>
<div className="bg-industrial-surface border-l-[6px] border-safety-orange rounded-sm p-6 flex items-start sm:items-center gap-6 shadow-lg relative overflow-hidden">
<div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-industrial-bg to-transparent opacity-50 pointer-events-none"></div>
<div className="bg-safety-orange/10 p-4 rounded-sm hidden sm:flex items-center justify-center border border-safety-orange/20">
<span className="material-icons text-safety-orange text-4xl animate-pulse">notifications_active</span>
</div>
<div className="text-base text-text-secondary flex-1 z-10">
<span className="font-black text-safety-orange uppercase tracking-widest block mb-2 text-sm">Alerta do Sistema:</span>
<span className="text-white text-lg leading-relaxed">A unidade de São Paulo atingiu recorde histórico de acuracidade <strong className="text-status-green font-mono bg-status-green/10 px-2 py-0.5 rounded border border-status-green/30">(99.8%)</strong> e eficiência energética nas empilhadeiras.</span>
</div>
<button className="hidden lg:flex items-center gap-2 text-text-secondary hover:text-white uppercase text-xs font-bold tracking-widest border border-industrial-border hover:border-text-secondary px-4 py-2 rounded-sm transition-colors z-10">
                Dispensar
                <span className="material-icons text-sm">close</span>
</button>
</div>
</main>
<footer className="mt-8 py-10 px-6 text-center border-t-2 border-industrial-border bg-industrial-surface">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-text-secondary font-mono uppercase tracking-widest">© 2023 WMS OPS Dashboard. System Build 2.4.1 [DARK_MODE]</p>
<div className="flex gap-6 text-text-secondary">
<a className="hover:text-safety-orange transition-colors text-xs font-bold uppercase tracking-wider" href="#">Suporte</a>
<a className="hover:text-safety-orange transition-colors text-xs font-bold uppercase tracking-wider" href="#">Documentação</a>
<a className="hover:text-safety-orange transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-2" href="#">Status <span className="w-2 h-2 rounded-full bg-status-green"></span></a>
</div>
</div>
</footer>


    </div>
  );
}
