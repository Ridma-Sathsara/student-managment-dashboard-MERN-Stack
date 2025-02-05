import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, Paper } from '@mui/material';
import axios from '../services/api'; // Adjust path as necessary
import WelcomeBanner from '../components/WelcomeBanner'; // Adjust path as necessary
import AgePieChart from '../components/AgePieChart'; // Adjust path as necessary
import BarChartComponent from '../components/BarChartComponent';
import AnnouncementSection from '../components/AnnouncementSection';

import Timetable from '../components/ClassTimetable'; // Timetable Component
import ExamResults from '../components/ExamResults'; // Exam Results Component
import EventHighlights from '../components/EventHighlights'; // Event Highlights Component

const HomeRoute = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [averageAge, setAverageAge] = useState(0);
  const [ageData, setAgeData] = useState([]);
  const [announcements, ] = useState([
    {
      timestamp: 'January 8, 2025',
      title: 'Upcoming Exams',
      description: 'Mid-term exams will begin on February 10th. Please check your schedules.',
    },
    {
      timestamp: 'January 5, 2025',
      title: 'Holiday Break Announcement',
      description: 'The school will be closed from January 15th to January 20th for the winter break.',
    },
    {
      timestamp: 'December 25, 2024',
      title: 'New Course Registration',
      description: 'Registration for the spring semester courses is now open. Deadline: January 12th.',
    },
  ]);

  useEffect(() => {
    axios.get('http://localhost:5002/api/students')
      .then(response => {
        const studentData = response.data;
        setStudentCount(studentData.length);
        calculateAverageAge(studentData);
        generateAgeData(studentData);
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });
  }, []);

  const calculateAverageAge = (students) => {
    if (students.length === 0) {
      setAverageAge(0);
      return;
    }
    const totalAge = students.reduce((acc, student) => acc + parseInt(student.age, 10), 0);
    setAverageAge((totalAge / students.length).toFixed(1));
  };

  const generateAgeData = (students) => {
    const ageGroups = students.reduce((acc, student) => {
      const age = parseInt(student.age, 10);
      acc[age] = (acc[age] || 0) + 1;
      return acc;
    }, {});

    const chartData = Object.keys(ageGroups).map(age => ({
      age,
      count: ageGroups[age],
    }));

    setAgeData(chartData);
  };

  return (
    <Box sx={{ padding: 4 }}>
      {/* Welcome Banner */}
      <WelcomeBanner
        title="Welcome to the Student Management System"
        subtitle="Manage and track student information easily and efficiently."
      />

      {/* Quick Actions */}
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {/* Quick Action Cards for Student Statistics */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: '#1976d2',
              color: 'white',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h6">Total Students</Typography>
              <Typography variant="h4">{studentCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: '#388e3c',
              color: 'white',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h6">New Students This Month</Typography>
              <Typography variant="h4">20</Typography> {/* Static value for now */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: '#f57c00',
              color: 'white',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h6">Average Age</Typography>
              <Typography variant="h4">{averageAge}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Chart Section */}
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom align="center">
              Student Age Distribution (Bar Chart)
            </Typography>
            <BarChartComponent
              data={ageData}
              title="Student Age Distribution (Bar Chart)"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom align="center">
              Student Age Distribution (Pie Chart)
            </Typography>
            <AgePieChart data={ageData} />
          </Paper>
        </Grid>
      </Grid>

      {/* Timetable, Event Highlights, Announcement, Exam Results */}
<Grid container spacing={4} sx={{ marginTop: 6 }}>
  <Grid item xs={12} md={6}>
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Upcoming Classes (Timetable)
      </Typography>
      <Timetable />
    </Paper>
  </Grid>

  <Grid item xs={12} md={6}>
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Event Highlights
      </Typography>
      <EventHighlights />
    </Paper>
  </Grid>
</Grid>

{/* Add space before Announcements and Exam Results */}
<Grid container spacing={4} sx={{ marginTop: 6 }}>
  <Grid item xs={12} md={6}>
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Announcements
      </Typography>
      <AnnouncementSection announcements={announcements} />
    </Paper>
  </Grid>

  <Grid item xs={12} md={6}>
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Exam Results
      </Typography>
      <ExamResults />
    </Paper>
  </Grid>
</Grid>

<br></br>
      {/* Recent Activities */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>Recent Activities</Typography>
        <ul>
          <li>John Doe added to Grade 10</li>
          <li>Jane Smith's details updated</li>
          <li>Grade 9 average performance updated</li>
        </ul>
      </Box>

      {/* Quick Links */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>Quick Links</Typography>
        <Button variant="contained" color="primary" sx={{ marginRight: 2 }} href="/add-student">
          Add Student
        </Button>
        <Button variant="contained" color="secondary" sx={{ marginRight: 2 }} href="/students">
          View Student List
        </Button>
        <Button variant="contained" color="success" href="/about">
          About
        </Button>
      </Box>
    </Box>
  );
};

export default HomeRoute;
