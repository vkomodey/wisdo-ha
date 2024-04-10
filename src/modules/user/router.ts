import { Request, Response, Router } from "express";
import controller from "./controller";

export const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const user = await controller.createUser(req);

  res.status(200).json(user);
});