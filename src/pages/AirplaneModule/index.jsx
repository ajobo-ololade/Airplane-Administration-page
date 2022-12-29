import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Airplane from './components/Airplanes'
import NewAirplane from './components/NewAirplane'
import { GetAirplaneAction } from '../../redux/actions/airplaneActions'
import { useDispatch } from 'react-redux';

const AirplaneModule = () => {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(GetAirplaneAction())    
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
            <Airplane />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default AirplaneModule