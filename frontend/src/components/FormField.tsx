/** Componentes de campo reutilizáveis no estilo industrial dark do Stitch */

interface FieldProps {
  label: string
  children: React.ReactNode
  className?: string
}
export function Field({ label, children, className = '' }: FieldProps) {
  return (
    <div className={className}>
      <label className="block text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1.5 font-display">{label}</label>
      {children}
    </div>
  )
}

export const inputCls =
  'w-full h-14 rounded border border-slate-600 bg-industrial-dark text-white px-4 text-base font-medium focus:border-safety-orange focus:ring-1 focus:ring-safety-orange outline-none transition-colors placeholder:text-slate-500'
export const inputSmCls =
  'w-full h-12 rounded border border-slate-600 bg-industrial-dark text-white px-4 text-sm font-medium focus:border-safety-orange focus:ring-1 focus:ring-safety-orange outline-none transition-colors placeholder:text-slate-500'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
}
export function StitchSelect({ children, className = '', ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        className={`${inputCls} appearance-none pr-10 ${className}`}
        {...props}
      >
        {children}
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none text-xl">expand_more</span>
    </div>
  )
}

interface SectionProps {
  icon: string
  title: string
  children: React.ReactNode
  accent?: boolean
}
export function Section({ icon, title, children, accent = false }: SectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className={`material-symbols-outlined text-safety-orange text-base`}>{icon}</span>
        <h2 className="text-[11px] font-bold text-safety-orange uppercase tracking-widest font-display">{title}</h2>
      </div>
      <div className={`bg-industrial-slate rounded-lg border border-slate-700 p-4 space-y-4 ${accent ? 'border-l-4 border-l-safety-orange' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export function CalcBox({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 flex items-center justify-between relative overflow-hidden shadow-industrial">
      <div className="absolute top-0 right-0 w-20 h-20 bg-safety-orange/10 rounded-bl-full -mr-4 -mt-4 pointer-events-none" />
      <div className="relative z-10">
        <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1 font-display">Campos calculados</p>
        <h3 className="text-base font-bold text-white font-display">{label}</h3>
      </div>
      <div className="text-right relative z-10">
        <span className="text-4xl font-black text-safety-orange tracking-tighter font-display">{value}</span>
        <span className="block text-[10px] font-bold text-text-muted uppercase tracking-widest mt-1 font-display">{unit}</span>
      </div>
    </div>
  )
}
