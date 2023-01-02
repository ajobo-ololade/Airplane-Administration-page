import { Avatar, Button, Card, CardContent, Grid, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { DeleteFlightAction, EditFlightAction, GetFlightAction } from "../../../redux/actions/flightAction";
import axios from "axios";

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

export const EditModal = ({ editOpen = "false", onClose, editObj, handleEditClose }) => {
    useEffect(() => {
        if (editObj) {
          const { flightdate,  origin, destination, } = editObj;
        //   const priviledgeArray = JSON.parse(priviledges);
          setFieldValue('flightdate', flightdate);
          setFieldValue(' origin',  origin);
          setFieldValue('destination', destination);
        }
      }, [editObj]);

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {

            flightdate: '',
            origin: '',
            destination: ''
        },

        onSubmit: async (values, { resetForm, setSubmitting }) => {
            values.flightnum = editObj.flightnum
            console.log(values);
            const response = await dispatch(EditFlightAction(values));
            dispatch(GetFlightAction());

            resetForm();
            handleEditClose();

        },

        validationSchema: Yup.object().shape({
            flightdate: Yup.string().required('Flight date is required'),
            origin: Yup.string().required('Origin is required'),
            destination: Yup.string().required('Destination Type is required'),
        }),
    });

    const { handleSubmit, errors, touched, setFieldValue, resetForm, values, isSubmitting, handleBlur, handleChange } = formik

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
                                Edit Flight
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

                                            id='flightdate'
                                            label='Flight Date'
                                            size='small'
                                            fullWidth
                                            type='date'
                                            value={values.flightdate}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.flightdate && touched.flightdate)}
                                            helperText={touched.flightdate && errors.flightdate}

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
                                            value={values.origin}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.origin && touched.origin)}
                                            helperText={touched.origin && errors.origin}

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
                                            value={values.destination}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.destination && touched.destination)}
                                            helperText={touched.destination && errors.destination}

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
                                            Update
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
    const dispatch = useDispatch();
    const handleDelete = async () => {
        const flightnum = delObj.flightnum
        const data = await dispatch(DeleteFlightAction(flightnum));
        console.log(data);
        dispatch(GetFlightAction());
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