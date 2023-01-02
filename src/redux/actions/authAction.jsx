import { loginRequest, signUpRequest } from "../../api/authRequest";
import { messageActionType } from "../types";


export const LoginAction = (values) => async (dispatch) => {
  try {
    // dispatch({
    //   type: loadTypes.ISLOADING,
    // });
    const data = await loginRequest(values);
    console.log(data)
    // if (data?.success) {
    //   storageSet("token", data.content.token);
    //   dispatch({
    //     type: loginResponseTypes.SUCCESS,
    //     payload: data.success.message,
    //   });
    // } else {
    //   dispatch({
    //     type: loginResponseTypes.ERROR,
    //     payload: data.error.message,
    //   });
    // }
    // dispatch({
    //   type: loadTypes.LOAD_DONE,
    // });
    return data
  } catch (error) {
    // dispatch({
    //   type: loginResponseTypes.ERROR,
    //   payload: error.message,
    // });
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
