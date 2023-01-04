import { Alert, Avatar, Box, Button, Card, CardContent, CircularProgress, Container, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Modals from '../../../components/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { useDispatch, useSelector } from 'react-redux';
import { AddFlightAction, GetFlightAction } from '../../../redux/actions/flightAction';
// import { useNavigate } from 'react-router-dom';

const NewFlights = () => {
  const { successMessage, errorMessage } = useSelector((state) => state.AuthReducers)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [sMessage, setSMessage] = useState(false);
  const [eMessage, setEMessage] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {

      flightdate: '',
      origin: '',
      destination: ''
    },

    onSubmit: async (values, { resetForm, setSubmitting }) => {

      const data = await dispatch(AddFlightAction(values));
      console.log(data.message);
      if (data.message === true) {
        setSubmitting(true);
        setSMessage(true);
        dispatch(GetFlightAction());
        setTimeout(() => {
          setEMessage(false)
        }, 3000);
        resetForm()
        handleClose();
      }
      else {
        setEMessage(true)
        setTimeout(() => {
          setEMessage(false)
        }, 3000);
        handleClose();
      }
      setSubmitting(false)

      // resetForm();

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
        <AddIcon /> New Flight
      </Button>
      <Modals
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Container component="main" maxWidth="xs"> */}
        <Box sx={{ margin: 'auto', padding: '5px', position: 'relative' }}>
          {sMessage ?
            <Alert severity="success" sx={{ position: 'absolute', top: '10' }}>{successMessage}</Alert>
            :
            eMessage ?
              <Alert severity="error" sx={{ position: 'absolute', top: '10' }}>{errorMessage}</Alert>
              :
              null
          }
        </Box>

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
                Add New Flight
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

                    <LoadingButton
                      type="submit"
                      fullWidth
                      color="primary"
                      variant="contained"
                      loading={isSubmitting}
                    >
                      Sign up
                    </LoadingButton>

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

export default NewFlights