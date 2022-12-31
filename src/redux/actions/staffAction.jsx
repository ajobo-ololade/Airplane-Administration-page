import axios from "axios";
import { addStaffRequest, deleteStaffRequest, editStaffRequest, getStaffRequest } from "../../api/staffsRequest";
import { staffActionTypes, messageActionType } from "../types";

export const GetStaffAction = () => async (dispatch) => {

    try {
        const response = await getStaffRequest();
        console.log(response.employee);
        
        return dispatch({
            type: staffActionTypes.GET_STAFF,
            payload: response?.employee,
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
        const response = await addStaffRequest(obj);
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
        const response = await editStaffRequest(value);
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
        const response = await deleteStaffRequest(value);
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