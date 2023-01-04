import React from 'react'
import { Grid, SwipeableDrawer, IconButton, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Button } from '@mui/material';
import { useState } from 'react'
import { Outlet } from 'react-router';
import { DashboardSideBar } from './DashboardSideBar';
import { DashboardNavBar } from './DashboardNav';
import { Home,Settings, ModeNight } from '@mui/icons-material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import AccessibleIcon from '@mui/icons-material/Accessible';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FlightIcon from '@mui/icons-material/Flight';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import StarsIcon from '@mui/icons-material/Stars';


function DashboardLayout(props) {
  const [open, setOpen] = useState(false)
  const sideContent = [
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
      num: '/dashboard/crews',
      icon: <ListAltIcon />
    },
    {
      title: "Rating",
      num: '/dashboard/ratings',
      icon: <StarsIcon />
    },
    {
      title: "Airplane Types",
      num: '/dashboard/passangers',
      icon: <ConnectingAirportsIcon />
    },
    {
      title: "Crew",
      num: '/dashboard/schedules',
      icon: <AccessibleIcon />
    },
    {
      title: 'Log Out',
      path: '',
      icon: <Settings />
    },
  ]

  return (
    <Grid container sx={{ height: 900, overflow: 'hidden'}}>
      <Grid item xs={2} sm={2} sx={{ display: { xs: "none", sm: 'block', lg: 'block' }, backgroundColor: 'primary.main', color: 'white', height: '100%' }}>
        <SwipeableDrawer anchor='left' open={open} onClose={() => setOpen(false)} sx={{ width: { xs: '50%', lg: '0%' }, padding: '2rem', overflowY: 'scroll' }}>
          <Box>
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
          </Box>
        </SwipeableDrawer>
        <DashboardSideBar />
      </Grid>
      <Grid item xs={12} sm={10}>
        <Grid containe>
          <Grid item xs={12}>
            <DashboardNavBar setOpen={setOpen} />
          </Grid>
          <Grid item xs={12} sx={{ height: 600, overflowY: 'auto' }}>
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  );
}

export default DashboardLayout;