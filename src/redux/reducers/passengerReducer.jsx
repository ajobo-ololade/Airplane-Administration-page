import { passengerActionTypes, isLoadingType, messageActionType } from "../types"

const initialState = {
    successMessage: '',
    isLoading: false,
    PASSENGER: [],

}

export const PassengerReducers = (state = initialState, { type, payload }) => {
    // console.log(payload);
    switch (type) {

        case isLoadingType.IS_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case passengerActionTypes.GET_PASSENGER:
            return {
                ...state,
                PASSENGER: payload,
                isloading: false
            }

        case messageActionType.SUCCESS_MESSAGE:
            return {
                ...state,
                succcessMessage: "PAssenger add successfully",
            }

        default:
            return state;
    }
}