# HealthVault Backend

This is the backend server for the HealthVault application. It provides API endpoints for the frontend to interact with the database and handles file uploads, authentication, and AI summarization.

## Features

- RESTful API endpoints for user management
- Secure file upload with encryption
- JWT-based authentication
- MongoDB integration for data storage
- Google Gemini AI integration for medical record analysis
- Access control system between patients and doctors

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)

### Installation

1. Clone the repository
2. Navigate to the backend directory: `cd backend`
3. Install dependencies: `npm install`
4. Create a `.env` file with the required environment variables
5. Start the server: `npm run dev`

### Environment Variables

Create a `.env` file in the root of the backend directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
```

## Environment Variables

- `MONGODB_URI`: Connection string for MongoDB database
- `JWT_SECRET`: Secret key for JWT token generation
- `GEMINI_API_KEY`: Google Gemini API key for AI summarization

## API Endpoints

- `POST /api/patients` - Create a new patient
- `GET /api/patients/:id` - Get a specific patient
- `POST /api/doctors` - Create a new doctor
- `GET /api/doctors/:id` - Get a specific doctor
- `POST /api/medical-records` - Upload a medical record
- `GET /api/medical-records` - Get medical records for a patient
- `POST /api/login` - Authenticate user
- And more access control endpoints...

## Deployment

This backend can be deployed to various platforms:

### Heroku
1. Connect your GitHub repository to Heroku
2. Set the environment variables in Heroku dashboard
3. Enable automatic deploys

### Other Platforms
- Render
- Railway
- DigitalOcean App Platform
- AWS, Google Cloud, Azure

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- Bcrypt for password hashing
- Multer for file uploads
- Google Generative AI SDK