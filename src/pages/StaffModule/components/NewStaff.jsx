import { Alert, Avatar, Box, Button, Card, CardContent, CircularProgress, Container, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Modals from '../../../components/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { AddAirplaneAction } from '../../../redux/actions/airplaneActions';
import { useDispatch, useSelector } from 'react-redux';

const NewStaff = () => {
  const [open, setOpen] = React.useState(false);
  const {successMessage} = useSelector((state) => state.AirplaneReducers)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      surname: '',
      name: '',
      address: '',
      phone: '',
      ratingid: '',
      salary:''
    },

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const response = await dispatch(AddAirplaneAction(values));
      console.log(response);

      resetForm();
      handleClose();
      
    },

    validationSchema: Yup.object().shape({
      surname: Yup.string().required('Surname is required'),
      name: Yup.string().required('Name is required'),
      address: Yup.string().required('Address is required'),
      phone: Yup.string().required('Phone is required'),
      ratingid: Yup.string().required('Rating Id is required'),
      salary: Yup.string().required('Salary is required'),
    }),
  });

  const { handleSubmit, errors, touched, getFieldProps, resetForm, isSubmitting } = formik
  return (
    <>
      <Button variant="contained" color="success" onClick={handleOpen}>
        <AddIcon /> New Staff
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
                  Add New Staff
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

                        id='name'
                        label='Name'
                        size='small'
                        fullWidth
                        {...getFieldProps('name')}
                        error={Boolean(errors.name && touched.name)}
                        helperText={touched.name && errors.name}

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
                        label='Phone'
                        type='number'
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

                        id='ratingid'
                        label='Rating Id'
                        type='number'
                        size='small'
                        fullWidth
                        {...getFieldProps('ratingid')}
                        error={Boolean(errors.ratingid && touched.ratingid)}
                        helperText={touched.ratingid && errors.ratingid}

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

                        id='salary'
                        label='Salary'
                        size='small'
                        type='number'
                        fullWidth
                        {...getFieldProps('salary')}
                        error={Boolean(errors.salary && touched.salary)}
                        helperText={touched.salary && errors.salary}

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
                      {isSubmitting ? <CircularProgress /> :"Add"}
                        {/* Add */}
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

export default NewStaff