import { readFileSync, writeFileSync, unlinkSync, readdirSync, statSync } from "fs";
import { join } from "path";

const distDir = "./dist";

function walk(dir, callback) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      walk(fullPath, callback);
    } else {
      callback(fullPath, stats);
    }
  }
}

// Remove noModule script tags from all HTML files
let htmlCount = 0;
walk(distDir, (filePath) => {
  if (filePath.endsWith(".html")) {
    let content = readFileSync(filePath, "utf-8");
    const before = content.length;
    // Remove both <script ... noModule=""> and self-closing variants
    content = content.replace(/<script[^>]*\snoModule[^>]*>(?:[^<]*(?:<(?!\/script>)[^<]*)*)?<\/script>/gi, "");
    content = content.replace(/<script[^>]*\snoModule[^>]*\/>/gi, "");
    if (content.length !== before) {
      writeFileSync(filePath, content);
      htmlCount++;
    }
  }
});

if (htmlCount > 0) {
  console.log(`Cleaned noModule scripts from ${htmlCount} HTML files`);
}

// Remove core-js polyfill chunks
let removedCount = 0;
walk(distDir, (filePath) => {
  if (filePath.endsWith(".js")) {
    try {
      const content = readFileSync(filePath, "utf-8");
      if (content.includes('"zloirock"') || content.includes("core-js")) {
        unlinkSync(filePath);
        console.log("Removed legacy polyfill:", filePath);
        removedCount++;
      }
    } catch {
      // ignore
    }
  }
});

if (removedCount === 0) {
  console.log("No legacy polyfills found to remove");
}
