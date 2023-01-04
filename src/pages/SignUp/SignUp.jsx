import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, Button, TextField, Grid, Link, Typography, IconButton, InputAdornment, MenuItem, CircularProgress } from '@mui/material';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signUpAction } from '../../redux/actions/authAction';
import LoadingButton from '@mui/lab/LoadingButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const dispatch = useDispatch();
    const { successMessage, errorMessage } = useSelector((state) => state.AuthReducers)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [sMessage, setSMessage] = useState(false);
    const [eMessage, setEMessage] = useState(false);
    const formik = useFormik({
        initialValues: {

            first_name: ``,
            last_name: ``,
            user_name: ``,
            email: '',
            password: '',
        },

        onSubmit: async (values, { resetForm, setSubmitting }) => {
            console.log(values);
            const data = await dispatch(signUpAction(values))
            if (data.success === true) {
                setSubmitting(true);
                setSMessage(true);
                setTimeout(() => {
                    navigate("/signIn")
                }, 3000);
                resetForm()
            }
            else {
                setEMessage(true)
                setTimeout(() => {
                    setEMessage(false)
                }, 3000);
            }
            setSubmitting(false)
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

            <Box sx={{ margin: 'auto', padding: '5px', position: 'relative' }}>
               {sMessage ? 
                <Alert severity="success" sx={{position: 'absolute', top: '10'}}>{successMessage}</Alert>
                :
                eMessage ?
                <Alert severity="error" sx={{position: 'absolute', top: '10'}}>{errorMessage}</Alert>
                :
                null
               }
            </Box>

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
        </Container >
    )
}

export default SignUp