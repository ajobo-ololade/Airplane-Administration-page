import { crewActionTypes, messageActionType } from "../types"

const initialState = {
    successMessage: '',
    errorMessage: '',
    CREW: [],

}

export const CrewReducers = (state = initialState, { type, payload }) => {
    // console.log(payload);
    switch (type) {

        case messageActionType.SUCCESS_MESSAGE:
            return {
                ...state,
                succcessMessage: payload,
            }

        case crewActionTypes.GET_CREW:
            return {
                ...state,
                CREW: payload,
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