import { BACKEND_URL } from "@/constant/urls"
import { ITimeslot } from "@/types/timeslot";
import axios from "axios"

interface TimeslotResponse {
    success: boolean;
    message: string;
    data: ITimeslot[] | null;
    error: any;
}

export const getTimeslots = async () => {
    return (await axios.get<TimeslotResponse>(`${BACKEND_URL}/timeslots`)).data;
}