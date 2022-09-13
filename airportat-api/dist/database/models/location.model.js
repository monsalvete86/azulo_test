"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const LocationModel = db_1.db.define("locations", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    countrty: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    province_or_state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    longitude: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    latitude: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = LocationModel;
