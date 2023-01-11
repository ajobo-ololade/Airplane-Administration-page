import { Avatar, Button, Card, CardContent, Grid, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import { DeletePassengerAction, EditPassengerAction, GetPassengerAction } from "../../../redux/actions/passengerAction";

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
            const { surname, othername, adress, phone, schedulenum } = editObj;
            setFieldValue('surname', surname);
            setFieldValue(' othername', othername);
            setFieldValue('adress', adress);
            setFieldValue('phone', phone);
            setFieldValue('schedulenum', schedulenum);
        }
    }, [editObj]);

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {

            surname: '',
            othername: '',
            adress: '',
            phone: '',
            schedulenum: ''
        },

        onSubmit: async (values, { resetForm, setSubmitting }) => {
            values.id = editObj.pasID
            console.log(editObj.pasID);
            const response = await dispatch(EditPassengerAction(values));
            console.log(response);
            if (response?.message.success === true) {
                dispatch(GetPassengerAction())
            }
            resetForm();
            handleEditClose();

        },

        validationSchema: Yup.object().shape({
            surname: Yup.string().required('Surname date is required'),
            address: Yup.string().required('Address is required'),
            othername: Yup.string().required('Other name Type is required'),
            phone: Yup.string().required('Phone No Type is required'),
            schedulenum: Yup.string().required('Schedule No Type is required'),
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
                                Edit Passenger
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

                                            id='othername'
                                            label='Other Name'
                                            size='small'
                                            fullWidth
                                            value={values.othername}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.othername && touched.othername)}
                                            helperText={touched.othername && errors.othername}

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
                                            label='Phone No'
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

                                            id='schedulenum'
                                            label='Schedule No'
                                            size='small'
                                            fullWidth
                                            value={values.schedulenum}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.schedulenum && touched.schedulenum)}
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
    const dispatch = useDispatch()
    const handleDelete = async () => {
        const pasID = delObj.pasID
        console.log(pasID);
        const response = await dispatch(DeletePassengerAction(pasID))
        console.log(response);
        dispatch(GetPassengerAction())
        handleDelClose()
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