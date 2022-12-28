import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Airplane from './components/Airplanes'
import NewAirplane from './components/NewAirplane'
import axios from 'axios';

const AirplaneModule = () => {
  const [airplanes, setAirplanes] = useState([]);
  useEffect(() => {

      const response = axios.get(`http://127.0.0.1:8000/api/airplane`).then((res) => {
          setAirplanes(res.data.airplane)
          // console.log(res.data.airplane);
      })
    
  }, [])
  return (
    <>
      <Grid container sx={{padding: '2rem'}}>
        <Grid item xs={12} sm={12}>
          <Box>
            <NewAirplane />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Box>
            <Airplane airplanes={airplanes} />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default AirplaneModule