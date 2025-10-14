# HealthVault - Healthcare Management System

HealthVault is a comprehensive healthcare management application that allows patients to store, manage, and share their medical records securely.

## Features

- **Patient Management**: Register and manage patient profiles
- **Medical Records Management**: Securely upload and store medical documents
- **Advanced Encryption**: End-to-end encryption using AES-GCM algorithm
- **Access Control**: Granular control over who can access medical records
- **AI-Powered Insights**: Google Gemini integration for medical record analysis
- **Premium Plan Features**: Appointments scheduling and doctor search functionality
- **Geolocation**: Find doctors near your location

## Architecture

The application consists of:
- **Frontend**: React application built with TypeScript, Vite, and shadcn/ui components
- **Backend**: Node.js/Express server with MongoDB database
- **Security**: JWT authentication, bcrypt password hashing, and file encryption

## Deployment

### Frontend (to Vercel)
1. The frontend can be deployed to Vercel
2. Set the environment variable `VITE_API_BASE_URL` to point to your deployed backend API
3. Example: `VITE_API_BASE_URL=https://your-backend-deployment-url.com/api`

### Backend (to Heroku)
#### Manual Deployment:
1. Make sure you have the Heroku CLI installed
2. Navigate to the `backend` directory
3. Login to Heroku: `heroku login`
4. Create a new Heroku app: `heroku create your-app-name`
5. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_connection_string
   heroku config:set JWT_SECRET=your_jwt_secret
   heroku config:set GEMINI_API_KEY=your_gemini_api_key
   ```
6. Deploy: `git push heroku main` or `git push heroku v2.0:main`

#### Automatic Deployment via GitHub:
1. Connect your GitHub repository to Heroku
2. Go to your Heroku dashboard
3. Create a new app
4. Under the "Deploy" tab, connect to GitHub
5. Search for your repository (`namansaini2709/HEALTH-VAULTT`)
6. Enable automatic deploys for the `v2.0` branch
7. Go to the "Settings" tab and add the following Config Vars:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Secret for JWT token generation
   - `GEMINI_API_KEY`: Google Gemini API key for AI summarization
8. Click "Deploy Branch"

### Backend (Alternative Platforms)
#### Render:
1. Create account at Render.com
2. Create a new "Web Service"
3. Connect to your GitHub repository
4. Set the environment variables in Render dashboard
5. Use the `backend` directory as the root

#### Railway:
1. Create account at Railway.app
2. Create a new project from GitHub
3. Set environment variables in the dashboard
4. Deploy service

## Environment Variables

### Frontend (workspace/shadcn-ui/.env)
- `VITE_API_BASE_URL`: URL of the backend API

### Backend (backend/.env)
- `MONGODB_URI`: MongoDB connection string (e.g., from MongoDB Atlas)
- `JWT_SECRET`: JWT secret key (use a strong random string)
- `GEMINI_API_KEY`: Google Gemini API key for AI summarization

## Technologies Used

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Security**: AES-GCM encryption, JWT authentication
- **AI**: Google Gemini for medical record analysis
- **File Processing**: PDF extraction and encryption