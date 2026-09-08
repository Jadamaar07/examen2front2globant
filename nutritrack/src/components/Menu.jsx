import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/">
        NutriTrack
      </NavLink>
      <nav aria-label="Navegacion principal">
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          to="/"
        >
          Registro
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          to="/acerca-de"
        >
          Acerca de
        </NavLink>
      </nav>
    </header>
  )
}

export default Menu