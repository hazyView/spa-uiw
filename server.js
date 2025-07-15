const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// MIME types for different file extensions
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8'
};

// Security headers
const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: https://images.unsplash.com; connect-src 'self'"
};

// Cache control headers
const getCacheHeaders = (filePath) => {
  const ext = path.extname(filePath);
  const isStatic = ['.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp', '.woff', '.woff2', '.ttf', '.otf'].includes(ext);
  
  if (isStatic) {
    return {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'ETag': `"${Date.now()}"` // Simple ETag implementation
    };
  }
  
  return {
    'Cache-Control': 'no-cache, must-revalidate'
  };
};

const server = http.createServer((req, res) => {
  try {
    // Use WHATWG URL API instead of deprecated url.parse()
    let requestUrl;
    try {
      requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    } catch (urlError) {
      console.warn(`Malformed URL received: ${req.url}`);
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('400 Bad Request - Malformed URL');
      return;
    }
    
    let filePath = '.' + requestUrl.pathname;
    
    // Additional security: Normalize path to prevent bypasses
    filePath = path.normalize(filePath);
    
    // Security: Prevent directory traversal (multiple checks for security)
    if (filePath.includes('..') || !filePath.startsWith('./')) {
      console.warn(`Blocked potential directory traversal attempt: ${req.url}`);
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('403 Forbidden');
      return;
    }
    
    // Security: Validate pathname doesn't contain null bytes or other suspicious characters
    if (requestUrl.pathname.includes('\0') || requestUrl.pathname.includes('%00')) {
      console.warn(`Blocked suspicious request with null bytes: ${req.url}`);
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('400 Bad Request');
      return;
    }
    
    // Default to index.html for root requests
    if (filePath === './') {
      filePath = './index.html';
    }
    
    // Get file extension and MIME type
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeType = mimeTypes[extname] || 'application/octet-stream';
    
    // Set security headers
    Object.keys(securityHeaders).forEach(header => {
      res.setHeader(header, securityHeaders[header]);
    });
    
    // Set cache headers
    const cacheHeaders = getCacheHeaders(filePath);
    Object.keys(cacheHeaders).forEach(header => {
      res.setHeader(header, cacheHeaders[header]);
    });
    
    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        // File not found - serve index.html for SPA routing
        fs.readFile('./index.html', (indexErr, indexContent) => {
          if (indexErr) {
            console.error('Error reading index.html:', indexErr);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Internal Server Error');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(indexContent);
          }
        });
      } else {
        // File exists - serve it
        fs.readFile(filePath, (readErr, content) => {
          if (readErr) {
            console.error('Error reading file:', readErr);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Internal Server Error');
          } else {
            res.writeHead(200, { 'Content-Type': mimeType });
            res.end(content);
          }
        });
      }
    });
    
  } catch (error) {
    console.error('Server error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('500 Internal Server Error');
  }
});

// Graceful shutdown handling
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

// Error handling
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
    process.exit(1);
  } else {
    console.error('Server error:', error);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`🚀 United Iron Works server running at http://${HOST}:${PORT}/`);
  console.log(`📁 Serving files from: ${path.resolve('.')}`);
  console.log(`🔒 Security headers enabled`);
  console.log(`⚡ Cache optimization enabled`);
  console.log('\nPress Ctrl+C to stop the server');
});
