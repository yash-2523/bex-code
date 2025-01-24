import { timeslotModel, timezoneModel } from "../models"


const getTimeslots = async () => {
    return await timeslotModel.find({});
}

export {getTimeslots}