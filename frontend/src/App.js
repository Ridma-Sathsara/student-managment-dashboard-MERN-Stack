import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeRoute from './pages/home';
import AboutRoute from './pages/about';
import AddStudentRoute from './routes/AddStudentRoute';
import EditStudentRoute from './routes/EditStudentRoute';
import StudentList from './components/StudentList';
import EditStudentForm from './components/EditStudentForm';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box } from '@mui/material'; 

const App = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <Router>
      <Header />
      <Box sx={{ flex: 1, p: 2 }}> {/* Main content area that grows */}
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/about" element={<AboutRoute />} />
          <Route path="/add-student" element={<AddStudentRoute />} />
          <Route path="/edit-student/:id" element={<EditStudentRoute />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/edit-student/:id" element={<EditStudentForm />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  </Box>
);

export default App;
