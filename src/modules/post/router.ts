import express from 'express';

export const router = express.Router();


router.post('/', () => {});
router.post('/:id/like', () => {});
router.get('/:communityId/feed', () => {});