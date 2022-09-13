import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

export const db = new Sequelize(
    <string>process.env.DATABASE_NAME,
    <string>process.env.DATABASE_USER,
    process.env.DATABASE_PASS ,
    {
        dialect: "mysql",
        host: process.env.DATABASE_HOST,
        port: parseInt(<string>process.env.DATABASE_PORT, 10) || 3306,
    }
);
