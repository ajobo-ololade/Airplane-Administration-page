import { Card, CardContent, Grid, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { signUpRequest } from '../api/authRequest';
import { useDispatch, useSelector } from 'react-redux';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import AccessibleIcon from '@mui/icons-material/Accessible';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FlightIcon from '@mui/icons-material/Flight';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import StarsIcon from '@mui/icons-material/Stars';
import { ChartTest } from './test';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
    const [flights, setFlights] = useState([]);
    const [airplanes, setAirplanes] = useState([]);
    const [staffs, setStaffs] = useState([]);
    const [crews, setCrews] = useState([]);
    const [schedules, setSchedules] = useState([]);
    const [ratings, setRatings] = useState([]);
    const [airplaneTypes, setAirplaneTypes] = useState([]);
    const [passengers, setPassengers] = useState([]);
    const Data = [{ label: 'flight', data: flights.length },]
    const data = {
        labels: ['Flight', 'Airplane', 'Crew', 'Schedule', 'Ratings', 'Passengers', 'Employee', 'AirplaneTypes'],
        datasets: [
            {
                label: 'Total',
                data: [flights.length, airplanes.length, crews.length, schedules.length, ratings.length, passengers.length, staffs.length, airplaneTypes.length],
                backgroundColor: [
                    '#ffebee',
                    '#560027',
                    '#003300',
                    '#ffff00',
                    '#ff6f00',
                    '#212121',
                    '#ffab00',
                    '#004d40',
                ],
                borderColor: [
                    '#ffcccb',
                    '#bc477b',
                    '#4c8c4a',
                    '#ffff5a',
                    '#ffa040',
                    '#484848',
                    '#ffdd4b',
                    '#39796b',
                ],
                borderWidth: 1,
            },
        ],
    };


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
            num: staffs.length,
            icon: <PersonIcon />
        },
        {
            label: "Total Number of  Crews",
            num: crews.length,
            icon: <AccessibleIcon />
        },
        {
            label: "Total Number of  Airplanes",
            num: airplanes.length,
            icon: <FlightTakeoffIcon />
        },
        {
            label: "Total Number of  Flights",
            num: flights.length,
            icon: <FlightIcon />
        },
        {
            label: "Total Number of  Schedules",
            num: schedules.length,
            icon: <ListAltIcon />
        },
        {
            label: "Total Number of  Ratings",
            num: ratings.length,
            icon: <StarsIcon />
        },
        {
            label: "Total Number of  Airplane Types",
            num: airplaneTypes.length,
            icon: <ConnectingAirportsIcon />
        },
        {
            label: "Total Number of Passengers",
            num: passengers.length,
            icon: <GroupsIcon />
        },
    ]
    return (
        <>
            <Grid container p={2}>
                {totals.map(({ label, num, icon }, id) => (
                    <Grid xs={6} sm={3} p={1}>
                        <Card>
                            <CardContent>
                                <Box x={{margin:'auto'}}>
                                    <List sx={{ xs:{width:'50%', margin: 'auto',}, sm:{width:'100%'},   bgcolor: 'background.paper' }}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    {/* <ImageIcon /> */}
                                                    {icon}
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={num} secondary=""/>
                                        </ListItem>
                                    </List>
                                    <Typography variant='p' sx={{ textAlign: 'center' }}>
                                        {label}
                                    </Typography>
                                    {/* <Typography sx={{ textAlign: 'center' }}>
                                       
                                        {num}
                                    </Typography> */}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Grid container>
                <Grid xs={12} sm={6} sx={{ margin: 'auto' }}>
                    <Pie data={data} />
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard