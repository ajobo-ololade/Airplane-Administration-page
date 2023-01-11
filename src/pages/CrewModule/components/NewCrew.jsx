import { Alert, Avatar, Box, Button, Card, CardContent, CircularProgress, Container, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Modals from '../../../components/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import  LoadingButton  from '@mui/lab/LoadingButton';
import { AddCrewAction, GetCrewAction } from '../../../redux/actions/crewAction';

const NewCrew = () => {
  const [open, setOpen] = React.useState(false);
  const { successMessage } = useSelector((state) => state.AirplaneReducers)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      empnum: '',
      role: '',
      scheduleid: ''
    },

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const response = await dispatch(AddCrewAction(values));
      dispatch(GetCrewAction());

      resetForm();
      handleClose();

    },

    validationSchema: Yup.object().shape({
      empnum: Yup.string().required('Employee num is required'),
      role: Yup.string().required('Role is required'),
      scheduleid: Yup.string().required('Schedule id is required'),
    }),
  });

  const { handleSubmit, errors, touched, getFieldProps, resetForm, isSubmitting } = formik
  return (
    <>
      <Button variant="contained" color="success" onClick={handleOpen}>
        <AddIcon /> New Crew
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
                Add New Crew
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

                      id='empnum'
                      label='Employee num'
                      size='small'
                      fullWidth
                      {...getFieldProps('empnum')}
                      error={Boolean(errors.empnum && touched.empnum)}
                      helperText={touched.empnum && errors.empnum}

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

                      id='role'
                      label='Role'
                      size='small'
                      fullWidth
                      {...getFieldProps('role')}
                      error={Boolean(errors.role && touched.role)}
                      helperText={touched.role && errors.role}

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

                      id='scheduleid'
                      label='Schedule Id'
                      size='small'
                      fullWidth
                      {...getFieldProps('scheduleid')}
                      error={Boolean(errors.scheduleid && touched.scheduleid)}
                      helperText={touched.scheduleid && errors.scheduleid}

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

export default NewCrew