# Coding Conventions

## General
- **Naming**: camelCase for variables/functions, kebab-case for CSS classes.
- **HTML**: Semantic tags where possible (`<header>`, `<main>`, `<section>`, `<footer>`).
- **CSS**: Vanilla CSS using Flexbox and CSS Grid for layout. Variables (if any) are not widely used yet but could be implemented.

## JavaScript
- **Event Listeners**: Attached after `DOMContentLoaded`.
- **API Calls**: Uses `async/await` with `fetch`.
- **DOM Manipulation**: Direct manipulation via `document.querySelector` and `classList`.

## CSS
- **Layout**: Uses `.container` for centered content with max-width.
- **BEM-ish**: Classes like `.btn-primary`, `.btn-xl` indicate a utility-first or component-based approach within vanilla CSS.
- **Responsiveness**: Media queries used for mobile-first or desktop-down adjustments (needs verification on specific strategy).
