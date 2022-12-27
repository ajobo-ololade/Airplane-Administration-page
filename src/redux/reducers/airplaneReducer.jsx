import { airplaneActionTypes, messageActionType } from "../type";

const initialState = {

    successMessage: "",
    errorMessage: "",
    AIRPLANE: [],
    
}

export const chatsReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case messageActionType.SUCCESS_MESSAGE:
            return {
                ...state,
                successMessage: payload,
            }

        case airplaneActionTypes.GET_CHATS:
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