import axios from "axios";
import { addFlightRequest, deleteFlightRequest, editFlightRequest, getFlightRequest } from "../../api/flightRequests";
import { flightActionTypes, messageActionType } from "../types";

export const GetFlightAction = () => async (dispatch) => {

    try {
        const data = await getFlightRequest();
        // console.log(data.Flight);
        
        dispatch({
            type: flightActionTypes.GET_FLIGHT,
            payload: data?.flight,
        })

        return data;

    } catch (error) {
        console.log(error);
    }


}

export const AddFlightAction = (value) => async (dispatch) => {
    try{
        const data = await addFlightRequest(value);
        // console.log(data);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: "Flight created successfully",
            })

            dispatch(GetFlightAction())
        }
        else{
            dispatch({
                 type: messageActionType.ERROR_MESSAGE,
                payload: "Invalid Credentials",
            })
        }

        return data

    }catch(error) {
  console.log(error);
 }
}

export const EditFlightAction = (value) => async (dispatch) => {

    try{
        const data = await editFlightRequest(value);
        console.log(data)

        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetFlightAction());
        }

        return data
    }catch(error) {
  console.log(error);
 }
}

export const DeleteFlightAction = (value) => async (dispatch) => {
    
    try{
        const data = await deleteFlightRequest(value);
        console.log(data);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetFlightAction())
        }
        return data
    }catch(error) {
  console.log(error);
 }
}