# 🎉 Event Management System (Backend)

A complete **Node.js + Express + MongoDB** backend for managing events with authentication, user roles, and event registration.

---

## 🚀 Features

* 🔐 User Authentication (JWT)
* 👤 Role-based Access (User / Admin)
* 📅 Create & Manage Events
* ✅ Admin Event Approval
* 🧾 View Events (Filter by Date & Location)
* 🎟️ Register for Events (Capacity Validation)
* ❌ Cancel Registration
* 🏗️ MVC Architecture (Clean & Scalable)

---

## 🏗️ Project Structure

```
event-management/
│
├── config/          # Database connection
├── controllers/     # Business logic
├── middleware/      # Auth & Admin middleware
├── models/          # Mongoose schemas
├── routes/          # API routes
├── .env             # Environment variables
├── server.js        # Entry point
└── package.json
```

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* bcrypt.js

---

## 🔧 Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-url>
cd event-management
```

### 2. Install dependencies

```
npm install
```

### 3. Setup environment variables

Create a `.env` file:

```
MONGO_URI=mongodb://127.0.0.1:27017/eventDB
JWT_SECRET=your_secret_key
```

### 4. Run the server

```
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 🔐 Authentication

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register new user |
| POST   | /api/auth/login    | Login user        |

---

### 📅 Events

| Method | Endpoint                 | Description                                      |
| ------ | ------------------------ | ------------------------------------------------ |
| POST   | /api/events              | Create event (Auth required)                     |
| PUT    | /api/events/approve/:id  | Approve event (Admin only)                       |
| GET    | /api/events              | Get all approved events (Filter: date, location) |
| POST   | /api/events/register/:id | Register for event                               |
| POST   | /api/events/cancel/:id   | Cancel registration                              |

---

## 🔐 Authentication Header

For protected routes, include:

```
Authorization: <your_token>
```

---

## 🧠 Business Logic

* ❗ Users cannot register twice for the same event
* ❗ Registration blocked when capacity is full
* ❗ Only approved events are visible
* ❗ Only admin can approve events

---

## 📌 Future Improvements

* ✅ Input validation (Joi / express-validator)
* 📄 Swagger API documentation
* 📊 Pagination & search
* 🌐 Frontend (React / Next.js)
* ☁️ Deployment (Render / AWS / Vercel)

---

## 👨‍💻 Author

Developed Rajesh Kumar using Node.js & Express with ❤️

---

## ⭐ License

This project is for educational purposes.
