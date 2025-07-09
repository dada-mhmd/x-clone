import express from 'express';
import { protect } from '../middlewares/auth.middleware.js';
import {
  deleteNotification,
  getNotifications,
} from '../controllers/notification.controller.js';

const router = express.Router();

router.get('/', protect, getNotifications);
router.delete('/notificationId', protect, deleteNotification);

export default router;
