import axios from ".";

export const getFlightRequest = () => axios.get(`flight`).then((res) => res.data);

export const addFlightRequest = (value) => axios.post(`flight`, value).then((res) => res.data);

export const editFlightRequest = (value) => axios.put(`flight/${value?.id}`, value).then((res) => res.data);

export const deleteFlightRequest = (value) => axios.delete(`flight/${value?.id}`, value);