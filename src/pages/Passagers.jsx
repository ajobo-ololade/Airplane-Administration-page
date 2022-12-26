import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import { TableRows } from '@mui/icons-material';

const Passangers = () => {
  function createData(name, studentName, hostelName, roomNum) {
    return {
      name,
      studentName,
      hostelName,
      roomNum,
    };
  }

  const headerData = [
    {
      label: 'S/N',
    },
    {
        label: 'Student Name',
      },
    {
      label: 'Hostel Name',
    },
    {
      label: 'Room Number',
    },
    {
      label: 'Location',
    },
    {
      label: 'Edit',
    },
     {
      label: 'Delete',
    },
  ];

  const rows = [
    createData(1, 'John Doe', 'Cupcake', 305),
    createData(2, 'John Doe', 'Donut', 452,),
    createData(3, 'John Doe', 'Eclair', 262,),
    createData(4, 'John Doe', 'Frozen yoghurt', 159),
    createData(5, 'John Doe', 'Gingerbread', 356),
    createData(6, 'John Doe', 'Honeycomb', 408),
    createData(7, 'John Doe', 'Ice cream sandwich', 237),
    createData(8, 'John Doe', 'Jelly Bean', 375),
    createData(9, 'John Doe', 'KitKat', 518,),
    createData(10, 'John Doe', 'Lollipop', 392),
    createData(11, 'John Doe', 'Marshmallow', 3),
    createData(12, 'John Doe', 'Nougat', 360,),
    createData(13, 'John Doe', 'Oreo', 437,),
  ];

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
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headerData.map((data, id) => (
                <TableCell key={id} sx={{textAlign: 'center'}}>
                  {data.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ name,studentName, hostelName, roomNum }, id) => (
                  <TableRow key={id}>
                    <TableCell sx={{textAlign: 'center'}}>{name}</TableCell>
                    <TableCell sx={{textAlign: 'center'}}>{studentName}</TableCell>
                    <TableCell sx={{textAlign: 'center'}}>{hostelName}</TableCell>
                    <TableCell sx={{textAlign: 'center'}}>{roomNum}</TableCell>
                    <TableCell sx={{textAlign: 'center'}}>L.A</TableCell>
                    <TableCell sx={{textAlign: 'center'}}><EditIcon sx={{color: 'green'}}/></TableCell>
                    <TableCell sx={{textAlign: 'center'}}><DeleteIcon sx={{color: 'red'}}/></TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}

export default Passangers