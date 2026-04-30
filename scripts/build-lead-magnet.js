const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const plantillasDir = path.join(root, "plantillas");
const outputFile = path.join(root, "lead-magnet.md");

function normalizeLineEndings(text) {
  return text.replace(/\r\n/g, "\n");
}

function normalizeChecklists(text) {
  return text.replace(/^(\s*)\[ \]\s+/gm, "$1- [ ] ");
}

const files = [
  "01-mejorar-correo-mal-redactado.md",
  "02-responder-correo-dificil.md",
  "04-resumir-reunion.md",
  "05-extraer-compromisos.md",
  "10-estructura-presentacion.md",
];

const missingFiles = files.filter((file) => {
  const filePath = path.join(plantillasDir, file);
  return !fs.existsSync(filePath);
});

if (missingFiles.length > 0) {
  console.error("No se encontraron las siguientes plantillas:");
  missingFiles.forEach((file) => {
    console.error(`- ${path.join("plantillas", file)}`);
  });
  process.exit(1);
}

const header = `# ChatGPT para la Oficina — Versión Gratuita

## 5 plantillas prácticas para ahorrar tiempo en tareas laborales

---

Esta versión gratuita reúne cinco plantillas prácticas para usar ChatGPT en tareas comunes de oficina: redactar correos, responder mensajes difíciles, resumir reuniones, extraer compromisos y preparar presentaciones.

La idea es que puedas probar una forma simple de pedir mejores respuestas, ahorrar tiempo y mantener el control sobre el resultado final.

---

# Cómo usar estas plantillas

Cada plantilla incluye:

- para qué sirve
- cuándo usarla
- prompt listo para copiar
- ejemplo de entrada
- ejemplo de salida esperada
- consejo práctico
- advertencia de uso

Copia el prompt, reemplaza los campos entre corchetes con tu propia información y pega el resultado en ChatGPT.

Antes de usar cualquier respuesta generada con IA, revisa que el contenido sea correcto, que el tono calce con tu situación y que no incluya información inventada.

---

# Plantillas incluidas

A continuación encontrarás cinco plantillas seleccionadas de la versión completa.

`;

const footer = `

---

# Cierre

Estas plantillas son un punto de partida para trabajar mejor con ChatGPT en tareas laborales reales.

Si quieres acceder al kit completo, revisa la versión completa de ChatGPT para la Oficina, que incluye 10 plantillas para correos, reuniones, documentos, reportes y presentaciones.

---

## Fin de la versión gratuita
`;

const content = files
  .map((file) => {
    const filePath = path.join(plantillasDir, file);
    const markdown = normalizeLineEndings(fs.readFileSync(filePath, "utf8"));
    return normalizeChecklists(markdown).trim();
  })
  .join("\n\n---\n\n");

const leadMagnet = normalizeLineEndings(`${header}\n\n${content}\n\n${footer}`);

fs.writeFileSync(outputFile, leadMagnet, "utf8");

console.log(`Lead magnet generado correctamente: ${outputFile}`);
console.log(`Plantillas incluidas: ${files.length}`);
