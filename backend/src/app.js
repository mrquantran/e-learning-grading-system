/* eslint-disable import/extensions */
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import { corsUrl, environment, port } from './config.js';
import routes from './api/routes/index.js';
import errorHandlerMiddleware from './api/middleware/error-handler.js';

dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));
app.use(errorHandlerMiddleware);

// Routes
app.use('/', routes);

/**
 * Any error handler middleware must be added AFTER you define your routes.
 */

app.listen(port, () => console.log(`
🚀 Server ready at: http://localhost:${port}`));
