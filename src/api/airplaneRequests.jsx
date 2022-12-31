import axios from ".";

export const getAirplaneRequest = () => axios.get(`airplane`).then((res) => res.data);

export const addAirplaneRequest = (value) => axios.post(`airplane`, value).then((res) => res.data);

export const editAirplaneRequest = (value) => axios.put(`airplane/${value?.id}`, value).then((res) => res.data);

export const deleteAirplaneRequest = (value) => axios.delete(`airplane/${value?.id}`);