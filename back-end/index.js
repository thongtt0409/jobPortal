import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectDB } from './src/config-database/connectDB.js';
import 'express-async-errors';
import { errorHandler } from './src/middlewares/errorHandler.js';
import userRoute from './src/routes/user.route.js';

const app = express();
dotenv.config();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: 'http//localhost:5173',
  credentials: true,
};
app.use(cors(corsOptions));

//routes
app.use('/api/user/', userRoute);

connectDB();

//handErrorMiddleware
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
