import mongoose from "mongoose";
import { timeslotModel, timezoneModel } from "../models";
import { ITimezone } from "../models/timezone.model";


const InitDB = async () => {
    try{
        let uri = process.env.MONGO_URI || "";
        await mongoose.connect(uri)

        console.log("Db connected")
    }catch(err){
        console.log("DB connection error", err)
    }
}

export default InitDB;