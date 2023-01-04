import axios from ".";

export const signUpRequest = (value) => axios.post(`register`, value).then((res) => res.data);

export const loginRequest = (value) => axios.post(`login`, value).then((res) => res.data); 