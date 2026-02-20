import { useNavigate } from 'react-router-dom'

export default function ChecklistMaquinario() {
  const navigate = useNavigate()
  return (
    <div className="bg-slate-base text-text-primary font-display antialiased selection:bg-safety-orange selection:text-white pb-32">
      
<header className="sticky top-0 z-50 bg-slate-surface/95 backdrop-blur-md border-b border-slate-element shadow-lg">
<div className="flex items-center justify-between px-4 h-16">
<button type="button" onClick={() => navigate('/menu')} className="touch-target flex items-center justify-center w-12 h-12 rounded-lg hover:bg-slate-element transition-colors text-text-primary">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<h1 className="text-xl font-bold tracking-tight text-white uppercase">Check List Maquinário</h1>
<div className="w-12"></div> 
</div>
</header>
<main className="max-w-lg mx-auto p-4 space-y-6">
<section>
<div className="bg-slate-surface rounded-xl p-5 shadow-lg border border-slate-element">
<h3 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-6 border-b border-slate-element pb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-safety-orange text-lg">info</span>
            Informações Gerais
        </h3>
<div className="grid grid-cols-2 gap-5">
<div className="col-span-2">
<label className="label-industrial">OP (Número)</label>
<input className="input-industrial w-full px-4" placeholder="Ex: 12345" type="number"/>
</div>
<div className="col-span-2">
<label className="label-industrial">Data Inspeção</label>
<div className="relative">
<input className="input-industrial w-full px-4 appearance-none" type="date"/>
</div>
</div>
<div>
<label className="label-industrial">Início</label>
<input className="input-industrial w-full px-4 text-center font-mono" type="time" value="08:00"/>
</div>
<div>
<label className="label-industrial">Fim</label>
<input className="input-industrial w-full px-4 text-center font-mono" type="time" value="09:00"/>
</div>
</div>
</div>
</section>
<section className="space-y-4">
<h3 className="text-xs font-bold uppercase tracking-widest text-text-secondary px-1 mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-safety-orange text-lg">checklist</span>
        Itens de Verificação
    </h3>
<div className="bg-slate-surface border border-slate-element p-5 rounded-xl flex items-center justify-between shadow-md active:border-safety-orange transition-colors">
<span className="text-base font-bold text-white uppercase tracking-tight max-w-[60%]">Painel Elétrico</span>
<div className="industrial-radio-group">
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input defaultChecked={true} className="peer sr-only" name="item1" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-success peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">OK</span>
</label>
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input className="peer sr-only" name="item1" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-danger peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">NC</span>
</label>
</div>
</div>
<div className="bg-slate-surface border border-slate-element p-5 rounded-xl flex items-center justify-between shadow-md active:border-safety-orange transition-colors">
<span className="text-base font-bold text-white uppercase tracking-tight max-w-[60%]">Catador de Pedra</span>
<div className="industrial-radio-group">
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input defaultChecked={true} className="peer sr-only" name="item2" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-success peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">OK</span>
</label>
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input className="peer sr-only" name="item2" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-danger peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">NC</span>
</label>
</div>
</div>
<div className="bg-slate-surface border border-slate-element p-5 rounded-xl flex items-center justify-between shadow-md active:border-safety-orange transition-colors">
<span className="text-base font-bold text-white uppercase tracking-tight max-w-[60%]">Mesas Densimétricas</span>
<div className="industrial-radio-group">
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input defaultChecked={true} className="peer sr-only" name="item3" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-success peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">OK</span>
</label>
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input className="peer sr-only" name="item3" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-danger peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">NC</span>
</label>
</div>
</div>
<div className="bg-slate-surface border-2 border-danger p-5 rounded-xl flex items-center justify-between shadow-md shadow-danger/10">
<span className="text-base font-bold text-white uppercase tracking-tight max-w-[60%] flex items-center gap-2">
            Classificadores
            <span className="material-symbols-outlined text-danger text-base animate-pulse">warning</span>
</span>
<div className="industrial-radio-group border-danger/50">
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input className="peer sr-only" name="item4" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-success peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">OK</span>
</label>
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input defaultChecked={true} className="peer sr-only" name="item4" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-danger peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">NC</span>
</label>
</div>
</div>
<div className="bg-slate-surface border border-slate-element p-5 rounded-xl flex items-center justify-between shadow-md active:border-safety-orange transition-colors">
<span className="text-base font-bold text-white uppercase tracking-tight max-w-[60%]">Eletrônica</span>
<div className="industrial-radio-group">
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input defaultChecked={true} className="peer sr-only" name="item5" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-success peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">OK</span>
</label>
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input className="peer sr-only" name="item5" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-danger peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">NC</span>
</label>
</div>
</div>
<div className="bg-slate-surface border border-slate-element p-5 rounded-xl flex items-center justify-between shadow-md active:border-safety-orange transition-colors">
<span className="text-base font-bold text-white uppercase tracking-tight max-w-[60%]">Elevadores</span>
<div className="industrial-radio-group">
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input defaultChecked={true} className="peer sr-only" name="item6" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-success peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">OK</span>
</label>
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input className="peer sr-only" name="item6" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-danger peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">NC</span>
</label>
</div>
</div>
<div className="bg-slate-surface border border-slate-element p-5 rounded-xl flex items-center justify-between shadow-md active:border-safety-orange transition-colors">
<span className="text-base font-bold text-white uppercase tracking-tight max-w-[60%]">Correias Transportadoras</span>
<div className="industrial-radio-group">
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input defaultChecked={true} className="peer sr-only" name="item7" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-success peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">OK</span>
</label>
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input className="peer sr-only" name="item7" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-danger peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">NC</span>
</label>
</div>
</div>
<div className="bg-slate-surface border border-slate-element p-5 rounded-xl flex items-center justify-between shadow-md active:border-safety-orange transition-colors">
<span className="text-base font-bold text-white uppercase tracking-tight max-w-[60%]">Elevadores (Func.)</span>
<div className="industrial-radio-group">
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input defaultChecked={true} className="peer sr-only" name="item8" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-success peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">OK</span>
</label>
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input className="peer sr-only" name="item8" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-danger peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">NC</span>
</label>
</div>
</div>
<div className="bg-slate-surface border border-slate-element p-5 rounded-xl flex items-center justify-between shadow-md active:border-safety-orange transition-colors">
<span className="text-base font-bold text-white uppercase tracking-tight max-w-[60%]">Bicas</span>
<div className="industrial-radio-group">
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input defaultChecked={true} className="peer sr-only" name="item9" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-success peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">OK</span>
</label>
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input className="peer sr-only" name="item9" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-danger peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">NC</span>
</label>
</div>
</div>
<div className="bg-slate-surface border border-slate-element p-5 rounded-xl flex items-center justify-between shadow-md active:border-safety-orange transition-colors">
<span className="text-base font-bold text-white uppercase tracking-tight max-w-[60%]">Instalações Elétricas</span>
<div className="industrial-radio-group">
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input defaultChecked={true} className="peer sr-only" name="item10" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-success peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">OK</span>
</label>
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input className="peer sr-only" name="item10" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-danger peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">NC</span>
</label>
</div>
</div>
<div className="bg-slate-surface border border-slate-element p-5 rounded-xl flex items-center justify-between shadow-md active:border-safety-orange transition-colors">
<span className="text-base font-bold text-white uppercase tracking-tight max-w-[60%]">Porão Maquinário</span>
<div className="industrial-radio-group">
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input defaultChecked={true} className="peer sr-only" name="item11" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-success peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">OK</span>
</label>
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input className="peer sr-only" name="item11" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-danger peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">NC</span>
</label>
</div>
</div>
<div className="bg-slate-surface border border-slate-element p-5 rounded-xl flex items-center justify-between shadow-md active:border-safety-orange transition-colors">
<span className="text-base font-bold text-white uppercase tracking-tight max-w-[60%]">Func. Exaustores</span>
<div className="industrial-radio-group">
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input defaultChecked={true} className="peer sr-only" name="item12" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-success peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">OK</span>
</label>
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input className="peer sr-only" name="item12" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-danger peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">NC</span>
</label>
</div>
</div>
<div className="bg-slate-surface border border-slate-element p-5 rounded-xl flex items-center justify-between shadow-md active:border-safety-orange transition-colors">
<span className="text-base font-bold text-white uppercase tracking-tight max-w-[60%] text-sm">Exaustores Bags (Vazios)</span>
<div className="industrial-radio-group">
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input defaultChecked={true} className="peer sr-only" name="item13" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-success peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">OK</span>
</label>
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input className="peer sr-only" name="item13" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-danger peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">NC</span>
</label>
</div>
</div>
<div className="bg-slate-surface border border-slate-element p-5 rounded-xl flex items-center justify-between shadow-md active:border-safety-orange transition-colors">
<span className="text-base font-bold text-white uppercase tracking-tight max-w-[60%]">Eixos e Rolamentos</span>
<div className="industrial-radio-group">
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input defaultChecked={true} className="peer sr-only" name="item14" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-success peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">OK</span>
</label>
<label className="relative flex items-center justify-center h-10 w-14 cursor-pointer">
<input className="peer sr-only" name="item14" type="radio"/>
<span className="absolute inset-0 rounded bg-transparent peer-checked:bg-danger peer-checked:shadow-sm transition-all duration-200"></span>
<span className="relative text-sm font-bold text-slate-500 peer-checked:text-white z-10">NC</span>
</label>
</div>
</div>
</section>
<section>
<div className="bg-slate-surface rounded-xl p-5 shadow-lg border border-slate-element">
<h3 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-6 border-b border-slate-element pb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-safety-orange text-lg">edit_note</span>
            Finalização
        </h3>
<div className="space-y-6">
<div>
<label className="label-industrial">OBSERVAÇÕES</label>
<textarea className="w-full bg-slate-base border-slate-element text-text-primary placeholder-slate-500 focus:border-safety-orange focus:ring-safety-orange rounded-lg p-4 text-base min-h-[120px]" placeholder="Descreva qualquer não conformidade ou observação importante aqui..."></textarea>
</div>
<div>
<label className="label-industrial">Responsável pela Verificação</label>
<input className="input-industrial w-full px-4" placeholder="Nome do verificador" type="text"/>
</div>
<div>
<label className="label-industrial">Responsável Armazém</label>
<input className="input-industrial w-full px-4" placeholder="Nome do responsável do armazém" type="text"/>
</div>
</div>
</div>
</section>
</main>
<div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-surface/95 backdrop-blur-lg border-t border-slate-element flex justify-center items-center z-50">
<button className="w-full max-w-lg bg-safety-orange hover:bg-safety-orange-hover text-white font-extrabold text-lg py-5 rounded-xl shadow-lg shadow-safety-orange/30 active:scale-95 transition-all flex items-center justify-center gap-3 uppercase tracking-wide">
<span className="material-symbols-outlined text-3xl">save</span>
        Salvar Checklist
    </button>
</div>


    </div>
  );
}
