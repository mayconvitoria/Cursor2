import { useNavigate, Link } from 'react-router-dom'

export default function ForgotPassword() {
  const navigate = useNavigate()
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display">
      

<header className="flex items-center justify-between p-4 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
<button type="button" onClick={() => navigate('/login')} aria-label="Voltar" className="flex items-center justify-center size-12 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
</button>
<h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12 uppercase tracking-widest text-slate-400 dark:text-slate-500 text-sm">Acesso Seguro</h2>
</header>
<main className="flex-1 flex flex-col px-6 pt-10 max-w-md mx-auto w-full">

<div className="mb-10">
<div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 mb-6">
<span className="material-symbols-outlined text-primary text-4xl">lock_reset</span>
</div>
<h1 className="text-4xl font-bold leading-none tracking-tight mb-4 dark:text-white uppercase">Recuperar<br/>Senha</h1>
<p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Insira seu e-mail cadastrado para receber as instruções de redefinição de acesso ao armazém.
            </p>
</div>

<div className="space-y-6">
<div className="flex flex-col gap-2">
<label className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-1" htmlFor="email">
                    E-mail Cadastrado
                </label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">mail</span>
<input className="form-input flex w-full rounded-lg text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 focus:border-primary dark:focus:border-primary focus:ring-0 h-16 pl-12 pr-4 text-lg font-medium transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600" id="email" placeholder="exemplo@logistica.com.br" type="email"/>
</div>
</div>
<button className="w-full flex items-center justify-center gap-3 rounded-lg h-16 px-6 bg-primary hover:bg-orange-600 active:scale-[0.98] transition-all text-white text-lg font-black uppercase tracking-widest shadow-lg shadow-primary/20">
<span>Enviar Link de Recuperação</span>
<span className="material-symbols-outlined">send</span>
</button>
</div>

<div className="mt-12 opacity-10 flex justify-center">
<div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
</div>
</main>

<footer className="p-8 mt-auto flex flex-col items-center gap-4">
<Link className="group flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-sm hover:text-primary dark:hover:text-primary transition-colors" to="/login">
<span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform">chevron_left</span>
            Voltar para o Login
        </Link>
<div className="flex gap-2 items-center text-[10px] text-slate-500 uppercase tracking-[0.2em] mt-4 font-medium opacity-50">
<span className="material-symbols-outlined text-xs">factory</span>
            Industrial Ops v2.4.0
        </div>
</footer>

<div className="fixed inset-0 -z-10 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" data-alt="Dark carbon fiber industrial texture pattern" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSB7HjmEGbYc2aQra17qaiHOs_SiSuYevF6DDeQTBay3M7ioRHBNumhTIKydDz3Z6SEPyrWicdcR-beEUypPZ3pn3BImVMZU-JYOE4RGxk7m5KMWplx7U8j-dAfq0n0tedbVDE8qWqhYOPJa89qJkqiQyyYv28bybEXgm1MW0qzVCVuBtcEQ9FQ1TkOTkO7tbb4qO3TtEcF03ft7V5Bz7P32JpOhexlM7tVAtuCBQ8ED93KbLR99HtrOCT7MYpEuKG_a0CNLaS9xE')` }}></div>

    </div>
  );
}
