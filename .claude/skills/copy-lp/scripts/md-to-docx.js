// Converte um .md simples (headings #/##, **bold**, *italic*, listas "- ", "---") em .docx.
// Uso: node md-to-docx.js <entrada.md> <saida.docx>
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

const [, , inputPath, outputPath] = process.argv;
if (!inputPath || !outputPath) {
  console.error('Uso: node md-to-docx.js <entrada.md> <saida.docx>');
  process.exit(1);
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Quebra uma linha em runs {t, b, i} respeitando **bold** e *italic*
function parseInline(line) {
  const runs = [];
  let rest = line;
  const re = /(\*\*(.+?)\*\*|\*(.+?)\*)/;
  while (rest.length) {
    const m = rest.match(re);
    if (!m) {
      runs.push({ t: rest });
      break;
    }
    if (m.index > 0) runs.push({ t: rest.slice(0, m.index) });
    if (m[2] !== undefined) runs.push({ t: m[2], b: true });
    else if (m[3] !== undefined) runs.push({ t: m[3], i: true });
    rest = rest.slice(m.index + m[0].length);
  }
  return runs.length ? runs : [{ t: '' }];
}

function run(r) {
  const sz = r.sz || 22;
  const props = [];
  if (r.b) props.push('<w:b/>');
  if (r.i) props.push('<w:i/>');
  props.push(`<w:sz w:val="${sz}"/>`, `<w:szCs w:val="${sz}"/>`);
  return `<w:r><w:rPr>${props.join('')}</w:rPr><w:t xml:space="preserve">${esc(r.t)}</w:t></w:r>`;
}

function para(runsArr, opts = {}) {
  const spacing = `<w:spacing w:before="${opts.before || 0}" w:after="${opts.after !== undefined ? opts.after : 120}"/>`;
  return `<w:p><w:pPr>${spacing}</w:pPr>${runsArr.map(run).join('')}</w:p>`;
}

function rule() {
  return `<w:p><w:pPr><w:pBdr><w:bottom w:val="single" w:sz="6" w:space="1" w:color="999999"/></w:pBdr><w:spacing w:before="200" w:after="200"/></w:pPr></w:p>`;
}

const md = fs.readFileSync(inputPath, 'utf8');
const lines = md.split(/\r?\n/);
const paras = [];
let sawTitle = false;

for (const raw of lines) {
  const line = raw.trimEnd();
  if (line.trim() === '') continue;
  if (line.trim() === '---') {
    paras.push(rule());
    continue;
  }
  const h1 = line.match(/^#\s+(.*)/);
  const h2 = line.match(/^##\s+(.*)/);
  const bullet = line.match(/^[-*]\s+(.*)/);

  if (h1) {
    const runs = parseInline(h1[1]).map((r) => ({ ...r, b: true, sz: 36 }));
    paras.push(para(runs, { before: sawTitle ? 360 : 0, after: 160 }));
    sawTitle = true;
  } else if (h2) {
    const runs = parseInline(h2[1]).map((r) => ({ ...r, b: true, sz: 28 }));
    paras.push(para(runs, { before: 360, after: 160 }));
  } else if (bullet) {
    const runs = parseInline(bullet[1]);
    paras.push(para([{ t: '• ' }, ...runs], { after: 80 }));
  } else {
    paras.push(para(parseInline(line), { after: 120 }));
  }
}

const doc = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:body>
${paras.join('\n')}
<w:sectPr>
<w:pgSz w:w="11906" w:h="16838"/>
<w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="0" w:footer="0" w:gutter="0"/>
</w:sectPr>
</w:body>
</w:document>`;

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'md2docx-'));
fs.mkdirSync(path.join(tmpDir, 'docProps'));
fs.mkdirSync(path.join(tmpDir, '_rels'));
fs.mkdirSync(path.join(tmpDir, 'word'));

fs.writeFileSync(path.join(tmpDir, '[Content_Types].xml'), `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
<Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>`);

fs.writeFileSync(path.join(tmpDir, '_rels', '.rels'), `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>`);

const now = new Date().toISOString();
fs.writeFileSync(path.join(tmpDir, 'docProps', 'core.xml'), `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<dc:title>${esc(path.basename(inputPath, '.md'))}</dc:title>
<dc:creator>AgencyOS</dc:creator>
<cp:lastModifiedBy>AgencyOS</cp:lastModifiedBy>
<dcterms:created xsi:type="dcterms:W3CDTF">${now}</dcterms:created>
<dcterms:modified xsi:type="dcterms:W3CDTF">${now}</dcterms:modified>
</cp:coreProperties>`);

fs.writeFileSync(path.join(tmpDir, 'docProps', 'app.xml'), `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties">
<Application>AgencyOS</Application>
</Properties>`);

fs.writeFileSync(path.join(tmpDir, 'word', 'document.xml'), doc, 'utf8');

// Zip com entradas usando "/" (obrigatório pro padrão OPC/docx) via PowerShell + .NET ZipArchive.
const absOut = path.resolve(outputPath);
if (fs.existsSync(absOut)) fs.unlinkSync(absOut);

const psScript = `
Add-Type -AssemblyName System.IO.Compression
$fs = [System.IO.File]::Open('${absOut.replace(/\\/g, '\\\\')}', [System.IO.FileMode]::CreateNew)
$archive = New-Object System.IO.Compression.ZipArchive($fs, [System.IO.Compression.ZipArchiveMode]::Create)
$map = @{
  '[Content_Types].xml' = '${path.join(tmpDir, '[Content_Types].xml').replace(/\\/g, '\\\\')}'
  '_rels/.rels' = '${path.join(tmpDir, '_rels', '.rels').replace(/\\/g, '\\\\')}'
  'docProps/core.xml' = '${path.join(tmpDir, 'docProps', 'core.xml').replace(/\\/g, '\\\\')}'
  'docProps/app.xml' = '${path.join(tmpDir, 'docProps', 'app.xml').replace(/\\/g, '\\\\')}'
  'word/document.xml' = '${path.join(tmpDir, 'word', 'document.xml').replace(/\\/g, '\\\\')}'
}
foreach ($key in $map.Keys) {
  $entry = $archive.CreateEntry($key, [System.IO.Compression.CompressionLevel]::Optimal)
  $stream = $entry.Open()
  $bytes = [System.IO.File]::ReadAllBytes($map[$key])
  $stream.Write($bytes, 0, $bytes.Length)
  $stream.Close()
}
$archive.Dispose()
$fs.Dispose()
`;

const psPath = path.join(tmpDir, 'zip.ps1');
fs.writeFileSync(psPath, psScript, 'utf8');
execSync(`powershell -NoProfile -NonInteractive -ExecutionPolicy Bypass -File "${psPath}"`, { stdio: 'inherit' });

fs.rmSync(tmpDir, { recursive: true, force: true });
console.log('docx gerado em', absOut);
