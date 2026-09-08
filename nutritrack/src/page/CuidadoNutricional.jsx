import { Link, useLocation } from 'react-router-dom'

function generarRecomendaciones(registro) {
  const recomendaciones = []
  const edad = Number(registro.edad)
  const calorias = Number(registro.calorias)
  const vasosAgua = Number(registro.vasosAgua)

  if (vasosAgua < 8) recomendaciones.push(`Te faltan ${8 - vasosAgua} vasos de agua para alcanzar una buena meta diaria.`)
  else recomendaciones.push('Mantiene tu consumo de agua durante el dia y acompanalo con tus comidas.')

  if (calorias > 2500) recomendaciones.push('Tu consumo calorico es alto; revisa las porciones y la variedad de tus alimentos.')
  else if (calorias < 1200) recomendaciones.push('Tu consumo calorico parece bajo; procura recibir orientacion profesional para cubrir tus necesidades.')
  else recomendaciones.push(`Tus ${calorias} calorias estan dentro de un rango moderado; prioriza alimentos variados.`)

  if (registro.actividadFisica === 'No') recomendaciones.push('Intenta realizar al menos 30 minutos de actividad fisica durante el dia.')
  else recomendaciones.push('Continua con tu actividad fisica y recuerda escuchar las necesidades de tu cuerpo.')

  if (edad < 12) recomendaciones.push('Por tu edad, busca acompanamiento adulto y opciones variadas para apoyar tu crecimiento.')
  else if (edad > 60) recomendaciones.push('Por tu edad, prioriza una alimentacion variada y consulta tus necesidades con un profesional.')

  return recomendaciones
}

const resumen = [
  ['Nombre completo', 'nombre'], ['Correo electronico', 'correo'], ['Edad', 'edad'],
  ['Peso en kilogramos', 'peso'], ['Fecha del registro', 'fecha'],
  ['Tipo de comida principal', 'tipoComida'], ['Descripcion', 'descripcion'],
  ['Calorias estimadas', 'calorias'], ['Vasos de agua', 'vasosAgua'],
  ['Actividad fisica', 'actividadFisica'],
]

function CuidadoNutricional() {
  const { state: registro } = useLocation()

  if (!registro) {
    return (
      <section className="page-section empty-state">
        <p className="eyebrow">Cuidado nutricional</p>
        <h1>Aun no hay un registro</h1>
        <p>Completa el formulario para consultar tu resumen y tus recomendaciones.</p>
        <Link className="primary-button" to="/">Volver al registro</Link>
      </section>
    )
  }

  const recomendaciones = generarRecomendaciones(registro)

  return (
    <section className="page-section">
      <div className="page-intro">
        <p className="eyebrow">Cuidado nutricional</p>
        <h1>Hola, {registro.nombre}</h1>
        <p>Este es el resumen de tu registro y algunas ideas para cuidar tus habitos.</p>
      </div>
      <div className="results-grid">
        <article className="content-block">
          <h2>Tu registro</h2>
          <dl className="summary-list">
            {resumen.map(([label, key]) => <div key={key}><dt>{label}</dt><dd>{registro[key]}</dd></div>)}
          </dl>
        </article>
        <article className="content-block recommendation-block">
          <h2>Recomendaciones para ti</h2>
          <ul className="recommendation-list">
            {recomendaciones.map((recomendacion) => <li key={recomendacion}>{recomendacion}</li>)}
          </ul>
        </article>
      </div>
      <Link className="secondary-button" to="/">Hacer un nuevo registro</Link>
    </section>
  )
}

export default CuidadoNutricional