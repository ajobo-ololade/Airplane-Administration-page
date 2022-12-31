import { staffActionTypes, isLoadingType, messageActionType } from "../types"

const initialState = {
    successMessage: '',
    isLoading: false,
    STAFF: [],

}

export const StaffReducers = (state = initialState, { type, payload }) => {
    // console.log(payload);
    switch (type) {

        case isLoadingType.IS_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case staffActionTypes.GET_STAFF:
            return {
                ...state,
                STAFF: payload,
                isloading: false
            }

        case messageActionType.SUCCESS_MESSAGE:
            return {
                ...state,
                succcessMessage: "Staff add successfully",
            }

        default:
            return state;
    }
}