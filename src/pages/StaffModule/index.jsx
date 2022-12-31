import { Box, Grid } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewStaff from './components/NewStaff';
import Staffs from './components/Staffs';
import { GetStaffAction } from '../../redux/actions/staffAction'
import { useDispatch } from 'react-redux';

const StaffModules = () => {

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(GetStaffAction())    
  }, [])

  return (
    <Grid container sx={{padding: '2rem'}}>
    <Grid item xs={12} sm={12}>
      <Box>
        <NewStaff />
      </Box>
    </Grid>
    <Grid item xs={12} sm={12}>
      <Box>
        <Staffs  />
      </Box>
    </Grid>
  </Grid>
  )
}

export default StaffModules