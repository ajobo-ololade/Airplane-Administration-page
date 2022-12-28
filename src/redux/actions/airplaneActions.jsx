import axios from "axios";
import { getAirplaneRequest } from "../../api/airplaneRequests";
import { airplaneActionTypes } from "../types";
// import axios from ".";
// import axios from "../../api";

export const getAirplaneAction = () => async (dispatch) => {

    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/airplane`);
        
        return dispatch({
            type: airplaneActionTypes.GET_AIRPLANE,
            payload: response.data,
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