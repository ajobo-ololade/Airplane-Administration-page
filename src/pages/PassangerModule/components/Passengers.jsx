import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import { TableRows } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { EditModal, DeleteModal } from '../../PassangerModule/components/ModalComp';

const Passengers = () => {
  const { PASSENGER } = useSelector((state) => state.PassengerReducers);

  // console.log(PASSENGER);

  const headerData = [

    {
      label: 'Pass ID',
    },
    {
      label: 'Surname',
    },
    {
      label: 'Other Name',
    },
    {
      label: 'Address',
    },

    {
      label: 'Phone No',
    },

    {
      label: 'Schedule No',
    },
    {
      label: 'Edit',
    },
    {
      label: 'Delete',
    },
  ];

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
  // console.log(delObj);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);
  const handleDelOpen = () => setDelOpen(true);
  const handleDelClose = () => setDelOpen(false);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
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
      <DeleteModal delObj={delObj} onClose={handleDelClose} delOpen={delOpen} handleDelClose={handleDelClose} />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headerData.map((data, id) => (
                <TableCell key={id} sx={{ textAlign: 'center' }}>
                  {data.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {PASSENGER.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((passenger, id) => (
              <TableRow key={id}>
                <TableCell sx={{ textAlign: 'center' }}>{passenger.pasID}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{passenger.surname}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{passenger.othername}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{passenger.address}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{passenger.phone}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{passenger.schedulenum}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}><EditIcon sx={{ color: 'green', cursor: 'pointer' }} onClick={(e) => edit(passenger)} /></TableCell>
                <TableCell sx={{ textAlign: 'center' }}><DeleteIcon sx={{ color: 'red', cursor: 'pointer' }} onClick={(e) => del(passenger)} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={PASSENGER.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}

export default Passengers