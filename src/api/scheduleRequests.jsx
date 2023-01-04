import axios from ".";

export const getScheduleRequest = () => axios.get(`schedule`).then((res) => res.data);

export const addScheduleRequest = (value) => axios.post(`schedule`, value).then((res) => res.data);

export const editScheduleRequest = (value) => axios.put(`schedule/${value?.id}`, value).then((res) => res.data);

export const deleteScheduleRequest = (value) => axios.delete(`schedule/${value?.id}`);