import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { Navigate, Route, Routes } from 'react-router';
import DashboardLayout from './Layout/dashboard';
import Passangers from './pages/PassangerModule/components/Passagers';
import AirplaneModule from './pages/AirplaneModule';
import FlightModules from './pages/FlightModule';
import StaffModules from './pages/StaffModule';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path="/signIn" element={<Navigate to="/" />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/dashboard/" element={<DashboardLayout />}>
      <Route path="/dashboard/index" element={<Dashboard />}></Route>
        <Route path="/dashboard/flights" element={<FlightModules />} />
        <Route path="/dashboard/passangers" element={<Passangers />} />
        <Route path="/dashboard/staffs" element={<StaffModules />} />
        <Route path="/dashboard/airplanes" element={<AirplaneModule />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
