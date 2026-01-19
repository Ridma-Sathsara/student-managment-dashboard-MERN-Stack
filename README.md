# 🎓 Student Management Dashboard

A full-stack **Student Management Dashboard** built with the **MERN Stack** (MongoDB, Express.js, React, Node.js). This application provides a comprehensive platform for managing student information, tracking academic performance, and visualizing data through interactive charts and dashboards.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![Node](https://img.shields.io/badge/Node.js-v14+-brightgreen)
![React](https://img.shields.io/badge/React-v19.0-blue)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [License](#-license)

---

## ✨ Features

### 📊 Dashboard & Analytics
- **Interactive Dashboard** with real-time student statistics
- **Data Visualization** using Chart.js and Recharts
- **Age Distribution** pie charts
- **Performance Metrics** bar charts
- **Welcome Banner** with personalized greetings

### 👨‍🎓 Student Management
- **Add New Students** with comprehensive forms
- **Edit Student Information** with inline editing
- **Delete Students** with confirmation dialogs
- **Student List View** with search and filter capabilities
- **Detailed Student Profiles**

### 📚 Academic Features
- **Class Timetable** management
- **Exam Results** tracking and display
- **Event Highlights** and announcements
- **Announcement Section** for important updates

### 🎨 User Interface
- **Material-UI (MUI)** components for modern design
- **Responsive Layout** for all device sizes
- **React Icons** for enhanced visual appeal
- **Custom Styling** with emotion/styled

---

## 🛠 Tech Stack

### Frontend
- **React** (v19.0) - UI library
- **React Router DOM** (v7.1) - Client-side routing
- **Material-UI (MUI)** (v6.3) - Component library
- **Chart.js** (v4.4) - Data visualization
- **Recharts** (v2.15) - Additional charting library
- **Axios** (v1.7) - HTTP client
- **React Icons** (v5.4) - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** (v4.21) - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** (v8.9) - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **cookie-parser** - Cookie parsing middleware

### Development Tools
- **Nodemon** (v3.1) - Auto-restart server
- **React Scripts** (v5.0) - Build tooling

---

## 📁 Project Structure

```
student-managment-dashboard-MERN-Stack/
├── backend/
│   ├── config/
│   │   └── database.js          # MongoDB connection configuration
│   ├── controllers/
│   │   └── student.controller.js # Student business logic
│   ├── models/
│   │   └── student.model.js     # Student schema
│   ├── routes/
│   │   └── student.route.js     # API routes
│   ├── utils/                   # Utility functions
│   ├── .env                     # Environment variables
│   ├── server.js                # Express server entry point
│   └── package.json             # Backend dependencies
│
├── frontend/
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── AddStudentForm.jsx
│   │   │   ├── AgePieChart.jsx
│   │   │   ├── AnnouncementSection.jsx
│   │   │   ├── BarChartComponent.jsx
│   │   │   ├── ClassTimetable.jsx
│   │   │   ├── EditStudentForm.jsx
│   │   │   ├── EventHighlights.jsx
│   │   │   ├── ExamResults.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── StudentList.jsx
│   │   │   └── WelcomeBanner.jsx
│   │   ├── pages/               # Page components
│   │   ├── routes/              # Route configurations
│   │   ├── services/            # API service layer
│   │   ├── styles/              # CSS styles
│   │   ├── App.js               # Main App component
│   │   └── index.js             # React entry point
│   └── package.json             # Frontend dependencies
│
└── README.md                    # Project documentation
```

---

##  API Endpoints

### Student Routes

Base URL: `http://localhost:5002/api/students`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all students |
| GET | `/:id` | Get student by ID |
| POST | `/` | Create new student |
| PUT | `/:id` | Update student by ID |
| DELETE | `/:id` | Delete student by ID |



---

##  License

This project is licensed under the **MIT License**.

---



## 🙏 Acknowledgments

- Material-UI for the beautiful component library
- MongoDB Atlas for database hosting
- Chart.js and Recharts for data visualization
- The MERN stack community

---

## 🔄 Future Enhancements

- [ ] User authentication and authorization
- [ ] Role-based access control (Admin, Teacher, Student)
- [ ] Email notifications
- [ ] PDF report generation
- [ ] Attendance tracking
- [ ] Grade calculation system
- [ ] Parent portal
- [ ] Mobile application

---

**Made with ❤️ using the MERN Stack**
