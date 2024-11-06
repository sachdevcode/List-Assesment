# FE List Project

This is a Frontend List project built using **Vite + React + SWC**. It follows a modular structure with reusable components, API handling, custom hooks, and validation functions.

## Project Structure

src/
├── api/                  # API calling functions
├── components/           # Reusable components
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── ErrorMessage.tsx
│   ├── List.tsx
│   └── Loader.tsx
├── hook/                 # Custom hooks
│   ├── useNameForm.ts    # Handles validation, data fetching, and all form logic
├── styles/               # CSS files for components
├── types/                # Type definitions
│   ├── profile.ts        # Profile types
│   └── common.ts         # Common types
├── utils/                # Utility functions and constants
│   ├── constants/        # Constants (BE endpoints and base URL)
│   ├── validator/        # Validation functions (e.g., name validation)
Getting Started
Prerequisites
Node.js version 20.10.0 or higher.
Installation
Clone the repository.

Navigate to the project directory.

Install dependencies:

npm install
Running the Development Server
To start the development server, run:

npm run dev
The app should now be accessible at http://localhost:5173.

Important Configuration Notes
Frontend URL for CORS:

If the frontend URL changes, make sure to update http://localhost:5173 in the backend's CORS_ALLOW_ORIGIN_URL constant to avoid CORS issues.
Backend Port Configuration:

If the backend port changes, update the base URL in the frontend constants file under the utils/ folder to reflect the correct backend port.
Features
Reusable Components: The project has reusable components such as Button, Input, ErrorMessage, List, and Loader.
API Integration: API calling functions are centralized in the api folder.
Custom Hooks: Includes a custom hook useNameForm.ts that handles data validation, fetching, and all form-related logic.
Utilities: Contains constants for backend endpoints and base URLs in utils/constants, as well as validation functions in utils/validator.
Directory Overview
api/: Houses API call functions.
components/: Contains reusable components for the UI.
hook/: Contains custom hooks.
styles/: Contains CSS files for components.
types/: Defines TypeScript types.
utils/: Stores utility constants and functions.