import { Document, model, Schema } from "mongoose";


interface ITimeslot extends Document {
    time: string;
}

const timeslotSchema = new Schema({
    time: {
        type: Date,
        required: true
    }
})

export default model<ITimeslot>('Timeslot', timeslotSchema)