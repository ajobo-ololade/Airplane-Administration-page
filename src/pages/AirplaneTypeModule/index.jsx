import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { GetAirplaneTypeAction } from '../../redux/actions/airplaneTypeAction'
import AirplaneType from './components/AirplaneType'
import { useDispatch } from 'react-redux';
import NewAirplaneType from './components/NewAirplaneType'

const AirplaneTypeModule = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAirplaneTypeAction())
  }, [])
  return (
    <Grid container sx={{ padding: '2rem' }}>
      <Grid item xs={12} sm={12}>
        <Box>
          <NewAirplaneType />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box>
          <AirplaneType />
        </Box>
      </Grid>
    </Grid>
  )
}

export default AirplaneTypeModule