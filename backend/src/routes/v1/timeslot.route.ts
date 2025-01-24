import express from 'express';
import TimeslotController from '../../controllers/timeslot.controller';

const router = express.Router()

router.get('/', TimeslotController.getTimeslots);

export default router;