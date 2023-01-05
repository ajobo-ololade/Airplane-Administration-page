import { Avatar, Button, Card, CardContent, CircularProgress, Grid, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DeleteScheduleAction, EditScheduleAction, GetScheduleAction } from "../../../redux/actions/scheduleAction";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import LoadingButton from '@mui/lab/LoadingButton';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    p: 4,
};

export const EditModal = ({ editOpen = "false", onClose, editObj, handleEditClose }) => {

    useEffect(() => {
        if (editObj) {
            const { arr, arr_time, capacity, dep_time, des, flightnum, schedulenum } = editObj;
            setFieldValue('arr', arr);
            setFieldValue(' arr_time', arr_time);
            setFieldValue('capacity', capacity);
            setFieldValue('dep_time', dep_time);
            setFieldValue(' des', des);
            setFieldValue('flightnum', flightnum);
            setFieldValue('schedulenum', schedulenum);
        }
    }, [editObj]);

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            arr: '',
            arr_time: '',
            capacity: '',
            dep_time: '',
            des: '',
            flightnum: '',
            schedulenum: '',

        },

        onSubmit: async (values, { resetForm, setSubmitting }) => {

            values.id = editObj.numser
            console.log(values);
            const response = await dispatch(EditScheduleAction(values));
            dispatch(GetScheduleAction());

            resetForm();
            handleEditClose();

        },

        validationSchema: Yup.object().shape({
            arr: Yup.string().required('Arriver is required'),
            arr_time: Yup.string().required('Arriver time is required'),
            capacity: Yup.string().required('Capacity is required'),
            dep_time: Yup.string().required('Depature time is required'),
            des: Yup.string().required('Destination is required'),
            flightnum: Yup.string().required('Flightnum is required'),
            schedulenum: Yup.string().required('Schedulenum is required'),
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
                {/* <Grid sx={{height: '100%', alignItem: 'center', justifyContent: 'center'}}>
                <Grid xs={12} sm={6} lg={4} sx={{border:' 2px solid #000', boxShadow: 24}}>
                    <Grid container>
                        <Grid item>
                        
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> */}
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
                                Edit Schedule
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
                                            value={values.arr}
                                            onChange={handleChange}
                                            onBlur={handleBlur} error={Boolean(errors.arr && touched.arr)}
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
                                            type='date'
                                            value={values.arr_time}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
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
                                            value={values.capacity}
                                            onChange={handleChange}
                                            onBlur={handleBlur} error={Boolean(errors.capacity && touched.capacity)}
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
                                            type='date'
                                            fullWidth
                                            value={values.dep_time}
                                            onChange={handleChange}
                                            onBlur={handleBlur} error={Boolean(errors.dep_time && touched.dep_time)}
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
                                            value={values.des}
                                            onChange={handleChange}
                                            onBlur={handleBlur} error={Boolean(errors.des && touched.des)}
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
                                            disabled
                                            value={values.flightnum}
                                            onChange={handleChange}
                                            onBlur={handleBlur} error={Boolean(errors.flightnum && touched.flightnum)}
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

                                            id='schedulenum'
                                            label='Schedule Number'
                                            size='small'
                                            fullWidth
                                            disabled
                                            value={values.schedulenum}
                                            onChange={handleChange}
                                            onBlur={handleBlur} error={Boolean(errors.schedulenum && touched.schedulenum)}
                                            helperText={touched.schedulenum && errors.schedulenum}

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
            </Box>
        </Modal>
    )
}

export const DeleteModal = ({ delOpen = "false", onClose, delObj }) => {
    useEffect(() => {
        // if (editObj) {
        //   const { manufacturer,  model, aircraft_type, } = editObj;
        // //   const priviledgeArray = JSON.parse(priviledges);
        //   setFieldValue('manufacturer', manufacturer);
        //   setFieldValue(' model',  model);
        //   setFieldValue('aircraft_type', aircraft_type);
        // }
    }, [delObj]);

    const dispatch = useDispatch();
    console.log(delObj.airplaneid);
    const handleDelete = async () => {
        const response = await dispatch(DeleteScheduleAction(delObj.airplaneid))
        dispatch(GetScheduleAction());
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
                            // onClose={onClose}
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