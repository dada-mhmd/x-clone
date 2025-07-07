import express from 'express';
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  getUserPosts,
  likePost,
} from '../controllers/post.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import upload from '../middlewares/upload.middleware.js';

const router = express.Router();

router.get('/posts', getPosts);
router.get('/postId', getPost);
router.get('/user/:username', getUserPosts);

// protected
router.post('/', protect, upload.single('image'), createPost);
router.post('/:postId/like', protect, likePost);
router.delete('/postId', protect, deletePost);

export default router;
