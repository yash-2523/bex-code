import { Request, Response } from "express";
import { getTimeslots } from "../services/timeslot.service";

class TimeslotController {
    public static async getTimeslots(req: Request, res: Response): Promise<any> {
        try{

            const timeslots = await getTimeslots();

            return res.status(200).json({
                success: true,
                message: "Timeslot fetched successfully",
                data: timeslots,
                error: null
            })
        }catch(err){
            return res.status(500).json({
                success: false,
                message: "Something went wrong",
                data: null,
                error: err
            })
        }
    }
}

export default TimeslotController;