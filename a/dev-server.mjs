import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const port = Number.parseInt(process.env.PORT || '4180', 10);
const host = process.env.HOST || '127.0.0.1';
const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.webp': 'image/webp'
};

function resolveRequestPath(requestUrl) {
  const pathname = decodeURIComponent(new URL(requestUrl, `http://${host}:${port}`).pathname);
  const relativePath = pathname === '/' ? 'index.html' : normalize(pathname).replace(/^[/\\]+/, '');
  const filePath = join(root, relativePath);
  return filePath.startsWith(root) ? filePath : null;
}

const server = createServer(async (request, response) => {
  const filePath = resolveRequestPath(request.url || '/');

  try {
    if (!filePath || !(await stat(filePath)).isFile()) throw new Error('Not found');
    response.writeHead(200, {
      'Cache-Control': 'no-store',
      'Content-Type': contentTypes[extname(filePath).toLowerCase()] || 'application/octet-stream'
    });
    if (request.method === 'HEAD') return response.end();
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
  }
});

server.listen(port, host, () => {
  console.log(`DALI showcase running at http://${host}:${port}/`);
});
