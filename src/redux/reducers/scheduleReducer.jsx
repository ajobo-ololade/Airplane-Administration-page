import { scheduleActionTypes, messageActionType } from "../types"

const initialState = {
    successMessage: '',
    errorMessage: '',
    SCHEDULE: [],

}

export const ScheduleReducers = (state = initialState, { type, payload }) => {
    // console.log(payload);
    switch (type) {

        case messageActionType.SUCCESS_MESSAGE:
            return {
                ...state,
                succcessMessage: payload,
            }

        case scheduleActionTypes.GET_SCHEDULE:
            return {
                ...state,
                SCHEDULE: payload, isloading: false
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