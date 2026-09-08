# Examen práctico de Front-End

## React, enrutamiento con React Router y validación de formularios

---

## Información general

* **Duración máxima:** 3 horas
* **Modalidad:** Individual
* **Tecnologías obligatorias:**

  * React (con Vite)
  * React Router DOM
  * CSS3
  * JavaScript (ES6+)
* **Tecnologías permitidas:**

  * Herramientas de inteligencia artificial generativa
* **Entrega:** Repositorio de GitHub (pull request a la rama principal del repositorio del examen)
* **Tema principal:** Componentes, estado, enrutamiento y validación de formularios
* **Valor:** 100 puntos
* **Puntos adicionales:** Hasta 10 puntos

---

# Caso empresarial

## NutriTrack: registro diario de alimentación

La compañía **NutriTrack** presta servicios de acompañamiento nutricional a empresas y a usuarios particulares.

Actualmente sus profesionales reciben la información de los pacientes por mensajes de texto y correos electrónicos. Los datos llegan incompletos, con edades escritas como texto, correos mal digitados y descripciones de comidas imposibles de interpretar. Esto obliga al equipo a devolver cada registro y repetir el proceso.

NutriTrack necesita una aplicación web en la que el usuario registre lo que consumió durante un día. La aplicación debe **impedir el envío de datos incorrectos**: ningún campo puede quedar vacío ni con un formato inválido.

Una vez el registro es válido, el usuario debe ser llevado automáticamente a una pantalla de **cuidado nutricional**, donde vea un resumen de lo que registró y una serie de recomendaciones. Además, la aplicación debe contar con un **menú de navegación** que permita consultar en cualquier momento una sección **Acerca de**, con la información del programador que construyó la aplicación.

---

# Objetivo del examen

Construir una aplicación en React que permita:

1. Crear un proyecto de React con Vite y ejecutarlo en modo desarrollo.
2. Configurar la navegación entre vistas con **React Router DOM**.
3. Construir un formulario controlado con **10 campos**.
4. **Validar los 10 campos** y mostrar mensajes de error específicos.
5. Impedir la navegación mientras existan errores.
6. Enviar la información registrada a otra vista mediante el enrutador.
7. Presentar una vista de cuidado nutricional con el resumen y las recomendaciones.
8. Presentar una vista "Acerca de" con la información del programador.
9. Aplicar estilos que hagan la interfaz clara, organizada y funcional.

---

# Requerimientos

## 1. Creación del proyecto

El proyecto debe crearse con Vite y llamarse `nutritrack`:

```bash
npm create vite@latest nutritrack -- --template react
cd nutritrack
npm install
npm install react-router-dom
npm run dev
```

> Se permite usar JavaScript (`.jsx`). No es obligatorio usar TypeScript.

---

## 2. Estructura del proyecto

El proyecto deberá contener como mínimo la siguiente estructura:

```text
nutritrack/
│
├── index.html
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── components/
│   │   ├── Menu.jsx
│   │   └── CampoFormulario.jsx
│   ├── pages/
│   │   ├── RegistroComidas.jsx
│   │   ├── CuidadoNutricional.jsx
│   │   └── AcercaDe.jsx
│   ├── styles/
│   │   └── estilos.css
│   └── assets/
└── README.md
```

Se permite una estructura diferente, siempre que exista una separación clara entre **páginas** (vistas asociadas a una ruta) y **componentes** reutilizables.

**No se acepta escribir toda la aplicación dentro de `App.jsx`.**

---

## 3. Enrutamiento

La aplicación deberá configurar **React Router DOM** con las siguientes rutas:

| Ruta                    | Componente            | Descripción                                            |
| ----------------------- | --------------------- | ------------------------------------------------------ |
| `/`                     | `RegistroComidas`     | Formulario de registro de comidas del día              |
| `/cuidado-nutricional`  | `CuidadoNutricional`  | Resumen del registro y recomendaciones                 |
| `/acerca-de`            | `AcercaDe`            | Información del programador                            |

Condiciones del enrutamiento:

1. El `BrowserRouter` debe envolver la aplicación (en `main.jsx` o en `App.jsx`).
2. Las rutas deben declararse con `<Routes>` y `<Route>`.
3. El menú debe usar `<Link>` o `<NavLink>`. **No se permite usar `<a href="">` para navegar entre vistas**, porque recarga la página completa y se pierde el estado.
4. El paso del formulario a la vista de cuidado nutricional debe hacerse **por código**, con `useNavigate()`, nunca con un enlace.

---

## 4. Menú de navegación

Debe existir un componente `Menu` visible en **todas** las vistas, que contenga como mínimo:

* Nombre o logotipo de la aplicación.
* Enlace a **Registro** (`/`).
* Enlace a **Acerca de** (`/acerca-de`).

Se valorará que el enlace de la vista activa se resalte visualmente usando `NavLink` y su propiedad `isActive`.

---

## 5. Formulario de registro (vista `/`)

El formulario debe tener **exactamente los 10 campos** de la siguiente tabla. Todos son obligatorios.

| #  | Campo                       | Nombre sugerido    | Tipo de control          |
| -- | --------------------------- | ------------------ | ------------------------ |
| 1  | Nombre completo             | `nombre`           | `input type="text"`      |
| 2  | Correo electrónico          | `correo`           | `input type="email"`     |
| 3  | Edad                        | `edad`             | `input type="number"`    |
| 4  | Peso en kilogramos          | `peso`             | `input type="number"`    |
| 5  | Fecha del registro          | `fecha`            | `input type="date"`      |
| 6  | Tipo de comida principal    | `tipoComida`       | `select`                 |
| 7  | Descripción de los alimentos| `descripcion`      | `textarea`               |
| 8  | Calorías estimadas del día  | `calorias`         | `input type="number"`    |
| 9  | Vasos de agua consumidos    | `vasosAgua`        | `input type="number"`    |
| 10 | ¿Realizó actividad física?  | `actividadFisica`  | `input type="radio"` (Sí / No) |

Condiciones del formulario:

1. Debe ser un **formulario controlado**: cada campo toma su valor de un estado de React (`useState`) y lo actualiza con `onChange`.
2. Se recomienda un solo objeto de estado para todo el formulario:

```javascript
const [formulario, setFormulario] = useState({
  nombre: "",
  correo: "",
  edad: "",
  peso: "",
  fecha: "",
  tipoComida: "",
  descripcion: "",
  calorias: "",
  vasosAgua: "",
  actividadFisica: ""
});
```

3. Cada campo debe tener su `<label>` correctamente asociado mediante `htmlFor` e `id`.
4. Las opciones del `select` de tipo de comida deben ser, como mínimo: **Desayuno, Almuerzo, Cena y Refrigerio**.

---

## 6. Validaciones

**Este es el requerimiento de mayor peso del examen (25 puntos).**

Deben validarse **los 10 campos**, según las siguientes reglas:

| Campo               | Reglas de validación                                                                 |
| ------------------- | ------------------------------------------------------------------------------------ |
| `nombre`            | Obligatorio. Mínimo 3 caracteres. Solo letras y espacios (se permiten tildes y ñ).    |
| `correo`            | Obligatorio. Debe tener formato de correo válido (`texto@dominio.extension`).         |
| `edad`              | Obligatorio. Número entero entre 5 y 100.                                             |
| `peso`              | Obligatorio. Número entre 20 y 300. Se permite un decimal.                            |
| `fecha`             | Obligatorio. No puede ser una fecha futura.                                           |
| `tipoComida`        | Obligatorio. Debe seleccionarse una opción distinta de la opción vacía por defecto.   |
| `descripcion`       | Obligatorio. Entre 10 y 200 caracteres.                                               |
| `calorias`          | Obligatorio. Número entero entre 100 y 6000.                                          |
| `vasosAgua`         | Obligatorio. Número entero entre 0 y 20.                                              |
| `actividadFisica`   | Obligatorio. Debe seleccionarse "Sí" o "No".                                          |

Condiciones de la validación:

1. La validación debe implementarse **manualmente en JavaScript**. No se permite usar Formik, React Hook Form, Yup, Zod ni ninguna librería equivalente.
2. No basta con los atributos `required`, `min` o `pattern` del HTML: la lógica debe estar en el código de React.
3. Los errores deben guardarse en un estado, por ejemplo:

```javascript
const [errores, setErrores] = useState({});
```

4. Cada mensaje de error debe mostrarse **debajo del campo que lo produce**, no en un mensaje general al final.
5. Los mensajes deben ser específicos y en español. Ejemplos:
   * "El nombre debe tener al menos 3 caracteres."
   * "El correo electrónico no tiene un formato válido."
   * "La edad debe ser un número entre 5 y 100."
   * "La fecha no puede ser posterior al día de hoy."
6. Al pulsar el botón de envío:
   * Si **hay errores**: no se navega a ninguna parte, se muestran todos los mensajes y el foco o el desplazamiento se mantiene en el formulario.
   * Si **no hay errores**: se navega a `/cuidado-nutricional` llevando los datos del registro.
7. El `onSubmit` del formulario debe llamar a `event.preventDefault()`.

---

## 7. Paso de datos entre vistas

Al enviar el formulario correctamente, los datos deben viajar a la vista de cuidado nutricional. Puedes usar cualquiera de estas dos opciones:

**Opción A — estado de navegación (recomendada):**

```javascript
const navigate = useNavigate();
navigate("/cuidado-nutricional", { state: formulario });
```

y en la vista destino:

```javascript
const { state } = useLocation();
```

**Opción B — estado elevado a `App.jsx`** y pasado por props a ambas páginas.

Condición adicional: si el usuario entra directamente a `/cuidado-nutricional` **sin haber diligenciado el formulario**, la vista no debe romperse. Debe mostrar un mensaje del tipo "Aún no hay un registro" y un enlace para volver al formulario.

---

## 8. Vista de cuidado nutricional (`/cuidado-nutricional`)

Debe mostrar:

1. Un saludo personalizado con el nombre registrado.
2. Un resumen con **todos** los datos registrados, presentados de forma legible (no un `JSON.stringify`).
3. Como mínimo **tres recomendaciones de cuidado nutricional calculadas a partir de los datos**, no textos fijos. Por ejemplo:
   * Si `vasosAgua` es menor a 8: recomendar aumentar el consumo de agua e indicar cuántos vasos faltan.
   * Si `calorias` supera 2500: sugerir revisar las porciones; si es menor a 1200, advertir sobre un consumo demasiado bajo.
   * Si `actividadFisica` es "No": recomendar al menos 30 minutos de actividad física.
   * Si la `edad` es mayor a 60 o menor a 12: mostrar una recomendación específica para ese grupo.
4. Un botón o enlace para **volver al formulario** y hacer un nuevo registro.

El cálculo de las recomendaciones debe estar en una función aparte, no mezclado dentro del JSX.

---

## 9. Vista Acerca de (`/acerca-de`)

Debe mostrar la información del programador que desarrolló la aplicación:

* Nombre completo.
* Grupo y programa académico.
* Institución.
* Año.
* Usuario de GitHub (con enlace al perfil).
* Una breve descripción de tu perfil o de las tecnologías que manejas.
* Fotografía o avatar (imagen local en `src/assets/` o una imagen de marcador de posición).

---

## 10. Estilos

* Los estilos deben estar en archivos CSS, importados desde los componentes.
* Se permite CSS plano, CSS Modules o un framework de estilos.
* El formulario debe distinguir visualmente los campos con error (por ejemplo, borde rojo y mensaje en rojo).
* La aplicación debe verse ordenada y legible en pantalla de escritorio.

---

# Restricciones

1. **No se permite** usar librerías de formularios ni de validación (Formik, React Hook Form, Yup, Zod, etc.).
2. **No se permite** navegar entre vistas con `<a href="">` ni con `window.location`.
3. **No se permite** entregar la aplicación con la plantilla por defecto de Vite (logotipos de React y Vite, contador de ejemplo).
4. **No se debe subir la carpeta `node_modules`.** Incluye un archivo `.gitignore`.
5. La inteligencia artificial puede utilizarse para consultar errores, pedir explicaciones de hooks, obtener ideas de diseño o generar textos de prueba. **Debes ser capaz de explicar cualquier línea del código que entregues.**

---

# Entregables

El repositorio de GitHub deberá contener:

1. El proyecto de React completo (sin `node_modules`).
2. `package.json` con la dependencia `react-router-dom`.
3. Los componentes de páginas y el componente de menú en archivos separados.
4. Los archivos de estilos.
5. Un `README.md` propio que incluya:
   * Nombre del estudiante y grupo.
   * Descripción de la aplicación.
   * Instrucciones de instalación y ejecución (`npm install` y `npm run dev`).
   * Listado de los 10 campos y sus reglas de validación.
6. Un **pull request** desde tu rama de trabajo hacia el repositorio del examen.

> La rama debe llevar tu nombre o un nombre descriptivo. **No trabajes sobre `main`.**

---

# Criterios de evaluación

| Criterio                      | Descripción                                                                                     | Puntaje |
| ----------------------------- | ----------------------------------------------------------------------------------------------- | ------: |
| Creación y estructura         | Proyecto de React funcional, con separación entre páginas y componentes                          |      10 |
| Enrutamiento                  | Configuración correcta de React Router, las tres rutas y navegación con `Link` / `NavLink`       |      15 |
| Menú de navegación            | Menú presente en todas las vistas y funcional                                                    |       5 |
| Formulario controlado         | Los 10 campos, con estado, `onChange` y etiquetas asociadas                                      |      15 |
| Validaciones                  | Las 10 reglas implementadas, con mensajes específicos junto a cada campo                         |      25 |
| Navegación condicionada       | El envío solo redirige cuando el formulario es válido, y los datos llegan a la vista destino     |      10 |
| Vista de cuidado nutricional  | Resumen legible y al menos tres recomendaciones calculadas a partir de los datos                 |      10 |
| Vista Acerca de               | Información completa del programador                                                             |       5 |
| Estilos y organización        | Interfaz clara, estados de error visibles y código ordenado                                      |       5 |
| **Total**                     |                                                                                                  | **100** |

---

# Puntos adicionales

Se podrán obtener hasta **10 puntos adicionales**.

| Mejora implementada                                                                     | Puntaje adicional |
| --------------------------------------------------------------------------------------- | ----------------: |
| Validación en tiempo real: el error aparece y desaparece mientras se escribe o al salir del campo (`onBlur`) |                +3 |
| Persistencia del último registro en `localStorage`, de modo que sobreviva al recargar la página |                +2 |
| Ruta `*` (página 404) con un componente propio y enlace de regreso al inicio             |                +2 |
| Diseño adaptable a dispositivos móviles                                                  |                +2 |
| Aplicación desplegada y funcionando (Vercel, Netlify o GitHub Pages), con el enlace en el README |                +1 |
| **Máximo adicional**                                                                     |           **+10** |

Los puntos adicionales no reemplazan los requerimientos obligatorios.

---

# Recomendaciones de implementación

## Un solo manejador para todos los campos

```javascript
const manejarCambio = (evento) => {
  const { name, value } = evento.target;
  setFormulario({ ...formulario, [name]: value });
};
```

Así cada `input` solo necesita `name`, `value` y `onChange={manejarCambio}`.

## Una función de validación que devuelva los errores

```javascript
const validarFormulario = (datos) => {
  const nuevosErrores = {};

  if (datos.nombre.trim().length < 3) {
    nuevosErrores.nombre = "El nombre debe tener al menos 3 caracteres.";
  }

  // ... el resto de las reglas

  return nuevosErrores;
};
```

Devolver el objeto de errores (en lugar de modificar el estado dentro de la función) permite comprobar en el envío si el formulario es válido:

```javascript
const manejarEnvio = (evento) => {
  evento.preventDefault();
  const nuevosErrores = validarFormulario(formulario);
  setErrores(nuevosErrores);

  if (Object.keys(nuevosErrores).length === 0) {
    navigate("/cuidado-nutricional", { state: formulario });
  }
};
```

## Mostrar el error junto al campo

```jsx
<label htmlFor="edad">Edad</label>
<input
  id="edad"
  name="edad"
  type="number"
  value={formulario.edad}
  onChange={manejarCambio}
  className={errores.edad ? "campo campo--error" : "campo"}
/>
{errores.edad && <p className="mensaje-error">{errores.edad}</p>}
```

## Un componente reutilizable para los campos

Si vas por los puntos de organización, crea `CampoFormulario.jsx` que reciba por props la etiqueta, el nombre, el tipo, el valor, el manejador y el error, y úsalo diez veces. Reduce el código del formulario a la mitad.
