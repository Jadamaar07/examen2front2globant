import { NavLink, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu.jsx'
import AcercaDe from './page/AcercaDe.jsx'
import CuidadoNutricional from './page/CuidadoNutricional.jsx'
import RegistroComidas from './page/RegistroComidas.jsx'
import './style/app.css'

function App() {
  return (
    <div className="app-shell">
      <Menu />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<RegistroComidas />} />
          <Route path="/cuidado-nutricional" element={<CuidadoNutricional />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route
            path="*"
            element={
              <section className="page-placeholder">
                <h1>Página no encontrada</h1>
                <NavLink to="/">Volver al registro</NavLink>
              </section>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
