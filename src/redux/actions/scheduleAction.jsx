import { addScheduleRequest, deleteScheduleRequest, editScheduleRequest, getScheduleRequest } from "../../api/scheduleRequests";
import { scheduleActionTypes, messageActionType } from "../types";

export const GetScheduleAction = () => async (dispatch) => {

    try {
        const data = await getScheduleRequest();
        console.log(data);
        
        dispatch({
            type: scheduleActionTypes.GET_SCHEDULE,
            payload: data?.schedule,
        })

        return data;

    } catch (error) {
        console.log(error);
    }


}

export const AddScheduleAction = (obj) => async (dispatch) => {
    try{
        const data = await addScheduleRequest(obj);
        console.log(data);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetScheduleAction())
        }

        return data;

    }catch(error) {
  console.log(error);
 }
}

export const EditScheduleAction = (value) => async (dispatch) => {

    try{
        const data = await editScheduleRequest(value);
        console.log(data);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetScheduleAction())
        }

        return data;

    }catch(error) {
  console.log(error);
 }
}

export const DeleteScheduleAction = (value) => async (dispatch) => {
    
    try{
        const data = await deleteScheduleRequest(value);
        console.log(data);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetScheduleAction())
        }

        return data;

    }catch(error) {
  console.log(error);
 }
}