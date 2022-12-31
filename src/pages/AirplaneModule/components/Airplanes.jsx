import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Box } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LinearProgress from '@mui/material/LinearProgress';
import Modals from '../../../components/Modal';
import { DeleteModal, EditModal } from './ModalComp';


const Airplane = () => {

    const { AIRPLANE, isLoading } = useSelector((state) => state.AirplaneReducers);

    // console.log(AIRPLANE);

    const headerData = [
        {
            label: `numser`,
        },
        {
            label: `manufacturer`,
        },
        {
            label: `model`,
        },
        {
            label: `aircraft Type`,
        },
        {
            label: 'Edit',
        },

        {
            label: 'Delete',
        },
    ];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [editOpen, setEditOpen] = React.useState(false);
    const [delOpen, setDelOpen] = React.useState(false);
    const [editObj, setEditObj] = React.useState({});
    const [delObj, setDelObj] = React.useState({});
    const edit = (e) => {
        setEditObj(e)
        handleEditOpen()
    }
    const del = (e) => {
        setDelObj(e)
        handleDelOpen()
    }
    console.log(delObj);
    const handleEditOpen = () => setEditOpen(true);
    const handleEditClose = () => setEditOpen(false);
    const handleDelOpen = () => setDelOpen(true);
    const handleDelClose = () => setDelOpen(false);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <>
            <EditModal editObj={editObj} onClose={handleEditClose} editOpen={editOpen} handleEditClose={handleEditClose} />
            <DeleteModal delObj={delObj} onClose={handleDelClose} delOpen={delOpen} />
            <TableContainer>
                {/* {isLoading === true ? <LinearProgress /> : null} */}
                
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {headerData.map((data, id) => (
                                <TableCell key={id} sx={{ textAlign: 'center', textTransform: 'capitalize' }}>
                                    {data.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {AIRPLANE.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((airplane, id) => (
                            <TableRow key={id}>
                                <TableCell sx={{ textAlign: 'center' }}>{airplane.numser}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{airplane.manufacturer}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{airplane.model}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{airplane.aircraft_type}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><EditIcon sx={{ color: 'green', cursor: 'pointer' }} onClick={(e) => edit(airplane)} /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><DeleteIcon sx={{ color: 'red', cursor: 'pointer' }} onClick={(e) => del(airplane)} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
                 {/* :
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>} */}
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={AIRPLANE.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )
}

export default Airplane