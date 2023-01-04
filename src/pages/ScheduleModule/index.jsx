import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { GetScheduleAction } from '../../redux/actions/scheduleAction'
import Schedule from './components/Schedule'
import { useDispatch } from 'react-redux';
import NewSchedule from './components/NewSchedule'

const ScheduleModule = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetScheduleAction())
  }, [])
  return (
    <Grid container sx={{ padding: '2rem' }}>
      <Grid item xs={12} sm={12}>
        <Box>
          <NewSchedule />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box>
          <Schedule />
        </Box>
      </Grid>
    </Grid>
  )
}

export default ScheduleModule