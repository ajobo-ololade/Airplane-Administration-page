import { flightActionTypes, isLoadingType, messageActionType } from "../types"

const initialState = {
    successMessage: '',
    isLoading: false,
    FLIGHT: [],

}

export const FlightReducers = (state = initialState, { type, payload }) => {
    // console.log(payload);
    switch (type) {

        case isLoadingType.IS_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case flightActionTypes.GET_FLIGHT:
            return {
                ...state,
                FLIGHT: payload,
                isloading: false
            }

        case messageActionType.SUCCESS_MESSAGE:
            return {
                ...state,
                succcessMessage: "Flight add successfully",
            }

        default:
            return state;
    }
}