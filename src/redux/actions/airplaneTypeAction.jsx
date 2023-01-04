import { addAirplaneTypeRequest, deleteAirplaneTypeRequest, editAirplaneTypeRequest, getAirplaneTypeRequest } from "../../api/aircraftTypeRequests";
import { airplaneTypeActionTypes, messageActionType } from "../types";


export const GetAirplaneTypeAction = () => async (dispatch) => {

    try {
        const data = await getAirplaneTypeRequest();
        console.log(data.airplanetype);

        dispatch({
            type: airplaneTypeActionTypes.GET_AIRPLANETYPE,
            payload: data?.airplanetype,
        })

        return data;

    } catch (error) {
        console.log(error);
    }


}

export const AddAirplaneTypeAction = (obj) => async (dispatch) => {
    try {
        const data = await addAirplaneTypeRequest(obj);
        // console.log(data.message);
        if (data?.message === true) {

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetAirplaneTypeAction())
        }

        return data;

    } catch (error) {
        console.log(error);
    }
}

export const EditAirplaneTypeAction = (id, value) => async (dispatch) => {

    try {
        const data = await editAirplaneTypeRequest(id, value);
        console.log(data.message);
        if (data?.message === true) {

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetAirplaneTypeAction())
        }

        return data;
    } catch (error) {
        console.log(error);
    }
}

export const DeleteAirplaneTypeAction = (value) => async (dispatch) => {

    try {
        const data = await deleteAirplaneTypeRequest(value);
        console.log(data.message);
        if (data?.message === true) {

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetAirplaneTypeAction())
        }

        return data;
    } catch (error) {
        console.log(error);
    }
}