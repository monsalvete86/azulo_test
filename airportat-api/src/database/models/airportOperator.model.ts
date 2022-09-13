import { DataTypes } from "sequelize";
import { db } from "../db";

const AirportOperatorModel = db.define("airport_operator", {
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
    
},
{
    freezeTableName: true,
    timestamps: false
});

export default AirportOperatorModel;
