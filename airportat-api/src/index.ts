import express from 'express';
import dotenv from 'dotenv';
import airportRouter from './routes/airports.router'; 
import { db } from './database/db';

var cors = require('cors')

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT  || 3000;

app.get('/ping', (_req, res) => {
   console.log('pinged here!!');
   res.send('pong'); 
});

app.use('/api/airports', airportRouter);

db.sync();

app.listen(PORT,() => {
    console.log(`runin on port ${PORT}`);
});
