import { Box, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GetFlightAction } from '../../redux/actions/flightAction'
import Flights from './components/Flights'
import { useDispatch } from 'react-redux';
import NewFlights from './components/NewFlight'

const FlightModules = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetFlightAction())
  }, [])
  return (
    <Grid container sx={{ padding: '2rem' }}>
      <Grid item xs={12} sm={12}>
        <Box>
          <NewFlights />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box>
          <Flights />
        </Box>
      </Grid>
    </Grid>
  )
}

export default FlightModules