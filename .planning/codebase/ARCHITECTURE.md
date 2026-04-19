# Architecture

## High-Level Design
The project follows a decoupled Frontend-Backend architecture.

- **Frontend**: A single-page application (SPA) style landing page built with static assets. It communicates with the backend via RESTful API calls (Fetch API).
- **Backend**: A minimal Express.js server acting as a middleman for form submissions and potentially other services.

## Data Flow
1. **User Interaction**: User fills out the scholarship form on the landing page.
2. **Client Validation**: Basic HTML5 validation ensures fields are filled.
3. **API Request**: `main.js` sends a POST request to `http://localhost:5000/api/scholarship-apply`.
4. **Server Processing**: `backend/server.js` receives the data and (presumably) processes or stores it.
5. **Feedback**: Server responds with JSON, which the frontend displays to the user via an alert.

## Components
- **Navigation**: Sticky header with mobile menu toggle.
- **Hero**: Dynamic section with statistics and primary CTA.
- **Forms**: Scholarship application form.
- **Tools**: EMI Calculator for financial planning.
- **Content**: Features, Partners, Prep Classes, and Journey sections.
