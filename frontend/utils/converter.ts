import { ITimezone } from "@/types/timezone";
import { ITimeslot } from "@/types/timeslot";

export function TimeConverter(timeslot: ITimeslot | null, timezone: ITimezone | null):string {
    console.log("Time converter")
    if(!timeslot){
        return ""
    }

    if(!timezone){
        return timeslot.time.toString();
    }

    const date = new Date(timeslot.time).getTime()

    const convertedTime = new Date(date + (timezone.offset * 3600000))
    return convertedTime.toISOString()
}