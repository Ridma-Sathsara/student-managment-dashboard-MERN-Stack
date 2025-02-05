import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography, Box } from '@mui/material';

const BarChartComponent = ({ data, title }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>{title}</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#cccccc" />
          <XAxis 
            dataKey="age" 
            tick={{ fill: "#333", fontSize: 14 }} 
            angle={-45} 
            textAnchor="end" 
          />
          <YAxis 
            tick={{ fill: "#333", fontSize: 14 }} 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: "#f5f5f5", borderColor: "#888", borderWidth: 1 }} 
          />
          <Legend />
          <Bar 
            dataKey="count" 
            fill="#8884d8" 
            barSize={30} 
            radius={[5, 5, 0, 0]} 
            hoverAnimation={true} 
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default BarChartComponent;
