import React from 'react';
import { Typography, Box } from '@mui/material';

const WelcomeBanner = ({ title, subtitle }) => {
  return (
    <Box
      sx={{
        padding: '40px', // Increased padding for a spacious feel
        background: 'linear-gradient(135deg, #1976d2, #4fc3f7)', // Vibrant gradient background
        textAlign: 'center',
        borderRadius: '12px', // Rounded corners for a modern look
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)', // Stronger shadow for emphasis
        marginBottom: '30px',
        color: '#fff', // White text for contrast
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2rem', md: '3rem' }, // Responsive font size
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', // Subtle text shadow for depth
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginTop: '15px',
          fontSize: { xs: '1rem', md: '1.25rem' },
          color: 'rgba(255, 255, 255, 0.9)', // Slightly lighter text for subtitle
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default WelcomeBanner;
