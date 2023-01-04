import axios from ".";

export const getCrewRequest = () => axios.get(`crew`).then((res) => res.data);

export const addCrewRequest = (value) => axios.post(`crew`, value).then((res) => res.data);

export const editCrewRequest = (value) => axios.put(`crew/${value?.id}`, value).then((res) => res.data);

export const deleteCrewRequest = (value) => axios.delete(`crew/${value?.id}`);