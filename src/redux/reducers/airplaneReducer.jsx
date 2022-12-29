import { airplaneActionTypes, messageActionType } from "../types"

const initialState = {

    successMessage: "",
    errorMessage: "",
    AIRPLANE: [],
    
}

export const AirplaneReducers = (state = initialState, { type, payload }) => {
// console.log(payload);
    switch (type) {

        case messageActionType.SUCCESS_MESSAGE:
            return {
                ...state,
                successMessage: payload,
            }

        case airplaneActionTypes.GET_AIRPLANE:
            return {
                ...state,
                AIRPLANE: payload
            }

        case messageActionType.ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: payload,
            }

        default:
            return state;
    }
}