import { Avatar, Button, Card, CardContent, CircularProgress, Grid, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from 'react-redux';
import { EditAirplaneAction } from "../../../redux/actions/airplaneActions";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    p: 4,
    // backgroundColor: 'white'
};

export const EditModal = ({ editOpen = "false", onClose, editObj, handleClose }) => {
    useEffect(() => {
        if (editObj) {
          const { surname,  name, address, phone, ratingid, salary } = editObj;
          setFieldValue('surname', surname);
          setFieldValue('name',  name);
          setFieldValue('address', address);
          setFieldValue('phone', phone);
          setFieldValue('ratingid', ratingid);
          setFieldValue('salary', salary);
        }
      }, [editObj]);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            surname: '',
            name: '',
            address: '',
            phone: '',
            ratingid: '',
            salary: ''
        },

        onSubmit: async (values, { resetForm, setSubmitting }) => {
            const response = await dispatch(EditAirplaneAction(values));
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

    const { handleSubmit, errors, touched, setFieldValue, values, handleBlur, handleChange, isSubmitting } = formik
    return (
        <Modal
            open={editOpen}
            onClose={onClose}
            sx={{ xs: {} }}
        >
            <Box sx={style}>
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

                                            id='surname'
                                            label='Surname'
                                            size='small'
                                            fullWidth
                                            value={values.surname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
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
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
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
                                            value={values.address}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
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
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
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
                                            value={values.ratingid}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
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
                                            value={values.salary}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
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
                                            {isSubmitting ? <CircularProgress /> : "Update"}
                                            {/* Add */}
                                        </Button>

                                    </Grid>

                                </Grid>

                            </form>

                        </Box>


                    </CardContent>
                </Card>
            </Box>
        </Modal>
    )
}

export const DeleteModal = ({ delOpen = "false", onClose, delObj }) => {
    const handleDelete = () => {
        console.log(delObj.model);
    }
    return (
        <Modal
            open={delOpen}
            onClose={onClose}
            sx={{ xs: {} }}
        >
            <Box sx={style}>
                <Card sx={{ margin: 'auto', marginTop: '10px', padding: '2rem' }} >
                    <Typography component="h3" variant="p" sx={{ textAlign: 'center', color: '#1565c0', }}>
                        Are you sure you want to delete
                    </Typography>
                    <Grid container sx={{ marginTop: '15px', justifyContent: 'center' }}>
                        <Grid xs={6} p={1}>
                            <Button
                                variant={'contained'}
                                color="success"
                                fullWidth
                                onClick={handleDelete}
                            >
                                Yes
                            </Button>
                        </Grid>

                        <Grid xs={6} p={1}>
                            <Button
                                variant={'contained'}
                                color="error"
                                fullWidth
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </Modal>
    )
}