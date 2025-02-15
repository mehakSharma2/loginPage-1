# Login and Signup Page

This project is a **MERN stack** application that includes a **login and signup** page with authentication.

## Features
- User authentication using **JWT (JSON Web Token)**
- Password encryption with **bcryptjs**
- MongoDB database integration
- Secure API with **Express.js**
- Responsive UI built with **React.js**

### Frontend (React.js)
- React.js
- Tailwind CSS (for styling)
- React Router (for navigation)

### Backend (Node.js & Express.js)
- Node.js
- Express.js
- MongoDB (Mongoose)
- bcryptjs (for password hashing)
- jsonwebtoken (for authentication)
- dotenv (for environment variables)

## Installation & Setup

### 1. Clone the repository
```sh
git clone https://github.com/your-username/login-signup.git
cd login-signup
```

### 2. Install dependencies for frontend and backend
```sh
cd backend
npm install
cd ../my-app
npm install
```


### 4. Update Root `package.json`
Modify the root `package.json` file to start both frontend and backend:
```json
"scripts": {
  "start": "concurrently \"npm run server\" \"npm run client\"",
  "server": "cd backend && npm start",
  "client": "cd my-app && npm start"
}
```

### 5. Run the application
Use the following command in the root directory:
```sh
npm start
```
This will start both frontend and backend using **concurrently**.

Alternatively, start them manually:
```sh
# Start backend
cd backend
nodemon index.js

# Start frontend
cd ../my-app
npm start
```

### 6. Open in browser
Go to `http://localhost:3000` to access the login/signup page.

## API Routes
### **Authentication Routes (Backend)**
- `POST /api/auth/signup` → Register a new user
- `POST /api/auth/login` → Login user

## Folder Structure
```
login-signup/
│── backend/            # Node.js & Express backend
│   ├── controllers/    # Controller files
│   ├── middleware/     # Authentication middleware
│   ├── models/         # Database models (User.js)
│   ├── routers/        # Express routes (auth.js)
│   ├── .env            # Environment variables
│   ├── index.js        # Main server file
│
│── my-app/             # React frontend
│   ├── public/         # Public assets
│   ├── src/
│   │   ├── components/ # UI Components (Login, Signup)
│   │   ├── pages/      # Pages (Home, Dashboard)
│   │   ├── App.js      # Main React App
│   ├── package.json    # Frontend dependencies
│
│── .gitignore          # Git ignore file
│── package.json        # Project configuration
│── README.md           # Documentation
│── tailwind.config.js  # Tailwind CSS config
```

## Future Enhancements
- Add forgot password functionality
- Implement OAuth (Google/Facebook Login)
- Improve UI with animations and validations
- make device adjustable 

## License
This project is open-source and available under the MIT License.

---
Let me know if you want any modifications! 🚀

