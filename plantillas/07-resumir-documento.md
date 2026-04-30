# Plantilla 7: Resumir un documento largo

## Para qué sirve

Sirve para transformar un documento extenso en un resumen claro, ordenado y fácil de revisar.

Esta plantilla ayuda a identificar la idea principal, los puntos clave, las decisiones necesarias, los riesgos y los próximos pasos.

La idea no es que ChatGPT reemplace la lectura crítica del documento, sino que te ayude a entenderlo más rápido y a detectar lo más importante.

---

## Cuándo usarla

Úsala cuando tienes que revisar:

- informes largos
- documentos técnicos
- propuestas comerciales
- bases de licitación
- manuales internos
- políticas o procedimientos
- requerimientos de negocio
- documentos enviados por otra área
- textos extensos que necesitas entender rápido

Ejemplos típicos:

- resumir un informe para una jefatura
- entender rápidamente un documento técnico
- extraer puntos relevantes de una propuesta
- preparar una reunión sobre un documento
- detectar decisiones pendientes
- convertir un texto largo en una versión ejecutiva

---

## Prompt listo para copiar

```text
Actúa como un asistente de análisis y síntesis de documentos.

Necesito resumir el siguiente documento de forma clara, ejecutiva y útil para tomar decisiones.

Documento:
[pega aquí el contenido del documento]

Contexto:
[explica brevemente para qué estás revisando este documento]

Tipo de documento:
[informe / propuesta / requerimiento / manual / política / contrato / procedimiento / otro]

Audiencia del resumen:
[jefatura / equipo técnico / cliente / equipo interno / comité / otra área]

Nivel de detalle:
[breve / medio / detallado]

Instrucciones:
- No inventes información.
- No agregues conclusiones que no estén respaldadas por el texto.
- Si algo no está claro, indícalo como "punto por aclarar".
- Usa lenguaje claro y profesional.

Devuélveme el resumen con esta estructura:

1. Resumen ejecutivo
2. Idea principal del documento
3. Puntos clave
4. Decisiones necesarias
5. Riesgos o alertas
6. Información faltante o poco clara
7. Próximos pasos recomendados
```

## Ejemplo de entrada

Documento:
El área de operaciones propone implementar un nuevo flujo de aprobación para solicitudes internas. Actualmente, las solicitudes se envían por correo y no existe trazabilidad clara del estado. Esto genera retrasos, duplicidad de información y dificultad para identificar responsables. La propuesta considera crear un formulario centralizado, asignar responsables por etapa y generar notificaciones automáticas. Para una primera fase, se propone implementar solo las solicitudes de compras menores. La fecha tentativa de inicio sería el próximo mes, pero aún no se han definido los responsables finales ni los indicadores de éxito.

Contexto:
Necesito entender rápidamente esta propuesta para preparar una reunión de revisión.

Tipo de documento:
Propuesta interna.

Audiencia del resumen:
Jefatura y equipo interno.

Nivel de detalle:
Medio.

## Ejemplo de salida esperada

1. Resumen ejecutivo

El documento propone implementar un nuevo flujo de aprobación para solicitudes internas, partiendo con compras menores en una primera fase. El objetivo es mejorar la trazabilidad, reducir retrasos y ordenar la asignación de responsables.

2. Idea principal del documento

Centralizar y ordenar el proceso de solicitudes internas mediante un formulario, responsables definidos por etapa y notificaciones automáticas.

3. Puntos clave

- Actualmente las solicitudes se gestionan por correo.
- No existe trazabilidad clara del estado de cada solicitud.
- Hay retrasos y duplicidad de información.
- La propuesta busca crear un flujo centralizado.
- La primera fase se enfocaría en compras menores.
- Se considera iniciar el próximo mes.

4. Decisiones necesarias

- Confirmar si la primera fase incluirá solo compras menores.
- Definir responsables por etapa.
- Validar la fecha de inicio.
- Definir indicadores de éxito.

5. Riesgos o alertas

- La propuesta aún no define responsables finales.
- No se indican indicadores para medir el éxito.
- La fecha tentativa podría ser riesgosa si no se cierran definiciones previas.

6. Información faltante o poco clara

- Responsables finales del proceso.
- Indicadores de éxito.
- Alcance exacto de la primera fase.
- Herramienta o plataforma donde se implementará el formulario.

7. Próximos pasos recomendados

- Realizar reunión de definición con operaciones.
- Confirmar alcance de la primera fase.
- Asignar responsables.
- Definir métricas de seguimiento.
- Validar factibilidad técnica y operativa.

## Consejo práctico

Cuando resumas documentos largos, pide siempre que se separen los hechos de las interpretaciones.

Puedes agregar esta instrucción al prompt:

Diferencia claramente entre:

1. Información explícita del documento.
2. Interpretaciones o inferencias posibles.
3. Puntos que requieren validación.

Esto evita que ChatGPT presente como certeza algo que solo está suponiendo.

## Cuidado con

Un resumen puede hacer que pierdas matices importantes.

Antes de usarlo para tomar decisiones, revisa:

[ ] ¿El resumen representa correctamente el documento?
[ ] ¿No omitió una condición importante?
[ ] ¿No inventó conclusiones?
[ ] ¿Separó hechos de interpretaciones?
[ ] ¿Identificó información faltante?
[ ] ¿El nivel de detalle es suficiente para la audiencia?

## Variante útil

Puedes pedir una versión ultra breve para enviar por correo:

Convierte este resumen en una versión ejecutiva de máximo 5 líneas.

Debe incluir:

1. Qué propone el documento.
2. Por qué importa.
3. Qué decisiones faltan.
4. Principal riesgo.
5. Próximo paso recomendado.

Resumen:
[pega aquí el resumen]
