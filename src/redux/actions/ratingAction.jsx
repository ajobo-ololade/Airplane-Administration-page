import { addRatingRequest, deleteRatingRequest, editRatingRequest, getRatingRequest } from "../../api/ratingsRequests";
import { ratingActionTypes, messageActionType } from "../types";

export const GetRatingAction = () => async (dispatch) => {

    try {
        const data = await getRatingRequest();
        console.log(data.rating);
        
        dispatch({
            type: ratingActionTypes.GET_RATING,
            payload: data?.rating,
        })


        return data;

    } catch (error) {
        console.log(error);
    }


}

export const AddRatingAction = (obj) => async (dispatch) => {
    try{
        const data = await addRatingRequest(obj);
        // console.log(data.message);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetRatingAction())
        }

        return data

    }catch(error) {
  console.log(error);
 }
}

export const EditRatingAction = (value) => async (dispatch) => {

    try{
        const data = await editRatingRequest(value);
        console.log(data.message);
        if(data?.message === true){

            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data.message,
            })

            dispatch(GetRatingAction())
        }

        return data

    }catch(error) {
  console.log(error);
 }
}

export const DeleteRatingAction = (value) => async (dispatch) => {
    
    try{
        const data = await deleteRatingRequest(value);
        console.log(data.message);
        // if(data?.message === true){

        //     dispatch({
        //         type: messageActionType.SUCCESS_MESSAGE,
        //         payload: data.message,
        //     })

        //     dispatch(GetRatingAction())
        // }

        return data

    }catch(error) {
  console.log(error);
 }
}