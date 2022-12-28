import { Box, Grid } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Staffs from './components/Staffs';

const StaffModules = () => {

    const [staffs, setStaffs] = useState([]);
    useEffect(() => {
  
        axios.get(`http://127.0.0.1:8000/api/employee`).then((res) => {
            setStaffs(res.data.employee)
            // console.log(res.data);
        })
      
    }, [])

  return (
    <Grid container sx={{padding: '2rem'}}>
    <Grid item xs={12} sm={12}>
      <Box>
        {/* <NewFlights /> */}
      </Box>
    </Grid>
    <Grid item xs={12} sm={12}>
      <Box>
        <Staffs staffs={staffs} />
      </Box>
    </Grid>
  </Grid>
  )
}

export default StaffModules