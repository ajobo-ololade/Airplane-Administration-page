import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import { Home,Settings, ModeNight } from '@mui/icons-material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import AccessibleIcon from '@mui/icons-material/Accessible';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FlightIcon from '@mui/icons-material/Flight';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import StarsIcon from '@mui/icons-material/Stars';

export const DashboardSideBar = ({ }) => {
  const sideContent = [
    {
      title: 'Airline System',
      path: '/dashboard/dashboard',
      // icon: <Home />
    },
    {
      title: 'Dashboard',
      path: '/dashboard/dashboard',
      icon: <Home />
    },
    {
      title: 'Staff',
      path: '/dashboard/staffs',
      icon: <PersonIcon />
    },
    {
      title: 'Airplanes',
      path: '/dashboard/airplanes',
      icon: <FlightTakeoffIcon />
    },
    {
      title: 'Flight',
      path: '/dashboard/flights',
      icon: <FlightIcon />
    },
    {
      title: 'Passangers',
      path: '/dashboard/passangers',
      icon: <GroupsIcon />
    },
    {
      title: "Schedule",
      path: '/dashboard/schedules',
      icon: <ListAltIcon />
    },
    {
      title: "Rating",
      path: '/dashboard/ratings',
      icon: <StarsIcon />
    },
    {
      title: "Airplane Types",
      path: '/dashboard/airplanetypes',
      icon: <ConnectingAirportsIcon />
    },
    {
      title: "Crew",
      path: '/dashboard/crews',
      icon: <AccessibleIcon />
    },
    {
      title: 'Log Out',
      path: '',
      icon: <Settings />
    },
  ]

  return (
    <>
      <Box position="fixe" sx={{ marginTop: '', height: 700, overflowY: 'auto', }} >
        {sideContent.map(({ title, path, icon }) => (
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href={path}>
                <ListItemIcon  sx={{color: 'white'}}>
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
