import { Box, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Flights from './components/Flights'
import NewFlights from './components/NewFlight'

const FlightModules = () => {
    const [flights, setFlights] = useState([]);
    useEffect(() => {
  
        const response = axios.get(`http://127.0.0.1:8000/api/flight`).then((res) => {
            setFlights(res.data.flight)
            // console.log(res.data);
        })
      
    }, [])
  return (
    <Grid container sx={{padding: '2rem'}}>
    <Grid item xs={12} sm={12}>
      <Box>
        <NewFlights />
      </Box>
    </Grid>
    <Grid item xs={12} sm={12}>
      <Box>
        <Flights flights={flights} />
      </Box>
    </Grid>
  </Grid>
  )
}

export default FlightModules