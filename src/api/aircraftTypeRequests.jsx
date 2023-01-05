import axios from ".";

export const getAirplaneTypeRequest = () => axios.get(`airplanetype`).then((res) => res.data);

export const addAirplaneTypeRequest = (value) => axios.post(`airplanetype`, value).then((res) => res.data);

export const editAirplaneTypeRequest = (value) => axios.put(`airplanetype/${value?.id}`, value).then((res) => res.data);

export const deleteAirplaneTypeRequest = (value) => axios.delete(`airplanetype/${value}`);