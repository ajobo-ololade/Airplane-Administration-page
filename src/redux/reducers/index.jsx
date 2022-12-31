import { combineReducers } from "redux";
import { AirplaneReducers } from './airplaneReducer'
import { FlightReducers } from './flightReducer'
import { PassengerReducers } from "./passengerReducer";
import { StaffReducers } from "./staffReducer";

export const reducers = combineReducers({
    AirplaneReducers,
    FlightReducers,
    PassengerReducers,
    StaffReducers,
});