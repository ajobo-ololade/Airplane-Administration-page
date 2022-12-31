import axios from "axios";
import { addPasssengerRequest, deletePasssengerRequest, editPasssengerRequest, getPasssengerRequest } from "../../api/passengerRequest";
import { staffActionTypes, messageActionType } from "../types";

export const GetStaffAction = () => async (dispatch) => {

    try {
        const response = await getPasssengerRequest();
        // console.log(response.Staff);
        
        return dispatch({
            type: staffActionTypes.GET_STAFF,
            payload: response?.staff,
        })



        //     const response = await getStaffRequest();
        //     console.log(response);

        //     if (response?.status === 200) {

        // };
        // 
        // return response;

    } catch (error) {
        console.log(error);
    }


}

export const AddStaffAction = (obj) => async (dispatch) => {
    try{
        const response = await addPasssengerRequest(obj);
        // console.log(response.message);
        if(response?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: response.message,
            })

            dispatch(GetStaffAction())
        }

    }catch(error) {
  console.log(error);
 }
}

export const EditStaffAction = (value) => async (dispatch) => {

    try{
        const response = await editPasssengerRequest(value);
        console.log(response.message);
        if(response?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: response.message,
            })

            dispatch(GetStaffAction())
        }

    }catch(error) {
  console.log(error);
 }
}

export const DeleteStaffAction = (value) => async (dispatch) => {
    
    try{
        const response = await deletePasssengerRequest(value);
        console.log(response.message);
        if(response?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: response.message,
            })

            dispatch(GetStaffAction())
        }

    }catch(error) {
  console.log(error);
 }
}