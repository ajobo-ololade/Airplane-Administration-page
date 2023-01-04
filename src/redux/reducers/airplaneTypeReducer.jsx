import { airplaneTypeActionTypes, messageActionType } from "../types"

const initialState = {
    successMessage: '',
    errorMessage: '',
    AIRPLANETYPE: [],

}

export const AirplaneTypeReducers = (state = initialState, { type, payload }) => {
    // console.log(payload);
    switch (type) {

        case messageActionType.SUCCESS_MESSAGE:
            return {
                ...state,
                succcessMessage: payload,
            }

        case airplaneTypeActionTypes.GET_AIRPLANETYPE:
            return {
                ...state,
                AIRPLANETYPE: payload,
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