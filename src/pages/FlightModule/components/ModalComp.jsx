import { Avatar, Button, Card, CardContent, Grid, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { DeleteFlightAction, EditFlightAction, GetFlightAction } from "../../../redux/actions/flightAction";
import { LoadingButton } from "@mui/lab";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    p: 4,
};

export const EditModal = ({ editOpen = "false", onClose, editObj, handleEditClose }) => {
    const [sMessage, setSMessage] = useState(false);
    const [eMessage, setEMessage] = useState(false);
    useEffect(() => {
        if (editObj) {
            const { flightdate, origin, destination, } = editObj;
            //   const priviledgeArray = JSON.parse(priviledges);
            setFieldValue('flightdate', flightdate);
            setFieldValue(' origin', origin);
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
            values.id = editObj.flightnum

            const data = await dispatch(EditFlightAction(values));

            dispatch(GetFlightAction());
            handleEditClose();
            resetForm()
            
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

                                        <LoadingButton
                                            type="submit"
                                            fullWidth
                                            color="primary"
                                            variant="contained"
                                            loading={isSubmitting}
                                        >
                                            Update
                                        </LoadingButton>

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

export const DeleteModal = ({ delOpen = "false", onClose, delObj, handleDelClose }) => {
    const dispatch = useDispatch();
    const [sMessage, setSMessage] = useState(false);
    const [eMessage, setEMessage] = useState(false);
    const handleDelete = async () => {
        const flightnum = delObj.flightnum
        const data = await dispatch(DeleteFlightAction(flightnum));
        dispatch(GetFlightAction());
        handleDelClose();
   
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
                            <LoadingButton
                                type="submit"
                                fullWidth
                                color="success"
                                variant="contained"
                                loading={sMessage}
                                onClick={handleDelete}
                            >
                                Yes
                            </LoadingButton>
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