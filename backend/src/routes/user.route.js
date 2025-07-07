import express from 'express';
import {
  followUser,
  getCurrentUser,
  getUserProfile,
  syncUser,
  updateProfile,
} from '../controllers/user.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/profile/:username', getUserProfile);

// protected routes
router.post('/sync', protect, syncUser);
router.post('/follow/:targetUserId', protect, followUser);
router.get('/me', protect, getCurrentUser);
router.put('/profile', protect, updateProfile);

export default router;
