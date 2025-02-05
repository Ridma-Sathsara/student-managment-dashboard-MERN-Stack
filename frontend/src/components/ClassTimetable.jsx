import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from "@mui/material";

const Timetable = () => {
  const [schedule, setSchedule] = useState([
    { id: 1, time: "8:00 AM - 9:00 AM", subject: "Math", teacher: "Mr. John" },
    { id: 2, time: "9:00 AM - 10:00 AM", subject: "English", teacher: "Ms. Emma" },
    { id: 3, time: "10:00 AM - 11:00 AM", subject: "Science", teacher: "Mr. David" },
    { id: 4, time: "11:00 AM - 12:00 PM", subject: "History", teacher: "Ms. Clara" },
  ]);

  // Dummy handler for updating teacher assignment
  const handleUpdateTeacher = (id) => {
    const updatedSchedule = schedule.map((item) =>
      item.id === id ? { ...item, teacher: "Updated Teacher" } : item
    );
    setSchedule(updatedSchedule);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Timetable / Upcoming Classes
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Teacher</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.subject}</TableCell>
                <TableCell>{row.teacher}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleUpdateTeacher(row.id)}
                  >
                    Update Teacher
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Timetable;
