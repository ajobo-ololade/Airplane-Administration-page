import axios from "axios";
import { addAirplaneRequest, deleteAirplaneRequest, editAirplaneRequest, getAirplaneRequest } from "../../api/airplaneRequests";
import { airplaneActionTypes, messageActionType } from "../types";
// import axios from ".";
// import axios from "../../api";

export const GetAirplaneAction = () => async (dispatch) => {

    try {
        const data = await getAirplaneRequest();
        // console.log(data.airplane);
        
       dispatch({
            type: airplaneActionTypes.GET_AIRPLANE,
            payload: data?.airplane,
        })

        return data

    } catch (error) {
        console.log(error);
    }


}

export const AddAirplaneAction = (obj) => async (dispatch) => {
    try{
        const data = await addAirplaneRequest(obj);
        // console.log(data.message);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetAirplaneAction())
        }

        return data

    }catch(error) {
  console.log(error);
 }
}

export const EditAirplaneAction = (value) => async (dispatch) => {

    try{
        const data = await editAirplaneRequest(value);
        console.log(data.message);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetAirplaneAction())
        }

        return data

    }catch(error) {
  console.log(error);
 }
}

export const DeleteAirplaneAction = (value) => async (dispatch) => {
    
    try{
        const data = await deleteAirplaneRequest(value);
        console.log(data);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetAirplaneAction())
        }

        return data

    }catch(error) {
  console.log(error);
 }
}