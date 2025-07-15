# United Iron Works - Website

A modern, responsive website for United Iron Works - precision welding and fabrication services.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with excellent UX across all devices
- **Performance Optimized**: Fast loading with optimized images and efficient code
- **SEO Ready**: Comprehensive meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Security**: Security headers, CSP, and input validation
- **Modern Technologies**: HTML5, CSS3, Tailwind CSS, Vanilla JavaScript

## 📋 Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS v4
- **Icons**: Font Awesome 6.5.1
- **Fonts**: Google Fonts (Inter, Source Serif 4, JetBrains Mono)
- **Server**: Node.js (for development)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Quick Start
```bash
# Clone the repository
git clone https://github.com/unitedironworks/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Alternative Serving Methods
```bash
# Using Python (if you have Python installed)
npm run serve

# Using live-server with auto-reload
npm run live
```

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── index.css              # Custom CSS styles
├── server.js              # Development server
├── package.json           # Node.js configuration
├── site.webmanifest      # PWA manifest
├── robots.txt            # Search engine directives
├── sitemap.xml           # Site structure for SEO
├── .htaccess             # Apache server configuration
└── README.md             # This file
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run start` - Start production server
- `npm run build` - Validate and prepare for production
- `npm run validate` - Run all validation checks
- `npm run test` - Run tests
- `npm run deploy` - Build and prepare for deployment

### Making Changes

1. **HTML**: Edit `index.html` for content changes
2. **Styles**: Modify `index.css` for custom styling
3. **Scripts**: JavaScript is embedded in `index.html`
4. **Images**: Use optimized images and proper alt text

### Performance Guidelines

- Optimize images before adding them
- Use appropriate image formats (WebP, PNG, JPG)
- Test on multiple devices and browsers
- Validate HTML, CSS, and accessibility

## 🚀 Deployment

### Static Hosting (Recommended)
The website is designed to work with any static hosting provider:

- **Netlify**: Deploy directly from Git repository
- **Vercel**: Automatic deployments with Git integration
- **GitHub Pages**: Host directly from GitHub repository
- **AWS S3**: Static website hosting
- **Cloudflare Pages**: Fast global deployment

### Server Deployment
If using the Node.js server:

```bash
# Set environment variables
export NODE_ENV=production
export PORT=80
export HOST=0.0.0.0

# Start the server
npm start
```

### Apache/Nginx Configuration
Use the `.htaccess` file for Apache or configure similar rules for Nginx.

## 🔒 Security Features

- Content Security Policy (CSP)
- XSS Protection headers
- MIME type sniffing prevention
- Referrer policy configuration
- Directory traversal protection
- Input validation and sanitization

## 🔐 Security

### Security Headers
The server implements comprehensive security headers:
- Content Security Policy (CSP)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection
- Referrer Policy

### Recent Security Updates
- ✅ **Fixed deprecation warning**: Replaced `url.parse()` with WHATWG URL API
- ✅ **Enhanced path validation**: Multiple layers of directory traversal protection
- ✅ **Null byte protection**: Prevents injection attempts
- ✅ **Malformed URL handling**: Graceful error responses with logging

## ♿ Accessibility

The website follows WCAG 2.1 AA guidelines:

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus indicators

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization

### Colors
Modify CSS custom properties in `index.css`:
```css
:root {
  --primary: oklch(0.6231 0.1880 259.8145);
  --background: oklch(1.0000 0 0);
  /* ... other colors */
}
```

### Typography
Update font families in the CSS variables or Tailwind configuration.

### Content
Edit `index.html` to update:
- Company information
- Services and projects
- Contact details
- Images and descriptions

## 📊 Performance Metrics

Target performance metrics:
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 📈 Analytics & Monitoring

Consider adding:
- Google Analytics for user insights
- Google Search Console for SEO monitoring
- Uptime monitoring for availability
- Performance monitoring tools

---

**United Iron Works** - Forging wonders together with precision, safety, and craftsmanship.
