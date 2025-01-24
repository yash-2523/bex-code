import { Request, Response } from "express";
import { getTimezones } from "../services/timezone.service";

class TimezoneController {
    public static async getTimezones(req: Request, res: Response): Promise<any> {
        try{

            const timezones = await getTimezones();

            return res.status(200).json({
                success: true,
                message: "Timezones fetched successfully",
                data: timezones,
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

export default TimezoneController;