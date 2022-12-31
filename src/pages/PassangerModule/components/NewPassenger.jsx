import { Alert, Avatar, Box, Button, Card, CardContent, CircularProgress, Container, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Modals from '../../../components/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AddFlightAction } from '../../../redux/actions/flightAction';

const NewPassenger = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {

      flightdate: '',
      origin: '',
      destination: ''
    },

    onSubmit: async (values, { resetForm }) => {
     
      const response = await dispatch(AddFlightAction(values));
      console.log(response);

      resetForm();
      handleClose();

    },

    validationSchema: Yup.object().shape({
      flightdate: Yup.string().required('Flight date is required'),
      origin: Yup.string().required('origin is required'),
      destination: Yup.string().required('Destination Type is required'),
    }),
  });

  const { handleSubmit, errors, touched, getFieldProps, isSubmitting } = formik

  return (
    <>
      <Button variant="contained" color="success" onClick={handleOpen}>
        <AddIcon /> New Passenger
      </Button>
      <Modals
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Container component="main" maxWidth="xs"> */}
          {/* <Box sx={{ margin: 'auto', padding: '5px' }}>
            <Alert severity="success">New airplaine add successfully</Alert>
            <Alert severity="error">Invalid Crediential</Alert>
          </Box> */}

          <Card sx={{ margin: 'auto', marginTop: '10px', padding: '2rem' }} >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >

                <Avatar sx={{ m: 1, bgcolor: '#1565c0' }}>
                  {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h3" variant="h5" sx={{ marginTop: '5px', color: '#1565c0' }}>
                  Add New Passenger
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2} sx={{ marginTop: '5px' }}>

                    <Grid item xs={12}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >

                      <TextField

                        id='flightdate'
                        label='Flight Date'
                        size='small'
                        type='date'
                        fullWidth
                        {...getFieldProps('flightdate')}
                        error={Boolean(errors.flightdate && touched.flightdate)}
                        helperText={touched.flightdate && errors.flightdate}

                      />
                    </Grid>

                    <Grid item xs={12}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >

                      <TextField

                        id='origin'
                        label='Flight Origin'
                        size='small'
                        fullWidth
                        {...getFieldProps('origin')}
                        error={Boolean(errors.origin && touched.origin)}
                        helperText={touched.origin && errors.origin}

                      />

                    </Grid>

                    <Grid item xs={12}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >

                      <TextField

                        id='destination'
                        label='Flight Destination'
                        size='small'
                        fullWidth
                        {...getFieldProps('destination')}
                        error={Boolean(errors.destination && touched.destination)}
                        helperText={touched.destination && errors.destination}

                      />

                    </Grid>


                    <Grid item xs={12}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >

                      <Button
                        variant={'contained'}
                        fullWidth
                        type='submit'
                      >
                        {isSubmitting ? <CircularProgress /> : "Add"}
                      </Button>

                    </Grid>

                  </Grid>

                </form>

              </Box>


            </CardContent>
          </Card>
        {/* </Container> */}
      </Modals>
    </>
  )
}

export default NewPassenger