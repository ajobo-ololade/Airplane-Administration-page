import axios from "axios";
import { addFlightRequest, deleteFlightRequest, editFlightRequest, getFlightRequest } from "../../api/flightRequests";
import { flightActionTypes, FlightActionTypes, messageActionType } from "../types";
// import axios from ".";
// import axios from "../../api";

export const GetFlightAction = () => async (dispatch) => {

    try {
        const response = await getFlightRequest();
        // console.log(response.Flight);
        
        return dispatch({
            type: flightActionTypes.GET_FLIGHT,
            payload: response?.flight,
        })



        //     const response = await getFlightRequest();
        //     console.log(response);

        //     if (response?.status === 200) {

        // };
        // 
        // return response;

    } catch (error) {
        console.log(error);
    }


}

export const AddFlightAction = (obj) => async (dispatch) => {
    try{
        const response = await addFlightRequest(obj);
        // console.log(response.message);
        if(response?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: response.message,
            })

            dispatch(GetFlightAction())
        }

    }catch(error) {
  console.log(error);
 }
}

export const EditFlightAction = (value) => async (dispatch) => {

    try{
        const response = await editFlightRequest(value);
        console.log(response.message);
        if(response?.message.success === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: response.message,
            })

            dispatch(GetFlightAction())
        }

    }catch(error) {
  console.log(error);
 }
}

export const DeleteFlightAction = (value) => async (dispatch) => {
    
    try{
        const response = await deleteFlightRequest(value);
        console.log(response);
        if(response?.message.success === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: response.message,
            })

            dispatch(GetFlightAction())
        }

    }catch(error) {
  console.log(error);
 }
}