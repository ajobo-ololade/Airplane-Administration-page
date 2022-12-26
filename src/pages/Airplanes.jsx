import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import { TableRows } from '@mui/icons-material';


const Airplane = () => {
    function createData(numser, manufacturer, model, typeid, capacity, manu_date) {
        return {
            numser,
            manufacturer,
            model,
            typeid,
            capacity,
            manu_date
        };
    }

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
            label: `typeid`,
        },
        {
            label: `capacity`,
        },
        {
            label: `manu date`,
        },
    ];

    const rows = [
        createData(3, 'Global', '6000', 1, 500, 1000),
        createData(4, 'Hawker Bee', '800XP', 1, 650, 2000),
        createData(5, 'Global', 'G150', 2, 500, 1978),
        createData(6, 'Hawker Beechcraft', '800XP', 1, 650, 2007),
        createData(3, 'Global', '6000', 1, 500, 3000),
        createData(4, 'Hawker Bee', '800XP', 1, 650, 4000),
        createData(5, 'Global', 'G150', 2, 500, 1978),
        createData(6, 'Hawker Beechcraft', '800XP', 1, 650, 2007),
        createData(3, 'Global', '6000', 1, 500, 5000),
        createData(4, 'Hawker Bee', '800XP', 1, 650, 6000),
        createData(5, 'Global', 'G150', 2, 500, 1978),
        createData(6, 'Hawker Beechcraft', '800XP', 1, 650, 2007),
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
                                <TableCell key={id} sx={{ textAlign: 'center', textTransform: 'capitalize' }}>
                                    {data.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ numser, manufacturer, model, typeid, capacity, manu_date }, id) => (
                            <TableRow key={id}>
                                <TableCell sx={{ textAlign: 'center' }}>{numser}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{manufacturer}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{model}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{typeid}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{capacity}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{manu_date}</TableCell>
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

export default Airplane