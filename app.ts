import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import { Config, logger } from './utils';
import issueController from './controllers/issue';

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/issues', issueController);

export const ConnectToDB = async () => {
  try {
    await mongoose.connect(Config.MONGODB_URI);
    logger.info('Connected successfully to MongoDB.');
  } catch (error) {
    logger.error('Error: ', (error as any).message);
  }
};

export default app;
