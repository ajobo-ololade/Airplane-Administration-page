import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { Navigate, Route, Routes } from 'react-router';
// import Home from './pages/Home';
import DashboardLayout from './Layout/dashboard';
// import { useState } from 'react';
import Flights from './pages/Flights';
import Passangers from './pages/Passagers';
import Staffs from './pages/Staffs';
import Airplanes from './pages/Airplanes';

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Login />} />
      {/* <Route path="/home" element={<Navigate to="/" />} /> */}
      <Route path="/signIn" element={<Navigate to="/" />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/dashboard/" element={<DashboardLayout />}>
        <Route path="/dashboard/flights" element={<Flights />} />
        <Route path="/dashboard/passangers" element={<Passangers />} />
        <Route path="/dashboard/staffs" element={<Staffs />} />
        <Route path="/dashboard/airplanes" element={<Airplanes />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
