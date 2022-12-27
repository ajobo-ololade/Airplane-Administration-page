import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modals from '../components/Modal';
// import { getAirplaneRequest } from '../api/airplaneRequests';

const Staffs = () => {
  function createData(crewid, empnum, scheduleid, role) {
    return {
      crewid,
      empnum,
      scheduleid,
      role
    };
  }

  const headerData = [
    {
      label: `crew id`,
    },
    {
      label: `empnum`,
    },
    {
      label: `schedule id`,
    },
    {
      label: `role`,
    },
    {
      label: 'Edit',
    },
     {
      label: 'Delete',
    },
  ];

  const rows = [
    createData(1, 4, 8662, 'Pilot'),
    createData(2, 7, 8662, 'Copilot'),
    createData(3, 10, 8662, 'Flight attendant'),
    createData(4, 6, 8662, 'Flight attendant'),
    createData(5, 2, 8662, 'Flight attendant'),
    createData(6, 8, 7940, 'Pilot'),
    createData(7, 7, 7940, 'Copilot'),
    createData(8, 2, 7487, 'Flight attendant'),
    createData(9, 3, 7487, 'Flight attendant'),
    createData(10, 1, 7487, 'Flight attendant'),
    createData(11, 4, 8662, 'Pilot'),
    createData(12, 7, 8662, 'Copilot'),
    createData(13, 10, 8662, 'Flight attendant'),
    createData(14, 6, 8662, 'Flight attendant'),
    createData(15, 2, 8662, 'Flight attendant'),
    createData(16, 8, 7940, 'Pilot'),
    createData(17, 7, 7940, 'Copilot'),
    createData(18, 2, 7487, 'Flight attendant'),
    createData(19, 3, 7487, 'Flight attendant'),
    createData(20, 1, 7487, 'Flight attendant'),
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
  // const data = await getAirplaneRequest(values);
  // console.log(data);
  const fetchPromise = fetch('http://127.0.0.1:8000/api/airplane');

console.log(fetchPromise.body);

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });
  return (
    <>
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
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ crewid, empnum, scheduleid, role }, id) => (
              <TableRow key={id}>
                <TableCell sx={{ textAlign: 'center' }}>{crewid}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{empnum}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{scheduleid}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{role}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}><EditIcon sx={{ color: 'green', cursor: 'pointer' }} /></TableCell>
                <TableCell sx={{ textAlign: 'center' }}><DeleteIcon sx={{ color: 'red', cursor: 'pointer' }} /></TableCell>
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
      <Modals />
    </>
  )
}

export default Staffs