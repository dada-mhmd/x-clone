import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express';

import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';

// routes
import userRoutes from './routes/user.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import notificationRoutes from './routes/notifications.route.js';
import { arcjetMiddleware } from './middlewares/arcjet.middleware.js';

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use(clerkMiddleware());
app.use(arcjetMiddleware);

// test route
app.get('/', (req, res) => {
  res.send('hello from api');
});

// routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/notifications', notificationRoutes);

// error handling middlewares
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: err.message || 'Something went wrong' });
});

const startServer = async () => {
  try {
    await connectDB();

    if (ENV.NODE_ENV !== 'production') {
      app.listen(ENV.PORT, () => {
        console.log(`Server is running on port`, ENV.PORT);
      });
    }
  } catch (error) {
    console.log('Error starting server', error.message);
    process.exit(1);
  }
};

startServer();

export default app;
