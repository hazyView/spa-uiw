# Production Deployment Checklist

## Pre-Deployment Checklist

### Content & SEO
- [ ] All content is finalized and proofread
- [ ] Company contact information is correct
- [ ] Meta descriptions are compelling and under 160 characters
- [ ] All images have proper alt text
- [ ] Page titles are optimized for SEO
- [ ] Structured data is implemented correctly

### Performance
- [ ] Images are optimized (WebP format where possible)
- [ ] Image dimensions are appropriate
- [ ] No console errors in browser
- [ ] Page load time is under 3 seconds
- [ ] Mobile performance is optimized
- [ ] Critical CSS is inlined (if applicable)

### Accessibility
- [ ] Color contrast meets WCAG AA standards
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] Screen reader testing completed
- [ ] Alt text is descriptive and meaningful
- [ ] Heading structure is logical (h1 → h2 → h3)

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Security
- [ ] Security headers are configured
- [ ] Content Security Policy is set
- [ ] No sensitive information in client-side code
- [ ] Form validation is server-side as well
- [ ] HTTPS is enforced

### Forms & Functionality
- [ ] Contact form submits correctly
- [ ] Form validation works properly
- [ ] Error messages are user-friendly
- [ ] Success messages are clear
- [ ] Mobile menu functions properly
- [ ] Smooth scrolling works on all sections

### Technical
- [ ] robots.txt is configured
- [ ] sitemap.xml is generated and accurate
- [ ] Favicon is present and displays correctly
- [ ] 404 page is custom (if needed)
- [ ] Analytics tracking is set up
- [ ] Domain is configured properly

## Post-Deployment Checklist

### Monitoring & Analytics
- [ ] Google Analytics is tracking
- [ ] Google Search Console is set up
- [ ] Uptime monitoring is configured
- [ ] Error tracking is set up

### SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google My Business (if applicable)
- [ ] Check Google PageSpeed Insights
- [ ] Verify structured data with Google's tool

### Final Verification
- [ ] All links work correctly
- [ ] Contact information is clickable
- [ ] Phone numbers are clickable on mobile
- [ ] Email addresses are clickable
- [ ] Social media links work (if applicable)
- [ ] SSL certificate is valid and auto-renewing

### Documentation
- [ ] Deployment documentation is updated
- [ ] Access credentials are documented securely
- [ ] Backup procedures are documented
- [ ] Update procedures are documented

## Environment-Specific Tasks

### Production Server
- [ ] Environment variables are set
- [ ] SSL certificate is installed
- [ ] CDN is configured (if using)
- [ ] Database backups are scheduled (if applicable)
- [ ] Log monitoring is set up

### Static Hosting (Netlify/Vercel/etc.)
- [ ] Build process is configured
- [ ] Domain is connected
- [ ] SSL is enabled
- [ ] Redirects are configured
- [ ] Headers are set correctly

## Performance Targets
- [ ] First Contentful Paint: < 1.5s
- [ ] Largest Contentful Paint: < 2.5s
- [ ] Time to Interactive: < 3.5s
- [ ] Cumulative Layout Shift: < 0.1
- [ ] Mobile PageSpeed score: > 90
- [ ] Desktop PageSpeed score: > 95

## Accessibility Targets
- [ ] WCAG 2.1 AA compliance
- [ ] Screen reader compatibility
- [ ] Keyboard navigation support
- [ ] Color contrast ratio: 4.5:1 minimum

---

**Notes:**
- Test on real devices, not just browser dev tools
- Use incognito/private browsing for fresh cache testing
- Validate HTML, CSS, and JavaScript
- Check all external links and dependencies
