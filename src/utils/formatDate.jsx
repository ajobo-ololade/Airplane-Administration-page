import { format, fromUnixTime, subDays, getUnixTime, } from "date-fns";

export const fDateTime = (date) => format(new Date(fromUnixTime(date)), 'MMM dd, yyyy, h:mm a');

export const fTime = (date) => format(new Date(fromUnixTime(date)), 'h:mm a');

export const getToday = () => format(new Date(), 'MMM dd, yyyy');

export const getADayAgo = () => getUnixTime(subDays(new Date(), 1));

export const fDate = (date) => format(new Date(fromUnixTime(date)), 'MMM dd, yyyy');