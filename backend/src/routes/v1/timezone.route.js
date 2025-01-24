"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const timezone_controller_1 = __importDefault(require("../../controllers/timezone.controller"));
const router = express_1.default.Router();
router.get('/', timezone_controller_1.default.getTimezones);
exports.default = router;
