import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import apiRouter from './routes/router';
import path from 'path';

const app = express();

//General middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Route
app.use('/api', apiRouter);

// static routes
app.get('/assets/favicon.ico', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../assets/favicon.ico'));
});

// Catch all 4048
app.use('/', (req: Request, res: Response) => {
  res.status(404).json(`This is not the page you are looking for ¯\\_(ツ)_/¯`);
});
// Encrypt 2way, read only access, credentials stored on VS Code local Storage

// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  console.log(err.log);
  console.log(err.message);
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

export default app;
