import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";

export default function(req: Request, res: Response, next: NextFunction) {
  res.locals.user = {
    id: 'dummy',
    country: 'US',
  }

  next();
}