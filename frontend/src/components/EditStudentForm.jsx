import React, { useState, useEffect } from 'react';
import axios from '../services/api'; // Adjust based on your api service location
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

const EditStudentForm = () => {
  const { id } = useParams(); // Get the student ID from the URL
  const [student, setStudent] = useState({
    name: '',
    age: '',
    grade: '',
    email: '',
    phone: '',
    address: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch student data by ID when component mounts
    axios.get(`http://localhost:5002/api/students/${id}`)
      .then((response) => setStudent(response.data))
      .catch((error) => console.error('Error fetching student:', error));
  }, [id]);

  // Handle form submission to update student
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5002/api/students/${id}`, student) // PUT request to update student
      .then(() => {
        alert('Student updated successfully!');
        navigate('/');  // Redirect to home (or you can go back to the student list)
      })
      .catch((error) => console.error('Error updating student:', error));
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Box
      sx={{
        maxWidth: '500px',
        margin: '0 auto',
        padding: 2,
        backgroundColor: '#f5f5f5',
       
        borderRadius: 2,
        boxShadow: 3,
        
      }}
    >
      <Typography variant="h4" gutterBottom>
        Edit Student
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={student.name}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Age"
          name="age"
          type="number"
          value={student.age}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Grade"
          name="grade"
          value={student.grade}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={student.email}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Phone"
          name="phone"
          value={student.phone}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Address"
          name="address"
          value={student.address}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: '10px' }}
        >
          Update Student
        </Button>
      </form>
    </Box>
  );
};

export default EditStudentForm;
