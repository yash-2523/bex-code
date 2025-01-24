"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const timezone_route_1 = __importDefault(require("./timezone.route"));
const timeslot_route_1 = __importDefault(require("./timeslot.route"));
const router = express_1.default.Router();
router.use('/timezones', timezone_route_1.default);
router.use('/timeslots', timeslot_route_1.default);
exports.default = router;
