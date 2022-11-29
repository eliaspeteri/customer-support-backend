import { Router, Request, Response } from 'express';
import issueValidationMiddleware from '../middleware/validation';
import IssueService from '../services/issues';
import { logger } from '../utils';

const controller: Router = Router();

controller.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    res.json({ success: true, data: await IssueService.getAll() });
  } catch (error) {
    res.status(400).json({ success: false, message: (error as any).message });
    logger.error((error as any).message);
  }
});

controller.post(
  '/',
  issueValidationMiddleware,
  async (req: Request, res: Response): Promise<void> => {
    const { firstName, lastName, email, phone, description } = req.body;

    try {
      const response = await IssueService.saveOne({
        firstName,
        lastName,
        email,
        phone,
        description
      });

      res.status(201).json({ success: true, data: response });
    } catch (error) {
      res.status(412).json({
        success: false,
        message: (error as any).message
      });
    }
  }
);

export default controller;
