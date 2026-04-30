# Plantilla 9: Convertir texto técnico en lenguaje simple

## Para qué sirve

Sirve para transformar un texto técnico, complejo o lleno de jerga en una explicación clara, simple y fácil de entender para personas no especialistas.

Esta plantilla ayuda a comunicar mejor información compleja sin perder precisión.

La idea no es “infantilizar” el contenido, sino hacerlo más claro para la audiencia correcta.

---

## Cuándo usarla

Úsala cuando necesitas explicar:

- conceptos técnicos a un cliente
- requerimientos a una jefatura
- problemas de sistema a un usuario
- resultados de un informe a un equipo no técnico
- procesos internos complejos
- políticas o procedimientos difíciles
- documentación técnica a personas de negocio

Ejemplos típicos:

- explicar una falla de sistema sin tecnicismos
- resumir un requerimiento técnico para gerencia
- convertir documentación compleja en una guía simple
- adaptar una explicación para usuarios finales
- preparar una respuesta clara para un cliente
- crear material de capacitación

---

## Prompt listo para copiar

```text
Actúa como un comunicador experto en simplificar información técnica.

Necesito transformar el siguiente texto en una explicación clara, simple y fácil de entender para una persona no especialista.

Texto original:
[pega aquí el texto técnico]

Contexto:
[explica brevemente dónde se usará esta explicación]

Audiencia:
[cliente / usuario final / jefatura / equipo interno / área de negocio / público general]

Nivel de conocimiento de la audiencia:
[bajo / medio / alto]

Tono deseado:
[claro / cercano / formal / ejecutivo / pedagógico / profesional]

Instrucciones:
- Mantén la precisión del contenido.
- Evita jerga innecesaria.
- Si un término técnico es necesario, explícalo brevemente.
- No agregues información que no esté en el texto.
- Usa ejemplos o analogías solo si ayudan a entender mejor.

Devuélveme:
1. Versión simplificada.
2. Versión ultra breve.
3. Términos técnicos explicados.
4. Posibles dudas que podría tener la audiencia.
```

## Ejemplo de entrada

Texto original:
El sistema presenta intermitencia en el servicio debido a un aumento en la latencia de las consultas hacia la base de datos. Se identificó que algunas operaciones están realizando llamadas no optimizadas, lo que genera tiempos de respuesta superiores al umbral esperado. Se requiere revisar los índices asociados y optimizar las consultas involucradas.

Contexto:
Necesito explicar el problema a un área usuaria que reportó lentitud en el sistema.

Audiencia:
Usuario final y jefatura de área.

Nivel de conocimiento de la audiencia:
Bajo.

Tono deseado:
Claro, profesional y tranquilizador.

## Ejemplo de salida esperada

1. Versión simplificada

El sistema está funcionando con lentitud en algunos momentos porque ciertas consultas están demorando más de lo esperado en obtener información desde la base de datos.

Ya se identificó que algunas operaciones necesitan ser optimizadas para responder más rápido. El equipo técnico revisará la forma en que se están haciendo esas consultas y ajustará los elementos necesarios para mejorar el tiempo de respuesta.

2. Versión ultra breve

El sistema presenta lentitud porque algunas consultas internas están demorando más de lo normal. El equipo técnico ya identificó el punto a revisar y trabajará en optimizarlo.

3. Términos técnicos explicados

- Latencia: tiempo que demora el sistema en responder.
- Base de datos: lugar donde se almacena la información del sistema.
- Consultas: solicitudes que el sistema hace para obtener datos.
- Índices: elementos que ayudan a encontrar información más rápido dentro de la base de datos.
- Optimizar: mejorar el funcionamiento para que sea más rápido o eficiente.

4. Posibles dudas de la audiencia

- ¿El sistema está caído o solo lento?
- ¿Cuánto tiempo tomará la corrección?
- ¿La lentitud afecta a todos los usuarios?
- ¿Se perderá información?
- ¿Hay una solución temporal mientras se corrige?

## Consejo práctico

Cuando simplifiques un texto técnico, indica siempre para quién va dirigido.

No es lo mismo explicar algo a gerencia, a un cliente, a un usuario final o a otro equipo técnico.

Puedes agregar esta instrucción:

Adapta la explicación para una persona que no conoce detalles técnicos, pero necesita entender el impacto, el riesgo y los próximos pasos.

Esto mejora mucho la utilidad de la respuesta.

## Cuidado con

Simplificar no significa cambiar el sentido del mensaje.

Antes de usar la respuesta, revisa:

[ ] ¿La versión simple mantiene la precisión?
[ ] ¿No eliminó información importante?
[ ] ¿No agregó causas que no estaban confirmadas?
[ ] ¿El tono es adecuado para la audiencia?
[ ] ¿Los términos técnicos fueron explicados correctamente?
[ ] ¿La explicación no genera alarma innecesaria?

## Variante útil

Puedes pedir una versión para correo:

Convierte esta explicación técnica en un correo claro para usuarios no técnicos.

Debe incluir:

1. Qué está ocurriendo.
2. Qué impacto tiene.
3. Qué se está haciendo.
4. Qué se espera como próximo paso.

Texto técnico:
[pega aquí el texto]
