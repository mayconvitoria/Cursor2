export default function EmailSent() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      

<div className="absolute inset-0 pointer-events-none industrial-bg opacity-20 dark:opacity-30"></div>

<div className="relative w-full max-w-md px-6 py-8 flex flex-col h-full justify-between sm:h-auto sm:justify-center gap-8 z-10">

<div className="w-full flex justify-center mb-4 sm:mb-8">
<div className="flex items-center gap-2 opacity-50">
<span className="material-symbols-outlined text-primary text-2xl">warehouse</span>
<span className="text-slate-900 dark:text-slate-100 text-sm font-bold tracking-widest uppercase">WMS • OPS</span>
</div>
</div>

<div className="flex flex-col items-center text-center gap-6">

<div className="relative group">
<div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
<div className="relative flex items-center justify-center size-24 rounded-full bg-surface-dark border-2 border-primary/30 shadow-[0_0_15px_rgba(249,103,6,0.3)]">
<span className="material-symbols-outlined text-primary text-[48px] font-bold">mark_email_read</span>
</div>
</div>

<div className="space-y-4 max-w-[320px]">
<h1 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                    E-mail Enviado!
                </h1>
<div className="h-1 w-16 bg-primary mx-auto rounded-full opacity-80"></div>
<p className="text-base text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                    As instruções para redefinir sua senha foram enviadas para o seu endereço de e-mail cadastrado.
                </p>
<p className="text-sm text-slate-500 dark:text-slate-500 font-normal leading-relaxed">
                    Verifique sua caixa de entrada e a pasta de spam caso não encontre a mensagem.
                </p>
</div>
</div>

<div className="w-full mt-8 sm:mt-12">
<button className="w-full h-14 bg-primary hover:bg-orange-600 active:bg-orange-700 text-white text-lg font-bold uppercase tracking-wide rounded-lg transition-all duration-200 shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2 group">
<span>Voltar ao Login</span>
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">login</span>
</button>
<div className="mt-6 flex justify-center">
<button className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-1 font-medium">
<span className="material-symbols-outlined text-[18px]">help</span>
                    Precisa de ajuda?
                </button>
</div>
</div>
</div>

<div className="absolute bottom-1 w-32 h-1 bg-slate-300 dark:bg-slate-700 rounded-full sm:hidden"></div>

    </div>
  );
}
