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

### Backend (to Heroku/Render/Railway)
1. The backend needs to be deployed separately to a service that supports Node.js applications
2. Set the environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Secret for JWT token generation
   - `GEMINI_API_KEY`: Google Gemini API key for AI summarization

## Environment Variables

### Frontend (workspace/shadcn-ui/.env)
- `VITE_API_BASE_URL`: URL of the backend API

### Backend (backend/.env)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: JWT secret key
- `GEMINI_API_KEY`: Google Gemini API key

## Technologies Used

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Security**: AES-GCM encryption, JWT authentication
- **AI**: Google Gemini for medical record analysis
- **File Processing**: PDF extraction and encryption