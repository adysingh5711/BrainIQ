# BrainIQ

## Overview

BrainIQ is an innovative educational platform designed to provide users with a seamless learning experience. Our goal is to make quality education and proper information accessible to everyone. The platform offers a variety of features, including course management, mentorship, and interactive learning tools.

## Features

- **User Authentication**: Secure login and registration for users, including JWT-based authentication.
- **Course Management**: Users can browse, enroll, and manage their courses.
- **Mentorship Program**: Connect with mentors for personalized guidance and support.
- **Interactive Learning**: Engage with various learning materials, including videos, quizzes, and assignments.
- **Real-time Chatbot**: Ask questions and receive instant replies from our virtual mentor chatbot.
- **Multi-language Support**: The platform supports multiple languages, enhancing accessibility for users worldwide.
- **Responsive Design**: Fully responsive web application that works seamlessly on both desktop and mobile devices.
- **Dashboard**: A user-friendly dashboard for easy navigation and access to all features.
- **Newsfeed**: Stay updated with the latest opportunities, scholarships, and announcements.
- **Leaderboards**: Track top performers and encourage healthy competition among users.

## Tech Stack

- **Frontend**: 
  - React
  - Vite
  - Material-UI
  - Tailwind CSS
  - React Router
  - Axios
  - React Query
  - i18next for internationalization

- **Backend**: 
  - Node.js
  - Express
  - Prisma ORM
  - MongoDB
  - OpenAI API for chatbot functionality
  - JWT for authentication

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- OpenAI API key (for chatbot functionality)

### Clone the Repository

```bash
git clone https://github.com/yourusername/brainiq.git
cd brainiq
```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend`
   ```bash
   VITE_API_URL=http://localhost:5000/v1/
   ```
4. Start the development server:
   ```bash
npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
    cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add your environment variables:
   ```bash
    DATABASE_URL=mongodb://localhost:27017/yourdbname
    USER_ACCESS_SECRET=your_jwt_secret
    OPENAI_API_KEY=your_openai_api_key
   ```
4. Run the database migrations (if using Prisma):
   ```bash
   npx prisma migrate dev
   ```
5. Start the backend server:
   ```bash
   npm run dev
   ```

## Usage

- Access the application at `http://localhost:3000` for the frontend.
- The backend API will be available at `http://localhost:5000/v1/`.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

<!-- ## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the contributors and the open-source community for their support.
- Special thanks to OpenAI for providing the API for the chatbot functionality.

## Contact

For any inquiries, please reach out to [your-email@example.com](mailto:your-email@example.com). -->
