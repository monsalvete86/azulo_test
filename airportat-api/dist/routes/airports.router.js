"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const airport_services_1 = __importDefault(require("../services/airport.services"));
// import { NewAirportEntry } from '../types';
// import toNewAirportEntry from '../utils';
// import faker from 'faker';
const router = express_1.default.Router();
router.get('/', airport_services_1.default.findAll);
router.post('/change_order', airport_services_1.default.changeOperator);
router.post('/change_priority', airport_services_1.default.changePriority);
exports.default = router;
