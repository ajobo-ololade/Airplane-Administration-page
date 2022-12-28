import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Box } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LinearProgress from '@mui/material/LinearProgress';
import Modals from '../../../components/Modal';
import { DeleteModal, EditModal } from './ModalComp';

// import Paper from '@mui/material/Paper';


const Staffs = ({ staffs }) => {
console.log(staffs);
    const headerData = [
        {
            label: `S/N`,
        },
        {
            label: `surname`,
        },
        {
            label: `name`,
        },
        {
            label: `address`,
        },
        
        {
          label: `phone`,
      },
      {
          label: `rating id`,
      },
      {
          label: `salary`,
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
         <EditModal editObj={editObj} onClose={handleEditClose} editOpen={editOpen} />
         <DeleteModal delObj={delObj} onClose={handleDelClose} delOpen={delOpen} />
            <TableContainer>
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
                    {staffs ?
                        <TableBody>
                            {staffs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((staff, id) => (
                                <TableRow key={id}>
                                    <TableCell sx={{ textAlign: 'center' }}>{staff.empnum}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{staff.surname}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{staff.name}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{staff.address}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{staff.phone}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{staff.ratingid}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{staff.salary}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}><EditIcon sx={{ color: 'green', cursor: 'pointer' }} onClick={(e) => edit(staff)} /></TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}><DeleteIcon sx={{ color: 'red', cursor: 'pointer' }} onClick={(e) => del(staff)} /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        :
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress />
                        </Box>
                    }
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={staffs.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )
}

export default Staffs