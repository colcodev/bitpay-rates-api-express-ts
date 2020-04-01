import express, { Application } from 'express';
import morgan from 'morgan';

import authRoutes from './routes/auth';
import bitpayRoutes from './routes/bitpay';

const app: Application = express();

// settings
app.set('port', 3000);

// middleawares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/bitpay', bitpayRoutes);

export default app;
