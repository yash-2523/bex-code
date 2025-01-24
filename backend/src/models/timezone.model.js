"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const timezoneSchema = new mongoose_1.Schema({
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
});
exports.default = (0, mongoose_1.model)('Timezone', timezoneSchema);
