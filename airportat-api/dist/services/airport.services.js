"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { AirportEntry, NewAirportEntry } from '../types';
const airport_model_1 = __importDefault(require("../database/models/airport.model"));
class AirportServices {
    findAll(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const airports = yield airport_model_1.default.findAll();
            return airports.length > 0
                ? res.status(200).json(airports)
                : res.status(204).send();
        });
    }
    changeOperator(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { airport_id, operator_id } = req.body;
            try {
                let airport = yield airport_model_1.default.findByPk(airport_id);
                airport === null || airport === void 0 ? void 0 : airport.set('airport_operator_id', operator_id).save();
                return airport
                    ? res.status(200).json(airport)
                    : res.status(204).send();
            }
            catch (e) {
                if (e instanceof Error) {
                    return res.status(400).send(e.message);
                }
                return false;
            }
        });
    }
    changePriority(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { airports } = req.body;
            //const airports:AirportInterface[] = req.body.airports;
            let dataAarray = [];
            try {
                Object.keys(airports).map((key) => __awaiter(this, void 0, void 0, function* () {
                    let airportToUpdate = yield airport_model_1.default.findByPk(airports[Number(key)].airport_id);
                    airportToUpdate === null || airportToUpdate === void 0 ? void 0 : airportToUpdate.set('priority_order', airports[Number(key)].priority).save();
                    dataAarray.push(airportToUpdate);
                }));
                return dataAarray.length > 0
                    ? res.status(200).json(dataAarray)
                    : res.status(204).send();
            }
            catch (e) {
                if (e instanceof Error) {
                    return res.status(400).send(e.message);
                }
                return false;
            }
        });
    }
}
exports.default = new AirportServices();
