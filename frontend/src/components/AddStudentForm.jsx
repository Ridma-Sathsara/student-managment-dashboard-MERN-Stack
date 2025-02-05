import React, { useState } from 'react';
import axios from '../services/api'; // Adjust the import based on your services location
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

const AddStudentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = { name, email, age, grade, phone, address };

    axios.post('http://localhost:5002/api/students', student)
      .then(() => {
        setName('');
        setEmail('');
        setAge('');
        setGrade('');
        setPhone('');
        setAddress('');
        alert('Student added successfully!');
      })
      .catch(error => {
        console.error('Error adding student:', error);
        alert('Error adding student');
      });
  };

  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '90vh',
        backgroundColor: '#f5f7fa', // Subtle background color
        padding: 3,
      }}
    >
      <Paper 
        elevation={4} 
        sx={{
          padding: '40px',
          width: '100%',
          maxWidth: '600px',
          borderRadius: '12px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold', 
            textAlign: 'center', 
            color: '#3f51b5',
          }}
        >
          Add New Student
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            textAlign: 'center', 
            color: '#666', 
            marginBottom: '20px',
          }}
        >
          Fill in the details below to add a new student.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Age"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <TextField
            label="Grade"
            variant="outlined"
            fullWidth
            margin="normal"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            margin="normal"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 3,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius: '8px',
              }}
            >
              Add Student
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default AddStudentForm;
