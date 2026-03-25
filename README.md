# AI APP - Flow Builder Suite

A professional MERN stack application built for creating and managing AI flows. This project features a robust React-based frontend with React Flow for visual logic building and a modular Express/Node.js backend.

## 🚀 Features

-   **Visual Flow Builder**: Intuitive node-based logic builder powered by `reactflow`.
-   **MERN Stack**: Modern web architecture using MongoDB, Express, React, and Node.js.
-   **Modular Design**: Clean separation of concerns between frontend and backend.
-   **Scalable Backend**: RESTful API endpoints for managing AI configurations.
-   **Premium UI**: Sleek, modern design with `lucide-react` icons and tailored CSS.

---

## 🏗️ Project Structure

```text
AI_APP/
├── frontend/         # React + Vite application
│   ├── src/          # Source code
│   └── public/       # Static assets
└── backend/          # Express.js application
    ├── config/       # Configuration files
    ├── controllers/  # API controllers
    ├── models/       # Mongoose models
    └── routes/       # API routes
```

---

## 🛠️ Setup & Installation

### 1. Prerequisites
-   Node.js (v18 or higher)
-   MongoDB Atlas account (or local MongoDB instance)
-   Git

### 2. Backend Setup
1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file and add your configuration:
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```

### 3. Frontend Setup
1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file (if needed) for API URLs:
    ```env
    VITE_API_URL=http://localhost:5000
    ```
4.  Start the Vite dev server:
    ```bash
    npm run dev
    ```

---

## 📜 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Akash Yadav**
-   GitHub: [@Akash323yadav](https://github.com/Akash323yadav)
