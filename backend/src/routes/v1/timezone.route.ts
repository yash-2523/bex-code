import express from 'express';
import TimezoneController from '../../controllers/timezone.controller';

const router = express.Router()

router.get('/', TimezoneController.getTimezones);

export default router;