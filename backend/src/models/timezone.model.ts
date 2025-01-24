import { Document, model, Schema } from "mongoose";

export interface ITimezone extends Document {
    abbreviation: string;
    name: string;
    offset: Number;
}

const timezoneSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    abbreviation: {
        type: String,
        required: true
    },
    offset: {
        type: Number,
        required: true
    }
})

export default model<ITimezone>('Timezone', timezoneSchema)