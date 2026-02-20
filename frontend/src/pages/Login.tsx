import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    navigate('/menu')
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="h-12 w-full" />
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-12 w-full max-w-md mx-auto">
        <div className="mb-10 flex flex-col items-center">
          <div className="bg-primary/10 p-6 rounded-2xl mb-4 border border-primary/20">
            <span className="material-symbols-outlined text-primary !text-6xl">package_2</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-100">Industrial Ops</h1>
          <p className="text-slate-400 text-sm mt-1 uppercase tracking-widest font-medium">Warehouse Management</p>
        </div>

        <div className="w-full mb-8">
          <h2 className="text-2xl font-bold leading-tight tracking-tight border-l-4 border-primary pl-4">Acesso ao Sistema</h2>
        </div>

        <form className="w-full space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-slate-400 ml-1">Usuário</label>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">person</span>
              <input
                className="w-full h-16 pl-12 pr-4 bg-slate-800/40 border-2 border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:border-primary focus:ring-0 transition-all text-lg font-medium"
                placeholder="Digite seu usuário"
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-slate-400 ml-1">Senha</label>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">lock</span>
              <input
                className="w-full h-16 pl-12 pr-12 bg-slate-800/40 border-2 border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:border-primary focus:ring-0 transition-all text-lg font-medium"
                placeholder="••••••••"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300" type="button" aria-label="Mostrar senha">
                <span className="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <label className="flex items-center space-x-3 cursor-pointer group">
              <input className="h-6 w-6 rounded border-2 border-slate-700 bg-transparent text-primary focus:ring-primary focus:ring-offset-0" type="checkbox" />
              <span className="text-slate-300 font-medium group-hover:text-white transition-colors">Lembrar de mim</span>
            </label>
            <Link className="text-primary font-semibold hover:underline decoration-2 underline-offset-4" to="/forgot-password">Esqueci minha senha</Link>
          </div>

          <button className="w-full h-16 bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all rounded-lg flex items-center justify-center space-x-3 shadow-lg shadow-primary/20" type="submit">
            <span className="text-background-dark text-xl font-bold uppercase tracking-tight">Entrar</span>
            <span className="material-symbols-outlined text-background-dark font-bold">login</span>
          </button>
        </form>

        <div className="mt-12 flex flex-col items-center">
          <button type="button" className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined !text-4xl text-slate-300">fingerprint</span>
            <span className="text-xs font-medium uppercase tracking-widest text-slate-400">Acesso Biométrico</span>
          </button>
        </div>
      </main>

      <footer className="py-6 text-center">
        <div className="flex items-center justify-center space-x-2 text-slate-500 text-xs font-medium uppercase tracking-tighter">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Sistema Online • V 2.4.0-PRO</span>
        </div>
      </footer>

      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#ff8c00_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark to-background-dark" />
      </div>
    </div>
  )
}
