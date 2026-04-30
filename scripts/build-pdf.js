const fs = require("fs");
const path = require("path");
const { marked } = require("marked");
const puppeteer = require("puppeteer");

const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const productoFile = path.join(root, "producto.md");
const leadMagnetFile = path.join(root, "lead-magnet.md");
const productoPdfFile = path.join(distDir, "chatgpt-para-la-oficina.pdf");
const leadMagnetPdfFile = path.join(distDir, "chatgpt-para-la-oficina-gratis.pdf");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

function slugify(text) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

const renderer = new marked.Renderer();

renderer.heading = function ({ tokens, depth }) {
  const text = this.parser.parseInline(tokens);
  const plainText = text.replace(/<[^>]+>/g, "");
  const id = slugify(plainText);

  return `<h${depth} id="${id}">${text}</h${depth}>`;
};

function normalizeChecklists(markdown) {
  // Corrige checklists escritos como:
  // [ ] texto
  // y los transforma en:
  // - [ ] texto
  return markdown.replace(/^(\s*)\[ \]\s+/gm, "$1- [ ] ");
}

function getHtmlFile(outputFile) {
  if (path.basename(outputFile) === "chatgpt-para-la-oficina.pdf") {
    return path.join(distDir, "producto.html");
  }

  return outputFile.replace(/\.pdf$/i, ".html");
}

function buildHtml({ markdown, title, subtitle, versionLabel }) {
  const body = marked(normalizeChecklists(markdown), {
    gfm: true,
    breaks: false,
    renderer,
  });

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>${title}</title>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      max-width: 820px;
      margin: 0 auto;
      padding: 48px 36px;
      line-height: 1.6;
      color: #222;
      background: #fff;
      font-size: 15px;
    }

    h1 {
      font-size: 34px;
      margin-top: 0;
      margin-bottom: 12px;
      color: #111;
      page-break-after: avoid;
    }

    h2 {
      font-size: 24px;
      margin-top: 36px;
      margin-bottom: 12px;
      color: #222;
      page-break-after: avoid;
    }

    h3 {
      font-size: 18px;
      margin-top: 28px;
      margin-bottom: 8px;
      color: #333;
      page-break-after: avoid;
    }

    p {
      margin: 0 0 14px;
    }

    a {
      color: #111;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    ul, ol {
      margin-top: 8px;
      margin-bottom: 18px;
    }

    li {
      margin-bottom: 6px;
    }

    input[type="checkbox"] {
      margin-right: 8px;
    }

    code {
      font-family: Consolas, Monaco, monospace;
      font-size: 13px;
    }

    pre {
      background: #f5f5f5;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 14px;
      overflow-x: auto;
      white-space: pre-wrap;
      word-wrap: break-word;
      page-break-inside: avoid;
    }

    blockquote {
      border-left: 4px solid #ddd;
      margin-left: 0;
      padding-left: 16px;
      color: #555;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 18px 0;
      font-size: 13px;
      page-break-inside: avoid;
    }

    th, td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: left;
      vertical-align: top;
    }

    th {
      background: #f2f2f2;
    }

    hr {
      border: none;
      border-top: 1px solid #ddd;
      margin: 36px 0;
    }

    .cover {
      text-align: center;
      padding-top: 120px;
      padding-bottom: 160px;
      page-break-after: always;
    }

    .cover h1 {
      font-size: 42px;
      margin-bottom: 16px;
    }

    .cover p {
      font-size: 18px;
      color: #555;
    }

    @page {
      size: A4;
      margin: 22mm 18mm;
    }
  </style>
</head>
<body>
  <div class="cover">
    <h1>${title}</h1>
    <p>${subtitle}</p>
    <p>${versionLabel}</p>
  </div>

  ${body}
</body>
</html>
`;
}

async function buildPdf({ inputFile, outputFile, title, subtitle, versionLabel }) {
  const markdown = fs.readFileSync(inputFile, "utf8");
  const html = buildHtml({
    markdown,
    title,
    subtitle,
    versionLabel,
  });
  const htmlFile = getHtmlFile(outputFile);

  fs.writeFileSync(htmlFile, html, "utf8");

  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();

  await page.setContent(html, {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: outputFile,
    format: "A4",
    printBackground: true,
    margin: {
      top: "18mm",
      right: "16mm",
      bottom: "18mm",
      left: "16mm",
    },
  });

  await browser.close();

  console.log("HTML generado:");
  console.log(htmlFile);

  console.log("PDF generado:");
  console.log(outputFile);
}

async function main() {
  if (!fs.existsSync(productoFile)) {
    console.error("No se encontró producto.md");
    process.exit(1);
  }

  await buildPdf({
    inputFile: productoFile,
    outputFile: productoPdfFile,
    title: "ChatGPT para la Oficina",
    subtitle:
      "10 plantillas prácticas para ahorrar tiempo en correos, reuniones, documentos y presentaciones",
    versionLabel: "Versión MVP",
  });

  if (!fs.existsSync(leadMagnetFile)) {
    console.warn("Advertencia: no se encontró lead-magnet.md. Se omitió el PDF gratuito.");
    return;
  }

  await buildPdf({
    inputFile: leadMagnetFile,
    outputFile: leadMagnetPdfFile,
    title: "ChatGPT para la Oficina",
    subtitle: "5 plantillas prácticas para ahorrar tiempo en tareas laborales",
    versionLabel: "Versión gratuita",
  });
}

main().catch((error) => {
  console.error("Error generando PDF:", error);
  process.exit(1);
});
