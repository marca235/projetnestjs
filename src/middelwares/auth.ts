import { Request, Response, NextFunction } from 'express';
import session from 'express-session';

export function localData(req: any, res: Response, next: NextFunction) {
  res.locals.connected = req.session.connected;
  res.locals.user = req.session.user;
  next();

  
}