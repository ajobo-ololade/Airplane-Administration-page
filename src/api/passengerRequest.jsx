import axios from ".";

export const getPasssengerRequest = () => axios.get(`passenger`).then((res) => res.data);

export const addPasssengerRequest = (value) => axios.post(`passenger`, value).then((res) => res.data);

export const editPasssengerRequest = (value) => axios.put(`passenger/${value?.id}`, value).then((res) => res.data);

export const deletePasssengerRequest = (value) => axios.delete(`passenger/${value?.id}`);