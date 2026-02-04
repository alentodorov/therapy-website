# Therapy Website

A minimal, responsive website for a psychotherapist and transformational coach. The website is designed to be easily maintainable and automatically published through GitHub.

## How to Make Changes

1. Go to your GitHub repository at https://github.com/alentodorov/therapy-website
2. Click on the `index.html` file
3. Click the pencil icon (Edit this file) in the top-right corner
4. Make your desired changes to the content
5. At the bottom of the page, add a short description of your changes (e.g., "Updated contact information")
6. Click the green "Commit changes" button
7. Your changes will be automatically published to the live website within a few minutes

⚠️ IMPORTANT: Always commit directly to the "main" branch! Think of it like this:
- The website is like a book that everyone can read
- The "main" branch is like the official copy of that book
- Creating a new branch is like making a private draft that nobody else can see
- When you make changes in a new branch, it's like writing in your private draft - the real book (the website) won't update until you merge that draft back

So, when updating the website:
- DON'T create a new branch (don't make a private draft)
- DO commit directly to "main" (write directly in the official copy)
- This way, your changes will go live immediately!

## What You Can Edit

The website content is organized into clear sections in the `index.html` file:
- Header with your profile information
- Introduction and background
- Your approach to therapy
- Contact section
- About section with your qualifications and associations

Common updates you might want to make:
- Update text content
- Add/modify qualifications
- Update professional associations
- Change contact information
- Modify the consultation booking link

## Spacing Elements

The website uses Tachyons CSS utility classes for quick spacing adjustments. You can add these classes to any element to add margin or padding:

Margin classes (space around elements):
- `mb1` = small margin bottom (0.25rem)
- `mb2` = medium margin bottom (0.5rem)
- `mb3` = large margin bottom (1rem)
- `mb4` = extra large margin bottom (2rem)

You can also use:
- `mt1` to `mt4` for margin top
- `ml1` to `ml4` for margin left
- `mr1` to `mr4` for margin right

Example from the "My approach" section:
```html
<p class="mb3">I combine Transactional Analysis and Transformational Coaching...</p>
```
This adds a nice space (1rem) below the paragraph.

## Important Notes

- Don't modify `src/styles.css` unless you're familiar with CSS
- Keep the file structure as is
- Make sure to always push your changes to GitHub for them to go live
- The website will automatically update within a few minutes after pushing

## Need Help?

If you need assistance with making changes or encounter any issues, please contact your web developer, and brother Alen Todorov.

## File Structure

- `src/index.njk` - Main content (this is the file you'll edit most often)
- `src/styles.css` - Styling (avoid editing unless necessary)
- `src/assets/alena-todorov-life-coach-london.jpg` - Profile image
- `_site/` - Build output (generated)
