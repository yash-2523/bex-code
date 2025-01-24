"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const timeslotSchema = new mongoose_1.Schema({
    time: {
        type: Date,
        required: true
    }
});
exports.default = (0, mongoose_1.model)('Timeslot', timeslotSchema);
