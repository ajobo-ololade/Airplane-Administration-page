import { Card, CardContent, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { signUpRequest } from '../api/authRequest';

const Dashboard = () => {
    const [flights, setFlights] = useState([]);
    const [airplanes, setAirplanes] = useState([]);
    const [staffs, setStaffs] = useState([]);
    const [crews, setCrews] = useState([]);
    const [schedules, setSchedules] = useState([]);
    const [ratings, setRatings] = useState([]);
    const [airplaneTypes, setAirplaneTypes] = useState([]);
    const [passengers, setPassengers] = useState([]);
    useEffect(() => {
  
        axios.get(`http://127.0.0.1:8000/api/flight`).then((res) => {
            setFlights(res.data.flight)
            // console.log(res.data);
        })

        axios.get(`http://127.0.0.1:8000/api/airplane`).then((res) => {
            setAirplanes(res.data.airplane)
            // console.log(res.data);
        })

        axios.get(`http://127.0.0.1:8000/api/employee`).then((res) => {
            setStaffs(res.data.employee)
            // console.log(res.data);
        })
        
        axios.get(`http://127.0.0.1:8000/api/crew`).then((res) => {
            setCrews(res.data.crew)
            // console.log(res.data);
        })

        axios.get(`http://127.0.0.1:8000/api/schedule`).then((res) => {
            setSchedules(res.data.schedule)
            // console.log(res.data);
        })

        axios.get(`http://127.0.0.1:8000/api/rating`).then((res) => {
            setRatings(res.data.rating)
            // console.log(res.data);
        })

        axios.get(`http://127.0.0.1:8000/api/airplanetype`).then((res) => {
            setAirplaneTypes(res.data.airplanetype)
            // console.log(res.data);
        })

        axios.get(`http://127.0.0.1:8000/api/passenger`).then((res) => {
            setPassengers(res.data.passenger)
            // console.log(res.data);
        })

        // signUpRequest()
        
        
    }, [])

    const totals = [
        {
            label: "Total Number of  Staffs",
            num: staffs.length
        },
        {
            label: "Total Number of  Crews",
            num: crews.length
        },
        {
            label: "Total Number of  Airplanes",
            num: airplanes.length
        },
        {
            label: "Total Number of  Flights",
            num: flights.length
        },
        {
            label: "Total Number of  Schedules",
            num: schedules.length
        },
        {
            label: "Total Number of  Ratings",
            num: ratings.length
        },
        {
            label: "Total Number of  Airplane Types",
            num: airplaneTypes.length
        },
        {
            label: "Total Number of Passengers",
            num: passengers.length
        },
    ]
    return (
        <Grid container p={2}>
            {totals.map(({label, num}, id) => (
                <Grid xs={6} sm={3} p={1}>
                <Card>
                    <CardContent>
                        <Box>
                            <Typography variant='p'>
                                {label}
                            </Typography>
                            <Typography sx={{textAlign: 'center'}}>
                                {num}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
    )
}

export default Dashboard