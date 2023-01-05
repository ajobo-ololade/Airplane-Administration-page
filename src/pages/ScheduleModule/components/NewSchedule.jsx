import { Alert, Avatar, Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Modals from '../../../components/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AddScheduleAction, GetScheduleAction } from '../../../redux/actions/scheduleAction';
import { useDispatch, useSelector } from 'react-redux';
import  LoadingButton  from '@mui/lab/LoadingButton';

const NewSchedule = () => {
  const [open, setOpen] = React.useState(false);
  const { successMessage } = useSelector((state) => state.ScheduleReducers)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      arr: '',
      arr_time: '',
      capacity: '',
      dep_time: '',
      des: '',
      flightnum: '',
      airplaneid: '',

    },

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const response = await dispatch(AddScheduleAction(values));
      dispatch(GetScheduleAction());

      resetForm();
      handleClose();

    },

    validationSchema: Yup.object().shape({
      arr: Yup.string().required('Arriver is required'),
      arr_time: Yup.string().required('Arriver time is required'),
      capacity: Yup.string().required('Capacity is required'),
      dep_time: Yup.string().required('Depature time is required'),
      des: Yup.string().required('Destination is required'),
      flightnum: Yup.string().required('Flightnum is required'),
      airplaneid: Yup.string().required('airpnaneid is required'),
    }),
  });

  const { handleSubmit, errors, touched, getFieldProps, isSubmitting } = formik
  return (
    <>
      <Button variant="contained" color="success" onClick={handleOpen}>
        <AddIcon /> New Schedule
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
                Add New Schedule
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

                      id='arr'
                      label='Arriver'
                      size='small'
                      fullWidth
                      {...getFieldProps('arr')}
                      error={Boolean(errors.arr && touched.arr)}
                      helperText={touched.arr && errors.arr}

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

                      id='arr_time'
                      label='Arriver Time'
                      size='small'
                      fullWidth
                      type='time'
                      {...getFieldProps('arr_time')}
                      error={Boolean(errors.arr_time && touched.arr_time)}
                      helperText={touched.arr_time && errors.arr_time}

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

                      id='capacity'
                      label='Capacity'
                      size='small'
                      fullWidth
                      {...getFieldProps('capacity')}
                      error={Boolean(errors.capacity && touched.capacity)}
                      helperText={touched.capacity && errors.capacity}

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

                      id='dep_time'
                      label='departure Time'
                      size='small'
                      type='time'
                      fullWidth
                      {...getFieldProps('dep_time')}
                      error={Boolean(errors.dep_time && touched.dep_time)}
                      helperText={touched.dep_time && errors.dep_time}

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

                      id='des'
                      label='Destination'
                      size='small'
                      fullWidth
                      {...getFieldProps('des')}
                      error={Boolean(errors.des && touched.des)}
                      helperText={touched.des && errors.des}

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

                      id='flightnum'
                      label='Flight Number'
                      size='small'
                      fullWidth
                      {...getFieldProps('flightnum')}
                      error={Boolean(errors.flightnum && touched.flightnum)}
                      helperText={touched.flightnum && errors.flightnum}

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

                      id='airplaneid'
                      label='Airplane ID'
                      size='small'
                      fullWidth
                      {...getFieldProps('airplaneid')}
                      error={Boolean(errors.airplaneid && touched.airplaneid)}
                      helperText={touched.airplaneid && errors.airplaneid}

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

export default NewSchedule