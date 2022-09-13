"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const location_model_1 = __importDefault(require("./location.model"));
const airportOperator_model_1 = __importDefault(require("./airportOperator.model"));
const AirportModel = db_1.db.define("airport", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    airport_code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    airport_operator_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: airportOperator_model_1.default,
            key: 'id',
        }
    },
    location_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: location_model_1.default,
            key: 'id',
        }
    },
    priority_order: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: false
});
AirportModel.belongsTo(location_model_1.default, {
    foreignKey: 'location_id'
});
AirportModel.belongsTo(airportOperator_model_1.default, {
    foreignKey: 'airport_operator_id'
});
exports.default = AirportModel;
