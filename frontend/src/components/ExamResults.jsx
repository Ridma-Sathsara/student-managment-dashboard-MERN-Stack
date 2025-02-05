import React, { useState } from "react";
import { Typography, Box, Card, CardContent, Grid, Paper } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExamResults = () => {
  const [results] = useState([
    { id: 1, name: "John Doe", math: 85, english: 92, science: 78 },
    { id: 2, name: "Jane Smith", math: 91, english: 88, science: 84 },
    { id: 3, name: "Robert Brown", math: 78, english: 80, science: 89 },
    { id: 4, name: "Emily Davis", math: 94, english: 89, science: 87 },
  ]);

  const chartData = {
    labels: results.map((r) => r.name),
    datasets: [
      {
        label: "Math",
        data: results.map((r) => r.math),
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
      {
        label: "English",
        data: results.map((r) => r.english),
        backgroundColor: "rgba(153, 102, 255, 0.7)",
      },
      {
        label: "Science",
        data: results.map((r) => r.science),
        backgroundColor: "rgba(255, 159, 64, 0.7)",
      },
    ],
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Card
        elevation={5}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          '&:hover': { boxShadow: 10 },
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#1976d2" }}
          >
            Exam Results Overview
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ color: "text.secondary", marginBottom: 3 }}
          >
            Performance analysis of students in different subjects
          </Typography>

          <Grid container justifyContent="center">
            <Grid item xs={12} md={10}>
              <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
                <Bar
                  data={chartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { position: "top" },
                      title: { display: true, text: "Student Performance in Subjects" },
                    },
                  }}
                  height={400}
                />
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ExamResults;
