import {Request, Response, Router} from 'express';
import controller from './controller';

export const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const country = res.locals.user.country;
  const result = await controller.createPost(req, country);

  res.status(200).json(result);
});
router.post('/:id/like', async (req: Request, res: Response) => {
  await controller.likePost(req.params.id);
  res.status(204).send();
});



router.get('/:communityId/feed', async (req: Request, res: Response) => {
  const requesterCountry = res.locals.user.country;
  console.log(res.locals.user);
  const result = await controller.feed(req.params.communityId, requesterCountry);

  res.status(200).json(result);
});