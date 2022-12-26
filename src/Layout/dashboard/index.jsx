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
      path: '',
      icon: <Home />
    },
    {
      title: 'Profile',
      path: '/dashboard/profile',
      icon: <AccountBox />
    },
    {
      title: 'Hostel Upload',
      path: '/dashboard/hostelUpload',
      icon: <DriveFolderUploadIcon />
    },
    {
      title: 'Users',
      path: '/dashboard/users',
      icon: <Group />
    },
    {
      title: 'List of Hostels',
      path: '/dashboard/hostelLists',
      icon: <Article />
    },
    {
      title: 'Log Out',
      path: '',
      icon: <Settings />
    }
  ]

  return (
    <Grid container>
      <Grid item xs={2} sm={2} sx={{ display: { xs: "none", sm: 'block', lg: 'block' }, backgroundColor: 'primary.main', height: '100vh', color: 'white' }}>
        <SwipeableDrawer anchor='left' open={open} onClose={() => setOpen(false)} sx={{ width: { xs: '50%', lg: '30%' }, padding: '2rem', overflowY: 'auto' }}>
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
        <Grid container>
          <Grid item xs={12}>
            <DashboardNavBar setOpen={setOpen} />
          </Grid>
          <Grid item xs={12} sx={{ }}>
            <Outlet style={{padding: '2rem'}}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  );
}

export default DashboardLayout;