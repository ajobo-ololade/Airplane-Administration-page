import React from 'react'
import { Grid, SwipeableDrawer, IconButton, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Button } from '@mui/material';
import { Home, Article, Settings, Group, Storefront, Person, AccountBox, ModeNight } from '@mui/icons-material';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react'
import { Outlet } from 'react-router';
import { DashboardSideBar } from './DashboardSideBar';
import { DashboardNavBar } from './DashboardNav';
import MenuIcon from '@mui/icons-material/Menu';


function DashboardLayout(props) {
  const [open, setOpen] = useState(false)
  const sideContent = [
    {
      title: 'Dashboard',
      path: '/dashboard/index',
      icon: <Home sx={{ color: "whit" }} />
    },
    {
      title: 'Staff',
      path: '/dashboard/staffs',
      icon: <AccountBox sx={{ color: "whit" }} />
    },
    {
      title: 'Airplanes',
      path: '/dashboard/airplanes',
      icon: <DriveFolderUploadIcon sx={{ color: "whit" }} />
    },
    {
      title: 'Flight',
      path: '/dashboard/flights',
      icon: <Group sx={{ color: "whit" }} />
    },
    {
      title: 'Passangers',
      path: '/dashboard/passangers',
      icon: <Article sx={{ color: "whit" }} />
    },
    {
      title: 'Log Out',
      path: '',
      icon: <Settings sx={{ color: "whit" }} />
    }
  ]

  return (
    <Grid container>
      <Grid item xs={2} sm={2} sx={{ display: { xs: "none", sm: 'block', lg: 'block' }, backgroundColor: 'primary.main', height: '100vh', color: 'white' }}>
        <SwipeableDrawer anchor='left' open={open} onClose={() => setOpen(false)} sx={{ width: { xs: '50%', lg: '0%' }, padding: '2rem', overflowY: 'auto' }}>
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
          <Grid item xs={12} sx={{ }}>
            <Outlet style={{}}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  );
}

export default DashboardLayout;