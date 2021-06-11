import connectDB from './config/db.js';
import employeeRoute from './routes/employeeRoute.js';
import skillRoute from './routes/skillRoute.js';
import express from 'express';
import dotenv  from 'dotenv';
import cors from 'cors';

connectDB();

dotenv.config();

const app = express();

app.use(cors());
app.use('/api/employees', employeeRoute);
app.use('/api/skills', skillRoute);


const PORT = process.env.PORT || 5000;

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`));