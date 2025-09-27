import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';

// Load environment variables
dotenv.config();

// Import routes
import authRoutes from './controllers/auth.controller';
import { ERROR_MESSAGES, HTTP_STATUS } from './constants/error-messages';

const app = express();
const PORT = process.env.PORT || 3002;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: ERROR_MESSAGES.TOO_MANY_REQUESTS,
});
app.use(limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Compression middleware
app.use(compression());

// Logging middleware
app.use(morgan('combined'));

// Routes
app.use('/internal/auth', authRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(HTTP_STATUS.OK).json({ 
    status: 'OK', 
    service: 'Authentication Microservice',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ 
    error: ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
    message: process.env.NODE_ENV === 'development' ? err.message : ERROR_MESSAGES.INTERNAL_SERVER_ERROR
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(HTTP_STATUS.NOT_FOUND).json({ error: ERROR_MESSAGES.NOT_FOUND });
});

app.listen(PORT, () => {
  console.log(`Authentication Microservice running on port ${PORT}`);
  console.log(`Health check available at http://localhost:${PORT}/health`);
});
