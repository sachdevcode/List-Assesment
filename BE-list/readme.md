*Backend List API Project:
This project is a backend API built with Node.js (v20) for handling basic data operations using GET and POST endpoints. The API leverages MongoDB as its database and requires a .env.local file for secure configuration management.

*Prerequisites:
Node.js v20: This project is compatible only with Node.js version 20 or higher. Lower versions may fail to detect environment variables due to the native Node.js method used.
MongoDB: A MongoDB connection is required. Obtain a MongoDB URI and specify it in the environment file.

*Getting Started:
1. Clone the Repository
Clone the project to your local machine:
git clone <your-repository-url>
cd BE-LIST

2. Configure Environment Variables
Create a .env.local file in the project root directory with the following variables:
CONNECTION_STRING=<your-mongodb-connection-string>
PORT=<your-port-number>
CONNECTION_STRING: Your MongoDB URI connection string.
PORT: The port on which the server will run (default: 3000 if unspecified).

3. Install Dependencies
Install all required packages:
npm install

4. Start the Server
Run the server with the following command:
npm run dev
The server will start on the port specified in the .env.local file.

*API Documentation:
-POST /api/list
 Description: Adds a new entry to the database.

-GET /api/list
 Description: Retrieves entries from the database.
 Response: JSON array containing data objects.

*Project Structure
     src/
        ├── controller/       # Contains controller logic for handling requests and responses
        ├── db/               # Database connection setup (contains database.js)
        ├── models/           # Mongoose schema definitions for MongoDB
        ├── routes/           # Route definitions and API endpoints
        ├── utils/            # Utility functions for helper methods and reusable code
        ├── helper/           # Contains helper functions (constants.js and response.js)
        └── server.js         # Main entry point of the application, sets up the server

Additional Notes
Ensure you’re using Node.js v20 to avoid compatibility issues with environment variable management.