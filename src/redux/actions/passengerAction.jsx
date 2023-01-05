import { addPasssengerRequest, deletePasssengerRequest, editPasssengerRequest, getPasssengerRequest } from "../../api/passengerRequest";
import { passengerActionTypes, messageActionType } from "../types";

export const GetPassengerAction = () => async (dispatch) => {

    try {
        const data = await getPasssengerRequest();
        // console.log(data.Passenger);
        
       dispatch({
            type: passengerActionTypes.GET_PASSENGER,
            payload: data?.passenger,
        })

        return data;

    } catch (error) {
        console.log(error);
    }


}

export const AddPassengerAction = (value) => async (dispatch) => {
    try{
        const data = await addPasssengerRequest(value);
        console.log(data);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetPassengerAction())
        }

        return data;

    }catch(error) {
  console.log(error);
 }
}

export const EditPassengerAction = (value) => async (dispatch) => {

    try{
        const data = await editPasssengerRequest(value);
        console.log(data.message);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetPassengerAction())
        }

        return data;

    }catch(error) {
  console.log(error);
 }
}

export const DeletePassengerAction = (value) => async (dispatch) => {
    
    try{
        const data = await deletePasssengerRequest(value);
        console.log(data);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetPassengerAction())
        }

        return data;

    }catch(error) {
  console.log(error);
 }
}