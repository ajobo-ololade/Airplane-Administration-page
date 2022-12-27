import { getAirplaneRequest } from "../../api/airplaneRequests";
import { airplaneActionTypes } from "../types";

export const getAirplaneAction = (values) => async (dispatch) => {

    try {
        
        const data = await getAirplaneRequest(values);
        console.log(data);

        // if (data?.status === 200) {

        //     dispatch({
        //         type: airplaneActionTypes.GET_CHATS,
        //         payload: data.content.data.all,
        //     })
        // };

        return data;

    } catch (error) {
        console.log(error);
    }


}