import axios from ".";

export const signUpRequest = (reqObj) => axios.post(`issuer-staffs/issuers/create/issuer`, reqObj).then((res) => res.data);

export const loginRequest = (reqObj) => axios.post(`issuer-staffs/login/issuer-staff`, reqObj).then((res) => res.data); 