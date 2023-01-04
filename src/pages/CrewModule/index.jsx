import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { GetCrewAction } from '../../redux/actions/crewAction';
import Crew from './components/Crew'
import NewCrew from './components/NewCrew'

const CrewModule = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCrewAction())
}, [])
  return (
    <>
      <Grid container sx={{padding: '2rem'}}>
        <Grid item xs={12} sm={12}>
          <Box>
            <NewCrew />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Box>
            <Crew />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default CrewModule