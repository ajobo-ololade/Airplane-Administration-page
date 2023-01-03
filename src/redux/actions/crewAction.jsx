import axios from "axios";
import { addCrewRequest, deleteCrewRequest, editCrewRequest, getCrewRequest } from "../../api/crewRequests";
import { crewActionTypes, messageActionType } from "../types";
// import axios from ".";
// import axios from "../../api";

export const GetCrewAction = () => async (dispatch) => {

    try {
        const data = await getCrewRequest();
        // console.log(data);
        
        dispatch({
            type: crewActionTypes.GET_CREW,
            payload: data?.crew,
        })


        return data;

    } catch (error) {
        console.log(error);
    }


}

export const AddCrewAction = (obj) => async (dispatch) => {
    try{
        const data = await addCrewRequest(obj);
        console.log(data);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetCrewAction())
        }

        return data
    }catch(error) {
  console.log(error);
 }
}

export const EditCrewAction = (id, value) => async (dispatch) => {

    try{
        const data = await editCrewRequest(id, value);
        console.log(data);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetCrewAction())
        }

        return data

    }catch(error) {
  console.log(error);
 }
}

export const DeleteCrewAction = (value) => async (dispatch) => {
    
    try{
        const data = await deleteCrewRequest(value);
        console.log(data);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetCrewAction())
        }

        return data

    }catch(error) {
  console.log(error);
 }
}