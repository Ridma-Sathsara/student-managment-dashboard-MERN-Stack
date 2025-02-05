import React, { useState, useEffect } from 'react';
import axios from '../services/api'; // Adjust based on your API service location
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting
import {
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Box,
} from '@mui/material'; // Material-UI components
import DeleteIcon from '@mui/icons-material/Delete'; // Delete icon
import EditIcon from '@mui/icons-material/Edit'; // Edit icon
import SearchIcon from '@mui/icons-material/Search'; // Search icon

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5002/api/students') // Make sure this matches your backend endpoint
      .then(response => {
        setStudents(response.data);
        setFilteredStudents(response.data);
      })
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  // Handle search query
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredStudents(
      students.filter(student =>
        student.name.toLowerCase().includes(query) ||
        student.email.toLowerCase().includes(query) ||
        student.phone.includes(query)
      )
    );
  };

  // Navigate to edit page
  const handleEdit = (id) => {
    navigate(`/edit-student/${id}`);
  };

  // Open dialog to confirm deletion
  const handleDeleteDialogOpen = (id) => {
    setOpenDialog(true);
    setStudentToDelete(id);
  };

  // Close the dialog
  const handleDeleteDialogClose = () => {
    setOpenDialog(false);
    setStudentToDelete(null);
  };

  // Delete student
  const handleDelete = () => {
    if (studentToDelete) {
      axios.delete(`http://localhost:5002/api/students/${studentToDelete}`) // Backend delete endpoint
        .then(() => {
          setStudents(prevStudents => prevStudents.filter(student => student._id !== studentToDelete));
          setFilteredStudents(prevStudents => prevStudents.filter(student => student._id !== studentToDelete));
          setOpenDialog(false);
          setStudentToDelete(null);
          alert('Student deleted successfully!');
        })
        .catch(error => {
          console.error('Error deleting student:', error);
          setOpenDialog(false);
        });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: '#3f51b5' }}>
        Student List
      </Typography>

      {/* Search Bar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 2,
        }}
      >
        <SearchIcon sx={{ color: '#1976d2', marginRight: 1 }} />
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search by Name, Email, or Phone"
          value={searchQuery}
          onChange={handleSearch}
          sx={{ width: '300px' }}
        />
      </Box>

      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table aria-label="student list table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Age</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Grade</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Email</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Phone</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Address</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStudents.map(student => (
              <TableRow key={student._id} hover>
                <TableCell component="th" scope="row">{student.name}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.grade}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell>{student.address}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleEdit(student._id)} color="primary" sx={{ marginRight: '10px' }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteDialogOpen(student._id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleDeleteDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ fontWeight: 'bold', color: '#f44336' }}>
          {"Confirm Deletion"}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to delete this student? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StudentList;
