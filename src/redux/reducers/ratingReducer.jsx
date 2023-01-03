import { ratingActionTypes, messageActionType } from "../types"

const initialState = {
    successMessage: '',
    errorMessage: '',
    RATING: [],

}

export const RatingReducers = (state = initialState, { type, payload }) => {
    // console.log(payload);
    switch (type) {

        case messageActionType.SUCCESS_MESSAGE:
            return {
                ...state,
                succcessMessage: payload,
            }

        case ratingActionTypes.GET_RATING:
            return {
                ...state,
                RATING: payload,
                isloading: false
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