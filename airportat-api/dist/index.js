"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const airports_router_1 = __importDefault(require("./routes/airports.router"));
const db_1 = require("./database/db");
var cors = require('cors');
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
const PORT = process.env.PORT || 3000;
app.get('/ping', (_req, res) => {
    console.log('pinged here!!');
    res.send('pong');
});
app.use('/api/airports', airports_router_1.default);
db_1.db.sync();
app.listen(PORT, () => {
    console.log(`runin on port ${PORT}`);
});
