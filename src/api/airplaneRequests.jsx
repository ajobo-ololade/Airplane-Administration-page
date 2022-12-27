import axios from ".";

export const getAirplaneRequest = (values) => axios.get(`airplane`, values).then((res) => res.data);