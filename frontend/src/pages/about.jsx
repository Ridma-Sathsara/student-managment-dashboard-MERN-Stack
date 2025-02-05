import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School'; // Icon for visual enhancement

const AboutRoute = () => (
  <Box
    sx={{
      padding: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      backgroundColor: '#f0f4f8', // Light gray background for subtlety
    }}
  >
    <Paper
      elevation={3}
      sx={{
        padding: '30px',
        maxWidth: '600px',
        textAlign: 'center',
        borderRadius: '10px',
        backgroundColor: '#ffffff', // Clean white card
      }}
    >
      <SchoolIcon sx={{ fontSize: '4rem', color: '#3f51b5', marginBottom: '16px' }} />
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '16px', color: '#333' }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
        Welcome to the <strong>Student Management System</strong>! This platform is designed to simplify and streamline 
        the management of student data, making it easy for educational institutions to track and organize 
        student information efficiently. 
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '16px', lineHeight: 1.8, color: '#555' }}>
        With features like student registration, editing, and data visualization, this system aims to provide 
        a seamless experience for administrators and staff.
      </Typography>
      <Typography variant="body2" sx={{ marginTop: '20px', color: '#999' }}>
        &copy; 2025 Ridma Sathsara. All rights reserved.
      </Typography>
    </Paper>
  </Box>
);

export default AboutRoute;
