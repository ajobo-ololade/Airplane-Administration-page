import { flightActionTypes, isLoadingType, messageActionType } from "../types"

const initialState = {
    successMessage: '',
    errorMessage: '',
    FLIGHT: [],

}

export const FlightReducers = (state = initialState, { type, payload }) => {
    // console.log(payload);
    switch (type) {

        case messageActionType.SUCCESS_MESSAGE:
            return {
                ...state,
                succcessMessage: "Flight created successfully",
            }

        case flightActionTypes.GET_FLIGHT:
            return {
                ...state,
                FLIGHT: payload,
                isloading: false
            }

            case messageActionType.Error_MESSAGE:
                return {
                    ...state,
                    errorMessage: "Invalid Credentials",
                }


        default:
            return state;
    }
}