import { Alert, Avatar, Box, Button, Card, CardContent, CircularProgress, Container, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Modals from '../../../components/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AddFlightAction } from '../../../redux/actions/flightAction';
import LoadingButton from '@mui/lab/LoadingButton';

const NewPassenger = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {

      surname: '',
      othername: '',
      address: '',
      phone: '',
      schedulenum: ''
    },

    onSubmit: async (values, { resetForm }) => {

      const response = await dispatch(AddFlightAction(values));
      console.log(response);

      resetForm();
      handleClose();

    },

    validationSchema: Yup.object().shape({
      surname: Yup.string().required('Surname date is required'),
      address: Yup.string().required('Address is required'),
      othername: Yup.string().required('Other name Type is required'),
      phone: Yup.string().required('Phone No Type is required'),
      schedulenum: Yup.string().required('Schedule No Type is required'),
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

                      id='surname'
                      label='Surname'
                      size='small'
                      fullWidth
                      {...getFieldProps('surname')}
                      error={Boolean(errors.surname && touched.surname)}
                      helperText={touched.surname && errors.surname}

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

                      id='othername'
                      label='Other Name'
                      size='small'
                      fullWidth
                      {...getFieldProps('othername')}
                      error={Boolean(errors.othername && touched.othername)}
                      helperText={touched.othername && errors.othername}

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

                      id='address'
                      label='Address'
                      size='small'
                      fullWidth
                      {...getFieldProps('address')}
                      error={Boolean(errors.address && touched.address)}
                      helperText={touched.address && errors.address}

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

                      id='phone'
                      label='Phone No'
                      size='small'
                      fullWidth
                      {...getFieldProps('phone')}
                      error={Boolean(errors.phone && touched.phone)}
                      helperText={touched.phone && errors.phone}

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

                      id='schedulenum'
                      label='Schedule No'
                      size='small'
                      fullWidth
                      {...getFieldProps('schedulenum')}
                      error={Boolean(errors.schedulenum && touched.schedulenum)}
                      helperText={touched.schedulenum && errors.schedulenum}

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

export default NewPassenger