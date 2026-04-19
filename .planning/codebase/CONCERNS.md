# Technical Concerns and Risks

## Technical Debt
- **Vanilla Overload**: As the application grows, managing state and components with vanilla JS/CSS might become complex. Transitioning to a framework (React, Vue, Svelte) might be beneficial in the long run.
- **Inline Styles**: Some styles are being injected via JS (intersection observer). This should ideally be moved to CSS classes.
- **Hardcoded URLs**: API URLs are hardcoded as `localhost:5000`. These should be environment-controlled.

## Security Risks
- **Form Submission**: Backend validation needs to be robust to prevent malicious data entry.
- **CORS**: Ensure CORS settings in production are restricted to the frontend domain.

## Performance
- **Image Sizes**: Many large assets (`.webp`, `.png`) are used. Ensure they are optimized for web performance.
- **Blocking JS**: Ensure JS doesn't block the main thread for too long during animations.

## Maintainability
- **Lack of Documentation**: Besides this GSD map, there is limited internal documentation.
- **Monolith logic**: `main.js` is becoming a "kitchen sink" for all frontend logic. Consider splitting it into modules.
