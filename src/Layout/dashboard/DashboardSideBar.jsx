import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { Home, Article, Settings, Group, Storefront, Person, AccountBox, ModeNight } from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

export const DashboardSideBar = ({ }) => {
  const sideContent = [
    {
      title: 'Dashboard',
      path: '/dashboard/index',
      icon: <Home sx={{ color: "white" }} />
    },
    {
      title: 'Staff',
      path: '/dashboard/staffs',
      icon: <AccountBox sx={{ color: "white" }} />
    },
    {
      title: 'Airplanes',
      path: '/dashboard/airplanes',
      icon: <DriveFolderUploadIcon sx={{ color: "white" }} />
    },
    {
      title: 'Flight',
      path: '/dashboard/flights',
      icon: <Group sx={{ color: "white" }} />
    },
    {
      title: 'Passangers',
      path: '/dashboard/passangers',
      icon: <Article sx={{ color: "white" }} />
    },
    {
      title: 'Log Out',
      path: '',
      icon: <Settings sx={{ color: "white" }} />
    }
  ]

  return (
    <>
      <Box position="fixe" sx={{ marginTop: '60px', }} >
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
