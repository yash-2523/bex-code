import { BACKEND_URL } from "@/constant/urls"
import { ITimezone } from "@/types/timezone";
import axios from "axios"

interface ITimezonesResponse {
    success: boolean;
    message: string;
    data: null | ITimezone[];
    error: any;
}

export const getTimezones = async () => {
    return (await axios.get<ITimezonesResponse>(`${BACKEND_URL}/timezones`)).data;
}