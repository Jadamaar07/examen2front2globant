import { useId } from 'react'

function CampoFormulario({ label, id, error, children, hint }) {
  const generatedId = useId()
  const fieldId = id || generatedId
  const errorId = `${fieldId}-error`

  return (
    <div className={`form-field ${error ? 'has-error' : ''}`}>
      <label htmlFor={fieldId}>{label}</label>
      {children(fieldId, errorId)}
      {hint && !error && <span className="field-hint">{hint}</span>}
      {error && (
        <p className="field-error" id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default CampoFormulario
