import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { Navigate, Route, Routes } from 'react-router';
import DashboardLayout from './Layout/dashboard';
import AirplaneModule from './pages/AirplaneModule';
import FlightModules from './pages/FlightModule';
import StaffModules from './pages/StaffModule';
import Dashboard from './pages/Dashboard';
import PassengerModules from './pages/PassangerModule';
import CrewModule from './pages/CrewModule';
import AirplaneTypeModule from './pages/AirplaneTypeModule';
import RatingModule from './pages/RatingModule';
import ScheduleModule from './pages/ScheduleModule';

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path="/signIn" element={<Navigate to="/" />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/dashboard/" element={<DashboardLayout />}>
      <Route path="/dashboard/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/flights" element={<FlightModules />} />
        <Route path="/dashboard/passangers" element={<PassengerModules />} />
        <Route path="/dashboard/staffs" element={<StaffModules />} />
        <Route path="/dashboard/airplanes" element={<AirplaneModule />} />
        <Route path="/dashboard/crews" element={<CrewModule />} />
        <Route path="/dashboard/airplanetypes" element={<AirplaneTypeModule />} />
        <Route path="/dashboard/ratings" element={<RatingModule />} />
        <Route path="/dashboard/schedules" element={<ScheduleModule />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
