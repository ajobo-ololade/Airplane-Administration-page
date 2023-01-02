import { Alert, Avatar, Box, Button, Card, CardContent, CircularProgress, Container, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Modals from '../../../components/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { AddAirplaneAction, GetAirplaneAction } from '../../../redux/actions/airplaneActions';
import { useDispatch, useSelector } from 'react-redux';
import  LoadingButton  from '@mui/lab/LoadingButton';

const NewAirplane = () => {
  const [open, setOpen] = React.useState(false);
  const { successMessage } = useSelector((state) => state.AirplaneReducers)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      manufacturer: '',
      model: '',
      aircraft_type: ''
    },

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const response = await dispatch(AddAirplaneAction(values));
      dispatch(GetAirplaneAction());

      resetForm();
      handleClose();

    },

    validationSchema: Yup.object().shape({
      model: Yup.string().required('Model is required'),
      manufacturer: Yup.string().required('Manufacturer is required'),
      aircraft_type: Yup.string().required('Aircraft Type is required'),
    }),
  });

  const { handleSubmit, errors, touched, getFieldProps, resetForm, isSubmitting } = formik
  return (
    <>
      <Button variant="contained" color="success" onClick={handleOpen}>
        <AddIcon /> New Airplane
      </Button>
      <Modals
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Container component="main" maxWidth="xs"> */}
        {/* <Box sx={{ margin: 'auto', padding: '5px' }}>
            <Alert severity="success">{successMessage}</Alert>
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
                Add New Airplane
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

                      id='manufacturer'
                      label='Manufacturer'
                      size='small'
                      fullWidth
                      {...getFieldProps('manufacturer')}
                      error={Boolean(errors.manufacturer && touched.manufacturer)}
                      helperText={touched.manufacturer && errors.manufacturer}

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

                      id='model'
                      label='Model'
                      size='small'
                      fullWidth
                      {...getFieldProps('model')}
                      error={Boolean(errors.model && touched.model)}
                      helperText={touched.model && errors.model}

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

                      id='aircraf_type'
                      label='Aircraft Type'
                      size='small'
                      fullWidth
                      {...getFieldProps('aircraft_type')}
                      error={Boolean(errors.aircraft_type && touched.aircraft_type)}
                      helperText={touched.aircraft_type && errors.aircraft_type}

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
                      Add
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

export default NewAirplane