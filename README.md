# Frontend Auth Dashboard

A full-stack web application built as part of a frontend developer assessment.  
The project demonstrates authentication, protected routing, and basic CRUD operations with a clean and responsive UI.

---

## 🚀 Tech Stack

**Frontend**
- React (Vite)
- JavaScript
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB (Atlas)
- JWT Authentication

---

## ✨ Features

- User login with JWT-based authentication
- Protected dashboard route
- Add and delete tasks (CRUD operations)
- Logout functionality
- Secure password hashing
- Clean, centered, and responsive UI

---

## 📁 Project Structure
## 🔗 API Endpoints

- POST `/login` – User login
- GET `/tasks` – Fetch tasks (protected)
- POST `/tasks` – Add task
- DELETE `/tasks/:id` – Delete task
## 📈 Scalability Note

For production scaling, the frontend and backend would be deployed separately.
API requests would be handled through a secure gateway, JWT tokens stored securely,
and database access restricted by IP and role-based access. The application can be
scaled horizontally using containerization and cloud services.


