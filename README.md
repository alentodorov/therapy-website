# Therapy Website

A minimal, responsive website for a psychotherapist and transformational coach. The website is designed to be easily maintainable and deployable to Cloudflare Pages.

## Structure

- `index.html` - Main content of the website
- `styles.css` - All styling rules
- `alena-todorov-life-coach-london.jpg` - Profile image

## Maintenance

To update the website content, simply edit the `index.html` file. The structure is organized into clear sections:
- Header with profile
- Introduction
- Approach
- Contact section
- About section with qualifications and associations

To modify the styling, edit the `styles.css` file. The CSS uses CSS variables for easy color scheme updates:
```css
:root {
    --primary-color: #4285f4;
    --text-color: #333;
    --background-color: #fff;
}
```

## Deployment to Cloudflare Pages

1. Create a GitHub repository and push these files to it
2. Log in to your Cloudflare dashboard
3. Go to Pages > Create a project
4. Connect your GitHub repository
5. Configure the build settings:
   - Build command: Leave empty (no build required)
   - Build output directory: Leave empty (files are in root)
6. Deploy!

## Adding Images

1. The profile photo is named `alena-todorov-life-coach-london.jpg` in the root directory
2. Make sure any replacement image is optimized for web (recommended size: 300x300px)

## Requirements

- No build tools or dependencies required
- Pure HTML and CSS
- Compatible with all modern browsers
