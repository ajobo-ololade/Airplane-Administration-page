import { Box, Grid } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewPassenger from './components/NewPassenger'
import Passengers from './components/Passengers'
import { GetPassengerAction } from '../../redux/actions/passengerAction'
import { useDispatch } from 'react-redux';

const PassengerModules = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(GetPassengerAction())    
  }, [])
  return (
    <Grid container sx={{ padding: '2rem' }}>
      <Grid item xs={12} sm={12}>
        <Box>
          <NewPassenger />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box>
          <Passengers />
        </Box>
      </Grid>
    </Grid>
  )
}

export default PassengerModules