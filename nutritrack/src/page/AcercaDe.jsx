import { Link } from 'react-router-dom'
import avatar from '../assets/icono-creadores.jpeg'

function AcercaDe() {
  return (
    <section className="page-section about-page">
      <p className="eyebrow">Acerca de NutriTrack</p>
      <div className="about-layout">
        <img className="profile-image" src={avatar} alt="Avatar del equipo de NutriTrack" />
        <div>
          <h1>Un proyecto de Javier y Maria Fernanda</h1>
          <p className="about-lead">Una experiencia para registrar la alimentacion diaria de forma clara y sencilla.</p>
          <dl className="profile-list">
            <div><dt>Integrantes</dt><dd>Javier David Martinez Arrieta<br />Maria Fernanda Montezuma Gonzalez</dd></div>
            <div><dt>Grupo o programa</dt><dd>Globant</dd></div>
            <div><dt>Institucion</dt><dd>CESDE</dd></div>
            <div><dt>GitHub</dt><dd><a href="https://github.com/Jadamaar07/examen2front2globant#objetivo-del-examen" target="_blank" rel="noreferrer">Jadamaar07</a></dd></div>
          </dl>
          <Link className="secondary-button" to="/">Ir al registro</Link>
        </div>
      </div>
    </section>
  )
}

export default AcercaDe