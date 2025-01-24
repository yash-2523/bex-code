import { timezoneModel } from "../models"


const getTimezones = async () => {
    return await timezoneModel.find({});
}

export {getTimezones}