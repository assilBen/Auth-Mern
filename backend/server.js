import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use('/api/users/',userRoutes);
app.get('/',(req, res)=>res.send('server is ready'));

app.listen(port, ()=> console.log("Server start on port ",{port}));