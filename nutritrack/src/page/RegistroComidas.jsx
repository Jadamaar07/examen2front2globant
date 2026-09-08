import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CampoFormulario from '../components/CampoFormulario.jsx'

const formularioInicial = {
  nombre: '', correo: '', edad: '', peso: '', fecha: '', tipoComida: '',
  descripcion: '', calorias: '', vasosAgua: '', actividadFisica: '',
}

function validarFormulario(formulario) {
  const errores = {}
  const nombreLimpio = formulario.nombre.trim()
  const descripcionLimpia = formulario.descripcion.trim()
  const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nombreLimpio)
  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo)

  if (!nombreLimpio) errores.nombre = 'El nombre completo es obligatorio.'
  else if (nombreLimpio.length < 3) errores.nombre = 'El nombre debe tener al menos 3 caracteres.'
  else if (!nombreValido) errores.nombre = 'El nombre solo puede contener letras y espacios.'

  if (!formulario.correo) errores.correo = 'El correo electronico es obligatorio.'
  else if (!correoValido) errores.correo = 'El correo electronico no tiene un formato valido.'

  const edad = Number(formulario.edad)
  if (!formulario.edad) errores.edad = 'La edad es obligatoria.'
  else if (!Number.isInteger(edad) || edad < 5 || edad > 100) errores.edad = 'La edad debe ser un numero entero entre 5 y 100.'

  const peso = Number(formulario.peso)
  if (!formulario.peso) errores.peso = 'El peso es obligatorio.'
  else if (Number.isNaN(peso) || peso < 20 || peso > 300) errores.peso = 'El peso debe ser un numero entre 20 y 300.'

  const hoy = new Date().toISOString().split('T')[0]
  if (!formulario.fecha) errores.fecha = 'La fecha del registro es obligatoria.'
  else if (formulario.fecha > hoy) errores.fecha = 'La fecha no puede ser posterior al dia de hoy.'

  if (!formulario.tipoComida) errores.tipoComida = 'Selecciona un tipo de comida.'

  if (!descripcionLimpia) errores.descripcion = 'La descripcion es obligatoria.'
  else if (descripcionLimpia.length < 10 || descripcionLimpia.length > 200) errores.descripcion = 'La descripcion debe tener entre 10 y 200 caracteres.'

  const calorias = Number(formulario.calorias)
  if (!formulario.calorias) errores.calorias = 'Las calorias son obligatorias.'
  else if (!Number.isInteger(calorias) || calorias < 100 || calorias > 6000) errores.calorias = 'Las calorias deben ser un entero entre 100 y 6000.'

  const vasosAgua = Number(formulario.vasosAgua)
  if (formulario.vasosAgua === '') errores.vasosAgua = 'La cantidad de vasos de agua es obligatoria.'
  else if (!Number.isInteger(vasosAgua) || vasosAgua < 0 || vasosAgua > 20) errores.vasosAgua = 'Los vasos de agua deben ser un entero entre 0 y 20.'

  if (!formulario.actividadFisica) errores.actividadFisica = 'Selecciona una opcion.'

  return errores
}

function RegistroComidas() {
  const navigate = useNavigate()
  const [formulario, setFormulario] = useState(formularioInicial)
  const [errores, setErrores] = useState({})

  function actualizarCampo(event) {
    const { name, value } = event.target
    setFormulario((actual) => ({ ...actual, [name]: value }))
  }

  function enviarFormulario(event) {
    event.preventDefault()
    const nuevosErrores = validarFormulario(formulario)
    setErrores(nuevosErrores)
    if (Object.keys(nuevosErrores).length > 0) {
      document.getElementById(Object.keys(nuevosErrores)[0])?.focus()
      return
    }
    navigate('/cuidado-nutricional', { state: formulario })
  }

  function propsCampo(error, errorId) {
    return { 'aria-invalid': Boolean(error), 'aria-describedby': error ? errorId : undefined }
  }

  return (
    <section className="page-section registration-page">
      <div className="page-intro">
        <p className="eyebrow">Registro diario</p>
        <h1>Registra lo que comiste hoy</h1>
        <p>Completa tus datos para recibir una guia de cuidado nutricional personalizada.</p>
      </div>
      <form className="meal-form" onSubmit={enviarFormulario} noValidate>
        <CampoFormulario label="Nombre completo" id="nombre" error={errores.nombre}>{(id, errorId) => <input id={id} name="nombre" type="text" value={formulario.nombre} onChange={actualizarCampo} {...propsCampo(errores.nombre, errorId)} />}</CampoFormulario>
        <CampoFormulario label="Correo electronico" id="correo" error={errores.correo}>{(id, errorId) => <input id={id} name="correo" type="email" value={formulario.correo} onChange={actualizarCampo} {...propsCampo(errores.correo, errorId)} />}</CampoFormulario>
        <CampoFormulario label="Edad" id="edad" error={errores.edad} hint="Entre 5 y 100 anos">{(id, errorId) => <input id={id} name="edad" type="number" value={formulario.edad} onChange={actualizarCampo} {...propsCampo(errores.edad, errorId)} />}</CampoFormulario>
        <CampoFormulario label="Peso en kilogramos" id="peso" error={errores.peso}>{(id, errorId) => <input id={id} name="peso" type="number" step="0.1" value={formulario.peso} onChange={actualizarCampo} {...propsCampo(errores.peso, errorId)} />}</CampoFormulario>
        <CampoFormulario label="Fecha del registro" id="fecha" error={errores.fecha}>{(id, errorId) => <input id={id} name="fecha" type="date" value={formulario.fecha} onChange={actualizarCampo} {...propsCampo(errores.fecha, errorId)} />}</CampoFormulario>
        <CampoFormulario label="Tipo de comida principal" id="tipoComida" error={errores.tipoComida}>{(id, errorId) => <select id={id} name="tipoComida" value={formulario.tipoComida} onChange={actualizarCampo} {...propsCampo(errores.tipoComida, errorId)}><option value="">Selecciona una opcion</option><option value="Desayuno">Desayuno</option><option value="Almuerzo">Almuerzo</option><option value="Cena">Cena</option><option value="Refrigerio">Refrigerio</option></select>}</CampoFormulario>
        <CampoFormulario label="Descripcion de los alimentos" id="descripcion" error={errores.descripcion}>{(id, errorId) => <textarea id={id} name="descripcion" rows="4" value={formulario.descripcion} onChange={actualizarCampo} {...propsCampo(errores.descripcion, errorId)} />}</CampoFormulario>
        <CampoFormulario label="Calorias estimadas del dia" id="calorias" error={errores.calorias}>{(id, errorId) => <input id={id} name="calorias" type="number" value={formulario.calorias} onChange={actualizarCampo} {...propsCampo(errores.calorias, errorId)} />}</CampoFormulario>
        <CampoFormulario label="Vasos de agua consumidos" id="vasosAgua" error={errores.vasosAgua}>{(id, errorId) => <input id={id} name="vasosAgua" type="number" value={formulario.vasosAgua} onChange={actualizarCampo} {...propsCampo(errores.vasosAgua, errorId)} />}</CampoFormulario>
        <fieldset className={`form-field radio-field ${errores.actividadFisica ? 'has-error' : ''}`}><legend>Realizo actividad fisica?</legend><div className="radio-options"><label><input name="actividadFisica" type="radio" value="Si" checked={formulario.actividadFisica === 'Si'} onChange={actualizarCampo} /> Si</label><label><input name="actividadFisica" type="radio" value="No" checked={formulario.actividadFisica === 'No'} onChange={actualizarCampo} /> No</label></div>{errores.actividadFisica && <p className="field-error" role="alert">{errores.actividadFisica}</p>}</fieldset>
        <button className="primary-button" type="submit">Guardar registro</button>
      </form>
    </section>
  )
}

export default RegistroComidas