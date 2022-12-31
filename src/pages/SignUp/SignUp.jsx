import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, Button, TextField, Grid, Link, Typography, IconButton, InputAdornment, MenuItem, CircularProgress } from '@mui/material';
// import { Icon } from '@iconify/react';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GetPassengerAction } from '../../redux/actions/passengerAction'
import { signUpAction } from '../../redux/actions/authAction';
import  LoadingButton  from '@mui/lab/LoadingButton';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const SignUp = () => {

    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const formik = useFormik({
        initialValues: {
            first_name: ``,
            last_name: ``,
            user_name: ``,
            email: '',
            password: '',
        },

        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            // const data = await dispatch(signUpAction(values))
            const data = await axios.post(`http://127.0.0.1:8000/api/register`, values)
            console.log(data);
        },

        validationSchema: Yup.object().shape({
            first_name: Yup.string().required('First name is required'),
            last_name: Yup.string().required('Last name is required'),
            user_name: Yup.string().required('Username is required'),
            email: Yup.string().required('Email is required'),
            password: Yup.string().required('Password is required'),
        }),
    });

    const { handleSubmit, errors, touched, getFieldProps, resetForm, isSubmitting } = formik
    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };
    return (
        <Container component="main" maxWidth="xs">
            {/* <Box sx={{ margin: 'auto', padding: '5px' }}>
                <Alert severity="success">Registration Succeful</Alert>
                <Alert severity="error">Invalid Crediential</Alert>
            </Box> */}

            <Card sx={{ margin: 'auto', marginTop: '50px', padding: '2rem' }} >
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Avatar sx={{ m: 1, bgcolor: '#1565c0' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h3" variant="h5" sx={{ marginTop: '5px', color: '#1565c0' }}>
                            Sign Up
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

                                        id='first_name'
                                        label='First Name'
                                        size='small'
                                        fullWidth
                                        {...getFieldProps('first_name')}
                                        error={Boolean(errors.first_name && touched.first_name)}
                                        helperText={touched.first_name && errors.first_name}

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

                                        id='last_name'
                                        label='Last Name'
                                        size='small'
                                        fullWidth
                                        {...getFieldProps('last_name')}
                                        error={Boolean(errors.last_name && touched.last_name)}
                                        helperText={touched.last_name && errors.last_name}

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

                                        id='user_name'
                                        label='Username'
                                        size='small'
                                        fullWidth
                                        {...getFieldProps('user_name')}
                                        error={Boolean(errors.user_name && touched.user_name)}
                                        helperText={touched.user_name && errors.user_name}

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

                                        id='email'
                                        label='Email'
                                        size='small'
                                        fullWidth
                                        type='email'
                                        {...getFieldProps('email')}
                                        error={Boolean(errors.email && touched.email)}
                                        helperText={touched.email && errors.email}

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
                                        fullWidth
                                        autoComplete="current-password"
                                        type={showPassword ? 'text' : 'password'}
                                        label="Password"
                                        size='small'
                                        {...getFieldProps('password')}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleShowPassword} edge="end">
                                                        {/* <Icon icon={showPassword ? eyeFill : eyeOffFill} /> */}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                        error={Boolean(touched.password && errors.password)}
                                        helperText={touched.password && errors.password}
                                    />
                                </Grid>

                                <Grid item xs={12}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >

                                    {/* <Button
                                        variant={'contained'}
                                        fullWidth
                                        type='submit'
                                    >
                                        {isSubmitting ? <CircularProgress color='secondary' /> : " Sign Up"}
                                    </Button> */}
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
                        <Typography component="p" variant="p" sx={{ marginTop: '8px', fontSize: '12px' }}>
                            Already have an accout? <Link href="/signIn" color="#1565c0">Sing In</Link>
                        </Typography>

                    </Box>


                </CardContent>
            </Card>
        </Container>
    )
}

export default SignUp