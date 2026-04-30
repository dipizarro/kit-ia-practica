# Plantilla 5: Extraer compromisos y responsables

## Para qué sirve

Sirve para analizar una reunión, correo, conversación o documento y extraer los compromisos concretos que quedaron definidos.

Esta plantilla ayuda a separar comentarios generales de acciones reales, identificando qué se debe hacer, quién es responsable y cuándo debería completarse.

La idea no es que ChatGPT invente tareas, sino que detecte compromisos explícitos o posibles acciones que aparecen en el texto.

---

## Cuándo usarla

Úsala cuando necesitas ordenar compromisos después de:

- una reunión
- una minuta
- un correo largo
- una conversación con cliente
- una revisión de proyecto
- una sesión de seguimiento
- una planificación interna

Ejemplos típicos:

- identificar responsables después de una reunión
- transformar una minuta en lista de tareas
- preparar seguimiento para el equipo
- revisar qué quedó pendiente con un cliente
- extraer acciones desde una transcripción
- ordenar compromisos antes de enviar un resumen

---

## Prompt listo para copiar

```text
Actúa como un asistente de gestión de tareas y seguimiento.

Necesito analizar el siguiente texto y extraer todos los compromisos, tareas y próximos pasos accionables.

Texto:
[pega aquí el correo, minuta, transcripción o notas]

Contexto:
[explica brevemente de qué trata el texto]

Instrucciones:
- No inventes compromisos.
- Si un responsable no está indicado, escribe "No especificado".
- Si una fecha no está indicada, escribe "No especificada".
- Diferencia entre compromisos explícitos y posibles acciones sugeridas.
- Usa lenguaje claro y concreto.

Devuélveme una tabla con estas columnas:

1. Tipo
2. Compromiso o tarea
3. Responsable
4. Fecha límite
5. Prioridad
6. Estado
7. Observaciones

Después de la tabla, agrega:
- Resumen de los principales pendientes.
- Riesgos si no se hace seguimiento.
- Preguntas que habría que aclarar.
```

## Ejemplo de entrada

Texto:
En la reunión se revisó el avance del proyecto. María indicó que enviará la versión actualizada del documento el miércoles. Pedro quedó de validar los datos con el área comercial. Juan comentó que sería bueno revisar el diseño del reporte, pero no se definió responsable. También se acordó que el equipo tendrá una nueva reunión el viernes para revisar el avance. La fecha de entrega final sigue siendo el lunes.

Contexto:
Reunión interna de seguimiento de proyecto.

## Ejemplo de salida esperada

| Tipo                    | Compromiso o tarea                           | Responsable     | Fecha límite    | Prioridad | Estado      | Observaciones                                          |
| ----------------------- | -------------------------------------------- | --------------- | --------------- | --------- | ----------- | ------------------------------------------------------ |
| Compromiso explícito    | Enviar la versión actualizada del documento  | María           | Miércoles       | Alta      | Pendiente   | Necesario para avanzar con la revisión                 |
| Compromiso explícito    | Validar los datos con el área comercial      | Pedro           | No especificada | Alta      | Pendiente   | Puede afectar la entrega final                         |
| Compromiso explícito    | Realizar nueva reunión de revisión de avance | Equipo          | Viernes         | Media     | Pendiente   | Instancia de seguimiento                               |
| Posible acción sugerida | Revisar el diseño del reporte                | No especificado | No especificada | Media     | Por definir | Se mencionó como recomendación, pero no quedó asignada |

Resumen de principales pendientes:

- María debe enviar el documento actualizado.
- Pedro debe validar los datos con el área comercial.
- El equipo debe reunirse el viernes para revisar avances.
- Falta definir si se revisará el diseño del reporte y quién será responsable.

Riesgos si no se hace seguimiento:

- La validación de datos podría retrasar la entrega final.
- El diseño del reporte podría quedar sin revisión.
- La reunión del viernes podría no tener insumos suficientes.

Preguntas que habría que aclarar:

- ¿Qué día exacto corresponde al miércoles?
- ¿Cuándo debe completar Pedro la validación?
- ¿Quién tomará la revisión del diseño del reporte?

## Consejo práctico

Después de cada reunión importante, puedes usar esta plantilla antes de enviar la minuta.

Esto te ayuda a detectar si realmente quedaron compromisos claros o si solo hubo conversación general.

Una buena instrucción adicional es:

- Marca como "No especificado" cualquier responsable, fecha o acción que no aparezca de forma clara en el texto.

Eso evita que ChatGPT complete datos por su cuenta.

## Cuidado con

No todo comentario es un compromiso.

Por ejemplo:

- Sería bueno revisar el informe.

No es lo mismo que:

- María revisará el informe antes del viernes.

Antes de enviar la lista de tareas, revisa:

[ ] ¿Los compromisos aparecen realmente en el texto?
[ ] ¿Los responsables fueron mencionados explícitamente?
[ ] ¿Las fechas son reales?
[ ] ¿Se diferenciaron tareas confirmadas de sugerencias?
[ ] ¿No se agregaron tareas inventadas?
[ ] ¿La prioridad tiene sentido?

## Variante útil

Puedes pedir una versión lista para seguimiento semanal:

Convierte estos compromisos en una lista de seguimiento semanal.

Formato:

- Tarea
- Responsable
- Fecha compromiso
- Estado actual
- Próxima acción
- Riesgo asociado

Texto:
[pega aquí el texto]
