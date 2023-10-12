import "reflect-metadata"
import express from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import userRoutes from "./routes/user.route";
import trailerRoutes from './routes/trailer.route';
import cityRoutes from './routes/city.route';
import driverRoutes from './routes/driver.route';
import vehicleRoutes from './routes/vehicle.route';
import tripRoutes from './routes/trip.route';
import profileRoutes from "./routes/profile.route";
import companyRoutes from "./routes/company.route";
import detailTripRoutes from "./routes/detailTrip.route";
import detailTypeRoutes from "./routes/detailType.route";
import expenseRoutes from "./routes/expenses.route";
import factoryRoutes from "./routes/factory.route";




import { AppDataSource } from "./db/db";
import { docOptions } from "./utils/swagger";

(async function main() {

  try {

    const app = express();

    await AppDataSource.initialize();
    console.log("Database is connected !");

    //settings  
    app.set('port', process.env.PORT || 3000);

    // Middlewares
    app.use(cors());
    app.use(express.json());
    app.use(morgan('dev'));

    const specs = swaggerJsDoc(docOptions);

    // routes
    app.get('/api/', (req, res) => {
      return res.json(`APP IS RUNNING ON PORT ${app.get('port')}`)
    });

    app.use('/api', userRoutes);
    app.use('/api', factoryRoutes);
    app.use('/api', trailerRoutes);
    app.use('/api', cityRoutes);
    app.use('/api', driverRoutes);
    app.use('/api', vehicleRoutes);
    app.use('/api', tripRoutes);
    app.use('/api', profileRoutes);
    app.use('/api', companyRoutes);
    app.use('/api', detailTripRoutes);
    app.use('/api', detailTypeRoutes);
    app.use('/api', expenseRoutes);

    app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(specs));


    app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));

  } catch (error) {
    console.log('Error', error);
  }


})();