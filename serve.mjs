import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.mp4':  'video/mp4',
  '.webm': 'video/webm',
  '.ico':  'image/x-icon',
  '.woff2':'font/woff2',
};

createServer(async (req, res) => {
  const urlPath = req.url.split('?')[0];
  let fp = join(__dirname, urlPath === '/' ? 'index.html' : urlPath);
  if (!extname(fp)) fp += '.html';

  try {
    const data = await readFile(fp);
    res.writeHead(200, { 'Content-Type': mime[extname(fp).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}).listen(PORT, () => {
  console.log(`\n  Forty-One Studio\n  http://localhost:${PORT}\n`);
});
