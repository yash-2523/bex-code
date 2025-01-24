"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeslotModel = exports.timezoneModel = void 0;
const timezone_model_1 = __importDefault(require("./timezone.model"));
exports.timezoneModel = timezone_model_1.default;
const timeslot_model_1 = __importDefault(require("./timeslot.model"));
exports.timeslotModel = timeslot_model_1.default;
