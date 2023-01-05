import { Alert, Avatar, Box, Button, Card, CardContent, CircularProgress, Container, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Modals from '../../../components/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { AddAirplaneTypeAction, GetAirplaneTypeAction } from '../../../redux/actions/airplaneTypeAction';
import { useDispatch, useSelector } from 'react-redux';
import  LoadingButton  from '@mui/lab/LoadingButton';

const NewAirplaneType = () => {
  const [open, setOpen] = React.useState(false);
  const { successMessage } = useSelector((state) => state.AirplaneReducers)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
    },

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const response = await dispatch(AddAirplaneTypeAction(values));
      dispatch(GetAirplaneTypeAction());

      resetForm();
      handleClose();

    },

    validationSchema: Yup.object().shape({
      name: Yup.string().required('Name is required'),
    }),
  });

  const { handleSubmit, errors, touched, getFieldProps, resetForm, isSubmitting } = formik
  return (
    <>
      <Button variant="contained" color="success" onClick={handleOpen}>
        <AddIcon /> New Airplane Type
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
                Add New Airplane Type
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

export default NewAirplaneType