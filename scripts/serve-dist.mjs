import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('../dist', import.meta.url)));
const host = '127.0.0.1';
const port = Number(process.env.PORT || 5173);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
};

function resolveFile(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split('?')[0]);
  const relativePath = normalize(cleanPath).replace(/^[/\\]+/, '');
  const target = cleanPath === '/' ? join(root, 'index.html') : join(root, relativePath);
  const absolute = resolve(target);
  if (!absolute.startsWith(root)) return null;
  if (existsSync(absolute) && statSync(absolute).isFile()) return absolute;
  return join(root, 'index.html');
}

function sendFile(req, res, file) {
  const stat = statSync(file);
  const type = types[extname(file).toLowerCase()] || 'application/octet-stream';
  const range = req.headers.range;

  if (range) {
    const [startRaw, endRaw] = range.replace(/bytes=/, '').split('-');
    const start = Number(startRaw);
    const end = endRaw ? Number(endRaw) : stat.size - 1;
    if (Number.isNaN(start) || Number.isNaN(end) || start >= stat.size) {
      res.writeHead(416, { 'Content-Range': `bytes */${stat.size}` });
      res.end();
      return;
    }
    res.writeHead(206, {
      'Accept-Ranges': 'bytes',
      'Content-Length': end - start + 1,
      'Content-Range': `bytes ${start}-${end}/${stat.size}`,
      'Content-Type': type,
    });
    createReadStream(file, { start, end }).pipe(res);
    return;
  }

  res.writeHead(200, {
    'Accept-Ranges': 'bytes',
    'Content-Length': stat.size,
    'Content-Type': type,
  });
  createReadStream(file).pipe(res);
}

const server = createServer((req, res) => {
  const file = resolveFile(req.url || '/');
  if (!file) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  sendFile(req, res, file);
});

server.listen(port, host, () => {
  console.log(`Portfolio preview: http://${host}:${port}/`);
});
