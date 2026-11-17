# Nova Responsive Dashboard — Task 04

A mobile-first analytics dashboard created to demonstrate **Responsive Design Tokens & Mobile-First CSS Architecture**.

## Included requirements

- CSS custom properties in `:root` for brand colors, typography, spacing, radii, shadows and layout.
- Responsive dashboard layout using CSS Grid and Flexbox.
- Breakpoints at 320px (base), 768px, 1024px and 1440px.
- Glass-style surfaces, subtle shadows, hover transitions and theme variables.
- Working light/dark theme toggle.
- Mobile navigation menu.
- Responsive table with its own overflow handling.
- Accessible labels, focus-visible states, semantic HTML5 elements and reduced-motion support.
- No page-level horizontal overflow at mobile widths.

## Run locally

1. Download and extract the ZIP.
2. Open `index.html` in a browser.
3. Resize the browser or use Developer Tools → Device Toolbar to test 320px, 768px, 1024px and 1440px.
4. Test the theme button and mobile menu.

No framework or installation is required.

## Suggested GitHub submission

Create a public repository named `responsive-dashboard-task04` and upload:
- `index.html`
- `style.css`
- `script.js`
- `README.md`

Enable GitHub Pages from **Settings → Pages → Deploy from a branch → main → / (root)**.

## Responsive proof screenshots

Capture screenshots at these viewport widths:
- 320 × 800 (small mobile)
- 768 × 1024 (tablet)
- 1024 × 768 (laptop)
- 1440 × 900 (desktop)

Save them in a folder named `screenshots/` and upload that folder to the same repository. Make sure the screenshot shows the whole dashboard at each width. On mobile, check that the page itself does not scroll sideways; the projects table may scroll inside its own table container.

## Customize

Change the colors and spacing in the `:root` block at the top of `style.css`. The dark theme values are in `[data-theme="dark"]`.
