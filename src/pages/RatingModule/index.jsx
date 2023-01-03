import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { GetRatingAction } from '../../redux/actions/ratingAction'
import Rating from './components/Rating'
import { useDispatch } from 'react-redux';
import NewRating from './components/NewRating'

const RatingModule = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetRatingAction())
  }, [])
  return (
    <Grid container sx={{ padding: '2rem' }}>
      <Grid item xs={12} sm={12}>
        <Box>
          <NewRating />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box>
          <Rating />
        </Box>
      </Grid>
    </Grid>
  )
}

export default RatingModule