import axios from ".";

export const getEmployeeRequest = () => axios.get(`employee`).then((res) => res.data);

export const addEmployeeRequest = (obj) => axios.post(`employee`, obj).then((res) => res.data);

export const editEmployeeRequest = (value) => axios.put(`employee/${value?.id}`, value).then((res) => res.data);

export const deleteEmployeeRequest = (value) => axios.delete(`employee/${value?.id}`);