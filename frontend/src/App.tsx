import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Recebimento from './pages/Recebimento'
import Expedicao from './pages/Expedicao'
import LigasMaquinas from './pages/LigasMaquinas'
import ControleMaquinario from './pages/ControleMaquinario'
import ChecklistMaquinario from './pages/ChecklistMaquinario'
import ProducaoQuebras from './pages/ProducaoQuebras'
import Empilhadeira from './pages/Empilhadeira'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Menu from './pages/Menu'
import ForgotPassword from './pages/ForgotPassword'
import EmailSent from './pages/EmailSent'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-sent" element={<EmailSent />} />
        <Route path="/recebimento" element={<Recebimento />} />
        <Route path="/expedicao" element={<Expedicao />} />
        <Route path="/ligas-maquinas" element={<LigasMaquinas />} />
        <Route path="/controle-maquinario" element={<ControleMaquinario />} />
        <Route path="/checklist" element={<ChecklistMaquinario />} />
        <Route path="/producao-quebras" element={<ProducaoQuebras />} />
        <Route path="/empilhadeira" element={<Empilhadeira />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
