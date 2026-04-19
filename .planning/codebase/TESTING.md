# Testing Strategy

## Current State
- **No Automated Tests**: No unit, integration, or E2E tests were found in the codebase.
- **Manual Verification**: Testing is currently performed manually by running the application and checking features.

## Proposed Strategy
1. **Unit Tests**: Add Vitest for frontend logic (e.g., EMI calculation).
2. **Integration Tests**: Add Supertest for backend API endpoints.
3. **E2E Tests**: Add Playwright or Cypress for critical user flows (e.g., submitting the scholarship form).
