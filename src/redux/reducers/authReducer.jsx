import { airplaneActionTypes, isLoadingType, messageActionType } from "../types"

const initialState = {
    successMessage: '',
    errorMessage: '',
    isLoading: false,
    AIRPLANE: [],

}

export const AuthReducers = (state = initialState, { type, payload }) => {
    // console.log(payload);
    switch (type) {

        case airplaneActionTypes.GET_AIRPLANE:
            return {
                ...state,
                AIRPLANE: payload,
                isloading: false
            }

        case messageActionType.SUCCESS_MESSAGE:
            return {
                ...state,
                succcessMessage: payload,
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