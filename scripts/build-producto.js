const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const plantillasDir = path.join(root, "plantillas");
const outputFile = path.join(root, "producto.md");

function normalizeLineEndings(text) {
  return text.replace(/\r\n/g, "\n");
}

const header = `# ChatGPT para la Oficina

## 10 plantillas prácticas para ahorrar tiempo en correos, reuniones, documentos y presentaciones

---

### Versión MVP

Este kit fue creado para personas que quieren usar ChatGPT en tareas laborales reales, sin complicarse con teoría técnica ni depender de instrucciones difíciles.

La idea no es reemplazar tu criterio, sino ayudarte a trabajar con más claridad, rapidez y orden.

ChatGPT puede ayudarte a redactar correos, resumir reuniones, ordenar documentos, preparar presentaciones y detectar puntos débiles en textos laborales. Pero para obtener buenos resultados, no basta con escribir “hazme un correo” o “resume esto”.

La calidad de la respuesta depende mucho de la calidad de la instrucción.

Este kit te entrega plantillas listas para copiar, adaptar y usar.

---

# Cómo usar este kit

Cada plantilla incluye:

- para qué sirve
- cuándo usarla
- prompt listo para copiar
- ejemplo de entrada
- ejemplo de salida esperada
- consejo práctico
- advertencia de uso

Puedes copiar el prompt, reemplazar los campos entre corchetes y pegarlo en ChatGPT.

Por ejemplo:

\`\`\`text
[pega aquí tu correo]
\`\`\`

significa que debes reemplazar ese texto por tu propio contenido.

---

# Método simple para pedir mejores respuestas

Antes de pedirle algo a ChatGPT, responde estas cinco preguntas:

1. ¿Qué necesito lograr?
2. ¿Para quién es la respuesta?
3. ¿Qué contexto necesita conocer?
4. ¿Qué tono quiero usar?
5. ¿Qué información no debe inventar?

Mientras más claro seas, mejor será el resultado.

---

# Regla importante

No uses las respuestas de IA sin revisar.

Antes de enviar un correo, documento o presentación creada con ayuda de ChatGPT, revisa:

- que el contenido sea correcto
- que el tono calce con tu situación
- que no incluya datos inventados
- que no revele información sensible
- que realmente diga lo que quieres decir

La IA ayuda, pero el criterio final sigue siendo tuyo.

---

# Índice de plantillas

## Correos laborales

1. [Mejorar un correo mal redactado](#plantilla-1-mejorar-un-correo-mal-redactado)
2. [Responder un correo difícil sin sonar agresivo](#plantilla-2-responder-un-correo-dificil-sin-sonar-agresivo)
3. [Convertir ideas sueltas en un correo claro](#plantilla-3-convertir-ideas-sueltas-en-un-correo-claro)

## Reuniones y minutas

4. [Resumir una reunión desde notas desordenadas](#plantilla-4-resumir-una-reunion-desde-notas-desordenadas)
5. [Extraer compromisos y responsables](#plantilla-5-extraer-compromisos-y-responsables)
6. [Preparar una reunión importante](#plantilla-6-preparar-una-reunion-importante)

## Documentos y reportes

7. [Resumir un documento largo](#plantilla-7-resumir-un-documento-largo)
8. [Detectar inconsistencias en un documento](#plantilla-8-detectar-inconsistencias-en-un-documento)
9. [Convertir texto técnico en lenguaje simple](#plantilla-9-convertir-texto-tecnico-en-lenguaje-simple)

## Presentaciones

10. [Crear estructura para una presentación](#plantilla-10-crear-estructura-para-una-presentacion)

---

# Plantillas

A continuación encontrarás las 10 plantillas del MVP.

Cada una está pensada para una situación laboral concreta.

`;

const footer = `

---

# Checklist final antes de usar una respuesta de IA

Antes de enviar, publicar o presentar cualquier contenido generado con ayuda de ChatGPT, revisa:

- [ ] ¿La respuesta resuelve exactamente lo que necesitabas?
- [ ] ¿El tono es adecuado para la audiencia?
- [ ] ¿No inventó datos, fechas, nombres o compromisos?
- [ ] ¿No incluye información confidencial?
- [ ] ¿El contenido sigue siendo fiel a tu intención original?
- [ ] ¿Puedes defender esta respuesta si alguien te pregunta de dónde salió?
- [ ] ¿La revisaste con criterio humano?

---

# Cierre

Este kit no busca que dependas de ChatGPT para pensar por ti.

Busca ayudarte a trabajar mejor con IA: pedir con más claridad, revisar con más criterio y ahorrar tiempo en tareas laborales repetitivas.

La IA puede acelerar tu trabajo, pero la responsabilidad final sigue siendo tuya.

Usa estas plantillas como punto de partida, ajústalas a tu contexto y mejora tus propios prompts con la práctica.

---

## Fin del MVP
`;

const files = fs
  .readdirSync(plantillasDir)
  .filter((file) => file.endsWith(".md"))
  .sort();

const content = files
  .map((file) => {
    const filePath = path.join(plantillasDir, file);
    return normalizeLineEndings(fs.readFileSync(filePath, "utf8")).trim();
  })
  .join("\n\n---\n\n");

const producto = normalizeLineEndings(`${header}\n\n${content}\n\n${footer}`);

fs.writeFileSync(outputFile, producto, "utf8");

console.log(`Producto generado correctamente: ${outputFile}`);
console.log(`Plantillas incluidas: ${files.length}`);
