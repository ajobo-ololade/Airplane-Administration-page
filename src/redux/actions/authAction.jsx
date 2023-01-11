import { loginRequest, signUpRequest } from "../../api/authRequest";
import { storageSet } from "../../utils/utilities";
import { messageActionType } from "../types";


export const LoginAction = (value) => async (dispatch) => {
  try {
   
    const data = await loginRequest(value);
    console.log(data)
    if (data?.status === 'success') {
      storageSet("token", data.authorisation.token);
      // storageSet("data", data.user);
      dispatch({
        type: messageActionType.SUCCESS_MESSAGE,
        payload: data.status,
      });
    } else {
      dispatch({
        type: messageActionType.ERROR_MESSAGE,
        payload: data.status,
      });
    }
    
    return data
  } catch (error) {
    console.log(error);
    return error
  }
};

export const signUpAction = (obj) => async (dispatch) => {
  try{

      const data = await signUpRequest(obj);
      console.log(data);
      
      // extract success
      if (data?.success === true) {

          dispatch({
              type: messageActionType.SUCCESS_MESSAGE,
              payload: data?.message,
          });

      }
      
      // extract error
      else{
          dispatch({
              type: messageActionType.ERROR_MESSAGE,
              payload: data?.message,
          })
      }

      return data

 }catch(error) {
  console.log(error);
 }
}
