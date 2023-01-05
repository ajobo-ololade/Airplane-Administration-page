import axios from "axios";
import { addStaffRequest, deleteStaffRequest, editStaffRequest, getStaffRequest } from "../../api/staffsRequest";
import { staffActionTypes, messageActionType } from "../types";

export const GetStaffAction = () => async (dispatch) => {

    try {
        const data = await getStaffRequest();
        // console.log(data.employee);
        
        dispatch({
            type: staffActionTypes.GET_STAFF,
            payload: data?.employee,
        })

        return data

    } catch (error) {
        console.log(error);
    }


}

export const AddStaffAction = (obj) => async (dispatch) => {
    try{
        const data = await addStaffRequest(obj);
        // console.log(data.message);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetStaffAction())
        }

        return data

    }catch(error) {
  console.log(error);
 }
}

export const EditStaffAction = (value) => async (dispatch) => {

    try{
        const data = await editStaffRequest(value);
        console.log(data.message);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetStaffAction())
        }

        return data

    }catch(error) {
  console.log(error);
 }
}

export const DeleteStaffAction = (value) => async (dispatch) => {
    
    try{
        const data = await deleteStaffRequest(value);
        console.log(data);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetStaffAction())
        }

        return data

    }catch(error) {
  console.log(error);
 }
}