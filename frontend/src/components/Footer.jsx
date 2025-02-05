import React from 'react';
import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'; // MUI social icons

const Footer = () => (
  <Box
    sx={{
      backgroundColor: '#1976d2',
      color: 'white',
      textAlign: 'center',
      padding: '24px 0', // Enhanced padding
      mt: 'auto',
    }}
  >
    <Grid container spacing={2} justifyContent="center">
      {/* Useful Links Section */}
      <Grid item xs={12} sm={4}>
        <Typography variant="h6" gutterBottom>Quick Links</Typography>
        <Box>
          <Link href="/contact" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '8px' }}>
            Contact Us
          </Link>
          <Link href="/faq" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '8px' }}>
            FAQ
          </Link>
          <Link href="/privacy-policy" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '8px' }}>
            Privacy Policy
          </Link>
          <Link href="/support" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '8px' }}>
            Support
          </Link>
        </Box>
      </Grid>

      {/* Social Media Section */}
      <Grid item xs={12} sm={4}>
        <Typography variant="h6" gutterBottom>Follow Us</Typography>
        <Box>
          <IconButton href="https://facebook.com" target="_blank" sx={{ color: 'white', marginRight: 1 }}>
            <Facebook />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" sx={{ color: 'white', marginRight: 1 }}>
            <Twitter />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" sx={{ color: 'white', marginRight: 1 }}>
            <Instagram />
          </IconButton>
          <IconButton href="https://linkedin.com" target="_blank" sx={{ color: 'white' }}>
            <LinkedIn />
          </IconButton>
        </Box>
      </Grid>
    </Grid>

    {/* Copyright Section */}
    <Box sx={{ marginTop: '16px' }}>
      <Typography variant="body2">
        &copy; 2025 Ridma Sathsara. All rights reserved.
      </Typography>
    </Box>
  </Box>
);

export default Footer;
