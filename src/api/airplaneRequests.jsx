import axios from ".";

export const getAirplaneRequest = () => axios.get(`airplane`).then((res) => res.data);

export const addAirplaneRequest = (obj) => axios.post(`airplane`, obj).then((res) => res.data);