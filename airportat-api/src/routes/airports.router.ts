import expres from 'express';
import AirportServices from '../services/airport.services';
// import { NewAirportEntry } from '../types';
// import toNewAirportEntry from '../utils';
// import faker from 'faker';


const router = expres.Router();

router.get('/', AirportServices.findAll);
router.post('/change_order', AirportServices.changeOperator);
router.post('/change_priority', AirportServices.changePriority);

export default router;