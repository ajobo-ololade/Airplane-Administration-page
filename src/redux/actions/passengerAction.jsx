import axios from "axios";
import { addPasssengerRequest, deletePasssengerRequest, editPasssengerRequest, getPasssengerRequest } from "../../api/passengerRequest";
import { passengerActionTypes, messageActionType } from "../types";

export const GetPassengerAction = () => async (dispatch) => {

    try {
        const response = await getPasssengerRequest();
        // console.log(response.Passenger);
        
        return dispatch({
            type: passengerActionTypes.GET_PASSENGER,
            payload: response?.passenger,
        })



        //     const response = await getPassengerRequest();
        //     console.log(response);

        //     if (response?.status === 200) {

        // };
        // 
        // return response;

    } catch (error) {
        console.log(error);
    }


}

export const AddPassengerAction = (obj) => async (dispatch) => {
    try{
        console.log('je')
        console.log(obj)
        const response = await addPasssengerRequest(obj);
        // console.log(response.message);
        if(response?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: response.message,
            })

            dispatch(GetPassengerAction())
        }

    }catch(error) {
  console.log(error);
 }
}

export const EditPassengerAction = (value) => async (dispatch) => {

    try{
        const response = await editPasssengerRequest(value);
        console.log(response.message);
        if(response?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: response.message,
            })

            dispatch(GetPassengerAction())
        }

    }catch(error) {
  console.log(error);
 }
}

export const DeletePassengerAction = (value) => async (dispatch) => {
    
    try{
        const response = await deletePasssengerRequest(value);
        console.log(response.message);
        if(response?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: response.message,
            })

            dispatch(GetPassengerAction())
        }

    }catch(error) {
  console.log(error);
 }
}