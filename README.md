# 📝 MERN Todo App

A full-stack Todo application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). This app allows users to create, read, update, and delete todos with real-time synchronization between the frontend and backend.

---

## 📁 Project Structure

```

mern-todo/
├── backend/      # Node.js + Express.js backend API
├── frontend/     # React frontend

````

---

## 🚀 Features

- ✅ Add, update, and delete todos
- 🔄 Real-time UI updates with API integration
- 💾 MongoDB for database storage
- 🌐 RESTful API using Express
- 🎨 Clean and responsive UI built with React

---

## ⚙️ Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally (or use MongoDB Atlas)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-todo.git
cd mern-todo
````

---

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` and add:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/todos
```

Then start the backend server:

```bash
npm start
```

---

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

> Your React app should now run at [http://localhost:5173](http://localhost:5173)
> Backend API runs at [http://localhost:5000](http://localhost:5000)

---

## 🧪 API Endpoints (Backend)

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/todos`     | Get all todos     |
| POST   | `/todos`     | Create a new todo |
| PUT    | `/todos/:id` | Update a todo     |
| DELETE | `/todos/:id` | Delete a todo     |

---

## 🛠 Tech Stack

* **Frontend:** React, Vite, Tailwind CSS *(optional)*
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Other Tools:** Postman, Git, GitHub

---

## 📷 Screenshots

*Add your project screenshots here*

---

## 🌟 Future Improvements

* ✅ Add user authentication (JWT + bcrypt)
* ✅ Mark todos as completed
* ✅ Deploy to Vercel (frontend) and Render (backend)

---

## 🤝 Contributing

Feel free to fork and submit a pull request. Contributions are welcome!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

```

---

```
