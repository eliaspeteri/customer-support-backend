import { NextFunction, Request, Response } from 'express';
import { logger, validator } from '../utils';

const issueValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validationRule = {
    firstName: 'required|string|min:2',
    lastName: 'required|string|min:2',
    phone: 'required|string',
    email: 'required|string|email',
    description: 'required|string|min:3'
  };

  await validator(req.body, validationRule, {}, (error, status) => {
    if (!status) {
      res.status(412).json({
        success: false,
        message: 'Validation failed',
        data: error
      });
    } else next();
  }).catch((error) => logger.error((error as any).message));
};

export default issueValidationMiddleware;
