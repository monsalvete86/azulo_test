// import { AirportEntry, NewAirportEntry } from '../types';
import AirportModel from '../database/models/airport.model';
import { Request, Response } from 'express';

export interface AirportInterface {
    airport_id: number;
    priority: number; 
}

class AirportServices {
    async findAll(_req: Request, res: Response) {
        const airports = await AirportModel.findAll();

        return airports.length > 0 
            ? res.status(200).json(airports) 
            : res.status(204).send();
    }
    
    async changeOperator(req: Request, res: Response) {
        const { airport_id, operator_id } = req.body;
        try {
            let airport = await AirportModel.findByPk(airport_id);
            airport?.set('airport_operator_id', operator_id).save();
            return airport 
            ? res.status(200).json(airport) 
            : res.status(204).send();
            
        } catch (e: unknown) {
            if(e instanceof Error) {
                return res.status(400).send(e.message);   
            }
            return false; 
        }
    }
    
    async changePriority(req: Request, res: Response) {
        const { airports } = req.body;
        //const airports:AirportInterface[] = req.body.airports;
        let dataAarray:any[] = [];
        
        try {
            
            Object.keys(airports).map( async (key) =>{
                let airportToUpdate = await AirportModel.findByPk(airports[Number(key)].airport_id);
                airportToUpdate?.set('priority_order', airports[Number(key)].priority).save();
                dataAarray.push(airportToUpdate);
            });

            return dataAarray.length > 0 
            ? res.status(200).json(dataAarray) 
            : res.status(204).send();
            
        } catch (e: unknown) {
            if(e instanceof Error) {
                return res.status(400).send(e.message);   
            }
            return false; 
        }
    }
}

export default new AirportServices();
