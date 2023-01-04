import axios from ".";

export const getRatingRequest = () => axios.get(`rating`).then((res) => res.data);

export const addRatingRequest = (value) => axios.post(`rating`, value).then((res) => res.data);

export const editRatingRequest = (value) => axios.put(`rating/${value?.id}`, value).then((res) => res.data);

export const deleteRatingRequest = (value) => axios.delete(`rating/${value?.id}`);