import React from 'react';
import { Box, Card, CardContent, Typography, Divider, Grid } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const AnnouncementSection = ({ announcements }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        <NotificationsActiveIcon sx={{ marginRight: 1, verticalAlign: 'middle' }} />
        Announcements
      </Typography>

      <Grid container spacing={3}>
        {announcements.map((announcement, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: 2,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {announcement.timestamp}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {announcement.title}
                </Typography>
                <Divider sx={{ marginY: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  {announcement.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AnnouncementSection;
