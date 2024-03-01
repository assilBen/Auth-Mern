import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
connectDB();

app.use('/api/users/',userRoutes);
app.get('/',(req, res)=>res.send('server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=> console.log("Server start on port ",{port}));