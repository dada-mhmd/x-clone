import express from 'express';
import { protect } from '../middlewares/auth.middleware.js';
import {
  createComment,
  deleteComment,
  getComments,
} from '../controllers/comment.controller.js';

const router = express.Router();

router.get('/post/postId', getComments);

// protected
router.post('/post/:postId', protect, createComment);
router.delete('/commentId', protect, deleteComment);

export default router;
