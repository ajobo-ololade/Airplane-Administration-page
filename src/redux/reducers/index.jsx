import { combineReducers } from "redux";
import { AirplaneReducers } from './airplaneReducer'
import { FlightReducers } from './flightReducer'
import { PassengerReducers } from "./passengerReducer";
import { StaffReducers } from "./staffReducer";
import { AuthReducers } from "./authReducer"
import { AirplaneTypeReducers } from "./airplaneTypeReducer"
import { RatingReducers } from "./ratingReducer"
import { ScheduleReducers } from "./scheduleReducer"
import { CrewReducers } from "./crewReducer"

export const reducers = combineReducers({
    AirplaneReducers,
    FlightReducers,
    PassengerReducers,
    StaffReducers,
    AuthReducers,
    AirplaneTypeReducers,
    RatingReducers,
    ScheduleReducers,
    CrewReducers,
});