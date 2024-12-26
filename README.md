# Country Info API

## Setup Instructions

1. Clone the repository.
2. Navigate to the backend directory.
3. Create a `.env` file and add the following:
    - DATE_NAGER_API=https://date.nager.at/api/v3 
    - COUNTRIES_NOW_API=https://countriesnow.space/api/v0.1
4. Run `npm install` to install dependencies.
5. Start the server by running `node server.js`.
6. API Endpoints:
    - GET /api/countries/available: Get a list of available countries.
    - GET /api/countries/info/:countryCode: Get detailed information about a specific country.

# Country Info Frontend

## Setup Instructions

1. Navigate to the frontend directory.
2. Create a `.env.local` file and add the following:
3. Install dependencies by running `npm install`.
4. Start the development server by running `npm run dev`.
