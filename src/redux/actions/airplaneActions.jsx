import axios from "axios";
import { addAirplaneRequest, getAirplaneRequest } from "../../api/airplaneRequests";
import { airplaneActionTypes, messageActionType } from "../types";
// import axios from ".";
// import axios from "../../api";

export const GetAirplaneAction = () => async (dispatch) => {

    try {
        const response = await getAirplaneRequest();
        // console.log(response.airplane);
        
        return dispatch({
            type: airplaneActionTypes.GET_AIRPLANE,
            payload: response?.airplane,
        })



        //     const response = await getAirplaneRequest();
        //     console.log(response);

        //     if (response?.status === 200) {

        // };
        // 
        // return response;

    } catch (error) {
        console.log(error);
    }


}

export const AddAirplaneAction = (obj) => async (dispatch) => {
    try{
        const response = await addAirplaneRequest(obj);
        // console.log(response.message);
        if(response?.message === true){
            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: response.message,
            })
        }

    }catch(error) {
  console.log(error);
 }
}