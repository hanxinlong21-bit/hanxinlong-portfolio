import { readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else if (/\.(mp4|webm|mov)$/i.test(entry.name)) {
      await rm(fullPath, { force: true });
      console.log(`removed ${fullPath}`);
    }
  }
}

await walk('dist');
