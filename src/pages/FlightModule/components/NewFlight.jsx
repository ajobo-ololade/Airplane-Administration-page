import { Alert, Avatar, Box, Button, Card, CardContent, Container, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Modals from '../../../components/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const NewFlights = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const formik = useFormik({
    initialValues: {
      // numser: ``,
      manufacturer: '',
      model: '',
      aircraft_type: ''
    },

    onSubmit: async (values, { resetForm }) => {
      // const response = axios.post(`http://127.0.0.1:8000/api/airplane/create`, values).then((res) => {
        console.log(values);
      // })
      try {
        let result = await axios.post(          // any call like get
        `http://127.0.0.1:8000/api/airplane/create`,         // your URL
        values
        );
        console.log(result.response.data);
      } catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      }
    },

    validationSchema: Yup.object().shape({
      // numser: Yup.string().required('Numser is required'),
      model: Yup.string().required('Model is required'),
      manufacturer: Yup.string().required('Manufacturer is required'),
      aircraft_type: Yup.string().required('Aircraft Type is required'),
    }),
  });

  const { handleSubmit, errors, touched, getFieldProps, resetForm } = formik
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
                  Add New Flight
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2} sx={{ marginTop: '5px' }}>

                    {/* <Grid item xs={12}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >

                      <TextField

                        id='numser'
                        label='Numser'
                        size='small'
                        fullWidth
                        {...getFieldProps('numser')}
                        error={Boolean(errors.numser && touched.numser)}
                        helperText={touched.numser && errors.numser}

                      />
                    </Grid> */}

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
                        date
                        fullWidth
                        {...getFieldProps('flightdate')}
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

                        id='origin'
                        label='Flight Origin'
                        size='small'
                        fullWidth
                        {...getFieldProps('origin')}
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

                        id='destination'
                        label='Flight Destination'
                        size='small'
                        fullWidth
                        {...getFieldProps('destination')}
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

                      <Button
                        variant={'contained'}
                        fullWidth
                        type='submit'
                      >
                        Add
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

export default NewFlights