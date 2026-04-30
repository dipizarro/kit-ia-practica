# Plantilla 4: Resumir una reunión desde notas desordenadas

## Para qué sirve

Sirve para transformar notas desordenadas de una reunión en una minuta clara, ordenada y útil.

Esta plantilla ayuda a convertir apuntes rápidos, frases sueltas o transcripciones parciales en un resumen estructurado con acuerdos, pendientes y próximos pasos.

La idea no es que ChatGPT invente lo que ocurrió en la reunión, sino que ordene la información disponible.

---

## Cuándo usarla

Úsala cuando tienes:

- notas tomadas rápidamente durante una reunión
- una transcripción larga y poco clara
- apuntes mezclados con comentarios
- acuerdos repartidos en distintas partes del texto
- dudas sobre qué quedó pendiente
- necesidad de enviar una minuta al equipo

Ejemplos típicos:

- reunión de seguimiento
- reunión con cliente
- reunión interna de equipo
- reunión de proyecto
- revisión de avances
- levantamiento de requerimientos
- reunión comercial

---

## Prompt listo para copiar

```text
Actúa como un asistente de gestión y documentación de reuniones.

Necesito convertir estas notas desordenadas en una minuta clara, profesional y fácil de revisar.

Notas de la reunión:
[pega aquí tus notas, apuntes o transcripción]

Contexto de la reunión:
[explica brevemente de qué trataba la reunión]

Participantes:
[indica nombres o roles si los tienes]

Objetivo de la reunión:
[explica qué se buscaba resolver, revisar o decidir]

Formato requerido:
Minuta estructurada.

Instrucciones:
- No inventes información.
- Si falta un dato, escribe "No especificado".
- Separa claramente acuerdos, pendientes y próximos pasos.
- Usa lenguaje claro y profesional.

Devuélveme la minuta con esta estructura:

1. Tema de la reunión
2. Fecha
3. Participantes
4. Resumen general
5. Puntos tratados
6. Acuerdos
7. Pendientes
8. Responsables
9. Próximos pasos
10. Riesgos o alertas
```

## Ejemplo de entrada

Notas de la reunión:
Se revisó avance del informe mensual. Juan dice que todavía falta información del área comercial. María comenta que el diseño del reporte ya está casi listo. Se acuerda cerrar la primera versión el jueves si llegan los datos. Hay preocupación porque gerencia pidió revisar el informe el viernes temprano. Pedro queda de insistir con comercial. También se habló de mejorar el formato del resumen ejecutivo, pero eso puede quedar para la siguiente versión.

Contexto de la reunión:
Reunión interna para revisar el avance del informe mensual.

Participantes:
Juan, María, Pedro y equipo de análisis.

Objetivo de la reunión:
Revisar estado del informe, pendientes y fecha tentativa de cierre.

## Ejemplo de salida esperada

1. Tema de la reunión
   Revisión de avance del informe mensual.

2. Fecha
   No especificado.

3. Participantes
   Juan, María, Pedro y equipo de análisis.

4. Resumen general
   Se revisó el estado del informe mensual. El diseño del reporte está avanzado, pero aún falta información del área comercial para poder cerrar la primera versión. Existe preocupación por el plazo, ya que gerencia solicitó revisar el informe el viernes temprano.

5. Puntos tratados

- Avance general del informe mensual.
- Información pendiente del área comercial.
- Estado del diseño del reporte.
- Fecha tentativa de cierre.
- Revisión solicitada por gerencia.
- Mejora futura del resumen ejecutivo.

6. Acuerdos

- Cerrar la primera versión del informe el jueves, siempre que llegue la información pendiente.
- Dejar la mejora del resumen ejecutivo para una siguiente versión.

7. Pendientes

- Recepción de información desde el área comercial.
- Cierre de la primera versión del informe.

8. Responsables

- Pedro: insistir con el área comercial.
- María: continuar con el diseño del reporte.
- Equipo de análisis: cerrar la primera versión del informe.

9. Próximos pasos

- Pedro realizará seguimiento con comercial.
- El equipo revisará si los datos llegan a tiempo.
- Se preparará la versión para revisión de gerencia el viernes.

10. Riesgos o alertas

- Si la información comercial no llega a tiempo, podría retrasarse la revisión con gerencia.

## Consejo práctico

Para obtener una mejor minuta, no necesitas escribir perfecto durante la reunión.

Puedes tomar notas rápidas y después pedirle a ChatGPT que las ordene. Lo importante es incluir datos clave como:

- tema
- participantes
- acuerdos
- responsables
- fechas
- pendientes

Mientras más explícitos sean esos datos, más útil será la minuta.

## Cuidado con

Las minutas pueden generar malentendidos si incluyen acuerdos que no fueron realmente definidos.

Antes de enviar la minuta, revisa:

[ ] ¿Los acuerdos realmente se dijeron?
[ ] ¿Los responsables están correctamente asignados?
[ ] ¿Las fechas son reales y no inferidas?
[ ] ¿Los pendientes están claros?
[ ] ¿No se agregó información inventada?
[ ] ¿El resumen representa bien la reunión?

## Variante útil

Puedes pedir una versión ejecutiva para enviar por correo:

Convierte esta minuta en un correo breve para enviar al equipo.

Debe incluir:

1. Resumen de la reunión
2. Acuerdos principales
3. Pendientes y responsables
4. Próximos pasos

Minuta:
[pega aquí la minuta]
