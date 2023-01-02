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
        const data = await addFlightRequest(obj);
        console.log(data);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetFlightAction())
        }
        else{
            dispatch({
                 type: messageActionType.ERROR_MESSAGE,
                payload: data.message,
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
        console.log(data.message);
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

export const DeleteFlightAction = (value) => async (dispatch) => {
    
    try{
        const data = await deleteFlightRequest(value);
        console.log(data);
        // if(data?.message === true){

        //     dispatch({
        //         type: messageActionType.SUCCESS_MESSAGE,
        //         payload: data.message,
        //     })

        //     dispatch(GetFlightAction())
        // }
        return data
    }catch(error) {
  console.log(error);
 }
}