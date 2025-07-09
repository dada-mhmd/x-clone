import arcjet, { tokenBucket, shield, detectBot } from '@arcjet/node';
import { ENV } from './env.js';

// initialize arcjet with security rules
export const aj = arcjet({
  key: ENV.ARCJET_KEY,
  characteristics: ['ip.src'],
  rules: [
    shield({ mode: 'LIVE' }),

    // bot detection
    detectBot({
      mode: 'LIVE',
      allow: ['CATEGORY:SEARCH_ENGINE'],
    }),
    // rate limit
    tokenBucket({
      mode: 'LIVE',
      refillRate: 10,
      interval: 10,
      capacity: 15,
    }),
  ],
});
