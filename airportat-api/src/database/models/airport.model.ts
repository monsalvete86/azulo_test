import { DataTypes } from "sequelize";
import { db } from "../db";
import LocationModel from "./location.model";
import AirportOperatorModel from './airportOperator.model';

const AirportModel = db.define("airport", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    airport_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    airport_operator_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: AirportOperatorModel,
            key: 'id', 
        }
    },
    location_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: LocationModel,
            key: 'id', 
        }
    },
    priority_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    
},
{
    freezeTableName: true,
    timestamps: false
});

AirportModel.belongsTo(LocationModel, {
    foreignKey: 'location_id'
});

AirportModel.belongsTo(AirportOperatorModel, {
    foreignKey: 'airport_operator_id'
});

export default AirportModel;

