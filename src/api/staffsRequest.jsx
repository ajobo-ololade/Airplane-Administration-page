import axios from ".";

export const getStaffRequest = () => axios.get(`employee`).then((res) => res.data);

export const addStaffRequest = (obj) => axios.post(`employee`, obj).then((res) => res.data);

export const editStaffRequest = (value) => axios.put(`employee/${value?.id}`, value).then((res) => res.data);

export const deleteStaffRequest = (value) => axios.delete(`employee/${value}`);