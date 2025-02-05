import React, { useState } from "react";
import { Box, Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { CalendarToday } from "@mui/icons-material";

const EventHighlights = () => {
  const [events,] = useState([
    { id: 1, name: "Sports Day", date: "2025-02-15", location: "School Grounds" },
    { id: 2, name: "Cultural Festival", date: "2025-03-10", location: "Auditorium" },
    { id: 3, name: "Science Fair", date: "2025-04-05", location: "Main Hall" },
    { id: 4, name: "Art Exhibition", date: "2025-05-20", location: "Art Room" },
  ]);

  // Dummy registration handler
  const handleRegister = (eventName) => {
    alert(`You have registered for ${eventName}`);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Event Highlights
      </Typography>

      <Grid container spacing={2}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">{event.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  <CalendarToday sx={{ marginRight: 1 }} />
                  {event.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.location}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ marginTop: 2 }}
                  onClick={() => handleRegister(event.name)}
                >
                  Register
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventHighlights;
