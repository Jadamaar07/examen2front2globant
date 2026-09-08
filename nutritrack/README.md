# NutriTrack

Aplicación web para registrar la alimentación diaria, validar formularios y mostrar recomendaciones de cuidado nutricional.

## Estudiante

- Nombre: Javier David Martinez Arrieta y Maria Fernanda Montezuma Gonzalez
- Grupo / programa: Globant / CESDE
- Institución: CESDE
- GitHub: [Jadamaar07](https://github.com/Jadamaar07)

## Descripción de la aplicación

NutriTrack permite registrar el consumo diario de alimentos y validar que cada dato cumpla con los requisitos del examen. La aplicación incluye:

- formulario controlado con 10 campos obligatorios
- validaciones manuales en JavaScript
- navegación entre vistas con React Router
- vista de cuidado nutricional con resumen y recomendaciones
- vista "Acerca de" con información del programador
- menú de navegación visible en todas las pantallas

## Tecnologías utilizadas

- React
- Vite
- React Router DOM
- CSS3
- JavaScript ES6+

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

## Compilación para producción

```bash
npm run build
```

## Estructura del proyecto

```text
nutritrack/
├── index.html
├── package.json
├── vite.config.js
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── CampoFormulario.jsx
│   │   └── Menu.jsx
│   ├── page/
│   │   ├── AcercaDe.jsx
│   │   ├── CuidadoNutricional.jsx
│   │   └── RegistroComidas.jsx
│   └── style/
│       └── app.css
└── README.md
```

## Rutas de la aplicación

| Ruta | Vista | Descripción |
| --- | --- | --- |
| `/` | RegistroComidas | Formulario de registro diario |
| `/cuidado-nutricional` | CuidadoNutricional | Resumen y recomendaciones |
| `/acerca-de` | AcercaDe | Información del desarrollador |

## Campos del formulario y reglas

1. Nombre completo: obligatorio, mínimo 3 caracteres, solo letras y espacios.
2. Correo electrónico: obligatorio, formato válido de correo.
3. Edad: obligatoria, número entero entre 5 y 100.
4. Peso: obligatorio, número entre 20 y 300, permite decimal.
5. Fecha del registro: obligatoria, no puede ser una fecha futura.
6. Tipo de comida principal: obligatorio, seleccionar una opción válida.
7. Descripción de los alimentos: obligatoria, entre 10 y 200 caracteres.
8. Calorías estimadas del día: obligatorias, entero entre 100 y 6000.
9. Vasos de agua consumidos: obligatorio, entero entre 0 y 20.
10. ¿Realizó actividad física?: obligatorio, seleccionar Sí o No.

## Validaciones implementadas

La validación se hace manualmente con JavaScript en React, sin usar librerías externas como Formik, Yup o Zod.

- Se guarda cada error en un estado `errores`.
- Los mensajes se muestran debajo del campo correspondiente.
- Si hay errores, no se navega.
- Si todo es válido, se envía el formulario a `/cuidado-nutricional`.

## Requisitos del examen cumplidos

- Proyecto en React con Vite
- Enrutamiento con React Router DOM
- Menú de navegación presente en todas las vistas
- Formulario controlado con 10 campos
- Validación manual de los 10 campos
- Redirección condicionada al formulario válido
- Vista de cuidado nutricional con recomendaciones
- Vista Acerca de con información del desarrollador
- Estilos en CSS separados

