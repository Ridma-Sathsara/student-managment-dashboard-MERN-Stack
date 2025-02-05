import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Typography, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/FormatListBulleted";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import InfoIcon from "@mui/icons-material/Info";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  return (
    <Box>
      {/* Menu Icon to open Sidebar */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ position: 'fixed', top: 16, left: 16, zIndex: 1300 }}
      >
        <MenuIcon sx={{ fontSize: "2rem", color: "#003366" }} />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            background: "linear-gradient(90deg, #003366 30%, #00509E 90%)",
            height: "100%",
            color: "white",
            paddingTop: 2,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {/* Sidebar Header */}
          <Box sx={{ display: "flex", alignItems: "center", padding: "16px 16px" }}>
            <SchoolIcon sx={{ fontSize: "2rem", marginRight: 1, color: "white" }} />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Student Management
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }} />

          {/* Navigation List */}
          <List>
            <ListItem button component={Link} to="/" sx={{ color: "white", '&:hover': { backgroundColor: "#004c99" } }}>
              <ListItemIcon>
                <HomeIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/students" sx={{ color: "white", '&:hover': { backgroundColor: "#004c99" } }}>
              <ListItemIcon>
                <ListIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Student List" />
            </ListItem>
            <ListItem button component={Link} to="/add-student" sx={{ color: "white", '&:hover': { backgroundColor: "#004c99" } }}>
              <ListItemIcon>
                <PersonAddIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Add Student" />
            </ListItem>
            <ListItem button component={Link} to="/about" sx={{ color: "white", '&:hover': { backgroundColor: "#004c99" } }}>
              <ListItemIcon>
                <InfoIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
