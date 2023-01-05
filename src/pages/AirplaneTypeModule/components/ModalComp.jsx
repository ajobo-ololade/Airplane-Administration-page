import { Avatar, Button, Card, CardContent, Grid, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DeleteAirplaneTypeAction, EditAirplaneTypeAction, GetAirplaneTypeAction } from "../../../redux/actions/airplaneTypeAction";
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
            const { name } = editObj;
            setFieldValue('name', name);
        }
    }, [editObj]);

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {

            name: '',
        },

        onSubmit: async (values, { resetForm, setSubmitting }) => {
            values.id = editObj.numser
            console.log(values);
            const response = await dispatch(EditAirplaneTypeAction(values));
            dispatch(GetAirplaneTypeAction());

            resetForm();
            handleEditClose();

        },

        validationSchema: Yup.object().shape({
            name: Yup.string().required('Name is required'),
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
                                Edit Airplane
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

export const DeleteModal = ({ delOpen = "false", onClose, delObj }) => {
    useEffect(() => {}, [delObj]);

    const dispatch = useDispatch();
    console.log(delObj.numser);
    const handleDelete = async () => {
        const response = await dispatch(DeleteAirplaneTypeAction(delObj.numser))
        dispatch(GetAirplaneTypeAction());
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