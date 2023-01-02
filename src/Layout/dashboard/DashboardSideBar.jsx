import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { Home, Article, Settings, Group, Storefront, Person, AccountBox, ModeNight } from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import AccessibleIcon from '@mui/icons-material/Accessible';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

export const DashboardSideBar = ({ }) => {
  const sideContent = [
    {
      title: 'Dashboard',
      path: '/dashboard/dashboard',
      icon: <Home sx={{ color: "white" }} />
    },
    {
      title: 'Staff',
      path: '/dashboard/staffs',
      icon: <PersonIcon sx={{ color: "white" }} />
    },
    {
      title: 'Airplanes',
      path: '/dashboard/airplanes',
      icon: <FlightTakeoffIcon sx={{ color: "white" }} />
    },
    {
      title: 'Flight',
      path: '/dashboard/flights',
      icon: <ConnectingAirportsIcon sx={{ color: "white" }} />
    },
    {
      title: 'Passangers',
      path: '/dashboard/passangers',
      icon: <GroupsIcon sx={{ color: "white" }} />
    },
    {
      title: 'Log Out',
      path: '',
      icon: <Settings sx={{ color: "white" }} />
    }
  ]

  return (
    <>
      <Box position="fixe" sx={{ marginTop: '60px', height: 600, overflowY: 'auto', }} >
        {sideContent.map(({ title, path, icon }) => (
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href={path}>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          </List>
        ))}
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              {/* onChange={e => setMode(mode === "light" ? "dark" : "light" )} */}
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  )
};
// DashboardSideBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
//   window: PropTypes.func,
// };
