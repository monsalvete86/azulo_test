import { DataTypes } from 'sequelize';
import { db } from "../db";


const LocationModel = db.define("locations", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    countrty: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    province_or_state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    longitude: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{
    freezeTableName: true,
    timestamps: false
});

export default LocationModel;

