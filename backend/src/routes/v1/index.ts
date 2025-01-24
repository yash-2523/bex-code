import express from 'express';
import timezonesRoutes from './timezone.route';
import timeslotsRoutes from './timeslot.route';

const router = express.Router()

router.use('/timezones', timezonesRoutes);
router.use('/timeslots', timeslotsRoutes);

export default router;