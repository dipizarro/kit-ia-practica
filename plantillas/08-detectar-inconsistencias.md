# Plantilla 8: Detectar inconsistencias en un documento

## Para qué sirve

Sirve para revisar un documento y detectar problemas como contradicciones, ambigüedades, información incompleta, riesgos de interpretación o puntos que necesitan aclaración.

Esta plantilla es especialmente útil cuando recibes documentos que parecen correctos a simple vista, pero que pueden tener vacíos importantes.

La idea no es que ChatGPT reemplace una revisión experta, sino que te ayude a mirar el documento con más criterio y orden.

---

## Cuándo usarla

Úsala cuando necesitas revisar:

- requerimientos de negocio
- propuestas comerciales
- minutas
- bases de trabajo
- informes internos
- procedimientos
- contratos o anexos
- documentos técnicos
- respuestas de proveedores
- definiciones enviadas por otra área

Ejemplos típicos:

- revisar si un requerimiento está suficientemente claro
- detectar contradicciones en una propuesta
- encontrar puntos ambiguos antes de una reunión
- preparar preguntas para un cliente o área usuaria
- revisar si un procedimiento tiene pasos incompletos
- identificar riesgos antes de aprobar un documento

---

## Prompt listo para copiar

```text
Actúa como un revisor crítico de documentos laborales.

Necesito que analices el siguiente documento y detectes inconsistencias, ambigüedades, vacíos de información y riesgos de interpretación.

Documento:
[pega aquí el documento]

Contexto:
[explica brevemente para qué se usará este documento]

Tipo de documento:
[requerimiento / propuesta / informe / minuta / procedimiento / contrato / correo / otro]

Audiencia:
[jefatura / cliente / equipo técnico / equipo interno / proveedor / comité]

Nivel de revisión:
[básico / medio / estricto]

Instrucciones:
- No inventes problemas.
- Basa tus observaciones solo en el texto entregado.
- Si algo es una inferencia, indícalo claramente.
- Separa problemas críticos de mejoras menores.
- Usa lenguaje claro, profesional y directo.

Devuélveme el análisis con esta estructura:

1. Resumen general del documento
2. Inconsistencias detectadas
3. Ambigüedades
4. Información faltante
5. Riesgos de interpretación
6. Preguntas que deberían aclararse
7. Recomendaciones de mejora
8. Versión corregida sugerida, si corresponde
```

## Ejemplo de entrada

Documento:
El sistema permitirá a los usuarios registrar solicitudes internas. Las solicitudes serán aprobadas por el responsable correspondiente. Una vez aprobadas, se enviará una notificación al solicitante. El sistema debe permitir modificar solicitudes en cualquier momento. Las solicitudes aprobadas no podrán ser modificadas. Se espera que el módulo esté disponible para todas las áreas, aunque inicialmente será utilizado solo por operaciones.

Contexto:
Estoy revisando un requerimiento funcional antes de estimar el desarrollo.

Tipo de documento:
Requerimiento.

Audiencia:
Equipo técnico y área usuaria.

Nivel de revisión:
Estricto.

## Ejemplo de salida esperada

1. Resumen general del documento

El documento describe un sistema para registrar y aprobar solicitudes internas, con notificaciones al solicitante y uso inicial por parte del área de operaciones.

2. Inconsistencias detectadas

- Se indica que el sistema debe permitir modificar solicitudes en cualquier momento, pero luego se afirma que las solicitudes aprobadas no podrán ser modificadas.
- Se menciona que el módulo estará disponible para todas las áreas, pero inicialmente solo será usado por operaciones. Esto no es necesariamente contradictorio, pero requiere definir alcance real de la primera versión.

3. Ambigüedades

- No se define quién es el “responsable correspondiente”.
- No se explica el flujo de aprobación.
- No se indica si una solicitud rechazada puede modificarse.
- No se aclara qué datos contiene una solicitud.
- No se define qué significa “disponible para todas las áreas”.

4. Información faltante

- Roles de usuario.
- Estados posibles de una solicitud.
- Reglas para modificar solicitudes.
- Criterios de aprobación o rechazo.
- Tipo de notificación.
- Canales de notificación.
- Alcance de la primera versión.

5. Riesgos de interpretación

- El equipo técnico podría implementar reglas de modificación incorrectas.
- El alcance podría crecer si no se define si el sistema será multiárea desde el inicio.
- La aprobación podría quedar demasiado genérica si no se definen responsables y estados.

6. Preguntas que deberían aclararse

- ¿Qué usuarios pueden crear solicitudes?
- ¿Quién aprueba cada solicitud?
- ¿Una solicitud puede tener más de un aprobador?
- ¿En qué estados puede modificarse una solicitud?
- ¿Las solicitudes rechazadas pueden editarse?
- ¿La primera versión será solo para operaciones o para todas las áreas?
- ¿Qué canal se usará para las notificaciones?

7. Recomendaciones de mejora

- Definir estados de la solicitud.
- Separar alcance inicial y alcance futuro.
- Especificar roles y permisos.
- Aclarar reglas de modificación.
- Documentar el flujo de aprobación.

8. Versión corregida sugerida

El sistema permitirá a los usuarios del área de operaciones registrar solicitudes internas en una primera versión. Cada solicitud tendrá estados definidos, como borrador, enviada, aprobada y rechazada. Las solicitudes podrán modificarse solo mientras estén en estado borrador o rechazada. Una vez aprobadas, no podrán ser modificadas. El responsable de aprobación será definido según el tipo de solicitud. Al aprobarse una solicitud, el sistema enviará una notificación al solicitante.

## Consejo práctico

Esta plantilla es especialmente poderosa cuando trabajas con documentos de requerimientos.

Una buena instrucción adicional es:

- Analiza este documento como si fueras el equipo que tendrá que implementarlo. Dime qué partes no son suficientes para estimar esfuerzo o desarrollar correctamente.

Esto ayuda a transformar documentos vagos en preguntas concretas.

## Cuidado con

ChatGPT puede ser demasiado “creativo” al detectar problemas si no le pides límites claros.

Agrega siempre instrucciones como:

- No inventes problemas. Si una observación depende de una suposición, márcala como inferencia.

Antes de usar el análisis, revisa:

[ ] ¿Las inconsistencias realmente existen?
[ ] ¿Las preguntas son relevantes?
[ ] ¿No está exagerando riesgos menores?
[ ] ¿Diferenció hechos de inferencias?
[ ] ¿El análisis ayuda a mejorar el documento?
[ ] ¿La versión corregida mantiene el sentido original?

## Variante útil

Puedes pedir una tabla de revisión:

Convierte este análisis en una tabla con las siguientes columnas:

1. Tipo de observación
2. Texto o sección relacionada
3. Problema detectado
4. Riesgo
5. Pregunta de aclaración
6. Recomendación

Documento:
[pega aquí el documento]

```

```
